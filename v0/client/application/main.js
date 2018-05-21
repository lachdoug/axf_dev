// // aCell( (a) => ["Hello", a.dsl.form( (f) => [ f.input("first_name") ]) ]);
// //
// // //
// // // thing = {
// // // 	$cell: true,
// // // 	$components: [
// // // 		{ $text: "Hello", id: "greet" },
// // // 		{ $type: "button", $text: "OK", onclick: () => { greet.$text = "Goodbye" } }
// // // 	]
// // // }
// //
// //
// //
// //
// // // //
// // // // aCell( (a) => [
// // // // 	a.dsl.form( {
// // // // 		action: "/testform",
// // // // 		name: "user",
// // // // 		data: { year: 2031 },
// // // // 		components: (f) => [
// // // // 			f.field( "color", { type: "color" } ),
// // // // 			f.field( "date", { type: "date" } ),
// // // // 			f.field( "datetime", { type: "datetime" } ),
// // // // 			f.field( "datetime-local", { type: "datetime-local" } ),
// // // // 			f.field( "email", { type: "email" } ),
// // // // 			f.field( "file", { type: "file" } ),
// // // // 			f.field( "hidden", { type: "hidden" } ),
// // // // 			f.field( "number", { type: "number" } ),
// // // // 			f.field( "range", { type: "range" } ),
// // // // 			f.field( "telephone", { type: "tel" } ),
// // // // 			f.field( "time", { type: "time" } ),
// // // // 			f.field( "url", { type: "url" } ),
// // // // 			f.field( "checkbox", { type: "checkbox" } ),
// // // // 			f.field( "password", { type: "site_password" } ),
// // // //
// // // // 			f.field( "year", { type: "number", help: "Do stuff." } ),
// // // //       f.field( "name", {
// // // // 				type: "string",
// // // // 				// help: { $type: "help", $text: "?", style: "cursor: pointer;", onclick: () => alert("This is helpful.") },
// // // // 				help: "Wow",
// // // // 				comment: "This is a field for entering data. Please enter data nicely.",
// // // // 				hint: "Woooo",
// // // // 				label: "Cool",
// // // // 				dependent: { name: "year", pattern: "^(?!2030).*$" }
// // // // 			} ),
// // // // 			a.button( "OK - use dsl submit" ),
// // // // 		]
// // // // 	} ),
// // // // 	a.hr()
// // // // ] );
// // // //
// // // //
// // // //
// // // //
// // // //
// // // //
// // // // // a.dslLoad({
// // // // // 	url: '/testform',
// // // // // 	render: function(data) {
// // // // // 		return a.dslForm({
// // // // // 			name: "user",
// // // // // 			data: data,
// // // // // 			components: (f) => [
// // // // // 				f.field("first_name")
// // // // // 			],
// // // // // 			// url: '/testform'
// // // // // 			// method: 'GET',
// // // // // 		});
// // // // // 	},
// // // // // });
// // // //
// // // //
// // // //
// // //
// // // //
// // //
// // //
// // // aCell( (a) => a.hr() )
// // //
// aCell( "Hello World" );
// aCell( "Hello World", { style:'color:red;' } )
// aCell( [ "Hello", "World" ], { style: "margin: 20px;" } );
// aCell( [ [ "H", "e", "l", "l", "o" ], "World" ], { style: "margin: 20px;" } );
// aCell( [
// 	{ $text: "This is text.", style: "color: green;" },
// 	{ $html: "<i>So is this</i>", style: "color: blue;" }
// ] );
// //
// aCell(
// 	function(aCellBuilder) {
// 		return [
// 			aCellBuilder.tag( 'h1', "Heading 1" ),
// 			aCellBuilder.tag( 'h2', "Heading 2" ),
// 		]
// 	},
// 	{ style: "text-align: center;" }
// );
//
// aCell( (a) =>
// 	[
// 		a.h3( "Heading 3", { class: "something" } ),
// 		a.p( [
// 			a.a( "This is a link!", { href: '/' } ),
// 			"This is not.",
// 		],
// 		{ style: "font-size: 24px;"} )
// 	],
// 	{ style: "border: 1px solid grey; padding: 20px;" }
// );
//
css(`
.rainbow {
	margin: 50px;
	color: lightgrey;
	font-size: 64px;
}
.rainbow span {	padding: 30px; }
.rainbow .red { background-color: red; }
.rainbow .orange { background-color: orange; }
.rainbow .yellow { background-color: yellow; }
.rainbow .green { background-color: green; }
.rainbow .blue { background-color: blue; }
.rainbow .indigo { background-color: indigo; }
.rainbow .violet { background-color: violet; }
`);

