# 视图

通过组合视图形成复杂的图表

## Layer 视图

::: demo <i>see see code</i>

::: code-group

```html
<div id="box"></div>
```


```JavaScript

const chart = sp.plot({
  type: "layer",
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
  encodings: {
    x: "year",
    y: "value",
    stroke: "group",
    fill: "group",
  },

  children:[
    {type: "line"},
    {type: "point"},
  ]
});

document.querySelector("#box").appendChild(chart);
```

:::


## Flex 视图

类型为 `row` `col`

::: demo <i>see see code</i>

::: code-group

```html
<div id="box"></div>
```


```JavaScript

const chart = sp.plot({
  type: "row",
  children:[
    {
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
      paddingRight: 0,
    },
    {
      type: "interval",
      data: [
        { name: "Sports", counts: 15 },
        { name: "Strategy", counts: 45 },
        { name: "Action", counts: 10 },
        { name: "Shooter", counts: 50 },
        { name: "Other", counts: 19 },
      ],
      coordinates: [{type: "transpose"}],
      encodings: {
        x: "name",
        y: "counts",
      },
      paddingLeft: 10,
    }
  ]
});

document.querySelector("#box").appendChild(chart);
```

:::


::: demo <i>see see code</i>

::: code-group

```html
<div id="box"></div>
```


```JavaScript

const chart = sp.plot({
  type: "col",
  children:[
    {
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
      paddingTop: 10,
      paddingBottom: 0,
      paddingLeft:60,
    },
    {
      type: "interval",
      data: [
        { name: "Sports", counts: 15 },
        { name: "Strategy", counts: 45 },
        { name: "Action", counts: 10 },
        { name: "Shooter", counts: 50 },
        { name: "Other", counts: 19 },
      ],
      coordinates: [{type: "transpose"}],
      encodings: {
        x: "name",
        y: "counts",
      },
      paddingTop: 20,
      paddingBottom: 0,
      paddingLeft:60,
    }
  ]
});

document.querySelector("#box").appendChild(chart);
```

:::