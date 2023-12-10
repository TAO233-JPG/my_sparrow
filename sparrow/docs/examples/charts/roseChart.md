# 玫瑰图

玫瑰图由条形图极坐标化生成

## 基本用法

::: demo <i>see see code</i>

::: code-group

```html
<div id="box"></div>
```

```JavaScript

const chart = sp.plot({
  type: "interval",
  data: [
    { name: "Sports", counts: 15 },
    { name: "Strategy", counts: 27 },
    { name: "Action", counts: 10 },
    { name: "Shooter", counts: 35 },
    { name: "Other", counts: 19 },
  ],
  coordinates: [{ type: "polar" }],
  guides: { y: { display: false } },
  encodings: {
    x: "name",
    y: "counts",
  },
});

document.querySelector("#box").appendChild(chart);
```

:::

## 转置

::: demo <i>see see code</i>

::: code-group

```html
<div id="box"></div>
```

```JavaScript

const chart = sp.plot({
  type: "interval",
  data: [
    { name: "Sports", counts: 19 },
    { name: "Strategy", counts: 34 },
    { name: "Action", counts: 37 },
    { name: "Shooter", counts: 16 },
    { name: "Other", counts: 17 },
  ],
  coordinates: [{ type: "transpose" },{ type: "polar" }],
  encodings: {
    x: "name",
    y: "counts",
    fill:"name"
  },
});

document.querySelector("#box").appendChild(chart);
```

:::
