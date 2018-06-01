function appStyles(a,x) {
	return x.css(
		{
			body: {
				background: "#d6e5f8",
				marginBottom: "100px",
			},
			cell: {
				fontSize: "18px",
        boxShadow: "0px 0px 10px #666",
				display: "block",
				marginLeft: "auto",
				marginRight: "auto",
				width: "100%",
				maxWidth: "1000px",
				backgroundColor: "#FFF",
				padding: "20px",
				nav: {
					color: "#48D",
					borderBottom: "1px solid #eee",
					logo: {
						margin: "5px",
						fontWeight: "bold",
						fontSize: "56px",
						lineHeight: "0.6",
						textAlign: "center",
						display: "inline-block"
					}
				},
				pages: {
					display: "block",
					margin: "20px"
				},
				footer: {
					borderTop: "1px solid #eee",
					fontSize: "16px",
					paddingTop: "20px"
				},
				coderunner: {
					"codemirror .CodeMirror-scroll": {
						height: "auto",
						overflowY: "hidden",
						overflowX: "auto",
						minHeight: "0px",
					},
					"codemirror.fullscreen .CodeMirror-scroll": {
						height: "inherit",
					},
					iframe: {
						display: "none",
						height: "0px",
						width: "100%",
						border: "1px solid #bbb",
						borderRadius: "4px",
					},
					"field codemirror editor": {
						height: "inherit",
					}
				},
				hr: {
					borderTop: "1px solid #bbb"
				}
			},
		}
	)
};


ax( (a,x) => x.css(`
cell {
	font-family: sans-serif;
	color: #333;

}

cell button {
	cursor: pointer;
}

cell field wrapper {
	display: block;
	margin-bottom: 20px;
}

cell field label {
	font-weight: 600;
}

cell field help helpbutton {
	float: right;
	padding: 0px 10px;
	cursor: pointer;
}

cell field help helptext {
	font-size: 0.8em;
	color: #666;
	padding: 0px 10px 10px; 10px;
	display: block;
	clear: both;
}

cell field input, cell field select, cell field textarea {
	box-sizing: border-box;
	padding: 5px;
	// font-size: 24px;
	width: 100%;
	margin: 0px;
}



cell field radiobuttons radiobutton, cell field checkboxes checkbox {
	display: block;
	margin-top: 5px;
}

cell field radiobuttons radiobutton label, cell field checkboxes checkbox label {
	font-weight: normal;
	vertical-align: top;
}

cell field input[type="color"] {
	height: 49px;
	width: 49px;
}

cell field input[type="checkbox"], cell field input[type="radio"] {
	width: inherit;
	margin-right: 5px;
}

cell field hint {
	color: #333;
	font-size: 0.8em;
	font-style: italic;
}

cell field textarea {
	resize: vertical;
}

cell field multiselect selecteditems {
	display: block;
	margin-top: -1px;
	border: 1px solid #999;
	border-top: none;
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	overflow: hidden;
	background-color: white;
}

cell field multiselect selecteditems selecteditem {
	padding: 5px;
	display: block;
}

cell field multiselect selecteditems selecteditem noneselectedmessage {
	font-style: italic;
	color: #666;
}



cell field multiselect selecteditems selecteditem:hover {
	background-color: #eee;
}

cell field multiselect selecteditems selecteditem itemremovebutton {
	float: right;
}

cell field multiselect selecteditems selecteditem itemremovebutton button {
	color: #999;
	padding: 0px 5px;
	border: none;
	background: transparent;
}

cell field multiselect selecteditems selecteditem itemremovebutton button:hover {
	color: #666;
}

cell field codemirror {
	border-radius: 4px;
	overflow: hidden;
	display: block;
	border: 1px solid #bbb;
}

cell field codemirror editor {
	height: 200px;
	display: block;
	font-size: 16px;
}

cell field codemirror toolbar {
	background-color: #f6f6f6;
	border-bottom: 1px solid #ddd;
	display: block;
	overflow: hidden;
	cursor: pointer;
}

cell field codemirror toolbar button {
	float: right;
	border: none;
	margin: 2px;
	background: none;
	padding: 5px 10px;
	color: #999;
}

cell field codemirror toolbar:hover button {
	color: #666;
}

cell field codemirror toolbar mode {
	display: inline-block;
	margin: 2px;
	padding: 5px 10px;
	color: #999;
	font-size: 0.8em;
}

/* This fixed conflicts when SimpleMDE and CodeMirror css
	 files are loaded on the same page. (SimpleMDE uses CodeMirror.) */
cell field codemirror editor .CodeMirror {
	min-height: 0px;
	border: none;
	border-radius: 0px;
	padding: 0px;
	font-family: monospace;
}

cell field simplemde {
	border: 1px solid #bbb;
}

cell field simplemde .CodeMirror {
	border: 1px solid #bbb;
	border-top: 1px solid #ddd;
	border-bottom: 1px solid #ddd;

	border-bottom-left-radius: 0px;
	border-bottom-right-radius: 0px;
	min-height: 0px;
	height: 200px;
}

cell field simplemde .editor-toolbar {
	background-color: #f6f6f6;
	opacity: 1;
	border-top: 1px solid #bbb;
	border-left: 1px solid #bbb;
	border-right: 1px solid #bbb;
}

cell field simplemde .editor-toolbar a {
	color: #999 !important;
	border: none;
	margin-right: 1px;
}

cell field simplemde .editor-toolbar:hover {
	opacity: 1;
}

cell field simplemde .editor-toolbar a:hover {
	background: inherit;
	color: #666 !important;
}

cell field simplemde .editor-statusbar {
	background-color: #f6f6f6;
	color: #999;
	border: 1px solid #bbb;
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	border-top: none;
	padding: 3px 6px;
}
` ),
  { style: "display: none;" }
);
