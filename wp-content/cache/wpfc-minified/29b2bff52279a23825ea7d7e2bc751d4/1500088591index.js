!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand (f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});
jQuery.noConflict();
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr(props, pass) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);
jQuery(function(){
jQuery('.rp_wcdpd_product_page_modal_link span').click(function(){
if(!jQuery('#rp_wcdpd_modal_overlay').length){
jQuery('body').append('<div id="rp_wcdpd_modal_overlay" class="rp_wcdpd_modal_overlay"></div>');
}
jQuery('#rp_wcdpd_modal_overlay').click(function(){
jQuery('#rp_wcdpd_modal_overlay').fadeOut();
jQuery('.rp_wcdpd_modal').fadeOut();
});
var pricing_table=jQuery('.rp_wcdpd_modal');
jQuery('#rp_wcdpd_modal_overlay').fadeIn();
pricing_table.css('top', '50%').css('left', '50%').css('margin-top', -pricing_table.outerHeight()/2).css('margin-left', -pricing_table.outerWidth()/2).fadeIn();
return false;
});
function rp_wcdpd_switch_variable_pricing_tables(element_id){
jQuery('.rp_wcdpd_pricing_table_variation').hide();
jQuery(element_id).show();
}
if(jQuery('.rp_wcdpd_pricing_table_variation').length){
jQuery('input:hidden[name="variation_id"]').each(function(){
rp_wcdpd_switch_variable_pricing_tables('#rp_wcdpd_pricing_table_variation_' + jQuery(this).val());
jQuery(this).change(function(){
rp_wcdpd_switch_variable_pricing_tables('#rp_wcdpd_pricing_table_variation_' + jQuery(this).val());
});
});
}});
(function (factory){
"use strict";
if(typeof define==='function'&&define.amd){
define(['jquery'], factory);
}
else if(typeof exports=="object"&&typeof module=="object"){
module.exports=factory;
}else{
factory(jQuery);
}})(function($, undefined){
"use strict";
var defaultOpts={
beforeShow: noop,
move: noop,
change: noop,
show: noop,
hide: noop,
color: false,
flat: false,
showInput: false,
allowEmpty: false,
showButtons: true,
clickoutFiresChange: true,
showInitial: false,
showPalette: false,
showPaletteOnly: false,
hideAfterPaletteSelect: false,
togglePaletteOnly: false,
showSelectionPalette: true,
localStorageKey: false,
appendTo: "body",
maxSelectionSize: 7,
cancelText: "cancel",
chooseText: "choose",
togglePaletteMoreText: "more",
togglePaletteLessText: "less",
clearText: "Clear Color Selection",
noColorSelectedText: "No Color Selected",
preferredFormat: false,
className: "",
containerClassName: "",
replacerClassName: "",
showAlpha: false,
theme: "sp-light",
palette: [["#ffffff", "#000000", "#ff0000", "#ff8000", "#ffff00", "#008000", "#0000ff", "#4b0082", "#9400d3"]],
selectionPalette: [],
disabled: false,
offset: null
},
spectrums=[],
IE = !!/msie/i.exec(window.navigator.userAgent),
rgbaSupport=(function(){
function contains(str, substr){
return !!~('' + str).indexOf(substr);
}
var elem=document.createElement('div');
var style=elem.style;
style.cssText='background-color:rgba(0,0,0,.5)';
return contains(style.backgroundColor, 'rgba')||contains(style.backgroundColor, 'hsla');
})(),
replaceInput=[
"<div class='sp-replacer'>",
"<div class='sp-preview'><div class='sp-preview-inner'></div></div>",
"<div class='sp-dd'>&#9660;</div>",
"</div>"
].join(''),
markup=(function (){
var gradientFix="";
if(IE){
for (var i=1; i <=6; i++){
gradientFix +="<div class='sp-" + i + "'></div>";
}}
return [
"<div class='sp-container sp-hidden'>",
"<div class='sp-palette-container'>",
"<div class='sp-palette sp-thumb sp-cf'></div>",
"<div class='sp-palette-button-container sp-cf'>",
"<button type='button' class='sp-palette-toggle'></button>",
"</div>",
"</div>",
"<div class='sp-picker-container'>",
"<div class='sp-top sp-cf'>",
"<div class='sp-fill'></div>",
"<div class='sp-top-inner'>",
"<div class='sp-color'>",
"<div class='sp-sat'>",
"<div class='sp-val'>",
"<div class='sp-dragger'></div>",
"</div>",
"</div>",
"</div>",
"<div class='sp-clear sp-clear-display'>",
"</div>",
"<div class='sp-hue'>",
"<div class='sp-slider'></div>",
gradientFix,
"</div>",
"</div>",
"<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>",
"</div>",
"<div class='sp-input-container sp-cf'>",
"<input class='sp-input' type='text' spellcheck='false'  />",
"</div>",
"<div class='sp-initial sp-thumb sp-cf'></div>",
"<div class='sp-button-container sp-cf'>",
"<a class='sp-cancel' href='#'></a>",
"<button type='button' class='sp-choose'></button>",
"</div>",
"</div>",
"</div>"
].join("");
})();
function paletteTemplate (p, color, className, opts){
var html=[];
for (var i=0; i < p.length; i++){
var current=p[i];
if(current){
var tiny=tinycolor(current);
var c=tiny.toHsl().l < 0.5 ? "sp-thumb-el sp-thumb-dark":"sp-thumb-el sp-thumb-light";
c +=(tinycolor.equals(color, current)) ? " sp-thumb-active":"";
var formattedString=tiny.toString(opts.preferredFormat||"rgb");
var swatchStyle=rgbaSupport ? ("background-color:" + tiny.toRgbString()):"filter:" + tiny.toFilter();
html.push('<span title="' + formattedString + '" data-color="' + tiny.toRgbString() + '" class="' + c + '"><span class="sp-thumb-inner" style="' + swatchStyle + ';" /></span>');
}else{
var cls='sp-clear-display';
html.push($('<div />')
.append($('<span data-color="" style="background-color:transparent;" class="' + cls + '"></span>')
.attr('title', opts.noColorSelectedText)
)
.html()
);
}}
return "<div class='sp-cf " + className + "'>" + html.join('') + "</div>";
}
function hideAll(){
for (var i=0; i < spectrums.length; i++){
if(spectrums[i]){
spectrums[i].hide();
}}
}
function instanceOptions(o, callbackContext){
var opts=$.extend({}, defaultOpts, o);
opts.callbacks={
'move': bind(opts.move, callbackContext),
'change': bind(opts.change, callbackContext),
'show': bind(opts.show, callbackContext),
'hide': bind(opts.hide, callbackContext),
'beforeShow': bind(opts.beforeShow, callbackContext)
};
return opts;
}
function spectrum(element, o){
var opts=instanceOptions(o, element),
flat=opts.flat,
showSelectionPalette=opts.showSelectionPalette,
localStorageKey=opts.localStorageKey,
theme=opts.theme,
callbacks=opts.callbacks,
resize=throttle(reflow, 10),
visible=false,
isDragging=false,
dragWidth=0,
dragHeight=0,
dragHelperHeight=0,
slideHeight=0,
slideWidth=0,
alphaWidth=0,
alphaSlideHelperWidth=0,
slideHelperHeight=0,
currentHue=0,
currentSaturation=0,
currentValue=0,
currentAlpha=1,
palette=[],
paletteArray=[],
paletteLookup={},
selectionPalette=opts.selectionPalette.slice(0),
maxSelectionSize=opts.maxSelectionSize,
draggingClass="sp-dragging",
shiftMovementDirection=null;
var doc=element.ownerDocument,
body=doc.body,
boundElement=$(element),
disabled=false,
container=$(markup, doc).addClass(theme),
pickerContainer=container.find(".sp-picker-container"),
dragger=container.find(".sp-color"),
dragHelper=container.find(".sp-dragger"),
slider=container.find(".sp-hue"),
slideHelper=container.find(".sp-slider"),
alphaSliderInner=container.find(".sp-alpha-inner"),
alphaSlider=container.find(".sp-alpha"),
alphaSlideHelper=container.find(".sp-alpha-handle"),
textInput=container.find(".sp-input"),
paletteContainer=container.find(".sp-palette"),
initialColorContainer=container.find(".sp-initial"),
cancelButton=container.find(".sp-cancel"),
clearButton=container.find(".sp-clear"),
chooseButton=container.find(".sp-choose"),
toggleButton=container.find(".sp-palette-toggle"),
isInput=boundElement.is("input"),
isInputTypeColor=isInput&&boundElement.attr("type")==="color"&&inputTypeColorSupport(),
shouldReplace=isInput&&!flat,
replacer=(shouldReplace) ? $(replaceInput).addClass(theme).addClass(opts.className).addClass(opts.replacerClassName):$([]),
offsetElement=(shouldReplace) ? replacer:boundElement,
previewElement=replacer.find(".sp-preview-inner"),
initialColor=opts.color||(isInput&&boundElement.val()),
colorOnShow=false,
preferredFormat=opts.preferredFormat,
currentPreferredFormat=preferredFormat,
clickoutFiresChange = !opts.showButtons||opts.clickoutFiresChange,
isEmpty = !initialColor,
allowEmpty=opts.allowEmpty&&!isInputTypeColor;
function applyOptions(){
if(opts.showPaletteOnly){
opts.showPalette=true;
}
toggleButton.text(opts.showPaletteOnly ? opts.togglePaletteMoreText:opts.togglePaletteLessText);
if(opts.palette){
palette=opts.palette.slice(0);
paletteArray=$.isArray(palette[0]) ? palette:[palette];
paletteLookup={};
for (var i=0; i < paletteArray.length; i++){
for (var j=0; j < paletteArray[i].length; j++){
var rgb=tinycolor(paletteArray[i][j]).toRgbString();
paletteLookup[rgb]=true;
}}
}
container.toggleClass("sp-flat", flat);
container.toggleClass("sp-input-disabled", !opts.showInput);
container.toggleClass("sp-alpha-enabled", opts.showAlpha);
container.toggleClass("sp-clear-enabled", allowEmpty);
container.toggleClass("sp-buttons-disabled", !opts.showButtons);
container.toggleClass("sp-palette-buttons-disabled", !opts.togglePaletteOnly);
container.toggleClass("sp-palette-disabled", !opts.showPalette);
container.toggleClass("sp-palette-only", opts.showPaletteOnly);
container.toggleClass("sp-initial-disabled", !opts.showInitial);
container.addClass(opts.className).addClass(opts.containerClassName);
reflow();
}
function initialize(){
if(IE){
container.find("*:not(input)").attr("unselectable", "on");
}
applyOptions();
if(shouldReplace){
boundElement.after(replacer).hide();
}
if(!allowEmpty){
clearButton.hide();
}
if(flat){
boundElement.after(container).hide();
}else{
var appendTo=opts.appendTo==="parent" ? boundElement.parent():$(opts.appendTo);
if(appendTo.length!==1){
appendTo=$("body");
}
appendTo.append(container);
}
updateSelectionPaletteFromStorage();
offsetElement.bind("click.spectrum touchstart.spectrum", function (e){
if(!disabled){
toggle();
}
e.stopPropagation();
if(!$(e.target).is("input")){
e.preventDefault();
}});
if(boundElement.is(":disabled")||(opts.disabled===true)){
disable();
}
container.click(stopPropagation);
textInput.change(setFromTextInput);
textInput.bind("paste", function (){
setTimeout(setFromTextInput, 1);
});
textInput.keydown(function (e){ if(e.keyCode==13){ setFromTextInput(); }});
cancelButton.text(opts.cancelText);
cancelButton.bind("click.spectrum", function (e){
e.stopPropagation();
e.preventDefault();
revert();
hide();
});
clearButton.attr("title", opts.clearText);
clearButton.bind("click.spectrum", function (e){
e.stopPropagation();
e.preventDefault();
isEmpty=true;
move();
if(flat){
updateOriginalInput(true);
}});
chooseButton.text(opts.chooseText);
chooseButton.bind("click.spectrum", function (e){
e.stopPropagation();
e.preventDefault();
if(IE&&textInput.is(":focus")){
textInput.trigger('change');
}
if(isValid()){
updateOriginalInput(true);
hide();
}});
toggleButton.text(opts.showPaletteOnly ? opts.togglePaletteMoreText:opts.togglePaletteLessText);
toggleButton.bind("click.spectrum", function (e){
e.stopPropagation();
e.preventDefault();
opts.showPaletteOnly = !opts.showPaletteOnly;
if(!opts.showPaletteOnly&&!flat){
container.css('left', '-=' + (pickerContainer.outerWidth(true) + 5));
}
applyOptions();
});
draggable(alphaSlider, function (dragX, dragY, e){
currentAlpha=(dragX / alphaWidth);
isEmpty=false;
if(e.shiftKey){
currentAlpha=Math.round(currentAlpha * 10) / 10;
}
move();
}, dragStart, dragStop);
draggable(slider, function (dragX, dragY){
currentHue=parseFloat(dragY / slideHeight);
isEmpty=false;
if(!opts.showAlpha){
currentAlpha=1;
}
move();
}, dragStart, dragStop);
draggable(dragger, function (dragX, dragY, e){
if(!e.shiftKey){
shiftMovementDirection=null;
}
else if(!shiftMovementDirection){
var oldDragX=currentSaturation * dragWidth;
var oldDragY=dragHeight - (currentValue * dragHeight);
var furtherFromX=Math.abs(dragX - oldDragX) > Math.abs(dragY - oldDragY);
shiftMovementDirection=furtherFromX ? "x":"y";
}
var setSaturation = !shiftMovementDirection||shiftMovementDirection==="x";
var setValue = !shiftMovementDirection||shiftMovementDirection==="y";
if(setSaturation){
currentSaturation=parseFloat(dragX / dragWidth);
}
if(setValue){
currentValue=parseFloat((dragHeight - dragY) / dragHeight);
}
isEmpty=false;
if(!opts.showAlpha){
currentAlpha=1;
}
move();
}, dragStart, dragStop);
if(!!initialColor){
set(initialColor);
updateUI();
currentPreferredFormat=preferredFormat||tinycolor(initialColor).format;
addColorToSelectionPalette(initialColor);
}else{
updateUI();
}
if(flat){
show();
}
function paletteElementClick(e){
if(e.data&&e.data.ignore){
set($(e.target).closest(".sp-thumb-el").data("color"));
move();
}else{
set($(e.target).closest(".sp-thumb-el").data("color"));
move();
updateOriginalInput(true);
if(opts.hideAfterPaletteSelect){
hide();
}}
return false;
}
var paletteEvent=IE ? "mousedown.spectrum":"click.spectrum touchstart.spectrum";
paletteContainer.delegate(".sp-thumb-el", paletteEvent, paletteElementClick);
initialColorContainer.delegate(".sp-thumb-el:nth-child(1)", paletteEvent, { ignore: true }, paletteElementClick);
}
function updateSelectionPaletteFromStorage(){
if(localStorageKey&&window.localStorage){
try {
var oldPalette=window.localStorage[localStorageKey].split(",#");
if(oldPalette.length > 1){
delete window.localStorage[localStorageKey];
$.each(oldPalette, function(i, c){
addColorToSelectionPalette(c);
});
}}
catch(e){ }
try {
selectionPalette=window.localStorage[localStorageKey].split(";");
}
catch (e){ }}
}
function addColorToSelectionPalette(color){
if(showSelectionPalette){
var rgb=tinycolor(color).toRgbString();
if(!paletteLookup[rgb]&&$.inArray(rgb, selectionPalette)===-1){
selectionPalette.push(rgb);
while(selectionPalette.length > maxSelectionSize){
selectionPalette.shift();
}}
if(localStorageKey&&window.localStorage){
try {
window.localStorage[localStorageKey]=selectionPalette.join(";");
}
catch(e){ }}
}}
function getUniqueSelectionPalette(){
var unique=[];
if(opts.showPalette){
for (var i=0; i < selectionPalette.length; i++){
var rgb=tinycolor(selectionPalette[i]).toRgbString();
if(!paletteLookup[rgb]){
unique.push(selectionPalette[i]);
}}
}
return unique.reverse().slice(0, opts.maxSelectionSize);
}
function drawPalette(){
var currentColor=get();
var html=$.map(paletteArray, function (palette, i){
return paletteTemplate(palette, currentColor, "sp-palette-row sp-palette-row-" + i, opts);
});
updateSelectionPaletteFromStorage();
if(selectionPalette){
html.push(paletteTemplate(getUniqueSelectionPalette(), currentColor, "sp-palette-row sp-palette-row-selection", opts));
}
paletteContainer.html(html.join(""));
}
function drawInitial(){
if(opts.showInitial){
var initial=colorOnShow;
var current=get();
initialColorContainer.html(paletteTemplate([initial, current], current, "sp-palette-row-initial", opts));
}}
function dragStart(){
if(dragHeight <=0||dragWidth <=0||slideHeight <=0){
reflow();
}
isDragging=true;
container.addClass(draggingClass);
shiftMovementDirection=null;
boundElement.trigger('dragstart.spectrum', [ get() ]);
}
function dragStop(){
isDragging=false;
container.removeClass(draggingClass);
boundElement.trigger('dragstop.spectrum', [ get() ]);
}
function setFromTextInput(){
var value=textInput.val();
if((value===null||value==="")&&allowEmpty){
set(null);
updateOriginalInput(true);
}else{
var tiny=tinycolor(value);
if(tiny.isValid()){
set(tiny);
updateOriginalInput(true);
}else{
textInput.addClass("sp-validation-error");
}}
}
function toggle(){
if(visible){
hide();
}else{
show();
}}
function show(){
var event=$.Event('beforeShow.spectrum');
if(visible){
reflow();
return;
}
boundElement.trigger(event, [ get() ]);
if(callbacks.beforeShow(get())===false||event.isDefaultPrevented()){
return;
}
hideAll();
visible=true;
$(doc).bind("keydown.spectrum", onkeydown);
$(doc).bind("click.spectrum", clickout);
$(window).bind("resize.spectrum", resize);
replacer.addClass("sp-active");
container.removeClass("sp-hidden");
reflow();
updateUI();
colorOnShow=get();
drawInitial();
callbacks.show(colorOnShow);
boundElement.trigger('show.spectrum', [ colorOnShow ]);
}
function onkeydown(e){
if(e.keyCode===27){
hide();
}}
function clickout(e){
if(e.button==2){ return; }
if(isDragging){ return; }
if(clickoutFiresChange){
updateOriginalInput(true);
}else{
revert();
}
hide();
}
function hide(){
if(!visible||flat){ return; }
visible=false;
$(doc).unbind("keydown.spectrum", onkeydown);
$(doc).unbind("click.spectrum", clickout);
$(window).unbind("resize.spectrum", resize);
replacer.removeClass("sp-active");
container.addClass("sp-hidden");
callbacks.hide(get());
boundElement.trigger('hide.spectrum', [ get() ]);
}
function revert(){
set(colorOnShow, true);
}
function set(color, ignoreFormatChange){
if(tinycolor.equals(color, get())){
updateUI();
return;
}
var newColor, newHsv;
if(!color&&allowEmpty){
isEmpty=true;
}else{
isEmpty=false;
newColor=tinycolor(color);
newHsv=newColor.toHsv();
currentHue=(newHsv.h % 360) / 360;
currentSaturation=newHsv.s;
currentValue=newHsv.v;
currentAlpha=newHsv.a;
}
updateUI();
if(newColor&&newColor.isValid()&&!ignoreFormatChange){
currentPreferredFormat=preferredFormat||newColor.getFormat();
}}
function get(opts){
opts=opts||{ };
if(allowEmpty&&isEmpty){
return null;
}
return tinycolor.fromRatio({
h: currentHue,
s: currentSaturation,
v: currentValue,
a: Math.round(currentAlpha * 100) / 100
}, { format: opts.format||currentPreferredFormat });
}
function isValid(){
return !textInput.hasClass("sp-validation-error");
}
function move(){
updateUI();
callbacks.move(get());
boundElement.trigger('move.spectrum', [ get() ]);
}
function updateUI(){
textInput.removeClass("sp-validation-error");
updateHelperLocations();
var flatColor=tinycolor.fromRatio({ h: currentHue, s: 1, v: 1 });
dragger.css("background-color", flatColor.toHexString());
var format=currentPreferredFormat;
if(currentAlpha < 1&&!(currentAlpha===0&&format==="name")){
if(format==="hex"||format==="hex3"||format==="hex6"||format==="name"){
format="rgb";
}}
var realColor=get({ format: format }),
displayColor='';
previewElement.removeClass("sp-clear-display");
previewElement.css('background-color', 'transparent');
if(!realColor&&allowEmpty){
previewElement.addClass("sp-clear-display");
}else{
var realHex=realColor.toHexString(),
realRgb=realColor.toRgbString();
if(rgbaSupport||realColor.alpha===1){
previewElement.css("background-color", realRgb);
}else{
previewElement.css("background-color", "transparent");
previewElement.css("filter", realColor.toFilter());
}
if(opts.showAlpha){
var rgb=realColor.toRgb();
rgb.a=0;
var realAlpha=tinycolor(rgb).toRgbString();
var gradient="linear-gradient(left, " + realAlpha + ", " + realHex + ")";
if(IE){
alphaSliderInner.css("filter", tinycolor(realAlpha).toFilter({ gradientType: 1 }, realHex));
}else{
alphaSliderInner.css("background", "-webkit-" + gradient);
alphaSliderInner.css("background", "-moz-" + gradient);
alphaSliderInner.css("background", "-ms-" + gradient);
alphaSliderInner.css("background",
"linear-gradient(to right, " + realAlpha + ", " + realHex + ")");
}}
displayColor=realColor.toString(format);
}
if(opts.showInput){
textInput.val(displayColor);
}
if(opts.showPalette){
drawPalette();
}
drawInitial();
}
function updateHelperLocations(){
var s=currentSaturation;
var v=currentValue;
if(allowEmpty&&isEmpty){
alphaSlideHelper.hide();
slideHelper.hide();
dragHelper.hide();
}else{
alphaSlideHelper.show();
slideHelper.show();
dragHelper.show();
var dragX=s * dragWidth;
var dragY=dragHeight - (v * dragHeight);
dragX=Math.max(-dragHelperHeight,
Math.min(dragWidth - dragHelperHeight, dragX - dragHelperHeight)
);
dragY=Math.max(-dragHelperHeight,
Math.min(dragHeight - dragHelperHeight, dragY - dragHelperHeight)
);
dragHelper.css({
"top": dragY + "px",
"left": dragX + "px"
});
var alphaX=currentAlpha * alphaWidth;
alphaSlideHelper.css({
"left": (alphaX - (alphaSlideHelperWidth / 2)) + "px"
});
var slideY=(currentHue) * slideHeight;
slideHelper.css({
"top": (slideY - slideHelperHeight) + "px"
});
}}
function updateOriginalInput(fireCallback){
var color=get(),
displayColor='',
hasChanged = !tinycolor.equals(color, colorOnShow);
if(color){
displayColor=color.toString(currentPreferredFormat);
addColorToSelectionPalette(color);
}
if(isInput){
boundElement.val(displayColor);
}
if(fireCallback&&hasChanged){
callbacks.change(color);
boundElement.trigger('change', [ color ]);
}}
function reflow(){
dragWidth=dragger.width();
dragHeight=dragger.height();
dragHelperHeight=dragHelper.height();
slideWidth=slider.width();
slideHeight=slider.height();
slideHelperHeight=slideHelper.height();
alphaWidth=alphaSlider.width();
alphaSlideHelperWidth=alphaSlideHelper.width();
if(!flat){
container.css("position", "absolute");
if(opts.offset){
container.offset(opts.offset);
}else{
container.offset(getOffset(container, offsetElement));
}}
updateHelperLocations();
if(opts.showPalette){
drawPalette();
}
boundElement.trigger('reflow.spectrum');
}
function destroy(){
boundElement.show();
offsetElement.unbind("click.spectrum touchstart.spectrum");
container.remove();
replacer.remove();
spectrums[spect.id]=null;
}
function option(optionName, optionValue){
if(optionName===undefined){
return $.extend({}, opts);
}
if(optionValue===undefined){
return opts[optionName];
}
opts[optionName]=optionValue;
applyOptions();
}
function enable(){
disabled=false;
boundElement.attr("disabled", false);
offsetElement.removeClass("sp-disabled");
}
function disable(){
hide();
disabled=true;
boundElement.attr("disabled", true);
offsetElement.addClass("sp-disabled");
}
function setOffset(coord){
opts.offset=coord;
reflow();
}
initialize();
var spect={
show: show,
hide: hide,
toggle: toggle,
reflow: reflow,
option: option,
enable: enable,
disable: disable,
offset: setOffset,
set: function (c){
set(c);
updateOriginalInput();
},
get: get,
destroy: destroy,
container: container
};
spect.id=spectrums.push(spect) - 1;
return spect;
}
function getOffset(picker, input){
var extraY=0;
var dpWidth=picker.outerWidth();
var dpHeight=picker.outerHeight();
var inputHeight=input.outerHeight();
var doc=picker[0].ownerDocument;
var docElem=doc.documentElement;
var viewWidth=docElem.clientWidth + $(doc).scrollLeft();
var viewHeight=docElem.clientHeight + $(doc).scrollTop();
var offset=input.offset();
offset.top +=inputHeight;
offset.left -=
Math.min(offset.left, (offset.left + dpWidth > viewWidth&&viewWidth > dpWidth) ?
Math.abs(offset.left + dpWidth - viewWidth):0);
offset.top -=
Math.min(offset.top, ((offset.top + dpHeight > viewHeight&&viewHeight > dpHeight) ?
Math.abs(dpHeight + inputHeight - extraY):extraY));
return offset;
}
function noop(){
}
function stopPropagation(e){
e.stopPropagation();
}
function bind(func, obj){
var slice=Array.prototype.slice;
var args=slice.call(arguments, 2);
return function (){
return func.apply(obj, args.concat(slice.call(arguments)));
};}
function draggable(element, onmove, onstart, onstop){
onmove=onmove||function (){ };
onstart=onstart||function (){ };
onstop=onstop||function (){ };
var doc=document;
var dragging=false;
var offset={};
var maxHeight=0;
var maxWidth=0;
var hasTouch=('ontouchstart' in window);
var duringDragEvents={};
duringDragEvents["selectstart"]=prevent;
duringDragEvents["dragstart"]=prevent;
duringDragEvents["touchmove mousemove"]=move;
duringDragEvents["touchend mouseup"]=stop;
function prevent(e){
if(e.stopPropagation){
e.stopPropagation();
}
if(e.preventDefault){
e.preventDefault();
}
e.returnValue=false;
}
function move(e){
if(dragging){
if(IE&&doc.documentMode < 9&&!e.button){
return stop();
}
var t0=e.originalEvent&&e.originalEvent.touches&&e.originalEvent.touches[0];
var pageX=t0&&t0.pageX||e.pageX;
var pageY=t0&&t0.pageY||e.pageY;
var dragX=Math.max(0, Math.min(pageX - offset.left, maxWidth));
var dragY=Math.max(0, Math.min(pageY - offset.top, maxHeight));
if(hasTouch){
prevent(e);
}
onmove.apply(element, [dragX, dragY, e]);
}}
function start(e){
var rightclick=(e.which) ? (e.which==3):(e.button==2);
if(!rightclick&&!dragging){
if(onstart.apply(element, arguments)!==false){
dragging=true;
maxHeight=$(element).height();
maxWidth=$(element).width();
offset=$(element).offset();
$(doc).bind(duringDragEvents);
$(doc.body).addClass("sp-dragging");
move(e);
prevent(e);
}}
}
function stop(){
if(dragging){
$(doc).unbind(duringDragEvents);
$(doc.body).removeClass("sp-dragging");
setTimeout(function(){
onstop.apply(element, arguments);
}, 0);
}
dragging=false;
}
$(element).bind("touchstart mousedown", start);
}
function throttle(func, wait, debounce){
var timeout;
return function (){
var context=this, args=arguments;
var throttler=function (){
timeout=null;
func.apply(context, args);
};
if(debounce) clearTimeout(timeout);
if(debounce||!timeout) timeout=setTimeout(throttler, wait);
};}
function inputTypeColorSupport(){
return $.fn.spectrum.inputTypeColorSupport();
}
var dataID="spectrum.id";
$.fn.spectrum=function (opts, extra){
if(typeof opts=="string"){
var returnValue=this;
var args=Array.prototype.slice.call(arguments, 1);
this.each(function (){
var spect=spectrums[$(this).data(dataID)];
if(spect){
var method=spect[opts];
if(!method){
throw new Error("Spectrum: no such method: '" + opts + "'");
}
if(opts=="get"){
returnValue=spect.get();
}
else if(opts=="container"){
returnValue=spect.container;
}
else if(opts=="option"){
returnValue=spect.option.apply(spect, args);
}
else if(opts=="destroy"){
spect.destroy();
$(this).removeData(dataID);
}else{
method.apply(spect, args);
}}
});
return returnValue;
}
return this.spectrum("destroy").each(function (){
var options=$.extend({}, opts, $(this).data());
var spect=spectrum(this, options);
$(this).data(dataID, spect.id);
});
};
$.fn.spectrum.load=true;
$.fn.spectrum.loadOpts={};
$.fn.spectrum.draggable=draggable;
$.fn.spectrum.defaults=defaultOpts;
$.fn.spectrum.inputTypeColorSupport=function inputTypeColorSupport(){
if(typeof inputTypeColorSupport._cachedResult==="undefined"){
var colorInput=$("<input type='color'/>")[0];
inputTypeColorSupport._cachedResult=colorInput.type==="color"&&colorInput.value!=="";
}
return inputTypeColorSupport._cachedResult;
};
$.spectrum={ };
$.spectrum.localization={ };
$.spectrum.palettes={ };
$.fn.spectrum.processNativeColorInputs=function (){
var colorInputs=$("input[type=color]");
if(colorInputs.length&&!inputTypeColorSupport()){
colorInputs.spectrum({
preferredFormat: "hex6"
});
}};
(function(){
var trimLeft=/^[\s,#]+/,
trimRight=/\s+$/,
tinyCounter=0,
math=Math,
mathRound=math.round,
mathMin=math.min,
mathMax=math.max,
mathRandom=math.random;
var tinycolor=function(color, opts){
color=(color) ? color:'';
opts=opts||{ };
if(color instanceof tinycolor){
return color;
}
if(!(this instanceof tinycolor)){
return new tinycolor(color, opts);
}
var rgb=inputToRGB(color);
this._originalInput=color,
this._r=rgb.r,
this._g=rgb.g,
this._b=rgb.b,
this._a=rgb.a,
this._roundA=mathRound(100*this._a) / 100,
this._format=opts.format||rgb.format;
this._gradientType=opts.gradientType;
if(this._r < 1){ this._r=mathRound(this._r); }
if(this._g < 1){ this._g=mathRound(this._g); }
if(this._b < 1){ this._b=mathRound(this._b); }
this._ok=rgb.ok;
this._tc_id=tinyCounter++;
};
tinycolor.prototype={
isDark: function(){
return this.getBrightness() < 128;
},
isLight: function(){
return !this.isDark();
},
isValid: function(){
return this._ok;
},
getOriginalInput: function(){
return this._originalInput;
},
getFormat: function(){
return this._format;
},
getAlpha: function(){
return this._a;
},
getBrightness: function(){
var rgb=this.toRgb();
return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
},
setAlpha: function(value){
this._a=boundAlpha(value);
this._roundA=mathRound(100*this._a) / 100;
return this;
},
toHsv: function(){
var hsv=rgbToHsv(this._r, this._g, this._b);
return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };},
toHsvString: function(){
var hsv=rgbToHsv(this._r, this._g, this._b);
var h=mathRound(hsv.h * 360), s=mathRound(hsv.s * 100), v=mathRound(hsv.v * 100);
return (this._a==1) ?
"hsv("  + h + ", " + s + "%, " + v + "%)" :
"hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
},
toHsl: function(){
var hsl=rgbToHsl(this._r, this._g, this._b);
return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };},
toHslString: function(){
var hsl=rgbToHsl(this._r, this._g, this._b);
var h=mathRound(hsl.h * 360), s=mathRound(hsl.s * 100), l=mathRound(hsl.l * 100);
return (this._a==1) ?
"hsl("  + h + ", " + s + "%, " + l + "%)" :
"hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
},
toHex: function(allow3Char){
return rgbToHex(this._r, this._g, this._b, allow3Char);
},
toHexString: function(allow3Char){
return '#' + this.toHex(allow3Char);
},
toHex8: function(){
return rgbaToHex(this._r, this._g, this._b, this._a);
},
toHex8String: function(){
return '#' + this.toHex8();
},
toRgb: function(){
return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };},
toRgbString: function(){
return (this._a==1) ?
"rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
"rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
},
toPercentageRgb: function(){
return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };},
toPercentageRgbString: function(){
return (this._a==1) ?
"rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
"rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
},
toName: function(){
if(this._a===0){
return "transparent";
}
if(this._a < 1){
return false;
}
return hexNames[rgbToHex(this._r, this._g, this._b, true)]||false;
},
toFilter: function(secondColor){
var hex8String='#' + rgbaToHex(this._r, this._g, this._b, this._a);
var secondHex8String=hex8String;
var gradientType=this._gradientType ? "GradientType=1, ":"";
if(secondColor){
var s=tinycolor(secondColor);
secondHex8String=s.toHex8String();
}
return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
},
toString: function(format){
var formatSet = !!format;
format=format||this._format;
var formattedString=false;
var hasAlpha=this._a < 1&&this._a >=0;
var needsAlphaFormat = !formatSet&&hasAlpha&&(format==="hex"||format==="hex6"||format==="hex3"||format==="name");
if(needsAlphaFormat){
if(format==="name"&&this._a===0){
return this.toName();
}
return this.toRgbString();
}
if(format==="rgb"){
formattedString=this.toRgbString();
}
if(format==="prgb"){
formattedString=this.toPercentageRgbString();
}
if(format==="hex"||format==="hex6"){
formattedString=this.toHexString();
}
if(format==="hex3"){
formattedString=this.toHexString(true);
}
if(format==="hex8"){
formattedString=this.toHex8String();
}
if(format==="name"){
formattedString=this.toName();
}
if(format==="hsl"){
formattedString=this.toHslString();
}
if(format==="hsv"){
formattedString=this.toHsvString();
}
return formattedString||this.toHexString();
},
_applyModification: function(fn, args){
var color=fn.apply(null, [this].concat([].slice.call(args)));
this._r=color._r;
this._g=color._g;
this._b=color._b;
this.setAlpha(color._a);
return this;
},
lighten: function(){
return this._applyModification(lighten, arguments);
},
brighten: function(){
return this._applyModification(brighten, arguments);
},
darken: function(){
return this._applyModification(darken, arguments);
},
desaturate: function(){
return this._applyModification(desaturate, arguments);
},
saturate: function(){
return this._applyModification(saturate, arguments);
},
greyscale: function(){
return this._applyModification(greyscale, arguments);
},
spin: function(){
return this._applyModification(spin, arguments);
},
_applyCombination: function(fn, args){
return fn.apply(null, [this].concat([].slice.call(args)));
},
analogous: function(){
return this._applyCombination(analogous, arguments);
},
complement: function(){
return this._applyCombination(complement, arguments);
},
monochromatic: function(){
return this._applyCombination(monochromatic, arguments);
},
splitcomplement: function(){
return this._applyCombination(splitcomplement, arguments);
},
triad: function(){
return this._applyCombination(triad, arguments);
},
tetrad: function(){
return this._applyCombination(tetrad, arguments);
}};
tinycolor.fromRatio=function(color, opts){
if(typeof color=="object"){
var newColor={};
for (var i in color){
if(color.hasOwnProperty(i)){
if(i==="a"){
newColor[i]=color[i];
}else{
newColor[i]=convertToPercentage(color[i]);
}}
}
color=newColor;
}
return tinycolor(color, opts);
};
function inputToRGB(color){
var rgb={ r: 0, g: 0, b: 0 };
var a=1;
var ok=false;
var format=false;
if(typeof color=="string"){
color=stringInputToObject(color);
}
if(typeof color=="object"){
if(color.hasOwnProperty("r")&&color.hasOwnProperty("g")&&color.hasOwnProperty("b")){
rgb=rgbToRgb(color.r, color.g, color.b);
ok=true;
format=String(color.r).substr(-1)==="%" ? "prgb":"rgb";
}
else if(color.hasOwnProperty("h")&&color.hasOwnProperty("s")&&color.hasOwnProperty("v")){
color.s=convertToPercentage(color.s);
color.v=convertToPercentage(color.v);
rgb=hsvToRgb(color.h, color.s, color.v);
ok=true;
format="hsv";
}
else if(color.hasOwnProperty("h")&&color.hasOwnProperty("s")&&color.hasOwnProperty("l")){
color.s=convertToPercentage(color.s);
color.l=convertToPercentage(color.l);
rgb=hslToRgb(color.h, color.s, color.l);
ok=true;
format="hsl";
}
if(color.hasOwnProperty("a")){
a=color.a;
}}
a=boundAlpha(a);
return {
ok: ok,
format: color.format||format,
r: mathMin(255, mathMax(rgb.r, 0)),
g: mathMin(255, mathMax(rgb.g, 0)),
b: mathMin(255, mathMax(rgb.b, 0)),
a: a
};}
function rgbToRgb(r, g, b){
return {
r: bound01(r, 255) * 255,
g: bound01(g, 255) * 255,
b: bound01(b, 255) * 255
};}
function rgbToHsl(r, g, b){
r=bound01(r, 255);
g=bound01(g, 255);
b=bound01(b, 255);
var max=mathMax(r, g, b), min=mathMin(r, g, b);
var h, s, l=(max + min) / 2;
if(max==min){
h=s = 0;
}else{
var d=max - min;
s=l > 0.5 ? d / (2 - max - min):d / (max + min);
switch(max){
case r: h=(g - b) / d + (g < b ? 6:0); break;
case g: h=(b - r) / d + 2; break;
case b: h=(r - g) / d + 4; break;
}
h /=6;
}
return { h: h, s: s, l: l };}
function hslToRgb(h, s, l){
var r, g, b;
h=bound01(h, 360);
s=bound01(s, 100);
l=bound01(l, 100);
function hue2rgb(p, q, t){
if(t < 0) t +=1;
if(t > 1) t -=1;
if(t < 1/6) return p + (q - p) * 6 * t;
if(t < 1/2) return q;
if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
return p;
}
if(s===0){
r=g = b=l;
}else{
var q=l < 0.5 ? l * (1 + s):l + s - l * s;
var p=2 * l - q;
r=hue2rgb(p, q, h + 1/3);
g=hue2rgb(p, q, h);
b=hue2rgb(p, q, h - 1/3);
}
return { r: r * 255, g: g * 255, b: b * 255 };}
function rgbToHsv(r, g, b){
r=bound01(r, 255);
g=bound01(g, 255);
b=bound01(b, 255);
var max=mathMax(r, g, b), min=mathMin(r, g, b);
var h, s, v=max;
var d=max - min;
s=max===0 ? 0:d / max;
if(max==min){
h=0;
}else{
switch(max){
case r: h=(g - b) / d + (g < b ? 6:0); break;
case g: h=(b - r) / d + 2; break;
case b: h=(r - g) / d + 4; break;
}
h /=6;
}
return { h: h, s: s, v: v };}
function hsvToRgb(h, s, v){
h=bound01(h, 360) * 6;
s=bound01(s, 100);
v=bound01(v, 100);
var i=math.floor(h),
f=h - i,
p=v * (1 - s),
q=v * (1 - f * s),
t=v * (1 - (1 - f) * s),
mod=i % 6,
r=[v, q, p, p, t, v][mod],
g=[t, v, v, q, p, p][mod],
b=[p, p, t, v, v, q][mod];
return { r: r * 255, g: g * 255, b: b * 255 };}
function rgbToHex(r, g, b, allow3Char){
var hex=[
pad2(mathRound(r).toString(16)),
pad2(mathRound(g).toString(16)),
pad2(mathRound(b).toString(16))
];
if(allow3Char&&hex[0].charAt(0)==hex[0].charAt(1)&&hex[1].charAt(0)==hex[1].charAt(1)&&hex[2].charAt(0)==hex[2].charAt(1)){
return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
}
return hex.join("");
}
function rgbaToHex(r, g, b, a){
var hex=[
pad2(convertDecimalToHex(a)),
pad2(mathRound(r).toString(16)),
pad2(mathRound(g).toString(16)),
pad2(mathRound(b).toString(16))
];
return hex.join("");
}
tinycolor.equals=function (color1, color2){
if(!color1||!color2){ return false; }
return tinycolor(color1).toRgbString()==tinycolor(color2).toRgbString();
};
tinycolor.random=function(){
return tinycolor.fromRatio({
r: mathRandom(),
g: mathRandom(),
b: mathRandom()
});
};
function desaturate(color, amount){
amount=(amount===0) ? 0:(amount||10);
var hsl=tinycolor(color).toHsl();
hsl.s -=amount / 100;
hsl.s=clamp01(hsl.s);
return tinycolor(hsl);
}
function saturate(color, amount){
amount=(amount===0) ? 0:(amount||10);
var hsl=tinycolor(color).toHsl();
hsl.s +=amount / 100;
hsl.s=clamp01(hsl.s);
return tinycolor(hsl);
}
function greyscale(color){
return tinycolor(color).desaturate(100);
}
function lighten (color, amount){
amount=(amount===0) ? 0:(amount||10);
var hsl=tinycolor(color).toHsl();
hsl.l +=amount / 100;
hsl.l=clamp01(hsl.l);
return tinycolor(hsl);
}
function brighten(color, amount){
amount=(amount===0) ? 0:(amount||10);
var rgb=tinycolor(color).toRgb();
rgb.r=mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
rgb.g=mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
rgb.b=mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
return tinycolor(rgb);
}
function darken (color, amount){
amount=(amount===0) ? 0:(amount||10);
var hsl=tinycolor(color).toHsl();
hsl.l -=amount / 100;
hsl.l=clamp01(hsl.l);
return tinycolor(hsl);
}
function spin(color, amount){
var hsl=tinycolor(color).toHsl();
var hue=(mathRound(hsl.h) + amount) % 360;
hsl.h=hue < 0 ? 360 + hue:hue;
return tinycolor(hsl);
}
function complement(color){
var hsl=tinycolor(color).toHsl();
hsl.h=(hsl.h + 180) % 360;
return tinycolor(hsl);
}
function triad(color){
var hsl=tinycolor(color).toHsl();
var h=hsl.h;
return [
tinycolor(color),
tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
];
}
function tetrad(color){
var hsl=tinycolor(color).toHsl();
var h=hsl.h;
return [
tinycolor(color),
tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
];
}
function splitcomplement(color){
var hsl=tinycolor(color).toHsl();
var h=hsl.h;
return [
tinycolor(color),
tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
];
}
function analogous(color, results, slices){
results=results||6;
slices=slices||30;
var hsl=tinycolor(color).toHsl();
var part=360 / slices;
var ret=[tinycolor(color)];
for (hsl.h=((hsl.h - (part * results >> 1)) + 720) % 360; --results;){
hsl.h=(hsl.h + part) % 360;
ret.push(tinycolor(hsl));
}
return ret;
}
function monochromatic(color, results){
results=results||6;
var hsv=tinycolor(color).toHsv();
var h=hsv.h, s=hsv.s, v=hsv.v;
var ret=[];
var modification=1 / results;
while (results--){
ret.push(tinycolor({ h: h, s: s, v: v}));
v=(v + modification) % 1;
}
return ret;
}
tinycolor.mix=function(color1, color2, amount){
amount=(amount===0) ? 0:(amount||50);
var rgb1=tinycolor(color1).toRgb();
var rgb2=tinycolor(color2).toRgb();
var p=amount / 100;
var w=p * 2 - 1;
var a=rgb2.a - rgb1.a;
var w1;
if(w * a==-1){
w1=w;
}else{
w1=(w + a) / (1 + w * a);
}
w1=(w1 + 1) / 2;
var w2=1 - w1;
var rgba={
r: rgb2.r * w1 + rgb1.r * w2,
g: rgb2.g * w1 + rgb1.g * w2,
b: rgb2.b * w1 + rgb1.b * w2,
a: rgb2.a * p  + rgb1.a * (1 - p)
};
return tinycolor(rgba);
};
tinycolor.readability=function(color1, color2){
var c1=tinycolor(color1);
var c2=tinycolor(color2);
var rgb1=c1.toRgb();
var rgb2=c2.toRgb();
var brightnessA=c1.getBrightness();
var brightnessB=c2.getBrightness();
var colorDiff=(
Math.max(rgb1.r, rgb2.r) - Math.min(rgb1.r, rgb2.r) +
Math.max(rgb1.g, rgb2.g) - Math.min(rgb1.g, rgb2.g) +
Math.max(rgb1.b, rgb2.b) - Math.min(rgb1.b, rgb2.b)
);
return {
brightness: Math.abs(brightnessA - brightnessB),
color: colorDiff
};};
tinycolor.isReadable=function(color1, color2){
var readability=tinycolor.readability(color1, color2);
return readability.brightness > 125&&readability.color > 500;
};
tinycolor.mostReadable=function(baseColor, colorList){
var bestColor=null;
var bestScore=0;
var bestIsReadable=false;
for (var i=0; i < colorList.length; i++){
var readability=tinycolor.readability(baseColor, colorList[i]);
var readable=readability.brightness > 125&&readability.color > 500;
var score=3 * (readability.brightness / 125) + (readability.color / 500);
if((readable&&! bestIsReadable) ||
(readable&&bestIsReadable&&score > bestScore) ||
((! readable)&&(! bestIsReadable)&&score > bestScore)){
bestIsReadable=readable;
bestScore=score;
bestColor=tinycolor(colorList[i]);
}}
return bestColor;
};
var names=tinycolor.names={
aliceblue: "f0f8ff",
antiquewhite: "faebd7",
aqua: "0ff",
aquamarine: "7fffd4",
azure: "f0ffff",
beige: "f5f5dc",
bisque: "ffe4c4",
black: "000",
blanchedalmond: "ffebcd",
blue: "00f",
blueviolet: "8a2be2",
brown: "a52a2a",
burlywood: "deb887",
burntsienna: "ea7e5d",
cadetblue: "5f9ea0",
chartreuse: "7fff00",
chocolate: "d2691e",
coral: "ff7f50",
cornflowerblue: "6495ed",
cornsilk: "fff8dc",
crimson: "dc143c",
cyan: "0ff",
darkblue: "00008b",
darkcyan: "008b8b",
darkgoldenrod: "b8860b",
darkgray: "a9a9a9",
darkgreen: "006400",
darkgrey: "a9a9a9",
darkkhaki: "bdb76b",
darkmagenta: "8b008b",
darkolivegreen: "556b2f",
darkorange: "ff8c00",
darkorchid: "9932cc",
darkred: "8b0000",
darksalmon: "e9967a",
darkseagreen: "8fbc8f",
darkslateblue: "483d8b",
darkslategray: "2f4f4f",
darkslategrey: "2f4f4f",
darkturquoise: "00ced1",
darkviolet: "9400d3",
deeppink: "ff1493",
deepskyblue: "00bfff",
dimgray: "696969",
dimgrey: "696969",
dodgerblue: "1e90ff",
firebrick: "b22222",
floralwhite: "fffaf0",
forestgreen: "228b22",
fuchsia: "f0f",
gainsboro: "dcdcdc",
ghostwhite: "f8f8ff",
gold: "ffd700",
goldenrod: "daa520",
gray: "808080",
green: "008000",
greenyellow: "adff2f",
grey: "808080",
honeydew: "f0fff0",
hotpink: "ff69b4",
indianred: "cd5c5c",
indigo: "4b0082",
ivory: "fffff0",
khaki: "f0e68c",
lavender: "e6e6fa",
lavenderblush: "fff0f5",
lawngreen: "7cfc00",
lemonchiffon: "fffacd",
lightblue: "add8e6",
lightcoral: "f08080",
lightcyan: "e0ffff",
lightgoldenrodyellow: "fafad2",
lightgray: "d3d3d3",
lightgreen: "90ee90",
lightgrey: "d3d3d3",
lightpink: "ffb6c1",
lightsalmon: "ffa07a",
lightseagreen: "20b2aa",
lightskyblue: "87cefa",
lightslategray: "789",
lightslategrey: "789",
lightsteelblue: "b0c4de",
lightyellow: "ffffe0",
lime: "0f0",
limegreen: "32cd32",
linen: "faf0e6",
magenta: "f0f",
maroon: "800000",
mediumaquamarine: "66cdaa",
mediumblue: "0000cd",
mediumorchid: "ba55d3",
mediumpurple: "9370db",
mediumseagreen: "3cb371",
mediumslateblue: "7b68ee",
mediumspringgreen: "00fa9a",
mediumturquoise: "48d1cc",
mediumvioletred: "c71585",
midnightblue: "191970",
mintcream: "f5fffa",
mistyrose: "ffe4e1",
moccasin: "ffe4b5",
navajowhite: "ffdead",
navy: "000080",
oldlace: "fdf5e6",
olive: "808000",
olivedrab: "6b8e23",
orange: "ffa500",
orangered: "ff4500",
orchid: "da70d6",
palegoldenrod: "eee8aa",
palegreen: "98fb98",
paleturquoise: "afeeee",
palevioletred: "db7093",
papayawhip: "ffefd5",
peachpuff: "ffdab9",
peru: "cd853f",
pink: "ffc0cb",
plum: "dda0dd",
powderblue: "b0e0e6",
purple: "800080",
rebeccapurple: "663399",
red: "f00",
rosybrown: "bc8f8f",
royalblue: "4169e1",
saddlebrown: "8b4513",
salmon: "fa8072",
sandybrown: "f4a460",
seagreen: "2e8b57",
seashell: "fff5ee",
sienna: "a0522d",
silver: "c0c0c0",
skyblue: "87ceeb",
slateblue: "6a5acd",
slategray: "708090",
slategrey: "708090",
snow: "fffafa",
springgreen: "00ff7f",
steelblue: "4682b4",
tan: "d2b48c",
teal: "008080",
thistle: "d8bfd8",
tomato: "ff6347",
turquoise: "40e0d0",
violet: "ee82ee",
wheat: "f5deb3",
white: "fff",
whitesmoke: "f5f5f5",
yellow: "ff0",
yellowgreen: "9acd32"
};
var hexNames=tinycolor.hexNames=flip(names);
function flip(o){
var flipped={ };
for (var i in o){
if(o.hasOwnProperty(i)){
flipped[o[i]]=i;
}}
return flipped;
}
function boundAlpha(a){
a=parseFloat(a);
if(isNaN(a)||a < 0||a > 1){
a=1;
}
return a;
}
function bound01(n, max){
if(isOnePointZero(n)){ n="100%"; }
var processPercent=isPercentage(n);
n=mathMin(max, mathMax(0, parseFloat(n)));
if(processPercent){
n=parseInt(n * max, 10) / 100;
}
if((math.abs(n - max) < 0.000001)){
return 1;
}
return (n % max) / parseFloat(max);
}
function clamp01(val){
return mathMin(1, mathMax(0, val));
}
function parseIntFromHex(val){
return parseInt(val, 16);
}
function isOnePointZero(n){
return typeof n=="string"&&n.indexOf('.')!=-1&&parseFloat(n)===1;
}
function isPercentage(n){
return typeof n==="string"&&n.indexOf('%')!=-1;
}
function pad2(c){
return c.length==1 ? '0' + c:'' + c;
}
function convertToPercentage(n){
if(n <=1){
n=(n * 100) + "%";
}
return n;
}
function convertDecimalToHex(d){
return Math.round(parseFloat(d) * 255).toString(16);
}
function convertHexToDecimal(h){
return (parseIntFromHex(h) / 255);
}
var matchers=(function(){
var CSS_INTEGER="[-\\+]?\\d+%?";
var CSS_NUMBER="[-\\+]?\\d*\\.\\d+%?";
var CSS_UNIT="(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
var PERMISSIVE_MATCH3="[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var PERMISSIVE_MATCH4="[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
return {
rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};})();
function stringInputToObject(color){
color=color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
var named=false;
if(names[color]){
color=names[color];
named=true;
}
else if(color=='transparent'){
return { r: 0, g: 0, b: 0, a: 0, format: "name" };}
var match;
if((match=matchers.rgb.exec(color))){
return { r: match[1], g: match[2], b: match[3] };}
if((match=matchers.rgba.exec(color))){
return { r: match[1], g: match[2], b: match[3], a: match[4] };}
if((match=matchers.hsl.exec(color))){
return { h: match[1], s: match[2], l: match[3] };}
if((match=matchers.hsla.exec(color))){
return { h: match[1], s: match[2], l: match[3], a: match[4] };}
if((match=matchers.hsv.exec(color))){
return { h: match[1], s: match[2], v: match[3] };}
if((match=matchers.hsva.exec(color))){
return { h: match[1], s: match[2], v: match[3], a: match[4] };}
if((match=matchers.hex8.exec(color))){
return {
a: convertHexToDecimal(match[1]),
r: parseIntFromHex(match[2]),
g: parseIntFromHex(match[3]),
b: parseIntFromHex(match[4]),
format: named ? "name":"hex8"
};}
if((match=matchers.hex6.exec(color))){
return {
r: parseIntFromHex(match[1]),
g: parseIntFromHex(match[2]),
b: parseIntFromHex(match[3]),
format: named ? "name":"hex"
};}
if((match=matchers.hex3.exec(color))){
return {
r: parseIntFromHex(match[1] + '' + match[1]),
g: parseIntFromHex(match[2] + '' + match[2]),
b: parseIntFromHex(match[3] + '' + match[3]),
format: named ? "name":"hex"
};}
return false;
}
window.tinycolor=tinycolor;
})();
$(function (){
if($.fn.spectrum.load){
$.fn.spectrum.processNativeColorInputs();
}});
});
(function($){
var wcff_front_end=function(){
this.ajaxFlaQ=true;
this.prepareRequest=function(_request, _method, _data){
this.request={
request:_method,
context:_request,
post:"",
post_type:"wccpf",
payload:_data,
};};
this.prepareResponse=function(_status, _msg, _data){
this.response={
status:_status,
message:_msg,
res:_data
};};
if(typeof wccpf_opt_cart!="undefined"){
this.getFieldinfo=function(target, _check){
var product=target.closest("tr.cart_item").find(".wcff_get_referance_data");
var prodId=product.data("product_id");
var field_name=target.data("field");
var product_cart_id=product.data("cart_id");
var value=target.find(".wcff-color-picker-color-show").length!=0 ? target.find(".wcff-color-picker-color-show").css("background-color"):$.trim(target.find("p").text());
if(target.is("[data-cloned]")){
field_name=target.data("cloned");
}
if(_check){
field_name=target.prev().text().toLowerCase().slice(0, -1).replace(" ", "_").trim()
}
var data={ product_id:prodId, product_cart_id:product_cart_id, check_edit:_check, data:{ name:field_name, value:value }};
this.prepareRequest("wcff_cart_field_render", "post", data);
this.dock("update_cart_item", target);
};
this.getPharamInhtml=function(_target){
var target=_target;
var prodId=target.closest("tr.cart_item").find(".wcff_get_referance_data").data("product_id");
var product_cart_id=target.closest("tr.cart_item").find(".wcff_get_referance_data").data("cart_id");
var targetField=target.closest(".wcff_field_cart_update_value").find(".wccpf-field");
var value=targetField.val();
var wcff_validator_obj=new wcffValidator();
var field_type=target.attr("data-field_type");
wcff_validator_obj.doValidate(targetField);
if(!wcff_validator_obj.isValid){
return false;
}
if(field_type=="checkbox"||field_type=="radio"){
if(field_type=="checkbox"){
var value_field=target.closest(".wcff_field_cart_update_value").find(".wccpf-field:checked");
if(value_field.length >=2){
value="";
for(var i=0; i < value_field.length; i++){
value +=$(value_field[i]).val();
value +=i!=value_field.length-1 ? ", ":"";
}}else{
value=value_field.val();
}}else{
value=_target.closest(".wcff_field_cart_update_value").find("input:checked").val();
}}else if(field_type=="colorpicker"){
value=encodeURI(value);
}else if(field_type=="file"){
}else if(field_type=="email"){
value=value;
var validate=target.closest(".wcff_field_cart_update_value").find(".wccpf-field")[0].checkValidity();
if(!validate){
targetField.next().html("Invalid email.!").show();
return false;
}else{
targetField.next().html("This field can't be Empty").hide();
}}
var data={ product_id:prodId, product_cart_id:product_cart_id, data:{ name:target.closest(".wcff_field_cart_update_value").data("field"), value:value, field_type:field_type, color_showin:target.attr("data-color_show") }};
this.prepareRequest("update_cart_item_from_session", "post", data);
this.dock("update_cart_item_from_session", target);
};}
this.dock=function(_action, _target, is_file){
var me=this;
if(!this.ajaxFlaQ){
return;
}
$.ajax({
type:"POST",
data:{ action:"wcff_ajax", wcff_param:JSON.stringify(this.request) },
dataType:"json",
url:woocommerce_params.ajax_url,
beforeSend:function(){
me.ajaxFlaQ=false;
},
success:function(data){
me.ajaxFlaQ=true;
me.prepareResponse(data.status, data.message, data.data);
if(me.response.status){
me.responseHandler(_action, _target);
}else{
}},
error:function(jqXHR, textStatus, errorThrown){
me.ajaxFlaQ=true;
},
complete:function(){
}});
};
this.responseHandler=function(_action, _target){
if(_action=="update_cart_item"){
if(this.response.res==true&&this.request.payload.check_edit){
_target.addClass("wcff_field_cart_update_value").attr({ "title":"Double click to edit", "data-field":_target.prev().text().toLowerCase().slice(0, -1).replace(" ", "_").trim() });
return;
}else if(this.request.payload.check_edit){
_target.addClass("edit_checked");
return;
}
if(this.response.res==false){
return;
}
var html=$(this.response.res.html).find("td:last").html();
var header=$("head");
if(this.response.res.field_type!="file"){
html=$(html + '<button data-field_type="'+this.response.res.field_type+'" data-color_show="'+ this.response.res.color_showin +'" class="button wcff_update_curent_field_data">Update</button>');
html.addClass("wcff_cart_item_update");
_target.html(html);
}
if(this.response.res.field_type=="email"||this.response.res.field_type=="text"||this.response.res.field_type=="number"||this.response.res.field_type=="textarea"){
_target.find(".wccpf-field").val(this.request.payload.data.value);
html.trigger("focus");
}else if(this.response.res.field_type=="select"){
}else if(this.response.res.field_type=="colorpicker"){
header.append(this.response.res.script);
}else if(this.response.res.field_type=="checkbox"){
var checked_item=this.request.payload.data.value.split(", ");
for(var i=0; i < checked_item.length; i++){
html.find("input[value="+checked_item[i]+"]").prop("checked", true);
}}else if(this.response.res.field_type=="radio"){
html.find("input[value="+ this.request.payload.data.value +"]").prop("checked", true);
}else if(this.response.res.field_type=="file"){
return;
}else if(this.response.res.field_type=="datepicker"){
_target.find(".wccpf-field").val(this.request.payload.data.value);
if(header.find("script[data-type=wpff-datepicker-script]").length==0){
header.append(this.response.res.script);
}
header.append($(this.response.res.html)[2]);
}}else if(_action=="update_cart_item_from_session"){
if(this.response.res.status){
if(this.response.res.field_type=="colorpicker"){
_target.closest(".wcff_field_cart_update_value").html('<p>'+ decodeURI(this.response.res.value) +'</p>');
}else{
_target.closest(".wcff_field_cart_update_value").html('<p>'+ this.response.res.value +'</p>');
}
_target.next().hide();
}else{
_target.next().html(this.response.res.message).show();
}}
};};
$(document).on("submit", "form.cart", function(){
if(typeof(wccpf_opt.location)!="undefined" &&
wccpf_opt.location!="woocommerce_before_add_to_cart_button" &&
wccpf_opt.location!="woocommerce_after_add_to_cart_button"){
var me=$(this);
me.find(".wccpf_fields_table").each(function(){
$(this).remove();
});
$(".wccpf_fields_table").each(function(){
var cloned=$(this).clone(true);
cloned.css("display", "none");
me.append(cloned);
});
}});
var wcffCloner=function(){
this.initialize=function(){
$(document).on("change", "input[name=quantity]", function(){
var product_count=$(this).val();
var fields_count=parseInt($("#wccpf_fields_clone_count").val());
$("#wccpf_fields_clone_count").val(product_count);
if(fields_count < product_count){
for(var i=fields_count + 1; i <=product_count; i++){
var cloned=$('.wccpf-fields-group:first').clone(true);
cloned.find("script").remove();
cloned.find("div.sp-replacer").remove();
cloned.find("span.wccpf-fields-group-title-index").html(i);
cloned.find(".hasDatepicker").attr("id", "");
cloned.find(".hasDatepicker").removeClass("hasDatepicker");
cloned.find(".wccpf-field").each(function(){
var name_attr=$(this).attr("name");
if(name_attr.indexOf("[]")!=-1){
var temp_name=name_attr.substring(0, name_attr.lastIndexOf("_"));
name_attr=temp_name + "_" + i + "[]";
}else{
name_attr=name_attr.slice(0, -1) + i;
}
$(this).attr("name", name_attr);
});
$("#wccpf-fields-container").append(cloned);
setTimeout(function(){ if(typeof(wccpf_init_color_pickers)=='function'){ wccpf_init_color_pickers(); }}, 500);
}}else{
$("div.wccpf-fields-group:eq("+(product_count - 1) +")").nextAll().remove();
}
if($(this).val()==1){
$(".wccpf-fields-group-title-index").hide();
}else{
$(".wccpf-fields-group-title-index").show();
}});
setTimeout(function(){ $("input[name=quantity]").trigger("change"); }, 300);
};};
var wcffValidator=function(){
this.isValid=true;
this.initialize=function(){
var me=this;
if(wccpf_opt.validation_type=="blur"){
$(document).on("blur", ".wccpf-field", me, function(e){
e.data.doValidate($(this));
});
}
$(document).on("submit", "form.cart", me, function(e){
var me=e.data;
e.data.isValid=true;
$(".wccpf-field").each(function(){
me.doValidate($(this));
});
return e.data.isValid;
});
};
this.doValidate=function(field){
if(field.attr("wccpf-type")!="radio"&&field.attr("wccpf-type")!="checkbox"){
if(field.attr("wccpf-mandatory")=="yes"){
if(this.doPatterns(field.attr("wccpf-pattern"), field.val())){
field.next().hide();
}else{
this.isValid=false;
field.next().show();
}}
}else if(field.attr("wccpf-type")=="radio"){
if(field.attr("wccpf-mandatory")=="yes"){
if($("input[name="+ field.attr("name") +"]").is(':checked')){
field.next().show();
}else{
this.isValid=false;
field.next().hide();
}}
}else if(field.attr("wccpf-type")=="checkbox"){
if(field.attr("wccpf-mandatory")=="yes"){
var values=$("input[name="+ field.attr("name") +"]").serializeArray();
if(values.length==0){
field.next().show();
}else{
this.isValid=false;
field.next().hide();
}}
}else if(field.attr("wccpf-type")=="file"){
if(field.attr("wccpf-mandatory")=="yes"){
if(field.val()==""){
field.next().show();
}else{
field.next().hide();
}}
}}
this.doPatterns=function(patt, val){
var pattern={
mandatory:/\S/,
number:/^\d+\.\d{0,2}$/,
email:/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
};
return pattern[ patt ].test(val);
};};
$(document).ready(function(){
var wcff_fe_dock=new wcff_front_end();
$(document).on("change", ".wccpf-field", function(e){
var target=$(this),
prevExt=['jpeg', 'jpg', 'png', 'gif', 'bmp'];
if(target.is("input[type=file]")){
if($.inArray(target.val().split('.').pop().toLowerCase(), prevExt)!=-1){
if(!target.next().is(".wcff_image_prev_shop_continer")){
target.after('<div class="wcff_image_prev_shop_continer"></div>');
}
var html="";
for(var i=0; i < target[0].files.length; i++){
html +='<img class="wcff-prev-shop-image" src="'+ URL.createObjectURL(target[0].files[i]) +'">';
target[0].files[i].name=target[0].files[i].name.replace(/'|$|,/g, '');
target[0].files[i].name=target[0].files[i].name.replace('$', '');
}
target.next(".wcff_image_prev_shop_continer").html(html);
}}
});
if(typeof wccpf_opt!="undefined"){
if(typeof(wccpf_opt.cloning)!=="undefined"&&wccpf_opt.cloning=="yes"){
var wcff_cloner_obj=new wcffCloner();
wcff_cloner_obj.initialize();
}
if(typeof(wccpf_opt.validation)!=="undefined"&&wccpf_opt.validation=="yes"){
var wcff_validator_obj=new wcffValidator();
wcff_validator_obj.initialize();
}}
if(typeof wccpf_opt_cart=="undefined"){
$(".wcff_field_cart_update_value").removeClass("wcff_field_cart_update_value");
}
if(typeof wccpf_opt_cart!="undefined"){
if(wccpf_opt_cart.is_edit_cart_value=="no"){
$(".wcff_field_cart_update_value").removeClass("wcff_field_cart_update_value");
}
$(document).on("change", ".wccpf-color, .wccaf-color", function(){
var colorField=$(this);
if(colorField.val().search(",")==-1&&colorField.attr("hex_color_show_in_color")=="yes"){
colorField.val('<span class="wcff-color-picker-color-show" code="'+ colorField.val() +'" style="padding: 0px 15px;background-color: '+ colorField.val() +'"></span>');
}});
$(document).on("dblclick", "dd[class*=variation], li.wcff_field_cart_update_value", function(e){
if(wccpf_opt_cart.is_edit_cart_value=="yes"&&wc_add_to_cart_params.is_cart=="1"){
var target=$(this);
if(!target.find("input, select, textarea, label").length!=0&&target.is(".wcff_field_cart_update_value")){
wcff_fe_dock.getFieldinfo(target, false);
}}
});
$(document).on("hover", "dd[class*=variation]", function(e){
var target=$(this);
if(!target.is(".wcff_field_cart_update_value")&&wccpf_opt_cart.is_edit_cart_value=="yes"&&!target.is(".edit_checked")){
wcff_fe_dock.getFieldinfo(target, true);
}});
$(document).on("click", ".wcff_update_curent_field_data", function(e){
wcff_fe_dock.getPharamInhtml($(this));
e.preventDefault();
});
}});
})(jQuery);