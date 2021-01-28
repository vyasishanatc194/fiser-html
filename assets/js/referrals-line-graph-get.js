var ctx = document.getElementById("myChart-referrals").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line", // also try bar or other graph types

  // The data for our dataset
  data: {
    labels: ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
    // Information about the dataset
    datasets: [
      {
        label: "Referrals",
        backgroundColor: "#fff0",
        borderColor: "#556fe6",
        data: [
          15,
          20,
          66,
          66,
          40,
          55,
          77,
          69,
          57,
          76,
          46,
          82,
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
