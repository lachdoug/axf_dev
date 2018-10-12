App.prototype.guideShowComponents = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return [
    x.md( [
      "**components** can be combinations of strings, numbers, objects, nulls, functions, classes, and arrays.",
    ] ),
    this.coderunner(
`var timeDot = [         // Array component -- <div>
  "Dawn of time 1/1/",  // String component -- <span>
  null,                 // Null component -- is ignored
  1970                  // Number component -- <span>
];

class DateToday {       // Class component
  render() { return \`Date today \${ this.today() }\`; }
  today() { return new Date().toLocaleDateString(); }
};

function timeNow () {   // Function component
  var now = () => new Date().toLocaleTimeString();
  return "Time now " + now();
};

ax( [
  "About time",
  timeDot,
  DateToday,
  () => {                   // Anonymous function component
    return { $type: 'br' }; // Object component
  },
  timeNow,
] );` ),
  ];
};
