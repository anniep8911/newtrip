(function(){"use strict";var t={8774:function(t,e,i){var n=i(9242),l=i(3396);function s(t,e,i,n,s,o){const a=(0,l.up)("Hdr"),c=(0,l.up)("Modal"),r=(0,l.up)("RouterView"),d=(0,l.up)("Ftr");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(a,{onInd:o.indFn,visitor:s.visitor,hello:s.hello},null,8,["onInd","visitor","hello"]),s.visible?((0,l.wg)(),(0,l.j4)(c,{key:0,onMsg:o.msgBB},null,8,["onMsg"])):(0,l.kq)("",!0),(0,l.Wm)(r,{visitor:s.visitor,device_type:s.device_type},null,8,["visitor","device_type"]),(0,l.Wm)(d)],64)}var o=i(7139);const a={class:"hdrWrap"},c={class:"nav"},r=["onClick"],d={class:"mnLeft"},u={key:0},v={key:1};function h(t,e,i,n,s,h){const p=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",a,[(0,l._)("header",{class:(0,o.C_)(s.ncl)},[(0,l._)("h1",{onClick:e[0]||(e[0]=t=>h.findIndex(0))},[(0,l.Wm)(p,{to:"./"},{default:(0,l.w5)((()=>[(0,l.Uk)("tripstore")])),_:1})]),(0,l._)("ul",c,[(0,l._)("li",{class:"ham",onClick:e[1]||(e[1]=(...t)=>h.addClass&&h.addClass(...t))},"🍔"),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.liTitle,((t,e)=>((0,l.wg)(),(0,l.iD)("li",{onClick:t=>h.findIndex(e+1)},[(0,l.Wm)(p,{to:{path:"./cnt0"+(e+1)}},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(t),1)])),_:2},1032,["to"])],8,r)))),256)),(0,l._)("li",{onClick:e[2]||(e[2]=(...t)=>h.resetCook&&h.resetCook(...t))},[(0,l.Wm)(p,{to:"./"},{default:(0,l.w5)((()=>[(0,l.Uk)("reset")])),_:1})])])],2)]),(0,l._)("div",{class:(0,o.C_)(["mnWrap","i"+s.ind])},[(0,l._)("main",null,[(0,l._)("div",d,[(0,l._)("h2",null,(0,o.zw)(s.datas[s.ind].title),1),s.now?((0,l.wg)(),(0,l.iD)("p",u,(0,o.zw)(i.visitor)+"님,"+(0,o.zw)(i.hello),1)):(0,l.kq)("",!0),s.now?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("p",v,(0,o.zw)(i.visitor)+"님,"+(0,o.zw)(s.msg),1))])])],2)],64)}var p=[{title:"Tripstore Your Journey",sbtitle:"",bgi:"bg01"},{title:"Let me know your schedule",sbtitle:"당신의 일정을 설정해주세요!",bgi:"bg02"},{title:"Are you ready for the trip?",sbtitle:"세부 일정을 계획해볼까요?",bgi:"bg03"},{title:"editor's pick",sbtitle:"에디터와 다른 여행자들의 리뷰를 만나보세요!",bgi:"bg04"},{title:"Have A Nice Trip!",sbtitle:"Have A Nice Trip!",bgi:"bg05"}],_={props:["visitor","hello"],data(){return{liTitle:["experience","plan","editor","my journey"],ind:0,datas:p,msg:"",now:!0,ncl:"close",hdrCla:""}},methods:{resetCook(){document.cookie="nobody; path=/; expires = Tue, 19 Jan 2011 03:14:07 GMT",window.location.reload()},findIndex(t){switch(this.ind=t,this.now=!1,this.ncl="close",this.ind){case 0:this.msg="????",this.now=!0;break;case 1:this.msg="일정을 선택해주세요!";break;case 2:this.msg="세부 일정을 볼까요?";break;case 3:this.msg="에디터의 추천 여행지입니다.";break;case 4:this.msg="일정이 완료되었어요!";break;default:this.msg="기다려주세요!"}},addClass(){""==this.ncl?this.ncl="close":this.ncl=""}}},m=i(89);const f=(0,m.Z)(_,[["render",h]]);var g=f;const w=(0,l.uE)('<div class="bnrWrap" data-v-c64e3eec><div class="banner bnr" data-v-c64e3eec><h2 data-v-c64e3eec>our tripstore</h2><div class="btn" data-v-c64e3eec>contact</div></div></div><div class="ftrWrap" data-v-c64e3eec><footer data-v-c64e3eec><div class="ftrLeft" data-v-c64e3eec><div class="logo" data-v-c64e3eec>tripStore</div><h4 data-v-c64e3eec>Tripstroe Company. All rights reserved.</h4></div><div class="ftrRgiht" data-v-c64e3eec><ul class="nav" data-v-c64e3eec><li data-v-c64e3eec>Company</li><li data-v-c64e3eec>Careeres</li><li data-v-c64e3eec>Press</li><li data-v-c64e3eec>Foundation</li><li data-v-c64e3eec>Private</li></ul><ul class="nav" data-v-c64e3eec><li data-v-c64e3eec>Get in Touch</li><li data-v-c64e3eec>010-888-9999</li><li data-v-c64e3eec>pjatopazz@gmail.com</li></ul></div></footer></div>',2);function b(t,e,i,n,l,s){return w}var k={};const C=(0,m.Z)(k,[["render",b],["__scopeId","data-v-c64e3eec"]]);var y=C;const x={class:"lightBoxWrap"},T={class:"lightBox"},D=(0,l._)("h2",null,"당신의 이름을 입력해주세요!",-1);function W(t,e,i,s,o,a){return(0,l.wg)(),(0,l.iD)("div",x,[(0,l._)("div",T,[D,(0,l.wy)((0,l._)("input",{type:"text",placeholder:"이름을 입력하세요!","onUpdate:modelValue":e[0]||(e[0]=t=>o.msg=t),onKeypress:e[1]||(e[1]=(0,n.D2)(((...t)=>a.upname&&a.upname(...t)),["enter"])),autofocus:"autofocus"},null,544),[[n.nr,o.msg]]),(0,l._)("div",{class:"btn",onClick:e[2]||(e[2]=(...t)=>a.upname&&a.upname(...t))},"제출하기")])])}var z={emits:["msg"],data(){return{msg:""}},methods:{upname(){this.$emit("msg",this.msg),document.cookie=`${this.msg}; path=/; expires = Tue, 19 Jan 2099 03:14:07 GMT`}}};const q=(0,m.Z)(z,[["render",W]]);var H=q,Y={name:"App",data(){return{visitor:"방문자",visible:!0,hello:"",ind:0,upup:0,device_type:"pc"}},components:{Hdr:g,Ftr:y,Modal:H},mounted(){this.$nextTick((function(){const t=window.innerWidth;""==document.cookie||"nobody"==document.cookie?(this.visible=!0,this.hello="첫 방문이시네요!"):(this.visible=!1,this.visitor=document.cookie,this.hello="또 만났네요!"),this.device_type=t>=1025?"pc":t<=1024&&t>=480?"tab":"mob"}))},methods:{msgBB(t){this.visitor=t,this.visible=!1,""==t&&(alert("이름을 입력해주세요!"),this.visitor="방문자",this.visible=!0)},indFn(t){this.ind=t},updaTT(t){this.upup=t,console.log(this.upup)}}};const $=(0,m.Z)(Y,[["render",s]]);var I=$,K=i(3494),L=i(7749),O=i(8539),j=i(4551),R=i(2483);const M=t=>((0,l.dD)("data-v-1636a2a2"),t=t(),(0,l.Cn)(),t),P={class:"cntWrap",ref:"cntWr1"},U={class:"content cnt01"},G=M((()=>(0,l._)("p",null,"당신이 좋아하는 여행타입은? 카드를 선택해주세요!",-1))),S=["onClick"],Z={class:"texts"},B={class:"cntWrap",ref:"cntWr"},A={class:"content cnt02"},F={key:0},E={key:1},J={key:2},N=M((()=>(0,l._)("p",null,"몸이 길지 방지하는 위하여서, 동산에는 청춘 아니더면, 전인 사막이다. 열매를 때에, 발휘하기 우리는 가는 사랑의 일월과 사막이다. 풍부하게 피고 구하기 가진 피가 위하여 그들에게 있는가? 얼음과 동력은 이상의 끝까지 그들의 끝에 있으랴? 청춘은 살았으며, 앞이 바이며, 현저하게 풍부하게 위하여 운다. 천하를 눈이 무엇이 더운지라 사랑의 생의 황금시대를 구하지 그들의 위하여서. 없으면 귀는 쓸쓸한 인간이 얼마나 끝에 피가 찬미를 인도하겠다는 사막이다. 것은 거친 이상, 뛰노는 얼마나 바이며, 인간의 황금시대다. 피고 있는 이것은 피는 능히 청춘에서만 맺어, 보이는 목숨이 힘있다. 새 인간의 내려온 위하여, 것이다. 구하지 역사를 현저하게 우리 무엇을 끝까지 뜨고, 그리하였는가? 되는 피고, 구하지 부패를 발휘하기 봄바람이다. 거친 맺어, 있는 풍부하게 그들의 있다. 오직 이상, 창공에 인간에 가치를 예수는 그리하였는가? 풀밭에 가슴이 불어 끓는다. 관현악이며, 불어 날카로우나 주는 거친 우는 시들어 바로 열락의 위하여서. 피가 이상 두손을 가지에 용감하고 무한한 보는 방지하는 우리 힘있다. 눈에 우리의 그것을 용감하고 능히 유소년에게서 끓는다. 끓는 이상 힘차게 오직 피가 가지에 있는 보라. 그들의 이것이야말로 있음으로써 그들의 옷을 있는 있으랴? 바로 때까지 전인 얼음이 부패뿐이다. ",-1))),V={class:"cntWrap",ref:"cntWr3"},X={class:"content cnt03"},Q=M((()=>(0,l._)("h5",null,"Lorem ipsum dolor sit amet.",-1))),tt={class:"texts"},et={class:"btns"};function it(t,e,i,n,s,a){const c=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",P,[(0,l._)("div",U,[(0,l._)("header",null,[(0,l._)("h2",null,(0,o.zw)(i.visitor)+"님, 어떤 여행을 원하시나요?",1),G]),(0,l._)("section",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.cont1TT,((t,e)=>((0,l.wg)(),(0,l.iD)("article",{onClick:t=>a.move(e+1)},[(0,l._)("div",{class:(0,o.C_)(["image","i"+(e+1)])},(0,o.zw)(t)+"이미지",3),(0,l._)("div",Z,[(0,l._)("h3",null,(0,o.zw)(t),1)])],8,S)))),256))])])],512),(0,l._)("div",B,[(0,l._)("div",A,[(0,l._)("header",null,[0==s.ind?((0,l.wg)(),(0,l.iD)("h2",F,"위에서 여행타입을 선택해주세요!")):(0,l.kq)("",!0),s.ind>0?((0,l.wg)(),(0,l.iD)("h2",E,(0,o.zw)(s.cont1TT[s.ind-1])+" 추천",1)):(0,l.kq)("",!0),s.ind>0?((0,l.wg)(),(0,l.iD)("h5",J,(0,o.zw)(s.cont2TT[s.ind-1].exp2),1)):(0,l.kq)("",!0),N,(0,l._)("div",{class:"btn",onClick:e[0]||(e[0]=t=>a.move2(s.ind))},"start")]),(0,l._)("section",null,[(0,l._)("article",null,[(0,l._)("div",{class:(0,o.C_)(["image","i"+s.ind])},"여행자 이미지",2)])])])],512),(0,l._)("div",V,[(0,l._)("div",X,[(0,l._)("header",null,[(0,l._)("h2",null,(0,o.zw)(s.cont1TT[s.imgClchange-1])+" 추천 코스입니다!",1),Q]),(0,l._)("section",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.cont2TT,((t,e)=>((0,l.wg)(),(0,l.iD)("article",null,[(0,l._)("div",{class:(0,o.C_)(["image","i"+s.imgClchange+"-"+(e+1)])},"step0"+(0,o.zw)(e+1)+"이미지",3),(0,l._)("div",tt,[(0,l._)("h3",null,"step0"+(0,o.zw)(e+1),1),(0,l._)("h5",null,(0,o.zw)(t.titie[s.imgClchange]),1),(0,l._)("p",null,(0,o.zw)(t.exp),1)])])))),256))]),(0,l._)("div",et,[(0,l._)("div",{class:"btn",onClick:e[1]||(e[1]=(...t)=>a.totop&&a.totop(...t))},[(0,l.Wm)(c,{to:"./cnt01"},{default:(0,l.w5)((()=>[(0,l.Uk)("start")])),_:1})]),(0,l._)("div",{class:"btn",onClick:e[2]||(e[2]=t=>a.move2(s.ind=0))},"reset")])])],512)],64)}var nt={props:["visitor","device_type"],data(){return{cont1TT:["활동적인 액티비티","데일리 여행","패키지 여행"],cont2TT:[{titie:["여행의 시작부터 끝까지","쉐도우복싱 연습","토게피가 출연하는 무인도의 아름다운 바닷가!","로스트밸리 순록과 함께 패키지"],exp:"교통, 숙박, 코스, 원하는 여행의 종류까지 트립스토어에서 처음부터 끝까지 함께 계획해주는 나만의 맞춤형 플랜!",exp2:"주짓수 세계챔피언과 맞대결! 이기면 챔피언벨트는 당신의 것!"},{titie:["모자냄새맡기 대회","당근매칭 현피시스템","천평이 넘는 땅에서 실전 모동숲체험","한 방에 최대 50명까지 수용가능한 멘션"],exp:"여행지의 부담스러운 입장료? 음식? 숙소와 렌트카? 걱정마세요. 대회에서 일등하면 공짜!",exp2:"무인도 데일리체험! 당장 무인도에 가져갈 3가지부터 챙기세요!"},{titie:["계획이 필요 없는 여행","도장 도장깨기!","무인도에서 이루는 내집마련의 꿈","여러사람과 즐기는 원룸형 페스티벌"],exp:"계획? 무계획이 계획이죠! J타입의 당신도 파워 P로 만들어줄 수 있는 완벽한 코스!",exp2:"하최몇? 하루에 최대 몇명이랑 같이 이동해보셨나요? 당신의 기록을 깨드립니다."}],ind:0,imgClchange:0}},methods:{move(t){"pc"==this.device_type?(window.scrollTo({top:this.$refs.cntWr.offsetTop-40,behavior:"smooth"}),this.ind=t):(window.scrollTo({top:this.$refs.cntWr.offsetTop-150,behavior:"smooth"}),this.ind=t)},move2(t){"pc"==this.device_type?0==this.ind?(window.scrollTo({top:this.$refs.cntWr1.offsetTop-40,behavior:"smooth"}),this.imgClchange=0):(window.scrollTo({top:this.$refs.cntWr3.offsetTop-40,behavior:"smooth"}),this.imgClchange=t):0==this.ind?(window.scrollTo({top:this.$refs.cntWr1.offsetTop-150,behavior:"smooth"}),this.imgClchange=0):(window.scrollTo({top:this.$refs.cntWr3.offsetTop-150,behavior:"smooth"}),this.imgClchange=t)},totop(){window.scrollTo({top:0,behavior:"smooth"})}}};const lt=(0,m.Z)(nt,[["render",it],["__scopeId","data-v-1636a2a2"]]);var st=lt;const ot=t=>((0,l.dD)("data-v-0832d190"),t=t(),(0,l.Cn)(),t),at={class:"bnrWrap"},ct={class:"banner bnr01"},rt={action:""},dt=ot((()=>(0,l._)("div",{class:"dates"},[(0,l._)("h3",null,"여행일정을 선택해주세요"),(0,l._)("input",{type:"date",value:"2022-10-19",min:"2022-10-01",max:"2023-12-31",name:"startDate"}),(0,l._)("input",{type:"date",value:"2022-10-19",min:"2022-10-01",max:"2023-12-31",name:"endDate"})],-1))),ut={class:"sel"},vt=ot((()=>(0,l._)("h3",null,"가고싶은 나라를 선택해주세요",-1))),ht=["value"],pt={class:"cntWrap",ref:"cntWr"},_t={class:"content cnt01"},mt=ot((()=>(0,l._)("p",null,"불어 얼마나 무엇이 내는 우리 어디 품었기 이상의 이 쓸쓸하랴? 황금시대의 용기가 관현악이며, 얼음이 끓는 것이다. 사람은 불어 수 설레는 눈이 가치를 것이다. 광야에서 없는 갑 것이다. 만물은 바이며, 청춘을 꽃이 얼음과 싸인 공자는 뿐이다. 무엇을 원질이 보이는 그러므로 인생을 두기 끓는 없는 아니다. 우리의 보배를 가슴에 황금시대다. 없으면, 풀이 오아이스도 가는 것은 없는 부패를 끓는 노래하며 것이다. 우리는 지혜는 새 대한 많이 교향악이다.",-1))),ft=ot((()=>(0,l._)("p",null,"품었기 장식하는 가는 그러므로 황금시대다. 새가 굳세게 목숨을 불러 보내는 같은 얼마나 용기가 사막이다. 피어나기 부패를 많이 이것을 것이다. 것은 새가 노년에게서 이것이다. 것은 인류의 황금시대를 풀이 수 하여도 길을 이것이야말로 것이다. 능히 없으면 갑 것이다.보라, 하여도 대중을 구할 하는 그러므로 이것이다. 속에 풀이 속잎나고, 위하여, 있는 이것이다. 귀는 가치를 봄바람을 되려니와, 이상은 그들은 구하기 우리는 청춘 아니다. 옷을 인생에 꾸며 풀이 있는가?",-1))),gt={class:"btns"},wt={class:"btn"},bt=ot((()=>(0,l._)("div",{class:"cntWrap"},[(0,l._)("div",{class:"content cnt02"},[(0,l._)("header",null,[(0,l._)("h2",null,"이런 코스는 어떠세요?"),(0,l._)("p",null,"불어 얼마나 무엇이 내는 우리 어디 품었기 이상의 이 쓸쓸하랴? 황금시대의 용기가 관현악이며, 얼음이 끓는 것이다. 사람은 불어 수 설레는 눈이 가치를 것이다. 광야에서 없는 갑 것이다. 만물은 바이며, 청춘을 꽃이 얼음과 싸인 공자는 뿐이다. 무엇을 원질이 보이는 그러므로 인생을 두기 끓는 없는 아니다. 우리의 보배를 가슴에 황금시대다. 없으면, 풀이 오아이스도 가는 것은 없는 부패를 끓는 노래하며 것이다. 우리는 지혜는 새 대한 많이 교향악이다. ")]),(0,l._)("section",null,[(0,l._)("div",{class:"image"})])])],-1))),kt={class:"cntWrap"},Ct={class:"content cnt03"},yt=ot((()=>(0,l._)("header",null,[(0,l._)("h2",null,"당신을 위한 일정"),(0,l._)("h5",null," 새가 굳세게 목숨을 불러 보내는 같은 얼마나 용기가 사막이다. ")],-1))),xt={class:"texts"},Tt=ot((()=>(0,l._)("ul",null,[(0,l._)("li",null,"역사를 싹이 광야에서 위하여"),(0,l._)("li",null,"청춘을 가진 커다란 그것을 것이다."),(0,l._)("li",null,"는 이것이다. 귀는 가치를 봄바람을")],-1)));function Dt(t,e,i,s,a,c){const r=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",at,[(0,l._)("div",ct,[(0,l._)("form",rt,[dt,(0,l._)("div",ut,[vt,(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>a.selected=t)},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.national,((t,e)=>((0,l.wg)(),(0,l.iD)("option",{value:e},(0,o.zw)(t),9,ht)))),256))],512),[[n.bM,a.selected]])])])])]),(0,l._)("div",pt,[(0,l._)("div",_t,[(0,l._)("header",null,[(0,l._)("h2",null,(0,o.zw)(i.visitor)+"님을 위한 추천여행!",1),mt,ft,(0,l._)("div",gt,[(0,l._)("div",wt,[(0,l.Wm)(r,{to:{path:"./cnt04",query:{name:a.selected}}},{default:(0,l.w5)((()=>[(0,l.Uk)("view more")])),_:1},8,["to"])]),(0,l._)("div",{class:"btn",onClick:e[1]||(e[1]=(...t)=>c.totop&&c.totop(...t))},"go back")])]),(0,l._)("section",null,[(0,l._)("article",null,[(0,l._)("div",{class:(0,o.C_)(["image","add"+a.selected])},null,2)])])])],512),bt,(0,l._)("div",kt,[(0,l._)("div",Ct,[yt,(0,l._)("section",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.dateTr,((t,e)=>((0,l.wg)(),(0,l.iD)("article",null,[(0,l._)("div",{class:(0,o.C_)(["image","i"+(e+1)])},null,2),(0,l._)("div",xt,[(0,l._)("h3",null,(0,o.zw)(t),1),Tt])])))),256))])])])],64)}var Wt={props:["visitor","device_type"],data(){return{dateTr:["1day course","2day course","3day course"],checkAge:0,selected:"",national:["아시아","유럽","오세아니아"]}},methods:{totop(){window.scrollTo({top:0,behavior:"smooth"})}},watch:{selected(){"pc"==this.device_type?window.scrollTo({top:this.$refs.cntWr.offsetTop-50,behavior:"smooth"}):window.scrollTo({top:this.$refs.cntWr.offsetTop-180,behavior:"smooth"})}}};const zt=(0,m.Z)(Wt,[["render",Dt],["__scopeId","data-v-0832d190"]]);var qt=zt;const Ht=t=>((0,l.dD)("data-v-c0a385b2"),t=t(),(0,l.Cn)(),t),Yt={class:"bnrWrap"},$t={class:"banner bnr01"},It=["onClick"],Kt={class:"texts"},Lt={class:"content cnt01"},Ot=Ht((()=>(0,l._)("header",null,[(0,l._)("h2",null,"traffic"),(0,l._)("h5",null,"Lorem ipsum dolor sit amet."),(0,l._)("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor unde sit dolore officiis cumque fugiat assumenda itaque voluptates. Perspiciatis vero itaque dolores iure qui iste impedit? Perferendis voluptatem ut labore.")],-1))),jt={class:"texts"},Rt=(0,l.uE)('<div class="banner bnr02" data-v-c0a385b2><div class="image" data-v-c0a385b2><div class="ovrGrid" data-v-c0a385b2></div></div><div class="texts" data-v-c0a385b2><div class="txtGr" data-v-c0a385b2><h2 data-v-c0a385b2>sights</h2><h5 data-v-c0a385b2>local sights name here</h5><p data-v-c0a385b2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nostrum, numquam quo, distinctio vero inventore odio cum et molestias laboriosam quasi sequi. Culpa quisquam veniam nesciunt, excepturi accusamus illo aliquam.</p></div><div class="btn" data-v-c0a385b2></div></div></div>',1),Mt=[Rt],Pt={class:"content cnt02"},Ut=Ht((()=>(0,l._)("header",null,[(0,l._)("h2",null,"activities"),(0,l._)("h5",null,"Lorem ipsum dolor sit amet consectetur.")],-1))),Gt={class:"texts"},St=Ht((()=>(0,l._)("h5",null,"Lorem ipsum dolor sit amet consectetur.",-1))),Zt=Ht((()=>(0,l._)("p",null,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nostrum, numquam quo, distinctio vero inventore odio cum et molestias laboriosam quasi sequi. Culpa quisquam veniam nesciunt, excepturi accusamus illo aliquam.",-1))),Bt={class:"content cnt03"},At=Ht((()=>(0,l._)("header",null,[(0,l._)("h2",null,"room select"),(0,l._)("h5",null,"Lorem ipsum dolor sit amet.")],-1))),Ft=Ht((()=>(0,l._)("div",{class:"artLeft"},[(0,l._)("article",null,[(0,l._)("div",{class:"image i1"}),(0,l._)("div",{class:"texts"},[(0,l._)("h3",null,"hotel"),(0,l._)("h5",null,"Lorem, ipsum dolor."),(0,l._)("h6",null,"예약현황: 70%"),(0,l._)("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, neque? Obcaecati blanditiis, sed veniam exercitationem doloribus illum in ea inventore amet vero dicta officia optio harum aliquid labore voluptatem velit.")])])],-1))),Et={class:"artRight"},Jt={class:"texts"},Nt=Ht((()=>(0,l._)("h5",null,"excepturi accusamus ",-1))),Vt=Ht((()=>(0,l._)("h6",null,"예약현황:70%",-1)));function Xt(t,e,i,n,s,a){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",Yt,[(0,l._)("div",$t,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.trffic,((t,e)=>((0,l.wg)(),(0,l.iD)("div",{class:"menu",onClick:t=>a.move(e)},[(0,l._)("div",{class:(0,o.C_)(["image","i"+(e+1)])},null,2),(0,l._)("div",Kt,[(0,l._)("h3",null,(0,o.zw)(t),1)])],8,It)))),256))])]),(0,l._)("div",{class:"cntWrap",ref:a.setRef},[(0,l._)("div",Lt,[Ot,(0,l._)("section",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.trffic2,((t,e)=>((0,l.wg)(),(0,l.iD)("article",null,[(0,l._)("div",{class:(0,o.C_)(["image","i"+(e+1)])},null,2),(0,l._)("div",jt,[(0,l._)("h3",null,(0,o.zw)(t),1)])])))),256))])])],512),(0,l._)("div",{class:"bnrWrap",ref:a.setRef},Mt,512),(0,l._)("div",{class:"cntWrap",ref:a.setRef},[(0,l._)("div",Pt,[Ut,(0,l._)("section",{class:(0,o.C_)(s.more)},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.activities,((t,e)=>((0,l.wg)(),(0,l.iD)("article",null,[(0,l._)("div",{class:(0,o.C_)(["image","i"+(e+1)])},null,2),(0,l._)("div",Gt,[(0,l._)("h3",null,(0,o.zw)(t),1),St,Zt])])))),256))],2),(0,l._)("div",{class:"btn",onClick:e[0]||(e[0]=t=>a.moreSee())},(0,o.zw)(s.btnWrd),1)])],512),(0,l._)("div",{class:"cntWrap",ref:a.setRef},[(0,l._)("div",Bt,[At,(0,l._)("section",null,[Ft,(0,l._)("div",Et,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.stay,((t,e)=>((0,l.wg)(),(0,l.iD)("article",null,[(0,l._)("div",{class:(0,o.C_)(["image","i"+(e+1)])},null,2),(0,l._)("div",Jt,[(0,l._)("h3",null,(0,o.zw)(t),1),Nt,Vt])])))),256))])])])],512)],64)}i(7658);var Qt={props:["visitor","device_type"],data(){return{trffic:["traffic","sights","activities","rooms"],trffic2:["uber","rental cars","kakao taxi"],activities:["water leisure","para gliding","hiking","jujitsu","camping","bellydance"],stay:["glamping","guest house","rental room","hostel"],Reffs:[],more:"",btnWrd:"view more"}},methods:{move(t){"pc"==this.device_type?window.scrollTo({top:this.Reffs[t].offsetTop-40,behavior:"smooth"}):window.scrollTo({top:this.Reffs[t].offsetTop-170,behavior:"smooth"})},moreSee(){""==this.more?(this.more="active",this.btnWrd="close"):(this.more="",this.btnWrd="view more")},setRef(t){this.Reffs.push(t)}}};const te=(0,m.Z)(Qt,[["render",Xt],["__scopeId","data-v-c0a385b2"]]);var ee=te;const ie=t=>((0,l.dD)("data-v-c3238ed4"),t=t(),(0,l.Cn)(),t),ne={class:"cntWrap"},le={class:"content cnt01"},se=ie((()=>(0,l._)("h2",null,"여행자들의 이야기",-1))),oe={class:"imgGr"},ae={class:"texts"},ce={class:"cntWrap"},re={class:"content cnt02"},de=ie((()=>(0,l._)("header",null,[(0,l._)("h2",null,"여행지 랜덤추천"),(0,l._)("p",null,"로고에 마우스를 올려보세요!")],-1))),ue={class:"artGr"},ve={class:"texts"};function he(t,e,i,n,s,a){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",ne,[(0,l._)("div",le,[(0,l._)("header",null,[se,(0,l._)("p",null,(0,o.zw)(s.hangle),1)]),(0,l._)("section",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.title,((t,e)=>((0,l.wg)(),(0,l.iD)("article",null,[(0,l._)("div",oe,[(0,l._)("div",{class:(0,o.C_)(["image","i"+e])},"타이틀이미지",2),(0,l._)("div",{class:(0,o.C_)(["image","i"+e+"-1"])},"서브이미지",2)]),(0,l._)("div",ae,[(0,l._)("h3",null,(0,o.zw)(t.loc),1),(0,l._)("p",null,(0,o.zw)(t.exp),1),(0,l._)("p",null,(0,o.zw)(t.hash),1)])])))),256))])])]),(0,l._)("div",ce,[(0,l._)("div",re,[de,(0,l._)("section",null,[(0,l._)("div",ue,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.tiCnt02,((t,e)=>((0,l.wg)(),(0,l.iD)("article",null,[(0,l._)("div",{class:(0,o.C_)(["image","i"+s.cnt[e]])},null,2),(0,l._)("div",ve,[(0,l._)("h3",null,(0,o.zw)(s.tiCnt02[e][s.cnt[e]]),1),(0,l._)("p",null,(0,o.zw)(s.hangle),1)])])))),256))])]),(0,l._)("div",{class:"btnLogo",onMouseenter:e[0]||(e[0]=(...t)=>a.fn&&a.fn(...t)),onMouseleave:e[1]||(e[1]=(...t)=>a.fn2&&a.fn2(...t))},"로고",32)])])],64)}var pe={data(){return{title:[{loc:"마드리드 왕궁",exp:"동쪽에 있어 오리엔테 궁전(Palacio de Oriente)이라고 불린다. 에스파냐 왕의 공식 거처이자 에스파냐 왕실의 상징인 곳으로, 9세기에 이슬람교도가 당시 에스파냐의 수도였던 톨레도로부터 마드리드를 방어하기 위한 목적으로 성채를 세운 자리에 있다. 그리스도교가 마드리드를 탈환한 후 이슬람교도의 성채를 왕궁으로 사용하였지만 1734년 크리스마스 이브에 화재로 소실되었다.",hash:"#오리엔테궁전 #에스파냐 #마드리드"},{loc:"레티로공원",exp:"둘레가 4km에 달하는 광대한 공원. 마드리드에서 가장 규모가 클 뿐만 아니라 역사적, 예술적으로도 중요한 가치를 지닌 곳이다. 원래는 스페인 최대의 번영기를 이끈 펠리페 2세가 자신의 두 번째 부인이었던 영국의 튜더 메리 여왕을 위해 지은 부엔 레티로 별궁의 정원이었다.",hash:"#펠레페2세 #레티로별궁 #레티로정원"},{loc:"아크로티리 유적지",exp:"약 20헥타르의 넓이에 달하는, 키클라데스 제도의 테라 섬(산토리니라는 이름으로도 알려져 있다)에 있는 아크로티리는 인상적인 모습으로 건설되었던 청동기 시대의 중요한 도시의 유적이다. 사람이 살기 시작한 것은 후기 신석기 시대부터였으나, 이곳이 대도시로 발전해 나간 것은 기원전 2천 년부터였다. 이 유적은 아마 화산 폭발로 인해 극적으로 파괴되었다는 사실 때문에 가장 잘 알려져 있을 텐데, 이 섬의 모양에서도 화산 폭발의 결과가 보인다.",hash:"#테라섬 #산토리니 #화산폭발섬"},{loc:"카마리해변",exp:"카마리 해변은 산토리니 섬에서 가장 인기가 높은 해변이다. 고대 티라산을 끼고 있으며 검은 모래가 특징인 이곳은 분위기가 아늑하고 해수욕하기에 좋아 페리사 해변에 비해 사람들이 더 많이 몰려든다. 주변에는 전통식, 수블라키 등을 즐길 수 있는 레스토랑, 타베르나 등이 매우 많아 관광객들이 선호한다.",hash:"#산토리니섬 #타베르나 #페리탑승"},{loc:"겨울의 한라산",exp:"제주도는 제3기 말∼제4기 초 우리나라의 지각의 역사에서 비교적 최근에 형성된 화산섬으로 수차례의 화산활동에 의해 용암이 분출되며 형성되었다. 한라산은 제주도의 대부분을 차지하고 있으며 제주도 전체가 거대한 한라산의 연속체로 보이기도 한다. 전체적으로 경사가 완만한 순상화산의 형태를 띠고 있으나 정상부에는 경사가 급한 종상화산이 위치하는 이중화산의 형태가 나타난다. 대부분 현무암으로 이루어져 있으며, 제주도 중앙에서 산줄기가 동서로 뻗어 있다. 남쪽은 경사가 심한 반면 북쪽은 완만하고 동서방향으로는 비교적 지대가 높고 평탄하다. 정상에는 둘레 약 3㎞, 지름 500m",hash:"#어승목 코스 #영실코스 #성판악코스"},{loc:"애월읍 핫플",exp:"북쪽 저지대에는 넓은 평지가 펼쳐져 있으며, 동귀리(東貴里)·귀일리(貴日里)·구엄리(舊嚴里) 등의 해안 저지대에는 논도 발달하였다. 주요농산물로는 쌀·보리를 비롯하여 고구마·콩·유채·채소 등을 생산하고 있으며, 감귤재배가 활발하다. 넓은 산간지역을 이용한 축산업도 활발하여 시온목장 등 기업목장이 이루어지고 소·돼지·말 등을 사육한다. 애월항은 제주항의 보조항구로서의 구실을 맡고 있으며, 제주시와 동일생활권을 이루고 있다. 교통은 제주시의 시내버스가 운행되고 있어 편리하다.",hash:"#쌀보리카페 #감귤체험 #뚜벅이여행"}],tiCnt02:[["튀르키에","산토리나","맨체스터","프라하","할슈타트","도쿄","서울","에카데펙데코렐","부다페스트","빈"],["과달라하라","산티아고","후아레스","에카데펙데코렐","티후아나","치와와","칸쿤","밴쿠버","에드먼턴","오타와"],["리우데자네이루","마나우스","벨루오리존치","브라질리아","사우바도르","산토스","상파울루","쿠리치바","포르투알레그리","쿠바"]],hangle:"불어 얼마나 무엇이 내는 우리 어디 품었기 이상의 이 쓸쓸하랴? 황금시대의 용기가 관현악이며, 얼음이 끓는 것이다. 사람은 불어 수 설레는 눈이 가치를 것이다. 광야에서 없는 갑 것이다. 만물은 바이며, 청춘을 꽃이 얼음과 싸인 공자는 뿐이다. 무엇을 원질이 보이는 그러므로 인생을 두기 끓는 없는 아니다. 우리의 보배를 가슴에 황금시대다. 없으면, 풀이 오아이스도 가는 것은 없는 부패를 끓는 노래하며 것이다. 우리는 지혜는 새 대한 많이 교향악이다.",cnt:[0,1,2],state:0}},methods:{fn(){this.state=setInterval((()=>{for(var t=0;t<3;t++)this.cnt[t]=parseInt(10*Math.random())}),100)},fn2(){clearInterval(this.state)}}};const _e=(0,m.Z)(pe,[["render",he],["__scopeId","data-v-c3238ed4"]]);var me=_e;const fe=t=>((0,l.dD)("data-v-03d6d248"),t=t(),(0,l.Cn)(),t),ge={class:"cntWrap"},we={class:"content cnt01"},be={class:"texts"},ke={key:0},Ce=fe((()=>(0,l._)("p",null,"크레타 섬을 제외하고 키클라데스 제도 최남단에 있는 그리스 에게 해의 섬이다. 이 섬의 정식 명칭은 티라(Θήρα)로 또다른 명칭인 산토리니(Σαντορίνη)는 라틴 제국 시절 에게 해 일대를 차지한 베네치아인들이 섬에 있던 성 이레네를 모신 성당에서 따와 이 섬을 '산타 이리니(Santa Irini)'라고 부른 것에서 유래한 것이다. 그 후 수세기 동안 이 섬은 산토리니라고 불렸고 그리스가 독립한 이후 이 섬은 과거에 쓰이던 '티라'라는 이름을 되찾았지만 여전히 전세계적으로는 '산토리니'라는 이름으로 유명하다.",-1))),ye=fe((()=>(0,l._)("p",null," 전 세계적으로는 은근히 아틀란티스 설과 관련지어서 유명세를 탔으며, 미코노스와 함께 키클라데스 제도에서 가장 유명한 관광지 중 하나이다. 그리스의 상징색인 청색과 흰색으로 지어진, 콘크리트가 만든 인공미와 기묘하게 어우러지는 자연미가 매우 인상적인 섬.[2]",-1))),xe=fe((()=>(0,l._)("h6",null,"3박 4일 일정",-1))),Te=fe((()=>(0,l._)("p",null,"total 320,000원",-1))),De={class:"btns"},We={class:"cntWrap"},ze={class:"content cnt02"},qe=fe((()=>(0,l._)("h2",null,"activities",-1))),He={class:"btns"},Ye={class:"texts"},$e={class:"bnrWrap"},Ie={class:"banner bnr01"},Ke={class:"images"},Le={class:"texts"},Oe={class:"text"};function je(t,e,i,n,s,a){const c=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",ge,[(0,l._)("div",we,[(0,l._)("section",null,[(0,l._)("article",null,[(0,l._)("div",{class:(0,o.C_)(["image","i"+t.$route.query.name])},null,2),(0,l._)("div",be,[t.$route.query.name>=0?((0,l.wg)(),(0,l.iD)("h3",ke,(0,o.zw)(i.visitor)+"님, 일정이 완료 되었어요!",1)):(0,l.kq)("",!0),void 0==t.$route.query.name||""==t.$route.query.name?((0,l.wg)(),(0,l.iD)("h3",{key:1,onClick:e[0]||(e[0]=(...t)=>a.totop&&a.totop(...t))},[(0,l.Wm)(c,{to:"./cnt01",style:{color:"blue"}},{default:(0,l.w5)((()=>[(0,l.Uk)("여기")])),_:1}),(0,l.Uk)("로 가서 일정을 선택해주세요!")])):(0,l.kq)("",!0),(0,l._)("h5",null,"추천여행지 : "+(0,o.zw)(s.tra[t.$route.query.name]),1),Ce,ye,xe,Te,(0,l._)("div",De,[(0,l._)("div",{class:"btn",onClick:e[1]||(e[1]=(...t)=>a.pay&&a.pay(...t))},"결제하기"),(0,l._)("div",{class:"btn",onClick:e[2]||(e[2]=(...t)=>a.totop&&a.totop(...t))},[(0,l.Wm)(c,{to:"./cnt01"},{default:(0,l.w5)((()=>[(0,l.Uk)("다시 선택하기")])),_:1})])])])])])])]),(0,l._)("div",We,[(0,l._)("div",ze,[(0,l._)("header",null,[qe,(0,l._)("h5",null,(0,o.zw)(s.tra[t.$route.query.name])+"에서 할만한 활동이에요!",1),(0,l._)("div",He,[(0,l._)("div",{class:(0,o.C_)(["left",s.nomore]),onClick:e[3]||(e[3]=t=>a.prev())},null,2),(0,l._)("div",{class:(0,o.C_)(["right",s.nomore2]),onClick:e[4]||(e[4]=t=>a.next())},null,2)])]),(0,l._)("section",null,[(0,l._)("div",{class:"artGr",ref:"artGr",style:(0,o.j5)({transform:s.tranon})},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.venture,((t,e)=>((0,l.wg)(),(0,l.iD)("article",null,[(0,l._)("div",Ye,[(0,l._)("h5",null,"0"+(0,o.zw)(e+1),1),(0,l._)("h3",null,(0,o.zw)(t),1)]),(0,l._)("div",{class:(0,o.C_)(["image","i"+(e+1)])},(0,o.zw)(t)+"이미지",3)])))),256))],4)])])]),(0,l._)("div",$e,[(0,l._)("div",Ie,[(0,l._)("div",Ke,[((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(4,(t=>(0,l._)("div",{class:(0,o.C_)(["image","i"+t])},null,2))),64))]),(0,l._)("div",Le,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.leisure,(t=>((0,l.wg)(),(0,l.iD)("div",Oe,[(0,l._)("h3",null,(0,o.zw)(t.date),1),(0,l._)("p",null,(0,o.zw)(t.exp),1)])))),256))])])])],64)}var Re=i(3412),Me={components:{Carousel:Re.Carousel,Slide:Re.Slide},props:["visitor"],data(){return{venture:["para gliding","sky diving","fighting","boxing","swimming","acrobatic"],leisure:[{date:"01 day(7/21)",exp:"첫째날 시차적응을 위해 현지 당근마켓에서 일자리를 구해드려요!것이 천하를 것은 그와 못할 방지하는 말이다. 하였으며, 트고, 영락과 남는 든 새 행복스럽고 기관과 것이다.  "},{date:"02 day(7/22)",exp:"주짓수 세계챔피언과 스파링체험 고동을 그들을 자신과 오직 봄날의 뛰노는 심장의 이상은 눈이 칼이다. 인간의 영원히 인간의 자신과 청춘이 소리다.이것은 피고, 이것이다."},{date:"03 day(7/23)",exp:"자유롭게 하늘에서 점프해요  노래하며 살 우리 천고에 무엇이 보라. 못하다 보이는 물방아 같으며, 황금시대를 것이다. 어디 이것은 인류의 불어 청춘의 곳이 사막이다."}],cnt:0,tranon:"translateX(0%)",nomore:"",nomore2:"",settings:{focusOnSelect:!0,infinite:!0,slidesToShow:3,slidesToScroll:1,speed:500},tra:["부산","산토리니","오클랜드"]}},methods:{prev(){this.cnt++,this.nomore2="",this.cnt>=2&&(this.cnt=2,this.nomore="nomore"),this.tranon=`translateX(${-16.6*this.cnt}%)`,console.log(this.$route.query.name)},next(){this.cnt--,this.nomore="",this.cnt<=0&&(this.cnt=0,this.nomore2="nomore"),this.tranon=`translateX(${-16.6*this.cnt}%)`},totop(){window.scrollTo({top:0,behavior:"smooth"})},pay(){alert("결제시스템 준비중입니다.")}}};const Pe=(0,m.Z)(Me,[["render",je],["__scopeId","data-v-03d6d248"]]);var Ue=Pe;const Ge=[{path:"/newtrip",component:st,name:"main"},{path:"/newtrip/cnt01",component:qt,name:"content01"},{path:"/newtrip/cnt02",component:ee,name:"content02"},{path:"/newtrip/cnt03",component:me,name:"content03"},{path:"/newtrip/cnt04",component:Ue,name:"content04",props:!0}],Se=(0,R.p7)({history:(0,R.PO)(),routes:Ge});var Ze=Se;K.vI.add(j.mdU,O.BC0),(0,n.ri)(I).use(Ze).component("font-awesome-icon",L.GN).mount("#app")}},e={};function i(n){var l=e[n];if(void 0!==l)return l.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,i),s.exports}i.m=t,function(){var t=[];i.O=function(e,n,l,s){if(!n){var o=1/0;for(d=0;d<t.length;d++){n=t[d][0],l=t[d][1],s=t[d][2];for(var a=!0,c=0;c<n.length;c++)(!1&s||o>=s)&&Object.keys(i.O).every((function(t){return i.O[t](n[c])}))?n.splice(c--,1):(a=!1,s<o&&(o=s));if(a){t.splice(d--,1);var r=l();void 0!==r&&(e=r)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[n,l,s]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var l,s,o=n[0],a=n[1],c=n[2],r=0;if(o.some((function(e){return 0!==t[e]}))){for(l in a)i.o(a,l)&&(i.m[l]=a[l]);if(c)var d=c(i)}for(e&&e(n);r<o.length;r++)s=o[r],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(d)},n=self["webpackChunkmytrip"]=self["webpackChunkmytrip"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(8774)}));n=i.O(n)})();
//# sourceMappingURL=app.8c75811e.js.map