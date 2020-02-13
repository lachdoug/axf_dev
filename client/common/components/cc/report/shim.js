cc.report.shim = {

  help: ( r, target ) => ( options={} ) => {
    let help = options.help ? (a,x) => app.md( options.help ) : null
    return target( {
      ...options,
      help: help,
    } );
  },

  template: ( r, target ) => ( options={} ) => {
    debugger
    let template = options.template ? (a,x) => cc.md( options.template(r) ) : null
    return template
  },

  controls: {
    // json: ( r, target ) => ( options={} ) => (a,x) => x.jsoneditor.report.control( r, { theme: 'bootstrap3', ...options } ),
    markdown: ( r, target ) => ( options={} ) =>
      (a,x) => x.markedjs.report.control( r, {
        ...options,
        markdownTag: {
          class: 'border border-light p-2',
          ...options.markdownTag,
        }
      } ),
    code: ( r, target ) => ( options={} ) => (a,x) => x.codemirror.report.control( r, options ),

  },


  fieldset: ( r, target ) => ( options={} ) => (a,x) => f.dependent( {
    body: a['fieldset|appkit-form-control']( [
      options.legend ? a.legend( options.legend, options.legendTag ) : null,
      options.body || null,
    ], options.fieldsetTag ),
    ...options.dependent,
  } ),

  row: ( r, target ) => ( options={} ) => (a,x) => a['div.row'](
    ( options.columns || [] ).map( (column) => a['div.col'](column) ),
    options.fieldsetTag
  ),


}
