(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{17:function(e,t,l){},25:function(e,t,l){},26:function(e,t,l){},27:function(e,t,l){},29:function(e,t,l){},30:function(e,t,l){},31:function(e,t,l){},32:function(e,t,l){},43:function(e,t,l){},44:function(e,t,l){"use strict";l.r(t);var s=l(1),n=l.n(s),a=l(10),c=l.n(a),i=(l(25),l(26),l(2)),o=(l(27),l(6)),r=l(0);function h(){var e=Object(s.useState)(!0),t=Object(i.a)(e,2),l=t[0],n=t[1],a=Object(s.useState)(!1),c=Object(i.a)(a,2),h=c[0],j=c[1],d=Object(s.useState)(!1),b=Object(i.a)(d,2),m=b[0],O=b[1],u=Object(s.useState)(!1),x=Object(i.a)(u,2),p=x[0],v=x[1],N=Object(s.useState)(!1),f=Object(i.a)(N,2),w=f[0],g=f[1];return Object(r.jsx)("nav",{id:"navbar",className:"navbar fixed-top bg-dark navbar-expand-lg navbar-dark p-md-3",children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)("a",{className:"navbar-brand",children:"Mason Watson"}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#toggleMobileMenu","aria-controls":"toggleMobileMenu","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("i",{class:"bi bi-list"})}),Object(r.jsx)("div",{className:"collapse navbar-collapse",id:"toggleMobileMenu",children:Object(r.jsxs)("ul",{className:"navbar-nav text-center me-auto mb-2 mb-lg-0",children:[Object(r.jsx)(o.b,{className:"link",to:"/",children:Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link ".concat(l?"header-nav-active":"header-nav-inactive"),"aria-current":"page",href:"#",onClick:function(){n(!0),j(!1),O(!1),v(!1),g(!1)},children:"Home"})})}),Object(r.jsx)(o.b,{className:"link",to:"/about",children:Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link ".concat(h?"header-nav-active":"header-nav-inactive"),"aria-current":"page",href:"#",onClick:function(){n(!1),j(!0),O(!1),v(!1),g(!1)},children:"About"})})}),Object(r.jsx)(o.b,{className:"link",to:"/timeline",children:Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link ".concat(m?"header-nav-active":"header-nav-inactive"),"aria-current":"page",href:"#",onClick:function(){n(!1),j(!1),O(!0),v(!1),g(!1)},children:"Timeline"})})}),Object(r.jsx)(o.b,{className:"link",to:"/projects",children:Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link ".concat(w?"header-nav-active":"header-nav-inactive"),"aria-current":"page",href:"#",onClick:function(){n(!1),j(!1),O(!1),v(!1),g(!0)},children:"Projects"})})}),Object(r.jsx)(o.b,{className:"link",to:"/contact",children:Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link ".concat(p?"header-nav-active":"header-nav-inactive"),"aria-current":"page",href:"#",onClick:function(){n(!1),j(!1),O(!1),v(!0),g(!1)},children:"Contact"})})})]})})]})})}l(29);function j(){return Object(r.jsx)("div",{id:"vn-wrapper",className:"vnav-wrapper",children:Object(r.jsx)("nav",{className:"vnav__wrapper",children:Object(r.jsxs)("ul",{className:"vnav",children:[Object(r.jsx)("li",{className:"vnav-li",children:Object(r.jsx)("a",{className:"vnav-a","aria-current":"page",href:"https://www.linkedin.com/in/masonxw/",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("span",{className:"__link",children:"LINKEDIN"})})}),Object(r.jsx)("li",{className:"vnav-li",children:Object(r.jsx)("a",{className:"vnav-a","aria-current":"page",href:"https://github.com/masonwatson",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("span",{className:"__link",children:"GITHUB"})})}),Object(r.jsx)("li",{className:"vnav-li",children:Object(r.jsx)("a",{className:"vnav-a","aria-current":"page",href:"https://www.instagram.com/masonwatson.py/",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("span",{className:"__link",children:"INSTAGRAM"})})}),Object(r.jsx)("li",{className:"vnav-li",children:Object(r.jsx)("a",{className:"vnav-a","aria-current":"page",href:"https://twitter.com/mxwcode",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("span",{className:"__link",children:"TWITTER"})})})]})})})}l(30);var d=0,b=1,m=2;var O=["Software Engineer.","Creative Problem Solver."];function u(){var e=function(e){var t=Object(s.useState)(0),l=Object(i.a)(t,2),n=l[0],a=l[1],c=Object(s.useState)(d),o=Object(i.a)(c,2),r=o[0],h=o[1],j=Object(s.useState)(""),O=Object(i.a)(j,2),u=O[0],x=O[1];return Object(s.useEffect)((function(){switch(r){case d:var t=e[n].slice(0,u.length+1);if(t===u)return void h(b);var l=setTimeout((function(){x(t)}),85);return function(){return clearTimeout(l)};case m:if(!u){var s=n+1;return a(e[s]?s:0),void h(d)}var c=e[n].slice(0,u.length-1),i=setTimeout((function(){x(c)}),75);return function(){return clearTimeout(i)};default:return void setTimeout((function(){h(m)}),3e3)}}),[e,u,n,r]),u}(O);return Object(r.jsx)("div",{id:"home",className:"home-wrapper",children:Object(r.jsx)("div",{className:"home-section",children:Object(r.jsx)("div",{className:"banner-image vh-100 d-flex justify-content-center align-items-center",children:Object(r.jsx)("div",{className:"layer",children:Object(r.jsx)("div",{className:"home-container container-md",children:Object(r.jsx)("div",{className:"row justify-content-start",children:Object(r.jsxs)("div",{className:"home-brand",children:[Object(r.jsx)("div",{className:"home-intro",children:Object(r.jsxs)("span",{children:[Object(r.jsx)("span",{className:"home-intro-space"}),"HELLO WORLD"]})}),Object(r.jsxs)("div",{className:"home-text",children:[Object(r.jsxs)("span",{children:["I am Mason Watson, ",Object(r.jsx)("br",{})]}),Object(r.jsxs)("span",{className:"blinking-cursor",children:["a ",e]})]})]})})})})})})})}l(31);function x(){return Object(r.jsx)("div",{id:"contact",className:"contact-wrapper",children:Object(r.jsx)("div",{className:"contact-section text-center",children:Object(r.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:Object(r.jsxs)("div",{className:"contact-container container-md",children:[Object(r.jsxs)("div",{className:"row justify-content-center",children:[Object(r.jsx)("div",{className:"col-xxl-6 col-sm-12",children:Object(r.jsx)("div",{className:"linkedin-link",children:Object(r.jsx)("a",{className:"contact-link",href:"https://www.linkedin.com/in/masonxw/",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("span",{children:"LINKEDIN"})})})}),Object(r.jsx)("div",{className:"col-xxl-6 col-sm-12",children:Object(r.jsx)("div",{className:"github-link",children:Object(r.jsx)("a",{className:"contact-link",href:"https://github.com/masonwatson",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("span",{children:"GITHUB"})})})})]}),Object(r.jsxs)("div",{className:"row justify-content-center",children:[Object(r.jsx)("div",{className:"col-xxl-6 col-sm-12",children:Object(r.jsx)("div",{className:"instagram-link",children:Object(r.jsx)("a",{className:"contact-link",href:"https://www.instagram.com/masonwatson.py/",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("span",{children:"INSTAGRAM"})})})}),Object(r.jsx)("div",{className:"col-xxl-6 col-sm-12",children:Object(r.jsx)("div",{className:"twitter-link",children:Object(r.jsx)("a",{className:"contact-link",href:"https://twitter.com/mxwcode",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("span",{children:"TWITTER"})})})})]}),Object(r.jsx)("div",{className:"row justify-content-center",children:Object(r.jsx)("div",{className:"col-12",children:Object(r.jsx)("div",{className:"email",children:Object(r.jsx)("span",{children:"MASONXWORK@GMAIL.COM"})})})}),Object(r.jsx)("div",{className:"row justify-content-center",children:Object(r.jsx)("div",{className:"col-12",children:Object(r.jsx)("div",{className:"phone",children:Object(r.jsx)("span",{children:"(956) 313-2333"})})})})]})})})})}l(17);function p(){var e=function(){var e=Object(s.useState)(),t=Object(i.a)(e,2),l=t[0],n=t[1],a=Object(s.useState)(),c=Object(i.a)(a,2),o=c[0],h=c[1],j=Object(s.useState)(),d=Object(i.a)(j,2),b=d[0],m=d[1],O=Object(s.useState)(),u=Object(i.a)(O,2),x=u[0],p=u[1],v=Object(s.useState)(),N=Object(i.a)(v,2),f=N[0],w=N[1];return Object(s.useEffect)((function(){var e=!0,t=new Date("January 7, 2016 11:00:00").getTime();return e&&setInterval((function(){var e=((new Date).getTime()-t)/1e3,l=Math.floor(e/3600/24/365),s=Math.floor(e/3600/24)%365,a=Math.floor(e/3600)%24,c=Math.floor(e/60)%60,i=Math.floor(e)%60;n(l),h(s),m(a),p(c),w(i)})),function(){e=!1}}),[]),Object(r.jsxs)("span",{className:"orange-text",children:[l," years, ",o," days, ",b," hours, ",x," ","minutes, and ",f," seconds"]})}();return Object(r.jsx)("div",{id:"about",className:"about-wrapper",children:Object(r.jsx)("div",{className:"about-section",children:Object(r.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:Object(r.jsx)("div",{className:"about-container container-md",children:Object(r.jsxs)("div",{className:"row justify-content-start",children:[Object(r.jsx)("div",{className:"col-xxl-6 col-sm-12",children:Object(r.jsxs)("div",{className:"about-me-wrapper",children:[Object(r.jsxs)("div",{className:"about-me",children:[Object(r.jsx)("h2",{className:"about-title",children:"About Me."}),Object(r.jsxs)("h4",{className:"about-text",children:["I am a"," ",Object(r.jsx)("span",{className:"orange-text",children:"forward thinking engineer"})," ","who works effectively in dynamic team environments as well as a self directed setting. I am a quick learner that can pick up tech stacks and adapt to the exponential growth of the tech industry."]})]}),Object(r.jsxs)("div",{className:"about-education",children:[Object(r.jsx)("h2",{className:"about-title",children:"I am dedicated to lifelong learning."}),Object(r.jsxs)("h4",{className:"about-text",children:["Bachelor of Science in Computer Science. Texas State University, San Marcos. I have been coding for"," ",e,"."]})]})]})}),Object(r.jsx)("div",{className:"col-xxl-6 col-sm-12",children:Object(r.jsx)("span",{children:"Hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello"})})]})})})})})}l(32);var v=0,N=1,f=2;var w=l(5),g=["TODAY IS A GREAT DAY","CLICK A YEAR","SCROLL DOWN","FIND OUT MORE"];function y(){var e=function(e){var t=Object(s.useState)(0),l=Object(i.a)(t,2),n=l[0],a=l[1],c=Object(s.useState)(v),o=Object(i.a)(c,2),r=o[0],h=o[1],j=Object(s.useState)(""),d=Object(i.a)(j,2),b=d[0],m=d[1];return Object(s.useEffect)((function(){switch(r){case v:var t=e[n].slice(0,b.length+1);if(t===b)return void h(N);var l=setTimeout((function(){m(t)}),75);return function(){return clearTimeout(l)};case f:if(!b){var s=n+1;return a(e[s]?s:0),void h(v)}var c=e[n].slice(0,b.length-1),i=setTimeout((function(){m(c)}),75);return function(){return clearTimeout(i)};default:return void setTimeout((function(){h(f)}),2e3)}}),[e,b,n,r]),b}(g),t=Object(s.useState)(!0),l=Object(i.a)(t,2),n=l[0],a=l[1],c=Object(s.useState)(!1),o=Object(i.a)(c,2),h=o[0],j=o[1],d=Object(s.useState)(!1),b=Object(i.a)(d,2),m=b[0],O=b[1],u=Object(s.useState)(!1),x=Object(i.a)(u,2),p=x[0],y=x[1],S=Object(s.useState)(!1),H=Object(i.a)(S,2),k=H[0],I=H[1],T=Object(s.useState)(!1),_=Object(i.a)(T,2),A=_[0],E=_[1],L=Object(s.useState)(!1),C=Object(i.a)(L,2),M=C[0],D=C[1],R=Object(s.useState)(!1),W=Object(i.a)(R,2),G=W[0],P=W[1],Y=Object(s.useState)(!1),U=Object(i.a)(Y,2),B=(U[0],U[1]),F=Object(s.useState)(!1),K=Object(i.a)(F,2),q=(K[0],K[1]),J=Object(s.useState)(!1),z=Object(i.a)(J,2),V=(z[0],z[1]),X=Object(s.useState)(!1),Q=Object(i.a)(X,2),Z=(Q[0],Q[1]),$=Object(s.useState)(!1),ee=Object(i.a)($,2),te=(ee[0],ee[1]);function le(){window.addEventListener("scroll",(function(){var e;(e=window.innerHeight-window.scrollY-.45*window.innerHeight)>0&&e<=window.innerHeight?a(!0):a(!1),function(e){e>0&&e<=window.innerHeight?j(!0):j(!1)}(2*window.innerHeight-window.scrollY-.45*window.innerHeight),function(e){e>0&&e<=window.innerHeight?O(!0):O(!1)}(3*window.innerHeight-window.scrollY-.45*window.innerHeight),function(e){e>0&&e<=window.innerHeight?y(!0):y(!1)}(4*window.innerHeight-window.scrollY-.45*window.innerHeight),function(e){e>0&&e<=window.innerHeight?I(!0):I(!1)}(5*window.innerHeight-window.scrollY-.45*window.innerHeight),function(e){e>0&&e<=window.innerHeight?E(!0):E(!1)}(6*window.innerHeight-window.scrollY-.45*window.innerHeight),function(e){e>0&&e<=window.innerHeight?D(!0):D(!1)}(7*window.innerHeight-window.scrollY-.45*window.innerHeight),function(e){e>0&&e<=window.innerHeight?P(!0):P(!1)}(8*window.innerHeight-window.scrollY-.45*window.innerHeight),function(e){e>0&&e<=window.innerHeight?B(!0):B(!1)}(9*window.innerHeight-window.scrollY-.45*window.innerHeight),function(e){e>0&&e<=window.innerHeight?q(!0):q(!1)}(10*window.innerHeight-window.scrollY-.45*window.innerHeight),function(e){e>0&&e<=window.innerHeight?V(!0):V(!1)}(11*window.innerHeight-window.scrollY-.45*window.innerHeight),function(e){e>0&&e<=window.innerHeight?Z(!0):Z(!1)}(12*window.innerHeight-window.scrollY-.45*window.innerHeight),function(e){e>0&&e<=window.innerHeight?te(!0):te(!1)}(13*window.innerHeight-window.scrollY-.45*window.innerHeight)}))}return Object(s.useEffect)((function(){var e=!0;return e&&le(),function(){e=!1}}),[]),Object(r.jsxs)("div",{id:"t-wrapper",className:"timeline-wrapper",children:[Object(r.jsx)("nav",{className:"tnav__wrapper",id:"timeline-navbar",children:Object(r.jsxs)("ul",{className:"tnav",children:[Object(r.jsx)("li",{role:"presentation",className:"tnav-li ".concat(n?"active":"inactive"),children:Object(r.jsx)(w.Link,{to:"section0",spy:!0,smooth:!0,offset:0,duration:750,className:"tnav-a",href:"#section0",children:Object(r.jsx)("span",{className:"tnav__date",children:"Today"})})}),Object(r.jsx)("li",{role:"presentation",className:"tnav-li ".concat(h?"active":"inactive"),children:Object(r.jsx)(w.Link,{to:"section1",spy:!0,smooth:!0,offset:0,duration:750,className:"tnav-a",href:"#section1",children:Object(r.jsx)("span",{className:"tnav__date tnav__year",children:"2022"})})}),Object(r.jsx)("li",{role:"presentation",className:"tnav-li ".concat(m?"active":"inactive"),children:Object(r.jsx)(w.Link,{to:"section2",spy:!0,smooth:!0,offset:0,duration:750,className:"tnav-a",href:"#section2",children:Object(r.jsx)("span",{className:"tnav__date tnav__year",children:"2021"})})}),Object(r.jsx)("li",{role:"presentation",className:"tnav-li ".concat(p?"active":"inactive"),children:Object(r.jsx)(w.Link,{to:"section3",spy:!0,smooth:!0,offset:0,duration:750,className:"tnav-a",href:"#section3",children:Object(r.jsx)("span",{className:"tnav__date tnav__year",children:"2020"})})}),Object(r.jsx)("li",{role:"presentation",className:"tnav-li ".concat(k?"active":"inactive"),children:Object(r.jsx)(w.Link,{to:"section4",spy:!0,smooth:!0,offset:0,duration:750,className:"tnav-a",href:"#section4",children:Object(r.jsx)("span",{className:"tnav__date tnav__year",children:"2019"})})}),Object(r.jsx)("li",{role:"presentation",className:"tnav-li ".concat(A?"active":"inactive"),children:Object(r.jsx)(w.Link,{to:"section5",spy:!0,smooth:!0,offset:0,duration:750,className:"tnav-a",href:"#section5",children:Object(r.jsx)("span",{className:"tnav__date tnav__year",children:"2018"})})}),Object(r.jsx)("li",{role:"presentation",className:"tnav-li ".concat(M?"active":"inactive"),children:Object(r.jsx)(w.Link,{to:"section6",spy:!0,smooth:!0,offset:0,duration:750,className:"tnav-a",href:"#section6",children:Object(r.jsx)("span",{className:"tnav__date tnav__year",children:"2017"})})}),Object(r.jsx)("li",{role:"presentation",className:"tnav-li ".concat(G?"active":"inactive"),children:Object(r.jsx)(w.Link,{to:"section7",spy:!0,smooth:!0,offset:0,duration:750,className:"tnav-a",href:"#section7",children:Object(r.jsx)("span",{className:"tnav__date tnav__year",children:"2016"})})})]})}),Object(r.jsx)("section",{className:"section section0",id:"s0",children:Object(r.jsx)("div",{className:"intro-outer-wrapper",children:Object(r.jsx)("div",{className:"intro-inner-wrapper",children:Object(r.jsx)("span",{className:"intro blinking-cursor",children:e})})})}),Object(r.jsx)("section",{className:"section section1 year2022",id:"s1",children:Object(r.jsx)("div",{className:"info-outer-wrapper",children:Object(r.jsxs)("div",{className:"info-inner-wrapper",children:[Object(r.jsxs)("span",{className:"section-subtitle",children:["HIGHLIGHTS",Object(r.jsx)("br",{})]}),Object(r.jsxs)("span",{className:"section-done",children:["Continued Working for Realtor.com, Continued Working on Portfolio Projects",Object(r.jsx)("br",{}),Object(r.jsx)("br",{})]}),Object(r.jsxs)("span",{className:"section-subtitle",children:["WHAT I LEARNED",Object(r.jsx)("br",{})]}),Object(r.jsx)("span",{className:"section-learned",children:"Working for Realtor.com has taught me how to ... ."})]})})}),Object(r.jsx)("section",{className:"section section2 year2021",id:"s2",children:Object(r.jsx)("div",{className:"info-outer-wrapper",children:Object(r.jsxs)("div",{className:"info-inner-wrapper",children:[Object(r.jsxs)("span",{className:"section-subtitle",children:["HIGHLIGHTS",Object(r.jsx)("br",{})]}),Object(r.jsxs)("span",{className:"section-done",children:["Graduated from Texas State University; Started Working for Realtor.com; Worked on School, Personal, and Portfolio Projects",Object(r.jsx)("br",{}),Object(r.jsx)("br",{})]}),Object(r.jsxs)("span",{className:"section-subtitle",children:["NOTABLE COURSES",Object(r.jsx)("br",{})]}),Object(r.jsxs)("span",{className:"section-courses",children:["Computing System Fundamentals, Introduction to Database Systems, Human Factors, and Numerical Analysis",Object(r.jsx)("br",{}),Object(r.jsx)("br",{})]}),Object(r.jsxs)("span",{className:"section-subtitle",children:["WHAT I LEARNED",Object(r.jsx)("br",{})]}),Object(r.jsx)("span",{className:"section-learned",children:"The fundamental concepts underlying the design and implementation of computing systems. The ergonomics applied to the design and use of computing systems. As well as the concepts surrounding database systems, data models, file structures, and query languages."})]})})}),Object(r.jsx)("section",{className:"section section3 year2020",id:"s3",children:Object(r.jsx)("div",{className:"info-outer-wrapper",children:Object(r.jsxs)("div",{className:"info-inner-wrapper",children:[Object(r.jsxs)("span",{className:"section-subtitle",children:["HIGHLIGHTS",Object(r.jsx)("br",{})]}),Object(r.jsxs)("span",{className:"section-done",children:["Completed a Large Portion of Courses in my Major",Object(r.jsx)("br",{}),Object(r.jsx)("br",{})]}),Object(r.jsxs)("span",{className:"section-subtitle",children:["NOTABLE COURSES",Object(r.jsx)("br",{})]}),Object(r.jsxs)("span",{className:"section-courses",children:["Operating Systems, Theory of Automata, Computer Systems Security, Intro to Graphical User Interfaces, Computer Architecture, and Software Engineering",Object(r.jsx)("br",{}),Object(r.jsx)("br",{})]}),Object(r.jsxs)("span",{className:"section-subtitle",children:["WHAT I LEARNED",Object(r.jsx)("br",{})]}),Object(r.jsx)("span",{className:"section-learned",children:"Operating Systems covered topics such as process management, CPU scheduling algorithms, inter-process communication and synchronization, virtual machines, and I/O device management. Theory of Automata introduced me to automata theory, computability, and formal languages. Computer Systems Security covered practical aspects of computer systems security and taught me how to manage and produce code for said systems."})]})})}),Object(r.jsx)("section",{className:"section section4 year2019",id:"s4",children:Object(r.jsx)("div",{className:"info-outer-wrapper",children:Object(r.jsxs)("div",{className:"info-inner-wrapper",children:[Object(r.jsxs)("span",{className:"section-subtitle",children:["HIGHLIGHTS",Object(r.jsx)("br",{})]}),Object(r.jsxs)("span",{className:"section-done",children:["Completed a Large Portion of Courses in my Minor",Object(r.jsx)("br",{}),Object(r.jsx)("br",{})]}),Object(r.jsxs)("span",{className:"section-subtitle",children:["NOTABLE COURSES",Object(r.jsx)("br",{})]}),Object(r.jsxs)("span",{className:"section-courses",children:["Introduction to Probability and Statistics, Numerical Analysis, Discrete Mathematics II, Calculus II",Object(r.jsx)("br",{}),Object(r.jsx)("br",{})]}),Object(r.jsxs)("span",{className:"section-subtitle",children:["WHAT I LEARNED",Object(r.jsx)("br",{})]}),Object(r.jsx)("span",{className:"section-learned",children:"While I do have an abiding passion for Computer Science, I learned that I also have a proclivity for mathematics. Various branches of mathematics are fundamental to essential computer science topics. Discrete Mathematics taught me a lot about Set and Graph Theory. Probability and Statistics became a very important tool later on when covering topics such as process management and CPU scheduling algorithms. Numerical Analysis allowed me to study numerical approximation through various algorithms implemented in MATLAB."})]})})}),Object(r.jsx)("section",{className:"section section5 year2018",id:"s5",children:Object(r.jsx)("div",{className:"info-outer-wrapper",children:Object(r.jsxs)("div",{className:"info-inner-wrapper",children:[Object(r.jsxs)("span",{className:"section-subtitle",children:["NOTABLE COURSES",Object(r.jsx)("br",{})]}),Object(r.jsxs)("span",{className:"section-courses",children:["Data Structures & Algorithms, Object-Oriented Design & Programming",Object(r.jsx)("br",{}),Object(r.jsx)("br",{})]}),Object(r.jsxs)("span",{className:"section-subtitle",children:["WHAT I LEARNED",Object(r.jsx)("br",{})]}),Object(r.jsx)("span",{className:"section-learned",children:"Data Structures & Algorithms and Object-Oriented Design & Programming were two of the most useful courses I took. Data Structures & Algorithms taught me how to implement various data structures (i.e. trees, heaps, hash tables, etc.) to organize data. It also taught me about common algorithms to manipulate data within data structures (i.e. bubble sort, quicksort, insertion sort, etc.). Object-Oriented Design & Programming taught me about essential topics such as inheritance & polymorphism, encapsulation, portability, design patters, exception handling, and multithreading."})]})})}),Object(r.jsx)("section",{className:"section section6 year2017",id:"s6",children:Object(r.jsx)("div",{className:"info-outer-wrapper",children:Object(r.jsxs)("div",{className:"info-inner-wrapper",children:[Object(r.jsxs)("span",{className:"section-subtitle",children:["NOTABLE COURSES",Object(r.jsx)("br",{})]}),Object(r.jsxs)("span",{className:"section-courses",children:["Assembly Language, Foundations of Computer Science II, Discrete Mathematics",Object(r.jsx)("br",{}),Object(r.jsx)("br",{})]}),Object(r.jsxs)("span",{className:"section-subtitle",children:["WHAT I LEARNED",Object(r.jsx)("br",{})]}),Object(r.jsx)("span",{className:"section-learned"})]})})}),Object(r.jsx)("section",{className:"section section7 year2016",id:"s7",children:Object(r.jsx)("div",{className:"info-outer-wrapper",children:Object(r.jsxs)("div",{className:"info-inner-wrapper",children:[Object(r.jsxs)("span",{className:"section-subtitle",children:["HIGHLIGHTS",Object(r.jsx)("br",{})]}),Object(r.jsxs)("span",{className:"section-done",children:["Started at Texas State University",Object(r.jsx)("br",{}),Object(r.jsx)("br",{})]}),Object(r.jsxs)("span",{className:"section-subtitle",children:["NOTABLE COURSES",Object(r.jsx)("br",{})]}),Object(r.jsxs)("span",{className:"section-courses",children:["Foundations of Computer Science, Calculus I",Object(r.jsx)("br",{}),Object(r.jsx)("br",{})]}),Object(r.jsxs)("span",{className:"section-subtitle",children:["WHAT I LEARNED",Object(r.jsx)("br",{})]}),Object(r.jsx)("span",{className:"section-learned"})]})})})]})}l(43),l.p,l.p,l.p,l.p,l.p;function S(){return Object(r.jsx)("div",{id:"project",className:"project-wrapper",children:Object(r.jsx)("div",{className:"project__wrapper"})})}var H=l(3);var k=function(){return Object(r.jsx)(o.a,{basename:"/",children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(h,{}),Object(r.jsxs)(H.c,{children:[Object(r.jsx)(H.a,{path:"/",element:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(u,{}),Object(r.jsx)(j,{})]})}),Object(r.jsx)(H.a,{path:"/about",element:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(p,{}),Object(r.jsx)(j,{})]})}),Object(r.jsx)(H.a,{path:"/timeline",element:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(y,{}),Object(r.jsx)(j,{})]})}),Object(r.jsx)(H.a,{path:"/projects",element:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(S,{}),Object(r.jsx)(j,{})]})}),Object(r.jsx)(H.a,{path:"/contact",element:Object(r.jsx)(x,{})})]})]})})};c.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(k,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.a2c57f91.chunk.js.map