'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, 'prototype', { writable: false });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  Object.defineProperty(subClass, 'prototype', { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError(
      'Derived constructors may only return object or undefined',
    );
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  }
  return self;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === 'function' ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== 'function') {
      throw new TypeError('Super expression must either be null or a function');
    }
    if (typeof _cache !== 'undefined') {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
    return true;
  } catch (e) {
    return false;
  }
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf('[native code]') !== -1;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

customElements.define(
  'compodoc-menu',
  /*#__PURE__*/ (function (_HTMLElement) {
    _inherits(_class, _HTMLElement);

    var _super = _createSuper(_class);

    function _class() {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this);
      _this.isNormalMode = _this.getAttribute('mode') === 'normal';
      return _this;
    }

    _createClass(_class, [
      {
        key: 'connectedCallback',
        value: function connectedCallback() {
          this.render(this.isNormalMode);
        },
      },
      {
        key: 'render',
        value: function render(isNormalMode) {
          var tp = lithtml.html(
            '\n        <nav>\n            <ul class="list">\n                <li class="title">\n                    <a href="index.html" data-type="index-link">nest-demo documentation</a>\n                </li>\n\n                <li class="divider"></li>\n                '
              .concat(
                isNormalMode
                  ? '<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>'
                  : '',
                '\n                <li class="chapter">\n                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>\n                    <ul class="links">\n                        <li class="link">\n                            <a href="overview.html" data-type="chapter-link">\n                                <span class="icon ion-ios-keypad"></span>Overview\n                            </a>\n                        </li>\n                        <li class="link">\n                            <a href="index.html" data-type="chapter-link">\n                                <span class="icon ion-ios-paper"></span>README\n                            </a>\n                        </li>\n                                <li class="link">\n                                    <a href="dependencies.html" data-type="chapter-link">\n                                        <span class="icon ion-ios-list"></span>Dependencies\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class="chapter modules">\n                        <a data-type="chapter-link" href="modules.html">\n                            <div class="menu-toggler linked" data-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-target="#modules-links"'
                  : 'data-target="#xs-modules-links"',
                '>\n                                <span class="icon ion-ios-archive"></span>\n                                <span class="link-name">Modules</span>\n                                <span class="icon ion-ios-arrow-down"></span>\n                            </div>\n                        </a>\n                        <ul class="links collapse " ',
              )
              .concat(
                isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"',
                '>\n                            <li class="link">\n                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-target="#controllers-links-module-AppModule-43198c001acafdef41103cf0089181d6e75844af7c5a870b3c5ef0558c708371ca999b0d6a6abd4b765a09befe512daa951efc12103f3844da6d6597a661c759"'
                  : 'data-target="#xs-controllers-links-module-AppModule-43198c001acafdef41103cf0089181d6e75844af7c5a870b3c5ef0558c708371ca999b0d6a6abd4b765a09befe512daa951efc12103f3844da6d6597a661c759"',
                '>\n                                            <span class="icon ion-md-swap"></span>\n                                            <span>Controllers</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links-module-AppModule-43198c001acafdef41103cf0089181d6e75844af7c5a870b3c5ef0558c708371ca999b0d6a6abd4b765a09befe512daa951efc12103f3844da6d6597a661c759"'
                  : 'id="xs-controllers-links-module-AppModule-43198c001acafdef41103cf0089181d6e75844af7c5a870b3c5ef0558c708371ca999b0d6a6abd4b765a09befe512daa951efc12103f3844da6d6597a661c759"',
                '>\n                                            <li class="link">\n                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-target="#injectables-links-module-AppModule-43198c001acafdef41103cf0089181d6e75844af7c5a870b3c5ef0558c708371ca999b0d6a6abd4b765a09befe512daa951efc12103f3844da6d6597a661c759"'
                  : 'data-target="#xs-injectables-links-module-AppModule-43198c001acafdef41103cf0089181d6e75844af7c5a870b3c5ef0558c708371ca999b0d6a6abd4b765a09befe512daa951efc12103f3844da6d6597a661c759"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-AppModule-43198c001acafdef41103cf0089181d6e75844af7c5a870b3c5ef0558c708371ca999b0d6a6abd4b765a09befe512daa951efc12103f3844da6d6597a661c759"'
                  : 'id="xs-injectables-links-module-AppModule-43198c001acafdef41103cf0089181d6e75844af7c5a870b3c5ef0558c708371ca999b0d6a6abd4b765a09befe512daa951efc12103f3844da6d6597a661c759"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-target="#controllers-links-module-PostsModule-518e9f95c5dbdab47efe2298c2c5a5e30bd2962251ada4fe4d31a1d089cbb57aee7f598781f6a6b4c25f5e5ae5dd2f4dd8137895921eca886ba749097621904f"'
                  : 'data-target="#xs-controllers-links-module-PostsModule-518e9f95c5dbdab47efe2298c2c5a5e30bd2962251ada4fe4d31a1d089cbb57aee7f598781f6a6b4c25f5e5ae5dd2f4dd8137895921eca886ba749097621904f"',
                '>\n                                            <span class="icon ion-md-swap"></span>\n                                            <span>Controllers</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links-module-PostsModule-518e9f95c5dbdab47efe2298c2c5a5e30bd2962251ada4fe4d31a1d089cbb57aee7f598781f6a6b4c25f5e5ae5dd2f4dd8137895921eca886ba749097621904f"'
                  : 'id="xs-controllers-links-module-PostsModule-518e9f95c5dbdab47efe2298c2c5a5e30bd2962251ada4fe4d31a1d089cbb57aee7f598781f6a6b4c25f5e5ae5dd2f4dd8137895921eca886ba749097621904f"',
                '>\n                                            <li class="link">\n                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-target="#injectables-links-module-PostsModule-518e9f95c5dbdab47efe2298c2c5a5e30bd2962251ada4fe4d31a1d089cbb57aee7f598781f6a6b4c25f5e5ae5dd2f4dd8137895921eca886ba749097621904f"'
                  : 'data-target="#xs-injectables-links-module-PostsModule-518e9f95c5dbdab47efe2298c2c5a5e30bd2962251ada4fe4d31a1d089cbb57aee7f598781f6a6b4c25f5e5ae5dd2f4dd8137895921eca886ba749097621904f"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-PostsModule-518e9f95c5dbdab47efe2298c2c5a5e30bd2962251ada4fe4d31a1d089cbb57aee7f598781f6a6b4c25f5e5ae5dd2f4dd8137895921eca886ba749097621904f"'
                  : 'id="xs-injectables-links-module-PostsModule-518e9f95c5dbdab47efe2298c2c5a5e30bd2962251ada4fe4d31a1d089cbb57aee7f598781f6a6b4c25f5e5ae5dd2f4dd8137895921eca886ba749097621904f"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-target="#controllers-links-module-UsersModule-2e6428412445410176c7fd56fb5125e3bb5fe9d2b2952fac1a9fdd123beb418fe376d36952ac287e4f3f33b0fa239fab4203c661e564cdd34c1fac198bab4444"'
                  : 'data-target="#xs-controllers-links-module-UsersModule-2e6428412445410176c7fd56fb5125e3bb5fe9d2b2952fac1a9fdd123beb418fe376d36952ac287e4f3f33b0fa239fab4203c661e564cdd34c1fac198bab4444"',
                '>\n                                            <span class="icon ion-md-swap"></span>\n                                            <span>Controllers</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links-module-UsersModule-2e6428412445410176c7fd56fb5125e3bb5fe9d2b2952fac1a9fdd123beb418fe376d36952ac287e4f3f33b0fa239fab4203c661e564cdd34c1fac198bab4444"'
                  : 'id="xs-controllers-links-module-UsersModule-2e6428412445410176c7fd56fb5125e3bb5fe9d2b2952fac1a9fdd123beb418fe376d36952ac287e4f3f33b0fa239fab4203c661e564cdd34c1fac198bab4444"',
                '>\n                                            <li class="link">\n                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-target="#injectables-links-module-UsersModule-2e6428412445410176c7fd56fb5125e3bb5fe9d2b2952fac1a9fdd123beb418fe376d36952ac287e4f3f33b0fa239fab4203c661e564cdd34c1fac198bab4444"'
                  : 'data-target="#xs-injectables-links-module-UsersModule-2e6428412445410176c7fd56fb5125e3bb5fe9d2b2952fac1a9fdd123beb418fe376d36952ac287e4f3f33b0fa239fab4203c661e564cdd34c1fac198bab4444"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-UsersModule-2e6428412445410176c7fd56fb5125e3bb5fe9d2b2952fac1a9fdd123beb418fe376d36952ac287e4f3f33b0fa239fab4203c661e564cdd34c1fac198bab4444"'
                  : 'id="xs-injectables-links-module-UsersModule-2e6428412445410176c7fd56fb5125e3bb5fe9d2b2952fac1a9fdd123beb418fe376d36952ac287e4f3f33b0fa239fab4203c661e564cdd34c1fac198bab4444"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                        <li class="chapter">\n                            <div class="simple menu-toggler" data-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-target="#controllers-links"'
                  : 'data-target="#xs-controllers-links"',
                '>\n                                <span class="icon ion-md-swap"></span>\n                                <span>Controllers</span>\n                                <span class="icon ion-ios-arrow-down"></span>\n                            </div>\n                            <ul class="links collapse " ',
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links"'
                  : 'id="xs-controllers-links"',
                '>\n                                <li class="link">\n                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>\n                                </li>\n                                <li class="link">\n                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>\n                                </li>\n                                <li class="link">\n                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class="chapter">\n                        <div class="simple menu-toggler" data-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-target="#classes-links"'
                  : 'data-target="#xs-classes-links"',
                '>\n                            <span class="icon ion-ios-paper"></span>\n                            <span>Classes</span>\n                            <span class="icon ion-ios-arrow-down"></span>\n                        </div>\n                        <ul class="links collapse " ',
              )
              .concat(
                isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"',
                '>\n                            <li class="link">\n                                <a href="classes/ApiException.html" data-type="entity-link" >ApiException</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/User.html" data-type="entity-link" >User</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class="chapter">\n                            <div class="simple menu-toggler" data-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-target="#injectables-links"'
                  : 'data-target="#xs-injectables-links"',
                '>\n                                <span class="icon ion-md-arrow-round-down"></span>\n                                <span>Injectables</span>\n                                <span class="icon ion-ios-arrow-down"></span>\n                            </div>\n                            <ul class="links collapse " ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links"'
                  : 'id="xs-injectables-links"',
                '>\n                                <li class="link">\n                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/LoggerMiddleware.html" data-type="entity-link" >LoggerMiddleware</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/TransformInterceptor.html" data-type="entity-link" >TransformInterceptor</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/ValidationPipe.html" data-type="entity-link" >ValidationPipe</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class="chapter">\n                        <div class="simple menu-toggler" data-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-target="#guards-links"'
                  : 'data-target="#xs-guards-links"',
                '>\n                            <span class="icon ion-ios-lock"></span>\n                            <span>Guards</span>\n                            <span class="icon ion-ios-arrow-down"></span>\n                        </div>\n                        <ul class="links collapse " ',
              )
              .concat(
                isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"',
                '>\n                            <li class="link">\n                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class="chapter">\n                        <div class="simple menu-toggler" data-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-target="#miscellaneous-links"'
                  : 'data-target="#xs-miscellaneous-links"',
                '>\n                            <span class="icon ion-ios-cube"></span>\n                            <span>Miscellaneous</span>\n                            <span class="icon ion-ios-arrow-down"></span>\n                        </div>\n                        <ul class="links collapse " ',
              )
              .concat(
                isNormalMode
                  ? 'id="miscellaneous-links"'
                  : 'id="xs-miscellaneous-links"',
                '>\n                            <li class="link">\n                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>\n                            </li>\n                            <li class="link">\n                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>\n                            </li>\n                            <li class="link">\n                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class="chapter">\n                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>\n                    </li>\n                    <li class="divider"></li>\n                    <li class="copyright">\n                        Documentation generated using <a href="https://compodoc.app/" target="_blank">\n                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        ',
              ),
          );
          this.innerHTML = tp.strings;
        },
      },
    ]);

    return _class;
  })(/*#__PURE__*/ _wrapNativeSuper(HTMLElement)),
);
