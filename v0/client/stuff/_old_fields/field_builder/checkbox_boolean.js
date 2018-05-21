var formFieldCheckboxBoolean = function( args ) {

	var checked = [ 'true', 'on', 'yes', '1' ].some( function(option) { return option == ( args.value || "" ).toString().toLowerCase(); } );

	return formFieldWrapper(
		Object.assign ( {}, args, { label: false, title: ( args.title || args.label ) } ),
		{
			class: "checkbox",
			style: "margin-left: 10px;",
			$components: [
				{
					$type: "input",
					name: ( args.name || "" ),
					id: ( args.id || "" ),
					value: checked ? 'true' : 'false',
					type: "hidden",
				},
				{
					$type: "label",
					$components: [
						Object.assign(
							{
								$type: "input",
								title: ( args.title || args.label ),
								required: ( args.required || null ),
								type: "checkbox",
								onchange: function () {
									Document.querySelector(this).parent().prev().val( Document.querySelector(this).prop('checked') );
								},
							},
							checked ? { checked: "checked" } : {},
						),
						args.label == false ? {} : {
							$type: "strong",
							style: "margin-left: 5px;",
							$text: ( args.label || args.name )
						}
					],
				}
			],
		}
	);
};
