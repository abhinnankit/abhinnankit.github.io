(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,a){e.exports={bar1:"HamburgerMenu_bar1__trG7X",bar2:"HamburgerMenu_bar2__OnfyT",bar3:"HamburgerMenu_bar3__q0hTb",change:"HamburgerMenu_change__22EV5",HamburgerMenu:"HamburgerMenu_HamburgerMenu__3cD03"}},function(e,t,a){e.exports={Contact:"Contact_Contact__H8sQW",ContactFields:"Contact_ContactFields__QXphq",btn:"Contact_btn__6ZXjM",textarea:"Contact_textarea__29N4-"}},,function(e,t,a){e.exports={Skill:"Skill_Skill__29n_T",SkillAttr:"Skill_SkillAttr__2E6sP",SkillProgress:"Skill_SkillProgress__1HtV_",SkillProgressBar:"Skill_SkillProgressBar__1yhto"}},function(e,t,a){e.exports={Footer:"Footer_Footer__3zees",FooterWrapper:"Footer_FooterWrapper__1BDEu",FooterIconsWrapper:"Footer_FooterIconsWrapper__1LY6s",FooterAbout:"Footer_FooterAbout__1Oq_k"}},function(e,t,a){e.exports={Project:"Project_Project__2H2qk",ProjectImg:"Project_ProjectImg__1PVAe",ProjectFlexStart:"Project_ProjectFlexStart__2ynbk",ProjectFlexEnd:"Project_ProjectFlexEnd__3c1mK"}},,,,,,function(e,t,a){e.exports={Header:"Header_Header__ZJB9K",HeaderSticky:"Header_HeaderSticky__3mHQX",HeaderAnimate:"Header_HeaderAnimate__2lAeN",dropIn:"Header_dropIn__BJOMa"}},function(e,t,a){e.exports={img:"AboutMe_img__GuFmr",article:"AboutMe_article__1vu4b",Figure:"AboutMe_Figure__1SSvt"}},function(e,t,a){e.exports={SocialLinks:"SocialLinks_SocialLinks__1NViN",IconsBox:"SocialLinks_IconsBox__3dMVa",Icons:"SocialLinks_Icons__2Q3DD"}},,function(e,t,a){e.exports={NavigationListItem:"NavigationListItem_NavigationListItem__bdMR1",active:"NavigationListItem_active__bo60Z"}},function(e,t,a){e.exports={NavigationList:"NavigationList_NavigationList___jV6M",OpenNavBar:"NavigationList_OpenNavBar__3bL8B"}},function(e,t,a){e.exports={Section:"Section_Section__1y_qn",SectionUnderline:"Section_SectionUnderline__2MHvh"}},function(e,t,a){e.exports={AboutSpace:"About_AboutSpace__2OpLB",AboutSkill:"About_AboutSkill__3n2J5"}},,function(e,t,a){e.exports={Projects:"Projects_Projects__3BQ2t",More:"Projects_More__36s-p"}},,,function(e,t,a){e.exports=a.p+"static/media/me.60638dcb.jpg"},function(e,t,a){e.exports={Skills:"Skills_Skills__ov1KH"}},,function(e,t,a){e.exports=a.p+"static/media/1-min.5d82bde0.png"},function(e,t,a){e.exports=a.p+"static/media/1-min.63aa403b.png"},function(e,t,a){e.exports=a(41)},,,,,function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),o=a.n(c),i=(a(35),a(8)),l=a(9),s=a(11),m=a(10),u=a(12),d=a(17),f=a.n(d),p=function(e){return r.a.createElement("li",{className:f.a.NavigationListItem},r.a.createElement("span",{className:e.markActive?f.a.active:null,onClick:e.clicked},e.children))},_=a(18),h=a.n(_),k=function(e){var t=[h.a.NavigationList,"header-bg-color"];e.show&&t.push(h.a.OpenNavBar);return r.a.createElement("ul",{className:t.join(" ")},["Home","About","Work","Contact"].map(function(t,a){return r.a.createElement(p,{key:t,markActive:e.markActive[a],clicked:function(){return e.clicked(t)}},t.toUpperCase())}))},v=a(13),g=a.n(v),E=function(e){return r.a.createElement("div",{className:"row",style:e.style},e.children)},b=a(2),w=a.n(b),N=function(e){var t=[w.a.bar1],a=[w.a.bar2],n=[w.a.bar3];return e.show&&(t.push(w.a.change),a.push(w.a.change),n.push(w.a.change)),r.a.createElement("div",{className:w.a.HamburgerMenu,onClick:e.clicked},r.a.createElement("div",{className:t.join(" ")}),r.a.createElement("div",{className:a.join(" ")}),r.a.createElement("div",{className:n.join(" ")}))},S={show:!1,sticky:!1},j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state=S,a.height=0,a.headerRef=r.a.createRef(),a.toggleHamburgerMenu=function(){a.setState(function(e){return{show:!e.show}})},a.hideNavBar=function(){a.state&&a.setState({show:!1})},a.isMobile=function(){return window.matchMedia("only screen and (max-width: 760px)").matches},a.addStickyClass=function(){!a.state.sticky&&window.pageYOffset>=a.height+a.headerRef.current.offsetHeight-10?a.setState({sticky:!0}):a.state.sticky&&window.pageYOffset<=a.height&&a.setState({sticky:!1})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.height=this.headerRef.current.offsetTop,window.addEventListener("resize",this.hideNavBar),window.addEventListener("scroll",this.addStickyClass)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.hideNavBar),window.removeEventListener("scroll",this.addStickyClass)}},{key:"render",value:function(){console.log(this.props);var e=[g.a.Header,"container-fluid","header-bg-color"];return this.state.sticky&&(e.push(g.a.HeaderSticky),this.isMobile()||e.push(g.a.HeaderAnimate)),r.a.createElement("header",{ref:this.headerRef,className:e.join(" ")},r.a.createElement(E,null,r.a.createElement("nav",{className:"container"},r.a.createElement(E,{style:{flexDirection:"column"}},r.a.createElement(N,{show:this.state.show,clicked:this.toggleHamburgerMenu}),r.a.createElement(k,{markActive:this.props.markActive,show:this.state.show,clicked:this.props.clicked})))))}}]),t}(n.Component),A=a(19),y=a.n(A),x=function(e){return r.a.createElement("div",{className:"container"},e.children)},F=r.a.forwardRef(function(e,t){return r.a.createElement("section",{ref:t,className:y.a.Section,style:e.style},r.a.createElement(x,null,r.a.createElement(E,{style:{flexDirection:"column"}},r.a.createElement("h1",null,e.title.toUpperCase()),r.a.createElement("div",{className:y.a.SectionUnderline})),r.a.createElement(E,null,e.children)))}),H=a(25),C=a.n(H),R=a(14),P=a.n(R),O=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("figure",{className:P.a.Figure},r.a.createElement("img",{src:C.a,alt:"Abhinn Ankit",className:P.a.img})),r.a.createElement("article",{className:P.a.article},r.a.createElement("h2",null,"ABHINN ANKIT"),r.a.createElement("h3",null,"Full-stack web developer"),r.a.createElement("p",null,"A versatile developer from Boston."),r.a.createElement("p",null,"I strive to create visually appealing sites with intuitive design and clear navigation.")))},M=a(20),L=a.n(M),I=a(5),B=a.n(I),T=function(e){return r.a.createElement("div",{className:B.a.Skill},r.a.createElement("div",{className:B.a.SkillProgress},r.a.createElement("div",{className:B.a.SkillProgressBar,style:{width:e.percent+"%"}})),r.a.createElement("div",{className:B.a.SkillAttr,style:{width:e.percent+"%"}},r.a.createElement("strong",null,e.skill.toUpperCase()),r.a.createElement("span",null,e.percent)))},U=a(26),W=a.n(U),Y=function(){var e={java:80,javascript:80,typescript:85,html:95,css:90,scss:85,react:80,angular:85,"spring boot":65,express:65,aws:70,circleci:65};return r.a.createElement("div",{className:W.a.Skills},r.a.createElement("h2",null,"TECHNOLOGIES"),Object.keys(e).map(function(t){return r.a.createElement(T,{key:t,skill:t,percent:e[t]})}))},D=function(e){var t=["col-lg-10 col-xl-10 col-12",L.a.AboutSpace],a=["col-lg-10 col-xl-10 col-12",L.a.AboutSkill];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.join(" ")},r.a.createElement(O,null)),r.a.createElement("div",{className:a.join(" ")},r.a.createElement(Y,null)))},q=a(6),V=a.n(q),J=a(15),K=a.n(J),Q=a(27),X=function(e){return r.a.createElement("div",{className:K.a.SocialLinks},r.a.createElement("a",{href:e.link,className:K.a.IconsBox,rel:"noopener noreferrer",target:"_blank"},r.a.createElement(Q.a,{icon:e.icon,className:K.a.Icons})))},z=a(16),G=function(){return r.a.createElement("footer",{className:V.a.FooterWrapper},r.a.createElement(x,null,r.a.createElement(E,{style:{position:"relative"}},r.a.createElement("div",{className:V.a.Footer},r.a.createElement("div",{className:V.a.FooterIconsWrapper},r.a.createElement(X,{icon:z.b,link:"https://www.linkedin.com/in/abhinn-ankit/"}),r.a.createElement(X,{icon:z.a,link:"https://github.com/abhinn-ankit"}),r.a.createElement(X,{icon:z.c,link:"https://stackoverflow.com/users/8616210/abhinnankit"})),r.a.createElement("div",{className:V.a.FooterAbout},"\xa9 ABHINN ANKIT 2019")))))},Z=a(3),$=a.n(Z),ee=function(e){var t=[$.a.textarea,$.a.ContactFields],a=[$.a.ContactFields];return r.a.createElement("form",{action:"https://formspree.io/abhinnankit@outlook.com",method:"POST",className:$.a.Contact},r.a.createElement("input",{className:a.join(" "),type:"text",name:"name",placeholder:"Name",required:!0}),r.a.createElement("input",{className:a.join(" "),type:"email",name:"email",placeholder:"Email",required:!0}),r.a.createElement("textarea",{className:t.join(" "),name:"message",placeholder:"Your message"}),r.a.createElement("button",{className:$.a.btn,type:"submit"},"Submit"))},te=a(7),ae=a.n(te),ne=function(e){var t=["col-lg-6",ae.a.Project];return e.justifyContentStart?t.push(ae.a.ProjectFlexStart):t.push(ae.a.ProjectFlexEnd),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.join(" ")},r.a.createElement("img",{src:e.imgUrl,alt:"Shopping site",className:ae.a.ProjectImg})))},re=a(22),ce=a.n(re),oe=a(28),ie=a.n(oe),le=a(29),se=a.n(le),me=function(){var e=[ce.a.More,"col-12"];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:ce.a.Projects},r.a.createElement(ne,{imgUrl:ie.a,justifyContentStart:!1}),r.a.createElement(ne,{imgUrl:se.a,justifyContentStart:!0})),r.a.createElement("div",{className:e.join(" ")},"More projects on\xa0",r.a.createElement("a",{href:"https://github.com/abhinn-ankit?tab=repositories",rel:"noopener noreferrer",target:"_blank"},"github"),"."))},ue=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={markActive:[!1,!1,!1,!1]},a.aboutRef=void 0,a.workRef=void 0,a.contactRef=void 0,a.headerRef=void 0,a.linkClicked=function(e){switch(e.toLowerCase()){case"about":window.scrollTo(0,a.aboutRef.current.offsetTop+57);break;case"work":window.scrollTo(0,a.workRef.current.offsetTop-54);break;case"contact":window.scrollTo(0,a.contactRef.current.offsetTop-54);break;default:window.scrollTo(0,0)}},a.addClasses=function(){var e=a.headerRef.current.height+a.headerRef.current.headerRef.current.offsetHeight,t=e+a.aboutRef.current.offsetHeight-a.headerRef.current.height-111,n=t+a.workRef.current.offsetHeight;console.log(window.pageYOffset+" "+e+" "+t+" "+n),window.pageYOffset>=n?a.state.markActive[3]||a.setState({markActive:a.state.markActive.map(function(e,t){return 3===t})}):window.pageYOffset>=t?a.state.markActive[2]||a.setState({markActive:a.state.markActive.map(function(e,t){return 2===t})}):window.pageYOffset>=e?a.state.markActive[1]||a.setState({markActive:a.state.markActive.map(function(e,t){return 1===t})}):window.pageYOffset>=0&&(a.state.markActive[0]||a.setState({markActive:a.state.markActive.map(function(e,t){return 0===t})}))},a.aboutRef=r.a.createRef(),a.workRef=r.a.createRef(),a.contactRef=r.a.createRef(),a.headerRef=r.a.createRef(),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.addClasses)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.addClasses)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{ref:this.headerRef,clicked:this.linkClicked,markActive:this.state.markActive}),r.a.createElement("main",null,r.a.createElement(F,{ref:this.aboutRef,title:"ABOUT",style:{backgroundColor:"#f0f0f0",paddingTop:"10em"}},r.a.createElement(D,null)),r.a.createElement(F,{ref:this.workRef,title:"Projects",style:{backgroundColor:"#e5e0da"}},r.a.createElement(me,null)),r.a.createElement(F,{ref:this.contactRef,title:"contact",style:{backgroundColor:"#f0f0f0"}},r.a.createElement(ee,null))),r.a.createElement(G,null))}}]),t}(n.Component),de=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,null))};o.a.render(r.a.createElement(de,null),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.9b50208b.chunk.js.map