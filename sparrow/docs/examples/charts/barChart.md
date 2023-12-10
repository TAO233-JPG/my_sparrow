# 条形图

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
    { name: "Strategy", counts: 45 },
    { name: "Action", counts: 10 },
    { name: "Shooter", counts: 50 },
    { name: "Other", counts: 19 },
  ],
  encodings: {
    x: "name",
    y: "counts",
  },
});

document.querySelector("#box").appendChild(chart);
```

:::


## 分组

::: demo <i>see see code</i>

::: code-group

```html
<div id="box"></div>
```

```JavaScript

const chart = sp.plot({
  type: "interval",
    data: [
    { name: "Sports", counts: 15 , group:"a"},
    { name: "Strategy", counts: 45, group:"a" },
    { name: "Action", counts: 10, group:"a" },
    { name: "Shooter", counts: 50, group:"a" },
    { name: "Other", counts: 19, group:"a" },
    { name: "Sports", counts: 5 , group:"b"},
    { name: "Strategy", counts: 15, group:"b" },
    { name: "Action", counts: 16, group:"b" },
    { name: "Shooter", counts: 30, group:"b" },
    { name: "Other", counts: 29, group:"b" },
  ],
  encodings: {
    x: "name",
    y: "counts",
    z:"group",
    fill:"group",
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
    { name: "Sports", counts: 15 },
    { name: "Strategy", counts: 45 },
    { name: "Action", counts: 10 },
    { name: "Shooter", counts: 50 },
    { name: "Other", counts: 19 },
  ],
  padding: 10,
  coordinates:[{type:"transpose"}],
  encodings: {
    x: "name",
    y: "counts",
  },
});

document.querySelector("#box").appendChild(chart);
```

:::


## 颜色

::: demo <i>see see code</i>

::: code-group

```html
<div id="box"></div>
```

```JavaScript

const chart = sp.plot({
  type: "interval",
  data: [
    { name: "Sports", counts: 15 , color:"#345897"},
    { name: "Strategy", counts: 45, color:"#aab657" },
    { name: "Action", counts: 10, color:"#391fff" },
    { name: "Shooter", counts: 50, color:"#def123" },
    { name: "Other", counts: 19, color:"#123d1f" },

  ],
  encodings: {
    x: "name",
    y: "counts",
    fill:"color",
  },
  guides:{
    color: { display: false },
  }
});

document.querySelector("#box").appendChild(chart);
```

:::
