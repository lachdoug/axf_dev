App.prototype.guideShowChartExtension = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return [
    a.p( [
      a.p( x.md( "Render charts using the `.chart()` extension." ) ),
      a.p( [
        "The default charting library is ",
        a.a( "Chart.js", { href: "https://www.chartjs.org/", target: "https://www.chartjs.org/" } ),
        "."
      ] ),
      a.p( x.md( "Configure Chart.js by passing **chartjsOptions** to `.chart()`." ) ),
    ] ),
    this.coderunner(
`ax( (a,x) =>
  x.chart(
    {
      type: 'line',
      data: {
        labels: ["Yesterday", "Today", "Tomorrow"],
          datasets: [
            { label: 'Up', data: [1,3,4], borderColor: "deepskyblue" },
            { label: "Down", data: [ 3,1,0 ], backgroundColor: "skyblue" }
         ]
      },
    }
  )
);` ),
  ];



};
