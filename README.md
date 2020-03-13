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

FORM
'display: block' styles need to be replaced with fade 'unset' and div
scope/target with commas rather than [][][]







- Confirm email - or confirm anything?





- Report field type :list should use appkit.list


- form/report DSL library using ERM syntax.

- check, checkboxes, radios: alternate label text for check when selected
- check, checkboxes, radios: confirm unchecked values coming through serialization
