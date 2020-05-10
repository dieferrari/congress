(this["webpackJsonpcongress-ar"]=this["webpackJsonpcongress-ar"]||[]).push([[3],{32:function(e,t,a){"use strict";t.a={headerTitle:"Congress",footerCopyright:"Copyright (c) 2020 Pro Publica Inc. All Rights Reserved.",senatorsListTitle:"Members of the Senate",allSearchPlaceholder:"Examples: John Doe, senior, CO",nameSearchPlaceholder:"Example: John Doe",genderSearchPlaceholder:"Example: Male, Female",partySearchPlaceholder:"Example: Democrat, Republican",goBackLabel:"Go back",senatorProfileTitle:"Senator",titleLabel:"Current title",stateLabel:"State",websiteLabel:"Website",contactLabel:"Contact",partyLabel:"Party",democraticLabel:"Democratic",republicanLabel:"Republican"}},37:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(38),l=a.n(c);t.a=function(e){var t=e.backgroundWhite,a=void 0!==t&&t;return n.a.createElement("div",{className:l.a.spinnerBox},n.a.createElement("div",{className:l.a.circleBorder},n.a.createElement("div",{className:"".concat(l.a.circleCore," ").concat(a&&l.a.white)})))}},38:function(e,t,a){e.exports={spinnerBox:"style_spinnerBox__rM-Yt",circleBorder:"style_circleBorder__1cie5",spin:"style_spin__ZEhRk",circleCore:"style_circleCore__1U5KK",white:"style_white__vpZ6Z","configure-clockwise":"style_configure-clockwise__Qsx_u"}},40:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a(33),n=a.n(r),c=a(34),l=a(35),o=a(36),s=a(43),i="https://api.propublica.org/congress/v1",u="9x2ykzreEHkHpCdqlWBt2tgqtUEISZfbHeM0oObt",p=function(){function e(){Object(l.a)(this,e)}return Object(o.a)(e,[{key:"getAllSenators",value:function(){var e=Object(c.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.get("".concat(i,"/116/senate/members.json"),{headers:{"X-API-Key":u}});case 3:return t=e.sent,e.abrupt("return",t.data.results[0].members);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"getSenator",value:function(){var e=Object(c.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.get("".concat(i,"/members/").concat(t,".json"),{headers:{"X-API-Key":u}});case 3:return a=e.sent,e.abrupt("return",a.data.results[0]);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),m=function(){function e(){Object(l.a)(this,e)}return Object(o.a)(e,[{key:"getAllSenators",value:function(){var e=Object(c.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new p,e.next=4,t.getAllSenators();case 4:return a=e.sent,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"getSenator",value:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=new p,e.next=4,a.getSenator(t);case 4:return r=e.sent,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}]),e}()},77:function(e,t,a){e.exports={profileWrapper:"style_profileWrapper__3iLiZ",goBackContainer:"style_goBackContainer__18aHw",profileContainer:"style_profileContainer__2_odg",detailContainer:"style_detailContainer__2Tjsj"}},78:function(e,t,a){e.exports=a.p+"static/media/male-senator-placeholder.31d2c5f1.svg"},79:function(e,t,a){e.exports=a.p+"static/media/female-senator-placeholder.f2d27c4d.svg"},80:function(e,t,a){"use strict";a.r(t);var r=a(33),n=a.n(r),c=a(34),l=a(39),o=a(0),s=a.n(o),i=a(5),u=a(77),p=a.n(u),m=a(32),f=a(40),d=a(78),v=a.n(d),b=a(79),h=a.n(b),g=a(37);t.default=function(){var e=Object(o.useState)({}),t=Object(l.a)(e,2),a=t[0],r=t[1],u=Object(o.useState)(!0),d=Object(l.a)(u,2),b=d[0],E=d[1],_=Object(i.f)(),y=Object(i.g)(),k=function(){var e=Object(c.a)(n.a.mark((function e(t){var a,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new f.a,e.prev=1,e.next=4,a.getSenator(t);case 4:c=e.sent,r(c),E(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){k(y.params.id)}),[y.params.id]),s.a.createElement("div",{className:p.a.profileWrapper},s.a.createElement("div",{className:p.a.goBackContainer,onClick:function(){_.goBack()}},s.a.createElement("span",null),m.a.goBackLabel),s.a.createElement("div",{className:p.a.profileContainer},b?s.a.createElement(g.a,{backgroundWhite:!0}):s.a.createElement(o.Fragment,null,s.a.createElement("div",null,s.a.createElement("img",{src:"M"===a.gender?v.a:h.a,alt:"Profile avatar"})),s.a.createElement("div",{className:p.a.detailContainer},s.a.createElement("h1",null,m.a.senatorProfileTitle," ",a.first_name," ",a.last_name),s.a.createElement("div",null,s.a.createElement("div",null,m.a.titleLabel,":")," ",s.a.createElement("div",null,a.roles[0].title)),s.a.createElement("div",null,s.a.createElement("div",null,m.a.stateLabel,":")," ",s.a.createElement("div",null,a.roles[0].state)),s.a.createElement("div",null,s.a.createElement("div",null,m.a.websiteLabel,":")," ",s.a.createElement("a",{href:a.url},a.url)),s.a.createElement("div",null,s.a.createElement("div",null,m.a.contactLabel,":")," ",s.a.createElement("div",null,a.roles[0].office,s.a.createElement("span",null,a.roles[0].phone))),s.a.createElement("div",null,s.a.createElement("div",null,m.a.partyLabel,":")," ",s.a.createElement("div",null,"D"===a.roles[0].party?m.a.democraticLabel:m.a.republicanLabel))))))}}}]);
//# sourceMappingURL=Profile.38539f3e.chunk.js.map