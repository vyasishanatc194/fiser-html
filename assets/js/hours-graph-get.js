Highcharts.chart("hours-graph", {
  chart: {
    type: "column",
  },

  title: {
    text: "",
  },

  xAxis: {
    categories: [
      "06:00 AM",
      "08:00 AM",
      "10:00 AM",
      "12:00 AM",
      "02:00 PM",
      "04:00 PM",
      "06:00 PM",
      "08:00 PM",
    ],
  },

  yAxis: {
    allowDecimals: false,
    min: 0,
    title: {
      text: "",
    },
  },

  colors: ["#49BDCC", "#4851B4"],

  tooltip: {
    formatter: function () {
      return (
        "<b>" +
        this.x +
        "</b><br/>" +
        this.series.name +
        ": " +
        this.y +
        "<br/>" +
        "Total: " +
        this.point.stackTotal
      );
    },
  },

  plotOptions: {
    column: {
      stacking: "normal",
      borderRadiusTopLeft: 15,
      borderRadiusTopRight: 15,
    },
  },

  series: [
    {
      name: "Normal Time",
      data: [5, 3, 5, 4, 7, 5, 4, 7],
      stack: "male",
    },
    {
      name: "Busiest Hours",
      data: [5, 7, 5, 6, 3, 5, 6, 3],
      stack: "male",
    },
  ],
});
