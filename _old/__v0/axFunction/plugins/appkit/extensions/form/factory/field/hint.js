ax.extensions.form.factory.field.hint = function(
  hint
) {

  if ( typeof hint === 'object' ) {
    return hint
  } else {
    return ax.a.hint( hint )
  }

};
