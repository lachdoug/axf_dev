ax.extension.quilljs.form.richedit = function(
  f, options
) {

  let a = ax.a

  return a['appkit-form-quilljs-markdown']( [
    a['appkit-form-quilljs-markdown-container']( {
      $on: { 'text-change: update hidden textarea': function () {
      } }
    } ),
    a['appkit-form-quilljs-markdown-textarea']( a.textarea( {
      name: options.name,
      value: options.value,
    } ) ),
  ], {
    $value: function() {
      return this.$quill ? this.$quill.value() : options.value;
    },
    $init: function() {
      let container = this.$('appkit-form-quilljs-markdown-container')
      this.$quill = new Quill( container, {
        modules: {
          toolbar: [
            ['bold', 'italic'],
            ['link', 'blockquote', 'code-block', 'image'],
            [{ list: 'ordered' }, { list: 'bullet' }]
          ]
        },
        theme: options.theme || "snow",
        placeholder: options.placeholder,
        readOnly: options.readonly,
        ...options.quill
      } );
      this.$quill.on('text-change', () => {
        // debugger
        this.$update()
      } )

    },
    $update: function () {
      let value = JSON.stringify( this.$quill.getContents() )
      this.$( "appkit-form-quilljs-markdown-textarea textarea" ).value = value
    },
    ...options.quilljsTag
  } )

};
