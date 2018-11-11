ax.extensions.form.cancel = function(
  onclickFunction,
  components,
  options
) {

  var a = ax.a;

  var missingOnclickFunction = function (e) {
    console.error("Ax error: Cancel needs onclick function.")
  };

  onclickFunction = onclickFunction || missingOnclickFunction;
  components = components || "Cancel";
  options = options || {};

  var attributes = Object.assign(
    {
      type: "button",
      onclick: function(e) { onclickFunction(e); },
    },
    options.attributes || {}
  )

  return a.button( components, attributes );

};
