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




- appkit.http needs to handle different response types. Only doing json now.

- Report field type :list should use appkit.list


- form/report DSL library using ERM syntax.

- Rename router :rerender to :lazy, and invert logic. Default lazy: false

- check, checkboxes, radios: alternate label text for check when selected
- check, checkboxes, radios: confirm unchecked values coming through serialization
- pretty checkboxes and radios




## Service
* Metadata
* Base
  * Name
  * **Cardinal**
  * **Namespace**
  * **Type path**
  * **Service handle field**
  * Inherit blueprint URL
  * **Parent image**
  * Deployment type
  * **Hostname**
  * **Domain name**
  * **Set state**
  * **Default stop timeout**
  * **Restart policy**
  * Required MB
  * Recommended MB
  * **Run as**
  * **User ID**
  * Primary group
  * **Create user**
  * **Repo URL**
* **Disposition**
* Ports
* Scripts
  * Start
  * **Start sudo**
  * Install
  * **Install sudo**
  * Post install
  * **Post install sudo**
  * Backup
  * **Backup sudo**
  * Restore
  * **Restore sudo**
  * Shutdown
* External repositories
* System packages
* Installed packages
  * Name
  * Download type
  * Command options
  * Source URL
  * Destination
  * Extraction command
  * Path to extracted
* Required modules
* **Included files**
* Service configurations
* Environment variables
* **Target environment variables**
* **Constants**
* Template files
  * Path
  * Language
  * Content
  * **User**
  * **Group**
  * **Permissions**
* Replacement strings
* Persistent directories
* **Consumers**
* **Consumer scripts**
* **Consumer params**
* **Custom files**
* Actionators
* **Configurators**
* Schedules
* **Service dependencies**
* **Guises**
* **Capabilities**
* **Log directories**
* **Build dependencies**
* **File permissions**
* **Soft links **

## App/Engine
* Metadata
* Base
  * Name
  * Inherit blueprint URL
  * **Framework**
  * Deployment type
  * **Username (same as 'Run as'???)**
  * Primary group
  * **Sudo list**
  * **Continuous deployment**
  * Required MB
  * Recommended MB
  * **Install form comment**
  * **First run URL**
  * **Installation report**
* Ports
* Scripts
  * Start
  * Install
  * **First run**
  * Post install
  * Backup
  * Restore
  * Shutdown
* External repositories
* System packages
* Installed packages
  * Name
  * Download type
  * Command options
  * Source URL
  * Destination
  * Extraction command
  * Path to extracted
  * **Authentication**
* Required modules
* Service configurations
* Environment variables
* Template files
  * Path
  * Language
  * Content
* Replacement strings
* **Database seed**
* **File write permissions**
* Persistent directories
* **Persistent files**
* **Components**
* **Workers**
* Actionators
* Schedules
* **Rake tasks**
* **Custom PHP inis**
* **Apache htaccess files**
* **Apache httpd configurations**









# Autom

### Australasian Token Market

### Security Token Issuer + Exchange



## What?

* IDPS-style masterfund
* Administered on blockchain
* With a broad menu
* And a secondary market for tokens



## Why?

* Digital natives like tokens
* No supply of quality product
  - Most issuers offshore and regulator-phobic
  - Many offerings are commercially-naive, or outright scams
  - Poor liquidity, wide spreads

* Answers lie in funds management principles
* Security tokens are just units

* Blockchain touted as a threat to financial services
* Jury out on exactly where this will happen
* Incumbents struggle to innovate
* Some financial services firms feel a strategic imperative to be in the sector
* A blockchain-centric funds business potentially attractive acquisition target

* Could actually be a good business


## Organisational principles

* Sales culture
* Great product UX
* Love the regulator


## Blockchain

* Utility tokens vs. Security tokens

* Administrative efficiencies
  - Automation of unit registry and fund accounting
  - Expose an API ( for system integration )

* Secondary trading of tokens/units
