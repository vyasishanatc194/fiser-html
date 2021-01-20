Highcharts.chart(
  "gauge-graph",
  {
    chart: {
      type: "gauge",
      plotBackgroundColor: null,
      plotBackgroundImage: null,
      plotBorderWidth: 0,
      plotShadow: false,
    },

    title: {
      text: "",
    },

    pane: {
      startAngle: -150,
      endAngle: 150,
      background: [
        {
          backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, "#FFF"],
              [1, "#fff"],
            ],
          },
          borderWidth: 0,
          outerRadius: "109%",
        },
        {
          backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, "#fff"],
              [1, "#FFF"],
            ],
          },
          borderWidth: 1,
          outerRadius: "107%",
        },
        {
          // default background
        },
        {
          backgroundColor: "#fff",
          borderWidth: 0,
          outerRadius: "105%",
          innerRadius: "103%",
        },
      ],
    },

    // the value axis
    yAxis: {
      min: 0,
      max: 100,

      minorTickInterval: "auto",
      minorTickWidth: 1,
      minorTickLength: 10,
      minorTickPosition: "inside",
      minorTickColor: "#666",

      tickPixelInterval: 30,
      tickWidth: 1,
      tickPosition: "inside",
      tickLength: 10,
      tickColor: "#666",
      labels: {
        step: 2,
        rotation: "auto",
      },
      title: {
        text: "",
      },
      plotBands: [
        {
          from: 0,
          to: 20,
          color: "#F63B3B", // color1
        },
        {
          from: 20,
          to: 80,
          color: "#5771E3", // color2
        },
        {
          from: 80,
          to: 100,
          color: "#34C38F", // color3
        },
      ],
    },

    series: [
      {
        name: "Speed",
        data: [89],
        tooltip: {
          valueSuffix: " km/h",
        },
      },
    ],
  },
  // Add some life
  function (chart) {
    if (!chart.renderer.forExport) {
      setInterval(function () {
        var point = chart.series[0].points[0],
          newVal,
          inc = Math.round((Math.random() - 0.5) * 10);

        newVal = point.y + inc;
        if (newVal < 0 || newVal > 100) {
          newVal = point.y - inc;
        }

        point.update(newVal);
      }, 3000);
    }
  }
);
