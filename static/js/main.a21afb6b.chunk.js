(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,a){e.exports={bar1:"HamburgerMenu_bar1__trG7X",bar2:"HamburgerMenu_bar2__OnfyT",bar3:"HamburgerMenu_bar3__q0hTb",change:"HamburgerMenu_change__22EV5",HamburgerMenu:"HamburgerMenu_HamburgerMenu__3cD03"}},function(e,t,a){e.exports={Contact:"Contact_Contact__H8sQW",ContactFields:"Contact_ContactFields__QXphq",btn:"Contact_btn__6ZXjM",textarea:"Contact_textarea__29N4-"}},,function(e,t,a){e.exports={Skill:"Skill_Skill__29n_T",SkillAttr:"Skill_SkillAttr__2E6sP",SkillProgress:"Skill_SkillProgress__1HtV_",SkillProgressBar:"Skill_SkillProgressBar__1yhto"}},function(e,t,a){e.exports={Footer:"Footer_Footer__3zees",FooterWrapper:"Footer_FooterWrapper__1BDEu",FooterIconsWrapper:"Footer_FooterIconsWrapper__1LY6s",FooterAbout:"Footer_FooterAbout__1Oq_k"}},,,,,,function(e,t,a){e.exports={img:"AboutMe_img__GuFmr",article:"AboutMe_article__1vu4b",Figure:"AboutMe_Figure__1SSvt"}},function(e,t,a){e.exports={SocialLinks:"SocialLinks_SocialLinks__1NViN",IconsBox:"SocialLinks_IconsBox__3dMVa",Icons:"SocialLinks_Icons__2Q3DD"}},,function(e,t,a){e.exports={NavigationList:"NavigationList_NavigationList__zLEPQ",OpenNavBar:"NavigationList_OpenNavBar__lz6h1"}},function(e,t,a){e.exports={Section:"Section_Section__1y_qn",SectionBlock:"Section_SectionBlock__21YPK"}},function(e,t,a){e.exports={AboutSpace:"About_AboutSpace__2OpLB",AboutSkill:"About_AboutSkill__3n2J5"}},,,,function(e,t,a){e.exports={NavigationListItem:"NavigationListItem_NavigationListItem__1sIC7"}},function(e,t,a){e.exports={Header:"Header_Header__1oBYq"}},function(e,t,a){e.exports=a.p+"static/media/sjanasjncpascmxan.60638dcb.jpg"},function(e,t,a){e.exports={Skills:"Skills_Skills__ov1KH"}},,function(e,t,a){e.exports=a(37)},,,,,function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=a.n(l),o=(a(31),a(7)),i=a(8),s=a(10),m=a(9),u=a(11),_=a(21),p=a.n(_),E=function(e){return r.a.createElement("li",{className:p.a.NavigationListItem},r.a.createElement("a",{href:"/"},e.children))},b=a(15),h=a.n(b),d=function(e){var t=[h.a.NavigationList,"header-bg-color"];e.show&&t.push(h.a.OpenNavBar);return r.a.createElement("ul",{className:t.join(" ")},["Home","About","Work","Contact"].map(function(e){return r.a.createElement(E,{key:e},e.toUpperCase())}))},g=a(22),k=a.n(g),v=function(e){return r.a.createElement("div",{className:"row",style:e.style},e.children)},N=a(2),f=a.n(N),S=function(e){var t=[f.a.bar1],a=[f.a.bar2],n=[f.a.bar3];return e.show&&(t.push(f.a.change),a.push(f.a.change),n.push(f.a.change)),r.a.createElement("div",{className:f.a.HamburgerMenu,onClick:e.clicked},r.a.createElement("div",{className:t.join(" ")}),r.a.createElement("div",{className:a.join(" ")}),r.a.createElement("div",{className:n.join(" ")}))},w={show:!1},y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state=w,a.toggleHamburgerMenu=function(){a.setState(function(e){return{show:!e.show}})},a.hideNavBar=function(){a.state&&a.setState({show:!1})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.hideNavBar)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.hideNavBar)}},{key:"render",value:function(){var e=[k.a.Header,"container-fluid","header-bg-color"];return r.a.createElement("header",{className:e.join(" ")},r.a.createElement(v,null,r.a.createElement("nav",{className:"container"},r.a.createElement(v,{style:{flexDirection:"column"}},r.a.createElement(S,{show:this.state.show,clicked:this.toggleHamburgerMenu}),r.a.createElement(d,{show:this.state.show})))))}}]),t}(n.Component),F=a(16),j=a.n(F),x=function(e){return r.a.createElement("div",{className:"container"},e.children)},A=function(e){return r.a.createElement("section",{className:j.a.Section,style:e.style},r.a.createElement(x,null,r.a.createElement(v,{style:{flexDirection:"column"}},r.a.createElement("h1",null,e.title.toUpperCase()),r.a.createElement("div",{className:j.a.SectionBlock})),r.a.createElement(v,null,e.children)))},B=a(23),C=a.n(B),I=a(12),H=a.n(I),L=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("figure",{className:H.a.Figure},r.a.createElement("img",{src:C.a,alt:"Abhinn Ankit",className:H.a.img})),r.a.createElement("article",{className:H.a.article},r.a.createElement("h2",null,"ABHINN ANKIT"),r.a.createElement("h3",null,"Full-stack web developer"),r.a.createElement("p",null,"I'm a full-stack web developer from Boston."),r.a.createElement("p",null,"I strive to create visually appealing sites with intuitive design and clear navigation.")))},O=a(17),M=a.n(O),P=a(5),W=a.n(P),T=function(e){return r.a.createElement("div",{className:W.a.Skill},r.a.createElement("div",{className:W.a.SkillProgress},r.a.createElement("div",{className:W.a.SkillProgressBar,style:{width:e.percent+"%"}})),r.a.createElement("div",{className:W.a.SkillAttr,style:{width:e.percent+"%"}},r.a.createElement("strong",null,e.skill.toUpperCase()),r.a.createElement("span",null,e.percent)))},D=a(24),q=a.n(D),z=function(){var e={java:80,javascript:80,typescript:85,html:95,css:90,scss:85,react:60,angular:75,"spring boot":65,express:65};return r.a.createElement("div",{className:q.a.Skills},r.a.createElement("h2",null,"TECHNOLOGIES"),Object.keys(e).map(function(t){return r.a.createElement(T,{key:t,skill:t,percent:e[t]})}))},U=function(e){var t=["col-xl-6","col-lg-10","col-12",M.a.AboutSpace],a=["col-xl-6","col-lg-10","col-12",M.a.AboutSkill];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.join(" ")},r.a.createElement(L,null)),r.a.createElement("div",{className:a.join(" ")},r.a.createElement(z,null)))},K=a(6),Q=a.n(K),V=a(13),Y=a.n(V),G=a(25),J=function(e){return r.a.createElement("div",{className:Y.a.SocialLinks},r.a.createElement("a",{href:e.link,className:Y.a.IconsBox,rel:"noopener noreferrer",target:"_blank"},r.a.createElement(G.a,{icon:e.icon,className:Y.a.Icons})))},X=a(14),Z=function(){return r.a.createElement("footer",{className:Q.a.FooterWrapper},r.a.createElement(x,null,r.a.createElement(v,{style:{position:"relative"}},r.a.createElement("div",{className:Q.a.Footer},r.a.createElement("div",{className:Q.a.FooterIconsWrapper},r.a.createElement(J,{icon:X.b,link:"https://www.linkedin.com/in/abhinn-ankit/"}),r.a.createElement(J,{icon:X.a,link:"https://github.com/abhinn-ankit"}),r.a.createElement(J,{icon:X.c,link:"https://stackoverflow.com/users/8616210/abhinnankit"})),r.a.createElement("div",{className:Q.a.FooterAbout},"\xa9 ABHINN ANKIT 2019")))))},R=a(3),$=a.n(R),ee=function(e){var t=[$.a.textarea,$.a.ContactFields],a=[$.a.ContactFields];return r.a.createElement("form",{action:"https://formspree.io/abhinnankit@outlook.com",method:"POST",className:$.a.Contact},r.a.createElement("input",{className:a.join(" "),type:"text",name:"name",placeholder:"Name"}),r.a.createElement("input",{className:a.join(" "),type:"email",name:"email",placeholder:"Email"}),r.a.createElement("textarea",{className:t.join(" "),name:"message",placeholder:"Your message"}),r.a.createElement("button",{className:$.a.btn,type:"submit"},"Submit"))},te=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(y,null),r.a.createElement("main",null,r.a.createElement(A,{title:"ABOUT",style:{backgroundColor:"rgba(250,250,250, 0.8)"}},r.a.createElement(U,null)),r.a.createElement(A,{title:"Projects"},"a"),r.a.createElement(A,{title:"contact",style:{backgroundColor:"rgba(250,250,250, 0.8)"}},r.a.createElement(ee,null))),r.a.createElement(Z,null))}}]),t}(n.Component),ae=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(te,null))};c.a.render(r.a.createElement(ae,null),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.a21afb6b.chunk.js.map