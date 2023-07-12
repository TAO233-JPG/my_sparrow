// 该节点主要用于将区域划分为子区域，
// 不同的子区域拥有不同的视图。
// 该节点节点又分为两种类型：row 和 col。

export function computeFlexViews(box, node) {
  const { type, children, flex = children.map(() => 1), padding = 40 } = node;
  const [mainStart, mainSize, crossSize, crossStart] =
    type === "col"
      ? ["y", "height", "width", "x"]
      : ["x", "width", "height", "y"];

  const sum = flex.reduce((total, value) => total + value);
  const totalSize = box[mainSize] - padding * (children.length - 1);
  const sizes = flex.map((value) => totalSize * (value / sum)); // 分割的每部分的区域大小

  const childrenViews = [];
  for (
    let next = box[mainStart], i = 0;
    i < sizes.length;
    next += sizes[i] + padding, i += 1
  ) {
    childrenViews.push({
      [mainStart]: next,
      [mainSize]: sizes[i],
      [crossStart]: box[crossStart],
      [crossSize]: box[crossSize],
    });
  }

  return childrenViews;
}
