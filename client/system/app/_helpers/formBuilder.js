// app.formBuilderComponent = (f) => (a,x) => [
//
//   f.field( {
//     key: 'key',
//     layout: {
//       size: 'large',
//       arrange: 'horizontal',
//       spacing: 'compact',
//     },
//   } ),
//
//   f.field( {
//     key: 'control',
//     control: 'select',
//     collection: {
//       string: 'String',
//       select: 'Select',
//       divider0: '—————',
//       check: 'Checkbox',
//       checkboxes: 'Checkboxes',
//       radios: 'Radios',
//       divider1: '—————',
//       color: 'Color',
//       date: 'Date',
//       email: 'Email',
//       number: 'Number',
//       tel: 'Tel',
//       time: 'Time',
//       url: 'URL',
//       divider2: '—————',
//       text: 'Text area',
//       code: 'Code',
//       markdown: 'Markdown',
//       divider3: '—————',
//       language: 'Language',
//       country: 'Country',
//       timezone: 'Timezone',
//       divider4: '—————',
//       password: 'Password',
//       divider5: '—————',
//       multiselect: 'Multiple select',
//       selectinput: 'Select with input',
//       divider6: '—————',
//       one: 'One',
//       many: 'Many',
//       divider7: '—————',
//       object: 'Object',
//     },
//     layout: {
//       size: 'large',
//       arrange: 'horizontal',
//       spacing: 'spread',
//     }
//
//   } ),
//
//   // f.field( {
//   //   key: 'type',
//   //   // label: false,
//   //   control: 'select',
//   //   value: 'text',
//   //   dependent: {
//   //     key: 'control',
//   //     value: 'input',
//   //   },
//   //   collection: {
//   //
//   //     button: 'Button',
//   //     checkbox: 'Checkbox',
//   //     color: 'Color',
//   //     date: 'Date',
//   //     'datetime-local': 'Datetime ( local )',
//   //     email: 'Email',
//   //     file: 'File',
//   //     hidden: 'Hidden',
//   //     image: 'Image',
//   //     month: 'Month',
//   //     number: 'Number',
//   //     password: 'Password',
//   //     radio: 'Radio',
//   //     range: 'Range',
//   //     reset: 'Reset',
//   //     search: 'Search',
//   //     submit: 'Submit',
//   //     tel: 'Tel',
//   //     text: 'Text',
//   //     time: 'Time',
//   //     url: 'URL',
//   //     week: 'Week',
//   //
//   //   },
//   // } ),
//
//   f.field( {
//     key: 'collection_param',
//     // label: false,
//     // placeholder: 'Collection parameter',
//     dependent: {
//       key: 'control',
//       pattern: '^(select|radios|checkboxes|multiselect|selectinput)$',
//     }
//   } ),
//
//   // f.field( {
//   //   key: 'datatype',
//   //   control: 'select',
//   //   label: 'Datatype coercion',
//   //   collection: {
//   //     '': 'None ( keep as String )',
//   //     number: 'Number',
//   //     boolean: 'Boolean',
//   //   },
//   //   // placeholder: 'Coerce value to',
//   //   dependent: {
//   //     key: 'control',
//   //     pattern: '^input|select|radios|check|selectinput$',
//   //   }
//   // } ),
//
//   // f.field( {
//   //   key: 'layout',
//   //   control: 'one',
//   //   form: (ff) => [
//   //
//   //     f.field( {
//   //       key: 'arrange',
//   //       control: 'select',
//   //       collection: {
//   //         '': 'Default',
//   //         'vertical': 'Vertical',
//   //         'horizontal': 'Horizontal',
//   //       },
//   //     } ),
//   //
//   //     f.field( {
//   //       key: 'size',
//   //       control: 'select',
//   //       collection: {
//   //         '': 'Normal',
//   //         'small': 'Small',
//   //         'medium': 'Vertical',
//   //         'horizontal': 'Horizontal',
//   //       },
//   //     } ),
//   //
//   //
//   //   ]
//   //
//   // } ),
//
//   f.field( {
//     key: 'layout',
//     layout: {
//       arrange: 'horizontal',
//       // size: 'small',
//     },
//     control: 'one',
//     form: (ff) => [
//
//       ff.row( {
//         cols: [
//           ff.field( {
//             key: 'arrange',
//             control: 'select',
//             layout: {
//               // size: 'small',
//               arrange: 'vertical',
//               spacing: 'compact',
//             },
//             collection: {
//               '': 'Default',
//               'vertical': 'Vertical',
//               'horizontal': 'Horizontal',
//             },
//           } ),
//
//           ff.field( {
//             key: 'size',
//             control: 'select',
//             layout: {
//               size: 'small',
//               arrange: 'vertical',
//               spacing: 'compact',
//             },
//             collection: {
//               '': 'Default',
//               'small': 'Small',
//               'medium': 'Medium',
//               'large': 'Large',
//             },
//           } ),
//
//           ff.field( {
//             key: 'spacing',
//             control: 'select',
//             layout: {
//               size: 'small',
//               arrange: 'vertical',
//               spacing: 'compact',
//             },
//             collection: {
//               '': 'Default',
//               'compact': 'Compact',
//               'normal': 'Normal',
//               'spread': 'Spread',
//             },
//           } ),
//
//         ]
//       } ),
//
//     ]
//
//   } ),
//
//
//   f.field( {
//     key: 'placeholder',
//     dependent: {
//       key: 'control',
//       pattern: '^(input|select|textarea|code|markdown|language|country|timezone|multiselect|selectinput|many)$',
//     }
//   } ),
//
//   f.field( {
//     key: 'multiple',
//     control: 'checkbox',
//     epithet: 'XXX',
//     dependent: {
//       key: 'control',
//       pattern: '^select$',
//     }
//   } ),
//
//   f.field( {
//     key: 'epithet',
//     dependent: {
//       key: 'control',
//       pattern: '^check$',
//     }
//   } ),
//
//   f.field( {
//     key: 'checked',
//     value: 'true',
//     dependent: {
//       key: 'control',
//       pattern: '^check$',
//     }
//   } ),
//
//   f.field( {
//     key: 'unchecked',
//     value: 'false',
//     dependent: {
//       key: 'control',
//       pattern: '^check$',
//     }
//   } ),
//
//   f.field( {
//     key: 'form',
//     // label: false,
//     control: 'many',
//     item: 'component',
//     form: app.formBuilderComponent,
//     dependent: {
//       key: 'control',
//       pattern: '^(one|many)$',
//     },
//
//   } ),
//
//   f.field( {
//     key: 'value',
//     dependent: {
//       key: 'control',
//       pattern: '^((?!^one|many).)*$',
//     },
//   } ),
//
//
//
//
//
// ]
//
// app.view1 = (a,x) => a['div.container']( [
//   app.css,
//
//   a.h2( 'Form builder' ),
//
//   x.filepond(),
//
//   a.dropzonejs( [
//     x.dropzonejs( {
//       dropzone: {
//
//         // paramName: "file",
//         // method: 'put',
//         // headers: {
//         //   "x-ms-blob-type": "BlockBlob"
//         // },
//         maxFilesize: Number.MAX_SAFE_INTEGER, // 5000, //Size in MB...means can send up to 5.0GB
//         // clickable: true,
//         uploadMultiple: false, //Change to true when not chunking
//         chunking: true,
//         // forceChunking: true,
//         // chunkSize: 1000000, //1 MB Chunks, but sent in Bytes
//         // parallelChunkUploads: true,
//         // retryChunks: true,
//         // retryChunksLimit: 3,
//         maxFiles: 1,
//         success: function(file) {
//           x.lib.event(
//             this.element,
//             "fileUploadSuccess",
//             { detail: { filename: file.upload.filename } }
//           )
//         }
//
//       }
//
//     } ),
//     a.result( [
//       a.message( {
//         $display: function( message ) {
//           this.$text = message
//         }
//       } ),
//       a.reset(
//         app.btn( x.icon( "fa fa-caret-right", 'Done'), (e,el) => {
//           el.$('^dropzonejs axf-dropzonejs').$dropzone.removeAllFiles()
//           el.$('^reset').$hide()
//           el.$('^result message').$text = ""
//         } ),
//         {
//           $init: function() {
//             this.$hide()
//           },
//           $show: function() {
//             this.style.display = 'unset'
//           },
//           $hide: function() {
//             this.style.display = 'none'
//           },
//         }
//       ),
//
//     ] ),
//
//   ], {
//     $on: { 'fileUploadSuccess': (e,el) => {
//       el.$('reset').$show()
//       el.$('message').$text = `Successfully uploaded ${ e.detail.filename }`
//       e.stopPropagation()
//     } }
//   } ),
//
//
//
//
//   x.form( {
//
//     proxy: app.form.factory,
//
//     layout: {
//       // size: 'small',
//       // size: 'large',
//       arrange: 'horizontal',
//       // spacing: 'spread',
//       // spacing: 'compact',
//     },
//
//     id: 'myform',
//
//     form: (f) => [
//       f.field( {
//         key: 'cats',
//         control: 'many',
//         form: (ff) => [
//           ff.field( {
//             key: 'colors',
//             control: 'many',
//             form: (fff) => [
//               fff.field( {
//                 key: 'color',
//                 control: 'color',
//               } )
//             ],
//           } ),
//         ]
//       } ),
//       f.button( {
//         onclick: (e,el) => { ax.log( el.$('^form').$data() ) }
//       } )
//     ],
//
//   } )
//
// ] )
//
// app.view2 = (a,x) => a['div.container']( [
//   app.css,
//
//   a.h2( 'Form builder' ),
//
//   x.form( {
//
//     proxy: app.form.factory,
//
//     layout: {
//       // size: 'small',
//       // size: 'large',
//       arrange: 'horizontal',
//       // spacing: 'spread',
//       // spacing: 'compact',
//     },
//
//     id: 'myform',
//
//     form: (f) => [
//
//       // f.field( {
//       //   key: "Cool",
//       //   control: 'tel',
//       // } ),
//       //
//       // f.row( {
//       //   cols: [
//       //     {
//       //       body: [
//       //         f.field( {
//       //           key: "col1"
//       //         } ),
//       //         f.field( {
//       //           key: "col1"
//       //         } ),
//       //         f.field( {
//       //           key: "col1"
//       //         } ),
//       //         f.field( {
//       //           key: "col1"
//       //         } ),
//       //         f.field( {
//       //           key: "col1"
//       //         } ),
//       //         f.field( {
//       //           key: "col1"
//       //         } ),
//       //       ],
//       //     },
//       //     {
//       //       body: [
//       //         f.field( {
//       //           key: "col2"
//       //         } ),
//       //       ],
//       //     },
//       //     {
//       //       body: [
//       //         f.field( {
//       //           key: "col3"
//       //         } ),
//       //       ],
//       //     },
//       //     {
//       //       body: [
//       //         f.field( {
//       //           key: "col4"
//       //         } ),
//       //       ],
//       //     },
//       //   ]
//       // } ),
//       //
//       // f.field( {
//       //   key: 'code',
//       //   control: 'code',
//       //   code: {
//       //     mode: 'javascript',
//       //     keymap: 'vim'
//       //   }
//       // } ),
//       //
//       // f.field( {
//       //   key: 'markdown',
//       //   control: 'markdown',
//       //
//       // } ),
//       //
//       // f.field( {
//       //   key: 'players',
//       //   control: 'many',
//       //   form: (ff) => [
//       //     ff.field( { key: 'name' } )
//       //   ],
//       // } ),
//       //
//       //
//       // f.field( {
//       //   key: 'events',
//       //   control: 'one',
//       //   form: (ff) => [
//       //     ff.field( { key: 'start', control: 'time' } ),
//       //     ff.field( { key: 'stop', control: 'time' } ),
//       //   ],
//       // } ),
//       //
//       //
//       //
//       //
//       // f.field( {
//       //   key: 'color',
//       //   control: 'color',
//       // } ),
//       //
//       // f.field( {
//       //   key: 'date',
//       //   control: 'date',
//       // } ),
//       //
//       // f.field( {
//       //   key: 'email',
//       //   control: 'email',
//       // } ),
//       //
//       // f.field( {
//       //   key: 'number',
//       //   control: 'number',
//       // } ),
//       //
//       // f.field( {
//       //   key: 'tel',
//       //   control: 'tel',
//       // } ),
//       //
//       // f.field( {
//       //   key: 'string',
//       //   control: 'string',
//       // } ),
//       //
//       // f.field( {
//       //   key: 'time',
//       //   control: 'time',
//       // } ),
//       //
//       // f.field( {
//       //   key: 'url',
//       //   control: 'url',
//       // } ),
//       //
//       // f.field( {
//       //   key: 'select',
//       //   control: 'select',
//       //   placeholder: 'None',
//       //   collection: {
//       //     'in': 'In',
//       //     'out': 'Out',
//       //     'up': 'Up',
//       //     'down': 'Down',
//       //     'left': 'Left',
//       //     'right': 'Right',
//       //   },
//       // } ),
//       //
//       // f.field( {
//       //   key: 'checkbox',
//       //   control: 'checkbox',
//       //   epithet: 'Click me!',
//       //   // placeholder: 'None',
//       //   // collection: {
//       //   //   'in': 'In',
//       //   //   'out': 'Out',
//       //   // },
//       // } ),
//       //
//       // f.field( {
//       //   key: 'checkboxes',
//       //   control: 'checkboxes',
//       //   // placeholder: 'None',
//       //   collection: {
//       //     'in': 'In',
//       //     'out': 'Out',
//       //     'up': 'Up',
//       //     'down': 'Down',
//       //     'left': 'Left',
//       //     'right': 'Right',
//       //   },
//       // } ),
//       //
//       // f.field( {
//       //   key: 'radios',
//       //   control: 'radios',
//       //   // placeholder: 'None',
//       //   collection: {
//       //     'in': 'In',
//       //     'out': 'Out',
//       //     'up': 'Up',
//       //     'down': 'Down',
//       //     'left': 'Left',
//       //     'right': 'Right',
//       //   },
//       // } ),
//       //
//       // f.field( {
//       //   key: 'multiselect',
//       //   control: 'multiselect',
//       //   // placeholder: 'None',
//       //   collection: {
//       //     'in': 'In',
//       //     'out': 'Out',
//       //     'up': 'Up',
//       //     'down': 'Down',
//       //     'left': 'Left',
//       //     'right': 'Right',
//       //   },
//       // } ),
//       //
//       //
//       // f.field( {
//       //   key: 'selectinput',
//       //   control: 'selectinput',
//       //   placeholder: 'None',
//       //   collection: {
//       //     'in': 'In',
//       //     'out': 'Out',
//       //     'up': 'Up',
//       //     'down': 'Down',
//       //     'left': 'Left',
//       //     'right': 'Right',
//       //   },
//       //   // value: ''
//       // } ),
//       //
//       // f.field( {
//       //   key: 'password',
//       //   control: 'password',
//       //   placeholder: 'Enter password',
//       //   secondaryPlaceholder: 'Confirm password',
//       // } ),
//       //
//       // f.field( {
//       //   key: 'country',
//       //   control: 'country',
//       // } ),
//       //
//       // f.field( {
//       //   key: 'language',
//       //   control: 'language',
//       // } ),
//       //
//       // f.field( {
//       //   key: 'timezone',
//       //   control: 'timezone',
//       // } ),
//
//
//
//
//
//
//
//
//
//
//       //
//       //
//       f.field( {
//         key: 'form',
//         // label: false,
//         control: 'many',
//         item: 'component',
//         form: app.formBuilderComponent,
//         // layout: "compact",
//
//       } ),
//
//       f.field( {
//         key: 'data_param',
//         label: 'Data parameter',
//       } ),
//
//       f.field( {
//         key: 'scope',
//         label: 'Scope',
//       } ),
//
//       // f.field( {
//       //   key: 'layout',
//       //   control: 'select',
//       //   collection: {
//       //     '': 'Normal',
//       //     'compact': 'Compact',
//       //     'horizontal': 'Horizontal',
//       //     'comapct horizontal': 'Compact and horizontal',
//       //   },
//       // } ),
//       //
//
//       a.hr,
//
//       f.field( {
//         key: 'tests',
//         item: 'test',
//         control: 'many',
//         form: (ff) => [
//
//           ff.field( {
//             key: 'params',
//             label: 'Parameters',
//             control: 'json',
//             value: '{}',
//             // layout: 'compact',
//             json: {
//               stringify: false
//             }
//           } ),
//
//           a.p( [
//
//             ff.button( {
//               text: "Run test",
//               onclick: (e,el) => {
//                 let params = el.$('^appkit-form-many-items-item-fields appkit-form-field').$data()
//                 let target = el.$('^appkit-form-many-items-item-fields formbuilder-test-target')
//                 // let params
//
//                 // try {
//                 //   params = JSON.parse( json )
//                 // } catch(error) {
//                 //   target.$nodes = a['div.alert.alert-danger']( error.message )
//                 //   return false
//                 // }
//
//                 let formData = el.$('^form').$data()
//                 // let formNodesSpec = formSpec.form
//
//                 let formFromSpec = function( f, formSpec ) {
//                   let result = []
//                   formSpec.forEach( ( nodeSpec, i ) => {
//                     if ( nodeSpec.form ) {
//                       let nodeFormSpec = nodeSpec.form
//                       nodeSpec.form = (ff) => {
//                         return formFromSpec( ff, nodeFormSpec )
//                       }
//                     }
//                     result[i] = f.field( nodeSpec )
//                   } )
//                   return result
//                 }
//
//                 let formNodes = (f) => [
//                   ...formFromSpec( f, formData.form ),
//                   a.p( [
//                     f.submit( {
//                       text: 'Test submit',
//                       icon: 'fa fa-check',
//                       class: 'btn btn-secondary'
//                     } ),
//                     ' ',
//                     // f.submit(),
//                   ] ),
//                 ]
//
//                 let component = x.form( {
//                   proxy: f.proxy,
//                   form: formNodes,
//                   params: params,
//                   data_param: formData.data_param,
//                 } )
//
//                 target.$nodes = component
//
//               }
//             } ),
//
//           ] ),
//
//
//           a['formbuilder-test-target'](),
//
//         ]
//       } ),
//
//       a.p( [
//         f.button( {
//           text: 'Cancel',
//           icon: 'fa fa-close',
//         } ),
//         ' ',
//         f.submit(),
//       ] ),
//
//     ],
//     data: {
//       data_param: 'tournament',
//       form: [
//         {
//           key: "sport",
//           control: "select",
//           collection_param: "sports"
//         },
//         // {
//         //   key: "sport",
//         //   control: "radios",
//         // },
//         {
//           key: "players",
//           control: "many",
//           form: [
//             {
//               key: 'name',
//             },
//             {
//               key: 'age',
//               type: 'number',
//             },
//             {
//               key: 'colours',
//               control: 'multiselect',
//               collection_param: 'colours'
//             },
//           ]
//         },
//       ],
//       tests: [
//         {
//           params: `
// {
//   "sports": {
//     "golf": "Golf",
//     "cricket": "Cricket"
//   },
//   "colours": [ "red", "green", "blue", "yellow" ],
//   "tournament": {
//     "sport": "golf",
//     "players": [
//       {
//         "name": "Fred",
//         "age": 22,
//         "colours": [ "red", "blue" ]
//       },
//       {
//         "name": "Jack",
//         "age": 35,
//         "colours": [ "red", "yellow" ]
//       }
//     ]
//   }
// }
// `
//         }
//
//       ],
//     }
//   } ),
//
// ] )
//
// //
// //   // app.btn( "Cancel", () => { alert("Bye") }, { buttonTag: { class: "btn btn-primary" } } ),
// //   // app.btn( "Cancel", () => { alert("Bye") }, { buttonTag: { class: "btn btn-primary" } } ),
// //   // app.btn( "Cancel", () => { alert("Bye") }, { buttonTag: { class: "btn btn-primary" } } ),
// //   // app.btn( "Cancel", () => { alert("Bye") }, { buttonTag: { class: "btn btn-primary" } } ),
// //   // app.btn( "Cancel", () => { alert("Bye") }, { buttonTag: { class: "btn btn-primary" } } ),
// //
// // }
//
// // a.form([
// //   a.select( [
// //     a.option("Cat", { value: 'cat'} ),
// //     a.option("Dog", { value: 'dog'} ),
// //   ], {
// //     name: 'pets[]',
// //     multiple: true,
// //   }),
// //   a.a( "Cancel", { type: 'button', href: "/" } ),
// //   a.button( "OK"),
// // ], {
// //   method: "post"
// // }),
//
//
//
//   // ff.field( {
//   //   key: 'type',
//   //   label: false,
//   //   control: 'radios',
//   //   collection: { 'field': 'Field', 'markdown': 'Markdown' },
//   //   value: 'field'
//   // } ),
//   //
//   // ff.field( {
//   //   key: 'markdown',
//   //   label: false,
//   //   control: 'markdown',
//   //   dependent: {
//   //     value: 'markdown',
//   //   },
//   //   // form: (ff) => [
//   //   //
//   //   //   ff.field( {
//   //   //     key: 'type',
//   //   //     control: 'radios',
//   //   //     value: 'HR',
//   //   //     collection: [
//   //   //       'hr',
//   //   //       'br',
//   //   //       '—————',
//   //   //       'h1',
//   //   //       'h2',
//   //   //       'h3',
//   //   //       'h4',
//   //   //       'h5',
//   //   //       'div'
//   //   //     ],
//   //   //   } ),
//   //   //
//   //   //   ff.field( {
//   //   //     key: 'with',
//   //   //     control: 'radios',
//   //   //     dependent: {
//   //   //       pattern: '^(?!(area|base|basefont|br|col|frame|hr|img|input|isindex|link|meta|param)).*$',
//   //   //     },
//   //   //     value: 'none',
//   //   //     collection: { 'none': 'No content', 'text': 'Text', 'nodes': "Nodes" },
//   //   //   } ),
//   //   //   ff.field( {
//   //   //     key: 'text',
//   //   //     control: 'textarea',
//   //   //     dependent: {
//   //   //       value: 'text',
//   //   //     },
//   //   //   } ),
//   //   //   ff.field( {
//   //   //     key: 'nodes',
//   //   //     control: 'nest',
//   //   //     type: 'many',
//   //   //     form: app.formBuilderComponent,
//   //   //     dependent: {
//   //   //       key: 'with',
//   //   //       value: 'nodes',
//   //   //     },
//   //   //   } ),
//   //   // ]
//   // } ),
//   //
//   // ff.field( {
//   //   key: 'field',
//   //   label: false,
//   //   control: 'nest',
//   //   dependent: {
//   //     // search: "^appkit-form-field-many-item",
//   //     key: 'type',
//   //     value: 'field',
//   //   },
//   //   form: (fff) => [
//   //     // fff.field( 'type', {
//   //     //   control: 'selectinput',
//   //     //   value: 'HR',
//   //     //   collection: [ 'HR', 'BR', '—————', 'H1', 'H2', 'H3', 'H4', 'H5', 'DIV' ],
//   //     // } ),
//   //     // fff.field( 'with', {
//   //     //   control: 'radios',
//   //     //   dependent: {
//   //     //     pattern: '^(?!(HR|BR)).*$',
//   //     //   },
//   //     //   value: 'none',
//   //     //   collection: [ [ 'none', 'No content' ], 'text', 'nodes' ],
//   //     // } ),
//   //   ]
//   // } ),
//
// // f.field( {
// //   key: "shirts",
// //   control: "nest",
// //   // type: "many",
// //   form: (ff) => [
// //     ff.field( {
// //       key: "size",
// //       control: "select",
// //       collection: [ 's', 'm', 'l' ],
// //     } )
// //   ],
// // } ),
//
// //
// // f.field( {
// //   key: "shoes",
// //   control: "multiselect",
// //   collection: [
// //     "nike",
// //     "rebock",
// //     "adidas",
// //   ],
// // } ),
// //
// // f.field( {
// //   key: "name",
// //   confirm: true,
// // } ),
// //
// // f.field( {
// //   key: "score",
// //   type: "range",
// // } ),
// //
// // f.field( {
// //   key: "comment",
// //   control: "textarea",
// // } ),
// //
// // f.field( {
// //   key: "code",
// //   control: "code",
// //   code: {
// //     mode: 'javascript',
// //     keymap: true,
// //   }
// // } ),
// //
// // f.field( {
// //   key: "copy",
// //   control: "markdown",
// // } ),
// //
// // f.field( {
// //   key: "cars",
// //   control: "selectinput",
// //   placeholder: 'Select',
// //   value: 'on',
// //   collection: { 'on': "On", 'off': "Off" }
// // } ),
// //
// // f.field( {
// //   key: "country",
// //   control: "country",
// // } ),
// //
// // f.field( {
// //   key: "language",
// //   control: "language",
// // } ),
// //
// // f.field( {
// //   key: "timezone",
// //   control: "timezone",
// // } ),
// //
// // f.field( {
// //   key: "pets",
// //   control: 'select',
// //   collection: [ "dog", "cat" ],
// //   multiple: true,
// //   // dependent: {
// //   //   key: 'name',
// //   //   // value: 'q'
// //   // },
// // } ),
// //
// // f.field( {
// //   key: "pet",
// //   control: 'select',
// //   collection: [ "dog", "cat" ],
// //   placeholder: ' ',
// //   dependent: true,
// //   // dependent: {
// //   //   key: 'name',
// //   //   // value: 'q'
// //   // },
// // } ),
// //
// // f.field( {
// //   key: "sport",
// //   control: 'checkboxes',
// //   collection: [ "golf", "cricket", "rugby" ],
// //   dependent: true,
// // } ),
// //
// // f.field( {
// //   key: "colour",
// //   control: 'radios',
// //   collection: [ "red", "blue" ],
// //   placeholder: "fred",
// //   multiple: true,
// //   dependent: true,
// // } ),
// //
// // f.field( {
// //   key: "iamcool",
// //   control: 'checkbox',
// //   datatype: 'boolean',
// //   epithet: "Yeees",
// //   help: "Help me!\n-----",
// //   dependent: true,
// // } ),
//
// // f.data,
//
// //
// //
// //     // f.field( "name", {
// //     //   control: 'password',
// //     //   required: true,
// //     //   confirm: true,
// //     //   groupTag: { class: "form-group" },
// //     //   input: {
// //     //     class: "form-control",
// //     //     confirmationTag: { class: 'form-control mt-1'},
// //     //   },
// //     //   password: {
// //     //     class: "form-control",
// //     //     confirmation: { class: 'form-control mt-1'},
// //     //   }
// //     // } ),
// //     // f.field( "age", {
// //     //   type: "number",
// //     //   datatype: "number",
// //     //   confirmation: true,
// //     //   groupTag: { class: "form-group" },
// //     //   input: { class: "form-control" }
// //     // } ),
// //     // f.field( "story", {
// //     //   control: "textarea",
// //     //   groupTag: { class: "form-group" },
// //     //   textarea: { class: "form-control" }
// //     // } ),
// //     // f.field( "colours", {
// //     //   control: 'checkboxes',
// //     //   dependent: true,
// //     //   collection: [ 'red', 'blue', 'green', 'yellow' ],
// //     //   groupTag: { class: "form-group" },
// //     //   input: { class: "form-control" }
// //     // } ),
// //     // f.field( "colour", {
// //     //   control: 'radios',
// //     //   collection: [ 'red', 'blue', 'green', 'yellow' ],
// //     //   groupTag: { class: "form-group" },
// //     //   input: { class: "form-control" }
// //     // } ),
// //     // f.field( "my_colour", {
// //     //   control: 'select',
// //     //   collection: [ 'red', 'blue', 'green', 'yellow' ],
// //     //   groupTag: { class: "form-group" },
// //     //   select: { class: "form-control" }
// //     // } ),
// //     // f.field( "code", {
// //     //   control: "code",
// //     //   groupTag: { class: "form-group" },
// //     //   code: {
// //     //     // mode: 'javascript',
// //     //     // keymap: { value: 'vim' },
// //     //     mode: true,
// //     //     keymap: true,
// //     //   },
// //     //   // dependent: { pattern: "fred" },
// //     // } ),
// //     // f.field( "addresses", {
// //     //   help: "Help here.",
// //     //   control: 'nest',
// //     //   type: 'many',
// //     //   item: "address",
// //     //   // labelTag: { class: 'label' },
// //     //   dependent: { pattern: "let" },
// //     //   groupTag: { class: "form-group" },
// //     //   nest: {
// //     //     buttonsWrapperTag: { class: "clearfix" },
// //     //     buttonsTag: { class: "float-right" },
// //     //     upButton: { class: "btn btn-link btn-sm" },
// //     //     downButton: { class: "btn btn-link btn-sm" },
// //     //     removeButton: { class: "btn btn-link btn-sm" },
// //     //     addButton: { class: "btn btn-link" },
// //     //     addButtonWrapperTag: { class: "clearfix" },
// //     //     addButtonTag: { class: "float-right" },
// //     //     itemsTag: { class: "list-group" },
// //     //     itemTag: { class: "list-group-item" },
// //     //     oneTag: { class: "card card-body" },
// //     //   },
// //     //
// //     //   // add
// //     //   // { button: {
// //     //   //     icon: "fa fa-plus",
// //     //   //     buttonTag: { class: "btn btn-link" }
// //     //   // } }
// //     //
// //     //   form: (ff) => [
// //     //     ff.field( "street1", { input: { class: "form-control" } } ),
// //     //     ff.field( "street2", { dependent: true, input: { class: "form-control" } } ),
// //     //     ff.field( "city", { input: { class: "form-control" } } ),
// //     //     ff.field( "state", { input: { class: "form-control" } } ),
// //     //     ff.field( "postcode", {
// //     //       input: { class: "form-control" },
// //     //       required: true,
// //     //       pattern: "[0-9A-Z]{4,8}",
// //     //       invalid: (a,b)=>{
// //     //         ax.log( b )
// //     //         return b.valueMissing ?
// //     //           "Gimme value..." :
// //     //           `You can't enter ${ a }!`
// //     //       },
// //     //     } ),
// //     //     ff.field( "nicknames", {
// //     //       control: "nest",
// //     //       type: "many",
// //     //       form: (fff) => [
// //     //         // fif,
// //     //         fff.field( "name", { input: { class: "form-control" } } ),
// //     //         fff.field( "nicknames", {
// //     //           control: "nest",
// //     //           type: "many",
// //     //           form: (ffff) => [
// //     //             // fif,
// //     //             ffff.field( "name", { input: { class: "form-control" } } ),
// //     //           ],
// //     //           nest: {
// //     //             buttonsWrapperTag: { class: "clearfix" },
// //     //             buttonsTag: { class: "float-right" },
// //     //             upButton: { class: "btn btn-link btn-sm" },
// //     //             downButton: { class: "btn btn-link btn-sm" },
// //     //             removeButton: { class: "btn btn-link btn-sm" },
// //     //             addButton: { class: "btn btn-link" },
// //     //             addButtonWrapperTag: { class: "clearfix" },
// //     //             addButtonTag: { class: "float-right" },
// //     //             itemsTag: { class: "list-group" },
// //     //             itemTag: { class: "list-group-item" },
// //     //             oneTag: { class: "card card-body" },
// //     //           },
// //     //         } ),
// //     //
// //     //
// //     //       ],
// //     //       nest: {
// //     //         buttonsWrapperTag: { class: "clearfix" },
// //     //         buttonsTag: { class: "float-right" },
// //     //         upButton: { class: "btn btn-link btn-sm" },
// //     //         downButton: { class: "btn btn-link btn-sm" },
// //     //         removeButton: { class: "btn btn-link btn-sm" },
// //     //         addButton: { class: "btn btn-link" },
// //     //         addButtonWrapperTag: { class: "clearfix" },
// //     //         addButtonTag: { class: "float-right" },
// //     //         itemsTag: { class: "list-group" },
// //     //         itemTag: { class: "list-group-item" },
// //     //         oneTag: { class: "card card-body" },
// //     //       },
// //     //     } ),
// //     //   ],
// //     // } ),
// //     // f.button( { class: "btn btn-link" } ),
