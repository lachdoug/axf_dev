ax(
  (a,x) =>
    x.css( {

      // field: {
        // "wrapper label *:not(labeltext)": {
        //   fontWeight: "unset",
        // },

        hint: {

              color: "#6c757d",
              // display: "block",
        },

        helpbody: {
          color: "#212529",

        },
      // },
//       label: {
// //   //     	fontWeight: "600",
//         display: "contents"
//       },
//       "labelwrapper.form-check-label": {
// //         input: {
// //           marginRight: "4px",
// //         },
// // lineHeight: 1,
//         labelwrapper: {
//         //   verticalAlign: "top",
//           display: "inline-block",
//         //   lineHeight: 1,
//           marginTop: "0.3333rem",
//         //   labeltext: {
//         //     verticalAlign: "top",
//         //
//         //     // display: "inline-block",
//         //   },
//         },
//         // inputwrapper: {
//         //   verticalAlign: "top",
//         //   display: "inline-block",
//         //   ".form-check-input": {
//         //     position: "unset",
//         //   }
//         // }
//         // "*": {
//         //   // marginTop: "0px",
//         //   verticalAlign: "middle"
//         // },
// // //         ".form-check-input:disabled ~ *": {
// // //           color: "#6c757d",
// // //         }
//       },
//

"input.form-control[type='checkbox'], input.form-control[type='radio']": {
  width: "unset",
  display: "inline-block",
  verticalAlign: "middle",
},

"input.form-check-input": {
  // verticalAlign: "middle",
  position: "unset",
  // marginTop: "0",

},

checklayout: {

  inputwrapper: {
    display: "inline-block",
  },
},

// ".form-check-input:disabled ~ .form-check-label": {
//     color: #6c757d;
// }

      "radiobuttons, checkboxes": {
        // lineHeight: 1,




      },

      inputoutput: {
        output: {

          paddingTop: "0px", // prob should be in bootstrap

        }
      },
//       "input,select,textarea": {
//   //       boxSizing: "border-box",
//   //     	padding: "5px",
//   //     	width: "100%",
//   //     	margin: "0px",
//         fontWeight: "normal",
//       },
//       textarea: {
// 				resize: "vertical"
// 			},
//       "input[type='file']": {
//         height: "unset",
//       },
//       "selectinput": {
//         input: {
//           marginTop: "5px",
//         }
//       },
//
    } )
);
