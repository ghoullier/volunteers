!function e(t,r,i){function o(n,l){if(!r[n]){if(!t[n]){var a="function"==typeof require&&require;if(!l&&a)return a(n,!0);if(s)return s(n,!0);var u=new Error("Cannot find module '"+n+"'");throw u.code="MODULE_NOT_FOUND",u}var c=r[n]={exports:{}};t[n][0].call(c.exports,function(e){var r=t[n][1][e];return o(r?r:e)},c,c.exports,e,t,r,i)}return r[n].exports}for(var s="function"==typeof require&&require,n=0;n<i.length;n++)o(i[n]);return o}({1:[function(e){"use strict";e("./modules/common/module"),e("./modules/data/module"),e("./modules/templates/module"),e("./modules/ui/module")},{"./modules/common/module":4,"./modules/data/module":7,"./modules/templates/module":13,"./modules/ui/module":27}],2:[function(e,t){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(e){return"function"==typeof e}function o(e){return"number"==typeof e}function s(e){return"object"==typeof e&&null!==e}function n(e){return void 0===e}t.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if(!o(e)||0>e||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,r,o,l,a,u;if(this._events||(this._events={}),"error"===e&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;throw TypeError('Uncaught, unspecified "error" event.')}if(r=this._events[e],n(r))return!1;if(i(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:for(o=arguments.length,l=new Array(o-1),a=1;o>a;a++)l[a-1]=arguments[a];r.apply(this,l)}else if(s(r)){for(o=arguments.length,l=new Array(o-1),a=1;o>a;a++)l[a-1]=arguments[a];for(u=r.slice(),o=u.length,a=0;o>a;a++)u[a].apply(this,l)}return!0},r.prototype.addListener=function(e,t){var o;if(!i(t))throw TypeError("listener must be a function");if(this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,i(t.listener)?t.listener:t),this._events[e]?s(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,s(this._events[e])&&!this._events[e].warned){var o;o=n(this._maxListeners)?r.defaultMaxListeners:this._maxListeners,o&&o>0&&this._events[e].length>o&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())}return this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){function r(){this.removeListener(e,r),o||(o=!0,t.apply(this,arguments))}if(!i(t))throw TypeError("listener must be a function");var o=!1;return r.listener=t,this.on(e,r),this},r.prototype.removeListener=function(e,t){var r,o,n,l;if(!i(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(r=this._events[e],n=r.length,o=-1,r===t||i(r.listener)&&r.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(s(r)){for(l=n;l-->0;)if(r[l]===t||r[l].listener&&r[l].listener===t){o=l;break}if(0>o)return this;1===r.length?(r.length=0,delete this._events[e]):r.splice(o,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(r=this._events[e],i(r))this.removeListener(e,r);else for(;r.length;)this.removeListener(e,r[r.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?i(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.listenerCount=function(e,t){var r;return r=e._events&&e._events[t]?i(e._events[t])?1:e._events[t].length:0}},{}],3:[function(e,t){t.exports={name:"volunteers",description:"volunteers generated with yeoman-angular-devstack",version:"0.0.0","private":!0,repository:{type:"git",url:"https://github.com/ghoullier/volunteers.git"},scripts:{postinstall:"bower install",postupdate:"bower update",prestart:"npm install",start:"gulp develop --env=dev",prebuild:"npm install",build:"gulp build --env=prod",prepackage:"npm run build","package":"gulp package",predeploy:"npm run build",deploy:"gulp publish --env=prod","preupdate-webdriver":"npm install","update-webdriver":"webdriver-manager update",protractor:"protractor tests/e2e/protractor.conf.js"},devDependencies:{bower:"^1.3.12",browserify:"^9.0.3","browserify-ngannotate":"^0.7.1","browser-sync":"^2.2.1",compression:"^1.4.1",del:"^1.1.1",flightplan:"^0.6.1",gulp:"^3.8.11","gulp-angular-templatecache":"^1.5.0","gulp-autoprefixer":"^2.1.0","gulp-concat":"^2.5.2","gulp-embedlr":"^0.5.2","gulp-gh-pages":"^0.4.0","gulp-gzip":"^1.0.0","gulp-htmlmin":"^1.1.1","gulp-jshint":"^1.9.2","gulp-plumber":"^0.6.6","gulp-rename":"^1.2.0","gulp-sass":"^1.3.3","gulp-sourcemaps":"^1.3.0","gulp-tar":"^1.4.0","gulp-template":"^3.0.0","gulp-uglify":"^1.1.0","gulp-util":"^3.0.3",merge:"^1.2.0",minimist:"^1.1.0","run-sequence":"^1.0.2","vinyl-source-stream2":"^0.1.1"},engines:{node:">=0.10.0"},license:"MIT"}},{}],4:[function(e,t){"use strict";var r=e("../../../../package");t.exports=angular.module("volunteers.common",["ng"]).constant("AppVersion",r.version).constant("EventsEmitter",e("./services/events-emitter")).provider("Logger",e("./services/logger"))},{"../../../../package":3,"./services/events-emitter":5,"./services/logger":6}],5:[function(e,t){"use strict";var r=e("events"),i=new r.EventEmitter;t.exports=i},{events:2}],6:[function(e,t){"use strict";function r(){function e(e){var t={};return i.forEach(function(r){t[r]=i.indexOf(r)>=o?e[r]:angular.noop}),t}function t(e){o=i.indexOf(e)}return e.$inject=["$log"],{setLogLevel:t,$get:e}}var i=["log","trace","debug","info","warn","error"],o=0;t.exports=r},{}],7:[function(e,t){"use strict";var r=window.Parse,i=e("./parse.keys");r.initialize(i.ID,i.KEY),t.exports=angular.module("volunteers.data",["ng","volunteers.common"]).constant("Parse",r).factory("Api",e("./services/api")).factory("ApiEdition",e("./services/edition")).factory("ApiFestival",e("./services/festival")).factory("ApiUser",e("./services/user"))},{"./parse.keys":8,"./services/api":9,"./services/edition":10,"./services/festival":11,"./services/user":12}],8:[function(e,t){"use strict";t.exports={ID:"tttEpRyPOiKJBEdX464S8XUxj8hoOwQgAesil2yz",KEY:"VvM7lP5D2iUa84B93szBcPjZZIVYJxfeNCLvyb5i"}},{}],9:[function(e,t){"use strict";function r(e,t,r){function i(i){function s(t){m("create",t);var r=new f;return angular.forEach(t,function(e,t){r.set(t,e)}),e(function(e,t){r.save(null,p("create",e,t))})}function n(e){return m("get",e),c("get",{objectId:e})}function l(){return m("getList"),c("getList",{})}function a(){return d}function u(){return i}function c(r,i){m("find",r,i);var o=new t.Query(f);return angular.forEach(i,function(e,t){o.equalTo(t,e)}),e(function(e,t){o.find(p(r,e,t))})}function m(e){var t=[d,e].join("::"),i=[t].concat([].splice.call(arguments,1));r.log.apply(r,i)}var d=["Api",i].join(""),f=t.Object.extend(i),p=o(i);return{create:s,get:n,getList:l,getApiName:a,getEntityName:u}}function o(e){return function(t,i,o){return{success:function(o){r.log([e,t,"success"].join("::"),o),i(o)},error:function(i,s){r.log([e,t,"error"].join("::"),i,s),o(s)}}}}return{getResponseInterceptor:o,getService:i}}r.$inject=["$q","Parse","Logger"],t.exports=r},{}],10:[function(e,t){"use strict";function r(e){return e.getService("Edition")}r.$inject=["Api"],t.exports=r},{}],11:[function(e,t){"use strict";function r(e){return e.getService("Festival")}r.$inject=["Api"],t.exports=r},{}],12:[function(e,t){"use strict";function r(e,t,r,i){function o(t){return i.log("ApiUser::login"),e(function(e,r){n.logIn(t.username,t.password,l("login",e,r))})}function s(t){return i.log("ApiUser::sign"),e(function(e,r){var i=new n;angular.forEach(t,function(e,t){i.set(t,e)}),i.signUp(null,l("sign",e,r))})}var n=r.User,l=t.getResponseInterceptor("ApiUser");return{login:o,sign:s}}r.$inject=["$q","Api","Parse","Logger"],t.exports=r},{}],13:[function(e,t){"use strict";t.exports=angular.module("volunteers.templates",[]).run(["$templateCache",function(e){e.put("partials/views/edition/_layout.html",'<nav class="navbar navbar-default"><ul class="nav navbar-nav"><li data-ui-sref-active="active"><a data-ui-sref="edition.form()" class="Nav__Link">Form</a></li><li data-ui-sref-active="active"><a data-ui-sref="edition.list()" class="Nav__Link">List</a></li></ul></nav><section data-ui-view></section>'),e.put("partials/views/edition/form.html",'<section class="View View--Form View--Edition View--Edition--Form row"><h1>Edition Form</h1><form class="Form Form--Edition" role="form" name="form" data-ng-submit="vm.submit()" autocomplete="off"><fieldset><legend>Create</legend><div class="form-group"><label for="form-edition-start-at">Start At*</label><input id="form-edition-start-at" name="startAt" class="form-control" type="date" required data-ng-model="vm.model.startAt"></div><div class="form-group"><label for="form-edition-end-at">End At*</label><input id="form-edition-end-at" name="endAt" class="form-control" type="date" required data-ng-model="vm.model.endAt"></div><div class="form-group"><label for="form-edition-mounting-start-at">Mounting Start At*</label><input id="form-edition-mounting-startat" name="mountingStartAt" class="form-control" type="date" required data-ng-model="vm.model.mountingStartAt"></div><div class="form-group"><label for="form-edition-mounting-end-At">Mounting End At*</label><input id="form-edition-mounting-end-At" name="mountingEndAt" class="form-control" type="date" required data-ng-model="vm.model.mountingEndAt"></div><div class="form-group"><label for="form-edition-festival">Festival*</label><input id="form-edition-festival" name="name" class="form-control" type="text" required data-ng-model="vm.model.festival"></div></fieldset><div class="btn-group" role="group"><button type="submit" class="btn btn-success">Submit</button></div></form></section>'),e.put("partials/views/edition/list.html",'<section class="View View--List View--Edition View--Edition--List row"><h1>Edition List</h1><table class="table table-striped">{{vm.list}}</table></section>'),e.put("partials/views/festival/_layout.html",'<nav class="navbar navbar-default"><ul class="nav navbar-nav"><li data-ui-sref-active="active"><a data-ui-sref="festival.form()" class="Nav__Link">Form</a></li><li data-ui-sref-active="active"><a data-ui-sref="festival.list()" class="Nav__Link">List</a></li></ul></nav><section data-ui-view></section>'),e.put("partials/views/festival/form.html",'<section class="View View--Form View--Festival View--Festival--Form row"><h1>Festival Form</h1><form class="Form Form--Festival" role="form" name="form" data-ng-submit="vm.submit()" autocomplete="off"><fieldset><legend>Create</legend><div class="form-group"><label for="form-festival-name">Name*</label><input id="form-festival-name" name="name" class="form-control" type="text" required data-ng-model="vm.model.name"></div><div class="form-group"><label for="form-festival-email">Email*</label><input id="form-festival-email" name="email" class="form-control" type="text" required data-ng-model="vm.model.email"></div><div class="form-group"><label for="form-festival-description">Description*</label><input id="form-festival-description" name="description" class="form-control" type="text" required data-ng-model="vm.model.description"></div><div class="form-group"><label for="form-festival-website">Website*</label><input id="form-festival-website" name="website" class="form-control" type="text" required data-ng-model="vm.model.website"></div></fieldset><div class="btn-group" role="group"><button type="submit" class="btn btn-success">Submit</button></div></form></section>'),e.put("partials/views/festival/list.html",'<section class="View View--List View--Festival View--Festival--List row"><h1>Festival List</h1><table class="table table-striped"><thead><tr><th>#</th><th>Description</th><th>Email</th><th>Name</th><th>WebSite</th></tr></thead><tbody><tr data-ng-repeat="item in ::vm.list"><td><a data-ui-sref="festival.form({id: item.id})">{{item.id}}</a></td><td data-ng-repeat="(attribute, value) in item.attributes">{{value}}</td></tr></tbody></table></section>'),e.put("partials/views/login/index.html",'<section class="View View--Login row"><div class="col-md-4 col-md-offset-4"><h1>Authentication</h1><div class="alert alert-danger" data-ng-if="vm.error"><strong>Echec authentication!</strong> Vérifiez votre login et mot de passe, puis essayer à nouveau.</div><form class="form" role="form" name="form" data-ng-submit="vm.login()" autocomplete="off"><fieldset><div class="form-group"><label for="login.username">Username</label><input type="text" name="username" class="form-control" id="login.username" placeholder="Username" data-ng-model="vm.user.username" required></div><div class="form-group"><label for="login.password">Mot de passe</label><input type="password" name="password" class="form-control" id="login.password" placeholder="Mot de passe" data-ng-model="vm.user.password" required></div></fieldset><div class="btn-group" role="group"><button type="submit" class="btn btn-success" data-ng-disabled="form.$invalid">Login</button></div></form><br><div class="alert alert-warning">Vous n\'avez pas encore de compte? <a data-ui-sref="register.profile()">Créé en un maintenant</a></div></div></section>'),e.put("partials/views/register/_layout.html","<section data-ui-view></section>"),e.put("partials/views/register/profile.html",'<section class="View View--Register View--RegisterProfile row"><form name="form" data-ng-submit="vm.submit()" class="Form Form--Profile"><fieldset><legend>Votre profil</legend><div class="form-group"><label for="register-profile-username">Username*</label><input id="register-profile-username" name="username" class="form-control" type="text" required data-ng-model="vm.profile.username"></div><div class="form-group"><label for="register-profile-email">Adresse mail*</label><input id="register-profile-email" name="email" class="form-control" type="email" required data-ng-model="vm.profile.email"></div><div class="form-group"><label for="register-profile-password">Mot de passe*</label><input id="register-profile-password" name="password" class="form-control" type="password" required data-ng-model="vm.profile.password"></div><div class="form-group"><label for="register-profile-lastname">Nom*</label><input id="register-profile-lastname" name="lastname" class="form-control" type="text" required data-ng-model="vm.profile.lastname"></div><div class="form-group"><label for="register-profile-firstname">Prénom*</label><input id="register-profile-firstname" name="firstname" class="form-control" type="text" required data-ng-model="vm.profile.firstname"></div><div class="form-group"><label for="register-profile-birthdate">Date naissance*</label><input id="register-profile-birthdate" name="birthdate" class="form-control" type="date" required data-ng-model="vm.profile.birthdate"></div><div class="form-group"><label for="register-profile-birthplace">Lieu naissance*</label><input id="register-profile-birthplace" name="birthplace" class="form-control" type="text" required data-ng-model="vm.profile.birthplace"></div><div class="form-group"><label for="register-profile-gender">Sexe*</label><select id="register-profile-gender" name="gender" class="form-control" type="text" required data-ng-model="vm.profile.gender" data-ng-options="gender.value as gender.label for gender in ::vm.options.gender"></select></div><div class="form-group"><label for="register-profile-address">Adresse*</label><input id="register-profile-address" name="address" class="form-control" type="text" required data-ng-model="vm.profile.address"></div><div class="form-group"><label for="register-profile-zipcode">Code postal*</label><input id="register-profile-zipcode" name="zipcode" class="form-control" type="text" required data-ng-model="vm.profile.zipcode"></div><div class="form-group"><label for="register-profile-city">Ville*</label><input id="register-profile-city" name="city" class="form-control" type="text" required data-ng-model="vm.profile.city"></div><div class="form-group"><label for="register-profile-country">Pays*</label><select id="register-profile-country" name="country" class="form-control" type="text" required data-ng-model="vm.profile.country" data-ng-options="country.value as country.label for country in ::vm.options.country"></select></div><div class="form-group"><label for="register-profile-homenumber">Téléphone fixe</label><input id="register-profile-homenumber" name="homenumber" class="form-control" type="text" required data-ng-model="vm.profile.homenumber"></div><div class="form-group"><label for="register-profile-phonenumber">Téléphone portable*</label><input id="register-profile-phonenumber" name="phonenumber" class="form-control" type="text" required data-ng-model="vm.profile.phonenumber"></div><div class="form-group"><label for="register-profile-job">Profession*</label><input id="register-profile-job" name="job" class="form-control" type="text" required data-ng-model="vm.profile.job"></div><div class="form-group"><label for="register-profile-wearsize">Taille t-shirt*</label><select id="register-profile-wearsize" name="wearsize" class="form-control" type="text" required data-ng-model="vm.profile.wearsize" data-ng-options="wearsize.value as wearsize.label for wearsize in ::vm.options.wearsize"></select></div><div class="form-group"><label for="register-profile-avatar">Photo*</label><input id="register-profile-avatar" name="avatar" class="form-control" type="file" required data-ng-model="vm.profile.avatar"></div><div class="form-group"><label for="register-profile-emergency-contact">Personne à prévenir*</label><input id="register-profile-emergency-contact" name="emergency-contact" class="form-control" type="text" required data-ng-model="vm.profile.emergency.contact"></div><div class="form-group"><label for="register-profile-emergency-phonenumber">Téléphone personne à prévenir*</label><input id="register-profile-emergency-phonenumber" name="emergency-phonenumber" class="form-control" type="text" required data-ng-model="vm.profile.emergency.phonenumber"></div><div class="form-group"><label for="register-profile-diet">Régime alimentaire*</label><input id="register-profile-diet" name="diet" class="form-control" type="text" required data-ng-model="vm.profile.diet"></div></fieldset><div class="btn-group" role="group"><button type="submit" class="btn btn-success">Submit</button></div></form></section>'),e.put("partials/views/register/skills.html",'<section class="View View--Register View--RegisterSkills row"><form name="form" data-ng-submit="vm.next()"><fieldset><legend>Vos compétences</legend><div class="form-group"><label for="register-skills-certificate">Diplômes de secourisme</label><input id="register-skills-certificate" name="certificate" class="form-control" type="text" required data-ng-model="vm.skills.certificate"></div><div class="form-group"><label for="register-skills-languages">Langues</label><input id="register-skills-languages" name="languages" class="form-control" type="text" required data-ng-model="vm.skills.languages"></div><div class="form-group"><label for="register-skills-driver-licences">Permis de conduire</label><input id="register-skills-driver-licences" name="driver-licences" class="form-control" type="text" required data-ng-model="vm.skills.driverlicences"></div></fieldset><button type="submit" class="btn btn-primary">Continuer</button></form></section>')}])},{}],14:[function(e,t){"use strict";function r(e,t){e.debugInfoEnabled(t.NG_DEBUG_INFO_ENABLED)}r.$inject=["$compileProvider","AppConfig"],t.exports=r},{}],15:[function(e,t){"use strict";function r(e,t){t.setLogLevel(e.LOG_LEVEL)}r.$inject=["AppConfig","LoggerProvider"],t.exports=r},{}],16:[function(e,t){"use strict";function r(e,t,r){e.state("login",{url:"/login",templateUrl:"partials/views/login/index.html",controller:"Login as vm"}).state("register",{"abstract":!0,url:"/register",templateUrl:"partials/views/register/_layout.html",controller:"Register as vm"}).state("register.profile",{url:"/profile",templateUrl:"partials/views/register/profile.html",controller:"RegisterProfile as vm"}).state("festival",{"abstract":!0,url:"/festival",templateUrl:"partials/views/festival/_layout.html",controller:"Festival as vm"}).state("festival.form",{url:"/form/:id",templateUrl:"partials/views/festival/form.html",controller:"FestivalForm as vm"}).state("festival.list",{url:"/list",templateUrl:"partials/views/festival/list.html",controller:"FestivalList as vm",resolve:{list:o}}).state("edition",{"abstract":!0,url:"/edition",templateUrl:"partials/views/edition/_layout.html",controller:"Edition as vm"}).state("edition.form",{url:"/form/:id",templateUrl:"partials/views/edition/form.html",controller:"EditionForm as vm"}).state("edition.list",{url:"/list",templateUrl:"partials/views/edition/list.html",controller:"EditionList as vm",resolve:{list:i}}),t.otherwise("/login"),r.html5Mode(!1)}function i(e){return e.getList()}function o(e){return e.getList()}r.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],t.exports=r,i.$inject=["ApiEdition"],o.$inject=["ApiFestival"]},{}],17:[function(e,t){"use strict";function r(e){e.log("EditionForm")}r.$inject=["Logger"],t.exports=r},{}],18:[function(e,t){"use strict";function r(e){e.log("Edition")}r.$inject=["Logger"],t.exports=r},{}],19:[function(e,t){"use strict";function r(e,t){e.log("EditionList",t);var r=this;r.list=t,r.errors={}}r.$inject=["Logger","list"],t.exports=r},{}],20:[function(e,t){"use strict";function r(e,t,r,i){i.log("FestivalForm",e);var o=this;t.extend(o,r)}r.$inject=["$stateParams","EntityForm","ApiFestival","Logger"],t.exports=r},{}],21:[function(e,t){"use strict";function r(e){e.log("Festival")}r.$inject=["Logger"],t.exports=r},{}],22:[function(e,t){"use strict";function r(e,t){e.log("FestivalList",t);var r=this;r.list=t,r.errors={}}r.$inject=["Logger","list"],t.exports=r},{}],23:[function(e,t){"use strict";function r(e,t,r){function i(){r.debug("Login::login"),t.login(n.user).then(o,s)}function o(t){r.log("Login::login::onLoginSuccess",t),e({title:"Login",content:"Success",type:"success",duration:3})}function s(t){r.log("Login::login::onLoginError",t),e({title:"Login",content:t.message,type:"danger",duration:3})}r.debug("Login");var n=this;n.user={},n.errors={},n.login=i}r.$inject=["$alert","ApiUser","Logger"],t.exports=r},{}],24:[function(e,t){"use strict";function r(e){function t(){e.debug("Register::next")}e.debug("Register");var r=this;r.register={},r.next=t}r.$inject=["Logger"],t.exports=r},{}],25:[function(e,t){"use strict";function r(e,t){function r(){t.debug("RegisterProfile::submit"),e.sign(i.profile).then(function(e){t.log("RegisterProfile::submit::onSignSuccess",e)},function(e){t.log("RegisterProfile::submit::onSignError",e)})}t.debug("RegisterProfile");var i=this;i.profile={country:"france",gender:"male",wearsize:"m"},i.options={country:[{label:"France",value:"france"}],gender:[{label:"Homme",value:"male"}],wearsize:[{label:"M",value:"m"}]},i.submit=r}r.$inject=["ApiUser","Logger"],t.exports=r},{}],26:[function(e,t){"use strict";function r(e){function t(){e.debug("RegisterSkills::next")}e.debug("RegisterSkills");var r=this;r.skills={},r.next=t}r.$inject=["Logger"],t.exports=r},{}],27:[function(e,t){"use strict";t.exports=angular.module("volunteers.ui",["ng","ngAnimate","mgcrea.ngStrap","ui.router","volunteers.common","volunteers.data","volunteers.templates"]).config(e("./config/compiler")).config(e("./config/logger")).config(e("./config/router")).factory("EntityForm",e("./services/entity-form")).controller("Login",e("./controllers/login/index")).controller("Register",e("./controllers/register/index")).controller("RegisterProfile",e("./controllers/register/profile")).controller("RegisterSkills",e("./controllers/register/skills")).controller("Festival",e("./controllers/festival/index")).controller("FestivalList",e("./controllers/festival/list")).controller("FestivalForm",e("./controllers/festival/form")).controller("Edition",e("./controllers/edition/index")).controller("EditionList",e("./controllers/edition/list")).controller("EditionForm",e("./controllers/edition/form"))},{"./config/compiler":14,"./config/logger":15,"./config/router":16,"./controllers/edition/form":17,"./controllers/edition/index":18,"./controllers/edition/list":19,"./controllers/festival/form":20,"./controllers/festival/index":21,"./controllers/festival/list":22,"./controllers/login/index":23,"./controllers/register/index":24,"./controllers/register/profile":25,"./controllers/register/skills":26,"./services/entity-form":28}],28:[function(e,t){"use strict";function r(e,t){function r(r,i){function o(){return a("submit"),i.create(r.model).then(s,n)}function s(e){a("onSubmitSuccess",e),l("Success","success")}function n(e){a("onSubmitError",e),l(e.message,"danger")}function l(t,r){a("alert",t,r),e({title:i.getEntityName(),content:t,type:r,duration:3})}function a(e){var r=[u,e].join("::"),i=[r].concat([].splice.call(arguments,1));t.log.apply(t,i)}var u=[i.getEntityName(),"Form"].join("");r.model={},r.errors={},r.submit=o}return t.log("EntityForm"),{extend:r}}r.$inject=["$alert","Logger"],t.exports=r},{}]},{},[1]);