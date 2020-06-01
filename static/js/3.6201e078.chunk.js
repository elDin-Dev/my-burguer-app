(this["webpackJsonpmy-burguer-app"]=this["webpackJsonpmy-burguer-app"]||[]).push([[3],{100:function(e,t,a){e.exports={ContactData:"ContactData_ContactData__BnrOU"}},104:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(5),l=a(7),o=a(6),i=a(8),u=a(0),c=a.n(u),d=a(54),s=a(34),p=a(99),m=a.n(p),h=function(e){return c.a.createElement("div",{className:m.a.CheckoutSummary},c.a.createElement("h1",null,"We hope it tastes well!"),c.a.createElement("div",{style:{width:"100%",height:"300px",margin:"auto"}},c.a.createElement(d.a,{ingredients:e.ingredients})),c.a.createElement(s.a,{buttonType:"Danger",clicked:e.onCheckoutCancelled},"CANCEL"),c.a.createElement(s.a,{buttonType:"Success",clicked:e.onCheckoutContinued},"CONTINUE"))},v=a(20),g=a(25),f=a(100),b=a.n(f),C=a(22),y=a(35),E=a(97),k=a(14),O=a(43),I=a(15),j=a(3),_=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your name"},value:"",validation:{required:!0},valid:!1,touched:!1},stree:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"Zip code"},value:"",validation:{required:!0,minLength:5,maxLength:5},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"your e-email"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}},formIsValid:!1},a.orderHandler=function(e){e.preventDefault();var t={};for(var n in a.state.orderForm)t[n]=a.state.orderForm[n].value;var r={ingredients:a.props.ings,price:a.props.price,orderData:t,userId:a.props.userId};a.props.onOrderBurger(r,a.props.token)},a.inputChangedHandler=function(e,t){var n=Object(j.b)(a.state.orderForm[t],{value:e.target.value,valid:Object(j.a)(e.target.value,a.state.orderForm[t].validation),touched:!0}),r=Object(j.b)(a.state.orderForm,Object(g.a)({},t,n));r[t]=n;var l=!0;for(var o in r)l=r[o].valid&&l;a.setState({orderForm:r,formIsValid:l})},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=[];for(var a in this.state.orderForm)t.push({id:a,config:this.state.orderForm[a]});var n=c.a.createElement("form",{onSubmit:this.orderHandler},t.map((function(t){return c.a.createElement(E.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(a){return e.inputChangedHandler(a,t.id)}})})),c.a.createElement(s.a,{buttonType:"Success",disabled:!this.state.formIsValid},"Order"));return this.props.loading&&(n=c.a.createElement(y.a,null)),c.a.createElement("div",{className:b.a.ContactData},c.a.createElement("h4",null,"Enter your contact data"),n)}}]),t}(u.Component),x=Object(k.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onOrderBurger:function(t,a){return e(I.g(t,a))}}}))(Object(O.a)(_,C.a));a.d(t,"Checkout",(function(){return T}));var T=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).checkoutCancelledHandler=function(){a.props.history.goBack()},a.checkoutContinuedHandler=function(){a.props.history.replace("/checkout/contact-data")},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=c.a.createElement(v.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?c.a.createElement(v.a,{to:"/"}):null;e=c.a.createElement("div",null,t,c.a.createElement(h,{onCheckoutContinued:this.checkoutContinuedHandler,onCheckoutCancelled:this.checkoutCancelledHandler,ingredients:this.props.ings}),c.a.createElement(v.b,{path:this.props.match.path+"/contact-data",component:x}))}return e}}]),t}(u.Component);t.default=Object(k.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,purchased:e.order.purchased}}))(T)},97:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(98),o=a.n(l);t.a=function(e){var t=null,a=[o.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&a.push(o.a.Invalid),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:o.a.InputElement},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:o.a.InputElement,value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=r.a.createElement("input",Object.assign({className:o.a.InputElement},e.elementConfig,{value:e.value,onChange:e.changed}))}return r.a.createElement("div",{className:o.a.Input},r.a.createElement("label",{className:o.a.Label},e.label),t)}},98:function(e,t,a){e.exports={Input:"Input_Input__nKw_p",Label:"Input_Label__HbnVy",InputElement:"Input_InputElement__365wv",Invalid:"Input_Invalid__xfX-3"}},99:function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__3x3S-"}}}]);
//# sourceMappingURL=3.6201e078.chunk.js.map