aCell( (a) => [
	a.span( "R", { class: "red" } ),
	a.span( "A", { class: "orange" } ),
	a.span( "I", { class: "yellow" } ),
	a.span( "N", { class: "green" } ),
	a.span( "B", { class: "blue" } ),
	a.span( "O", { class: "indigo" } ),
	a.span( "W", { class: "violet" } ) ],
	{
		class: "rainbow",
 		style: "text-align: center; "
	}
);
//
aCell( (a) =>
	[
		{
			_sayFoo: function() {
				this.$components = [ a.div("Foo")	];
				setTimeout(this._sayBar, 1000);
			},
			_sayBar: function() {
				this.$components = [ a.div("Bar")	];
				setTimeout(this._sayFoo, 1000);
			},
			$init: function() { this._sayFoo() },
		},
	],
	{ style: "font-size: 48px; text-align: center;" }
);
//
aCell( (a) => [
	a.span( {
		$html: "&larr;",
		onclick: function() { myCounter._down(); },
		style: "cursor: pointer; color: grey;"
	} ),
	a.span( {
		id: "myCounter",
		_num: 0,
		_up: function() { this._num++; },
		_down: function() { this._num--; },
		$update: function() { this.$text = this._num },
		$init: function() { this.$update() },
		style: "margin: 50px;",
	} ),
	a.span( {
		$html: "&rarr;",
		onclick: function() { myCounter._up(); },
		style: "cursor: pointer; color: grey;"
	} ),
], { style: 'text-align: center; font-size: 96px;'} );
// //
// // aCell( (a) => [
// // 	a.form(
// // 		[
// // 			a.h1("My form"),
// // 			[ a.label( "First name" ) ],
// // 			[ a.input( { name: "first_name"} ) ],
// // 			[ a.label( "Last name" ) ],
// // 			[ a.input( { name: "last_name" } ) ],
// // 			[ a.label( "Age" ) ],
// // 			[ a.input( { name: "age" } ) ],
// // 			a.button("OK")
// // 		],
// // 		{
// // 			action: '/testform',
// // 			method: 'POST',
// // 		}
// // 	),
// // ] );
// //
// //
// //
// // // DSL
// //
// // aCell( (a) => a.h1("DSL") );
// //
// // aCell( (a) => [
// // 	a.dsl.form( {
// // 		action: "/testform",
// // 		$components: [
// // 			a.input( { name: "name", placeholder: "What is your name?" } ),
// // 			a.input( { name: "age", placeholder: "How old are you?" } ),
// // 			a.button("OK")
// // 		]
// // 	} ),
// // 	a.hr()
// // ] );
// //
// // aCell( (a) => [
// // 	a.dsl.form(
// // 		(f) => [
// // 			f.input( "string", { pattern: '1', required: true }, { invalidPatternMessage: "Must be 1" } ),
// // 			f.input( "number", { type: "number", required: true } ),
// // 			f.input( "checkbox", { type: "checkbox", required: true } ),
// // 			f.textarea( "myText" ),
// // 			f.select(
// // 				"select",
// // 				[
// // 					{
// // 						$type: "option",
// // 						value: "one",
// // 						$text: "First thing on the list"
// // 					},
// // 					{
// // 						$type: "option",
// // 						value: "two",
// // 						$text: "Second thing on the list"
// // 					},
// // 					{
// // 						$type: "option",
// // 						value: "three",
// // 						$text: "Third thing on the list"
// // 					}
// // 				],
// // 				{ multiple: true, value: ["two", "three"] },
// // 				{ includeBlank: true }
// // 			),
// // 			f.select(
// // 				"select2",
// // 				[
// // 					{
// // 						$type: "option",
// // 						value: "one",
// // 						$text: "First thing on the list"
// // 					},
// // 					{
// // 						$type: "option",
// // 						value: "two",
// // 						$text: "Second thing on the list"
// // 					}
// // 				],
// // 				{ multiple: true },
// // 				{ includeBlank: true }
// // 			),
// // 			// f.field( "comment", { type: "text" }, { label: false } ),
// // 			// f.field( "comment", { type: "string" } ),
// // 			a.button("button", { onclick: function () { alert("hi"); } }),
// // 			f.cancel([a.i({class:"fa fa-edit"})]),
// // 			f.submit()
// // 		],
// // 		{ action: "/testform" }
// // 	),
// // 	a.hr()
// // ] );
// //
// //
// // aCell( (a) => [
// // 	a.dsl.form( {
// // 		action: "/testform",
// // 		data: { email: "myemail@example.com" },
// // 		$components: (f) => [
// // 			// f.field("email"),
// // 			a.button("Save - use dsl submit"),
// // 		]
// // 	} ),
// // 	a.hr()
// // ] );
// //
// //
// aCell( (a) => [
// 	a.dsl.form( {
// 		action: "/testform",
// 		$components: (f) => [
// 			f.input( "expiry[month]" ),
// 			f.input( "expiry[year]", { type: "number" } ),
// 			f.select( { name: "expiry[renew]", placeholder: "Please select" }, { collection: { 0: "Cool", 1: "Hot" }, includeBlank: true } ),
// 			f.submit(),
// 		]
// 	}, { data: { expiry: { month: 2, year: 2030 } } } ),
// 	a.hr()
// ] );

