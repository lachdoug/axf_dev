Engines Form DSL
================


Framework
---------
Sinatra (module style, with config.ru)

Needs
-----
public directory: public  
persistent volume: data  
Note: does not need a DB and does not send mail.

config.ru
---------
require_relative 'v0/module'  
map('/') { run V0 }  

Environment
-----------
**Required**  
ENV['ENGINES_FORM_DSL_SESSION_SECRET']
**Optional**  
ENV['ENGINES_FORM_DSL_USER_INACTIVITY_TIMEOUT'] default is 30 (i.e. 30 minutes).  
