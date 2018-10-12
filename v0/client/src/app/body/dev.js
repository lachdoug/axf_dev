
ax.document.css(
  {


    "codemirror.fullscreen": {
      zIndex: 1,
      toolbar: {
        borderRadius: "0",
      }
    },
//
    codemirror: {
      // borderRadius: "0.25rem",
//       overflow: "hidden",
      // display: "block",
      // border: "1px solid #ccc",
//       fontWeight: "normal",
//       // editor: {
// //         height: "200px",
// //         display: "block",
// //         fontSize: "16px",
        ".CodeMirror": {
// //           /* This fixed conflicts when SimpleMDE and CodeMirror css
// //              files are loaded on the same page. (SimpleMDE uses CodeMirror.) */
// //             minHeight: "0px",
            borderColor: "#ccc",
//             borderRadius: "0px",
            padding: "0px",
            fontFamily: "monospace",
//
        },
//       // },
      toolbar: {
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        borderBottom: "none",
        borderTopLeftRadius: "0.25rem",
        borderTopRightRadius: "0.25rem",
        display: "block",
        overflow: "auto",
        cursor: "pointer",
        button: {
          float: "right",
          border: "none",
          margin: "2px",
          background: "none",
          padding: "5px 10px",
          color: "#999",
        },
        modewrap: {
          display: "inline-block",
          margin: "2px",
          padding: "2px 10px",
//           // color: "#999",
          vertical: {
            verticalAlign: "middle",
          },
          mode: {
            fontSize: "0.75em",
            verticalAlign: "middle",
          }
//
        },
      },
      "toolbar:hover": {
        button: {
          // color: "#666",
        }
      },
    },
//     simplemde: {
// //       fontWeight: "normal",
// //       // border: "1px solid #999",
//       ".CodeMirror": {
//         border: "1px solid #ccc",
// //         borderTop: "1px solid #ddd",
// //         borderBottom: "1px solid #ddd",
// //
// //         borderBottomLeftRadius: "0px",
// //         borderBottomRightRadius: "0px",
// //         minHeight: "0px",
// //         height: "200px",
//       },
//       ".editor-toolbar": {
// //         backgroundColor: "#f6f6f6",
//         opacity: "1",
//         borderTop: "1px solid #ccc",
//         borderLeft: "1px solid #ccc",
//         borderRight: "1px solid #ccc",
//         a: {
//           color: "#999 !important",
//           border: "none",
//           marginRight: "1px",
//         },
//         "a:hover": {
//           background: "inherit",
//           color: "#666 !important",
//         },
//       },
//       ".editor-toolbar:hover": {
//         opacity: "1",
//       },
//       ".editor-statusbar": {
//         fontWeight: "normal",
// //         backgroundColor: "#f6f6f6",
// //         color: "#999",
// //         border: "1px solid #999",
// //         borderBottomLeftRadius: "0.25rem",
// //         borderBottomRightRadius: "0.25rem",
// //         borderTop: "none",
// //         padding: "3px 6px",
//       }
//     }




    form: {
      'input, select, textarea': { fontSize: '1em' },
      field: {
        display: 'block',
        lineHeight: 1,
        marginBottom: '17px',
        caption: {
          display: 'block',
          marginBottom: '5px',
          textAlign: 'left'
        },
        control: {
          display: 'block',
          marginBottom: '2px',
        },
        help: {
          display: 'block',
          marginBottom: '5px',
          color: '#333',
          fontSize: '0.8em'
        },
        helpindicator: {
          fontSize: '0.8em',
          margin: '0.1em',
        },
        'helpindicator:hover': {
          cursor: 'pointer'
        },
        hint: {
          display: 'block',
          fontSize: '0.8em'
        },
        checkboxes: {
          checkbox: {
            display: 'block',
            '*': {
              verticalAlign: 'middle'
            }
          }
        },
        radios: {
          radio: {
            display: 'block',
            '*': {
              verticalAlign: 'middle'
            }
          }
        },
        textarea: {
          padding: '2px'
        },
        multiselect: {
          display: 'inline-block',
          border: '1px solid #ccc',
          borderRadius: '4px',
          color: '#333',
          select: {
            margin: '-2px'
          },
          selecteditem: {
            display: 'block',
            padding: '2px',
            itemremovebutton: {
              fontSize: '0.8em',
              float: 'right',
              margin: '0.1em'
            },
            'itemremovebutton:hover': {
              cursor: 'pointer'
            }
          }
        }
      }
    }
  }
),


