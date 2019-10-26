// app.form.field = function( f, options={} ) {
//
//   let a = ax.a
//   let x = ax.x
//
//   // <div class="form-group form-check">
//   //   <input type="checkbox" class="form-check-input" id="exampleCheck1">
//   //   <label class="form-check-label" for="exampleCheck1">Check me out</label>
//   // </div>
//
//   let defaultArrange = function() {
//     let nest = options.control == 'one' || options.control == 'many'
//     return nest ? 'vertical' : f.layout.arrange || 'vertical'
//   }
//
//   let layoutOptions = options.layout || {}
//   let size = layoutOptions.size || f.layout.size || 'medium'
//   let small = size == 'small'
//   let large = size == 'large'
//   let arrange = layoutOptions.arrange || defaultArrange()
//   let horizontal = arrange == 'horizontal'
//   let spacing = layoutOptions.spacing || f.layout.spacing || 'normal'
//   let control = options.control || 'input'
//   let type = options.type || 'text'
//   // let compact = spacing == 'compact'
// // debugger
//   if ( options.help ) {
//     options.help = x.md( options.help )
//   }
//
//
//   let formControlClass = `
//     form-control
//     ${ small ? 'form-control-sm' : '' }
//     ${ large ? 'form-control-lg' : '' }
//     form-control-${ control }
//     form-control-size-${ size }
//     form-control-arrange-${ arrange }`
//     // form-control-type-${ type }
//
//   return x.appkit.form.factory.field(f)( {
//
//     layout: {
//       arrange: arrange,
//       size: size,
//       spacing: spacing,
//     },
//
//     // help: options.help ? x.md( options.help ) : null,
//
//     labelTag: {
//       class: `form-label form-label-spacing-${ spacing } form-label-size-${ size } form-label-arrange-${ arrange } form-label-${ control }`,
//     },
//
//     groupTag: {
//       class: `${ horizontal ? 'row' : '' } form-group form-group-spacing-${ spacing } form-group-size-${ size } form-group-arrange-${ arrange } form-group-${ control }`,
//       // class: `form-group ${ horizontal ? 'row' : '' }`,
//       ...options.groupTag
//     },
//
//     headerTag: {
//       class: `${ horizontal ? 'col-3 col-form-label' : '' } form-group-header form-group-header-spacing-${ spacing } form-group-header-size-${ size } form-group-header-arrange-${ arrange } form-group-header-${ control }`,
//       ...options.headerTag
//     },
//
//     bodyTag: {
//       class: `${ horizontal ? 'col-9' : '' } form-group-body form-group-body-spacing-${ spacing } form-group-body-size-${ size } form-group-body-arrange-${ arrange } form-group-body-${ control }`,
//       ...options.bodyTag
//     },
//
//     ...options,
//
//     checkboxes: {
//       check: {
//         class: `form-check-input form-check-input-spacing-${ spacing } form-check-input-size-${ size } form-check-input-arrange-${ arrange }`,
//         wrapperTag: { class: `form-check form-check-spacing-${ spacing } form-check-size-${ size } form-check-arrange-${ arrange } form-check-${ control }` },
//         epithetTag: { class: `form-check-label form-check-label-spacing-${ spacing } form-check-label-size-${ size } form-check-label-arrange-${ arrange }` },
//         ...( options.checkboxes || {} ).check,
//       },
//       ...options.checkboxes
//     },
//     radios: {
//       check: {
//         class: `form-check-input form-check-input-spacing-${ spacing } form-check-input-size-${ size } form-check-input-arrange-${ arrange }`,
//         wrapperTag: { class: `form-check form-check-spacing-${ spacing } form-check-size-${ size } form-check-arrange-${ arrange } form-check-${ control }` },
//         epithetTag: { class: `form-check-label form-check-label-spacing-${ spacing } form-check-label-size-${ size } form-check-label-arrange-${ arrange }` },
//         ...( options.radios || {} ).check,
//       },
//       ...options.radios
//     },
//     checkbox: {
//       check: {
//         class: `
//           form-check-input
//           form-check-input-spacing-${ spacing }
//           form-check-input-size-${ size }
//           form-check-input-arrange-${ arrange }`,
//           // custom-control-input`,
//         wrapperTag: { class: `form-check form-check-spacing-${ spacing } form-check-size-${ size } form-check-arrange-${ arrange } form-check-${ control }` },
//         epithetTag: { class: `form-check-label form-check-label-spacing-${ spacing } form-check-label-size-${ size } form-check-label-arrange-${ arrange }` },
//         ...options.check
//       },
//     },
//
//     textarea: {
//       class: formControlClass,
//       ...options.textarea
//     },
//     input: {
//       class: formControlClass,
//       ...options.input
//     },
//
//     color: {
//       class: formControlClass,
//       ...options.input
//     },
//
//     date: {
//       class: formControlClass,
//       ...options.input
//     },
//
//     email: {
//       class: formControlClass,
//       ...options.input
//     },
//
//     number: {
//       class: formControlClass,
//       ...options.input
//     },
//
//     tel: {
//       class: formControlClass,
//       ...options.input
//     },
//
//     string: {
//       class: formControlClass,
//       ...options.input
//     },
//
//     time: {
//       class: formControlClass,
//       ...options.input
//     },
//
//     url: {
//       class: formControlClass,
//       ...options.input
//     },
//
//
//     // check: {
//     //   class: "form-check-input",
//     //   ...options.check
//     // },
//     select: {
//       class: `
//       custom-select
//       ${ small ? 'custom-select-sm' : '' }
//       ${ large ? 'custom-select-lg' : '' }
//       ${ formControlClass }`,
//       ...options.select
//     },
//     multiselect: {
//       secondaryPlaceholder: options.secondaryPlaceholder,
//       select: {
//         class: `
//         custom-select
//         ${ small ? 'custom-select-sm' : '' }
//         ${ large ? 'custom-select-lg' : '' }
//         ${ formControlClass }`,
//       },
//       itemTag: {
//         class: `appkit-form-multiselect-selected-item-size-${ size }`,
//       },
//       ...options.multiselect
//     },
//     selectinput: {
//       secondaryPlaceholder: options.secondaryPlaceholder,
//       select: {
//         class: `
//         custom-select
//         ${ small ? 'custom-select-sm' : '' }
//         ${ large ? 'custom-select-lg' : '' }
//         ${ formControlClass }`,
//       },
//       input: {
//         class: formControlClass,
//       },
//       ...options.selectinput
//     },
//     password: {
//       secondaryPlaceholder: options.secondaryPlaceholder,
//       class: formControlClass,
//       ...options.password
//     },
//     country: {
//       select: {
//         class: `
//         custom-select
//         ${ small ? 'custom-select-sm' : '' }
//         ${ large ? 'custom-select-lg' : '' }
//         ${ formControlClass }`,
//       },
//       ...options.country
//     },
//     timezone: {
//       select: {
//         class: `
//         custom-select
//         ${ small ? 'custom-select-sm' : '' }
//         ${ large ? 'custom-select-lg' : '' }
//         ${ formControlClass }`,
//       },
//       ...options.timezone
//     },
//     language: {
//       select: {
//         class: `
//         custom-select
//         ${ small ? 'custom-select-sm' : '' }
//         ${ large ? 'custom-select-lg' : '' }
//         ${ formControlClass }`,
//       },
//       ...options.language
//     },
//     code: {
//       keymap: {
//         value: $preferences.codeEditorKeymap,
//       },
//       ...options.code
//     },
//     one: {
//       nestTag: { class: `card card-body card-body-spacing-${ spacing } card-body-size-${ size } card-body-arrange-${ arrange } card-body-nest` },
//       ...options.one
//     },
//     many: {
//       itemHeaderTag: { class: "clearfix" },
//       buttonsTag: { class: "float-right" },
//       upButton: { class: "btn btn-link btn-sm" },
//       downButton: { class: "btn btn-link btn-sm" },
//       removeButton: { class: "btn btn-link btn-sm" },
//       addButton: { class: "btn btn-link" },
//       nestsTag: {
//         $on: {
//           'axAppkitFormFieldNestsItemRemoved': (e,el) => {
//             el.$(':scope > appkit-form-many-items-footer many-dragable-checkbox').$refresh()
//             e.stopPropagation()
//           },
//           'axAppkitFormFieldNestsItemAdded': (e,el) => {
//             el.$(':scope > appkit-form-many-items-footer many-dragable-checkbox').$refresh()
//             e.stopPropagation()
//           },
//           // 'axAppkitFormFieldNestsDisabled': (e,el) => {
//           //   el.$('many-dragable-checkbox').$refresh()
//           // },
//           // 'axAppkitFormFieldNestsEnabled': (e,el) => {
//           //   el.$('many-dragable-checkbox').$refresh()
//           // },
//           // axAppkitFormFieldNestsDisabled
//           // axAppkitFormFieldNestsEnabled
//           'dragable': (e,el) => {
//             let itemsTag = el.$('^appkit-form-field-nests appkit-form-field-nests-items')
//             itemsTag.$$('many-dragable-checkbox').$demote()
//             itemsTag.$$(':scope > appkit-form-field-nests-item > appkit-form-many-item-header > appkit-form-many-item-header-auxiliary > many-dragable-handle').$show()
//             el.$disable() // Disable inner form components
//             e.stopPropagation()
//           },
//           'undragable': (e,el) => {
//             let itemsTag = el.$('^appkit-form-field-nests appkit-form-field-nests-items')
//             itemsTag.$$('many-dragable-checkbox').$refresh()
//             itemsTag.$$(':scope > appkit-form-field-nests-item > appkit-form-many-item-header > appkit-form-many-item-header-auxiliary > many-dragable-handle').$hide()
//             el.$enable()
//             e.stopPropagation()
//           },
//         },
//       },
//       itemHeaderAuxiliaryTag: () => a['many-dragable-handle'](
//         "☰",
//         {
//           class: 'btn btn-link',
//           style: { display: 'none' },
//           $show: function() {
//             this.style.display = 'unset'
//           },
//           $hide: function() {
//             this.style.display = 'none'
//           },
//         }
//       ),
//       itemsFooterAuxiliaryTag: {
//         $nodes: [
//           a['many-dragable-checkbox'](
//             f.check( {
//               epithet: '⮁',
//               inputTag: {
//                 // $disable: function() {
//                 //
//                 // },
//                 // $dragable: function() {
//                 //   // this.$('^appkit-form-field-nests').$dragable()
//                 //   x.appkit.lib.event( this, "dragable")
//                 //   sortable( this, {
//                 //     forcePlaceholderSize: true
//                 //   } )
//                 // },
//                 // $undragable: function() {
//                 //   // debugger
//                 //   // this.$('^appkit-form-field-nests').$undragable()
//                 //   x.appkit.lib.event( this, "undragable")
//                 //   sortable( this, 'destroy' )
//                 // },
//
//               }
//             } ),
//             {
//               // $refresh: function() {
//               //   this.$('input').$refresh
//               // },
//               $on: {
//                 'change: dragable': (e,el) => {
//                   let itemsTag = el.$('^appkit-form-field-nests appkit-form-field-nests-items')
//                   if ( el.$('input').checked ) {
//                     sortable( itemsTag, {
//                       forcePlaceholderSize: true
//                     } )
//                     x.appkit.lib.event( itemsTag, "dragable")
//                   } else {
//                     sortable( itemsTag, 'destroy' )
//                     x.appkit.lib.event( itemsTag, "undragable")
//                   }
//                 },
//               },
//               $demote: function() {
//                 // debugger
//                 let input = this.$('input')
//                 if ( input.checked ) {
//                   input.click()
//                 }
//                 this.style.display = 'none'
//               },
//               // $refresh: function() {
//               //   let input = this.$('input')
//               //   this.style.display = 'unset'
//               // },
//               $refresh: function() {
//                 let count = this.$('^appkit-form-field-nests appkit-form-field-nests-items').children.length
//                 // debugger
//                 let input = this.$('input')
//                 if ( count > 1 ) {
//                   this.style.display = 'unset'
//                   input.removeAttribute('disabled')
//                 } else {
//                   this.style.display = 'none'
//                   input.setAttribute( 'disabled', 'disabled' )
//                 }
//               },
//               // $enable: function() {
//               //   this.$refresh()
//               // },
//               $init: function() {
//                 this.$refresh()
//               },
//             }
//           )
//           // a.input( { type: 'checkbox' } ),
//           // a['many-dragable-checkbox'](
//           //   f.button( {
//           //     label: '⮁ Drag',
//           //     class: "btn btn-link",
//           //     onclick: function (e,el) {
//           //       el.$('^appkit-form-field-nests appkit-form-field-nests-items').$dragable()
//           //     },
//           //     buttonTag: {
//           //       $conditionalEnable: function() {
//           //         let count = this.$('^appkit-form-field-nests appkit-form-field-nests-items').children.length
//           //         // debugger
//           //         if ( count > 1 ) {
//           //           this.removeAttribute('disabled')
//           //         } else {
//           //           this.$disable()
//           //         }
//           //       },
//           //       $enable: function() {
//           //         this.$conditionalEnable()
//           //       },
//           //       $init: function() {
//           //         this.$conditionalEnable()
//           //       },
//           //     },
//           //   } )
//           // ),
//           // a['appkit-form-field-nests-undragable'](
//           //   a.button( {
//           //     type: 'button',
//           //     $text: '⮁ Drag off',
//           //     class: "btn btn-link",
//           //     $on: {
//           //       click: function(e,el) {
//           //         // debugger
//           //         el.$('^appkit-form-field-nests appkit-form-field-nests-items').$undragable()
//           //       }
//           //     },
//           //     // onclick: function (e,el) {
//           //     // },
//           //     // buttonTag: {
//           //       // $conditionalEnable: function() {
//           //       //   let count = this.$('^appkit-form-field-nests appkit-form-field-nests-items').children.length
//           //       //   // debugger
//           //       //   if ( count > 1 ) {
//           //       //     this.removeAttribute('disabled')
//           //       //   } else {
//           //       //     this.$disable()
//           //       //   }
//           //       // },
//           //       // $enable: function() {
//           //       //   this.style.display = 'unset'
//           //       // },
//           //       // $disable: function() {
//           //       //   this.style.display = 'none'
//           //       // },
//           //       // $init: function() {
//           //       //   this.$conditionalEnable()
//           //       // },
//           //     // },
//           //   } )
//           // ),
//         ]
//       },
//       itemsFooterTag: {
//         class: "clearfix",
//       },
//       addButtonTag: { class: "float-right" },
//       itemTag: {
//         class: `list-group-item list-group-item-spacing-${ spacing } list-group-item-size-${ size } list-group-item-arrange-${ arrange } list-group-item-many`
//       },
//       itemsTag: {
//         class: `list-group list-group-spacing-${ spacing } list-group-size-${ size } list-group-arrange-${ arrange } list-group-many`,
//       },
//       ...options.many
//     },
//
//   } )
//
// }
