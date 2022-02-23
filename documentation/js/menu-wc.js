'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-demo documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-43198c001acafdef41103cf0089181d6e75844af7c5a870b3c5ef0558c708371ca999b0d6a6abd4b765a09befe512daa951efc12103f3844da6d6597a661c759"' : 'data-target="#xs-controllers-links-module-AppModule-43198c001acafdef41103cf0089181d6e75844af7c5a870b3c5ef0558c708371ca999b0d6a6abd4b765a09befe512daa951efc12103f3844da6d6597a661c759"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-43198c001acafdef41103cf0089181d6e75844af7c5a870b3c5ef0558c708371ca999b0d6a6abd4b765a09befe512daa951efc12103f3844da6d6597a661c759"' :
                                            'id="xs-controllers-links-module-AppModule-43198c001acafdef41103cf0089181d6e75844af7c5a870b3c5ef0558c708371ca999b0d6a6abd4b765a09befe512daa951efc12103f3844da6d6597a661c759"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-43198c001acafdef41103cf0089181d6e75844af7c5a870b3c5ef0558c708371ca999b0d6a6abd4b765a09befe512daa951efc12103f3844da6d6597a661c759"' : 'data-target="#xs-injectables-links-module-AppModule-43198c001acafdef41103cf0089181d6e75844af7c5a870b3c5ef0558c708371ca999b0d6a6abd4b765a09befe512daa951efc12103f3844da6d6597a661c759"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-43198c001acafdef41103cf0089181d6e75844af7c5a870b3c5ef0558c708371ca999b0d6a6abd4b765a09befe512daa951efc12103f3844da6d6597a661c759"' :
                                        'id="xs-injectables-links-module-AppModule-43198c001acafdef41103cf0089181d6e75844af7c5a870b3c5ef0558c708371ca999b0d6a6abd4b765a09befe512daa951efc12103f3844da6d6597a661c759"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PostsModule-518e9f95c5dbdab47efe2298c2c5a5e30bd2962251ada4fe4d31a1d089cbb57aee7f598781f6a6b4c25f5e5ae5dd2f4dd8137895921eca886ba749097621904f"' : 'data-target="#xs-controllers-links-module-PostsModule-518e9f95c5dbdab47efe2298c2c5a5e30bd2962251ada4fe4d31a1d089cbb57aee7f598781f6a6b4c25f5e5ae5dd2f4dd8137895921eca886ba749097621904f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-518e9f95c5dbdab47efe2298c2c5a5e30bd2962251ada4fe4d31a1d089cbb57aee7f598781f6a6b4c25f5e5ae5dd2f4dd8137895921eca886ba749097621904f"' :
                                            'id="xs-controllers-links-module-PostsModule-518e9f95c5dbdab47efe2298c2c5a5e30bd2962251ada4fe4d31a1d089cbb57aee7f598781f6a6b4c25f5e5ae5dd2f4dd8137895921eca886ba749097621904f"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PostsModule-518e9f95c5dbdab47efe2298c2c5a5e30bd2962251ada4fe4d31a1d089cbb57aee7f598781f6a6b4c25f5e5ae5dd2f4dd8137895921eca886ba749097621904f"' : 'data-target="#xs-injectables-links-module-PostsModule-518e9f95c5dbdab47efe2298c2c5a5e30bd2962251ada4fe4d31a1d089cbb57aee7f598781f6a6b4c25f5e5ae5dd2f4dd8137895921eca886ba749097621904f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-518e9f95c5dbdab47efe2298c2c5a5e30bd2962251ada4fe4d31a1d089cbb57aee7f598781f6a6b4c25f5e5ae5dd2f4dd8137895921eca886ba749097621904f"' :
                                        'id="xs-injectables-links-module-PostsModule-518e9f95c5dbdab47efe2298c2c5a5e30bd2962251ada4fe4d31a1d089cbb57aee7f598781f6a6b4c25f5e5ae5dd2f4dd8137895921eca886ba749097621904f"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-2e6428412445410176c7fd56fb5125e3bb5fe9d2b2952fac1a9fdd123beb418fe376d36952ac287e4f3f33b0fa239fab4203c661e564cdd34c1fac198bab4444"' : 'data-target="#xs-controllers-links-module-UsersModule-2e6428412445410176c7fd56fb5125e3bb5fe9d2b2952fac1a9fdd123beb418fe376d36952ac287e4f3f33b0fa239fab4203c661e564cdd34c1fac198bab4444"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-2e6428412445410176c7fd56fb5125e3bb5fe9d2b2952fac1a9fdd123beb418fe376d36952ac287e4f3f33b0fa239fab4203c661e564cdd34c1fac198bab4444"' :
                                            'id="xs-controllers-links-module-UsersModule-2e6428412445410176c7fd56fb5125e3bb5fe9d2b2952fac1a9fdd123beb418fe376d36952ac287e4f3f33b0fa239fab4203c661e564cdd34c1fac198bab4444"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-2e6428412445410176c7fd56fb5125e3bb5fe9d2b2952fac1a9fdd123beb418fe376d36952ac287e4f3f33b0fa239fab4203c661e564cdd34c1fac198bab4444"' : 'data-target="#xs-injectables-links-module-UsersModule-2e6428412445410176c7fd56fb5125e3bb5fe9d2b2952fac1a9fdd123beb418fe376d36952ac287e4f3f33b0fa239fab4203c661e564cdd34c1fac198bab4444"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-2e6428412445410176c7fd56fb5125e3bb5fe9d2b2952fac1a9fdd123beb418fe376d36952ac287e4f3f33b0fa239fab4203c661e564cdd34c1fac198bab4444"' :
                                        'id="xs-injectables-links-module-UsersModule-2e6428412445410176c7fd56fb5125e3bb5fe9d2b2952fac1a9fdd123beb418fe376d36952ac287e4f3f33b0fa239fab4203c661e564cdd34c1fac198bab4444"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ApiException.html" data-type="entity-link" >ApiException</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerMiddleware.html" data-type="entity-link" >LoggerMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransformInterceptor.html" data-type="entity-link" >TransformInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidationPipe.html" data-type="entity-link" >ValidationPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});