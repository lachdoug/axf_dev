ax( (a,x) =>
  x.css(
    {
      wrapper: {
        display: "block",
      },
      helpbutton: {
        button: {
          margin: "0px 2px 0px -3px",
          padding: "0px 3px",
          cursor: "pointer",
          border: "none",
          background: "none",
          color: "inherit",
          lineHeight: "0.9",
          // verticalAlign: "unset",
        }
      },
      helpbody: {
        marginTop: "0.667rem",
        display: "block",
        clear: "both",
        lineHeight: 1,
      },

      hint: {
        display: "block",
        fontSize: "80%",
        // paddingTop: "0.25rem",
        // lineHeight: 1,
      },
      label: {
        display: "contents",
        "labeltext": {
          marginRight: "0.3rem",
        },
        // "labeltext, hint, help": {
        //   lineHeight: 1
        // },
      },

      // inputwrapper: {
      //   display: "block",
      // },

      checklayout: {
        display: "contents",
        hint: {
          // display: "block",
          // fontSize: "80%",
          paddingTop: 0,
          // lineHeight: 1,
        },
        inputwrapper: {
          // display: "inline-block",


          // input: {
          //   display: "inline-block",
          //   // marginTop: "3px",
            verticalAlign: "middle",
          // }

        },
        // labelwrapper: {
        //   marginTop: "0.125rem",
        // }
      },


      // "help:hover ~ *": {
      //   opacity: "0.7"
      // },

  		textarea: {
  			resize: "vertical"
  		},
      fieldset: {
        minWidth: 0,
        padding: 0,
        margin: 0,
        border: 0,
      },

      "input[type='checkbox'], input[type='radio']": {
        marginRight: "0.3rem",
        marginLeft: "0.3rem",

        "~hint": {
          display: "inline-block",
          verticalAlign: "middle",
          // marginLeft: "0.3rem",
        },
      },

      "input[type='file']": {
        padding: "0px",
        border: "none",
      },

      dependent: {
        display: "none",
      },



      "radiobuttons, checkboxes": {
        marginLeft: "0.6rem",
        // marginTop: "0.6rem",
        display: "block",
        // lineHeight:
        "radiobutton, checkbox": {
          marginBottom: "0.6rem",
          display: "block",
          // labelwrapper: {
            // lineHeight: 1.25,
          // },


          // label: {
          //   "*": {
          //     // verticalAlign: "middle",
          //     lineHeight: 1,
          //     "*": {
          //       verticalAlign: "unset",
          //     }
          //   }
          // },
          // hint: {
          //   verticalAlign: "middle",
          //   marginLeft: "5px",
          // }
        },
      },


      inputoutput: {
        output: {
          marginTop: "-0.1rem",
          display: "block",
          fontSize: "80%",
          textAlign: "center",
          // display: "block",
          // paddingTop: "0px", // prob should be in bootstrap
          // fontWeight: "normal", // prob should be in bootstrap
        }
      },

      selectinput: {
        input: {
          marginTop: "0.3rem",
        }
      },

      multiselect: {
        selecteditems: {
          display: "block",
          // marginTop: "-1px",
          border: "1px solid #ccc",
          borderTop: "none",
          borderBottomLeftRadius: "0.3rem",
          borderBottomRightRadius: "0.3rem",
          overflow: "hidden",
          // backgroundColor: "white",
          fontWeight: "normal",
          selecteditem: {
            padding: "5px",
            display: "block",
            // noneselectedmessage: {
            //   fontStyle: "italic",
            // 	color: "#666",
            // },
            itemremovebutton: {
              float: "right",
              button: {
                color: "#999",
                padding: "0px 5px",
                border: "none",
                background: "transparent",
              },
              "button:hover": {
                color: "#666",
              }
            }
          },
          "selecteditem:hover": {
            backgroundColor: "rgba(0,0,0,0.1)",
          }
        }
      },


      codemirror: {
        borderRadius: "0.3rem",
        overflow: "hidden",
        display: "block",
        border: "1px solid #ccc",
        fontWeight: "normal",
        editor: {
  //         height: "200px",
  //       	display: "block",
  //       	fontSize: "16px",
          ".CodeMirror": {
  //           /* This fixed conflicts when SimpleMDE and CodeMirror css
  //           	 files are loaded on the same page. (SimpleMDE uses CodeMirror.) */
  //           	minHeight: "0px",
              border: "none",
              borderRadius: "0px",
              padding: "0px",
              fontFamily: "monospace",

          }
        },
        toolbar: {
          // backgroundColor: "#fff",
          borderBottom: "1px solid #ccc",
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
            // color: "#999",
            vertical: {
              verticalAlign: "middle",
            },
            mode: {
              fontSize: "0.75em",
              verticalAlign: "middle",
            }

          },
        },
        "toolbar:hover": {
          button: {
            // color: "#666",
          }
        },
      },
      simplemde: {
  //       fontWeight: "normal",
  //     	// border: "1px solid #999",
        ".CodeMirror": {
          border: "1px solid #ccc",
  //       	borderTop: "1px solid #ddd",
  //       	borderBottom: "1px solid #ddd",
  //
  //       	borderBottomLeftRadius: "0px",
  //       	borderBottomRightRadius: "0px",
  //       	minHeight: "0px",
  //       	height: "200px",
        },
        ".editor-toolbar": {
  //       	backgroundColor: "#f6f6f6",
          opacity: "1",
          borderTop: "1px solid #ccc",
          borderLeft: "1px solid #ccc",
          borderRight: "1px solid #ccc",
          a: {
            color: "#999 !important",
            border: "none",
            marginRight: "1px",
          },
          "a:hover": {
            background: "inherit",
            color: "#666 !important",
          },
        },
        ".editor-toolbar:hover": {
          opacity: "1",
        },
        ".editor-statusbar": {
          fontWeight: "normal",
  //       	backgroundColor: "#f6f6f6",
  //       	color: "#999",
  //       	border: "1px solid #999",
  //       	borderBottomLeftRadius: "0.3rem",
  //       	borderBottomRightRadius: "0.3rem",
  //       	borderTop: "none",
  //       	padding: "3px 6px",
        }
      }


    },
    { scope: "form" }
  )
);