// aCell( (a) => [
// 	a.h2("My form"),
// 	a.dsl.form(
// 		(f) => [
// 			// a.p([
// 			// 	a.label("Nice"),
// 			// 	a.br(),
// 				f.input( "expiry[month]" ),
// 			// ]),
// 			// a.p([
// 			// 	a.label("Comment"),
// 			// 	a.br(),
// 			// 	f.textarea( "comment" )
// 			// ]),
// 			// f.input( "expiry[year]", { type: "number" } ),
// 			// a.br(),
// 			// f.select( { name: "expiry[renew]", placeholder: "Please select" }, { collection: { 0: "Cool", 1: "Hot" }, placeholder: "Please select" } ),
// 			// a.br(),
// 			f.select( { name: "pets", multiple: true, size: 5 }, { collection: { 0: "Cat", 1: "Dog", 2:"Bird", 3:"Fish" }, placeholder: "Please select" } ),
// 			// a.br(),
// 			// f.select( "wow", { style: "vertical-align: top;", onclick: ()=>{alert("ha!")} }, { placeholder: "", value: 1 }  ),
// 			// a.br(),
// 			// f.field( "expiry[year]", "number" ),
// 			f.submit(),
// 		],
// 		{ action: "/testform" },
// 		{ data: { pets: [ "0", 1, "3" ], expiry: { month: 2, year: 2030, renew: "1" } } }
// 	),
// 	a.hr(),
// 	a.hr()
// ] );

var personFormFor = function( a, id, data ) {
	return a.dsl.form(
		(f) => [
			f.field( "language", "input", { datalist: [ "French" ] } ),
			f.field( "pet", "select", { wrapper: { style: "border: 3px solid #666; padding: 5px;" } , value: "Fish", select: [ { } , { placeholder: "", collection: [ "Dog", "Cat", "Fish" ] } ] } ),
			f.field( "sports", "select", { multiple: true, value: [ "Golf" ], collection: [ "Football" , "Golf", "Swimming" ] } ),
			// f.field( "Quarters", "custom/a_cell_radio_buttons", { value: 1, custom: { collection: [ "Football" , "Golf", "Swimming" ] } } ),
			f.field(
				"golf",
				"custom/a_cell_multiselect",
				{
					custom: { collection: [ "Clubs" , "Buggy", "Cart" ] },
					value: "Clubs",
					dependent: {
						selector: "[name='sports[]']",
						pattern: /\bFootball\b.{1,}\bGolf\b/,
					}
				}
			),
			f.field( "club", "number", 7, { input: { readonly: true }, dependent: { selector: "[name='golf[]']", pattern: /Buggy/ } } ),
			// f.field( "pets2", "select", { value: "Fish", select: [ { multiple: true, disabled: true } , { collection: [ "Dog", "Cat", "Fish" ] } ] } ),
			// f.field( "hoi", "number", 100, { input: { readonly: true } } ),
			// f.field( "quiet", "hidden", { label: true } ),
			// f.field( "accept", "input/checkbox", { help: "Check it!" } ),
			// f.field( "avatar", "file", { input: { style: "display: none;" }, label: { style: "color: blue;", $html: "<h1>Upload!</h1>" } } ),
			f.field( "comment", "textarea", { textarea: { style: "background-color: lightgrey;"}, reverse: true } ),
			// f.field( "id", "input/text", { value: id, input: { type: "number" } } ),
			// a.hr(),
			f.field( "first_name", { label: "First name", help: "Killian was here.", dependent: { selector: "[name='comment']", pattern: /secret/ } } ),
			// f.field( "last_name", {
			// 	help: "Last name is usually same as family name. Or your surname.",
			// 	hint: "Enter some text."
			// } ),
			// f.field( "pets", "select", { select: [ { multiple: true } , { collection: [ "Dog", "Cat", "Fish" ] } ] } ),
			// f.field( "age", "input/number", { input: { style: "color: blue;"}, label: { style: "color: red;"} } ),
			f.submit(),
		],
		{ action: "/test/people" },
		{ data: data }
	);
};

