(this.webpackJsonpmaketest=this.webpackJsonpmaketest||[]).push([[0],{28:function(e,t,a){e.exports=a(54)},33:function(e,t,a){},34:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),o=(a(33),a(34),a(21)),s=a(7),u=a.n(s),i=a(22),m=a(2),d=a(3),p=a(5),b=a(4),f=a(23),h=a.n(f),E=(a(52),function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.prop,t=e.stateDt,a=(e.stateTime,e.seq,e.accDefRate),n=(e.accExamCnt,e.accExamCompCnt,e.clearCnt),c=e.createDt,l=e.deathCnt,o=e.decideCnt,s=e.examCnt,u=(e.resultNegCnt,e.updateDt,e.careCnt),i=(t+"").substring(0,4),m="0"===(t+"").substring(4,6)[0]?(t+"").substring(5,6):(t+"").substring(4,6),d=(t+"").substring(6);return r.a.createElement("div",{className:"col-md-6 col-lg-4 d-flex align-items-stretch container-fluid  justify-content-center "},r.a.createElement("div",{className:"card mb-3 d-flex"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},i,"\ub144 ",m,"\uc6d4 ",d,"\uc77c"),r.a.createElement("table",{className:"table table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"\ud655\uc9c4\uc790 \uc218 "),r.a.createElement("th",{scope:"col"},"\uaca9\ub9ac\ud574\uc81c \uc218 "),r.a.createElement("th",{scope:"col"},"\uac80\uc0ac\uc9c4\ud589 \uc218"),r.a.createElement("th",{scope:"col"},"\uce58\ub8cc\uc911\uc778 \ud658\uc790 \uc218"),r.a.createElement("th",{scope:"col"},"\uc0ac\ub9dd\uc790 \uc218"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,o,"\uba85"),r.a.createElement("td",null,n,"\uba85"),r.a.createElement("td",null,s,"\uba85"),r.a.createElement("td",null,l,"\uba85"),r.a.createElement("td",null,u,"\uba85")))),r.a.createElement("p",{className:"card-text"},"\ub204\uc801 \ud655\uc9c4\ub960 : ",Math.round(a,3),"%"),r.a.createElement("p",{className:"card-text"},"\uac31\uc2e0 \uc2dc\uac01 : ",c))))}}]),a}(r.a.Component)),v=a(24);a.p;function y(){var e=Object(o.a)(["\n            display: flex;\n            color: black;\n            flex-wrap: wrap;\n            background-color: skyblue;\n            justify-content: space-between;\n        "]);return y=function(){return e},e}var g=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:null},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/search");case 3:if(t=e.sent,this.state.data){e.next=7;break}return console.log(t.data.data),e.abrupt("return",this.setState({data:t.data.data}));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.setState({data:null})}},{key:"render",value:function(){var e=v.a.div(y());return r.a.createElement(e,{className:"container-fluid d-flex justify-content-center"},this.state.data?this.state.data?this.state.data.map((function(e,t){return r.a.createElement(E,{prop:e,key:t})})):r.a.createElement("em",null,"Loading..."):r.a.createElement("em",null,"Wait!"))}}]),a}(r.a.Component),k=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-primary justify-content-md-center"},r.a.createElement("span",{className:"navbar-brand mb-0 h1"},"Corona Infomation"))}}]),a}(r.a.Component);var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null),r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.2cc54304.chunk.js.map