App.prototype.dev = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return ( params, controller ) => [

a.style('form { font-size: 24px; }'),


// x.elix.tabs(
//   [
//     [ "One", "Page one" ],
//     [ "Two", "Page two" ],
//     [ "Three", "Page three" ],
//   ]
// ),

x.form(
  (f) => [
    // f.$('name:input-number[x]=x',),
    // f.field( {
    //   name: 'selection',
    //   type: 'select',
    //   select: {
    //     selectTag: { multiple: true },
    //     collection: ['cat','dog']
    //   }
    // } ),
    x.fetch('/test/people'),
    // f.field( {
    //   name: 'myPassword',
    //   type: 'password',
    //   password: {
    //     confirm: true,
    //     input: [ {}, { inputTag: { placeholder: "Confirm" } } ],
    //     mock: true
    //   }
    // } ),
    f.field( {
      name: 'myTimezone',
      type: 'timezone',
      timezone: {
        select: {}
      }
    } ),
    f.field( {
      name: 'myCountry',
      type: 'country',
      dependent: { name: "myTimezone", pattern: 'Pacific/Midway'}
    } ),
    f.field( {
      name: 'myLanguage',
      type: 'language',
    } ),
    f.field( {
      name: 'name',
      help: "This is help.",
      hint: "remember to enter text",
      input: {
        inputTag: { pattern: "^Jack$", required: true },
        invalid: (value, validity) => `Should be Jack, not ${ value }. There is a pattern mismatch? ${ validity.patternMismatch }`
      },
      // label: "Name",
      // dependent: { name: "selection", value: 'dog' }
    } ),
    f.field( {
      name: 'like',
      type: 'radios',
      value: "3",
      radios: { collection: [ "2","3" ] },
      dependent: { name: "name", value: 'z' }
    } ),
    // f.field( { name: 'basic', type: 'check', value: 'X', check: { checked: "X" } } ),
    // f.field( { name: 'advanced', type: 'check', value: 'X', check: { type: 'radio', checked: "X" } } ),
    // f.field( { name: 'selection', type: 'select', select: { collection: ['cat','dog'] } } ),
    // f.field( { name: 'story', type: 'textarea', value: "cool stuff!!!!" } ),
    f.fields( [
      {
        name: 'notbasic',
        type: 'selectinput',
        value: '2',
        selectinput: { collection: [ "2","3","4" ] },
        dependent: { name: "like", value: '2' }
      },
      // { name: 'basic', type: 'check', value: 'X', check: { checked: "X" } },
      // { name: 'advanced', type: 'check', value: 'X', check: { type: 'radio', checked: "X" } },
      // { name: 'selection', type: 'select', value: 'dog', select: { collection: ['cat','dog'] } },
      // { name: 'story', type: 'textarea', value: "cool stuff!!!!" },
      // { name: 'favs', type: 'checkboxes', value: [ "2", "3" ], checkboxes: { collection: [ "2","3" ] } },
      {
        name: 'mynums',
        type: 'multiselect',
        value: [ "2", "3" ],
        multiselect: { collection: [ "2","3","4" ] },
        dependent: { name: "like", value: '2' }
      },
    ] ),
    f.submit()
  ],
  { layout: "boostrap/horizontal", object: { name: "Lachlan" } }
),

// x.animate(
    // a.h1( a.clock( null, {
    //   $init: function() {
    //     this._tock();
    //     setInterval( this._tock, 1000); },
    //   _tock: function () {
    //     this.$text = ( new Date() ).toLocaleTimeString(); },
    // } ) ),
    //
    // a.h1( [
    //   a.span()
    // ], {
    //   $init: function() { this.$('span').$text = "wow" }
    // } ),
    //
    // x.time(),
    //
    // a.br(),
    //
    //
    // a.hr(),
    //
    // x.fetch(),

// ),

//
//
//     {
//   $cell: true,
//   $type: "div",
//   id: "container",
//   _items: [],
//   $update: function(){
//     this.querySelector(".list")._refresh();
//   },
//   $components: [
//     {
//       $type: "input",
//       onkeyup: function(e){
//         if(e.keyCode === 13){
//           this._items.push(this.value);
//           this.value = "";
//         }
//       }
//     },
//     {
//       class: "list",
//       _refresh: function(){
//         this.$components = this._items.map(function(item){
//           return { class: "row", $text: item };
//         })
//       }
//     }
//
//
//
//   ]
// }
// ,
//
//       // x.script( "/axf/themes/standard/form.js" ),
//       x.css(
//         { maxWidth: "600px", marginLeft: "auto", marginRight: "auto", marginTop: "20px" },
//         { scope: "#myform" }
//       ),
//       x.form( (f) => [
//         f.field( "name" ),
//         f.field( "name" ),
//       ] ),
//       x.form( (f) => [
//         f.label( "Name" ),
//         f.input( "name" ),
//
//         f.field( "name" ),
//         f.field( "name" ),
//
//
//
//
//         // a.div( f.fields([
//         //   [ "story", "textarea", {
//         //     required: true,
//         //     input: { attributes: { class: "form-control" } },
//         //     label: { inline: { attributes: { class: "col-sm-4" } }, attributes: { class: "col-sm-1 col-form-label" } },
//         //     outerwrapper: { attributes: { class: "form-group" } } } ],
//         //   [ "story", "textarea", {
//         //     required: true,
//         //     input: { attributes: { class: "form-control" } },
//         //     label: { inline: { attributes: { class: "col-sm-4" } }, attributes: { class: "col-sm-2 col-form-label" } },
//         //     outerwrapper: { attributes: { class: "form-group" } } } ],
//         //
//         // ]), { class: "row" } ),
//
//         // f.fields(
//         //   [
//         //     [ "my_password1", "password", "wow1", { placeholder: "Password" } ],
//         //     [ "my_password2", "custom/mockpassword", "wow2", { placeholder: "Password" } ],
//         //     [ "color", "color", {
//         //       help: "Hi",
//         //       hint: "Foo",
//         //       input: { style: "padding: 0.75rem;" },
//         //     } ],
//         //     [ "postage", "select", { collection: [ "mail", "courier", "drone" ], placeholder: "Please select a postage otion", value: [ "drone", "mail" ], multiple: true } ],
//         //     [ "accept", "checkbox", {
//         //       leftwrapper: { class: "col-sm-4" },
//         //       layout: "normal",
//         //       help: "Cool\n\nStuff",
//         //       hint: "Bar",
//         //     } ],
//         //     [ "accepted", "checkbox", {
//         //       // attributes: { class: "col-sm-8 offset-sm-4 form-group" },
//         //       outerwrapper: { class: "row form-group" },
//         //       innerwrapper: { class: "col-sm-8 offset-sm-4 " },
//         //       leftwrapper: { class: "" },
//         //       rightwrapper: { class: "" },
//         //       help: "Cool\n\nStuff",
//         //     } ],
//         //     [ "accepters", "multiselect", {
//         //       value: [1,2],
//         //       collection: { 1: "Red", 2: "Blue", 3: "Green" }
//         //     } ],
//         //     [ "sports", "custom/selectinput", {
//         //       placeholder: "",
//         //       collection: { glf: "Golf", ftb: "Football" },
//         //       secondaryInput: { class: "form-control" },
//         //     } ],
//         //     [ "pet", "radios", {
//         //       collection: [ "dog", "cat", "fish", "bird" ],
//         //       value: "cat",
//         //       hint: "Click on an option to select it.",
//         //       leftwrapper: { class: "col-sm-4" },
//         //       check: ( item ) => {
//         //
//         //         var help = {
//         //           fish: "Sorry, you can't select fish at the moment.",
//         //           bird: "The bird option\n\n is currently blue."
//         //         };
//         //
//         //         return {
//         //           // hint: "wow",
//         //           help: help[ item[0] ],
//         //           disabled: item[0] === "fish" ? "disabled" : null,
//         //           label: {
//         //             style: item[0] === "bird" ? "color: blue" : ""
//         //           },
//         //         }
//         //       //   var help = {
//         //       //     fish: "Sorry, you can't select fish at the moment.",
//         //       //     bird: "The bird option\n\n is currently blue."
//         //       //   };
//         //       //   var isFish = item[0] === "fish";
//         //       //   return {
//         //       //     input: { attributes: {
//         //       //       // class: "form-check-input",
//         //       //       disabled: isFish ? "disabled" : null
//         //       //     } },
//         //       //
//         //       //     // outerwrapper: { class: "form-check" },
//         //       //     // outerwrapper: { attributes: { class: "form-group row" } } } ],
//         //       //     help: help[ item[0] ],
//         //       //     hint: {
//         //       //       text: "Same same",
//         //       //       attributes: {
//         //       //         // style: "font-style: italic; " + ( item[0] === "bird" ? "color: inherit;" : "" )
//         //       //       }
//         //       //     },
//         //       //     label: {
//         //       //       // layout: "normal",
//         //       //       // attributes: { class: "form-check-label" },
//         //       //       leftwrapper: {
//         //       //         // class: "form-check-label",
//         //       //         style: item[0] === "bird" ? "color: blue" : ""
//         //       //       },
//         //       //       // leftwrapper: { class: "" },
//         //       //
//         //       //       // label: { inline: { attributes: { class: "col-sm-10" } }, attributes: { class: "col-sm-2 col-form-label" } },
//         //       //       //
//         //       //     }
//         //       //   };
//         //       },
//         //     } ],
//         //     a.hr(),
//         //     [ "chess", "checkboxes", {
//         //       // attributes: { class: "col-sm-12" },
//         //       // outerwrapper: { class: "row" },
//         //       leftwrapper: { class: "col-sm-4" },
//         //       // rightwrapper: { class: "col-sm-8" },
//         //       collection: [ "pawn", "knight", "bishop", "rook", "queen", "king" ],
//         //       value: [ "bishop", "queen" ],
//         //       check: ( item ) => ( {
//         //         input: { class: "form-check-input" },
//         //         // outerwrapper: { class: "custom-control custom-checkbox" },
//         //         // leftwrapper: { style: "display: contents" },
//         //         // rightwrapper: { for: "checkbox_" + item[0], $type: "label", class: "custom-control-label" },
//         //         label: { class: "form-check-label" } ,
//         //         outerwrapper: { class: "form-check" },
//         //           // layout: "normal",
//         //         //   attributes: { class: "form-check-label" }
//         //         // },
//         //         hint: "This is the " + item[1],
//         //         help: "Help for " + item[1],
//         //       } ),
//         //       help: "Main help",
//         //       hint: "Main hint",
//         //     } ],
//         //     [ "domicile", "custom/country", {
//         //       placeholder: "Where do they live?",
//         //       required: true,
//         //       dependent: { selector: "[name='chess[]']", pattern: "pawn" }
//         //     } ],
//         //     [ "speaks", "custom/timezone", { placeholder: "What is their preferred language?" } ],
//         //     [ "script_mode", "codemode", { value: "javascript" } ],
//         //     [ "script", "code" ],
//         //     [ "avatar", "file", {
//         //       // leftwrapper: { class: "col-sm-4" },
//         //       // leftwrapper: { class: "col-sm-2" },
//         //       // rightwrapper: { class: "col-sm-8 col-form-label" },
//         //       // outerwrapper: { class: "form-group row" },
//         //     } ],
//         //     // //
//         //     // // // dependent: { selector: "[name='age']", pattern: /^18|19|[2-9]\d+|\d{3,}$/ } }
//         //     // //
//         //     // //
//         //     [ "favcolor", "custom/inputoutput", "#00FF00", { type: "color" } ],
//         //     [ "scale", "custom/inputoutput", 10, { type: "range", input: { min: 1, class: "custom-range" } } ],
//         //     [ "email", "email", { input: { attributes: { placeholder: "name@example.com" } } } ],
//         //     [ "birthday", "date", { help: "Ask your mother. She'll remember." } ],
//         //     "first_name",
//         //     "last_name",
//         //     [ "shopping", { input: { list: "shopping_list" } } ],
//         //     f.datalist( [ "Milk", "Bread", "Eggs" ], { attributes: { id: "shopping_list" } } ),
//         //     [ "name", {
//         //       pattern: "x",
//         //       required: true,
//         //       // input: { oninvalid: function() { debugger; return true; } }
//         //     } ],
//         //     [ "description", "markdown", {
//         //       required: true,
//         //
//         //       label: false,
//         //     } ],
//         //     a.button( "A", { name: "answer", value: "0", class: "btn btn-primary" } ),
//         //     f.submit( "OK", { attributes: { class: "btn btn-primary pull-right" } } ),
//         //   ],
//         //   {
//         //     attributes: { $type: "fieldset", class: "form-control" },
//         //     // wrapper: { class: "row" },
//         //     field: ( field ) => ( {
//         //       // attributes: { class: "col-sm-12" },
//         //       // outerwrapper: { class: "" },
//         //       innerwrapper: { class: "row form-group" },
//         //       leftwrapper: { class: "col-sm-4 col-form-label" },
//         //       rightwrapper: { class: "col-sm-8" },
//         //       input: { class: "form-control" },
//         //       // layout: "check",
//         //       // help: "Help!!!",
//         //       // label: { attributes: { class: "form-label" } },
//         //       // outerwrapper: { class: "form-group" }
//         //     } )
//         //     //   input: { attributes: { class: "form-control" } },
//         //     //   label: { inline: { attributes: { class: "col-sm-10" } }, attributes: { class: "col-sm-2 col-form-label" } },
//         //     //   outerwrapper: { attributes: { class: "form-group row" } } } ],
//         //     // label: false,
//         //   }
//         // ),
//
//       ],
//       { attributes: {
//         id: "myform",
//         // novalidate: true,
//         // class: "needs-validation",
//         // onsubmit: function(event) {
//         //   if (this.checkValidity() == false) {
//         //     this.querySelectorAll("input textarea select").forEach(
//         //       function(input) {
//         //         debugger
//         //       };
//         //     )
//         //     return false;
//         //   }
//         //   return true;
//         // },
//
//       }
//     }
//     )
//
//
//
//     // ax("hi");
//
//     // ax( (a,x) =>
//     //   x.form( (f) => [
//     //   ], { attributes: {  } } )
//     // );
//     //
//     //
//     // ax( (a,x) => [
//     //   x.css(
//     //     {
//     //       fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
//     //       color: "#333",
//     //       button: {
//     //         cursor: "pointer"
//     //       }
//     //     },
//     //     { scope: "body" }
//     //   ),
//     //   x.css(
//     //     {
//     //       outerwrapper: {
//     //         display: "block",
//     //         marginBottom: "20px"
//     //       },
//     //       label: {
//     //         fontWeight: "600"
//     //       },
//     //       help: {
//     //         helpbutton: {
//     //           float: "right",
//     //           padding: "0px 10px",
//     //           cursor: "pointer",
//     //         },
//     //         helptext: {
//     //           color: "#666",
//     //           padding: "0px 10px 10px 10px",
//     //           display: "block",
//     //           clear: "both",
//     //         }
//     //       },
//     //       "input,select,textarea": {
//     //         boxSizing: "border-box",
//     //         padding: "5px",
//     //         width: "100%",
//     //         margin: "0px",
//     //       },
//     //       "radiobuttons radiobutton, checkboxes checkbox": {
//     //         display: "block",
//     //         marginTop: "5px"
//     //       }
//     //
//     //     },
//     //     { scope: "form field" }
//     //   )
//     // ] );
//     //
//     //
//     // ax( (a,x) => x.css(`
//     //
//     // field radiobuttons radiobutton label, field checkboxes checkbox label {
//     //   font-weight: normal;
//     //   vertical-align: top;
//     // }
//     //
//     // field input[type="color"] {
//     //   height: 49px;
//     //   width: 49px;
//     // }
//     //
//     // field input[type="checkbox"], field input[type="radio"] {
//     //   width: inherit;
//     //   // margin-right: 5px;
//     // }
//     //
//     // field hint {
//     //   color: #333;
//     //   font-size: 0.8em;
//     //   font-style: italic;
//     // }
//     //
//     // field textarea {
//     //   resize: vertical;
//     // }
//     //
//     // field multiselect selecteditems {
//     //   display: block;
//     //   margin-top: -1px;
//     //   border: 1px solid #999;
//     //   border-top: none;
//     //   border-bottom-left-radius: 4px;
//     //   border-bottom-right-radius: 4px;
//     //   overflow: hidden;
//     //   background-color: white;
//     //   font-weight: normal;
//     // }
//     //
//     // field multiselect selecteditems selecteditem {
//     //   padding: 5px;
//     //   display: block;
//     // }
//     //
//     // field multiselect selecteditems selecteditem noneselectedmessage {
//     //   font-style: italic;
//     //   color: #666;
//     // }
//     //
//     //
//     //
//     // field multiselect selecteditems selecteditem:hover {
//     //   background-color: #eee;
//     // }
//     //
//     // field multiselect selecteditems selecteditem itemremovebutton {
//     //   float: right;
//     // }
//     //
//     // field multiselect selecteditems selecteditem itemremovebutton button {
//     //   color: #999;
//     //   padding: 0px 5px;
//     //   border: none;
//     //   background: transparent;
//     // }
//     //
//     // field multiselect selecteditems selecteditem itemremovebutton button:hover {
//     //   color: #666;
//     // }
//     //
//     // field codemirror {
//     //   border-radius: 4px;
//     //   overflow: hidden;
//     //   display: block;
//     //   border: 1px solid #bbb;
//     // }
//     //
//     // field codemirror editor {
//     //   height: 200px;
//     //   display: block;
//     //   font-size: 16px;
//     // }
//     //
//     // field codemirror toolbar {
//     //   background-color: #f6f6f6;
//     //   border-bottom: 1px solid #ddd;
//     //   display: block;
//     //   overflow: hidden;
//     //   cursor: pointer;
//     // }
//     //
//     // field codemirror toolbar button {
//     //   float: right;
//     //   border: none;
//     //   margin: 2px;
//     //   background: none;
//     //   padding: 5px 10px;
//     //   color: #999;
//     // }
//     //
//     // field codemirror toolbar:hover button {
//     //   color: #666;
//     // }
//     //
//     // field codemirror toolbar mode {
//     //   display: inline-block;
//     //   margin: 2px;
//     //   padding: 5px 10px;
//     //   color: #999;
//     //   font-size: 0.8em;
//     // }
//     //
//     // /* This fixed conflicts when SimpleMDE and CodeMirror css
//     //    files are loaded on the same page. (SimpleMDE uses CodeMirror.) */
//     // field codemirror editor .CodeMirror {
//     //   min-height: 0px;
//     //   border: none;
//     //   border-radius: 0px;
//     //   padding: 0px;
//     //   font-family: monospace;
//     // }
//     //
//     // field simplemde {
//     //   font-weight: normal;
//     //   border: 1px solid #bbb;
//     // }
//     //
//     // field simplemde .CodeMirror {
//     //   border: 1px solid #bbb;
//     //   border-top: 1px solid #ddd;
//     //   border-bottom: 1px solid #ddd;
//     //
//     //   border-bottom-left-radius: 0px;
//     //   border-bottom-right-radius: 0px;
//     //   min-height: 0px;
//     //   height: 200px;
//     // }
//     //
//     // field simplemde .editor-toolbar {
//     //   background-color: #f6f6f6;
//     //   opacity: 1;
//     //   border-top: 1px solid #bbb;
//     //   border-left: 1px solid #bbb;
//     //   border-right: 1px solid #bbb;
//     // }
//     //
//     // field simplemde .editor-toolbar a {
//     //   color: #999 !important;
//     //   border: none;
//     //   margin-right: 1px;
//     // }
//     //
//     // field simplemde .editor-toolbar:hover {
//     //   opacity: 1;
//     // }
//     //
//     // field simplemde .editor-toolbar a:hover {
//     //   background: inherit;
//     //   color: #666 !important;
//     // }
//     //
//     // field simplemde .editor-statusbar {
//     //   background-color: #f6f6f6;
//     //   color: #999;
//     //   border: 1px solid #bbb;
//     //   border-bottom-left-radius: 4px;
//     //   border-bottom-right-radius: 4px;
//     //   border-top: none;
//     //   padding: 3px 6px;
//     // }
//     // ` ),
//     //   // { style: "display: none;" }
//     // );
//


  ];
};
