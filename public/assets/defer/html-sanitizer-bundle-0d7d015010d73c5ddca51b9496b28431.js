// Copyright (C) 2010 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// Sam: made some modifications to pass jshint and protect against global namespace pollution
window.sanitizeHtml=function(){var e=function(){function e(e){var t=(""+e).match(p);return t?new c(h(t[1]),h(t[2]),h(t[3]),h(t[4]),h(t[5]),h(t[6]),h(t[7])):null}function t(e,t,s,o,u,a,f){var l=new c(r(e,d),r(t,d),n(s),o>0?o.toString():null,r(u,v),null,n(f));return a&&("string"==typeof a?l.setRawQuery(a.replace(/[^?&=0-9A-Za-z_\-~.%]/g,i)):l.setAllParameters(a)),l}function n(e){return"string"==typeof e?encodeURIComponent(e):null}function r(e,t){return"string"==typeof e?encodeURI(e).replace(t,i):null}function i(e){var t=e.charCodeAt(0);return"%"+"0123456789ABCDEF".charAt(t>>4&15)+"0123456789ABCDEF".charAt(t&15)}function s(e){return e.replace(/(^|\/)\.(?:\/|$)/g,"$1").replace(/\/{2,}/g,"/")}function f(e){if(e==null)return null;var t=s(e),n=u;for(var r;(r=t.replace(n,"$1"))!=t;t=r);return t}function l(e,t){var n=e.clone(),r=t.hasScheme();r?n.setRawScheme(t.getRawScheme()):r=t.hasCredentials(),r?n.setRawCredentials(t.getRawCredentials()):r=t.hasDomain(),r?n.setRawDomain(t.getRawDomain()):r=t.hasPort();var i=t.getRawPath(),s=f(i);if(r)n.setPort(t.getPort()),s=s&&s.replace(a,"");else{r=!!i;if(r){if(s.charCodeAt(0)!==47){var o=f(n.getRawPath()||"").replace(a,""),u=o.lastIndexOf("/")+1;s=f((u?o.substring(0,u):"")+f(i)).replace(a,"")}}else s=s&&s.replace(a,""),s!==i&&n.setRawPath(s)}return r?n.setRawPath(s):r=t.hasQuery(),r?n.setRawQuery(t.getRawQuery()):r=t.hasFragment(),r&&n.setRawFragment(t.getRawFragment()),n}function c(e,t,n,r,i,s,o){this.scheme_=e,this.credentials_=t,this.domain_=n,this.port_=r,this.path_=i,this.query_=s,this.fragment_=o,this.paramCache_=null}function h(e){return"string"==typeof e&&e.length>0?e:null}var o=new RegExp("(/|^)(?:[^./][^/]*|\\.{2,}(?:[^./][^/]*)|\\.{3,}[^/]*)/\\.\\.(?:/|$)"),u=new RegExp(o),a=/^(?:\.\.\/)*(?:\.\.$)?/;c.prototype.toString=function(){var e=[];return null!==this.scheme_&&e.push(this.scheme_,":"),null!==this.domain_&&(e.push("//"),null!==this.credentials_&&e.push(this.credentials_,"@"),e.push(this.domain_),null!==this.port_&&e.push(":",this.port_.toString())),null!==this.path_&&e.push(this.path_),null!==this.query_&&e.push("?",this.query_),null!==this.fragment_&&e.push("#",this.fragment_),e.join("")},c.prototype.clone=function(){return new c(this.scheme_,this.credentials_,this.domain_,this.port_,this.path_,this.query_,this.fragment_)},c.prototype.getScheme=function(){return this.scheme_&&decodeURIComponent(this.scheme_).toLowerCase()},c.prototype.getRawScheme=function(){return this.scheme_},c.prototype.setScheme=function(e){return this.scheme_=r(e,d),this},c.prototype.setRawScheme=function(e){return this.scheme_=e?e:null,this},c.prototype.hasScheme=function(){return null!==this.scheme_},c.prototype.getCredentials=function(){return this.credentials_&&decodeURIComponent(this.credentials_)},c.prototype.getRawCredentials=function(){return this.credentials_},c.prototype.setCredentials=function(e){return this.credentials_=r(e,d),this},c.prototype.setRawCredentials=function(e){return this.credentials_=e?e:null,this},c.prototype.hasCredentials=function(){return null!==this.credentials_},c.prototype.getDomain=function(){return this.domain_&&decodeURIComponent(this.domain_)},c.prototype.getRawDomain=function(){return this.domain_},c.prototype.setDomain=function(e){return this.setRawDomain(e&&encodeURIComponent(e))},c.prototype.setRawDomain=function(e){return this.domain_=e?e:null,this.setRawPath(this.path_)},c.prototype.hasDomain=function(){return null!==this.domain_},c.prototype.getPort=function(){return this.port_&&decodeURIComponent(this.port_)},c.prototype.setPort=function(e){if(e){e=Number(e);if(e!==(e&65535))throw new Error("Bad port number "+e);this.port_=""+e}else this.port_=null;return this},c.prototype.hasPort=function(){return null!==this.port_},c.prototype.getPath=function(){return this.path_&&decodeURIComponent(this.path_)},c.prototype.getRawPath=function(){return this.path_},c.prototype.setPath=function(e){return this.setRawPath(r(e,v))},c.prototype.setRawPath=function(e){return e?(e=String(e),this.path_=!this.domain_||/^\//.test(e)?e:"/"+e):this.path_=null,this},c.prototype.hasPath=function(){return null!==this.path_},c.prototype.getQuery=function(){return this.query_&&decodeURIComponent(this.query_).replace(/\+/g," ")},c.prototype.getRawQuery=function(){return this.query_},c.prototype.setQuery=function(e){return this.paramCache_=null,this.query_=n(e),this},c.prototype.setRawQuery=function(e){return this.paramCache_=null,this.query_=e?e:null,this},c.prototype.hasQuery=function(){return null!==this.query_},c.prototype.setAllParameters=function(e){if(typeof e=="object"&&!(e instanceof Array)&&(e instanceof Object||Object.prototype.toString.call(e)!=="[object Array]")){var t=[],n=-1;for(var r in e){var i=e[r];"string"==typeof i&&(t[++n]=r,t[++n]=i)}e=t}this.paramCache_=null;var s=[],o="";for(var u=0;u<e.length;){var r=e[u++],i=e[u++];s.push(o,encodeURIComponent(r.toString())),o="&",i&&s.push("=",encodeURIComponent(i.toString()))}return this.query_=s.join(""),this},c.prototype.checkParameterCache_=function(){if(!this.paramCache_){var e=this.query_;if(!e)this.paramCache_=[];else{var t=e.split(/[&\?]/),n=[],r=-1;for(var i=0;i<t.length;++i){var s=t[i].match(/^([^=]*)(?:=(.*))?$/);n[++r]=decodeURIComponent(s[1]).replace(/\+/g," "),n[++r]=decodeURIComponent(s[2]||"").replace(/\+/g," ")}this.paramCache_=n}}},c.prototype.setParameterValues=function(e,t){typeof t=="string"&&(t=[t]),this.checkParameterCache_();var n=0,r=this.paramCache_,i=[];for(var s=0,o=0;s<r.length;s+=2)e===r[s]?n<t.length&&i.push(e,t[n++]):i.push(r[s],r[s+1]);while(n<t.length)i.push(e,t[n++]);return this.setAllParameters(i),this},c.prototype.removeParameter=function(e){return this.setParameterValues(e,[])},c.prototype.getAllParameters=function(){return this.checkParameterCache_(),this.paramCache_.slice(0,this.paramCache_.length)},c.prototype.getParameterValues=function(e){this.checkParameterCache_();var t=[];for(var n=0;n<this.paramCache_.length;n+=2)e===this.paramCache_[n]&&t.push(this.paramCache_[n+1]);return t},c.prototype.getParameterMap=function(e){this.checkParameterCache_();var t={};for(var n=0;n<this.paramCache_.length;n+=2){var r=this.paramCache_[n++],i=this.paramCache_[n++];r in t?t[r].push(i):t[r]=[i]}return t},c.prototype.getParameterValue=function(e){this.checkParameterCache_();for(var t=0;t<this.paramCache_.length;t+=2)if(e===this.paramCache_[t])return this.paramCache_[t+1];return null},c.prototype.getFragment=function(){return this.fragment_&&decodeURIComponent(this.fragment_)},c.prototype.getRawFragment=function(){return this.fragment_},c.prototype.setFragment=function(e){return this.fragment_=e?encodeURIComponent(e):null,this},c.prototype.setRawFragment=function(e){return this.fragment_=e?e:null,this},c.prototype.hasFragment=function(){return null!==this.fragment_};var p=new RegExp("^(?:([^:/?#]+):)?(?://(?:([^/?#]*)@)?([^/?#:@]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),d=/[#\/\?@]/g,v=/[\#\?]/g;return c.parse=e,c.create=t,c.resolve=l,c.collapse_dots=f,c.utils={mimeTypeOf:function(t){var n=e(t);return/\.html$/.test(n.getPath())?"text/html":"application/javascript"},resolve:function(t,n){return t?l(e(t),e(n)).toString():""+n}},c}(),t={};t.atype={NONE:0,URI:1,URI_FRAGMENT:11,SCRIPT:2,STYLE:3,HTML:12,ID:4,IDREF:5,IDREFS:6,GLOBAL_NAME:7,LOCAL_NAME:8,CLASSES:9,FRAME_TARGET:10,MEDIA_QUERY:13},t.ATTRIBS={"*::class":9,"*::dir":0,"*::draggable":0,"*::hidden":0,"*::id":4,"*::inert":0,"*::itemprop":0,"*::itemref":6,"*::itemscope":0,"*::lang":0,"*::onblur":2,"*::onchange":2,"*::onclick":2,"*::ondblclick":2,"*::onfocus":2,"*::onkeydown":2,"*::onkeypress":2,"*::onkeyup":2,"*::onload":2,"*::onmousedown":2,"*::onmousemove":2,"*::onmouseout":2,"*::onmouseover":2,"*::onmouseup":2,"*::onreset":2,"*::onscroll":2,"*::onselect":2,"*::onsubmit":2,"*::onunload":2,"*::spellcheck":0,"*::style":3,"*::title":0,"*::translate":0,"a::accesskey":0,"a::coords":0,"a::href":1,"a::hreflang":0,"a::name":7,"a::onblur":2,"a::onfocus":2,"a::shape":0,"a::tabindex":0,"a::target":10,"a::type":0,"area::accesskey":0,"area::alt":0,"area::coords":0,"area::href":1,"area::nohref":0,"area::onblur":2,"area::onfocus":2,"area::shape":0,"area::tabindex":0,"area::target":10,"audio::controls":0,"audio::loop":0,"audio::mediagroup":5,"audio::muted":0,"audio::preload":0,"bdo::dir":0,"blockquote::cite":1,"br::clear":0,"button::accesskey":0,"button::disabled":0,"button::name":8,"button::onblur":2,"button::onfocus":2,"button::tabindex":0,"button::type":0,"button::value":0,"canvas::height":0,"canvas::width":0,"caption::align":0,"col::align":0,"col::char":0,"col::charoff":0,"col::span":0,"col::valign":0,"col::width":0,"colgroup::align":0,"colgroup::char":0,"colgroup::charoff":0,"colgroup::span":0,"colgroup::valign":0,"colgroup::width":0,"command::checked":0,"command::command":5,"command::disabled":0,"command::icon":1,"command::label":0,"command::radiogroup":0,"command::type":0,"data::value":0,"del::cite":1,"del::datetime":0,"details::open":0,"dir::compact":0,"div::align":0,"dl::compact":0,"fieldset::disabled":0,"font::color":0,"font::face":0,"font::size":0,"form::accept":0,"form::action":1,"form::autocomplete":0,"form::enctype":0,"form::method":0,"form::name":7,"form::novalidate":0,"form::onreset":2,"form::onsubmit":2,"form::target":10,"h1::align":0,"h2::align":0,"h3::align":0,"h4::align":0,"h5::align":0,"h6::align":0,"hr::align":0,"hr::noshade":0,"hr::size":0,"hr::width":0,"iframe::align":0,"iframe::frameborder":0,"iframe::height":0,"iframe::marginheight":0,"iframe::marginwidth":0,"iframe::width":0,"img::align":0,"img::alt":0,"img::border":0,"img::height":0,"img::hspace":0,"img::ismap":0,"img::name":7,"img::src":1,"img::usemap":11,"img::vspace":0,"img::width":0,"input::accept":0,"input::accesskey":0,"input::align":0,"input::alt":0,"input::autocomplete":0,"input::checked":0,"input::disabled":0,"input::inputmode":0,"input::ismap":0,"input::list":5,"input::max":0,"input::maxlength":0,"input::min":0,"input::multiple":0,"input::name":8,"input::onblur":2,"input::onchange":2,"input::onfocus":2,"input::onselect":2,"input::placeholder":0,"input::readonly":0,"input::required":0,"input::size":0,"input::src":1,"input::step":0,"input::tabindex":0,"input::type":0,"input::usemap":11,"input::value":0,"ins::cite":1,"ins::datetime":0,"label::accesskey":0,"label::for":5,"label::onblur":2,"label::onfocus":2,"legend::accesskey":0,"legend::align":0,"li::type":0,"li::value":0,"map::name":7,"menu::compact":0,"menu::label":0,"menu::type":0,"meter::high":0,"meter::low":0,"meter::max":0,"meter::min":0,"meter::value":0,"ol::compact":0,"ol::reversed":0,"ol::start":0,"ol::type":0,"optgroup::disabled":0,"optgroup::label":0,"option::disabled":0,"option::label":0,"option::selected":0,"option::value":0,"output::for":6,"output::name":8,"p::align":0,"pre::width":0,"progress::max":0,"progress::min":0,"progress::value":0,"q::cite":1,"select::autocomplete":0,"select::disabled":0,"select::multiple":0,"select::name":8,"select::onblur":2,"select::onchange":2,"select::onfocus":2,"select::required":0,"select::size":0,"select::tabindex":0,"source::type":0,"table::align":0,"table::bgcolor":0,"table::border":0,"table::cellpadding":0,"table::cellspacing":0,"table::frame":0,"table::rules":0,"table::summary":0,"table::width":0,"tbody::align":0,"tbody::char":0,"tbody::charoff":0,"tbody::valign":0,"td::abbr":0,"td::align":0,"td::axis":0,"td::bgcolor":0,"td::char":0,"td::charoff":0,"td::colspan":0,"td::headers":6,"td::height":0,"td::nowrap":0,"td::rowspan":0,"td::scope":0,"td::valign":0,"td::width":0,"textarea::accesskey":0,"textarea::autocomplete":0,"textarea::cols":0,"textarea::disabled":0,"textarea::inputmode":0,"textarea::name":8,"textarea::onblur":2,"textarea::onchange":2,"textarea::onfocus":2,"textarea::onselect":2,"textarea::placeholder":0,"textarea::readonly":0,"textarea::required":0,"textarea::rows":0,"textarea::tabindex":0,"textarea::wrap":0,"tfoot::align":0,"tfoot::char":0,"tfoot::charoff":0,"tfoot::valign":0,"th::abbr":0,"th::align":0,"th::axis":0,"th::bgcolor":0,"th::char":0,"th::charoff":0,"th::colspan":0,"th::headers":6,"th::height":0,"th::nowrap":0,"th::rowspan":0,"th::scope":0,"th::valign":0,"th::width":0,"thead::align":0,"thead::char":0,"thead::charoff":0,"thead::valign":0,"tr::align":0,"tr::bgcolor":0,"tr::char":0,"tr::charoff":0,"tr::valign":0,"track::default":0,"track::kind":0,"track::label":0,"track::srclang":0,"ul::compact":0,"ul::type":0,"video::controls":0,"video::height":0,"video::loop":0,"video::mediagroup":5,"video::muted":0,"video::poster":1,"video::preload":0,"video::width":0},t.eflags={OPTIONAL_ENDTAG:1,EMPTY:2,CDATA:4,RCDATA:8,UNSAFE:16,FOLDABLE:32,SCRIPT:64,STYLE:128,VIRTUALIZED:256},t.ELEMENTS={a:0,abbr:0,acronym:0,address:0,applet:272,area:2,article:0,aside:0,audio:0,b:0,base:274,basefont:274,bdi:0,bdo:0,big:0,blockquote:0,body:305,br:2,button:0,canvas:0,caption:0,center:0,cite:0,code:0,col:2,colgroup:1,command:2,data:0,datalist:0,dd:1,del:0,details:0,dfn:0,dialog:272,dir:0,div:0,dl:0,dt:1,em:0,fieldset:0,figcaption:0,figure:0,font:0,footer:0,form:0,frame:274,frameset:272,h1:0,h2:0,h3:0,h4:0,h5:0,h6:0,head:305,header:0,hgroup:0,hr:2,html:305,i:0,iframe:4,img:2,input:2,ins:0,isindex:274,kbd:0,keygen:274,label:0,legend:0,li:1,link:274,map:0,mark:0,menu:0,meta:274,meter:0,nav:0,nobr:0,noembed:276,noframes:276,noscript:276,object:272,ol:0,optgroup:0,option:1,output:0,p:1,param:274,pre:0,progress:0,q:0,s:0,samp:0,script:84,section:0,select:0,small:0,source:2,span:0,strike:0,strong:0,style:148,sub:0,summary:0,sup:0,table:0,tbody:1,td:1,textarea:8,tfoot:1,th:1,thead:1,time:0,title:280,tr:1,track:2,tt:0,u:0,ul:0,"var":0,video:0,wbr:2},t.ELEMENT_DOM_INTERFACES={a:"HTMLAnchorElement",abbr:"HTMLElement",acronym:"HTMLElement",address:"HTMLElement",applet:"HTMLAppletElement",area:"HTMLAreaElement",article:"HTMLElement",aside:"HTMLElement",audio:"HTMLAudioElement",b:"HTMLElement",base:"HTMLBaseElement",basefont:"HTMLBaseFontElement",bdi:"HTMLElement",bdo:"HTMLElement",big:"HTMLElement",blockquote:"HTMLQuoteElement",body:"HTMLBodyElement",br:"HTMLBRElement",button:"HTMLButtonElement",canvas:"HTMLCanvasElement",caption:"HTMLTableCaptionElement",center:"HTMLElement",cite:"HTMLElement",code:"HTMLElement",col:"HTMLTableColElement",colgroup:"HTMLTableColElement",command:"HTMLCommandElement",data:"HTMLElement",datalist:"HTMLDataListElement",dd:"HTMLElement",del:"HTMLModElement",details:"HTMLDetailsElement",dfn:"HTMLElement",dialog:"HTMLDialogElement",dir:"HTMLDirectoryElement",div:"HTMLDivElement",dl:"HTMLDListElement",dt:"HTMLElement",em:"HTMLElement",fieldset:"HTMLFieldSetElement",figcaption:"HTMLElement",figure:"HTMLElement",font:"HTMLFontElement",footer:"HTMLElement",form:"HTMLFormElement",frame:"HTMLFrameElement",frameset:"HTMLFrameSetElement",h1:"HTMLHeadingElement",h2:"HTMLHeadingElement",h3:"HTMLHeadingElement",h4:"HTMLHeadingElement",h5:"HTMLHeadingElement",h6:"HTMLHeadingElement",head:"HTMLHeadElement",header:"HTMLElement",hgroup:"HTMLElement",hr:"HTMLHRElement",html:"HTMLHtmlElement",i:"HTMLElement",iframe:"HTMLIFrameElement",img:"HTMLImageElement",input:"HTMLInputElement",ins:"HTMLModElement",isindex:"HTMLUnknownElement",kbd:"HTMLElement",keygen:"HTMLKeygenElement",label:"HTMLLabelElement",legend:"HTMLLegendElement",li:"HTMLLIElement",link:"HTMLLinkElement",map:"HTMLMapElement",mark:"HTMLElement",menu:"HTMLMenuElement",meta:"HTMLMetaElement",meter:"HTMLMeterElement",nav:"HTMLElement",nobr:"HTMLElement",noembed:"HTMLElement",noframes:"HTMLElement",noscript:"HTMLElement",object:"HTMLObjectElement",ol:"HTMLOListElement",optgroup:"HTMLOptGroupElement",option:"HTMLOptionElement",output:"HTMLOutputElement",p:"HTMLParagraphElement",param:"HTMLParamElement",pre:"HTMLPreElement",progress:"HTMLProgressElement",q:"HTMLQuoteElement",s:"HTMLElement",samp:"HTMLElement",script:"HTMLScriptElement",section:"HTMLElement",select:"HTMLSelectElement",small:"HTMLElement",source:"HTMLSourceElement",span:"HTMLSpanElement",strike:"HTMLElement",strong:"HTMLElement",style:"HTMLStyleElement",sub:"HTMLElement",summary:"HTMLElement",sup:"HTMLElement",table:"HTMLTableElement",tbody:"HTMLTableSectionElement",td:"HTMLTableDataCellElement",textarea:"HTMLTextAreaElement",tfoot:"HTMLTableSectionElement",th:"HTMLTableHeaderCellElement",thead:"HTMLTableSectionElement",time:"HTMLTimeElement",title:"HTMLTitleElement",tr:"HTMLTableRowElement",track:"HTMLTrackElement",tt:"HTMLElement",u:"HTMLElement",ul:"HTMLUListElement","var":"HTMLElement",video:"HTMLVideoElement",wbr:"HTMLElement"},t.ueffects={NOT_LOADED:0,SAME_DOCUMENT:1,NEW_DOCUMENT:2},t.URIEFFECTS={"a::href":2,"area::href":2,"blockquote::cite":0,"command::icon":1,"del::cite":0,"form::action":2,"img::src":1,"input::src":1,"ins::cite":0,"q::cite":0,"video::poster":1},t.ltypes={UNSANDBOXED:2,SANDBOXED:1,DATA:0},t.LOADERTYPES={"a::href":2,"area::href":2,"blockquote::cite":2,"command::icon":1,"del::cite":2,"form::action":2,"img::src":1,"input::src":1,"ins::cite":2,"q::cite":2,"video::poster":1};var n=function(t){function l(e){if(s.hasOwnProperty(e))return s[e];var t=e.match(o);if(t)return String.fromCharCode(parseInt(t[1],10));if(!(t=e.match(u))){if(f&&a.test(e)){f.innerHTML="&"+e+";";var n=f.textContent;return s[e]=n,n}return"&"+e+";"}return String.fromCharCode(parseInt(t[1],16))}function c(e,t){return l(t)}function p(e){return e.replace(h,"")}function m(e){return e.replace(d,c)}function S(e){return(""+e).replace(g,"&amp;").replace(b,"&lt;").replace(w,"&gt;").replace(E,"&#34;")}function x(e){return e.replace(y,"&amp;$1").replace(b,"&lt;").replace(w,"&gt;")}function k(e){var t={cdata:e.cdata||e.cdata,comment:e.comment||e.comment,endDoc:e.endDoc||e.endDoc,endTag:e.endTag||e.endTag,pcdata:e.pcdata||e.pcdata,rcdata:e.rcdata||e.rcdata,startDoc:e.startDoc||e.startDoc,startTag:e.startTag||e.startTag};return function(e,n){return A(e,t,n)}}function A(e,t,n){var r,i,s,o=_(e),u={noMoreGT:!1,noMoreEndComments:!1};M(t,o,0,u,n)}function O(e,t,n,r,i){return function(){M(e,t,n,r,i)}}function M(e,n,r,i,s){try{e.startDoc&&r==0&&e.startDoc(s);var o,u,a;for(var f=r,l=n.length;f<l;){var c=n[f++],h=n[f];switch(c){case"&":v.test(h)?(e.pcdata&&e.pcdata("&"+h,s,L,O(e,n,f,i,s)),f++):e.pcdata&&e.pcdata("&amp;",s,L,O(e,n,f,i,s));break;case"</":(o=/^([-\w:]+)[^\'\"]*/.exec(h))?o[0].length===h.length&&n[f+1]===">"?(f+=2,a=o[1].toLowerCase(),e.endTag&&e.endTag(a,s,L,O(e,n,f,i,s))):f=D(n,f,e,s,L,i):e.pcdata&&e.pcdata("&lt;/",s,L,O(e,n,f,i,s));break;case"<":if(o=/^([-\w:]+)\s*\/?/.exec(h))if(o[0].length===h.length&&n[f+1]===">"){f+=2,a=o[1].toLowerCase(),e.startTag&&e.startTag(a,[],s,L,O(e,n,f,i,s));var p=t.ELEMENTS[a];if(p&C){var d={name:a,next:f,eflags:p};f=B(n,d,e,s,L,i)}}else f=P(n,f,e,s,L,i);else e.pcdata&&e.pcdata("&lt;",s,L,O(e,n,f,i,s));break;case"<!--":if(!i.noMoreEndComments){for(u=f+1;u<l;u++)if(n[u]===">"&&/--$/.test(n[u-1]))break;if(u<l){if(e.comment){var m=n.slice(f,u).join("");e.comment(m.substr(0,m.length-2),s,L,O(e,n,u+1,i,s))}f=u+1}else i.noMoreEndComments=!0}i.noMoreEndComments&&e.pcdata&&e.pcdata("&lt;!--",s,L,O(e,n,f,i,s));break;case"<!":if(!/^\w/.test(h))e.pcdata&&e.pcdata("&lt;!",s,L,O(e,n,f,i,s));else{if(!i.noMoreGT){for(u=f+1;u<l;u++)if(n[u]===">")break;u<l?f=u+1:i.noMoreGT=!0}i.noMoreGT&&e.pcdata&&e.pcdata("&lt;!",s,L,O(e,n,f,i,s))}break;case"<?":if(!i.noMoreGT){for(u=f+1;u<l;u++)if(n[u]===">")break;u<l?f=u+1:i.noMoreGT=!0}i.noMoreGT&&e.pcdata&&e.pcdata("&lt;?",s,L,O(e,n,f,i,s));break;case">":e.pcdata&&e.pcdata("&gt;",s,L,O(e,n,f,i,s));break;case"":break;default:e.pcdata&&e.pcdata(c,s,L,O(e,n,f,i,s))}}e.endDoc&&e.endDoc(s)}catch(g){if(g!==L)throw g}}function _(e){var t=/(<\/|<\!--|<[!?]|[&<>])/g;e+="";if(N)return e.split(t);var n=[],r=0,i;while((i=t.exec(e))!=null)n.push(e.substring(r,i.index)),n.push(i[0]),r=i.index+i[0].length;return n.push(e.substring(r)),n}function D(e,t,n,r,i,s){var o=j(e,t);return o?(n.endTag&&n.endTag(o.name,r,i,O(n,e,t,s,r)),o.next):e.length}function P(e,t,n,r,i,s){var o=j(e,t);return o?(n.startTag&&n.startTag(o.name,o.attrs,r,i,O(n,e,o.next,s,r)),o.eflags&C?B(e,o,n,r,i,s):o.next):e.length}function B(e,n,r,i,s,o){var u=e.length;H.hasOwnProperty(n.name)||(H[n.name]=new RegExp("^"+n.name+"(?:[\\s\\/]|$)","i"));var a=H[n.name],f=n.next,l=n.next+1;for(;l<u;l++)if(e[l-1]==="</"&&a.test(e[l]))break;l<u&&(l-=1);var c=e.slice(f,l).join("");if(n.eflags&t.eflags.CDATA)r.cdata&&r.cdata(c,i,s,O(r,e,l,o,i));else{if(!(n.eflags&t.eflags.RCDATA))throw new Error("bug");r.rcdata&&r.rcdata(x(c),i,s,O(r,e,l,o,i))}return l}function j(e,n){var r=/^([-\w:]+)/.exec(e[n]),i={};i.name=r[1].toLowerCase(),i.eflags=t.ELEMENTS[i.name];var s=e[n].substr(r[0].length),o=n+1,u=e.length;for(;o<u;o++){if(e[o]===">")break;s+=e[o]}if(u<=o)return void 0;var a=[];while(s!==""){r=T.exec(s);if(!r)s=s.replace(/^[\s\S][^a-z\s]*/,"");else{if(r[4]&&!r[5]||r[6]&&!r[7]){var f=r[4]||r[6],l=!1,c=[s,e[o++]];for(;o<u;o++){if(l){if(e[o]===">")break}else 0<=e[o].indexOf(f)&&(l=!0);c.push(e[o])}if(u<=o)break;s=c.join("");continue}var h=r[1].toLowerCase(),p=r[2]?F(r[3]):"";a.push(h,p),s=s.substr(r[0].length)}}return i.attrs=a,i.next=o+1,i}function F(e){var t=e.charCodeAt(0);if(t===34||t===39)e=e.substr(1,e.length-2);return m(p(e))}function I(e){var n,r,i=function(e,t){r||t.push(e)};return k({startDoc:function(e){n=[],r=!1},startTag:function(i,s,o){if(r)return;if(!t.ELEMENTS.hasOwnProperty(i))return;var u=t.ELEMENTS[i];if(u&t.eflags.FOLDABLE)return;var a=e(i,s);if(!a){r=!(u&t.eflags.EMPTY);return}if(typeof a!="object")throw new Error("tagPolicy did not return object (old API?)");if(!("attribs"in a))throw new Error("tagPolicy gave no attribs");s=a.attribs;var f,l;"tagName"in a?(l=a.tagName,f=t.ELEMENTS[l]):(l=i,f=u);if(u&t.eflags.OPTIONAL_ENDTAG){var c=n[n.length-1];c&&c.orig===i&&(c.rep!==l||i!==l)&&o.push("</",c.rep,">")}u&t.eflags.EMPTY||n.push({orig:i,rep:l}),o.push("<",l);for(var h=0,p=s.length;h<p;h+=2){var d=s[h],v=s[h+1];v!=null&&v!==void 0&&o.push(" ",d,'="',S(v),'"')}o.push(">"),u&t.eflags.EMPTY&&!(f&t.eflags.EMPTY)&&o.push("</",l,">")},endTag:function(e,i){if(r){r=!1;return}if(!t.ELEMENTS.hasOwnProperty(e))return;var s=t.ELEMENTS[e];if(!(s&(t.eflags.EMPTY|t.eflags.FOLDABLE))){var o;if(s&t.eflags.OPTIONAL_ENDTAG)for(o=n.length;--o>=0;){var u=n[o].orig;if(u===e)break;if(!(t.ELEMENTS[u]&t.eflags.OPTIONAL_ENDTAG))return}else for(o=n.length;--o>=0;)if(n[o].orig===e)break;if(o<0)return;for(var a=n.length;--a>o;){var f=n[a].rep;t.ELEMENTS[f]&t.eflags.OPTIONAL_ENDTAG||i.push("</",f,">")}o<n.length&&(e=n[o].rep),n.length=o,i.push("</",e,">")}},pcdata:i,rcdata:i,cdata:i,endDoc:function(e){for(;n.length;n.length--)e.push("</",n[n.length-1].rep,">")}})}function R(t,n,r,i,s){if(!s)return null;try{var o=e.parse(""+t);if(o)if(!o.hasScheme()||q.test(o.getScheme())){var u=s(o,n,r,i);return u?u.toString():null}}catch(a){return null}return null}function U(e,t,n,r,i){n||e(t+" removed",{change:"removed",tagName:t});if(r!==i){var s="changed";r&&!i?s="removed":!r&&i&&(s="added"),e(t+"."+n+" "+s,{change:s,tagName:t,attribName:n,oldValue:r,newValue:i})}}function z(e,t,n){var r;return r=t+"::"+n,e.hasOwnProperty(r)?e[r]:(r="*::"+n,e.hasOwnProperty(r)?e[r]:void 0)}function W(e,n){return z(t.ATTRIBS,e,n)}function X(e,n){return z(t.LOADERTYPES,e,n)}function V(e,n){return z(t.URIEFFECTS,e,n)}function $(e,s,o,u,a){for(var f=0;f<s.length;f+=2){var l=s[f],c=s[f+1],h=c,p=null,d;if((d=e+"::"+l,t.ATTRIBS.hasOwnProperty(d))||(d="*::"+l,t.ATTRIBS.hasOwnProperty(d)))p=t.ATTRIBS[d];if(p!=null)switch(p){case t.atype.NONE:break;case t.atype.SCRIPT:c=null,a&&U(a,e,l,h,c);break;case t.atype.STYLE:if("undefined"==typeof n){c=null,a&&U(a,e,l,h,c);break}var v=[];n(c,{declaration:function(e,n){var s=e.toLowerCase(),u=i[s];if(!u)return;r(s,u,n,o?function(e){return R(e,t.ueffects.SAME_DOCUMENT,t.ltypes.SANDBOXED,{TYPE:"CSS",CSS_PROP:s},o)}:null),v.push(e+": "+n.join(" "))}}),c=v.length>0?v.join(" ; "):null,a&&U(a,e,l,h,c);break;case t.atype.ID:case t.atype.IDREF:case t.atype.IDREFS:case t.atype.GLOBAL_NAME:case t.atype.LOCAL_NAME:case t.atype.CLASSES:c=u?u(c):c,a&&U(a,e,l,h,c);break;case t.atype.URI:c=R(c,V(e,l),X(e,l),{TYPE:"MARKUP",XML_ATTR:l,XML_TAG:e},o),a&&U(a,e,l,h,c);break;case t.atype.URI_FRAGMENT:c&&"#"===c.charAt(0)?(c=c.substring(1),c=u?u(c):c,c!=null&&c!==void 0&&(c="#"+c)):c=null,a&&U(a,e,l,h,c);break;default:c=null,a&&U(a,e,l,h,c)}else c=null,a&&U(a,e,l,h,c);s[f+1]=c}return s}function J(e,n,r){return function(i,s){if(!(t.ELEMENTS[i]&t.eflags.UNSAFE))return{attribs:$(i,s,e,n,r)};r&&U(r,i,undefined,undefined,undefined)}}function K(e,t){var n=[];return I(t)(e,n),n.join("")}function Q(e,t,n,r){var i=J(t,n,r);return K(e,i)}var n,r,i;"undefined"!=typeof window&&(n=window.parseCssDeclarations,r=window.sanitizeCssProperty,i=window.cssSchema);var s={lt:"<",LT:"<",gt:">",GT:">",amp:"&",AMP:"&",quot:'"',apos:"'",nbsp:" "},o=/^#(\d+)$/,u=/^#x([0-9A-Fa-f]+)$/,a=/^[A-Za-z][A-za-z0-9]+$/,f="undefined"!=typeof window&&window.document?window.document.createElement("textarea"):null,h=/\0/g,d=/&(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/g,v=/^(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/,g=/&/g,y=/&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi,b=/[<]/g,w=/>/g,E=/\"/g,T=new RegExp("^\\s*([-.:\\w]+)(?:\\s*(=)\\s*((\")[^\"]*(\"|$)|(')[^']*('|$)|(?=[a-z][-\\w]*\\s*=)|[^\"'\\s]*))?","i"),N="a,b".split(/(,)/).length===3,C=t.eflags.CDATA|t.eflags.RCDATA,L={},H={},q=/^(?:https?|mailto)$/i,G={};return G.escapeAttrib=G.escapeAttrib=S,G.makeHtmlSanitizer=G.makeHtmlSanitizer=I,G.makeSaxParser=G.makeSaxParser=k,G.makeTagPolicy=G.makeTagPolicy=J,G.normalizeRCData=G.normalizeRCData=x,G.sanitize=G.sanitize=Q,G.sanitizeAttribs=G.sanitizeAttribs=$,G.sanitizeWithPolicy=G.sanitizeWithPolicy=K,G.unescapeEntities=G.unescapeEntities=m,G}(t);return function(e){return n.sanitize(e,function(e){return e})}}();