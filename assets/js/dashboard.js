$(document).ready(function () {
  $("#pie_progress01").asPieProgress({
    namespace: "pie_progress",
    barcolor: "#6D82E8",
    trackcolor: "#F4F4F4",
    fillcolor: "#fff",
  });

  $("#pie_progress02").asPieProgress({
    namespace: "pie_progress",
    barcolor: "#34c38f",
    trackcolor: "#F4F4F4",
    fillcolor: "#fff",
  });

  $("#pie_progress03").asPieProgress({
    namespace: "pie_progress",
    barcolor: "#f46a6a",
    trackcolor: "#F4F4F4",
    fillcolor: "#fff",
  });

  $(".pie_progress").asPieProgress("start");

  $(".select2").select2({
    minimumResultsForSearch: -1,
    width: 100,
  });
});
