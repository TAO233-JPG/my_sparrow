# 辅助组件

默认情况下会展示 X 坐标轴 和 Y 坐标轴
不会展示网格

## X 坐标轴

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
    { name: "Strategy", counts: 45 },
    { name: "Action", counts: 10 },
    { name: "Shooter", counts: 50 },
    { name: "Other", counts: 19 },
  ],
  guides:{
    x: {display:true},
    y: {display:false},
  },
  encodings: {
    x: "name",
    y: "counts",
  },
});

document.querySelector("#box").appendChild(chart);
```

:::

## Y 坐标轴

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
    { name: "Strategy", counts: 45 },
    { name: "Action", counts: 10 },
    { name: "Shooter", counts: 50 },
    { name: "Other", counts: 19 },
  ],
  guides:{
    x: {display:false},
    y: {display:true, grid:true},
  },
  encodings: {
    x: "name",
    y: "counts",
  },
});

document.querySelector("#box").appendChild(chart);
```

:::

## 网格

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
    { name: "Strategy", counts: 45 },
    { name: "Action", counts: 10 },
    { name: "Shooter", counts: 50 },
    { name: "Other", counts: 19 },
  ],
  guides:{
    x: {display:true, grid: true},
    y: {display:true, grid: true},
  },
  encodings: {
    x: "name",
    y: "counts",
  },
});

document.querySelector("#box").appendChild(chart);
```

:::



## 图例

图例会在使用几何元素的颜色属性时出现

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
    { name: "Strategy", counts: 45 },
    { name: "Action", counts: 10 },
    { name: "Shooter", counts: 50 },
    { name: "Other", counts: 19 },
  ],
  guides:{
    x: {display:true, grid: true},
    y: {display:true, grid: true},
  },
  encodings: {
    x: "name",
    y: "counts",
    fill: 'name',
  },
});

document.querySelector("#box").appendChild(chart);
```

:::
