(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports={Contact:"Contact_Contact__3ogl2",ContactFields:"Contact_ContactFields__2r5Xr",btn:"Contact_btn__26gLm",textarea:"Contact_textarea__3XbhN",AnimateForm:"Contact_AnimateForm__1TZBC",popInOut:"Contact_popInOut__1-lPG",Delay1:"Contact_Delay1__1plfs",Delay2:"Contact_Delay2__3inuJ",Delay3:"Contact_Delay3__3ElRX"}},110:function(e,t,a){e.exports=a.p+"static/media/me.99c2fbe8.jpg"},111:function(e,t,a){e.exports=a.p+"static/media/resume.c5f36519.pdf"},112:function(e,t,a){e.exports={AboutSpace:"About_AboutSpace__2ZW_F"}},114:function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__1xX4T"}},115:function(e,t,a){e.exports={CarouselImage:"CarouselSlide_CarouselImage__3NyI_"}},116:function(e,t,a){e.exports=a.p+"static/media/1-min.c0b8efca.png"},117:function(e,t,a){e.exports=a.p+"static/media/1.9b9e3634.png"},118:function(e,t,a){e.exports=a.p+"static/media/2.e134221e.png"},119:function(e,t,a){e.exports=a.p+"static/media/3.bcbfdfc9.png"},120:function(e,t,a){e.exports=a.p+"static/media/1-min.57eb48e3.png"},121:function(e,t,a){e.exports=a.p+"static/media/1.55d488f6.png"},122:function(e,t,a){e.exports=a.p+"static/media/2.045296de.png"},123:function(e,t,a){e.exports=a.p+"static/media/3.08398834.png"},128:function(e,t,a){e.exports={SkillWrapper:"Skills_SkillWrapper__1fnSn"}},129:function(e,t,a){e.exports=a.p+"static/media/banner.dcb12227.png"},132:function(e,t,a){e.exports=a(237)},137:function(e,t,a){},18:function(e,t,a){e.exports={Section:"Section_Section__TP4ZD",h1:"Section_h1__3jvYe",AnimateZoomIn:"Section_AnimateZoomIn__aPgcY",zoomIn:"Section_zoomIn__2sKx8",AnimateUnderline:"Section_AnimateUnderline__9tN8d",AnimateSlideInLeft:"Section_AnimateSlideInLeft__2066g",slideInLeft:"Section_slideInLeft__3bAfp",AnimateSlideInRight:"Section_AnimateSlideInRight__2KObi",slideInRight:"Section_slideInRight__ryp7y",SectionUnderline:"Section_SectionUnderline__1c50u"}},19:function(e,t,a){e.exports={Project:"Project_Project__E-Sfi",ProjectInfo:"Project_ProjectInfo__36N4Y",dropNBounce:"Project_dropNBounce__2qkXf",ProjectImg:"Project_ProjectImg__3vlpx",Button:"Project_Button__sVgxC",Title:"Project_Title__2Cm3v",Technologies:"Project_Technologies__27qhg",ProjectInfoTextWrapper:"Project_ProjectInfoTextWrapper__nlo8L",p0:"Project_p0__1vGKj",Animate:"Project_Animate__1Y2ZT",slideUp:"Project_slideUp__QJNK1",AnimateLate:"Project_AnimateLate__1Eec3"}},21:function(e,t,a){e.exports={Skill:"Skill_Skill__1pRC4",SkillScore:"Skill_SkillScore__VUEty",SkillAttr:"Skill_SkillAttr__3Vx8K",SkillNameVisible:"Skill_SkillNameVisible__19XT-",SkillValueVisible:"Skill_SkillValueVisible__35zET",SkillProgress:"Skill_SkillProgress__1gGz-",AnimateSkillProgressSpreadOut:"Skill_AnimateSkillProgressSpreadOut__305ae",AnimateSkillProgressBar:"Skill_AnimateSkillProgressBar__3CoBZ",SkillProgressBar:"Skill_SkillProgressBar__3Eg9z"}},237:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(109),o=a.n(i),l=(a(137),a(52)),c=a(54),s=a(53),m=a(43),u=a(55),d=a(75),f=a.n(d),p=function(e){return r.a.createElement("li",{className:f.a.NavigationListItem},r.a.createElement("span",{className:e.markActive?f.a.active:null,onClick:function(){e.clicked(e.children)}},e.children))},_=a(76),h=a.n(_),v=r.a.memo(function(e){var t=[h.a.NavigationList,"header-bg-color"];e.show&&t.push(h.a.OpenNavBar);return r.a.createElement("ul",{className:t.join(" ")},["Home","About","Skills","Work","Contact"].map(function(t,a){return r.a.createElement(p,{key:t,markActive:e.markActive[a],clicked:e.clicked},t.toUpperCase())}))}),g=a(44),b=a.n(g),E=function(e){return r.a.createElement("div",{className:"row",style:e.style,onClick:e.onClick},e.children)},k=a(25),w=a.n(k),y=function(e){var t=[w.a.bar1],a=[w.a.bar2],n=[w.a.bar3];return e.show&&(t.push(w.a.change),a.push(w.a.change),n.push(w.a.change)),r.a.createElement("div",{className:w.a.HamburgerMenu,onClick:e.clicked},r.a.createElement("div",{className:t.join(" ")}),r.a.createElement("div",{className:a.join(" ")}),r.a.createElement("div",{className:n.join(" ")}))},S={show:!1,sticky:!1},j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).state=S,a.height=0,a.headerRef=r.a.createRef(),a.toggleHamburgerMenu=function(){a.setState(function(e){return{show:!e.show}})},a.reCalcHeight=function(){a.height=window.innerHeight},a.hideNavBar=function(){a.isMobile()&&a.state.show&&a.setState({show:!1})},a.isMobile=function(){return window.matchMedia("only screen and (max-width: 575px)").matches},a.addStickyClass=function(){a.isMobile()||(!a.state.sticky&&window.pageYOffset>=a.height+a.headerRef.current.offsetHeight-5?a.setState({sticky:!0}):a.state.sticky&&window.pageYOffset<=a.height&&a.setState({sticky:!1})),a.hideNavBar()},a.onNavItemClick=function(e){a.isMobile()&&a.setState({show:!1}),a.props.clicked(e)},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.height=window.innerHeight,window.addEventListener("resize",this.reCalcHeight),window.addEventListener("scroll",this.addStickyClass)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.reCalcHeight),window.removeEventListener("scroll",this.addStickyClass)}},{key:"render",value:function(){var e=[b.a.Header,"container-fluid","header-bg-color"];return this.state.sticky&&!this.isMobile()?(e.push(b.a.HeaderSticky),e.push(b.a.HeaderAnimate)):this.isMobile()&&e.push(b.a.HeaderSticky),r.a.createElement("header",{ref:this.headerRef,className:e.join(" ")},r.a.createElement(E,null,r.a.createElement("nav",{className:"container"},r.a.createElement(E,{style:{flexDirection:"column"}},r.a.createElement(y,{show:this.state.show,clicked:this.toggleHamburgerMenu}),r.a.createElement(v,{markActive:this.props.markActive,show:this.state.show,clicked:this.onNavItemClick})))))}}]),t}(n.Component),A=a(18),N=a.n(A),O=function(e){return r.a.createElement("div",{className:"container"},e.children)},C=r.a.forwardRef(function(e,t){var a=[N.a.h1,"opaque"],n=[N.a.SectionUnderline,"opaque",N.a.AnimateUnderline];return e.animateZoomIn&&(a.push(N.a.AnimateZoomIn),n.push(N.a.AnimateZoomIn)),e.animateSlideInLeft&&(a.push(N.a.AnimateSlideInLeft),n.push(N.a.AnimateSlideInLeft)),e.animateSlideInRight&&(a.push(N.a.AnimateSlideInRight),n.push(N.a.AnimateSlideInRight)),r.a.createElement("section",{ref:t,className:N.a.Section,style:e.style},r.a.createElement(O,null,r.a.createElement(E,{style:{flexDirection:"column"}},r.a.createElement("h1",{className:a.join(" ")},e.title.toUpperCase()),r.a.createElement("div",{className:n.join(" ")})),r.a.createElement(E,null,e.children)))}),x=a(110),I=a.n(x),H=a(29),L=a.n(H),R=a(111),P=a.n(R),M=function(e){var t=[L.a.Figure,"opaque"],a=[L.a.article,"opaque"];return e.animate&&(t.push(L.a.AnimateFigure),a.push(L.a.AnimateArticle)),r.a.createElement(r.a.Fragment,null,r.a.createElement("article",{className:a.join(" ")},r.a.createElement("p",null,"I am a graduate student at Northeastern University in Boston. I strive to create visually appealing web apps and websites with intuitive design and clear navigation, coupled with modern and efficient backend."),r.a.createElement("p",null,"I've interned at Amadeus North America, where I brought ideas to life by building prototypes and also, developed web apps using state-of-the-art technologies.\xa0"),r.a.createElement("p",null,r.a.createElement("a",{className:L.a.link,href:P.a,download:"Abhinn_Ankit_resume"},"Download my resume."))),r.a.createElement("figure",{className:t.join(" ")},r.a.createElement("div",null),r.a.createElement("img",{width:"224",height:"282",src:I.a,alt:"Abhinn Ankit",className:L.a.img})))},B=a(112),F=a.n(B),T=r.a.memo(function(e){var t=["col-12",F.a.AboutSpace];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.join(" ")},r.a.createElement(M,{animate:e.animateAbout})))}),U=a(45),W=a.n(U),z=a(56),D=a.n(z),q=a(113),V=function(e){return r.a.createElement("div",{className:D.a.SocialLinks},r.a.createElement("a",{href:e.link,className:D.a.IconsBox,rel:"noopener noreferrer",target:"_blank"},r.a.createElement(q.a,{icon:e.icon,className:D.a.Icons})))},Y=a(57),Z=function(){return r.a.createElement("footer",{className:W.a.FooterWrapper},r.a.createElement(O,null,r.a.createElement(E,{style:{position:"relative"}},r.a.createElement("div",{className:W.a.Footer},r.a.createElement("div",{className:W.a.FooterIconsWrapper},r.a.createElement(V,{icon:Y.b,link:"https://www.linkedin.com/in/abhinn-ankit/"}),r.a.createElement(V,{icon:Y.a,link:"https://github.com/ankitabhinn"}),r.a.createElement(V,{icon:Y.c,link:"https://stackoverflow.com/users/8616210/abhinnankit"})),r.a.createElement("div",{className:W.a.FooterAbout},"\xa9 ABHINN ANKIT 2019")))))},X=a(10),G=a(11),K=a.n(G),J=function(e){var t=Object(n.useState)(!1),a=Object(X.a)(t,2),i=a[0],o=a[1],l=Object(n.useRef)(null),c=window.innerHeight/1.6,s=function e(){!i&&l.current&&l.current.getBoundingClientRect().top<c&&(o(!0),window.removeEventListener("scroll",e))};Object(n.useLayoutEffect)(function(){window.addEventListener("scroll",s)},[]);var m=[K.a.textarea,K.a.ContactFields,"opaque"],u=[K.a.ContactFields,"opaque"],d=[K.a.ContactFields,"opaque"],f=[K.a.btn,"opaque"];return i&&(u.push(K.a.AnimateForm),d.push(K.a.Delay1,K.a.AnimateForm),m.push(K.a.Delay2,K.a.AnimateForm),f.push(K.a.Delay3,K.a.AnimateForm)),r.a.createElement("form",{action:"https://formspree.io/abhinnankit@outlook.com",method:"POST",className:K.a.Contact},r.a.createElement("input",{className:u.join(" "),type:"text",name:"name",placeholder:"Name",required:!0}),r.a.createElement("input",{className:d.join(" "),type:"email",name:"email",placeholder:"Email",required:!0}),r.a.createElement("textarea",{ref:l,className:m.join(" "),name:"message",placeholder:"Your message"}),r.a.createElement("button",{className:f.join(" "),type:"submit"},"Submit"))},Q=a(19),$=a.n(Q),ee=a(114),te=a.n(ee),ae=r.a.memo(function(e){var t=Object(n.useRef)(null);return e.show?document.body.style.overflowY="hidden":document.body.style.overflowY="auto",r.a.createElement(r.a.Fragment,null,e.show?r.a.createElement("div",{ref:t,className:te.a.Backdrop,onClick:e.clicked}):null)}),ne=a(26),re=a.n(ne);function ie(){return(ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function oe(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var le=r.a.createElement("path",{fill:"currentColor",d:"M193.1,29l-69.3,69.3l69.3,69.3c4.7,4.7,4.7,12.3,0,17l-8.5,8.5c-4.7,4.7-12.3,4.7-17,0l-69.3-69.3L29,193.1 c-4.7,4.7-12.3,4.7-17,0l-8.5-8.5c-4.7-4.7-4.7-12.3,0-17l69.3-69.3L3.5,29c-4.7-4.7-4.7-12.3,0-17L12,3.5c4.7-4.7,12.3-4.7,17,0 l69.3,69.3l69.3-69.3c4.7-4.7,12.3-4.7,17,0l8.5,8.5C197.7,16.7,197.7,24.3,193.1,29L193.1,29z",className:""}),ce=function(e){var t=e.svgRef,a=oe(e,["svgRef"]);return r.a.createElement("svg",ie({focusable:"false",viewBox:"0 0 196.5 196.5",className:"svg-inline--fa fa-times-square fa-w-14",ref:t},a),le)},se=r.a.forwardRef(function(e,t){return r.a.createElement(ce,ie({svgRef:t},e))}),me=(a.p,a(81)),ue=a(30),de=a.n(ue);function fe(){return(fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function pe(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var _e=r.a.createElement("path",{fill:"currentColor",d:"M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z",className:""}),he=function(e){var t=e.svgRef,a=pe(e,["svgRef"]);return r.a.createElement("svg",fe({focusable:"false",viewBox:"0 0 256 512",className:"",ref:t},a),_e)},ve=r.a.forwardRef(function(e,t){return r.a.createElement(he,fe({svgRef:t},e))});a.p;function ge(){return(ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function be(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Ee=r.a.createElement("path",{fill:"currentColor",d:"M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z",className:""}),ke=function(e){var t=e.svgRef,a=be(e,["svgRef"]);return r.a.createElement("svg",ge({focusable:"false",viewBox:"0 0 256 512",className:"",ref:t},a),Ee)},we=r.a.forwardRef(function(e,t){return r.a.createElement(ke,ge({svgRef:t},e))}),ye=(a.p,a(115)),Se=a.n(ye),je=function(e){return r.a.createElement("img",{className:Se.a.CarouselImage,src:e.imagesUrl,alt:""})},Ae=function(e){var t=Object(n.useRef)(null),a=Object(n.useState)(e.carImgUrls),i=Object(X.a)(a,2),o=i[0],l=i[1],c=Object(n.useState)(!1),s=Object(X.a)(c,2),m=s[0],u=s[1],d=Object(n.useState)(!1),f=Object(X.a)(d,2),p=f[0],_=f[1],h=[de.a.CarouselSlideWrapper],v=function e(){var a=Object(me.a)(o);a.unshift(a.pop()),t.current.removeEventListener("webkitAnimationEnd",e),t.current.removeEventListener("animationEnd",e),u(!1),l(a)},g=function e(){var a=Object(me.a)(o);a.push(a.shift()),t.current.removeEventListener("webkitAnimationEnd",e),t.current.removeEventListener("animationEnd",e),_(!1),l(a)};return Object(n.useEffect)(function(){m&&(t.current.addEventListener("webkitAnimationEnd",v),t.current.addEventListener("animationEnd",v)),p&&(t.current.addEventListener("webkitAnimationEnd",g),t.current.addEventListener("animationEnd",g))}),m&&h.push(de.a.Forwards),p&&h.push(de.a.Backwards),r.a.createElement("div",{className:de.a.Carousel},r.a.createElement("div",{ref:t,className:h.join(" ")},o.slice().map(function(e){return r.a.createElement(je,{key:e,imagesUrl:e})})),r.a.createElement("span",{className:de.a.Prev,onClick:function(){u(!0)}},r.a.createElement(ve,{className:"svg-inline--fa fa-chevron-left fa-w-8"})),r.a.createElement("span",{className:de.a.Next,onClick:function(){_(!0)}},r.a.createElement(we,{className:"svg-inline--fa fa-chevron-right fa-w-8"})))},Ne=r.a.memo(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,{show:e.show,clicked:e.modalClosed}),r.a.createElement("div",{className:"container "+re.a.ModalContainer,style:{transform:e.show?"translateY(0)":"translateY(-180vh)",opacity:e.show?1:0}},r.a.createElement(E,{onClick:e.modalClosed},r.a.createElement("div",{className:["col-12 col-md-10 col-lg-6",re.a.Modal].join(" "),onClick:function(e){e.stopPropagation()}},r.a.createElement("span",{className:re.a.close,onClick:e.modalClosed},r.a.createElement(se,{className:["svg-inline--fa fa-times-square fa-w-14"].join(" ")})),r.a.createElement(Ae,{carImgUrls:e.carImgUrls}),r.a.createElement("div",{className:re.a.CarouselInfo},r.a.createElement("h2",{className:re.a.Title},e.title),r.a.createElement("h4",{className:re.a.About},e.about),r.a.createElement("p",{className:re.a.Description},e.description))))))}),Oe=function(e){var t=Object(n.useState)(!1),a=Object(X.a)(t,2),i=a[0],o=a[1],l=["col-md-6 col-lg-5",$.a.Project,$.a.p0];e.animateLate&&l.push($.a.AnimateLate),e.animate&&l.push($.a.Animate);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ne,{show:i,modalClosed:function(){o(!1)},title:e.title,description:e.description,about:e.about,carImgUrls:e.carImgUrls}),r.a.createElement("div",{className:l.join(" ")},r.a.createElement("div",{className:$.a.ProjectInfo},r.a.createElement("div",{className:$.a.ProjectInfoTextWrapper},r.a.createElement("h2",{className:$.a.Title},e.title),r.a.createElement("p",{className:$.a.Technologies},e.technologies)),r.a.createElement("button",{type:"button",className:$.a.Button,onClick:function(){o(!0)}},"Know More")),r.a.createElement("img",{width:"570",height:"400",src:e.imgUrl,alt:"Shopping site",className:$.a.ProjectImg})))},Ce=a(46),xe=a.n(Ce),Ie=a(116),He=a.n(Ie),Le=a(117),Re=a.n(Le),Pe=a(118),Me=a.n(Pe),Be=a(119),Fe=a.n(Be),Te=a(120),Ue=a.n(Te),We=a(121),ze=a.n(We),De=a(122),qe=a.n(De),Ve=a(123),Ye=a.n(Ve),Ze=r.a.memo(function(){var e=[{title:"Style It Right",technologies:"Angular 4 + Express.js",imgUrl:He.a,carImgUrls:[Me.a,Re.a,Fe.a],animateLate:!1,about:"E-commerce",description:"Style It Right is an online shopping website that facilitate online purchase of clothes. It was my final project for the web design course. Built with Angular 4, Express.js and MongoDb."},{title:"Boston Events",technologies:"Angular 5 + Node.js",imgUrl:Ue.a,carImgUrls:[qe.a,ze.a,Ye.a],animateLate:!0,about:"Event organization",description:"Boston Events is an event management and ticketing website, where users can browse, create, and promote local events. An academic project on my credit developed using Angular 5, Node.js and MongoDb."}],t=[xe.a.More,"col-12"],a=Object(n.useRef)(null),i=window.innerHeight/1.6-100,o=Object(n.useState)(!1),l=Object(X.a)(o,2),c=l[0],s=l[1],m=function e(){!c&&a.current&&a.current.getBoundingClientRect().top<i&&(s(!0),window.removeEventListener("scroll",e))};return Object(n.useLayoutEffect)(function(){window.addEventListener("scroll",m)},[]),c&&t.push(xe.a.Visible),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:xe.a.Projects,ref:a},r.a.createElement("div",{className:"col-lg-1 "+xe.a.Gutter}),e.map(function(e){return r.a.createElement(Oe,{key:e.title,animate:c,imgUrl:e.imgUrl,carImgUrls:e.carImgUrls,title:e.title,description:e.description,about:e.about,technologies:e.technologies,animateLate:e.animateLate})})),r.a.createElement("div",{className:t.join(" ")},"More projects on\xa0",r.a.createElement("a",{href:"https://github.com/ankitabhinn?tab=repositories",rel:"noopener noreferrer",target:"_blank"},"github"),"."))}),Xe=a(31),Ge=a.n(Xe),Ke=a(124),Je=a.n(Ke),Qe=a(125),$e=a.n(Qe),et=function(){var e=Object(n.useRef)(null),t=Object(n.useState)(!1),a=Object(X.a)(t,2),i=a[0],o=a[1],l=Object(n.useState)(!1),c=Object(X.a)(l,2),s=c[0],m=c[1],u=[Ge.a.BannerText],d=Object(n.useCallback)(function(){s||(e.current.removeEventListener("transitionend",d),m(!0))},[]);Object(n.useEffect)(function(){setTimeout(function(){o(!0)},0),e.current.addEventListener("transitionend",d)},[i,d]);var f=[Ge.a.HeaderLine];return i&&f.push(Ge.a.Animate),r.a.createElement("div",{className:Ge.a.Home},r.a.createElement("div",{className:Ge.a.BannerBlock},r.a.createElement("p",{ref:e,className:f.join(" ")},"Hello, I am\xa0",r.a.createElement("strong",{className:f.join(" ")},"Abhinn Ankit")),s?r.a.createElement($e.a,{className:u.join(" "),strings:["I'm a <i>full-stack</i> <b>software developer</b> with a wide array of <i>skills</i>."],typeSpeed:40}):r.a.createElement("div",{style:{height:"32px"}})),r.a.createElement(Je.a,{className:Ge.a.Particles,params:{particles:{number:{value:160,density:{enable:!1,value_area:789.1476416322727}},size:{value:3,random:!0,anim:{speed:4,size_min:.3}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"top",out_mode:"out"}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"push"}},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:250,size:3,duration:3,opacity:1,speed:3},push:{particles_nb:4},remove:{particles_nb:2},repulse:{distance:200,duration:.4}}}}}))},tt=a(21),at=a.n(tt),nt=function(e){var t=Object(n.useRef)(null),a=Object(n.useRef)(null),i=Object(n.useRef)(null),o=["opaque"],l=[at.a.SkillScore,"opaque"],c=[at.a.SkillProgress,"opaque"],s=[at.a.SkillProgressBar,"opaque"];return e.animate&&(c.push(at.a.AnimateSkillProgressSpreadOut),o.push(at.a.SkillNameVisible),l.push(at.a.SkillValueVisible),s.push(at.a.AnimateSkillProgressBar)),r.a.createElement("div",{className:at.a.Skill},r.a.createElement("div",{ref:a,className:c.join(" ")},r.a.createElement("div",{ref:t,className:s.join(" "),style:{width:e.percent+"%"}})),r.a.createElement("div",{className:at.a.SkillAttr,style:{width:e.percent+"%"}},r.a.createElement("strong",{className:o.join(" ")},e.skill.toUpperCase()),r.a.createElement("span",{ref:i,className:l.join(" ")},e.percent)))},rt=a(32),it=a.n(rt),ot=function(e){var t=[e.colClass,it.a.Wrapper],a=["opaque"],n=["opaque"],i=[it.a.HeaderWrapper];return e.animate&&(a.push(it.a.AnimateSlideInLeft),n.push(it.a.AnimateSlideInRight),i.push(it.a.Animate)),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:i.join(" ")},r.a.createElement("h2",{className:"EXPER"===e.firstHalfHeader?it.a.LessMarginTop:null},r.a.createElement("span",{className:a.join(" ")},e.firstHalfHeader),r.a.createElement("span",{className:n.join(" ")},e.secondHalfHeader))),e.children)},lt=a(36),ct=a.n(lt),st=function(e){var t=["row",ct.a.Wrapper],a=["col-3",ct.a.Card],n=["col-9",ct.a.CardDescription];return e.animate&&t.push(ct.a.Animate),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:a.join(" ")},r.a.createElement("span",{className:ct.a.TopMargin},r.a.createElement("span",null,e.icon))),r.a.createElement("div",{className:n.join(" ")},r.a.createElement("h3",null,e.headerPart1),r.a.createElement("h3",null,e.headerPart2),r.a.createElement("p",null,e.description)))},mt=a(128),ut=a.n(mt);function dt(){return(dt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ft(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var pt=r.a.createElement("path",{fill:"currentColor",d:"M632 240H336v-80h80c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h80v80H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h120v80H64c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32h-64v-80h320v80h-64c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32h-64v-80h120c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zM224 384v96H64v-96h160zm0-256V32h192v96H224zm352 256v96H416v-96h160z",className:""}),_t=function(e){var t=e.svgRef,a=ft(e,["svgRef"]);return r.a.createElement("svg",dt({"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"network-wired",role:"img",viewBox:"0 0 640 512",className:"svg-inline--fa fa-network-wired fa-w-20 fa-2x",ref:t},a),pt)},ht=r.a.forwardRef(function(e,t){return r.a.createElement(_t,dt({svgRef:t},e))});a.p;function vt(){return(vt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function gt(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var bt=r.a.createElement("path",{fill:"currentColor",d:"M266.34 277.65l11.31-11.31c3.12-3.12 3.12-8.19 0-11.31L230.62 208l47.03-47.03c3.12-3.12 3.12-8.19 0-11.31l-11.31-11.31c-3.12-3.12-8.19-3.12-11.31 0l-64 64c-3.12 3.12-3.12 8.19 0 11.31l64 64c3.13 3.12 8.19 3.12 11.31-.01zm96-11.31l11.31 11.31c3.12 3.12 8.19 3.12 11.31 0l64-64c3.12-3.12 3.12-8.19 0-11.31l-64-64c-3.12-3.12-8.19-3.12-11.31 0l-11.31 11.31c-3.12 3.12-3.12 8.19 0 11.31L409.38 208l-47.03 47.03a7.994 7.994 0 0 0-.01 11.31zM624 368h-48V96c0-35.3-28.72-64-64-64H128c-35.28 0-64 28.7-64 64v272H16c-8.84 0-16 7.16-16 16v48c0 44.11 35.88 80 80 80h480c44.12 0 80-35.89 80-80v-48c0-8.84-7.16-16-16-16zM96 96c0-17.67 14.33-32 32-32h384c17.67 0 32 14.33 32 32v272H391.13c-4.06 0-7.02 3.13-7.92 7.09C379.98 389.35 367.23 400 352 400h-64c-15.23 0-27.98-10.65-31.21-24.91-.9-3.96-3.86-7.09-7.92-7.09H96V96zm512 336c0 26.47-21.53 48-48 48H80c-26.47 0-48-21.53-48-48v-32h194.75c6.59 18.62 24.38 32 45.25 32h96c20.88 0 38.66-13.38 45.25-32H608v32z",className:""}),Et=function(e){var t=e.svgRef,a=gt(e,["svgRef"]);return r.a.createElement("svg",vt({"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"laptop-code",role:"img",viewBox:"0 0 640 512",className:"svg-inline--fa fa-laptop-code fa-w-20 fa-2x",ref:t},a),bt)},kt=r.a.forwardRef(function(e,t){return r.a.createElement(Et,vt({svgRef:t},e))});a.p;function wt(){return(wt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function yt(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var St=r.a.createElement("path",{fill:"currentColor",d:"M571.7 238.8c2.8-9.9 4.3-20.2 4.3-30.8 0-61.9-50.1-112-112-112-16.7 0-32.9 3.6-48 10.8-31.6-45-84.3-74.8-144-74.8-94.4 0-171.7 74.5-175.8 168.2C39.2 220.2 0 274.3 0 336c0 79.6 64.4 144 144 144h368c70.7 0 128-57.2 128-128 0-47-25.8-90.8-68.3-113.2zM512 448H144c-61.9 0-112-50.1-112-112 0-56.8 42.2-103.7 97-111-.7-5.6-1-11.3-1-17 0-79.5 64.5-144 144-144 60.3 0 111.9 37 133.4 89.6C420 137.9 440.8 128 464 128c44.2 0 80 35.8 80 80 0 18.5-6.3 35.6-16.9 49.2C573 264.4 608 304.1 608 352c0 53-43 96-96 96z",className:""}),jt=function(e){var t=e.svgRef,a=yt(e,["svgRef"]);return r.a.createElement("svg",wt({"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"cloud",role:"img",viewBox:"0 0 640 512",className:"svg-inline--fa fa-cloud fa-w-20 fa-2x",ref:t},a),St)},At=r.a.forwardRef(function(e,t){return r.a.createElement(jt,wt({svgRef:t},e))}),Nt=(a.p,r.a.memo(function(e){var t=[{icon:r.a.createElement(ht,null),headerPart1:"Backend",headerPart2:"Development",description:"I develop server-side applications using best-in practice technologies & design patterns."},{icon:r.a.createElement(kt,null),headerPart1:"Frontend",headerPart2:"Development",description:"I use exemplary techniques and frameworks to build pixel-perfect user interfaces and bring them to life."},{icon:r.a.createElement(At,null),headerPart1:"Cloud",headerPart2:"Computing",description:"I provide top cloud architecture solutions to successfully meet the strategic needs."}],a={java:80,javascript:80,typescript:85,html:95,css:90,scss:85,react:80,angular:85,"spring boot":65,express:65,aws:70,circleci:65};return r.a.createElement(r.a.Fragment,null,r.a.createElement(ot,{animate:e.animate,colClass:"col-12 col-lg-6",firstHalfHeader:"EXPER",secondHalfHeader:"TISE"},t.map(function(t){var a=Object.keys(t);return r.a.createElement(st,{key:t[a[1]],animate:e.animate,icon:t[a[0]],headerPart1:t[a[1]],headerPart2:t[a[2]],description:t[a[3]]})})),r.a.createElement("div",{className:"col-lg-1 col-md-1"}),r.a.createElement(ot,{animate:e.animate,colClass:"col-lg-5 col-md-10 col-12",firstHalfHeader:"TECHNO",secondHalfHeader:"LOGIES"},r.a.createElement("div",{className:ut.a.SkillWrapper},Object.keys(a).map(function(t){return r.a.createElement(nt,{key:t,animate:e.animate,skill:t,percent:a[t]})}))))})),Ot=a(37),Ct=a.n(Ot),xt=a(129),It=a.n(xt),Ht=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null),a=Object(n.useState)(!1),i=Object(X.a)(a,2),o=i[0],l=i[1],c=Object(n.useState)(!1),s=Object(X.a)(c,2),m=s[0],u=s[1],d=window.navigator.userAgent,f=d.indexOf("MSIE "),p=d.indexOf("Trident/");return Object(n.useEffect)(function(){(p>0||f>0)&&u(!0);var a=function a(){m||window.matchMedia("only screen and (max-width: 767px)").matches?e.current.getBoundingClientRect().bottom<0?(t.current.style.position="scroll",t.current.style.top=0):e.current.getBoundingClientRect().top>window.innerHeight?(t.current.style.position="scroll",t.current.style.top=0):e.current.getBoundingClientRect().top<window.innerHeight&&(t.current.style.position="fixed",t.current.style.bottom=0,t.current.style.top=0):(t.current.style.backgroundAttachment="fixed",window.removeEventListener("scroll",a))},n=function(){window.matchMedia("only screen and (max-width: 767px)").matches&&window.addEventListener("scroll",a),l(!o)};return window.addEventListener("scroll",a),window.addEventListener("resize",n),a(),function(){window.removeEventListener("resize",n),window.removeEventListener("scroll",a)}},[o,f,p,m]),r.a.createElement("div",{ref:e,className:Ct.a.parallax},r.a.createElement("div",{ref:t,className:Ct.a.ParallaxMobile,style:{backgroundImage:"url(".concat(It.a,")")}}),r.a.createElement("div",{className:Ct.a.tint},r.a.createElement("div",{className:Ct.a.TopAngle,style:{borderLeftWidth:window.innerWidth}}),r.a.createElement("div",{className:Ct.a.BottomAngle,style:{borderLeftWidth:window.innerWidth}})))},Lt={markActive:[!1,!1,!1,!1,!1],animateHeader:[!1,!1,!1,!1],animateSkills:!1,animateAbout:!1},Rt=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).state=Lt,a.aboutRef=void 0,a.workRef=void 0,a.contactRef=void 0,a.skillRef=void 0,a.headerRef=void 0,a.linkClicked=function(e){switch(e.toLowerCase()){case"about":window.scrollTo(0,a.aboutRef.current.offsetTop+57);break;case"work":window.scrollTo(0,a.workRef.current.offsetTop-24);break;case"contact":window.scrollTo(0,a.contactRef.current.offsetTop-24);break;case"skills":window.scrollTo(0,a.skillRef.current.offsetTop+54);break;default:window.scrollTo(0,0)}},a.addClasses=function(){var e=a.aboutRef.current.getBoundingClientRect().top,t=a.skillRef.current.getBoundingClientRect().top,n=a.workRef.current.getBoundingClientRect().top,r=a.contactRef.current.getBoundingClientRect().top;r<=100||window.innerHeight+window.scrollY>=document.body.offsetHeight?a.state.markActive[4]||a.setState({markActive:a.state.markActive.map(function(e,t){return 4===t})}):n<=100?a.state.markActive[3]||a.setState({markActive:a.state.markActive.map(function(e,t){return 3===t})}):t<=100?a.state.markActive[2]||a.setState({markActive:a.state.markActive.map(function(e,t){return 2===t})}):e<=0?a.state.markActive[1]||a.setState({markActive:a.state.markActive.map(function(e,t){return 1===t})}):e>0&&(a.state.markActive[0]||a.setState({markActive:a.state.markActive.map(function(e,t){return 0===t})})),a.addAnimateClass(e,t,n,r)},a.addAnimateClass=function(e,t,n,r){var i=window.innerHeight/2.8;a.state.animateHeader.every(function(e){return e})||a.animateHeaders(i,e,t,n,r),a.state.animateAbout||a.animateAbout(i,e),a.state.animateSkills||a.animateSkill(i,t)},a.aboutRef=r.a.createRef(),a.workRef=r.a.createRef(),a.contactRef=r.a.createRef(),a.skillRef=r.a.createRef(),a.headerRef=r.a.createRef(),a}return Object(u.a)(t,e),Object(m.a)(t,null,[{key:"isDesktop",value:function(){return window.matchMedia("only screen and (min-width: 768px)").matches}}]),Object(m.a)(t,[{key:"animateHeaders",value:function(e,t,a,n,r){if(!this.state.animateHeader[3]&&(r<e||window.innerHeight+window.scrollY>=document.body.offsetHeight)){var i=this.state.animateHeader.slice();i[3]=!0,this.setState({animateHeader:i})}if(!this.state.animateHeader[2]&&n<e){var o=this.state.animateHeader.slice();o[2]=!0,this.setState({animateHeader:o})}if(!this.state.animateHeader[1]&&a<e){var l=this.state.animateHeader.slice();l[1]=!0,this.setState({animateHeader:l})}if(!this.state.animateHeader[0]&&t<e){var c=this.state.animateHeader.slice();c[0]=!0,this.setState({animateHeader:c})}}},{key:"animateAbout",value:function(e,t){if(t+=200,!this.state.animateAbout&&t<=e){this.setState({animateAbout:!0})}}},{key:"animateSkill",value:function(e,t){if(t+=200,!this.state.animateSkills&&t<=e){this.setState({animateSkills:!0})}}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.addClasses);var e,t=document.body;window.addEventListener("scroll",function(){clearTimeout(e),t.classList.contains("disable-hover")||t.classList.add("disable-hover"),e=setTimeout(function(){t.classList.remove("disable-hover")},100)},!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.addClasses)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(et,null),r.a.createElement(j,{ref:this.headerRef,clicked:this.linkClicked,markActive:this.state.markActive}),r.a.createElement("main",null,r.a.createElement(C,{animateZoomIn:this.state.animateHeader[0],ref:this.aboutRef,title:"ABOUT me",style:{backgroundColor:"#f0f0f0",paddingTop:"10em"}},r.a.createElement(T,{animateAbout:this.state.animateAbout})),r.a.createElement(Ht,null),r.a.createElement(C,{animateSlideInRight:this.state.animateHeader[1],ref:this.skillRef,title:"Skills",style:{backgroundColor:"#ffffff",paddingTop:"10em"}},r.a.createElement(Nt,{animate:this.state.animateSkills})),r.a.createElement("div",{style:{background:"linear-gradient(to right top, #e5e0da 50%, #ffffff 50%)",height:"calc(16px + (90 - 16) * ((100vw - 250px) / (1600 - 250)))"}}),r.a.createElement(C,{animateSlideInLeft:this.state.animateHeader[2],ref:this.workRef,title:"Projects",style:{backgroundColor:"#e5e0da"}},r.a.createElement(Ze,null)),r.a.createElement("div",{style:{background:"linear-gradient(to right bottom, #e5e0da 50%, #f0f0f0 50%)",height:"calc(16px + (90 - 16) * ((100vw - 250px) / (1600 - 250)))"}}),r.a.createElement(C,{animateSlideInRight:this.state.animateHeader[3],ref:this.contactRef,title:"contact",style:{backgroundColor:"#f0f0f0"}},r.a.createElement(J,null))),r.a.createElement(Z,null))}}]),t}(n.Component),Pt=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Rt,null))};a(144);o.a.render(r.a.createElement(Pt,null),document.getElementById("root"))},25:function(e,t,a){e.exports={bar1:"HamburgerMenu_bar1__2Nyqn",bar2:"HamburgerMenu_bar2__1Htyb",bar3:"HamburgerMenu_bar3__3hSZP",change:"HamburgerMenu_change__ETwYb",HamburgerMenu:"HamburgerMenu_HamburgerMenu__bjfAL"}},26:function(e,t,a){e.exports={ModalContainer:"Modal_ModalContainer__2tOer",Modal:"Modal_Modal__3IdCq",close:"Modal_close__1V21V",Title:"Modal_Title__3vGtj",About:"Modal_About__Q14Bn",Description:"Modal_Description__3eCzU",CarouselInfo:"Modal_CarouselInfo__2tFbR"}},29:function(e,t,a){e.exports={img:"AboutMe_img__3YupZ",Figure:"AboutMe_Figure__1MxAW",article:"AboutMe_article__1svT4",link:"AboutMe_link__1Mqiv",AnimateArticle:"AboutMe_AnimateArticle__3RKXn",slideInLeft:"AboutMe_slideInLeft__2nQye",AnimateFigure:"AboutMe_AnimateFigure__1H96R",slideInRight:"AboutMe_slideInRight__Tzww8",zoom:"AboutMe_zoom__2vUS4"}},30:function(e,t,a){e.exports={Carousel:"Carousel_Carousel__3rUWG",Prev:"Carousel_Prev__VDUg4",Next:"Carousel_Next__1d6EX",CarouselSlideWrapper:"Carousel_CarouselSlideWrapper__fyto9",Forwards:"Carousel_Forwards__2RBDv",moveForward:"Carousel_moveForward__19Jvv",Backwards:"Carousel_Backwards__sVFp3",moveBackwards:"Carousel_moveBackwards__2rBpl"}},31:function(e,t,a){e.exports={HeaderLine:"Home_HeaderLine__13ikW",BannerText:"Home_BannerText__1qKy4",Home:"Home_Home__EwjGr",Particles:"Home_Particles__3fbIs",BannerBlock:"Home_BannerBlock__t1xV5",Animate:"Home_Animate__3MNZW"}},32:function(e,t,a){e.exports={Wrapper:"SkillsLayout_Wrapper__1rZvY",HeaderWrapper:"SkillsLayout_HeaderWrapper__6SP-x",Animate:"SkillsLayout_Animate__2MFe5",AnimateSlideInLeft:"SkillsLayout_AnimateSlideInLeft__1cAEt",slideInLeft:"SkillsLayout_slideInLeft__3CJcF",AnimateSlideInRight:"SkillsLayout_AnimateSlideInRight__1uUdX",slideInRight:"SkillsLayout_slideInRight__gvV7i",LessMarginTop:"SkillsLayout_LessMarginTop__2pPxx"}},36:function(e,t,a){e.exports={Card:"Card_Card__nfN7q",TopMargin:"Card_TopMargin__1pqsy",Wrapper:"Card_Wrapper__1QSjy",CardDescription:"Card_CardDescription__2HX3q",Animate:"Card_Animate__bH_l_",showCard:"Card_showCard__14ysy"}},37:function(e,t,a){e.exports={parallax:"Parallax_parallax__18uCD",ParallaxMobile:"Parallax_ParallaxMobile__1aYz2",TopAngle:"Parallax_TopAngle__2BQkR",BottomAngle:"Parallax_BottomAngle__dGcxw",tint:"Parallax_tint__1uV7w"}},44:function(e,t,a){e.exports={Header:"Header_Header__1CTzX",HeaderSticky:"Header_HeaderSticky__3KOjn",HeaderAnimate:"Header_HeaderAnimate__3qEZ6",dropIn:"Header_dropIn__27aYs"}},45:function(e,t,a){e.exports={Footer:"Footer_Footer__37hEc",FooterWrapper:"Footer_FooterWrapper__oal5L",FooterIconsWrapper:"Footer_FooterIconsWrapper__3JpaQ",FooterAbout:"Footer_FooterAbout__1QOKd"}},46:function(e,t,a){e.exports={Projects:"Projects_Projects__3BrIo",More:"Projects_More__1RzIu",Visible:"Projects_Visible__3Aajk",Gutter:"Projects_Gutter__3xImJ"}},56:function(e,t,a){e.exports={SocialLinks:"SocialLinks_SocialLinks__3t54R",IconsBox:"SocialLinks_IconsBox__1ptmX",Icons:"SocialLinks_Icons__fGCl8",moveUpDown:"SocialLinks_moveUpDown__3J0Fa"}},75:function(e,t,a){e.exports={NavigationListItem:"NavigationListItem_NavigationListItem__2hY4l",active:"NavigationListItem_active__1IfOS"}},76:function(e,t,a){e.exports={NavigationList:"NavigationList_NavigationList__15jhw",OpenNavBar:"NavigationList_OpenNavBar__1urcH"}}},[[132,1,2]]]);
//# sourceMappingURL=main.13799eca.chunk.js.map