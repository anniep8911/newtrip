(function(){"use strict";var a={3723:function(a,i,t){var e=t(9242),d=t(3396);function s(a,i,t,e,s,l){const n=(0,d.up)("Hdr"),o=(0,d.up)("Main"),r=(0,d.up)("Modal"),c=(0,d.up)("RouterView"),v=(0,d.up)("Ftr");return(0,d.wg)(),(0,d.iD)(d.HY,null,[(0,d.Wm)(n),(0,d.Wm)(o,{title:s.title,hello:s.hello},null,8,["title","hello"]),s.visible?((0,d.wg)(),(0,d.j4)(r,{key:0,onMsg:l.msgBB},null,8,["onMsg"])):(0,d.kq)("",!0),(0,d.Wm)(c,{title:s.title},null,8,["title"]),(0,d.Wm)(v)],64)}const l={class:"hdrWrap"},n={class:"nav"},o=(0,d._)("li",null,"Editor",-1),r=(0,d._)("li",null,"my journey",-1);function c(a,i,t,e,s,c){const v=(0,d.up)("router-link");return(0,d.wg)(),(0,d.iD)("div",l,[(0,d._)("header",null,[(0,d._)("h1",null,[(0,d.Wm)(v,{to:"./"},{default:(0,d.w5)((()=>[(0,d.Uk)("tripstore")])),_:1})]),(0,d._)("ul",n,[(0,d._)("li",null,[(0,d.Wm)(v,{to:"./cnt01"},{default:(0,d.w5)((()=>[(0,d.Uk)("Experience")])),_:1})]),(0,d._)("li",null,[(0,d.Wm)(v,{to:"./cnt02"},{default:(0,d.w5)((()=>[(0,d.Uk)("Plan")])),_:1})]),o,r,(0,d._)("li",{onClick:i[0]||(i[0]=(...a)=>c.resetCook&&c.resetCook(...a))},"reset")])])])}var v={methods:{resetCook(){document.cookie="nobody; path=/; expires = Tue, 19 Jan 2011 03:14:07 GMT",window.location.reload()}}},u=t(89);const m=(0,u.Z)(v,[["render",c]]);var h=m;const p=(0,d.uE)('<div class="bnrWrap" data-v-19f1948d><div class="bnr" data-v-19f1948d><h2 data-v-19f1948d>our tripstore</h2><div class="btn" data-v-19f1948d>contact</div></div></div><div class="ftrWrap" data-v-19f1948d><footer data-v-19f1948d><div class="ftrLeft" data-v-19f1948d><div class="logo" data-v-19f1948d>tripStore</div><h4 data-v-19f1948d>Tripstroe Company. All rights reserved.</h4></div><div class="ftrRgiht" data-v-19f1948d><ul class="nav" data-v-19f1948d><li data-v-19f1948d>Company</li><li data-v-19f1948d>Careeres</li><li data-v-19f1948d>Press</li><li data-v-19f1948d>Foundation</li><li data-v-19f1948d>Private</li></ul><ul class="nav" data-v-19f1948d><li data-v-19f1948d>Get in Touch</li><li data-v-19f1948d>010-888-9999</li><li data-v-19f1948d>pjatopazz@gmail.com</li></ul></div></footer></div>',2);function f(a,i,t,e,d,s){return p}var g={};const _=(0,u.Z)(g,[["render",f],["__scopeId","data-v-19f1948d"]]);var b=_;const q={class:"lightBoxWrap"},x={class:"lightBox"},w=(0,d._)("h2",null,"당신의 이름을 입력해주세요!",-1);function k(a,i,t,s,l,n){return(0,d.wg)(),(0,d.iD)("div",q,[(0,d._)("div",x,[w,(0,d.wy)((0,d._)("input",{type:"text",placeholder:"이름을 입력하세요!","onUpdate:modelValue":i[0]||(i[0]=a=>l.msg=a),onKeypress:i[1]||(i[1]=(0,e.D2)(((...a)=>n.upname&&n.upname(...a)),["enter"])),autofocus:"autofocus"},null,544),[[e.nr,l.msg]]),(0,d._)("div",{class:"btn",onClick:i[2]||(i[2]=(...a)=>n.upname&&n.upname(...a))},"제출하기")])])}var y={emits:["msg"],data(){return{msg:""}},methods:{upname(){this.$emit("msg",this.msg),document.cookie=`${this.msg}; path=/; expires = Tue, 19 Jan 2099 03:14:07 GMT`}}};const W=(0,u.Z)(y,[["render",k]]);var L=W,C=t(7139);const D={class:"mnWrap"},O={class:"mnLeft"},M=(0,d._)("h2",null,[(0,d.Uk)("Trip store "),(0,d._)("br"),(0,d.Uk)(" your journey")],-1),P=(0,d._)("br",null,null,-1),U=(0,d._)("div",{class:"mnRight"},null,-1);function j(a,i,t,e,s,l){return(0,d.wg)(),(0,d.iD)("div",D,[(0,d._)("main",null,[(0,d._)("div",O,[M,(0,d._)("p",null,[(0,d.Uk)((0,C.zw)(t.title)+"님, "+(0,C.zw)(t.hello)+" 당신 여정의 시작과 끝까지,",1),P,(0,d.Uk)(" 단 하나로 끝내는 트립스토어 입니다!")])]),U])])}var E={data(){return{}},props:["title","hello"]};const T=(0,u.Z)(E,[["render",j]]);var Z=T,B={name:"App",data(){return{title:"방문자",visible:!0,hello:""}},components:{Hdr:h,Ftr:b,Modal:L,Main:Z},mounted(){this.$nextTick((function(){""==document.cookie||"nobody"==document.cookie?(this.visible=!0,this.hello="첫 방문이시네요!"):(this.visible=!1,this.title=document.cookie,this.hello="또 만났네요!")}))},methods:{msgBB(a){this.title=a,this.visible=!1,""==a&&(alert("이름을 입력해주세요!"),this.title="방문자",this.visible=!0)}}};const H=(0,u.Z)(B,[["render",s]]);var z=H,G=t(3494),F=t(7749),I=t(8539),R=t(4551),Y=t(2483);const $=a=>((0,d.dD)("data-v-20f33d68"),a=a(),(0,d.Cn)(),a),A={class:"cntWrap"},J={class:"content cnt01"},V=$((()=>(0,d._)("p",null,"당신이 좋아하는 여행타입은? 카드에 커서를 올려보세요!",-1))),K=(0,d.uE)('<section data-v-20f33d68><article data-v-20f33d68><div class="image i1" data-v-20f33d68>활동적인 액티비티 이미지</div><div class="texts" data-v-20f33d68><h3 data-v-20f33d68>활동적인 액티비티</h3></div></article><article data-v-20f33d68><div class="image i2" data-v-20f33d68>데일리 여행 이미지</div><div class="texts" data-v-20f33d68><h3 data-v-20f33d68>데일리 여행</h3></div></article><article data-v-20f33d68><div class="image i3" data-v-20f33d68>패키지여행 이미지</div><div class="texts" data-v-20f33d68><h3 data-v-20f33d68>패키지여행</h3></div></article></section>',1),N=(0,d.uE)('<div class="cntWrap" data-v-20f33d68><div class="content cnt02" data-v-20f33d68><header data-v-20f33d68><h2 data-v-20f33d68>welcome to our world!</h2><h5 data-v-20f33d68>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rem obcaecati amet beatae tempora eligendi!</h5><p data-v-20f33d68>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, veniam dolorum. Dolor voluptatum quisquam quasi facere sequi sapiente error totam molestias cupiditate! Modi veniam beatae voluptatibus, quidem sequi dolorem vitae!&gt;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, veniam dolorum. Dolor voluptatum quisquam quasi facere sequi sapiente error totam molestias cupiditate! Modi veniam beatae voluptatibus, quidem sequi dolorem vitae!&gt;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, veniam dolorum. Dolor voluptatum quisquam quasi facere sequi sapiente error totam molestias cupiditate! Modi veniam beatae voluptatibus, quidem sequi dolorem vitae!</p><div class="btn" data-v-20f33d68>start</div></header><section data-v-20f33d68><article data-v-20f33d68><div class="image" data-v-20f33d68>여행자 이미지</div></article></section></div></div><div class="cntWrap" data-v-20f33d68><div class="content cnt03" data-v-20f33d68><header data-v-20f33d68><h2 data-v-20f33d68>tripstore process</h2><h5 data-v-20f33d68>Lorem ipsum dolor sit amet.</h5></header><section data-v-20f33d68><article data-v-20f33d68><div class="image i1" data-v-20f33d68></div><div class="texts" data-v-20f33d68><h3 data-v-20f33d68>step01</h3><h5 data-v-20f33d68>여행의 시작부터 끝까지</h5><p data-v-20f33d68>교통, 숙박, 코스, 원하는 여행의 종류까지 트립스토어에서 처음부터 끝까지 함께 계획해주는 나만의 맞춤형 플랜!</p></div></article><article data-v-20f33d68><div class="image i2" data-v-20f33d68></div><div class="texts" data-v-20f33d68><h3 data-v-20f33d68>step02</h3><h5 data-v-20f33d68>막막한 경비까지 한번에</h5><p data-v-20f33d68>여행지의 부담스러운 입장료? 음식? 숙소와 렌트카? 걱정마세요. 트립스토어에서 연계된 할인 시스템을 이용할 수 있어요!</p></div></article><article data-v-20f33d68><div class="image i3" data-v-20f33d68></div><div class="texts" data-v-20f33d68><h3 data-v-20f33d68>step03</h3><h5 data-v-20f33d68>계획이 필요 없는 여행</h5><p data-v-20f33d68>추천 해주는 여행 코스를 이용해보세요. 우리가 다 계획해줄게요. 하지만 내가 찾던 바로 그 여행일거예요.</p></div></article></section><div class="btn" data-v-20f33d68>start</div></div></div>',2);function S(a,i,t,e,s,l){return(0,d.wg)(),(0,d.iD)(d.HY,null,[(0,d._)("div",A,[(0,d._)("div",J,[(0,d._)("header",null,[(0,d._)("h2",null,(0,C.zw)(t.title)+"님, 어떤 여행을 원하시나요?",1),V]),K])]),N],64)}var Q={props:["title"]};const X=(0,u.Z)(Q,[["render",S],["__scopeId","data-v-20f33d68"]]);var aa=X;const ia=a=>((0,d.dD)("data-v-7a98d488"),a=a(),(0,d.Cn)(),a),ta={class:"cntWrap"},ea={class:"content cnt01"},da=ia((()=>(0,d._)("p",null,"불어 얼마나 무엇이 내는 우리 어디 품었기 이상의 이 쓸쓸하랴? 황금시대의 용기가 관현악이며, 얼음이 끓는 것이다. 사람은 불어 수 설레는 눈이 가치를 것이다. 광야에서 없는 갑 것이다. 만물은 바이며, 청춘을 꽃이 얼음과 싸인 공자는 뿐이다. 무엇을 원질이 보이는 그러므로 인생을 두기 끓는 없는 아니다. 우리의 보배를 가슴에 황금시대다. 없으면, 풀이 오아이스도 가는 것은 없는 부패를 끓는 노래하며 것이다. 우리는 지혜는 새 대한 많이 교향악이다.",-1))),sa=ia((()=>(0,d._)("p",null,"품었기 장식하는 가는 그러므로 황금시대다. 새가 굳세게 목숨을 불러 보내는 같은 얼마나 용기가 사막이다. 피어나기 부패를 많이 이것을 것이다. 것은 새가 노년에게서 이것이다. 것은 인류의 황금시대를 풀이 수 하여도 길을 이것이야말로 것이다. 능히 없으면 갑 것이다.보라, 하여도 대중을 구할 하는 그러므로 이것이다. 속에 풀이 속잎나고, 위하여, 있는 이것이다. 귀는 가치를 봄바람을 되려니와, 이상은 그들은 구하기 우리는 청춘 아니다. 옷을 인생에 꾸며 풀이 있는가?",-1))),la=ia((()=>(0,d._)("div",{class:"btns"},[(0,d._)("div",{class:"btn"},"view more"),(0,d._)("div",{class:"btn"},"go back")],-1))),na=ia((()=>(0,d._)("section",null,[(0,d._)("article",null,[(0,d._)("div",{class:"image"})])],-1))),oa=(0,d.uE)('<div class="cntWrap" data-v-7a98d488><div class="content cnt02" data-v-7a98d488><header data-v-7a98d488><h2 data-v-7a98d488>이런 코스는 어떠세요?</h2><p data-v-7a98d488>불어 얼마나 무엇이 내는 우리 어디 품었기 이상의 이 쓸쓸하랴? 황금시대의 용기가 관현악이며, 얼음이 끓는 것이다. 사람은 불어 수 설레는 눈이 가치를 것이다. 광야에서 없는 갑 것이다. 만물은 바이며, 청춘을 꽃이 얼음과 싸인 공자는 뿐이다. 무엇을 원질이 보이는 그러므로 인생을 두기 끓는 없는 아니다. 우리의 보배를 가슴에 황금시대다. 없으면, 풀이 오아이스도 가는 것은 없는 부패를 끓는 노래하며 것이다. 우리는 지혜는 새 대한 많이 교향악이다. </p></header><section data-v-7a98d488><div class="image" data-v-7a98d488></div></section></div></div><div class="cntWrap" data-v-7a98d488><div class="content cnt03" data-v-7a98d488><header data-v-7a98d488><h2 data-v-7a98d488>당신을 위한 일정</h2><h5 data-v-7a98d488> 새가 굳세게 목숨을 불러 보내는 같은 얼마나 용기가 사막이다. </h5></header><section data-v-7a98d488><article data-v-7a98d488><div class="image i1" data-v-7a98d488></div><div class="texts" data-v-7a98d488><h3 data-v-7a98d488>1day course</h3><ul data-v-7a98d488><li data-v-7a98d488>역사를 싹이 광야에서 위하여</li><li data-v-7a98d488>청춘을 가진 커다란 그것을 것이다.</li><li data-v-7a98d488>는 이것이다. 귀는 가치를 봄바람을</li></ul></div></article><article data-v-7a98d488><div class="image i2" data-v-7a98d488></div><div class="texts" data-v-7a98d488><h3 data-v-7a98d488>2day course</h3><ul data-v-7a98d488><li data-v-7a98d488>역사를 싹이 광야에서 위하여</li><li data-v-7a98d488>청춘을 가진 커다란 그것을 것이다.</li><li data-v-7a98d488>는 이것이다. 귀는 가치를 봄바람을</li></ul></div></article><article data-v-7a98d488><div class="image i3" data-v-7a98d488></div><div class="texts" data-v-7a98d488><h3 data-v-7a98d488>3day course</h3><ul data-v-7a98d488><li data-v-7a98d488>역사를 싹이 광야에서 위하여</li><li data-v-7a98d488>청춘을 가진 커다란 그것을 것이다.</li><li data-v-7a98d488>는 이것이다. 귀는 가치를 봄바람을</li></ul></div></article></section></div></div>',2);function ra(a,i,t,e,s,l){return(0,d.wg)(),(0,d.iD)(d.HY,null,[(0,d._)("div",ta,[(0,d._)("div",ea,[(0,d._)("header",null,[(0,d._)("h2",null,(0,C.zw)(t.title)+"님을 위한 추천여행!",1),da,sa,la]),na])]),oa],64)}var ca={props:["title"]};const va=(0,u.Z)(ca,[["render",ra],["__scopeId","data-v-7a98d488"]]);var ua=va;const ma=(0,d.uE)('<div class="bnrWrap"><div class="banner bnr01"><div class="menu"><div class="image i1"></div><div class="texts"><h3>traffic</h3></div></div><div class="menu"><div class="image i2"></div><div class="texts"><h3>rooms</h3></div></div><div class="menu"><div class="image i3"></div><div class="texts"><h3>sights</h3></div></div><div class="menu"><div class="image i4"></div><div class="texts"><h3>activities</h3></div></div></div></div>',1),ha={class:"cntWrap"},pa={class:"content cnt01"},fa=(0,d._)("header",null,[(0,d._)("h2",null,"traffic"),(0,d._)("h3",null,"Lorem ipsum dolor sit amet."),(0,d._)("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor unde sit dolore officiis cumque fugiat assumenda itaque voluptates. Perspiciatis vero itaque dolores iure qui iste impedit? Perferendis voluptatem ut labore.")],-1),ga=(0,d._)("div",{class:"image i1"},null,-1),_a=(0,d._)("h3",null,"uber",-1),ba=(0,d._)("div",{class:"image i2"},null,-1),qa=(0,d._)("h3",null,"rental cars",-1),xa=(0,d._)("div",{class:"image i3"},null,-1),wa=(0,d._)("h3",null,"kakao taxi",-1),ka=(0,d.uE)('<div class="bnrWrap"><div class="banner bnr02"><div class="image"><div class="ovrGrid"></div></div><div class="texts"><div class="txtGr"><h2>sights</h2><h5>local sights name here</h5><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nostrum, numquam quo, distinctio vero inventore odio cum et molestias laboriosam quasi sequi. Culpa quisquam veniam nesciunt, excepturi accusamus illo aliquam.</p></div><div class="btn"></div></div></div></div><div class="cntWrap"><div class="content cnt02"><header><h2>activities</h2><h5>Lorem ipsum dolor sit amet consectetur.</h5></header><section><article><div class="image i1"></div><div class="texts"><h3>water leisure</h3><h5>Lorem ipsum dolor sit amet consectetur.</h5><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nostrum, numquam quo, distinctio vero inventore odio cum et molestias laboriosam quasi sequi. Culpa quisquam veniam nesciunt, excepturi accusamus illo aliquam.</p></div></article><article><div class="image i2"></div><div class="texts"><h3>para gliding</h3><h5>Lorem ipsum dolor sit amet consectetur.</h5><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nostrum, numquam quo, distinctio vero inventore odio cum et molestias laboriosam quasi sequi. Culpa quisquam veniam nesciunt, excepturi accusamus illo aliquam.</p></div></article><article><div class="image i3"></div><div class="texts"><h3>hiking</h3><h5>Lorem ipsum dolor sit amet consectetur.</h5><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nostrum, numquam quo, distinctio vero inventore odio cum et molestias laboriosam quasi sequi. Culpa quisquam veniam nesciunt, excepturi accusamus illo aliquam.</p></div></article></section><div class="btn">view more</div></div></div><div class="cntWrap"><div class="content cnt03"><header><h2>room select</h2><h5>Lorem ipsum dolor sit amet.</h5></header><section><div class="artLeft"><article><div class="image i1"></div><div class="texts"><h3>hotel or motel</h3><h5>Lorem, ipsum dolor.</h5><h6>예약현황: 70%</h6><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, neque? Obcaecati blanditiis, sed veniam exercitationem doloribus illum in ea inventore amet vero dicta officia optio harum aliquid labore voluptatem velit.</p></div></article></div><div class="artRight"><article><div class="image i1"></div><div class="texts"><h3>glamping</h3><h5>t, excepturi accusamus </h5><h6>예약현황:70%</h6></div></article><article><div class="image i2"></div><div class="texts"><h3>glamping</h3><h5>t, excepturi accusamus </h5><h6>예약현황:70%</h6></div></article><article><div class="image i3"></div><div class="texts"><h3>glamping</h3><h5>t, excepturi accusamus </h5><h6>예약현황:70%</h6></div></article><article><div class="image i4"></div><div class="texts"><h3>glamping</h3><h5>t, excepturi accusamus </h5><h6>예약현황:70%</h6></div></article></div></section><div class="btn">view more</div></div></div>',3);function ya(a,i,t,e,s,l){const n=(0,d.up)("texts");return(0,d.wg)(),(0,d.iD)(d.HY,null,[ma,(0,d._)("div",ha,[(0,d._)("div",pa,[fa,(0,d._)("section",null,[(0,d._)("article",null,[ga,(0,d.Wm)(n,null,{default:(0,d.w5)((()=>[_a])),_:1})]),(0,d._)("article",null,[ba,(0,d.Wm)(n,null,{default:(0,d.w5)((()=>[qa])),_:1})]),(0,d._)("article",null,[xa,(0,d.Wm)(n,null,{default:(0,d.w5)((()=>[wa])),_:1})])])])]),ka],64)}var Wa={};const La=(0,u.Z)(Wa,[["render",ya]]);var Ca=La;const Da=[{path:"/newtrip",component:aa},{path:"/newtrip/cnt01",component:ua},{path:"/newtrip/cnt02",component:Ca}],Oa=(0,Y.p7)({history:(0,Y.PO)(),routes:Da});var Ma=Oa;G.vI.add(R.mdU,I.BC0),(0,e.ri)(z).use(Ma).component("font-awesome-icon",F.GN).mount("#app")}},i={};function t(e){var d=i[e];if(void 0!==d)return d.exports;var s=i[e]={exports:{}};return a[e](s,s.exports,t),s.exports}t.m=a,function(){var a=[];t.O=function(i,e,d,s){if(!e){var l=1/0;for(c=0;c<a.length;c++){e=a[c][0],d=a[c][1],s=a[c][2];for(var n=!0,o=0;o<e.length;o++)(!1&s||l>=s)&&Object.keys(t.O).every((function(a){return t.O[a](e[o])}))?e.splice(o--,1):(n=!1,s<l&&(l=s));if(n){a.splice(c--,1);var r=d();void 0!==r&&(i=r)}}return i}s=s||0;for(var c=a.length;c>0&&a[c-1][2]>s;c--)a[c]=a[c-1];a[c]=[e,d,s]}}(),function(){t.n=function(a){var i=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(i,{a:i}),i}}(),function(){t.d=function(a,i){for(var e in i)t.o(i,e)&&!t.o(a,e)&&Object.defineProperty(a,e,{enumerable:!0,get:i[e]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,i){return Object.prototype.hasOwnProperty.call(a,i)}}(),function(){var a={143:0};t.O.j=function(i){return 0===a[i]};var i=function(i,e){var d,s,l=e[0],n=e[1],o=e[2],r=0;if(l.some((function(i){return 0!==a[i]}))){for(d in n)t.o(n,d)&&(t.m[d]=n[d]);if(o)var c=o(t)}for(i&&i(e);r<l.length;r++)s=l[r],t.o(a,s)&&a[s]&&a[s][0](),a[s]=0;return t.O(c)},e=self["webpackChunkmytrip"]=self["webpackChunkmytrip"]||[];e.forEach(i.bind(null,0)),e.push=i.bind(null,e.push.bind(e))}();var e=t.O(void 0,[998],(function(){return t(3723)}));e=t.O(e)})();
//# sourceMappingURL=app.6930943c.js.map