!function e(t,r,o){function n(s,u){if(!r[s]){if(!t[s]){var l="function"==typeof require&&require;if(!u&&l)return l(s,!0);if(i)return i(s,!0);var a=new Error("Cannot find module '"+s+"'");throw a.code="MODULE_NOT_FOUND",a}var c=r[s]={exports:{}};t[s][0].call(c.exports,function(e){var r=t[s][1][e];return n(r?r:e)},c,c.exports,e,t,r,o)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<o.length;s++)n(o[s]);return n}({1:[function(e){"use strict";e("./modules/common/module"),e("./modules/data/module"),e("./modules/templates/module"),e("./modules/ui/module")},{"./modules/common/module":3,"./modules/data/module":5,"./modules/templates/module":7,"./modules/ui/module":11}],2:[function(e,t){"use strict";t.exports={logLevel:"warn"}},{}],3:[function(e,t){"use strict";t.exports=angular.module("volunteers.common",[]).factory("Logger",e("./services/logger"))},{"./services/logger":4}],4:[function(e,t){"use strict";function r(e){var t={};return n.forEach(function(r){t[r]=n.indexOf(r)>=i?e[r]:angular.noop}),t}var o=e("../../../config"),n=["log","trace","debug","info","warn","error"],i=n.indexOf(o.logLevel||"log");r.$inject=["$log"],t.exports=r},{"../../../config":2}],5:[function(e,t){"use strict";t.exports=angular.module("volunteers.data",["volunteers.common"]).factory("Faker",e("./services/faker"))},{"./services/faker":6}],6:[function(e,t){"use strict";function r(){function e(){for(var e=[],t=Math.ceil(10*Math.random()),r=0;t>r;++r)e.push({id:r,name:["data",r].join("--")});return e}var t={};return t.getItems=e,t}t.exports=r},{}],7:[function(e,t){"use strict";t.exports=angular.module("volunteers.templates",[]).run(["$templateCache",function(e){e.put("partials/views/index.html","<h1>AngularJS Devstack</h1><p>{{vm.welcomeMessage}}</p>"),e.put("partials/views/list.html",'<h1>List example</h1><ul><li data-ng-repeat="item in vm.items">{{item.id}} - {{item.name}}</li></ul>')}])},{}],8:[function(e,t){"use strict";function r(e,t,r){e.state("index",{url:"/",templateUrl:"partials/views/index.html",controller:"Index as vm"}).state("list",{url:"/list",templateUrl:"partials/views/list.html",controller:"List as vm"}),t.otherwise("/"),r.html5Mode(!1)}r.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],t.exports=r},{}],9:[function(e,t){"use strict";function r(e){e.debug("Index");var t=this;t.welcomeMessage="Welcome message generated by AngularJS"}r.$inject=["Logger"],t.exports=r},{}],10:[function(e,t){"use strict";function r(e,t){e.debug("List");var r=this;r.items=t.getItems()}r.$inject=["Logger","Faker"],t.exports=r},{}],11:[function(e,t){"use strict";t.exports=angular.module("volunteers.ui",["ui.router","volunteers.common","volunteers.data","volunteers.templates"]).config(e("./config/route")).controller("Index",e("./controllers/index")).controller("List",e("./controllers/list"))},{"./config/route":8,"./controllers/index":9,"./controllers/list":10}]},{},[1]);