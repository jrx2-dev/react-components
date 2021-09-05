(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{163:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(5),__webpack_require__(8),__webpack_require__(0);var build=__webpack_require__(461),injectStylesIntoStyleTag=__webpack_require__(211),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styles_module=__webpack_require__(291),options={insert:"head",singleton:!1},ResponsiveProductItemCard_styles_module=(injectStylesIntoStyleTag_default()(styles_module.a,options),styles_module.a.locals||{}),fadeAnimation_module=__webpack_require__(292),fadeAnimation_module_options={insert:"head",singleton:!1},theme_fadeAnimation_module=(injectStylesIntoStyleTag_default()(fadeAnimation_module.a,fadeAnimation_module_options),fadeAnimation_module.a.locals||{}),jsx_runtime=(__webpack_require__(434),__webpack_require__(39)),view_ResponsiveProductItemCardView=function ResponsiveProductItemCardView(props){var productItem=props.productItem,onSelect=props.onSelect,_props$action=props.action,action=void 0===_props$action?"Select":_props$action,cardRef=props.cardRef,sizeClass=props.sizeClass,animationClass=props.animationClass,responsiveClass=function getResponsiveClass(styles,currentSizeClass){return styles[currentSizeClass]}(ResponsiveProductItemCard_styles_module,sizeClass||"");return Object(jsx_runtime.jsx)("div",{className:(sizeClass&&ResponsiveProductItemCard_styles_module.root)+" "+responsiveClass+" "+theme_fadeAnimation_module[animationClass||""],ref:cardRef,children:sizeClass&&Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("div",{className:ResponsiveProductItemCard_styles_module.imageContainer+" "+responsiveClass,children:Object(jsx_runtime.jsx)(build.LazyLoadImage,{wrapperClassName:ResponsiveProductItemCard_styles_module.imageLazyWrapper,className:ResponsiveProductItemCard_styles_module.image+" "+responsiveClass+"}",alt:productItem.title,effect:"blur",src:productItem.imgUrl})}),Object(jsx_runtime.jsxs)("div",{className:ResponsiveProductItemCard_styles_module.infoContainer+" "+responsiveClass,children:[Object(jsx_runtime.jsxs)("div",{className:ResponsiveProductItemCard_styles_module.infoDetails+" "+responsiveClass,children:[Object(jsx_runtime.jsxs)("div",{className:ResponsiveProductItemCard_styles_module.requiredDetails+" "+responsiveClass,children:[Object(jsx_runtime.jsx)("div",{className:ResponsiveProductItemCard_styles_module.itemTitle,children:productItem.title}),Object(jsx_runtime.jsx)("div",{className:ResponsiveProductItemCard_styles_module.itemPrice+" "+responsiveClass,children:productItem.price})]}),productItem.description&&Object(jsx_runtime.jsx)("div",{className:ResponsiveProductItemCard_styles_module.itemDescription+" "+responsiveClass,children:productItem.description})]}),Object(jsx_runtime.jsx)("div",{className:ResponsiveProductItemCard_styles_module.buttonContainer+" "+responsiveClass,children:Object(jsx_runtime.jsx)("button",{className:ResponsiveProductItemCard_styles_module.button+" "+responsiveClass,onClick:function onClick(){return onSelect(productItem.id)},children:action})})]})]})})};view_ResponsiveProductItemCardView.displayName="ResponsiveProductItemCardView";__webpack_exports__.a=view_ResponsiveProductItemCardView;try{view_ResponsiveProductItemCardView.displayName="ResponsiveProductItemCardView",view_ResponsiveProductItemCardView.__docgenInfo={description:"",displayName:"ResponsiveProductItemCardView",props:{cardRef:{defaultValue:null,description:"",name:"cardRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},sizeClass:{defaultValue:null,description:"",name:"sizeClass",required:!1,type:{name:"string"}},animationClass:{defaultValue:null,description:"",name:"animationClass",required:!1,type:{name:"string"}},productItem:{defaultValue:null,description:"",name:"productItem",required:!0,type:{name:"ProductItem"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(id: number) => void"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ResponsiveProductItemCard/view.tsx#ResponsiveProductItemCardView"]={docgenInfo:view_ResponsiveProductItemCardView.__docgenInfo,name:"ResponsiveProductItemCardView",path:"src/components/ResponsiveProductItemCard/view.tsx#ResponsiveProductItemCardView"})}catch(__react_docgen_typescript_loader_error){}try{view.displayName="view",view.__docgenInfo={description:"",displayName:"view",props:{cardRef:{defaultValue:null,description:"",name:"cardRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},sizeClass:{defaultValue:null,description:"",name:"sizeClass",required:!1,type:{name:"string"}},animationClass:{defaultValue:null,description:"",name:"animationClass",required:!1,type:{name:"string"}},productItem:{defaultValue:null,description:"",name:"productItem",required:!0,type:{name:"ProductItem"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(id: number) => void"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ResponsiveProductItemCard/view.tsx#view"]={docgenInfo:view.__docgenInfo,name:"view",path:"src/components/ResponsiveProductItemCard/view.tsx#view"})}catch(__react_docgen_typescript_loader_error){}},291:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(212),_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(213),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);___CSS_LOADER_EXPORT___.push([module.i,'._2EOjIIerNaWDtWXH6QReYH{display:flex;flex-direction:row;margin:5px;padding:15px;border:1px solid #d3d3d3;border-radius:15px;background-color:#fff}._2EOjIIerNaWDtWXH6QReYH._3xCuuCmvCyUpHXaYQId5ra{flex-direction:column}._2EOjIIerNaWDtWXH6QReYH:hover{background-color:#fffaf0;box-shadow:3px 3px 10px gray}._2EOjIIerNaWDtWXH6QReYH ._1_BaPDryjT1Xffqk8VNrSA._3xCuuCmvCyUpHXaYQId5ra{width:100%}._2EOjIIerNaWDtWXH6QReYH ._1_BaPDryjT1Xffqk8VNrSA._38wzq7GHoJhipOgONt3K03{width:33%}._2EOjIIerNaWDtWXH6QReYH ._1_BaPDryjT1Xffqk8VNrSA._3Ra1rFilmqzOZI93ANAkhm{width:20%}._2EOjIIerNaWDtWXH6QReYH ._1_BaPDryjT1Xffqk8VNrSA ._2HmckVAL8l-BGPvtSy233_{width:100%}._2EOjIIerNaWDtWXH6QReYH ._1_BaPDryjT1Xffqk8VNrSA ._2HmckVAL8l-BGPvtSy233_ .Z2NZEyvETMa6WISZi_BeI{width:100%;border-radius:15px;box-shadow:0px 0px 10px gray}._2EOjIIerNaWDtWXH6QReYH ._-X_QxcmvJrdkTXV9YLv6{display:flex;flex:1;padding-left:15px}._2EOjIIerNaWDtWXH6QReYH ._-X_QxcmvJrdkTXV9YLv6._3xCuuCmvCyUpHXaYQId5ra{display:block;padding-left:0px;padding-top:15px}._2EOjIIerNaWDtWXH6QReYH ._-X_QxcmvJrdkTXV9YLv6._38wzq7GHoJhipOgONt3K03{flex-direction:column}._2EOjIIerNaWDtWXH6QReYH ._-X_QxcmvJrdkTXV9YLv6 .RWP-jsIf2PlrH3G0bC2iy{display:flex;flex:1;flex-direction:column;padding-bottom:15px}._2EOjIIerNaWDtWXH6QReYH ._-X_QxcmvJrdkTXV9YLv6 .RWP-jsIf2PlrH3G0bC2iy ._3uMUaH7hY6u4qmfhK4I14e._38wzq7GHoJhipOgONt3K03{display:flex;align-items:baseline;justify-content:space-between}._2EOjIIerNaWDtWXH6QReYH ._-X_QxcmvJrdkTXV9YLv6 .RWP-jsIf2PlrH3G0bC2iy ._3uMUaH7hY6u4qmfhK4I14e ._2GWbvIIOlNzqjFEow6uHpb{font-size:xx-large;line-height:85%;font-weight:bold;font-family:system-ui;word-break:break-word}._2EOjIIerNaWDtWXH6QReYH ._-X_QxcmvJrdkTXV9YLv6 .RWP-jsIf2PlrH3G0bC2iy ._3uMUaH7hY6u4qmfhK4I14e ._29z0XKbYgSv_mXHQ_xig6{font-size:x-large;font-weight:bold;color:#1976d2;padding-top:15px}._2EOjIIerNaWDtWXH6QReYH ._-X_QxcmvJrdkTXV9YLv6 .RWP-jsIf2PlrH3G0bC2iy ._3uMUaH7hY6u4qmfhK4I14e ._29z0XKbYgSv_mXHQ_xig6._38wzq7GHoJhipOgONt3K03{padding-top:0px}._2EOjIIerNaWDtWXH6QReYH ._-X_QxcmvJrdkTXV9YLv6 .RWP-jsIf2PlrH3G0bC2iy ._3uMUaH7hY6u4qmfhK4I14e ._29z0XKbYgSv_mXHQ_xig6:before{padding-right:3px;content:"$";color:#4caf50}._2EOjIIerNaWDtWXH6QReYH ._-X_QxcmvJrdkTXV9YLv6 .RWP-jsIf2PlrH3G0bC2iy ._1TkvMKyrP_locfrhtBCiP-{font-size:larger;font-weight:bold;font-family:monospace;color:#2f4f4f;padding-top:15px}._2EOjIIerNaWDtWXH6QReYH ._-X_QxcmvJrdkTXV9YLv6 .iB7WPzJSlkS6335qlxZpw{display:flex}._2EOjIIerNaWDtWXH6QReYH ._-X_QxcmvJrdkTXV9YLv6 .iB7WPzJSlkS6335qlxZpw._3xCuuCmvCyUpHXaYQId5ra{flex:0}._2EOjIIerNaWDtWXH6QReYH ._-X_QxcmvJrdkTXV9YLv6 .iB7WPzJSlkS6335qlxZpw._38wzq7GHoJhipOgONt3K03{justify-content:flex-end}._2EOjIIerNaWDtWXH6QReYH ._-X_QxcmvJrdkTXV9YLv6 .iB7WPzJSlkS6335qlxZpw._3Ra1rFilmqzOZI93ANAkhm{flex-direction:column;align-items:flex-end;justify-content:flex-start}._2EOjIIerNaWDtWXH6QReYH ._-X_QxcmvJrdkTXV9YLv6 .iB7WPzJSlkS6335qlxZpw ._2x6LrSR9fy7VLCel3une-G{flex:1;padding:15px;font-size:x-large;font-weight:bold;border:2px solid #115293;border-radius:15px;color:#fff;background-color:#1976d2;cursor:pointer}._2EOjIIerNaWDtWXH6QReYH ._-X_QxcmvJrdkTXV9YLv6 .iB7WPzJSlkS6335qlxZpw ._2x6LrSR9fy7VLCel3une-G._38wzq7GHoJhipOgONt3K03{flex:.5}._2EOjIIerNaWDtWXH6QReYH ._-X_QxcmvJrdkTXV9YLv6 .iB7WPzJSlkS6335qlxZpw ._2x6LrSR9fy7VLCel3une-G._3Ra1rFilmqzOZI93ANAkhm{flex:0;width:fit-content}._2EOjIIerNaWDtWXH6QReYH ._-X_QxcmvJrdkTXV9YLv6 .iB7WPzJSlkS6335qlxZpw ._2x6LrSR9fy7VLCel3une-G:hover{border-color:#388e3c;background-color:#4caf50;box-shadow:3px 3px 10px gray}',"",{version:3,sources:["webpack://./src/components/ResponsiveProductItemCard/styles.module.scss","webpack://./src/theme/_variables.scss"],names:[],mappings:"AAIA,yBACE,YAAA,CACA,kBAAA,CACA,UCMY,CDLZ,YCMa,CDLb,wBAAA,CACA,kBCIa,CDHb,qBCNY,CDOZ,iDACE,qBAAA,CAEF,+BACE,wBCVe,CDWf,4BCCY,CDGZ,0EACE,UAAA,CAEF,0EACE,SAAA,CAEF,0EACE,SAAA,CAGF,2EACE,UAAA,CAEA,kGACE,UAAA,CACA,kBCtBO,CDuBP,4BCpBO,CDyBb,gDACE,YAAA,CACA,MAAA,CACA,iBC/BW,CDgCX,wEACE,aAAA,CACA,gBCpCO,CDqCP,gBCnCS,CDqCX,wEACE,qBAAA,CAGF,uEACE,YAAA,CACA,MAAA,CACA,qBAAA,CACA,mBC7CS,CDgDP,wHACE,YAAA,CACA,oBAAA,CACA,6BAAA,CAGF,yHACE,kBAAA,CACA,eAAA,CACA,gBAAA,CACA,qBAAA,CACA,qBAAA,CAGF,wHACE,iBAAA,CACA,gBAAA,CACA,aC9EM,CD+EN,gBClEK,CDmEL,gJACE,eCtEC,CDwEH,+HACE,iBAAA,CACA,WAAA,CACA,aCpFI,CDwFV,gGACE,gBAAA,CACA,gBAAA,CACA,qBAAA,CACA,aCtFU,CDuFV,gBClFO,CDqFX,uEACE,YAAA,CACA,+FACE,MAAA,CAEF,+FACE,wBAAA,CAEF,+FACE,qBAAA,CACA,oBAAA,CACA,0BAAA,CAGF,gGACE,MAAA,CACA,YCrGO,CDsGP,iBAAA,CACA,gBAAA,CACA,wBAAA,CACA,kBCzGO,CD0GP,UCnHM,CDoHN,wBCxHQ,CDyHR,cAAA,CACA,wHACE,OAAA,CAEF,wHACE,MAAA,CACA,iBAAA,CAEF,sGACE,oBC/HW,CDgIX,wBCjIM,CDkIN,4BCnHM",sourcesContent:["@use '../../theme/variables';\n\n// styles\n\n.root {\n  display: flex;\n  flex-direction: row;\n  margin: variables.$space-small;\n  padding: variables.$space-medium;\n  border: 1px solid variables.$color-grey-light;\n  border-radius: variables.$space-medium;\n  background-color: variables.$color-white;\n  &.to-small {\n    flex-direction: column;\n  }\n  &:hover {\n    background-color: variables.$color-white-dark;\n    box-shadow: variables.$shadow-medium;\n  }\n\n  .imageContainer {\n    &.to-small {\n      width: 100%;\n    }\n    &.from-small-to-under-big {\n      width: 33%;\n    }\n    &.from-big {\n      width: 20%;\n    }\n\n    .imageLazyWrapper{\n      width: 100%;\n\n      .image {\n        width: 100%;\n        border-radius: variables.$space-medium;\n        box-shadow: variables.$shadow-light;\n      }\n    }\n  }\n\n  .infoContainer {\n    display: flex;\n    flex: 1;\n    padding-left: variables.$space-medium;\n    &.to-small {\n      display: block;\n      padding-left: variables.$space-zero;\n      padding-top: variables.$space-medium;\n    }\n    &.from-small-to-under-big {\n      flex-direction: column;\n    }\n\n    .infoDetails {\n      display: flex;\n      flex: 1;\n      flex-direction: column;\n      padding-bottom: variables.$space-medium;\n\n      .requiredDetails {\n        &.from-small-to-under-big {\n          display: flex;\n          align-items: baseline;\n          justify-content: space-between;\n        }\n\n        .itemTitle {\n          font-size: xx-large;\n          line-height: 85%;\n          font-weight: bold;\n          font-family: system-ui;\n          word-break: break-word;\n        }\n\n        .itemPrice {\n          font-size: x-large;\n          font-weight: bold;\n          color: variables.$color-primary;\n          padding-top: variables.$space-medium;\n          &.from-small-to-under-big {\n            padding-top: variables.$space-zero;\n          }\n          &:before {\n            padding-right: 3px;\n            content: \"$\";\n            color: variables.$color-success;\n          }\n        }\n      }\n      .itemDescription {\n        font-size: larger;\n        font-weight: bold;\n        font-family: monospace;\n        color: variables.$color-grey-dark;\n        padding-top: variables.$space-medium;\n      }\n    }\n    .buttonContainer {\n      display: flex;\n      &.to-small {\n        flex: 0;\n      }\n      &.from-small-to-under-big {\n        justify-content: flex-end;\n      }\n      &.from-big {\n        flex-direction: column;\n        align-items: flex-end;\n        justify-content: flex-start;\n      }\n\n      .button {\n        flex: 1;\n        padding: variables.$space-medium;\n        font-size: x-large;\n        font-weight: bold;\n        border: 2px solid variables.$color-primary-dark;\n        border-radius: variables.$space-medium;\n        color: variables.$color-white;\n        background-color: variables.$color-primary;\n        cursor: pointer;\n        &.from-small-to-under-big {\n          flex: 0.5;\n        }\n        &.from-big {\n          flex: 0;\n          width: fit-content;\n        }\n        &:hover {\n          border-color: variables.$color-success-dark;\n          background-color: variables.$color-success;\n          box-shadow: variables.$shadow-medium;\n        }\n      }\n    }\n  }\n}\n","// colors\n$color-primary: #1976d2;\n$color-primary-dark: #115293;\n$color-success: #4caf50;\n$color-success-dark: #388e3c;\n$color-white: white;\n$color-white-dark: floralwhite;\n$color-grey: grey;\n$color-grey-light: lightgrey;\n$color-grey-dark: darkslategrey;\n\n// spacing\n$space-zero: 0px;\n$space-small: 5px;\n$space-medium: 15px;\n\n// shadow\n$shadow-light: 0px 0px 10px $color-grey;\n$shadow-medium: 3px 3px 10px $color-grey;"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"_2EOjIIerNaWDtWXH6QReYH","to-small":"_3xCuuCmvCyUpHXaYQId5ra",imageContainer:"_1_BaPDryjT1Xffqk8VNrSA","from-small-to-under-big":"_38wzq7GHoJhipOgONt3K03","from-big":"_3Ra1rFilmqzOZI93ANAkhm",imageLazyWrapper:"_2HmckVAL8l-BGPvtSy233_",image:"Z2NZEyvETMa6WISZi_BeI",infoContainer:"_-X_QxcmvJrdkTXV9YLv6",infoDetails:"RWP-jsIf2PlrH3G0bC2iy",requiredDetails:"_3uMUaH7hY6u4qmfhK4I14e",itemTitle:"_2GWbvIIOlNzqjFEow6uHpb",itemPrice:"_29z0XKbYgSv_mXHQ_xig6",itemDescription:"_1TkvMKyrP_locfrhtBCiP-",buttonContainer:"iB7WPzJSlkS6335qlxZpw",button:"_2x6LrSR9fy7VLCel3une-G"},__webpack_exports__.a=___CSS_LOADER_EXPORT___},292:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(212),_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(213),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);___CSS_LOADER_EXPORT___.push([module.i,"._10N3CDP1xYmSbqjEdVMIiL{opacity:0}.ygXVRzQEHjWy699zONNyg{animation:_2OIiBGIjjj8xLCGJ7_k4z3 200ms ease-out forwards}._25tmbRGU1SwrP_d_vvj5z8{animation:_3yWA5NPhl2pDDAIaXkxR_B 100ms ease-out forwards}@keyframes _2OIiBGIjjj8xLCGJ7_k4z3{0%{opacity:0}100%{opacity:1}}@keyframes _3yWA5NPhl2pDDAIaXkxR_B{0%{opacity:1}100%{opacity:0}}","",{version:3,sources:["webpack://./src/theme/fadeAnimation.module.scss"],names:[],mappings:"AAAA,yBACE,SAAA,CAGF,uBACE,yDAAA,CAGF,yBACE,yDAAA,CAGF,mCACE,GACE,SAAA,CAEF,KACE,SAAA,CAAA,CAIJ,mCACE,GACE,SAAA,CAEF,KACE,SAAA,CAAA",sourcesContent:[".hidden {\n  opacity: 0;\n}\n\n.fadeIn {\n  animation: fadein 200ms ease-out forwards;\n}\n\n.fadeOut {\n  animation: fadeout 100ms ease-out forwards;\n}\n\n@keyframes fadein {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeout {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={hidden:"_10N3CDP1xYmSbqjEdVMIiL",fadeIn:"ygXVRzQEHjWy699zONNyg",fadein:"_2OIiBGIjjj8xLCGJ7_k4z3",fadeOut:"_25tmbRGU1SwrP_d_vvj5z8",fadeout:"_3yWA5NPhl2pDDAIaXkxR_B"},__webpack_exports__.a=___CSS_LOADER_EXPORT___},482:function(module,exports,__webpack_require__){__webpack_require__(483),__webpack_require__(643),__webpack_require__(644),__webpack_require__(851),__webpack_require__(852),__webpack_require__(858),__webpack_require__(859),__webpack_require__(856),__webpack_require__(853),__webpack_require__(860),__webpack_require__(854),__webpack_require__(855),__webpack_require__(861),module.exports=__webpack_require__(842)},550:function(module,exports){},644:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(343)},842:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(343).configure)([__webpack_require__(843),__webpack_require__(844)],module,!1)}).call(this,__webpack_require__(193)(module))},843:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=843},844:function(module,exports,__webpack_require__){var map={"./components/ResponsiveProductItemCard/stories/index.stories.tsx":857,"./components/ResponsiveProductItemCard/stories/view.stories.tsx":850};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=844},850:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Small",(function(){return Small})),__webpack_require__.d(__webpack_exports__,"Medium",(function(){return Medium})),__webpack_require__.d(__webpack_exports__,"Large",(function(){return Large}));__webpack_require__(16),__webpack_require__(432);var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(99),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),_view__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(163),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(39);__webpack_exports__.default={title:"Components/Product Item Card/Designs",component:_view__WEBPACK_IMPORTED_MODULE_4__.a};var Template=function Template(args){var cardRef=Object(react__WEBPACK_IMPORTED_MODULE_3__.createRef)();return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_view__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({},args,{cardRef:cardRef,animationClass:""}))};Template.displayName="Template";var Small=Template.bind({});Small.args={productItem:{id:1,title:"The best laptop",imgUrl:"https://www.junglescout.com/wp-content/uploads/2020/06/homepage-laptop-floating-mockup.png",price:123.56,description:"The best laptop in the world. I mean, if you don't buy it, you don't deserve to live. What are you waiting for?"},onSelect:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("Selected"),action:"See details",sizeClass:"to-small"};var Medium=Template.bind({});Medium.args=Object.assign({},Small.args,{sizeClass:"from-small-to-under-big"});var Large=Template.bind({});Large.args=Object.assign({},Small.args,{sizeClass:"from-big"}),Small.parameters=Object.assign({storySource:{source:"(args) => {\n  const cardRef = createRef<HTMLDivElement>();\n\n  return (\n    <ResponsiveProductItemCardView\n      {...args}\n      cardRef={cardRef}\n      animationClass={''}\n    />\n  );\n}"}},Small.parameters),Medium.parameters=Object.assign({storySource:{source:"(args) => {\n  const cardRef = createRef<HTMLDivElement>();\n\n  return (\n    <ResponsiveProductItemCardView\n      {...args}\n      cardRef={cardRef}\n      animationClass={''}\n    />\n  );\n}"}},Medium.parameters),Large.parameters=Object.assign({storySource:{source:"(args) => {\n  const cardRef = createRef<HTMLDivElement>();\n\n  return (\n    <ResponsiveProductItemCardView\n      {...args}\n      cardRef={cardRef}\n      animationClass={''}\n    />\n  );\n}"}},Large.parameters)},857:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Responsive",(function(){return Responsive}));__webpack_require__(16),__webpack_require__(432);var esm=__webpack_require__(99),react=(__webpack_require__(433),__webpack_require__(5),__webpack_require__(8),__webpack_require__(7),__webpack_require__(17),__webpack_require__(14),__webpack_require__(11),__webpack_require__(13),__webpack_require__(12),__webpack_require__(6),__webpack_require__(25),__webpack_require__(0)),use_responsive_class_esm=__webpack_require__(462);__webpack_require__(845);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var view=__webpack_require__(163),jsx_runtime=(__webpack_require__(434),__webpack_require__(39));function ResponsiveProductItemCard_slicedToArray(arr,i){return function ResponsiveProductItemCard_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function ResponsiveProductItemCard_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function ResponsiveProductItemCard_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return ResponsiveProductItemCard_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ResponsiveProductItemCard_arrayLikeToArray(o,minLen)}(arr,i)||function ResponsiveProductItemCard_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ResponsiveProductItemCard_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var ResponsiveProductItemCard_ResponsiveProductItemCard=function ResponsiveProductItemCard(props){var cardRef=Object(react.createRef)(),_useResponsiveClass2=ResponsiveProductItemCard_slicedToArray(Object(use_responsive_class_esm.a)(cardRef),1),_useFadeOnSizeChange2=ResponsiveProductItemCard_slicedToArray(function useFadeOnSizeChange(newSizeClase){var _useState2=_slicedToArray(Object(react.useState)(""),2),sizeClass=_useState2[0],setSizeClass=_useState2[1],_useState4=_slicedToArray(Object(react.useState)("hidden"),2),animationClass=_useState4[0],setAnimationClass=_useState4[1];return Object(react.useEffect)((function(){setAnimationClass("fadeOut");var timeout=setTimeout((function(){setSizeClass(newSizeClase),setAnimationClass("fadeIn")}),100);return function(){clearTimeout(timeout)}}),[newSizeClase]),[sizeClass,animationClass]}(_useResponsiveClass2[0]),2),sizeClass=_useFadeOnSizeChange2[0],animationClass=_useFadeOnSizeChange2[1];return Object(jsx_runtime.jsx)(view.a,Object.assign({},props,{cardRef:cardRef,sizeClass:sizeClass,animationClass:animationClass}))};ResponsiveProductItemCard_ResponsiveProductItemCard.displayName="ResponsiveProductItemCard";var components_ResponsiveProductItemCard=ResponsiveProductItemCard_ResponsiveProductItemCard;try{ResponsiveProductItemCard_ResponsiveProductItemCard.displayName="ResponsiveProductItemCard",ResponsiveProductItemCard_ResponsiveProductItemCard.__docgenInfo={description:"",displayName:"ResponsiveProductItemCard",props:{productItem:{defaultValue:null,description:"",name:"productItem",required:!0,type:{name:"ProductItem"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(id: number) => void"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ResponsiveProductItemCard/index.tsx#ResponsiveProductItemCard"]={docgenInfo:ResponsiveProductItemCard_ResponsiveProductItemCard.__docgenInfo,name:"ResponsiveProductItemCard",path:"src/components/ResponsiveProductItemCard/index.tsx#ResponsiveProductItemCard"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Components/Product Item Card",component:components_ResponsiveProductItemCard};var index_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(components_ResponsiveProductItemCard,Object.assign({},args))};index_stories_Template.displayName="Template";var Responsive=index_stories_Template.bind({});Responsive.args={productItem:{id:1,title:"The best laptop",imgUrl:"https://www.junglescout.com/wp-content/uploads/2020/06/homepage-laptop-floating-mockup.png",price:123.56,description:"The best laptop in the world. I mean, if you don't buy it, you don't deserve to live. What are you waiting for?"},onSelect:Object(esm.action)("Selected"),action:"See details"},Responsive.parameters=Object.assign({storySource:{source:"(args) => {\n  return <ResponsiveProductItemCard {...args} />;\n}"}},Responsive.parameters)},861:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(22),__webpack_require__(5),__webpack_require__(49),__webpack_require__(423),__webpack_require__(839),__webpack_require__(46),__webpack_require__(840),__webpack_require__(841),__webpack_require__(422);var client_api=__webpack_require__(868),esm=__webpack_require__(4),parameters={actions:{argTypesRegex:"^on.*"}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[482,2,3]]]);