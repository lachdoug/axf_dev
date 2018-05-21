// function ACellDslFormBuilder(cellBuilder) {
//
//   this.form = function(componentsOrFunctionOrFormArgs, formOptions) {
//     if ( typeof componentsOrFunctionOrFormArgs === 'object' ) {
//       formArgs = componentsOrFunctionOrFormArgs;
//   	} else {
//       formArgs = Object.assign(
//         { components: componentsOrFunctionOrFormArgs },
//         ( formOptions || {} )
//       );
//     };
//
//     if ( typeof formArgs.components === "function" ) {
//       var aCellDslFormField = new ACellDslFormFieldBuilder( cellBuilder, formArgs )
//       formArgs.components = formArgs.components( aCellDslFormField );
//     };
//
//     return cellBuilder.form({
//       name: formArgs.name,
//       method: formArgs.method || 'POST',
//       action: formArgs.action,
//       // enctype: formArgs.encode || 'json', // default is 'json'. also 'urlencoded' for application/x-www-form-urlencoded, 'multipart' for multipart/form-data, 'text' for text/plain
//       $components: formArgs.components,
//     });
//
//   };
//
// };
