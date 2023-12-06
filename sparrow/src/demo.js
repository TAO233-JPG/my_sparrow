import * as sp from "./plot";

// (async () => {
//   const response = await fetch(
//     "https://gw.alipayobjects.com/os/antvdemo/assets/data/bubble.json"
//   );
//   const data = (await response.json()).slice(0, 10);
//   console.log("data", data);
//   const a = sp.plot({
//     type: "point",
//     data,
//     encodings: {
//       x: "GDP",
//       y: "LifeExpectancy",
//       r: "Population",
//       fill: "continent",
//       stroke: "continent",
//     },
//     scales: {
//       y: { domain: [60, 85], label: "Life" },
//       r: {
//         range: [4, 45],
//         interpolate: (t, a, b) => Math.sqrt(a * a * (1 - t) + b * b * t),
//       },
//     },
//     guides: {
//       x: { grid: true, type: "axisX" }, // The default type is already axisX.
//       y: { grid: true },
//     },
//     styles: {
//       fillOpacity: 0.8,
//     },
//   });

//   document.body.appendChild(a);
// })();

// const i = sp.plot({
//   type: "interval",
//   data: [
//     { city: "London", month: "Jan.", rainfall: 18.9 },
//     { city: "London", month: "Feb.", rainfall: 28.8 },
//     { city: "London", month: "Mar.", rainfall: 39.3 },
//     { city: "London", month: "Apr.", rainfall: 81.4 },
//     { city: "London", month: "May", rainfall: 47 },
//     { city: "London", month: "Jun.", rainfall: 20.3 },
//     { city: "London", month: "Jul.", rainfall: 24 },
//     { city: "London", month: "Aug.", rainfall: 35.6 },
//     { city: "Berlin", month: "Jan.", rainfall: 12.4 },
//     { city: "Berlin", month: "Feb.", rainfall: 23.2 },
//     { city: "Berlin", month: "Mar.", rainfall: 34.5 },
//     { city: "Berlin", month: "Apr.", rainfall: 99.7 },
//     { city: "Berlin", month: "May", rainfall: 52.6 },
//     { city: "Berlin", month: "Jun.", rainfall: 35.5 },
//     { city: "Berlin", month: "Jul.", rainfall: 37.4 },
//     { city: "Berlin", month: "Aug.", rainfall: 42.4 },
//   ],
//   paddingLeft: 60,
//   guides: {
//     x: { label: false },
//     // color: { display: false },
//   },
//   statistics: [{ type: "stackY" }, { type: "normalizeY" }],
//   // coordinates: [{ type: "transpose" }, { type: "polar" }],
//   encodings: {
//     x: "month",
//     y: "rainfall",
//     fill: "city",
//   },
// });

// document.body.appendChild(i);
// (async () => {
//   const response = await fetch(
//     "https://gw.alipayobjects.com/os/antvdemo/assets/data/bubble.json"
//   );
//   const data = (await response.json()).slice(0, 6);
//   console.log("Dara", data);
//   const chart = sp.plot({
//     type: "point",
//     data,
//     // 比例尺的配置
//     scales: {
//       y: { domain: [65, 85], label: "Life" }, // 比例尺y，处理视觉属性 y 的数据
//       r: {
//         // 比例尺r，处理视觉属性 r 的数据
//         range: [4, 45],
//         interpolate: (t, a, b) => Math.sqrt(a * a * (1 - t) + b * b * t),
//       },
//     },
//     coordinates: [{ type: "polar", endAngle: Math.PI, innerRadius: 0.02 }],
//     guides: {
//       x: { grid: true }, // The default type is already axisX.
//       y: { grid: true, type: "axisY" },
//     },
//     encodings: {
//       x: "GDP", // 数据的x属性，映射为图形元素point的视觉属性:x坐标
//       y: "LifeExpectancy", // 数据的LifeExpectancy属性，映射为图形元素point的视觉属性:y坐标
//       r: "Population", // 数据的Population属性，映射为图形元素point的视觉属性:r半径
//       fill: "continent", // 数据的continent属性，映射为图形元素point的视觉属性：fill 填充颜色
//       stroke: "continent", // 数据的continent属性，映射为图形元素point的视觉属性：stroke 边框颜色
//     },
//     styles: {
//       fillOpacity: 0.18,
//     },
//   });

