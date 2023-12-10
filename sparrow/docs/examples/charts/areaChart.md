# 面积图

## 基本用法

::: demo <i>see see code</i>

::: code-group

```html
<div id="box"></div>
```

```JavaScript

const chart = sp.plot({
  type: "area",
  data: [
    { year: "2003", value: 468 },
    { year: "2004", value: 130 },
    { year: "2005", value: 900 },
    { year: "2006", value: 409 },
    { year: "2007", value: 170 },
    { year: "2008", value: 356 },
    { year: "2009", value: 982 },
    { year: "2010", value: 204 },
  ],
  encodings: {
    x: "year",
    y: "value",
  },
});

document.querySelector("#box").appendChild(chart);
```

:::

## 堆叠面积图

::: demo <i>see see code</i>

::: code-group

```html
<div id="box"></div>
```

```JavaScript

const chart = sp.plot({
  type: "area",
  data: [
    { year: "2003", value: 468, group:"Apple"},
    { year: "2004", value: 460, group:"Apple"},
    { year: "2005", value: 560, group:"Apple"},
    { year: "2006", value: 589, group:"Apple"},
    { year: "2007", value: 600, group:"Apple"},
    { year: "2008", value: 326, group:"Apple"},
    { year: "2009", value: 282, group:"Apple"},
    { year: "2010", value: 114, group:"Apple"},
    { year: "2003", value: 128, group:"Banana"},
    { year: "2004", value: 230, group:"Banana"},
    { year: "2005", value: 300, group:"Banana"},
    { year: "2006", value: 709, group:"Banana"},
    { year: "2007", value: 720, group:"Banana"},
    { year: "2008", value: 536, group:"Banana"},
    { year: "2009", value: 421, group:"Banana"},
    { year: "2010", value: 341, group:"Banana"},
  ],
  statistics: [{ type: "stackY" }],

  encodings: {
    x: "year",
    y: "value",
    fill: "group",
    stroke: "group",
  },
});

document.querySelector("#box").appendChild(chart);
```

:::

## 雷达图

雷达图可以面积图经极坐标后得到

::: demo <i>see see code</i>

::: code-group

```html
<div id="box"></div>
```

```JavaScript

const chart = sp.plot({
  type: "area",
  data: [
    { year: "2003", value: 468, group:"Apple"},
    { year: "2004", value: 460, group:"Apple"},
    { year: "2005", value: 560, group:"Apple"},
    { year: "2006", value: 589, group:"Apple"},
    { year: "2007", value: 600, group:"Apple"},
    { year: "2008", value: 326, group:"Apple"},
    { year: "2009", value: 282, group:"Apple"},
    { year: "2010", value: 114, group:"Apple"},
    { year: "2003", value: 128, group:"Banana"},
    { year: "2004", value: 230, group:"Banana"},
    { year: "2005", value: 300, group:"Banana"},
    { year: "2006", value: 709, group:"Banana"},
    { year: "2007", value: 720, group:"Banana"},
    { year: "2008", value: 536, group:"Banana"},
    { year: "2009", value: 421, group:"Banana"},
    { year: "2010", value: 341, group:"Banana"},
  ],
  guides:{
    x: {display:true, grid:true},
    y: {display:true, grid:true},
  },
  coordinates:[{type:"polar"}],
  encodings: {
    x: "year",
    y: "value",
    fill: "group",
    z: "group",
  },

  styles:{
    fillOpacity: "0.3",
  },
});

document.querySelector("#box").appendChild(chart);
```

:::
