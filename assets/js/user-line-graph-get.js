let draw = Chart.controllers.line.prototype.draw;
Chart.controllers.line = Chart.controllers.line.extend({
  draw: function () {
    draw.apply(this, arguments);
    let ctx = this.chart.chart.ctx;
    let _stroke = ctx.stroke;
    ctx.stroke = function () {
      ctx.save();
      ctx.shadowColor = "#556fe673";
      ctx.shadowBlur = 15;
      ctx.shadowOffsetX = 5;
      ctx.shadowOffsetY = 10;
      _stroke.apply(this, arguments);
      ctx.restore();
    };
  },
});

var ctx = document.getElementById("myChart-user").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line", // also try bar or other graph types

  // The data for our dataset
  data: {
    labels: ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
    // Information about the dataset
    datasets: [
      {
        label: "Users",
        backgroundColor: "#fff0",
        borderColor: "#556fe6",
        data: [
          45,
          50,
          66,
          66,
          40,
          55,
          77,
          69,
          57,
          76,
          56,
          81,
        ],
      },
    ],
  },

  // Configuration options
  options: {
    layout: {
      padding: 10,
    },
    legend: {
      position: "bottom",
    },
    title: {
      display: false,
      text: " ",
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: false,
            labelString: " ",
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: false,
            labelString: " ",
          },
        },
      ],
    },
  },
});
