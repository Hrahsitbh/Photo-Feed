(this["webpackJsonpphoto-feed"]=this["webpackJsonpphoto-feed"]||[]).push([[0],{41:function(e,a,t){e.exports=t(71)},46:function(e,a,t){},64:function(e,a,t){},68:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(9),r=t.n(c),o=(t(46),t(20)),i=t(18),s=t(30),m=t.n(s).a.create({baseURL:"https://api.unsplash.com/photos",header:{Accept:"application/json","Content-Type":"application/json","X-Ratelimit-Limit":1e3},params:{client_id:"c1ViF9M7VYL3HB3O95EshJFGi2sxtVu0U5PTVaLKW3E"}}),d=(t(64),t(31)),u=t.n(d),p=t(32),h=t.n(p);var f=function(e){var a=e.imageSrc,t=e.altText,n=e.showImageModal,c=e.index;return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"rounded-lg overflow-hidden px-0",onClick:function(){return n(c)}},l.a.createElement("img",{src:a,alt:t,className:"img-fluid"}))))},E=t(33),v=t(34),b=t(40),g=t(39),N=t(74),w=(t(68),function(e){Object(b.a)(t,e);var a=Object(g.a)(t);function t(){return Object(E.a)(this,t),a.apply(this,arguments)}return Object(v.a)(t,[{key:"render",value:function(){var e=this.props,a=e.size,t=e.backdrop,n=e.hideHandler,c=e.showModal,r=e.headerTitle,o=e.keyboard,i=this.props.dialogClassName;i=i||"myModal";var s=o||!1;return l.a.createElement("div",{className:"static-modal"},l.a.createElement(N.a,{bsSize:a,backdrop:t,keyboard:s,show:c,dialogClassName:i,onHide:function(){return n()}},r&&l.a.createElement(N.a.Header,{closeButton:!0},l.a.createElement(N.a.Title,null,r)),l.a.createElement(N.a.Body,null,this.props.children)))}}]),t}(n.PureComponent)),k=1;var j=function(){var e,a,t=Object(n.useState)([]),c=Object(i.a)(t,2),r=c[0],s=c[1],d=Object(n.useState)(null),p=Object(i.a)(d,2),E=p[0],v=p[1],b=Object(n.useState)(!1),g=Object(i.a)(b,2),N=g[0],j=g[1],y=function(e){m.get("/",{params:{page:e}}).then((function(e){s([].concat(Object(o.a)(r),Object(o.a)(e.data)))})).catch((function(e){return console.log(e)}))},O=Object(n.useCallback)((function(e){v(e),j(!N)}),[N]),C=function(e){var a=0;"prev"===e&&E>0?a=E-1:"next"===e&&E<=r.length&&(a=E+1),v(a)};return Object(n.useEffect)((function(){y(k)}),[]),l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"feed-header"},"React Photo feed"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 margin-top-100"},l.a.createElement(u.a,{pageStart:0,loadMore:function(){y(k++)},hasMore:!0},l.a.createElement(h.a,{breakpointCols:{default:6,1200:3,992:3,768:2,576:1},className:"masonry-grid",columnClassName:"masonry-grid_column"},r.length&&r.map((function(e,a){return l.a.createElement(f,{key:a,index:a,imageSrc:e.urls.thumb,altText:e.alt_description,showImageModal:O})})))))),(N||E<0)&&l.a.createElement(w,{showModal:N,hideHandler:O,dialogClassName:"myModal",size:"lg",keyboard:!0},l.a.createElement("div",null,l.a.createElement("button",{"aria-label":"Close Modal Icon",className:"close",type:"button",onClick:O},l.a.createElement("span",null,"\xd7"))),l.a.createElement("div",{className:"display-flex"},l.a.createElement("div",{className:"nav-btns"},l.a.createElement("button",{onClick:function(){return C("prev")}},l.a.createElement("i",{class:"fa fa-arrow-left","aria-hidden":"true"}))),l.a.createElement("img",{src:null===(e=r[E])||void 0===e||null===(a=e.urls)||void 0===a?void 0:a.small,alt:"img"}),l.a.createElement("div",{className:"nav-btns"},l.a.createElement("button",{onClick:function(){return C("next")}},l.a.createElement("i",{class:"fa fa-arrow-right","aria-hidden":"true"})))))))};t(70),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.e2c71721.chunk.js.map