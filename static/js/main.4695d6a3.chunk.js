(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),l=a.n(s),i=(a(13),a(1)),c=a(2),u=a(5),o=a(4),h=a(3),m=(a(14),function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"handleClick",value:function(){console.log("hi")}},{key:"render",value:function(){var e=this;return r.a.createElement("button",{className:this.props.class,onClick:function(){return e.props.onClick(e.props.value)}},this.props.value)}}]),a}(r.a.Component)),p=(a(15),function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={value:""},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"display"},this.state.value)}}]),a}(r.a.Component)),d=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleButtonPress=n.handleButtonPress.bind(Object(u.a)(n)),n.displayElement=r.a.createRef(),n.prevNumber=null,n.prevOperation=null,n.curNumber="",n}return Object(c.a)(a,[{key:"handleButtonPress",value:function(e){isNaN(e)?["+","-","*","/"].includes(e)?(this.applyLastOperation(),this.prevNumber=this.curNumber,this.prevOperation=e,this.curNumber=""):"+/-"===e?this.curNumber=(-1*parseFloat(this.curNumber)).toString():"."===e?this.curNumber.includes(".")||(this.curNumber=this.curNumber.concat(".")):"del"===e?this.curNumber=this.curNumber.substring(0,this.curNumber.length-1):"C"===e?(this.curNumber="",this.prevOperation=null,this.prevNumber=null):"="===e&&this.applyLastOperation():this.curNumber=this.curNumber.concat(e),this.displayElement.current.setState({value:this.curNumber})}},{key:"applyLastOperation",value:function(){if(null!==this.prevNumber&&null!==this.prevOperation){switch(this.prevOperation){case"+":this.curNumber=(parseFloat(this.prevNumber)+parseFloat(this.curNumber)).toString();break;case"-":this.curNumber=(parseFloat(this.prevNumber)-parseFloat(this.curNumber)).toString();break;case"*":this.curNumber=(parseFloat(this.prevNumber)*parseFloat(this.curNumber)).toString();break;case"/":this.curNumber=(parseFloat(this.prevNumber)/parseFloat(this.curNumber)).toString();break;default:return}this.prevNumber=null,this.prevOperation=null}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(p,{ref:this.displayElement})),r.a.createElement("div",null,r.a.createElement(m,{class:"digit",value:"1",onClick:this.handleButtonPress}),r.a.createElement(m,{class:"digit",value:"2",onClick:this.handleButtonPress}),r.a.createElement(m,{class:"digit",value:"3",onClick:this.handleButtonPress}),r.a.createElement(m,{class:"action",value:"del",onClick:this.handleButtonPress}),r.a.createElement(m,{class:"action",value:"C",onClick:this.handleButtonPress})),r.a.createElement("div",null,r.a.createElement(m,{class:"digit",value:"4",onClick:this.handleButtonPress}),r.a.createElement(m,{class:"digit",value:"5",onClick:this.handleButtonPress}),r.a.createElement(m,{class:"digit",value:"6",onClick:this.handleButtonPress}),r.a.createElement(m,{class:"operation",value:"+",onClick:this.handleButtonPress}),r.a.createElement(m,{class:"operation",value:"-",onClick:this.handleButtonPress})),r.a.createElement("div",null,r.a.createElement(m,{class:"digit",value:"7",onClick:this.handleButtonPress}),r.a.createElement(m,{class:"digit",value:"8",onClick:this.handleButtonPress}),r.a.createElement(m,{class:"digit",value:"9",onClick:this.handleButtonPress}),r.a.createElement(m,{class:"operation",value:"*",onClick:this.handleButtonPress}),r.a.createElement(m,{class:"operation",value:"/",onClick:this.handleButtonPress})),r.a.createElement("div",null,r.a.createElement(m,{class:"digit",value:"+/-",onClick:this.handleButtonPress}),r.a.createElement(m,{class:"digit",value:"0",onClick:this.handleButtonPress}),r.a.createElement(m,{class:"digit",value:".",onClick:this.handleButtonPress}),r.a.createElement(m,{class:"equals",value:"=",onClick:this.handleButtonPress})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.4695d6a3.chunk.js.map