# 饼图

饼图可以由条形图经数据处理和坐标变换后形成

- 数据处理
  - 先将数据进行
  - 进行堆叠
- 坐标变换
  - 转置
  - 极坐标化

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
    { name: "Sports", counts: 19 },
    { name: "Strategy", counts: 34 },
    { name: "Action", counts: 37 },
    { name: "Shooter", counts: 16 },
    { name: "Other", counts: 17 },
  ],
   transforms: [
    (data) => {
      const sum = data.reduce((total, d) => total + d.counts, 0);
      return data.map(({ name, counts }) => ({ name, counts: counts / sum }));
    },
  ],
  statistics: [{ type: "stackY" }],
  scales: {
    x: { padding: 0 },
  },
  coordinates: [{ type: "transpose" },{ type: "polar" }],
  encodings: {
    y: "counts",
    fill:"name",
  },
});

document.querySelector("#box").appendChild(chart);
```

:::

## 圆环样式

- 可通过 `innerRadius` 控制内圆大小, 默认为 `0`
- 可通过 `startAngle` 控制的起始位置, 默认为 `-Math.PI / 2,`
- 可通过 `endAngle` 控制的结束位置, 默认为 `(Math.PI * 3)/2`

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
   transforms: [
    (data) => {
      const sum = data.reduce((total, d) => total + d.counts, 0);
      return data.map(({ name, counts }) => ({ name, counts: counts / sum }));
    },
  ],
  statistics: [{ type: "stackY" }],
  scales: {
    x: { padding: 0 },
  },
  coordinates: [
    { type: "transpose" },
    { 
      type: "polar", 
      innerRadius:0.4,
      startAngle:Math.PI/2
    }
  ],
  encodings: {
    y: "counts",
    fill:"name",
  },
});

document.querySelector("#box").appendChild(chart);
```

:::
