(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,n){e.exports={bar1:"HamburgerMenu_bar1__trG7X",bar2:"HamburgerMenu_bar2__OnfyT",bar3:"HamburgerMenu_bar3__q0hTb",change:"HamburgerMenu_change__22EV5",HamburgerMenu:"HamburgerMenu_HamburgerMenu__3cD03"}},,,,,,function(e,t,n){e.exports={NavigationList:"NavigationList_NavigationList__zLEPQ",OpenNavBar:"NavigationList_OpenNavBar__lz6h1"}},function(e,t,n){e.exports={Section:"Section_Section__1y_qn",SectionBlock:"Section_SectionBlock__21YPK"}},function(e,t,n){e.exports={img:"AboutMe_img__GuFmr",article:"AboutMe_article__1vu4b"}},function(e,t,n){e.exports={About:"About_About__2ZGv-",justifyContentEvenly:"About_justifyContentEvenly__3jQ-G"}},,,function(e,t,n){e.exports={NavigationListItem:"NavigationListItem_NavigationListItem__1sIC7"}},function(e,t,n){e.exports={Header:"Header_Header__1oBYq"}},function(e,t,n){e.exports=n.p+"static/media/sjanasjncpascmxan.bf898866.jpg"},function(e,t,n){e.exports=n(23)},,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),i=n.n(c),l=(n(22),n(2)),o=n(3),u=n(5),s=n(4),m=n(6),h=n(13),_=n.n(h),b=function(e){return r.a.createElement("li",{className:_.a.NavigationListItem},r.a.createElement("a",{href:"/"},e.children))},E=n(7),f=n.n(E),v=function(e){var t=[f.a.NavigationList];e.show&&t.push(f.a.OpenNavBar);return r.a.createElement("ul",{className:t.join(" ")},["Home","About","Work","Contact"].map(function(e){return r.a.createElement(b,{key:e},e.toUpperCase())}))},g=n(14),d=n.n(g),p=function(e){return r.a.createElement("div",{className:"row",style:e.style},e.children)},N=n(1),j=n.n(N),w=function(e){var t=[j.a.bar1],n=[j.a.bar2],a=[j.a.bar3];return e.show&&(t.push(j.a.change),n.push(j.a.change),a.push(j.a.change)),r.a.createElement("div",{className:j.a.HamburgerMenu,onClick:e.clicked},r.a.createElement("div",{className:t.join(" ")}),r.a.createElement("div",{className:n.join(" ")}),r.a.createElement("div",{className:a.join(" ")}))},y={show:!1},k=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state=y,n.toggleHamburgerMenu=function(){n.setState(function(e){return{show:!e.show}})},n.hideNavBar=function(){n.state&&n.setState({show:!1})},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.hideNavBar)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.hideNavBar)}},{key:"render",value:function(){var e=[d.a.Header,"container-fluid"];return r.a.createElement("header",{className:e.join(" ")},r.a.createElement(p,null,r.a.createElement("nav",{className:"container"},r.a.createElement(p,{style:{flexDirection:"column"}},r.a.createElement(w,{show:this.state.show,clicked:this.toggleHamburgerMenu}),r.a.createElement(v,{show:this.state.show})))))}}]),t}(a.Component),H=n(8),O=n.n(H),A=function(e){return r.a.createElement("div",{className:"container"},e.children)},x=function(e){return r.a.createElement("section",{className:O.a.Section},r.a.createElement(A,null,r.a.createElement(p,{style:{flexDirection:"column"}},r.a.createElement("h1",null,e.title),r.a.createElement("div",{className:O.a.SectionBlock})),r.a.createElement(p,null,e.children)))},B=n(15),M=n.n(B),L=n(9),S=n.n(L),C=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:M.a,alt:"Abhinn Ankit",className:S.a.img}),r.a.createElement("article",{className:S.a.article},r.a.createElement("h3",null,"This is Abhinn Ankit!"),r.a.createElement("p",null,"He is a full-stack web developer from Boston.")))},I=n(10),z=n.n(I),D=function(e){var t=["col-xl-6","col-12",z.a.About,z.a.justifyContentEvenly];return r.a.createElement("div",{className:t.join(" ")},r.a.createElement(C,null))},F=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement(k,null),r.a.createElement("main",null,r.a.createElement(x,{title:"ABOUT"},r.a.createElement(D,null))))}}]),t}(a.Component),G=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null))};i.a.render(r.a.createElement(G,null),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.84bdbae4.chunk.js.map