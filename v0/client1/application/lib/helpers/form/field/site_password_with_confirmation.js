function formFieldSitePasswordWithConfirmation( args ) {
	return formFieldWrapper(
		args,{
			$components: [
				formFieldInputUnwrapped(
					$.extend( {}, args, {
						type: "password",
						oninput: function () {
							formFieldSitePasswordWithConfirmationCheckMatch(args.id);
						},
					} )
				),
				formFieldInputUnwrapped(
					$.extend ( {}, args, {
						type: "password",
						id: args.id + "_confirmation",
						placeholder: "Confirm password",
						style: "margin-top: 5px;",
						oninput: function () {
							formFieldSitePasswordWithConfirmationCheckMatch(args.id);
						},
					} )
				),
			]
		}
	);
};

function formFieldSitePasswordWithConfirmationCheckMatch (inputId) {
	if ( $( "#" + inputId ).val() != $( "#" + inputId + "_confirmation" ).val() ) {
			$( "#" + inputId + "_confirmation" )[0].setCustomValidity("Passwords must match.");
	} else {
			$( "#" + inputId + "_confirmation" )[0].setCustomValidity("");
	}
};
