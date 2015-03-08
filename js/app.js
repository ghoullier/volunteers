!function e(r,t,i){function s(n,l){if(!t[n]){if(!r[n]){var a="function"==typeof require&&require;if(!l&&a)return a(n,!0);if(o)return o(n,!0);var u=new Error("Cannot find module '"+n+"'");throw u.code="MODULE_NOT_FOUND",u}var c=t[n]={exports:{}};r[n][0].call(c.exports,function(e){var t=r[n][1][e];return s(t?t:e)},c,c.exports,e,r,t,i)}return t[n].exports}for(var o="function"==typeof require&&require,n=0;n<i.length;n++)s(i[n]);return s}({1:[function(e){"use strict";e("./modules/common/module"),e("./modules/data/module"),e("./modules/templates/module"),e("./modules/ui/module")},{"./modules/common/module":4,"./modules/data/module":7,"./modules/templates/module":11,"./modules/ui/module":21}],2:[function(e,r){function t(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(e){return"function"==typeof e}function s(e){return"number"==typeof e}function o(e){return"object"==typeof e&&null!==e}function n(e){return void 0===e}r.exports=t,t.EventEmitter=t,t.prototype._events=void 0,t.prototype._maxListeners=void 0,t.defaultMaxListeners=10,t.prototype.setMaxListeners=function(e){if(!s(e)||0>e||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},t.prototype.emit=function(e){var r,t,s,l,a,u;if(this._events||(this._events={}),"error"===e&&(!this._events.error||o(this._events.error)&&!this._events.error.length)){if(r=arguments[1],r instanceof Error)throw r;throw TypeError('Uncaught, unspecified "error" event.')}if(t=this._events[e],n(t))return!1;if(i(t))switch(arguments.length){case 1:t.call(this);break;case 2:t.call(this,arguments[1]);break;case 3:t.call(this,arguments[1],arguments[2]);break;default:for(s=arguments.length,l=new Array(s-1),a=1;s>a;a++)l[a-1]=arguments[a];t.apply(this,l)}else if(o(t)){for(s=arguments.length,l=new Array(s-1),a=1;s>a;a++)l[a-1]=arguments[a];for(u=t.slice(),s=u.length,a=0;s>a;a++)u[a].apply(this,l)}return!0},t.prototype.addListener=function(e,r){var s;if(!i(r))throw TypeError("listener must be a function");if(this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,i(r.listener)?r.listener:r),this._events[e]?o(this._events[e])?this._events[e].push(r):this._events[e]=[this._events[e],r]:this._events[e]=r,o(this._events[e])&&!this._events[e].warned){var s;s=n(this._maxListeners)?t.defaultMaxListeners:this._maxListeners,s&&s>0&&this._events[e].length>s&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())}return this},t.prototype.on=t.prototype.addListener,t.prototype.once=function(e,r){function t(){this.removeListener(e,t),s||(s=!0,r.apply(this,arguments))}if(!i(r))throw TypeError("listener must be a function");var s=!1;return t.listener=r,this.on(e,t),this},t.prototype.removeListener=function(e,r){var t,s,n,l;if(!i(r))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(t=this._events[e],n=t.length,s=-1,t===r||i(t.listener)&&t.listener===r)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,r);else if(o(t)){for(l=n;l-->0;)if(t[l]===r||t[l].listener&&t[l].listener===r){s=l;break}if(0>s)return this;1===t.length?(t.length=0,delete this._events[e]):t.splice(s,1),this._events.removeListener&&this.emit("removeListener",e,r)}return this},t.prototype.removeAllListeners=function(e){var r,t;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(r in this._events)"removeListener"!==r&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events={},this}if(t=this._events[e],i(t))this.removeListener(e,t);else for(;t.length;)this.removeListener(e,t[t.length-1]);return delete this._events[e],this},t.prototype.listeners=function(e){var r;return r=this._events&&this._events[e]?i(this._events[e])?[this._events[e]]:this._events[e].slice():[]},t.listenerCount=function(e,r){var t;return t=e._events&&e._events[r]?i(e._events[r])?1:e._events[r].length:0}},{}],3:[function(e,r){r.exports={name:"volunteers",description:"volunteers generated with yeoman-angular-devstack",version:"0.0.0","private":!0,repository:{type:"git",url:"https://github.com/ghoullier/volunteers.git"},scripts:{postinstall:"bower install",postupdate:"bower update",prestart:"npm install",start:"gulp develop --env=dev",prebuild:"npm install",build:"gulp build --env=prod",prepackage:"npm run build","package":"gulp package",predeploy:"npm run build",deploy:"gulp publish --env=prod","preupdate-webdriver":"npm install","update-webdriver":"webdriver-manager update",protractor:"protractor tests/e2e/protractor.conf.js"},devDependencies:{bower:"^1.3.12",browserify:"^9.0.3","browserify-ngannotate":"^0.7.1","browser-sync":"^2.2.1",compression:"^1.4.1",del:"^1.1.1",flightplan:"^0.6.1",gulp:"^3.8.11","gulp-angular-templatecache":"^1.5.0","gulp-autoprefixer":"^2.1.0","gulp-concat":"^2.5.2","gulp-embedlr":"^0.5.2","gulp-gh-pages":"^0.4.0","gulp-gzip":"^1.0.0","gulp-htmlmin":"^1.1.1","gulp-jshint":"^1.9.2","gulp-plumber":"^0.6.6","gulp-rename":"^1.2.0","gulp-sass":"^1.3.3","gulp-sourcemaps":"^1.3.0","gulp-tar":"^1.4.0","gulp-template":"^3.0.0","gulp-uglify":"^1.1.0","gulp-util":"^3.0.3",merge:"^1.2.0",minimist:"^1.1.0","run-sequence":"^1.0.2","vinyl-source-stream2":"^0.1.1"},engines:{node:">=0.10.0"},license:"MIT"}},{}],4:[function(e,r){"use strict";var t=e("../../../../package");r.exports=angular.module("volunteers.common",["ng"]).constant("AppVersion",t.version).constant("EventsEmitter",e("./services/events-emitter")).provider("Logger",e("./services/logger"))},{"../../../../package":3,"./services/events-emitter":5,"./services/logger":6}],5:[function(e,r){"use strict";var t=e("events"),i=new t.EventEmitter;r.exports=i},{events:2}],6:[function(e,r){"use strict";function t(){function e(e){var r={};return i.forEach(function(t){r[t]=i.indexOf(t)>=s?e[t]:angular.noop}),r}function r(e){s=i.indexOf(e)}return e.$inject=["$log"],{setLogLevel:r,$get:e}}var i=["log","trace","debug","info","warn","error"],s=0;r.exports=t},{}],7:[function(e,r){"use strict";var t=window.Parse,i=e("./parse.keys");t.initialize(i.ID,i.KEY),r.exports=angular.module("volunteers.data",["ng","volunteers.common"]).constant("Parse",t).factory("ApiUser",e("./services/user")).factory("Faker",e("./services/faker"))},{"./parse.keys":8,"./services/faker":9,"./services/user":10}],8:[function(e,r){"use strict";r.exports={ID:"tttEpRyPOiKJBEdX464S8XUxj8hoOwQgAesil2yz",KEY:"VvM7lP5D2iUa84B93szBcPjZZIVYJxfeNCLvyb5i"}},{}],9:[function(e,r){"use strict";function t(){function e(){for(var e=[],r=Math.ceil(10*Math.random()),t=0;r>t;++t)e.push({id:t,name:["data",t].join("--")});return e}var r={};return r.getItems=e,r}r.exports=t},{}],10:[function(e,r){"use strict";function t(e,r,t){function i(r){return t.log("ApiUser::login"),e(function(e,t){n.logIn(r.username,r.password,o("login",e,t))})}function s(r){return t.log("ApiUser::sign"),e(function(e,t){var i=new n;angular.forEach(r,function(e,r){i.set(r,e)}),i.signUp(null,o("sign",e,t))})}function o(e,r,i){return{success:function(i){t.log(["ApiUser",e,"success"].join("::"),i),r(i)},error:function(r,s){t.log(["ApiUser",e,"error"].join("::"),r,s),i(s)}}}var n=r.User;return{login:i,sign:s}}t.$inject=["$q","Parse","Logger"],r.exports=t},{}],11:[function(e,r){"use strict";r.exports=angular.module("volunteers.templates",[]).run(["$templateCache",function(e){e.put("partials/views/index.html",'<h1>AngularJS Devstack</h1><p>{{vm.welcomeMessage}}</p><ul class="list-group"><li data-ng-repeat="item in ::vm.items" class="list-group-item">{{item.id}} - {{item.name}}</li></ul>'),e.put("partials/views/list.html",'<div class="page-header"><h1>List example</h1></div><ul class="list-group"><li data-ng-repeat="item in ::vm.items" class="list-group-item">{{item.id}} - {{item.name}}</li></ul>'),e.put("partials/views/login/index.html",'<section class="View View--Login row"><div class="col-md-4 col-md-offset-4"><h1>Authentication</h1><div class="alert alert-danger" data-ng-if="vm.error"><strong>Echec authentication!</strong> Vérifiez votre login et mot de passe, puis essayer à nouveau.</div><form class="form" role="form" name="form" data-ng-submit="vm.login()"><div class="form-group"><label for="login.email">Email</label><input type="text" class="form-control" id="login.email" placeholder="Email" data-ng-model="vm.user.email"></div><div class="form-group"><label for="login.password">Mot de passe</label><input type="password" class="form-control" id="login.password" placeholder="Mot de passe" data-ng-model="vm.user.password"></div><button type="submit" class="btn btn-primary">Login</button></form><p></p><div class="alert alert-warning">Vous n\'avez pas encore de compte? <a data-ui-sref="register.profile()">Créé en un maintenant</a></div></div></section>'),e.put("partials/views/register/_layout.html","<section data-ui-view></section>"),e.put("partials/views/register/profile.html",'<section class="View View--Register View--RegisterProfile row"><form name="form" data-ng-submit="vm.next()"><fieldset><legend>Votre profil</legend><div class="form-group"><label for="register-profile-username">Username*</label><input id="register-profile-username" name="username" class="form-control" type="text" required data-ng-model="vm.profile.username"></div><div class="form-group"><label for="register-profile-email">Adresse mail*</label><input id="register-profile-email" name="email" class="form-control" type="email" required data-ng-model="vm.profile.email"></div><div class="form-group"><label for="register-profile-password">Mot de passe*</label><input id="register-profile-password" name="password" class="form-control" type="password" required data-ng-model="vm.profile.password"></div><div class="form-group"><label for="register-profile-lastname">Nom*</label><input id="register-profile-lastname" name="lastname" class="form-control" type="text" required data-ng-model="vm.profile.lastname"></div><div class="form-group"><label for="register-profile-firstname">Prénom*</label><input id="register-profile-firstname" name="firstname" class="form-control" type="text" required data-ng-model="vm.profile.firstname"></div><div class="form-group"><label for="register-profile-birthdate">Date naissance*</label><input id="register-profile-birthdate" name="birthdate" class="form-control" type="date" required data-ng-model="vm.profile.birthdate"></div><div class="form-group"><label for="register-profile-birthplace">Lieu naissance*</label><input id="register-profile-birthplace" name="birthplace" class="form-control" type="text" required data-ng-model="vm.profile.birthplace"></div><div class="form-group"><label for="register-profile-gender">Sexe*</label><select id="register-profile-gender" name="gender" class="form-control" type="text" required data-ng-model="vm.profile.gender" data-ng-options="gender.value as gender.label for gender in ::vm.options.gender"></select></div><div class="form-group"><label for="register-profile-address">Adresse*</label><input id="register-profile-address" name="address" class="form-control" type="text" required data-ng-model="vm.profile.address"></div><div class="form-group"><label for="register-profile-zipcode">Code postal*</label><input id="register-profile-zipcode" name="zipcode" class="form-control" type="text" required data-ng-model="vm.profile.zipcode"></div><div class="form-group"><label for="register-profile-city">Ville*</label><input id="register-profile-city" name="city" class="form-control" type="text" required data-ng-model="vm.profile.city"></div><div class="form-group"><label for="register-profile-country">Pays*</label><select id="register-profile-country" name="country" class="form-control" type="text" required data-ng-model="vm.profile.country" data-ng-options="country.value as country.label for country in ::vm.options.country"></select></div><div class="form-group"><label for="register-profile-homenumber">Téléphone fixe</label><input id="register-profile-homenumber" name="homenumber" class="form-control" type="text" required data-ng-model="vm.profile.homenumber"></div><div class="form-group"><label for="register-profile-phonenumber">Téléphone portable*</label><input id="register-profile-phonenumber" name="phonenumber" class="form-control" type="text" required data-ng-model="vm.profile.phonenumber"></div><div class="form-group"><label for="register-profile-job">Profession*</label><input id="register-profile-job" name="job" class="form-control" type="text" required data-ng-model="vm.profile.job"></div><div class="form-group"><label for="register-profile-wearsize">Taille t-shirt*</label><select id="register-profile-wearsize" name="wearsize" class="form-control" type="text" required data-ng-model="vm.profile.wearsize" data-ng-options="wearsize.value as wearsize.label for wearsize in ::vm.options.wearsize"></select></div><div class="form-group"><label for="register-profile-avatar">Photo*</label><input id="register-profile-avatar" name="avatar" class="form-control" type="file" required data-ng-model="vm.profile.avatar"></div><div class="form-group"><label for="register-profile-emergency-contact">Personne à prévenir*</label><input id="register-profile-emergency-contact" name="emergency-contact" class="form-control" type="text" required data-ng-model="vm.profile.emergency.contact"></div><div class="form-group"><label for="register-profile-emergency-phonenumber">Téléphone personne à prévenir*</label><input id="register-profile-emergency-phonenumber" name="emergency-phonenumber" class="form-control" type="text" required data-ng-model="vm.profile.emergency.phonenumber"></div><div class="form-group"><label for="register-profile-diet">Régime alimentaire*</label><input id="register-profile-diet" name="diet" class="form-control" type="text" required data-ng-model="vm.profile.diet"></div></fieldset><button type="submit" class="btn btn-primary">Continuer</button></form></section>'),e.put("partials/views/register/skills.html",'<section class="View View--Register View--RegisterSkills row"><form name="form" data-ng-submit="vm.next()"><fieldset><legend>Vos compétences</legend><div class="form-group"><label for="register-skills-certificate">Diplômes de secourisme</label><input id="register-skills-certificate" name="certificate" class="form-control" type="text" required data-ng-model="vm.skills.certificate"></div><div class="form-group"><label for="register-skills-languages">Langues</label><input id="register-skills-languages" name="languages" class="form-control" type="text" required data-ng-model="vm.skills.languages"></div><div class="form-group"><label for="register-skills-driver-licences">Permis de conduire</label><input id="register-skills-driver-licences" name="driver-licences" class="form-control" type="text" required data-ng-model="vm.skills.driverlicences"></div></fieldset><button type="submit" class="btn btn-primary">Continuer</button></form></section>')}])},{}],12:[function(e,r){"use strict";function t(e,r){e.debugInfoEnabled(r.NG_DEBUG_INFO_ENABLED)}t.$inject=["$compileProvider","AppConfig"],r.exports=t},{}],13:[function(e,r){"use strict";function t(e,r){r.setLogLevel(e.LOG_LEVEL)}t.$inject=["AppConfig","LoggerProvider"],r.exports=t},{}],14:[function(e,r){"use strict";function t(e,r,t){e.state("index",{url:"/",templateUrl:"partials/views/index.html",controller:"Index as vm"}).state("list",{url:"/list",templateUrl:"partials/views/list.html",controller:"List as vm"}).state("login",{url:"/login",templateUrl:"partials/views/login/index.html",controller:"Login as vm"}).state("register",{"abstract":!0,url:"/register",templateUrl:"partials/views/register/_layout.html",controller:"Register as vm"}).state("register.profile",{url:"/profile",templateUrl:"partials/views/register/profile.html",controller:"RegisterProfile as vm"}).state("register.skills",{url:"/competences",templateUrl:"partials/views/register/skills.html",controller:"RegisterSkills as vm"}),r.otherwise("/"),t.html5Mode(!1)}t.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],r.exports=t},{}],15:[function(e,r){"use strict";function t(){var e=this;e.welcomeMessage="Welcome message generated by AngularJS"}r.exports=t},{}],16:[function(e,r){"use strict";function t(e){var r=this;r.items=e.getItems()}t.$inject=["Faker"],r.exports=t},{}],17:[function(e,r){"use strict";function t(e){function r(){e.debug("Login::login")}e.debug("Login");var t=this;t.user={},t.errors={},t.login=r}t.$inject=["Logger"],r.exports=t},{}],18:[function(e,r){"use strict";function t(e,r){function t(){r.debug("RegisterProfile::next"),e.sign(i.profile).then(function(e){r.log("RegisterProfile::next::onSignSuccess",e)},function(e){r.log("RegisterProfile::next::onSignError",e)})}r.debug("RegisterProfile");var i=this;i.profile={country:"france",gender:"male",wearsize:"m"},i.options={country:[{label:"France",value:"france"}],gender:[{label:"Homme",value:"male"}],wearsize:[{label:"M",value:"m"}]},i.next=t}t.$inject=["ApiUser","Logger"],r.exports=t},{}],19:[function(e,r){"use strict";function t(e){function r(){e.debug("RegisterSkills::next")}e.debug("RegisterSkills");var t=this;t.skills={},t.next=r}t.$inject=["Logger"],r.exports=t},{}],20:[function(e,r){"use strict";function t(e){function r(){e.debug("Register::next")}e.debug("Register");var t=this;t.register={},t.next=r}t.$inject=["Logger"],r.exports=t},{}],21:[function(e,r){"use strict";r.exports=angular.module("volunteers.ui",["ng","ngAnimate","mgcrea.ngStrap","ui.router","volunteers.common","volunteers.data","volunteers.templates"]).config(e("./config/compiler")).config(e("./config/logger")).config(e("./config/router")).controller("Index",e("./controllers/index")).controller("List",e("./controllers/list")).controller("Login",e("./controllers/login")).controller("Register",e("./controllers/register")).controller("RegisterProfile",e("./controllers/register-profile")).controller("RegisterSkills",e("./controllers/register-skills"))},{"./config/compiler":12,"./config/logger":13,"./config/router":14,"./controllers/index":15,"./controllers/list":16,"./controllers/login":17,"./controllers/register":20,"./controllers/register-profile":18,"./controllers/register-skills":19}]},{},[1]);