//   document.body.appendChild(chart);
// })();

// (async () => {
//   const response = await fetch(
//     "https://gw.alipayobjects.com/os/antvdemo/assets/data/bubble.json"
//   );
//   const data = (await response.json()).slice(0, 6);
//   console.log("Dara", data);
//   const chart = sp.plot({
//     type: "point",
//     data,
//     // 比例尺的配置
//     scales: {
//       y: { domain: [65, 85], label: "Life" }, // 比例尺y，处理视觉属性 y 的数据
//       r: {
//         // 比例尺r，处理视觉属性 r 的数据
//         range: [4, 45],
//         interpolate: (t, a, b) => Math.sqrt(a * a * (1 - t) + b * b * t),
//       },
//     },
//     guides: {
//       x: { grid: true }, // The default type is already axisX.
//       y: { grid: true, type: "axisY" },
//     },
//     encodings: {
//       x: "GDP", // 数据的x属性，映射为图形元素point的视觉属性:x坐标
//       y: "LifeExpectancy", // 数据的LifeExpectancy属性，映射为图形元素point的视觉属性:y坐标
//       r: "Population", // 数据的Population属性，映射为图形元素point的视觉属性:r半径
//       fill: "continent", // 数据的continent属性，映射为图形元素point的视觉属性：fill 填充颜色
//       stroke: "continent", // 数据的continent属性，映射为图形元素point的视觉属性：stroke 边框颜色
//     },
//     styles: {
//       fillOpacity: 0.18,
//     },
//   });

//   document.body.appendChild(chart);
// })();
// const chart = sp.plot({
//   type: "interval",
//   data: [
//     { city: "London", month: "Jan.", rainfall: 18.9 },
//     { city: "London", month: "Feb.", rainfall: 28.8 },
//     { city: "London", month: "Mar.", rainfall: 39.3 },
//     { city: "London", month: "Apr.", rainfall: 81.4 },
//     { city: "London", month: "May", rainfall: 47 },
//     { city: "London", month: "Jun.", rainfall: 20.3 },
//     { city: "London", month: "Jul.", rainfall: 24 },
//     { city: "London", month: "Aug.", rainfall: 35.6 },
//   ],
//   paddingLeft: 60,
//   coordinates: [
//     { type: "transpose" },
//     { type: "polar", endAngle: Math.PI, innerRadius: 0.02 },
//   ],
//   guides: {
//     x: { grid: true },

//     y: { grid: true }, // The default type is already axisY.
//   },
//   encodings: {
//     x: "month",
//     y: "rainfall",
//     fill: "city",
//     z: "city",
//   },
// });

// document.body.appendChild(chart);

(async () => {
  const response = await fetch(
    "https://gw.alipayobjects.com/os/antvdemo/assets/data/scatter.json"
  );
  const data = await response.json();
  const chart2 = sp.plot({
    type: "row",
    data,
    scales: {
      y: { label: "count" },
    },
    padding: 10,
    width: 900,
    tickCount: 16,
    children: [
      {
        type: "rect",
        paddingTop: 30,
        statistics: [{ type: "binX", channel: "y" }],
        encodings: {
          x: "height",
        },
      },
      {
        type: "rect",
        paddingTop: 30,
        statistics: [{ type: "binX", channel: "y" }],
        encodings: {
          x: "weight",
        },
      },
    ],
    styles: {
      fillOpacity: 0.8,
    },
  });
  document.body.appendChild(chart2);
})();
