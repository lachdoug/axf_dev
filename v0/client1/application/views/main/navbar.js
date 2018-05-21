var $navbar = {

	$cell: true,
	id: "navbar",
	class: "clearfix",
	// style: "z-index: 2; position: absolute; top: 0; left: 0; right: 0;",

	_live: function () {
		this.$components = [
			{
				class: "navbar-brand",
				style: "padding: 7px 15px; line-height: 30px;",
				$components: [
					{
						$type: "span",
						style: "margin-top: -3px;",
						$components: [ enginesIconSvg(20) ]
					},
					{
						$type: "span",
						style: "vertical-align: middle;",
						$text: "Engines "
					},
					// {
					// 	$type: "small",
					// 	style: "vertical-align: middle;",
					// 	$text: systemApiUrl
					// },
				]
			},
			button({
				onclick: main._signOut,
				wrapperId: "navbarSignOutButton",
				wrapperClass: "pull-right",
				wrapperStyle: "display: none;",
				title: "Sign out",
				icon: "fa fa-sign-out"
			})
		]
	}
};
