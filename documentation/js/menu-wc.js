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
                    <a href="index.html" data-type="index-link">curso-tour-of-heroes-frontend documentation</a>
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
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
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
                                            'data-target="#components-links-module-AppModule-ef65c5c336f71f723f58eddad5651b058a376774b3ef83107ec962d216d5a657b104959d216cd968a597eeedd19659801ce779728ecb45ae7adae98e37705299"' : 'data-target="#xs-components-links-module-AppModule-ef65c5c336f71f723f58eddad5651b058a376774b3ef83107ec962d216d5a657b104959d216cd968a597eeedd19659801ce779728ecb45ae7adae98e37705299"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-ef65c5c336f71f723f58eddad5651b058a376774b3ef83107ec962d216d5a657b104959d216cd968a597eeedd19659801ce779728ecb45ae7adae98e37705299"' :
                                            'id="xs-components-links-module-AppModule-ef65c5c336f71f723f58eddad5651b058a376774b3ef83107ec962d216d5a657b104959d216cd968a597eeedd19659801ce779728ecb45ae7adae98e37705299"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-b1ea90eba3ab65bb1e84dcd1ae2726547d09ccea29014bcf20d8d2dda9758227ecd974b69418d8e7020e89035e3c1ca8bf53247a044c66f4db722c7bf738cce6"' : 'data-target="#xs-components-links-module-AuthModule-b1ea90eba3ab65bb1e84dcd1ae2726547d09ccea29014bcf20d8d2dda9758227ecd974b69418d8e7020e89035e3c1ca8bf53247a044c66f4db722c7bf738cce6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-b1ea90eba3ab65bb1e84dcd1ae2726547d09ccea29014bcf20d8d2dda9758227ecd974b69418d8e7020e89035e3c1ca8bf53247a044c66f4db722c7bf738cce6"' :
                                            'id="xs-components-links-module-AuthModule-b1ea90eba3ab65bb1e84dcd1ae2726547d09ccea29014bcf20d8d2dda9758227ecd974b69418d8e7020e89035e3c1ca8bf53247a044c66f4db722c7bf738cce6"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-e8d42a75a655f527cad66e2d2d8866b171d9fce6f825ed8eed0d55c115600c6134798c0820e275bbbd2d57c9e0e7116437060ae95a5ab5ba0d9ed4c9ebe1a6a4"' : 'data-target="#xs-components-links-module-CoreModule-e8d42a75a655f527cad66e2d2d8866b171d9fce6f825ed8eed0d55c115600c6134798c0820e275bbbd2d57c9e0e7116437060ae95a5ab5ba0d9ed4c9ebe1a6a4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-e8d42a75a655f527cad66e2d2d8866b171d9fce6f825ed8eed0d55c115600c6134798c0820e275bbbd2d57c9e0e7116437060ae95a5ab5ba0d9ed4c9ebe1a6a4"' :
                                            'id="xs-components-links-module-CoreModule-e8d42a75a655f527cad66e2d2d8866b171d9fce6f825ed8eed0d55c115600c6134798c0820e275bbbd2d57c9e0e7116437060ae95a5ab5ba0d9ed4c9ebe1a6a4"' }>
                                            <li class="link">
                                                <a href="components/ConfirmationDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmationDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MessagesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessagesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/toolbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >toolbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-237de4ed99546bee2a820ed8fd3b03a528f629b0f0cbc0926a830c2f9160c6c0412b78124cc2c64b72ceefd0d259d14fd0ae44fd43dbec96dc542f94857a5985"' : 'data-target="#xs-components-links-module-DashboardModule-237de4ed99546bee2a820ed8fd3b03a528f629b0f0cbc0926a830c2f9160c6c0412b78124cc2c64b72ceefd0d259d14fd0ae44fd43dbec96dc542f94857a5985"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-237de4ed99546bee2a820ed8fd3b03a528f629b0f0cbc0926a830c2f9160c6c0412b78124cc2c64b72ceefd0d259d14fd0ae44fd43dbec96dc542f94857a5985"' :
                                            'id="xs-components-links-module-DashboardModule-237de4ed99546bee2a820ed8fd3b03a528f629b0f0cbc0926a830c2f9160c6c0412b78124cc2c64b72ceefd0d259d14fd0ae44fd43dbec96dc542f94857a5985"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link" >DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HeroesModule.html" data-type="entity-link" >HeroesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HeroesModule-99822e673ed9f9b24063035e0af4ea386d8801912463b442a2ddbec69a1e7952e5735297556cfee06e0abf0687a10fd0beba0d93ef5a86d02e33d746f19d7efd"' : 'data-target="#xs-components-links-module-HeroesModule-99822e673ed9f9b24063035e0af4ea386d8801912463b442a2ddbec69a1e7952e5735297556cfee06e0abf0687a10fd0beba0d93ef5a86d02e33d746f19d7efd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HeroesModule-99822e673ed9f9b24063035e0af4ea386d8801912463b442a2ddbec69a1e7952e5735297556cfee06e0abf0687a10fd0beba0d93ef5a86d02e33d746f19d7efd"' :
                                            'id="xs-components-links-module-HeroesModule-99822e673ed9f9b24063035e0af4ea386d8801912463b442a2ddbec69a1e7952e5735297556cfee06e0abf0687a10fd0beba0d93ef5a86d02e33d746f19d7efd"' }>
                                            <li class="link">
                                                <a href="components/HeroDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeroDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeroesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeroesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HeroesRoutingModule.html" data-type="entity-link" >HeroesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-0db9c4cc49fa2890a447da6d3597a1a114c3db74bad330c0b8f607088232c526df9dda6e74c30e9855c973012a5dbc57fd1c72cb8284d696bba84b6e84eadbda"' : 'data-target="#xs-components-links-module-SharedModule-0db9c4cc49fa2890a447da6d3597a1a114c3db74bad330c0b8f607088232c526df9dda6e74c30e9855c973012a5dbc57fd1c72cb8284d696bba84b6e84eadbda"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-0db9c4cc49fa2890a447da6d3597a1a114c3db74bad330c0b8f607088232c526df9dda6e74c30e9855c973012a5dbc57fd1c72cb8284d696bba84b6e84eadbda"' :
                                            'id="xs-components-links-module-SharedModule-0db9c4cc49fa2890a447da6d3597a1a114c3db74bad330c0b8f607088232c526df9dda6e74c30e9855c973012a5dbc57fd1c72cb8284d696bba84b6e84eadbda"' }>
                                            <li class="link">
                                                <a href="components/ConfirmationDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmationDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MessagesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessagesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/toolbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >toolbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/HeroSearchComponent.html" data-type="entity-link" >HeroSearchComponent</a>
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
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HeroService.html" data-type="entity-link" >HeroService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoadingService.html" data-type="entity-link" >LoadingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessageService.html" data-type="entity-link" >MessageService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/HttpErrorInterceptor.html" data-type="entity-link" >HttpErrorInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/LoadingInterceptor.html" data-type="entity-link" >LoadingInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/TokenInterceptor.html" data-type="entity-link" >TokenInterceptor</a>
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
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Credentials.html" data-type="entity-link" >Credentials</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/dialogData.html" data-type="entity-link" >dialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Hero.html" data-type="entity-link" >Hero</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuItem.html" data-type="entity-link" >MenuItem</a>
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
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
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