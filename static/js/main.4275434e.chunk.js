(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],[,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var J_code_2020_react_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_Screen_Screen__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_Keypad_Keypad__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6);function Calculator(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(J_code_2020_react_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),equation=_useState2[0],setEquation=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)("0"),_useState4=Object(J_code_2020_react_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),result=_useState4[0],setResult=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState6=Object(J_code_2020_react_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),firstValue=_useState6[0],setFirstValue=_useState6[1],_useState7=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState8=Object(J_code_2020_react_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState7,2),operator=_useState8[0],setOperator=_useState8[1],_useState9=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState10=Object(J_code_2020_react_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState9,2),secondValue=_useState10[0],setSecondValue=_useState10[1],_useState11=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState12=Object(J_code_2020_react_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState11,2),previousKey=_useState12[0],setPreviousKey=_useState12[1],onButtonPress=function onButtonPress(e){var equationTemp=equation,pressedButton=e.target.innerHTML,key=e.target,action=e.target.getAttribute("data-action"),keyContent=key.textContent,calculator=document.querySelector(".calculator");if("C"===pressedButton)return setPreviousKey("clear"),clear();if(action)if("decimal"===action){var isDecimal="."===equationTemp.charAt(equationTemp.length-1);isDecimal?"operator"===previousKey&&(equationTemp+="0."):equationTemp+=""===equationTemp?"0.":".",setPreviousKey("decimal")}else if("add"===action||"subtract"===action||"multiply"===action||"divide"===action||"percentage"===action)"operator"!==previousKey?equationTemp+=" "+pressedButton+" ":(equationTemp=equationTemp.slice(0,-3)+" "+pressedButton+" ",console.log("equationTemp: ",equationTemp)),setPreviousKey("operator");else if("calculate"===action){try{var evalResult=eval(equationTemp),_result=Number.isInteger(evalResult)?evalResult:evalResult.toFixed(2);setResult(_result)}catch(error){setResult("ERROR")}setPreviousKey("calculate")}else equationTemp=equationTemp.trim(),equationTemp=equationTemp.substr(0,equationTemp.length-1);else equationTemp+=pressedButton,setPreviousKey("number");setEquation(equationTemp)},calculate=function(e,t,a){var _="";return"add"===t?_=parseFloat(e)+parseFloat(a):"subtract"===t?_=parseFloat(e)-parseFloat(a):"multiply"===t?_=parseFloat(e)*parseFloat(a):"divide"===t&&(_=parseFloat(e)/parseFloat(a)),_},clear=function(){setResult("0"),setFirstValue(""),setOperator(""),setSecondValue(""),setPreviousKey("clear"),setEquation("")};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main",{className:"calculator"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Screen_Screen__WEBPACK_IMPORTED_MODULE_2__.a,{equation:equation,result:result}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Keypad_Keypad__WEBPACK_IMPORTED_MODULE_3__.a,{onButtonPress:onButtonPress}))}__webpack_exports__.a=Calculator},function(e,t,a){"use strict";var _=a(0),n=a.n(_);var r=function(e){return n.a.createElement("div",{className:"result-screen"},e.children)};var o=function(e){return n.a.createElement("div",{className:"computation-screen"},e.children)};t.a=function(e){return n.a.createElement("section",{className:"screen"},n.a.createElement(r,null,e.result),n.a.createElement(o,null,e.equation))}},function(e,t,a){"use strict";var _=a(0),n=a.n(_);var r=function(e){return n.a.createElement("div",{className:"keypad__row"},e.children)};var o=function(e){var t=["btn"];return"undefined"!==typeof e&&"undefined"!==typeof e.type&&t.push("btn--"+e.type),n.a.createElement("button",{className:t.join(" "),onClick:e.onButtonPress,"data-action":e.action},e.children)};t.a=function(e){return n.a.createElement("section",{className:"keypad"},n.a.createElement(r,null,n.a.createElement(o,{onButtonPress:e.onButtonPress,action:"clear"},"C"),n.a.createElement(o,{onButtonPress:e.onButtonPress,action:"delete"},"\u2190"),n.a.createElement(o,{onButtonPress:e.onButtonPress,action:"percentage"},"%"),n.a.createElement(o,{onButtonPress:e.onButtonPress,action:"divide"},"/")),n.a.createElement(r,null,n.a.createElement(o,{onButtonPress:e.onButtonPress},"9"),n.a.createElement(o,{onButtonPress:e.onButtonPress},"8"),n.a.createElement(o,{onButtonPress:e.onButtonPress},"7"),n.a.createElement(o,{onButtonPress:e.onButtonPress,action:"multiply"},"*")),n.a.createElement(r,null,n.a.createElement(o,{onButtonPress:e.onButtonPress},"6"),n.a.createElement(o,{onButtonPress:e.onButtonPress},"5"),n.a.createElement(o,{onButtonPress:e.onButtonPress},"4"),n.a.createElement(o,{onButtonPress:e.onButtonPress,action:"subtract"},"-")),n.a.createElement(r,null,n.a.createElement(o,{onButtonPress:e.onButtonPress},"3"),n.a.createElement(o,{onButtonPress:e.onButtonPress},"2"),n.a.createElement(o,{onButtonPress:e.onButtonPress},"1"),n.a.createElement(o,{onButtonPress:e.onButtonPress,action:"add"},"+")),n.a.createElement(r,null,n.a.createElement(o,{onButtonPress:e.onButtonPress},"0"),n.a.createElement(o,{onButtonPress:e.onButtonPress,action:"decimal"},"."),n.a.createElement(o,{onButtonPress:e.onButtonPress,type:"large",action:"calculate"},"=")))}},function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var _=a(0),n=a.n(_),r=a(3),o=a.n(r),s=(a(12),a(13),a(4));var u=function(){return n.a.createElement("div",{className:"calculator-container"},n.a.createElement(s.a,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.4275434e.chunk.js.map