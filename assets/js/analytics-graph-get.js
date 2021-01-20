Highcharts.chart("container4", {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "variablepie",
  },
  title: {
    text: " ",
  },
  tooltip: {
    pointFormat: "<b>{point.percentage:.1f}%</b>",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: true,
      },
      showInLegend: false,
    },
  },
  colors: ["#556FE6", "#34C38F", "#F46A6A"],
  series: [
    {
      minPointSize: 10,
      innerSize: "70%",
      zMin: 0,
      name: "countries",
      data: [
        {
          name: "46.7%",
          y: 467,
          z: 30,
          descriptiveTooltip: "Descriptive paragraph of context",
        },
        {
          name: "31.7%",
          y: 317,
          z: 30,
        },
        {
          name: "21.7%",
          y: 217,
          z: 30,
        },
      ],
    },
  ],
});