aCell( (a) => [
	a.div({
		style: 'background-color: darkgrey; padding: 10px;',
		_personId: 1,
		_up: function() { this._personId++; },
		_down: function() { this._personId--; if ( this._personId < 1 ) { this._personId = 1; } },
		$init: function() { this.$update() },
		$update: function() {
			var target = this;
			this.$components = [
				a.div(
					[
						a.span( {
							$html: "&#x25C0;",
							onclick: function() { target._down(); },
							style: "cursor: pointer; padding: 5px;"
						} ),
						a.span( target._personId, { style: "vertical-align: middle;" } ),
						a.span( {
							$html: "&#x25B6;",
							onclick: function() { target._up(); },
							style: "cursor: pointer; padding: 5px;"
						} ),
					],
					{ style: "font-size: 2em;"}
				),
				a.h3( "Form for person #" + target._personId ),
				a.dsl.request(
					{
						style: `background-color: darkgrey;
										padding: 30px;
										min-height: 29px;`,
					},
					{
						success: function( data, target ) {
							target.style.backgroundColor = "white";
							target.$components = [
								personFormFor( a, target._personId, data ),
							]
						},
						error: function( message, target ) {
							target.style.backgroundColor = "red";
							target.$text = message;
						},
						url: '/test/people/' + target._personId,
						// method: "POST",
						loading: a.div("Please wait", { style: "color: white; font-size: 2em;"} )
					}
				),
			];
		},
	}),
	// a.dsl.request("/test/people"),
]);

css(`
body {
	font-family: sans-serif;
}

form {
	font-size: 24px;
	margin: 10px 40px 10px 15px;
	max-width: 600px;
}

form fieldwrapper {
	display: block;
	margin-bottom: 30px;
}

form dependentwrapper[data-dependent='true'] {
	display: none;
}

form label {
	font-weight: 600;
}

form help helpbutton {
	float: right;
	padding: 0px 10px;
}

form help helptext {
	font-size: 0.8em;
	color: #666;
	padding: 0px 10px 10px; 10px;
	display: block;
	clear: both;
}

form input, form select, form textarea {
	box-sizing: border-box;
	padding: 5px;
	font-size: 24px;
	width: 100%;
	margin: 0px;
}

form input[type="color"] {
	height: 49px;
	width: 49px;
}

form input[type="checkbox"] {
	width: inherit;
	margin-right: 5px;
}

form hint {
	color: #333;
	font-size: 0.8em;
	font-style: italic;
}

form textarea {
	resize: vertical;
}

form acellmultiselect selecteditems {
	display: block;
	// box-sizing: border-box;
	// margin: 1px;
	border: 1px solid #ccc;
	border-top: none;
	width: 100%;
}

form acellmultiselect selecteditems selecteditem {
	padding: 10px;
	display: block;
}

form acellmultiselect selecteditems selecteditem noneselectedmessage {
	font-style: italic;
}



form acellmultiselect selecteditems selecteditem:hover {
	background-color: #eee;
}


form acellmultiselect selecteditems selecteditem itemremovebutton {
	// display: inline-block;
	float: right;
	font-weight: bold;
	color: #666;
	font-size: 18px;
	line-height: 29px;
}

form acellmultiselect selecteditems selecteditem itemlabel {
	// display: inline-block;
	// float: left;
}

form acellmultiselect selecteditems selecteditem itemremovebutton:hover {
	cursor: pointer;
}


`);
