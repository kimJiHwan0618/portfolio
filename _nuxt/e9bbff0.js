(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,3,4,5,6],{204:function(t,e,l){t.exports=l.p+"img/logo1.61fd32b.png"},205:function(t,e,l){t.exports=l.p+"img/logo3.0b64f89.png"},206:function(t,e,l){t.exports=l.p+"img/logo2.c8de362.png"},207:function(t,e,l){t.exports=l.p+"img/bg.98da9c3.svg"},208:function(t,e,l){"use strict";l.r(e);var n={},r=l(16),component=Object(r.a)(n,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"sub-section"},[e("div",{staticClass:"section-title"},[e("h3",[this._v("About")])])])}],!1,null,null,null);e.default=component.exports},209:function(t,e,l){"use strict";l.r(e);var n={data:function(){return{aboutMe:[{title:"UI Development",number:"01",text:"웹 퍼블리싱(HTML, CSS, Jquery, JS)에 대한 이해도가 높습니다. 유지보수를 고려한 코드 작성, Jquery 플러그인 활용 경험으로, 효율적인 퍼블리싱을 할 수 있습니다.",img:"https://kimjihwan0618.github.io/web/assets/images/about/me1.png"},{title:"UI/UX Design",number:"02",text:"개발자로서 나아가기 위해 공부하지만, UI/UX 디자인에 흥미가많아서, 트렌디한 디자인을 찾으면 XD로 카피해보면서 디자인 공부를 하고 있습니다.",img:"https://kimjihwan0618.github.io/web/assets/images/about/me2.png"},{title:"My Character",number:"03",text:"다양하게 개발할수 있는 경험을 좋아합니다. 프로젝트들을 하면서, 해보지 않았던 기능을 구현하는데에 있어서 만족감을 느끼고, 다양하게 배우는 것을 좋아합니다.",img:"https://kimjihwan0618.github.io/web/assets/images/about/me3.png"}],aboutMeIndex:0}},methods:{arrowLeft:function(){0==this.aboutMeIndex&&(this.aboutMeIndex=3),this.aboutMeIndex--,this.$refs.aboutMeNum.innerHTML=this.aboutMe[this.aboutMeIndex].number,this.$refs.aboutMeTxt.innerHTML=this.aboutMe[this.aboutMeIndex].text,this.$refs.aboutMeTitle.innerHTML=this.aboutMe[this.aboutMeIndex].title,this.$refs.circleMove.style.left=2*this.aboutMeIndex*10+"px",this.$refs.aboutImg[0].classList.remove("on"),this.$refs.aboutImg[1].classList.remove("on"),this.$refs.aboutImg[2].classList.remove("on"),this.$refs.aboutImg[this.aboutMeIndex].classList.add("on")},arrowRight:function(){2==this.aboutMeIndex&&(this.aboutMeIndex=-1),this.aboutMeIndex++,this.$refs.aboutMeNum.innerHTML=this.aboutMe[this.aboutMeIndex].number,this.$refs.aboutMeTxt.innerHTML=this.aboutMe[this.aboutMeIndex].text,this.$refs.aboutMeTitle.innerHTML=this.aboutMe[this.aboutMeIndex].title,this.$refs.circleMove.style.left=2*this.aboutMeIndex*10+"px",this.$refs.aboutImg[0].classList.remove("on"),this.$refs.aboutImg[1].classList.remove("on"),this.$refs.aboutImg[2].classList.remove("on"),this.$refs.aboutImg[this.aboutMeIndex].classList.add("on")}},mounted:function(){this.$refs.aboutImg[this.aboutMeIndex].classList.add("on"),console.log(this.$refs.aboutImg)}},r=l(16),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"sub-section left"},[t._m(0),t._v(" "),l("div",{staticClass:"section-sub-title"},[l("h4",[t._v("About Me")]),t._v(" "),l("ul",[t._l(t.aboutMe,(function(t){return l("li",{key:t.img,ref:"circleIndex",refInFor:!0})})),t._v(" "),l("span",{ref:"circleMove"})],2)]),t._v(" "),l("div",{staticClass:"about-me-box about-box"},[l("div",{staticClass:"left"},t._l(t.aboutMe,(function(t){return l("img",{key:t.img,ref:"aboutImg",refInFor:!0,attrs:{src:t.img,alt:""}})})),0),t._v(" "),l("div",{staticClass:"right"},[l("div",{staticClass:"slide-list"},[l("h5",{staticClass:"title"},[l("span",{ref:"aboutMeTitle",staticClass:"text"},[t._v("UI Development")]),t._v(" "),l("span",{ref:"aboutMeNum",staticClass:"num"},[t._v("01")])]),t._v(" "),l("p",{ref:"aboutMeTxt",staticClass:"txt"},[t._v("웹 퍼블리싱(HTML, CSS, Jquery, JS)에 대한 이해도가 높습니다.\n              유지보수를 고려한 코드 작성, Jquery 플러그인 활용 경험으로,\n              효율적인 퍼블리싱을 할 수 있습니다.")])]),t._v(" "),l("div",{staticClass:"slide-btn"},[l("span",{ref:"arrowLeft",staticClass:"arrow-left",on:{click:t.arrowLeft}},[l("svg",{attrs:{id:"그룹_264","data-name":"그룹 264",xmlns:"http://www.w3.org/2000/svg",width:"43",height:"43",viewBox:"0 0 43 43"}},[l("g",{attrs:{id:"타원_129","data-name":"타원 129",transform:"translate(0)",fill:"#fff",stroke:"#e3e4f8","stroke-width":"1"}},[l("circle",{attrs:{cx:"21.5",cy:"21.5",r:"21.5",stroke:"none"}}),t._v(" "),l("circle",{attrs:{cx:"21.5",cy:"21.5",r:"21",fill:"none"}})]),t._v(" "),l("path",{attrs:{id:"합치기_23","data-name":"합치기 23",d:"M8.1,18.68.83,11.4A1.622,1.622,0,0,1,.4,10.649a1.63,1.63,0,0,1,.464-2.51,1.629,1.629,0,0,1,.287-.387L8.426.477a1.629,1.629,0,0,1,2.3,2.3L5.563,7.949H21.491a1.629,1.629,0,0,1,0,3.258H5.24l5.168,5.169a1.629,1.629,0,1,1-2.3,2.3Z",transform:"translate(9.912 11.746)",fill:"#ced0ee"}})])]),t._v(" "),l("span",{ref:"arrowRight",staticClass:"arrow-right",on:{click:t.arrowRight}},[l("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"43",height:"43",viewBox:"0 0 43 43"}},[l("g",{attrs:{id:"그룹_265","data-name":"그룹 265",transform:"translate(43 42.963) rotate(180)"}},[l("g",{attrs:{id:"타원_129","data-name":"타원 129",transform:"translate(0 -0.037)",fill:"#fff",stroke:"#e3e4f8","stroke-width":"1"}},[l("circle",{attrs:{cx:"21.5",cy:"21.5",r:"21.5",stroke:"none"}}),t._v(" "),l("circle",{attrs:{cx:"21.5",cy:"21.5",r:"21",fill:"none"}})]),t._v(" "),l("path",{attrs:{id:"합치기_23","data-name":"합치기 23",d:"M8.1,18.68.83,11.4A1.622,1.622,0,0,1,.4,10.649a1.63,1.63,0,0,1,.464-2.51,1.629,1.629,0,0,1,.287-.387L8.426.477a1.629,1.629,0,0,1,2.3,2.3L5.563,7.949H21.491a1.629,1.629,0,0,1,0,3.258H5.24l5.168,5.169a1.629,1.629,0,1,1-2.3,2.3Z",transform:"translate(9.764 12.111)",fill:"#ced0ee"}})])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-title"},[e("h3",[this._v("About")])])}],!1,null,null,null);e.default=component.exports},210:function(t,e,l){"use strict";l.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-box"},[n("ul",[n("li",[n("p",[n("img",{attrs:{src:l(204),alt:""}})]),t._v(" "),n("a",{attrs:{href:"#"}},[n("span",{staticClass:"name"},[t._v("강남이젠컴퓨터학원")]),t._v(" "),n("span",{staticClass:"date"},[t._v("2020.02 ~ 2020.07")])])]),t._v(" "),n("li",[n("p",[n("img",{attrs:{src:l(205),alt:""}})]),t._v(" "),n("a",{attrs:{href:"#"}},[n("span",{staticClass:"name"},[t._v("(주)제제컴즈")]),t._v(" "),n("span",{staticClass:"date"},[t._v("2020.07 ~ 2020.10")])])]),t._v(" "),n("li",[n("p",[n("img",{attrs:{src:l(206),alt:""}})]),t._v(" "),n("a",{attrs:{href:"#"}},[n("span",{staticClass:"name"},[t._v("(주)흰곰")]),t._v(" "),n("span",{staticClass:"date"},[t._v("2020.11 ~")])])])])])}],r={data:function(){return{date:new Date,firstCareer:new Date(2020,6,1),diffText:5,nowText:"gd"}},mounted:function(){var t=this.date.getFullYear(),e=this.date.getMonth()+1,l=this.date.getDate();this.nowText=t+"년 "+e+"월 "+l+"일 기준";var n=this.date-this.firstCareer;this.diffText=parseInt(n/2592e6)}},o=l(16),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"sub-section right"},[l("div",{staticClass:"section-sub-title"},[l("h4",[t._v("About Career")]),t._v(" "),l("p",{staticClass:"today-date-txt"},[l("span",{staticClass:"today"},[t._v(t._s(t.nowText))]),t._v(" "),l("span",{staticClass:"total-career"},[t._v("경력 "+t._s(t.diffText)+"개월")])])]),t._v(" "),t._m(0)])}),n,!1,null,null,null);e.default=component.exports},211:function(t,e,l){"use strict";l.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"right"},[e("img",{attrs:{src:l(207),alt:""}})])}],r={data:function(){return{clickIndex:0,aboutSkill:[{title:"HTML",bigImg:"https://kimjihwan0618.github.io/web/assets/images/skill/big-html.svg",smallImg:"https://kimjihwan0618.github.io/web/assets/images/skill/small-html.svg",text:"기본적인 코딩표준을 준수한 HTML을 작성할 수 있습니다."},{title:"CSS",bigImg:"https://kimjihwan0618.github.io/web/assets/images/skill/big-css.svg",smallImg:"https://kimjihwan0618.github.io/web/assets/images/skill/small-css.svg",text:"Css 설명입니다."},{title:"Jquery",bigImg:"https://kimjihwan0618.github.io/web/assets/images/skill/big-jquery.svg",smallImg:"https://kimjihwan0618.github.io/web/assets/images/skill/small-jquery.svg",text:"Jquery 설명입니다."},{title:"JavaScript",bigImg:"https://kimjihwan0618.github.io/web/assets/images/skill/big-script.svg",smallImg:"https://kimjihwan0618.github.io/web/assets/images/skill/small-script.svg",text:"Javascript 설명입니다."},{title:"Sass",bigImg:"https://kimjihwan0618.github.io/web/assets/images/skill/big-sass.svg",smallImg:"https://kimjihwan0618.github.io/web/assets/images/skill/small-sass.svg",text:"Sass 설명입니다."},{title:"Vue",bigImg:"https://kimjihwan0618.github.io/web/assets/images/skill/big-vue.svg",smallImg:"https://kimjihwan0618.github.io/web/assets/images/skill/small-vue.svg",text:"Vue 설명입니다."},{title:"Nuxt",bigImg:"https://kimjihwan0618.github.io/web/assets/images/skill/big-nuxt.svg",smallImg:"https://kimjihwan0618.github.io/web/assets/images/skill/small-nuxt.svg",text:"Nuxt 설명입니다."},{title:"Git",bigImg:"https://kimjihwan0618.github.io/web/assets/images/skill/big-git.svg",smallImg:"https://kimjihwan0618.github.io/web/assets/images/skill/small-git.svg",text:"Git 설명입니다."},{title:"Xd",bigImg:"https://kimjihwan0618.github.io/web/assets/images/skill/big-xd.svg",smallImg:"https://kimjihwan0618.github.io/web/assets/images/skill/small-xd.svg",text:"Xd 설명입니다."},{title:"Spring",bigImg:"https://kimjihwan0618.github.io/web/assets/images/skill/big-spring.svg",smallImg:"https://kimjihwan0618.github.io/web/assets/images/skill/small-spring.svg",text:"Spring 설명입니다."}]}},methods:{smallImgClick:function(t){this.$refs.smallImg[this.clickIndex].classList.remove("on"),this.$refs.smallImg[t].classList.add("on"),this.$refs.bigImg[this.clickIndex].classList.remove("on"),this.$refs.bigImg[t].classList.add("on"),this.clickIndex=t}},mounted:function(){this.$refs.smallImg[0].classList.add("on"),this.$refs.bigImg[0].classList.add("on")}},o=l(16),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"sub-section left"},[l("div",{staticClass:"section-sub-title"},[l("h4",[t._v("About Skill")]),t._v(" "),l("div",{staticClass:"about-skill-box"},[l("div",{staticClass:"left"},[t._l(t.aboutSkill,(function(e){return l("dl",{key:e.bigImg,ref:"bigImg",refInFor:!0,staticClass:"top"},[l("dt",{staticClass:"big-img"},[l("img",{attrs:{src:e.bigImg,alt:""}})]),t._v(" "),l("dd",{staticClass:"text"},[l("dl",[l("dt",[t._v(t._s(e.title))]),t._v(" "),l("dd",[t._v(" "+t._s(e.text))])])])])})),t._v(" "),l("div",{staticClass:"bottom"},t._l(t.aboutSkill,(function(e,n){return l("span",{key:e.smallImg,ref:"smallImg",refInFor:!0,on:{click:function(e){return t.smallImgClick(n)}}},[l("img",{attrs:{src:e.smallImg,alt:""}})])})),0)],2),t._v(" "),t._m(0)])])])}),n,!1,null,null,null);e.default=component.exports},212:function(t,e,l){"use strict";l.r(e);var n=l(16),component=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"main-section"},[l("img",{attrs:{src:"https://kimjihwan0618.github.io/web/assets/images/main-section/circle.svg",alt:""}}),t._v(" "),l("img",{attrs:{src:"https://kimjihwan0618.github.io/web/assets/images/main-section/circle2.svg",alt:""}}),t._v(" "),l("img",{attrs:{src:"https://kimjihwan0618.github.io/web/assets/images/main-section/circle.svg",alt:""}}),t._v(" "),l("img",{attrs:{src:"https://kimjihwan0618.github.io/web/assets/images/main-section/circle2.svg",alt:""}}),t._v(" "),l("img",{attrs:{src:"https://kimjihwan0618.github.io/web/assets/images/main-section/circle.svg",alt:""}}),t._v(" "),l("img",{attrs:{src:"https://kimjihwan0618.github.io/web/assets/images/main-section/people1.png",alt:""}}),t._v(" "),l("img",{attrs:{src:"https://kimjihwan0618.github.io/web/assets/images/main-section/people2.png",alt:""}}),t._v(" "),l("img",{attrs:{src:"https://kimjihwan0618.github.io/web/assets/images/main-section/people3.png",alt:""}}),t._v(" "),l("img",{attrs:{src:"https://kimjihwan0618.github.io/web/assets/images/main-section/people4.png",alt:""}}),t._v(" "),l("div",{staticClass:"txt-box"},[l("div",{staticClass:"txt-box-inner"},[l("p",[t._v("안녕하세요")]),t._v(" "),l("p",[l("span",[t._v('"프론트엔트 개발자"')]),t._v("를 꿈꾸는")]),t._v(" "),l("p",[t._v("JIHWAN KIM의 사이트입니다.")])])])])}],!1,null,null,null);e.default=component.exports},213:function(t,e,l){"use strict";l.r(e);var header=l(139),n=l(140),r=l(212),o=l(209),c=l(210),m=l(211),h=l(208),v={components:{Header:header.a,MobileBar:n.a,MainSection:r.default,SubSection1:o.default,SubSection2:c.default,SubSection3:m.default,Project:h.default},methods:{mobileMenuClick:function(){this.$refs.mobileMenutBar.$el.classList.toggle("on")}}},f=l(16),component=Object(f.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Header",{on:{test:this.mobileMenuClick}}),this._v(" "),e("MobileBar",{ref:"mobileMenutBar",staticClass:"mobileMenutBar"}),this._v(" "),e("div",{staticClass:"container"},[e("main",[e("MainSection"),this._v(" "),e("SubSection1"),this._v(" "),e("SubSection2"),this._v(" "),e("SubSection3"),this._v(" "),e("Project")],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);