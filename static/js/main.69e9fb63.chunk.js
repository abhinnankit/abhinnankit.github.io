(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,a){e.exports={Contact:"Contact_Contact__H8sQW",ContactFields:"Contact_ContactFields__QXphq",btn:"Contact_btn__6ZXjM",textarea:"Contact_textarea__29N4-",AnimateForm:"Contact_AnimateForm__2zdPP",popInOut:"Contact_popInOut__1Q-7b",Delay1:"Contact_Delay1__15k1a",Delay2:"Contact_Delay2__uqevm",Delay3:"Contact_Delay3__1m7j7"}},function(e,t,a){e.exports={Section:"Section_Section__1y_qn",h1:"Section_h1__3J_nj",AnimateZoomIn:"Section_AnimateZoomIn__13xvI",zoomIn:"Section_zoomIn__6zdgI",AnimateUnderline:"Section_AnimateUnderline__296AF",AnimateSlideInLeft:"Section_AnimateSlideInLeft__bGSnR",slideInLeft:"Section_slideInLeft__1d42W",AnimateSlideInRight:"Section_AnimateSlideInRight__NTqHr",slideInRight:"Section_slideInRight__3DlCF",SectionUnderline:"Section_SectionUnderline__2MHvh"}},function(e,t,a){e.exports={Skill:"Skill_Skill__29n_T",SkillAttr:"Skill_SkillAttr__2E6sP",SkillNameVisible:"Skill_SkillNameVisible__1swzW",SkillValueVisible:"Skill_SkillValueVisible__2ygZe",SkillProgress:"Skill_SkillProgress__1HtV_",AnimateSkillProgressSpreadOut:"Skill_AnimateSkillProgressSpreadOut__3_fkX",AnimateSkillProgressBar:"Skill_AnimateSkillProgressBar__3nDse",SkillProgressBar:"Skill_SkillProgressBar__1yhto"}},function(e,t,a){e.exports={bar1:"HamburgerMenu_bar1__trG7X",bar2:"HamburgerMenu_bar2__OnfyT",bar3:"HamburgerMenu_bar3__q0hTb",change:"HamburgerMenu_change__22EV5",HamburgerMenu:"HamburgerMenu_HamburgerMenu__3cD03"}},function(e,t,a){e.exports={img:"AboutMe_img__GuFmr",article:"AboutMe_article__1vu4b",AnimateFigure:"AboutMe_AnimateFigure__3J6-w",slideInLeft:"AboutMe_slideInLeft__2QvCG",AnimateArticle:"AboutMe_AnimateArticle__3dkgt",slideInRight:"AboutMe_slideInRight__3Qm_v",Figure:"AboutMe_Figure__1SSvt"}},,,function(e,t,a){e.exports={Header:"Header_Header__ZJB9K",HeaderSticky:"Header_HeaderSticky__3mHQX",HeaderAnimate:"Header_HeaderAnimate__2lAeN",dropIn:"Header_dropIn__BJOMa"}},function(e,t,a){e.exports={Footer:"Footer_Footer__3zees",FooterWrapper:"Footer_FooterWrapper__1BDEu",FooterIconsWrapper:"Footer_FooterIconsWrapper__1LY6s",FooterAbout:"Footer_FooterAbout__1Oq_k"}},function(e,t,a){e.exports={Project:"Project_Project__2H2qk",ProjectImg:"Project_ProjectImg__1PVAe",ProjectFlexStart:"Project_ProjectFlexStart__2ynbk",ProjectFlexEnd:"Project_ProjectFlexEnd__3c1mK"}},,,,,function(e,t,a){e.exports={Skills:"Skills_Skills__ov1KH",AnimateSlideInLeft:"Skills_AnimateSlideInLeft__2xJyE",slideInLeft:"Skills_slideInLeft__23pUQ",AnimateSlideInRight:"Skills_AnimateSlideInRight__cJp4K",slideInRight:"Skills_slideInRight__3tZ1Y"}},function(e,t,a){e.exports={SocialLinks:"SocialLinks_SocialLinks__1NViN",IconsBox:"SocialLinks_IconsBox__3dMVa",Icons:"SocialLinks_Icons__2Q3DD",moveUpDown:"SocialLinks_moveUpDown__11GjL"}},,function(e,t,a){e.exports={NavigationListItem:"NavigationListItem_NavigationListItem__bdMR1",active:"NavigationListItem_active__bo60Z"}},function(e,t,a){e.exports={NavigationList:"NavigationList_NavigationList___jV6M",OpenNavBar:"NavigationList_OpenNavBar__3bL8B"}},function(e,t,a){e.exports={AboutSpace:"About_AboutSpace__2OpLB",AboutSkill:"About_AboutSkill__3n2J5"}},,function(e,t,a){e.exports={Projects:"Projects_Projects__3BQ2t",More:"Projects_More__36s-p"}},,,,function(e,t,a){e.exports=a.p+"static/media/me.60638dcb.jpg"},,function(e,t,a){e.exports=a.p+"static/media/1-min.5d82bde0.png"},function(e,t,a){e.exports=a.p+"static/media/1-min.63aa403b.png"},function(e,t,a){e.exports={Home:"Home_Home__YBDid"}},function(e,t,a){e.exports=a.p+"static/media/banner.42f0aa22.jpg"},,function(e,t,a){e.exports=a(45)},,,,,function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(26),o=a.n(r),l=(a(39),a(24)),c=a(12),s=a(14),m=a(13),u=a(8),d=a(15),_=a(19),h=a.n(_),f=function(e){return i.a.createElement("li",{className:h.a.NavigationListItem},i.a.createElement("span",{className:e.markActive?h.a.active:null,onClick:function(){e.clicked(e.children)}},e.children))},p=a(20),k=a.n(p),g=function(e){var t=[k.a.NavigationList,"header-bg-color"];e.show&&t.push(k.a.OpenNavBar);return i.a.createElement("ul",{className:t.join(" ")},["Home","About","Work","Contact"].map(function(t,a){return i.a.createElement(f,{key:t,markActive:e.markActive[a],clicked:e.clicked},t.toUpperCase())}))},b=a(9),v=a.n(b),S=function(e){return i.a.createElement("div",{className:"row",style:e.style},e.children)},A=a(5),E=a.n(A),w=function(e){var t=[E.a.bar1],a=[E.a.bar2],n=[E.a.bar3];return e.show&&(t.push(E.a.change),a.push(E.a.change),n.push(E.a.change)),i.a.createElement("div",{className:E.a.HamburgerMenu,onClick:e.clicked},i.a.createElement("div",{className:t.join(" ")}),i.a.createElement("div",{className:a.join(" ")}),i.a.createElement("div",{className:n.join(" ")}))},j={show:!1,sticky:!1},N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state=j,a.height=0,a.headerRef=i.a.createRef(),a.toggleHamburgerMenu=function(){a.setState(function(e){return{show:!e.show}})},a.reCalcHeight=function(){a.height=a.headerRef.current.offsetTop},a.hideNavBar=function(){a.isMobile()&&a.state.show&&a.setState({show:!1})},a.isMobile=function(){return window.matchMedia("only screen and (max-width: 575px)").matches},a.addStickyClass=function(){!a.state.sticky&&window.pageYOffset>=a.height+a.headerRef.current.offsetHeight-5?a.setState({sticky:!0}):a.state.sticky&&window.pageYOffset<=a.height&&a.setState({sticky:!1}),a.hideNavBar()},a.onNavItemClick=function(e){a.isMobile()&&a.setState({show:!1}),a.props.clicked(e)},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.height=this.headerRef.current.offsetTop,window.addEventListener("resize",this.reCalcHeight),window.addEventListener("scroll",this.addStickyClass)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.reCalcHeight),window.removeEventListener("scroll",this.addStickyClass)}},{key:"render",value:function(){var e=[v.a.Header,"container-fluid","header-bg-color"];return this.state.sticky&&!this.isMobile()?(e.push(v.a.HeaderSticky),e.push(v.a.HeaderAnimate)):this.isMobile()&&e.push(v.a.HeaderSticky),i.a.createElement("header",{ref:this.headerRef,className:e.join(" ")},i.a.createElement(S,null,i.a.createElement("nav",{className:"container"},i.a.createElement(S,{style:{flexDirection:"column"}},i.a.createElement(w,{show:this.state.show,clicked:this.toggleHamburgerMenu}),i.a.createElement(g,{markActive:this.props.markActive,show:this.state.show,clicked:this.onNavItemClick})))))}}]),t}(n.Component),y=a(3),I=a.n(y),H=function(e){return i.a.createElement("div",{className:"container"},e.children)},C=i.a.forwardRef(function(e,t){var a=[I.a.h1,"opaque"],n=[I.a.SectionUnderline,"opaque",I.a.AnimateUnderline];return e.animateZoomIn&&(a.push(I.a.AnimateZoomIn),n.push(I.a.AnimateZoomIn)),e.animateSlideInLeft&&(a.push(I.a.AnimateSlideInLeft),n.push(I.a.AnimateSlideInLeft)),e.animateSlideInRight&&(a.push(I.a.AnimateSlideInRight),n.push(I.a.AnimateSlideInRight)),i.a.createElement("section",{ref:t,className:I.a.Section,style:e.style},i.a.createElement(H,null,i.a.createElement(S,{style:{flexDirection:"column"}},i.a.createElement("h1",{className:a.join(" ")},e.title.toUpperCase()),i.a.createElement("div",{className:n.join(" ")})),i.a.createElement(S,null,e.children)))}),R=a(27),F=a.n(R),L=a(6),x=a.n(L),M=function(e){var t=[x.a.Figure,"opaque"],a=[x.a.article,"opaque"];return e.animate&&(t.push(x.a.AnimateFigure),a.push(x.a.AnimateArticle)),i.a.createElement(i.a.Fragment,null,i.a.createElement("figure",{className:t.join(" ")},i.a.createElement("img",{src:F.a,alt:"Abhinn Ankit",className:x.a.img})),i.a.createElement("article",{className:a.join(" ")},i.a.createElement("h3",null,"Summary"),i.a.createElement("p",null,"Innovative and enthusiastic full-stack developer with good understanding of software development life cycle. Well-read in various computer languages as well as the principles and techniques of website development and maintenance.Proficient at conveying complex technical information in a lucid manner.")))},P=a(21),O=a.n(P),B=a(4),q=a.n(B),D=function(e){var t=Object(n.useRef)(null),a=Object(n.useRef)(null),r=Object(n.useRef)(null),o=["opaque"],l=["opaque"],c=[q.a.SkillProgress,"opaque"],s=[q.a.SkillProgressBar,"opaque"];return e.animate&&(c.push(q.a.AnimateSkillProgressSpreadOut),o.push(q.a.SkillNameVisible),l.push(q.a.SkillValueVisible),s.push(q.a.AnimateSkillProgressBar)),i.a.createElement("div",{className:q.a.Skill},i.a.createElement("div",{ref:a,className:c.join(" ")},i.a.createElement("div",{ref:t,className:s.join(" "),style:{width:e.percent+"%"}})),i.a.createElement("div",{className:q.a.SkillAttr,style:{width:e.percent+"%"}},i.a.createElement("strong",{className:o.join(" ")},e.skill.toUpperCase()),i.a.createElement("span",{ref:r,className:l.join(" ")},e.percent)))},T=a(16),U=a.n(T),V=function(e){var t={java:80,javascript:80,typescript:85,html:95,css:90,scss:85,react:80,angular:85,"spring boot":65,express:65,aws:70,circleci:65},a=["opaque"],n=["opaque"];return e.animate&&(a.push(U.a.AnimateSlideInLeft),n.push(U.a.AnimateSlideInRight)),i.a.createElement("div",{className:U.a.Skills},i.a.createElement("h2",null,i.a.createElement("span",{className:a.join(" ")},"TECHNO"),i.a.createElement("span",{className:n.join(" ")},"LOGIES")),Object.keys(t).map(function(a){return i.a.createElement(D,{key:a,animate:e.animate,skill:a,percent:t[a]})}))},W=i.a.memo(function(e){var t=["col-lg-10 col-xl-10 col-12",O.a.AboutSpace],a=["col-lg-10 col-xl-10 col-12",O.a.AboutSkill];return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:t.join(" ")},i.a.createElement(M,{animate:e.animateAbout.aboutMe})),i.a.createElement("div",{className:a.join(" ")},i.a.createElement(V,{animate:e.animateAbout.skills})))}),Z=a(10),J=a.n(Z),Q=a(17),z=a.n(Q),Y=a(28),G=function(e){return i.a.createElement("div",{className:z.a.SocialLinks},i.a.createElement("a",{href:e.link,className:z.a.IconsBox,rel:"noopener noreferrer",target:"_blank"},i.a.createElement(Y.a,{icon:e.icon,className:z.a.Icons})))},K=a(18),X=function(){return i.a.createElement("footer",{className:J.a.FooterWrapper},i.a.createElement(H,null,i.a.createElement(S,{style:{position:"relative"}},i.a.createElement("div",{className:J.a.Footer},i.a.createElement("div",{className:J.a.FooterIconsWrapper},i.a.createElement(G,{icon:K.b,link:"https://www.linkedin.com/in/abhinn-ankit/"}),i.a.createElement(G,{icon:K.a,link:"https://github.com/abhinn-ankit"}),i.a.createElement(G,{icon:K.c,link:"https://stackoverflow.com/users/8616210/abhinnankit"})),i.a.createElement("div",{className:J.a.FooterAbout},"\xa9 ABHINN ANKIT 2019")))))},$=a(33),ee=a(2),te=a.n(ee),ae=function(e){var t=Object(n.useState)(!1),a=Object($.a)(t,2),r=a[0],o=a[1],l=Object(n.useRef)(null),c=window.innerHeight/1.6,s=function e(){!r&&l.current&&l.current.getBoundingClientRect().top<c&&(o(!0),console.log("Animate"),window.removeEventListener("scroll",e))};Object(n.useLayoutEffect)(function(){window.addEventListener("scroll",s)},[]);var m=[te.a.textarea,te.a.ContactFields,"opaque"],u=[te.a.ContactFields,"opaque"],d=[te.a.ContactFields,"opaque"],_=[te.a.btn,"opaque"];return r&&(u.push(te.a.AnimateForm),d.push(te.a.Delay1,te.a.AnimateForm),m.push(te.a.Delay2,te.a.AnimateForm),_.push(te.a.Delay3,te.a.AnimateForm)),i.a.createElement("form",{action:"https://formspree.io/abhinnankit@outlook.com",method:"POST",className:te.a.Contact},i.a.createElement("input",{className:u.join(" "),type:"text",name:"name",placeholder:"Name",required:!0}),i.a.createElement("input",{className:d.join(" "),type:"email",name:"email",placeholder:"Email",required:!0}),i.a.createElement("textarea",{ref:l,className:m.join(" "),name:"message",placeholder:"Your message"}),i.a.createElement("button",{className:_.join(" "),type:"submit"},"Submit"))},ne=a(11),ie=a.n(ne),re=function(e){var t=["col-lg-6",ie.a.Project];return e.justifyContentStart?t.push(ie.a.ProjectFlexStart):t.push(ie.a.ProjectFlexEnd),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:t.join(" ")},i.a.createElement("img",{src:e.imgUrl,alt:"Shopping site",className:ie.a.ProjectImg})))},oe=a(23),le=a.n(oe),ce=a(29),se=a.n(ce),me=a(30),ue=a.n(me),de=function(){var e=[le.a.More,"col-12"];return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:le.a.Projects},i.a.createElement(re,{imgUrl:se.a,justifyContentStart:!1}),i.a.createElement(re,{imgUrl:ue.a,justifyContentStart:!0})),i.a.createElement("div",{className:e.join(" ")},"More projects on\xa0",i.a.createElement("a",{href:"https://github.com/abhinn-ankit?tab=repositories",rel:"noopener noreferrer",target:"_blank"},"github"),"."))},_e=a(31),he=a.n(_e),fe=a(32),pe=a.n(fe),ke=function(){return i.a.createElement("div",{className:he.a.Home,style:{backgroundImage:"url(".concat(pe.a,")")}})},ge=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={markActive:[!1,!1,!1,!1],animateHeader:[!1,!1,!1],animateAbout:{aboutMe:!1,skills:!1}},a.aboutRef=void 0,a.workRef=void 0,a.contactRef=void 0,a.headerRef=void 0,a.linkClicked=function(e){switch(e.toLowerCase()){case"about":window.scrollTo(0,a.aboutRef.current.offsetTop+57);break;case"work":window.scrollTo(0,a.workRef.current.offsetTop-54);break;case"contact":window.scrollTo(0,a.contactRef.current.offsetTop-54);break;default:window.scrollTo(0,0)}},a.addClasses=function(){var e=a.aboutRef.current.getBoundingClientRect().top,t=a.workRef.current.getBoundingClientRect().top,n=a.contactRef.current.getBoundingClientRect().top;n<=100||window.innerHeight+window.scrollY>=document.body.offsetHeight?a.state.markActive[3]||a.setState({markActive:a.state.markActive.map(function(e,t){return 3===t})}):t<=100?a.state.markActive[2]||a.setState({markActive:a.state.markActive.map(function(e,t){return 2===t})}):e<=0?a.state.markActive[1]||a.setState({markActive:a.state.markActive.map(function(e,t){return 1===t})}):e>0&&(a.state.markActive[0]||a.setState({markActive:a.state.markActive.map(function(e,t){return 0===t})})),a.addAnimateClass(e,t,n)},a.addAnimateClass=function(e,t,n){var i=window.innerHeight/2.8;a.state.animateHeader.every(function(e){return e})||a.animateHeaders(i,e,t,n),a.state.animateAbout.aboutMe&&a.state.animateAbout.skills||a.animateAbout(i,e)},a.aboutRef=i.a.createRef(),a.workRef=i.a.createRef(),a.contactRef=i.a.createRef(),a.headerRef=i.a.createRef(),a}return Object(d.a)(t,e),Object(u.a)(t,null,[{key:"isDesktop",value:function(){return window.matchMedia("only screen and (min-width: 768px)").matches}}]),Object(u.a)(t,[{key:"animateHeaders",value:function(e,t,a,n){if(!this.state.animateHeader[2]&&(n<e||window.innerHeight+window.scrollY>=document.body.offsetHeight)){var i=this.state.animateHeader.slice();i[2]=!0,this.setState({animateHeader:i})}if(!this.state.animateHeader[1]&&a<e){var r=this.state.animateHeader.slice();r[1]=!0,this.setState({animateHeader:r})}if(!this.state.animateHeader[0]&&t<e){var o=this.state.animateHeader.slice();o[0]=!0,this.setState({animateHeader:o})}}},{key:"animateAbout",value:function(e,t){if(t+=200,!this.state.animateAbout.aboutMe&&t<=e){var a=Object(l.a)({},this.state.animateAbout);a.aboutMe=!0,this.setState({animateAbout:a})}if(t+=300,!this.state.animateAbout.skills&&t<=e){var n=Object(l.a)({},this.state.animateAbout);n.skills=!0,this.setState({animateAbout:n})}}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.addClasses)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.addClasses)}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(ke,null),i.a.createElement(N,{ref:this.headerRef,clicked:this.linkClicked,markActive:this.state.markActive}),i.a.createElement("main",null,i.a.createElement(C,{animateZoomIn:this.state.animateHeader[0],ref:this.aboutRef,title:"ABOUT",style:{backgroundColor:"#f0f0f0",paddingTop:"10em"}},i.a.createElement(W,{animateAbout:this.state.animateAbout})),i.a.createElement("div",{style:{background:"linear-gradient(to right top, #e5e0da 50%, #f0f0f0 50%)",height:"5em"}}),i.a.createElement(C,{animateSlideInLeft:this.state.animateHeader[1],ref:this.workRef,title:"Projects",style:{backgroundColor:"#e5e0da"}},i.a.createElement(de,null)),i.a.createElement("div",{style:{background:"linear-gradient(to right bottom, #e5e0da 50%, #f0f0f0 50%)",height:"5em"}}),i.a.createElement(C,{animateSlideInRight:this.state.animateHeader[2],ref:this.contactRef,title:"contact",style:{backgroundColor:"#f0f0f0"}},i.a.createElement(ae,null))),i.a.createElement(X,null))}}]),t}(n.Component),be=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(ge,null))};o.a.render(i.a.createElement(be,null),document.getElementById("root"))}],[[34,1,2]]]);
//# sourceMappingURL=main.69e9fb63.chunk.js.map