import MarkdownItContainer from "markdown-it-container";
import MarkdownIt from "markdown-it";

/**
 * 创建 markdown 实例
 *
 * @see markdown-it https://markdown-it.docschina.org
 * @see markdown-it https://juejin.cn/post/6844903688536850440
 */
const markdown = MarkdownIt({
  breaks: true, // 转换段落里的 '\n' 到 <br>
  highlight: true,
});

/**
 * 自定义 md 插件
 *
 * @param { Object } md markdown 实例
 */
export const PluginDemo = (md) => {
  /**
   * 自定义 md 语法
   *
   * 语法为 ::: demo
   */
  md.use(MarkdownItContainer, "demo", {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/);
    },

    render(tokens, idx) {
      if (tokens[idx].nesting === 1) {
        var m = tokens[idx].info.trim().match(/^demo\s+(.*)$/);
        const title = m && m.length > 1 ? m[1] : "查看代码";
        const content =
          tokens[idx + 1].type === "fence" ? tokens[idx + 1].content : "";
        const source = md.utils.escapeHtml(content);
        const contents = collectCodeContent(
          tokens,
          idx + 1,
          tokens[idx].type.replace("open", "close")
        );
        const codes = getCodes(contents);
        const attributes = getAttributes(codes.html.join(" "));
        const { uClassNameMap, uIdMap } = generateUniqueIdAndClass(attributes);
        const htmls = transform(codes.html, (content) => {
          for (let k in uIdMap) {
            content = content.replaceAll(k, uIdMap[k]);
          }
          return content;
        });
        const scripts = transform(codes.script, (content) => {
          content = deleteCommentCodes(content);
          content = content.replaceAll("\"", "'");
          for (let k in uIdMap) {
            content = content.replaceAll("#" + k, "#" + uIdMap[k]);
          }
          return content;
        });
        const vH = htmls.join("")
        
        return `
        <VDemo source="${scripts.join('\n')}"> 
          ${vH} 
          <details class="details custom-block"> 
            <summary>${title}</summary>        
        `;
      }

      return "</details></VDemo>";
    },
  });
};

function collectCodeContent(tokens, idx, closeType) {
  const tagMap = {
    javascript: "script",
    html: "html",
    css: "style",
  };
  const contents = [];
  let curToken = tokens[idx];
  while (curToken && curToken.type !== closeType) {
    const { type, content: code, info } = curToken;
    if (type === "fence") {
      const tag = tagMap[info.toLowerCase()] ?? "html";
      contents.push({ tag, code });
    }

    curToken = tokens[++idx];
  }
  return contents;
}

function getCodes(codeContents) {
  const codes = {
    style: [],
    script: [],
    html: [],
  };

  codeContents.forEach(({ tag, code }) => {
    codes[tag].push(generateCode[tag](code));
  });

  return codes;
}

const generateCode = {
  style(code) {
    return `<style>${code}</style>`;
  },
  script(code, transforms) {
    return `
        ${code}
    `;
  },
  html(code) {
    return `${code}`;
  },
};

const patternSelector = /document\.querySelector\((.+?)\)/g;
function getParameters(selector, pattern) {
  // 用正则表达式匹配 document.querySelector() 中的括号内的内容，并使用 /g 表示全局匹配

  // 在 selector 字符串中搜索匹配结果
  let result = pattern.exec(selector);
  // 定义一个空数组，用于存储所有的参数
  const parameters = [];
  // 使用循环，直到没有更多的匹配结果
  while (result) {
    // 将第一个捕获组，即括号内的内容，添加到数组中
    parameters.push(result[1]);
    // 继续在 selector 字符串中搜索匹配结果
    result = pattern.exec(selector);
  }
  // 返回参数数组
  return parameters;
}

function getAttributes(dom) {
  // 用正则表达式匹配以 < 开头，以 > 结尾的标签，并使用 /g 表示全局匹配
  var pattern = /<[^>]+>/g;
  // 在 dom 字符串中搜索匹配结果
  var result = pattern.exec(dom);
  // 定义一个空对象，用于存储 id 和 class
  var attributes = {};
  // 使用循环，直到没有更多的匹配结果
  while (result) {
    // 获取当前匹配的标签
    var tag = result[0];
    // 使用正则表达式匹配 id 或 class 属性，并使用 /g 表示全局匹配
    // 注意在属性值的引号前添加了一个 ["]，表示匹配双引号或单引号
    var pattern2 = /(id|class)\s*=\s*["'](.+?)["']/g;
    // 在 tag 字符串中搜索匹配结果
    var result2 = pattern2.exec(tag);
    // 使用循环，直到没有更多的匹配结果
    while (result2) {
      // 将第一个捕获组，即属性名，作为对象的键
      var key = result2[1] === "class" ? "className" : result2[1];
      // 将第二个捕获组，即属性值，作为对象的值
      var value = result2[2];
      // 如果对象中已经有这个键，就将值添加到数组中
      if (attributes[key]) {
        attributes[key].push(value);
      }
      // 如果对象中没有这个键，就创建一个新的数组，并将值添加到数组中
      else {
        attributes[key] = [value];
      }
      // 继续在 tag 字符串中搜索匹配结果
      result2 = pattern2.exec(tag);
    }
    // 继续在 dom 字符串中搜索匹配结果
    result = pattern.exec(dom);
  }
  // 返回属性对象
  return attributes;
}

function generateUniqueIdAndClass(attributes) {
  const { id = [], className = [] } = attributes;

  const uIdMap = {};
  const uClassNameMap = {};

  id.forEach((k) => {
    if (!uIdMap[k]) {
      uIdMap[k] = getUniqueHash();
    }
  });
  className.forEach((k) => {
    if (!uClassNameMap[k]) {
      uClassNameMap[k] = getUniqueHash();
    }
  });

  return { uIdMap, uClassNameMap };
}

function getUniqueHash() {
  const k1 = parseInt(Math.random() * 10 ** 6).toString(36);
  const k2 = parseInt(Math.random() * 10 ** 6).toString(16);
  return `u${k1}-${k2}`;
}

function transform(arr, cb) {
  return arr.map(cb);
}

function deleteCommentCodes(content) {
  let regex = /\/\/.*|\/\*[\s\S]*?\*\//g;
  return content.replace(regex, "");
}

