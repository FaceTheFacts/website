/*! For license information please see 225.4c715b74.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkface_the_facts_landingpage=self.webpackChunkface_the_facts_landingpage||[]).push([[225],{7225:function(e,n,t){t.r(n),t.d(n,{startFocusVisible:function(){return r}});var o="ion-focused",s=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=function(e){var n=[],t=!0,r=e?e.shadowRoot:document,c=e||document.body,i=function(e){n.forEach((function(e){return e.classList.remove(o)})),e.forEach((function(e){return e.classList.add(o)})),n=e},a=function(){t=!1,i([])},u=function(e){(t=s.includes(e.key))||i([])},d=function(e){if(t&&void 0!==e.composedPath){var n=e.composedPath().filter((function(e){return!!e.classList&&e.classList.contains("ion-focusable")}));i(n)}},f=function(){r.activeElement===c&&i([])};r.addEventListener("keydown",u),r.addEventListener("focusin",d),r.addEventListener("focusout",f),r.addEventListener("touchstart",a,{passive:!0}),r.addEventListener("mousedown",a);return{destroy:function(){r.removeEventListener("keydown",u),r.removeEventListener("focusin",d),r.removeEventListener("focusout",f),r.removeEventListener("touchstart",a),r.removeEventListener("mousedown",a)},setFocus:i}}}}]);
//# sourceMappingURL=225.4c715b74.chunk.js.map