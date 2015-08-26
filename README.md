# figwheeljs 

Surprisingly, figwheel can be used to develop pure JavaScript and
have the same, amazing, experience we currently have in ClojureScript.

This project serves as an example. Clone it, run figwheel, and then
visit localhost:

    git clone https://github.com/bensu/figwheeljs
    rlwrap lein figwheel dev
    
Open http://localhost:3449/

Then go to `src/figwheeljs/core.js` edit it and watch it reload.

This is not meant for anybody to use it, we just discovered it and we
had fun testing it's limits. So far I've found the following: 

* You need to use Google Closure Modules, `goog.provide` and
  `goog.require`.
* The namespaces can't have hyphens.

I find this is a testament to ClojureScript and Figwheel's great
design. Nobody planned this to work but a good design surprises you in
pleasant ways :) Kudos to @bhauman!

## License

Copyright © 2015 Bruce Hauman and Sebastian Bensusan 

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
