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





Publisher - A software developer
- has many SoftwareProducts
- belongs to Account

SoftwareProduct
- has many Listings
- belongs to Publisher

UserDomain - An Engines userspace
- has many Systems
- has many Subscriptions
- has many DomainNames

System - A Linux computer running Engines System
- belongs to UserDomain
- has many Deployments

DomainName - An internet domain name
- belongs to UserDomain
- has many CertifiedDomainNames

CertifiedDomainName - A domain name with an SSL cert.
- belongs to DomainName
- belongs to Certificate
- has many BuildPackages

Certificate - An SSL Certificate
- has many CertifiedDomainNames

Catalogue - A software product store or library
- has many Listings
- has many PrivateRepos

PrivateRepo - A git repo with added public keys
- belongs to Catalogue
- has many LicenceAgreements

Listing - A catalogue entry, i.e. published software
- belongs to Catalogue
- belongs to SoftwareProduct
- has many TermsOfUse
- :title/:name/:label
- :blueprint_url
- :icon_url

Subscription - An acceptance of the licence T&Cs
- belongs to UserDomain
- belongs to Listing
- belongs to TermsOfUse
- belongs to PrivateRepo
- has many Scaffolds

Scaffold - First stage of installation
- belongs to Subscription
- has many DataConnections
- <some blueprint stuff>
- has many BuildPackages

BuildPackage - Second stage of installation
- belongs to Scaffold
- <some blueprint stuff>
- belongs to CertifiedDomainName
- has many Deployments

Deployment - Final stage of installation
- belongs to BuildPackage
- belongs to System
- belongs to Billable
- <some blueprint stuff>

DataConnection - A deployment using a data bundle
- belongs to Scaffold
- belongs to DataBundle

DataBundle - Persistent data from a software product
- has many DataConnections
- belongs to DataService

DataService - A server of persistent data
- has many DataBundles
- belongs to ServiceType

DataServiceType
- <some service definition stuff>

Billable - An accrual of software licence fees
- belongs to Subscription
- belongs to Deployment

TermsOfUse - A set of licence T&Cs
- belongs to TermsOfUseType
- belongs to Listing
- has many LicenceAgreements

TermsOfUseType - A type of software licence
- has many TermsOfUse

Account - An Engines financial account
- may have one Publisher
- may have one User

Transaction - A transfer between Accounts
- belongs to Account - credit
- belongs to Account - debit

User - An end user
- Individual or Organisation
