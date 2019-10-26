Ax Function Development Application
-----------------------------------

Deploy
------

Sinatra modular style, with `config.ru`.

Doesn't need any services.

Static assets served from `/public`

Release
-------

`rake release:build["version"]` to create files for a release. Output goes to `/axFunction/release`.

TODO
----

- Confirm email - or confirm anything?
- Dependent false or null for no wrap?


- appkit.http needs to handle different response types. Only doing json now.

- Report field type :list should use appkit.list


- form/report DSL library using ERM syntax.

- Rename router :rerender to :lazy, and invert logic. Default lazy: false

- check, checkboxes, radios: alternate label text for check when selected
- check, checkboxes, radios: confirm unchecked values coming through serialization
- pretty checkboxes and radios
