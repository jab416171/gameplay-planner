(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[329],{34953:function(e,t,i){Promise.resolve().then(i.bind(i,53301))},53301:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return Pets}});var n=i(57437),s=i(2265),r=i(82057);i(42996);var l=i(15873),a=i(58768),o=i(81344),d=i(51553);i(23701);var c=i(37790),p=i(49011),x=i(62109),u=i(16691),h=i.n(u);let filterBonuses=(e,t)=>e.filter(t);function StaticPetItem(e){let{petData:t,highlight:i,showNameOnly:s}=e,{petId:r,location:l,img:a,name:o,pet:u}=t,m=(0,n.jsx)("ul",{style:{margin:"0 0 0 0"},children:filterBonuses(u.BonusList,e=>e.ID<1e3).map((e,t)=>{var i;let s=x.Z.calcEquipBonus(u,e);return(0,n.jsxs)("li",{children:[null===(i=d.bO[e.ID])||void 0===i?void 0:i.label,": ",s.toExponential(2)]},t)})}),g=(0,n.jsx)("ul",{style:{margin:"0 0 0 0"},children:filterBonuses(u.BonusList,e=>e.ID>=1e3&&e.ID<5e3).map((e,t)=>{var i;return(0,n.jsxs)("li",{children:[null===(i=d.bO[e.ID])||void 0===i?void 0:i.label,": ",Number(e.Power).toExponential(2)]},t)})}),y=x.Z.calculatePetBaseDamage(u,u.Rank);return y=y<100?c.Z.roundInt(y):y.toExponential(2),(0,n.jsxs)(p.Z,{tooltip:(0,n.jsxs)("div",{className:"tooltip-custom ",children:[(0,n.jsx)("h3",{style:{marginTop:"0",marginBottom:"3px",textAlign:"center"},children:"".concat(o," -> ").concat(l)}),(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,n.jsx)("div",{children:"Rank: ".concat(u.Rank)}),(0,n.jsx)("div",{children:"Level: ".concat(u.Level)}),(0,n.jsx)("div",{children:"Damage: ".concat(y)})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h4",{style:{margin:"6px 0 6px 0"},children:"Active Bonuses"}),m]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h4",{style:{margin:"6px 0 6px 0"},children:"Expedition Bonuses:"}),g]})]}),children:[!s&&(0,n.jsx)(h(),{alt:"in game image of ".concat(o),src:a,className:"item-image",style:{objectFit:"scale-down",width:"auto",height:"auto"},unoptimized:!0,priority:!0}),s&&(0,n.jsx)(n.Fragment,{children:o})]})}var m=i(11684),g=i(39768),y=i(94388),f=i(26566),v=i.n(f),j=i(33187),b={src:"/_next/static/media/drag_icon.9988a74e.svg",height:93,width:95,blurWidth:0,blurHeight:0},I=i(82528),C=i(92189);function PetComboDisplay(e){let{petCombos:t,unlockedPets:i,petMap:s}=e;if(!d.bO[t[0].BonusID])return(0,n.jsx)(n.Fragment,{});let c=d.bO[t[0].BonusID].label,p=t.length,x=0,u={};for(let e=0;e<t.length;e++){let n=t[e],s=!0;n.BonusID in u||(u[n.BonusID]={});for(let e=0;e<n.PetID.length;e++)if(-99!==n.PetID[e]&&!(n.PetID[e]in i)){s=!1;break}s&&(x++,u[n.BonusID][n.ID]=!0),2===n.PetID.length&&n.PetID.push(-99)}let h=Array(p).fill(!0);for(let e=0;e<p;e++)e+1>x&&(h[e]=!1);return(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(l.Z,{expandIcon:(0,n.jsx)(o.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,n.jsxs)("div",{style:{display:"flex",flex:"1",justifyContent:"space-between"},children:[(0,n.jsx)("div",{children:c}),(0,n.jsx)("div",{style:{marginLeft:"12px"},children:h.map((e,t)=>e?(0,n.jsx)("span",{className:"greenDot",style:{margin:"0 1px 0 1px"}},t):(0,n.jsx)("span",{className:"redDot",style:{margin:"0 1px 0 1px"}},t))})]})}),(0,n.jsx)(a.Z,{children:(0,n.jsx)("div",{style:{display:"flex",flexDirection:"column",width:"270px",position:"relative"},className:"grayStripes",children:t&&t.map((e,r)=>{let l=e.PetID,a="";return a=0===r?"0":u[e.BonusID][e.ID]===u[t[r-1].BonusID][t[r-1].ID]?"-5px 0 0 0":"0 0 0 0",(0,n.jsx)("div",{style:{display:"flex",margin:a,border:"5px solid ".concat(u[e.BonusID][e.ID]?"green":"red")},children:l.map((e,t)=>{let r=d._Q.find(t=>t.petId===e);return(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"90px",height:"90px",opacity:e in i||-99===e?"":"0.6"},className:e in i||-99===e?"lightGrayBackground":"",children:-99!==e&&(0,n.jsx)(StaticPetItem,{petData:{...r,pet:s[e]},highlight:e in i})},t)})},r)})})})]})}function Pets(){let e,t,i,r;let[l,a]=v()("userData",I),[o,p]=(0,s.useState)(I);(0,s.useEffect)(()=>{p(l)},[l]);let[u,f]=(0,s.useState)(!1),[S,D]=(0,s.useState)({}),[T,N]=v()("useExpedition",!1),[w,O]=(0,s.useState)(!1);(0,s.useEffect)(()=>{O(T)},[T]);let[Z,A]=(0,s.useState)(!1),[P,L]=(0,s.useState)({}),[B,k]=v()("manualEnabledPets",{});(0,s.useEffect)(()=>{A(!0),L(B)},[B]);let[J,W]=(0,s.useState)([]),[R,_]=(0,s.useState)({}),[E,M]=(0,s.useState)(""),[z,q]=(0,s.useState)({}),[H,G]=(0,s.useState)(!1),[F,V]=(0,s.useState)(!1),[Q,Y]=(0,s.useState)({}),[U,K]=v()("customPresets",{});(0,s.useEffect)(()=>{Y(U)},[U]);let[X,$]=(0,s.useState)(""),ee=o.PetsSpecial;[e,t,i,r]=(0,s.useMemo)(()=>{let e=x.Z.findBestTeam(o,{statMode:u,statModePets:S,manualEnabledPets:w?P:{},priorityList:J,priorityMap:R,petWhiteList:z}),t=e[2];for(let[e,i]of Object.entries(R))!(i.id>=1e3)&&(t[i.id]||0===i.count||(t[i.id]={ID:i.id,Power:0,Gain:0,count:0,sum:0,label:i.label}));return e},[o,J,R,z,w,P,u]);let[et,ei]=(0,s.useState)({}),[en,es]=(0,s.useState)({}),[er,el]=(0,s.useState)({});(0,s.useMemo)(()=>{G(!0);let e={},t={},i={},n={},s={},r={};for(let l=0;l<3;l++){let a,d,c,p;switch(l){case 0:e=JSON.parse(JSON.stringify(C.AI[o.AscensionCount>C.ZT?C.ZT:o.AscensionCount].priorityList)),t=JSON.parse(JSON.stringify(C.AI[o.AscensionCount>C.ZT?C.ZT:o.AscensionCount].priorityMap)),C.AI[o.AscensionCount>C.ZT?C.ZT:o.AscensionCount].petWhiteList&&JSON.parse(JSON.stringify(C.AI[o.AscensionCount>C.ZT?C.ZT:o.AscensionCount].petWhiteList));break;case 1:e=JSON.parse(JSON.stringify(C.yq[o.AscensionCount>C.ZT?C.ZT:o.AscensionCount].priorityList)),t=JSON.parse(JSON.stringify(C.yq[o.AscensionCount>C.ZT?C.ZT:o.AscensionCount].priorityMap)),C.yq[o.AscensionCount>C.ZT?C.ZT:o.AscensionCount].petWhiteList&&JSON.parse(JSON.stringify(C.yq[o.AscensionCount>C.ZT?C.ZT:o.AscensionCount].petWhiteList));break;case 2:e=JSON.parse(JSON.stringify(C.yu[o.AscensionCount>C.ZT?C.ZT:o.AscensionCount].priorityList)),t=JSON.parse(JSON.stringify(C.yu[o.AscensionCount>C.ZT?C.ZT:o.AscensionCount].priorityMap)),C.yu[o.AscensionCount>C.ZT?C.ZT:o.AscensionCount].petWhiteList&&JSON.parse(JSON.stringify(C.yu[o.AscensionCount>C.ZT?C.ZT:o.AscensionCount].petWhiteList));break;case"None":e=[],t={}}[a,d,c,p]=x.Z.findBestTeam(o,{manualEnabledPets:P,priorityList:e,priorityMap:t,petWhiteList:i});let u=a.concat(d);switch(l){case 0:n=u;break;case 1:s=u;break;case 2:r=u}}let l={},a={satisfied:!1,requiredID:{4:!0,16:!0}};if(!a.satisfied){let e=!1;Object.keys(a.requiredID).forEach(t=>{n.find(e=>e.BonusList.find(e=>e.ID===Number(t)))||(e=!0)}),e||(a.satisfied=!0,a.team=n)}if(!a.satisfied){let e=!1;Object.keys(a.requiredID).forEach(t=>{s.find(e=>e.BonusList.find(e=>e.ID===Number(t)))||(e=!0)}),e||(a.satisfied=!0,a.team=s)}if(!a.satisfied){let e=!1;Object.keys(a.requiredID).forEach(t=>{r.find(e=>e.BonusList.find(e=>e.ID===Number(t)))||(e=!0)}),e||(a.satisfied=!0,a.team=r)}let d=n.concat(s.concat(r)),c={};d.forEach(e=>{c[e.ID]=e,e.BonusList.forEach(e=>{!(e.ID>=1e3)&&(l[e.ID]||(l[e.ID]=0),l[e.ID]++)})});let p=JSON.parse(JSON.stringify(C.xx.priorityList)),u=JSON.parse(JSON.stringify(C.xx.priorityMap)),h=C.xx.petWhiteList?JSON.parse(JSON.stringify(C.xx.petWhiteList)):{};for(let[e,t]of(ei(p),es(u),el(h),D(c),Object.entries(u)))e in a.requiredID?a.satisfied&&(u[e].count=0):e in l&&"21"!==e&&"22"!==e&&"5"!==e&&"6"!==e&&(u[e].count=0)},[o,z,w,P]);let ea={},eo={};ee.forEach((i,n)=>{if(0===n||!d.bO[i.BonusID])return;let s=0,r=0;for(let n=0;n<i.PetID.length;n++){if(!(i.PetID[n]<=0)){s++;if(e.find(e=>e.ID===i.PetID[n])||t.find(e=>e.ID===i.PetID[n])){r++;continue}}}r===s?ea[i.BonusID]?ea[i.BonusID].count++:ea[i.BonusID]={...i,rootName:d.bO[i.BonusID].rootName,odd:d.bO[i.BonusID].odd,name:d.bO[i.BonusID].label,count:1}:r>0&&(eo[i.BonusID]?eo[i.BonusID].count++:eo[i.BonusID]={...i,rootName:d.bO[i.BonusID].rootName,odd:d.bO[i.BonusID].odd,name:d.bO[i.BonusID].label,count:1})});let ed=ee.reduce((e,t,i)=>(0===i||(e[t.BonusID]=e[t.BonusID]?[...e[t.BonusID],t]:[t]),e),{}),ec={},ep={},ex=o.PetsCollection.filter(e=>{ep[e.ID]=e;let t=!!e.Locked;return t}),eu=[];for(let e=0;e<ex.length;e++){let t=ex[e];ec[t.ID]=t,z[t.ID]||eu.push({label:t.name,id:t.ID})}let eh={};o.PetsCollection.forEach(e=>{e.BonusList.forEach(t=>{eh[t.ID]=e})});let em=[];for(let[e,t]of Object.entries(d.bO))t.id>=1e3||R[e]||!eh[t.id]||em.push({label:t.label,id:t.id});return(0,n.jsx)("div",{style:{display:"flex",flex:"1",backgroundColor:"black",position:"relative"},children:(0,n.jsxs)("div",{style:{display:"flex",flex:"1",backgroundColor:"rgba(255,255,255, 0.05)",paddingLeft:"12px"},children:[(0,n.jsxs)("div",{style:{marginTop:"12px",backgroundColor:"rgba(255,255,255, 0.05)",maxHeight:"calc(100% - 40px)",padding:"6px",borderRadius:"6px",border:"2px solid rgba(255,255,255,0.7)"},children:[(0,n.jsx)("h2",{className:"importantText",style:{textAlign:"center",marginTop:"0",marginBottom:"12px"},children:"Pet Combo List"}),(0,n.jsx)("div",{style:{borderRadius:"6px",maxHeight:"calc(100% - 42px)",height:"calc(100% - 42px)",overflow:"hidden"},children:(0,n.jsx)("div",{className:"importantText",style:{display:"flex",flexDirection:"column",maxHeight:"100%",overflowY:"auto"},children:ed&&Object.values(ed).map((e,t)=>(0,n.jsx)(PetComboDisplay,{petMap:ep,petCombos:e,unlockedPets:ec},t))})})]}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"teamBuilder importantText",style:{borderRadius:"6px",border:"2px solid rgba(255,255,255,0.7)",margin:"12px 24px",maxHeight:"calc(100% - 24px)",overflow:"auto",display:"flex",alignItems:"flex-start",backgroundColor:"rgba(255,255,255, 0.05)"},children:[(0,n.jsxs)("div",{style:{alignSelf:"flex-start",minWidth:"580px",margin:"0 12px"},children:[(0,n.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,n.jsx)("div",{style:{fontSize:"32px",fontWeight:"bold",textAlign:"center"},children:"Priority List"})}),(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"12px"},children:[(0,n.jsx)(g.Z,{margin:"1px 0 0 6px",data:{list:em},placeholder:"Select a bonus",onSelect:e=>{m.ZP.event({category:"pets_interaction",action:"whitelist_bonus",label:e.label,value:e.id}),_(t=>{let i={...t};return i[e.id]={mode:"max",label:d.bO[e.id].label,id:e.id,count:-1,current:0},i}),W(t=>{let i=[...t];return i.push(e.id),i})}}),(0,n.jsxs)("div",{className:"rainbowBorder",style:{margin:"0 12px 0 0",display:"flex",borderWidth:"4px",padding:"3px"},children:[(0,n.jsx)("div",{children:"Recommended Presets"}),(0,n.jsx)("div",{children:(0,n.jsxs)("select",{className:"importantText","aria-label":"Select a default team preset",style:{maxWidth:"144px",marginLeft:"12px",backgroundColor:"#171717",borderRadius:"4px"},onChange:e=>{G(!0),m.ZP.event({category:"pets_interaction",action:"selected_recommended_team",label:e.target.value});let t={};switch(e.target.value){case"Main Team":f(!1),W(JSON.parse(JSON.stringify(C.AI[o.AscensionCount>C.ZT?C.ZT:o.AscensionCount].priorityList))),_(JSON.parse(JSON.stringify(C.AI[o.AscensionCount>C.ZT?C.ZT:o.AscensionCount].priorityMap))),t=C.AI[o.AscensionCount>C.ZT?C.ZT:o.AscensionCount].petWhiteList?JSON.parse(JSON.stringify(C.AI[o.AscensionCount>C.ZT?C.ZT:o.AscensionCount].petWhiteList)):{};break;case"Reinc. Team":f(!1),W(JSON.parse(JSON.stringify(C.yq[o.AscensionCount>C.ZT?C.ZT:o.AscensionCount].priorityList))),_(JSON.parse(JSON.stringify(C.yq[o.AscensionCount>C.ZT?C.ZT:o.AscensionCount].priorityMap))),t=C.yq[o.AscensionCount>C.ZT?C.ZT:o.AscensionCount].petWhiteList?JSON.parse(JSON.stringify(C.yq[o.AscensionCount>C.ZT?C.ZT:o.AscensionCount].petWhiteList)):{};break;case"Gear Team":f(!1),W(JSON.parse(JSON.stringify(C.yu[o.AscensionCount>C.ZT?C.ZT:o.AscensionCount].priorityList))),_(JSON.parse(JSON.stringify(C.yu[o.AscensionCount>C.ZT?C.ZT:o.AscensionCount].priorityMap))),t=C.yu[o.AscensionCount>C.ZT?C.ZT:o.AscensionCount].petWhiteList?JSON.parse(JSON.stringify(C.yu[o.AscensionCount>C.ZT?C.ZT:o.AscensionCount].petWhiteList)):{};break;case"Stat Team":W(JSON.parse(JSON.stringify(et))),_(JSON.parse(JSON.stringify(en))),t=JSON.parse(JSON.stringify(er)),f(!0);break;case"None":W([]),_({}),q({})}let i={};for(let[e,n]of Object.entries(t))ec[e]?i[e]={...ec[e],mode:n.mode}:i[e]={ID:e,name:d.ur[e].name,mode:n.mode};q(i)},defaultValue:"None",children:[!H&&(0,n.jsx)("option",{value:"None",children:"Select Preset"}),(0,n.jsx)("option",{value:"Main Team",children:"Main Team"}),(0,n.jsx)("option",{value:"Reinc. Team",children:"Reinc. Team"}),(0,n.jsx)("option",{value:"Gear Team",children:"Gear Team"}),o.AscensionCount>=5&&(0,n.jsx)("option",{value:"Stat Team",children:"Stat Team"}),H&&(0,n.jsx)("option",{value:"None",children:"Blank"})]})})]})]}),(0,n.jsx)("div",{style:{display:"flex",flex:"1",border:"1px solid gray",margin:"6px",justifyContent:"center",backgroundColor:"rgba(255,255,255, 0.04)",borderRadius:"6px",maxHeight:"58vh",paddingLeft:"6px",overflow:"hidden"},children:(0,n.jsx)("div",{style:{width:"100%",overflow:"auto"},children:(0,n.jsx)(y.t.Group,{axis:"y",values:J,onReorder:W,children:J.map((e,t)=>{let s="gray",l=R[e],a=i[e];return s=-1===l.count?"white":0===l.count?"gray":l.count===(null==a?void 0:a.count)?"#4caf50":l.count<(null==a?void 0:a.count)?"#ffeb3b":"#e53935",r[e]&&r[e].length,(0,n.jsx)(y.t.Item,{value:e,style:{marginLeft:"6px"},children:(0,n.jsxs)("div",{className:"drag",style:{margin:"6px 3px",border:"2px solid ".concat(s),display:"flex",alignItems:"center",flexDirection:"column",width:"220px",backgroundColor:"rgba(255,255,255, 0.07)",borderRadius:"6px"},children:[(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",margin:"3px 0 6px 0",borderBottom:"1px solid black"},children:[(0,n.jsx)(h(),{className:"drag noPointerEvents",src:b,style:{height:"24px",width:"auto",marginLeft:"3px"},alt:"hand in a fist with index poting at a vertical line with arrows on both ends"}),(0,n.jsx)("div",{style:{marginLeft:"6px"},children:" ".concat(R[e].label)}),(0,n.jsx)(h(),{onClick:t=>{_(t=>{let i={...t};return delete i[e],i}),W(t=>[...t].filter(t=>t!==e))},className:"hover",src:j.Z,alt:"red x",style:{height:"16px",width:"auto",marginRight:"6px"}})]}),(0,n.jsx)("div",{style:{alignSelf:"flex-start",marginLeft:"6px",marginBottom:"3px"},children:(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,n.jsx)("div",{style:{marginRight:"6px"},children:"Max Pets:"}),(0,n.jsx)("div",{children:(0,n.jsx)("input",{"aria-label":"Select how the bonus will be rewarded",style:{width:"30px",backgroundColor:"#f3f0f5"},type:"number",value:R[e].count,onChange:t=>{try{let i=Number(t.target.value);if((i=Math.floor(i))<-1||i>6)return;_(t=>{let n={...t};return n[e].count=i,n}),m.ZP.event({category:"pet_team_builder",action:"changed_bonus_max_pets",label:"".concat(R[e].label),value:i})}catch(e){console.log(e)}},min:"-1",max:"6"})})]})})]})},e)})})})}),(0,n.jsx)("div",{style:{fontSize:"32px",fontWeight:"bold",textAlign:"center"},children:"Manual Pet Selection"}),(0,n.jsx)(g.Z,{margin:"0 0 0 6px",data:{list:eu},placeholder:"Select a pet",onSelect:e=>{m.ZP.event({category:"pets_interaction",action:"whitelist_pet",label:e.label,value:e.id}),q(t=>{let i={...t};return i[e.id]={...ec[e.id],mode:"include"},i})}}),(0,n.jsx)("div",{style:{display:"flex",flex:"1",flexDirection:"column",border:"1px solid gray",justifyContent:"center",alignItems:"center",margin:"6px",backgroundColor:"rgba(255,255,255, 0.04)",borderRadius:"6px",maxHeight:"19.5vh",overflow:"hidden"},children:(0,n.jsx)("div",{style:{maxHeight:"100%",overflow:"auto",width:"100%"},children:(0,n.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:Object.values(z).map((e,t)=>(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"250px",height:"60px",backgroundColor:"rgba(255,255,255, 0.07)",borderRadius:"6px",margin:"6px  12px"},children:[(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",height:"32px",borderBottom:"1px solid black"},children:[(0,n.jsx)("div",{style:{fontSize:"24px",marginLeft:"6px"},children:e.name}),(0,n.jsx)(h(),{className:"hover",src:j.Z,alt:"red x",style:{height:"16px",width:"auto",marginRight:"6px"},onClick:t=>{q(t=>{let i={...t};return delete i[e.ID],i})}})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",margin:"6px"},children:[(0,n.jsx)("div",{style:{marginRight:"6px"},children:"Placement:"}),(0,n.jsx)("div",{children:(0,n.jsxs)("select",{"aria-label":"Specifiy if the pet is included or excluded",style:{maxWidth:"144px"},onChange:t=>{q(i=>{let n={...i};return n[e.ID].mode=t.target.value,n})},defaultValue:z[e.ID].mode,value:z[e.ID].mode,children:[(0,n.jsx)("option",{value:"include",children:"include"}),(0,n.jsx)("option",{value:"exclude",children:"exclude"})]})})]})})]},t))})})})]}),(0,n.jsxs)("div",{style:{marginRight:"6px",marginTop:"6px"},children:[(0,n.jsxs)("div",{style:{backgroundColor:"rgba(255,255,255, 0.07)",padding:"6px",borderRadius:"6px"},children:[(0,n.jsx)("div",{style:{fontSize:"32px",fontWeight:"bold",textAlign:"center"},children:"Best Team"}),!!H&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:{padding:"12px"},children:Object.values(i).map((e,t)=>{if(e.ID>=1e3)return null;let s="lightgray",r=R[e.ID];return s=r?-1===r.count?"white":0===r.count?"gray":r.count===e.count?"#4caf50":r.count<e.count?"#ffeb3b":"#e53935":"lightgray",(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,n.jsx)("div",{style:{width:"150px"},children:e.label}),(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,n.jsx)("div",{style:{color:s},children:e.sum.toExponential(2)+"%"}),(0,n.jsx)("div",{style:{color:s,marginLeft:"6px"},children:" (".concat(i[e.ID].count,")")})]})]},t)},[])}),Object.values(ea).length>0&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:{fontSize:"24px",fontWeight:"bold",textAlign:"center"},children:"Team Combos"}),(0,n.jsx)("div",{style:{padding:"12px"},children:Object.values(ea).map((e,t)=>(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("div",{style:{width:"150px"},children:e.rootName}),(0,n.jsxs)("div",{children:[e.odd&&(0,n.jsx)(n.Fragment,{children:"x".concat(e.count)}),!e.odd&&(0,n.jsx)(n.Fragment,{children:c.Z.roundInt(e.BonusPower*e.count)+"%"})]})]},t),[])})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{style:{display:"flex"},children:t.map((e,t)=>{let i=d._Q.find(t=>t.petId===e.ID);return(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"90px",height:"90px",border:"1px gray solid",borderRadius:"6px"},children:(0,n.jsx)(StaticPetItem,{petData:{...i,pet:ep[e.ID]}})},t)},[])}),(0,n.jsx)("div",{style:{display:"flex"},children:e.map((e,t)=>{let i=d._Q.find(t=>t.petId===e.ID);return(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"90px",height:"90px",border:"1px gray solid",borderRadius:"6px"},children:(0,n.jsx)(StaticPetItem,{petData:{...i,pet:ep[e.ID]}})},t)},[])})]})]})]}),(0,n.jsxs)("div",{style:{backgroundColor:"rgba(255,255,255, 0.07)",padding:"6px",marginTop:"12px",borderRadius:"6px"},children:[(0,n.jsx)("div",{style:{fontSize:"24px",fontWeight:"bold",textAlign:"center",marginBottom:"6px"},children:"Custom Presets"}),(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[(0,n.jsx)("input",{type:"text","aria-label":"Specify name of the current preset to save it under",onChange:e=>{M(e.target.value)},style:{width:"141px",marginRight:"12px"}}),(0,n.jsx)("button",{disabled:0===E.trim().length,onClick:e=>{m.ZP.event({category:"pets_interaction",action:"save_custom_preset",label:E}),K(e=>{let t={...e},i={};for(let[e,t]of Object.entries(z))i[e]={ID:e,mode:t.mode};return t[E]={priorityList:J,priorityMap:R,petWhiteList:i},t})},children:"Save Current"})]}),(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"center",marginTop:"6px"},children:[(0,n.jsx)("div",{style:{marginRight:"12px",marginLeft:"5px",width:"141px"},children:"Select saved preset"}),(0,n.jsxs)("select",{"aria-label":"Specify which custom preset to load in",style:{width:"90px",marginLeft:"12px"},onChange:e=>{if(V(!0),G(!0),m.ZP.event({category:"pets_interaction",action:"load_custom_preset",label:e.target.value}),"None"===e.target.value){V(!0);return}W(Q[e.target.value].priorityList),_(Q[e.target.value].priorityMap);let t={};for(let[i,n]of Object.entries(Q[e.target.value].petWhiteList))ec[i]?t[i]={...ec[i],mode:n.mode}:t[i]={ID:i,name:d.ur[i].name,mode:n.mode};q(t)},defaultValue:" ",children:[!F&&(0,n.jsx)("option",{value:"None",children:"None"}),Object.keys(Q).map(e=>(0,n.jsx)("option",{value:e,children:e},e))]})]}),(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"center",marginTop:"6px"},children:[(0,n.jsx)("div",{style:{marginRight:"12px",marginLeft:"5px",width:"141px"},children:"Delete preset"}),(0,n.jsxs)("select",{"aria-label":"Specify which custom preset to delete",style:{width:"90px",marginLeft:"12px"},onChange:e=>{m.ZP.event({category:"pets_interaction",action:"delete_custom_preset",label:e.target.value}),K(t=>{let i={...t};return delete i[e.target.value],i})},value:"None",children:[(0,n.jsx)("option",{value:"None",children:"None"}),Object.keys(Q).map(e=>(0,n.jsx)("option",{value:e,children:e},e))]})]})]}),(0,n.jsxs)("div",{style:{backgroundColor:"rgba(255,255,255, 0.07)",padding:"6px",marginTop:"12px",borderRadius:"6px"},children:[(0,n.jsx)("div",{style:{fontSize:"24px",fontWeight:"bold",textAlign:"center",marginBottom:"6px"},children:"Share Presets"}),(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[(0,n.jsx)("input",{type:"text","aria-label":"Enter a preset code to import it",onChange:e=>{$(e.target.value)},style:{width:"141px",marginRight:"12px"}}),(0,n.jsx)("button",{disabled:0===X.trim().length,onClick:e=>{try{m.ZP.event({category:"pets_interaction",action:"imported_custom_preset"}),G(!0);let e=JSON.parse(X);W(e.priorityList),_(e.priorityMap);let t={};for(let[i,n]of Object.entries(e.petWhiteList))ec[i]?t[i]={...ec[i],mode:n.mode}:t[i]={ID:i,name:d.ur[i].name,mode:n.mode};q(t)}catch(e){}},children:"Import Preset"})]}),(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"12px"},children:(0,n.jsx)("button",{onClick:e=>{m.ZP.event({category:"pets_interaction",action:"exported_custom_preset"});let t={},i={};for(let[e,t]of Object.entries(z))i[e]={ID:e,mode:t.mode};t={priorityList:J,priorityMap:R,petWhiteList:i},navigator.clipboard.writeText(JSON.stringify(t))},children:"Copy Current Preset to Clipboard"})})]}),(0,n.jsxs)("div",{style:{backgroundColor:"rgba(255,255,255, 0.07)",padding:"6px",marginTop:"12px",borderRadius:"6px"},children:[(0,n.jsx)("div",{style:{fontSize:"24px",fontWeight:"bold",textAlign:"center",marginBottom:"6px"},children:"Miscellaneous Settings"}),(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[(0,n.jsx)("div",{style:{},children:"Use expedition pets"}),(0,n.jsx)("div",{children:(0,n.jsx)("input",{"aria-label":"use selected pets from expedition page",type:"checkbox",onChange:e=>{N(!!e.target.checked)},checked:!!w,value:!!w})})]})]})]})]}),(0,n.jsxs)("div",{className:"teamBuilder importantText",style:{borderRadius:"6px",border:"2px solid rgba(255,255,255,0.7)",margin:"12px 12px 12px 0",maxHeight:"calc(100% - 24px)",overflow:"auto",display:"flex",flexDirection:"column",flex:"1",alignItems:"flex-start",backgroundColor:"rgba(255,255,255, 0.05)",padding:"6px",minWidth:"260px"},children:[(0,n.jsx)("div",{style:{fontSize:"32px",fontWeight:"bold",textAlign:"center",width:"100%"},children:"How To Use"}),(0,n.jsxs)("div",{style:{display:"flex",flex:"1",flexDirection:"column"},children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("div",{style:{minWidth:"130px",width:"130px",maxWidth:"130px",marginRight:"12px",fontSize:"20px"},children:"Priority List:"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{children:"If you are new, it is recommended to select one of the presets from `Recommended Presets`"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{style:{margin:"6px 6px 6px 0"},children:"Add any bonus to the priority list, bonuses at the top are weighed more than those below them."}),(0,n.jsx)("div",{style:{margin:"6px 6px 6px 0"},children:"Setting a value to -1 means it will always reward pets for having this bonus"}),(0,n.jsx)("div",{style:{margin:"6px 6px 6px 0"},children:"Setting a value to 0 means this bonus is not rewarded at all"}),(0,n.jsx)("div",{style:{margin:"6px 6px 6px 0"},children:"Setting a value to x means this bonus is rewarded until x number of pets have this bonus, then the reward is 0"})]})]})]}),(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("div",{style:{minWidth:"130px",width:"130px",maxWidth:"130px",marginRight:"12px",fontSize:"20px"},children:"Recommended Presets:"}),(0,n.jsx)("div",{children:(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{style:{margin:"6px 6px 6px 0"},children:"Main Team: This is the team you will run majority of your run"}),(0,n.jsx)("div",{style:{margin:"6px 6px 6px 0"},children:"Reinc. Team: This is the team you will run when you want to reincarnate - run for at least 1 hour before reincarnation to get pet levels up"}),(0,n.jsx)("div",{style:{margin:"6px 6px 6px 0"},children:"Gear Team: This is the team you will run when searching for new/better gear"}),(0,n.jsx)("div",{style:{margin:"6px 6px 6px 0"},children:"Stat Team: This is the team you will run on the side for short bursts of time to cover any missing stats from the other 3 team presets"})]})})]}),(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("div",{style:{minWidth:"130px",width:"130px",maxWidth:"130px",marginRight:"12px",fontSize:"20px"},children:"Custom Presets:"}),(0,n.jsx)("div",{children:(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{style:{margin:"6px 6px 6px 0"},children:"You can save/load your own presets by entering a name and pressing `Save Current`."}),(0,n.jsx)("div",{style:{margin:"6px 6px 6px 0"},children:"To load preset in, select it from the drop down next to `Select saved preset`"}),(0,n.jsx)("div",{style:{margin:"6px 6px 6px 0"},children:"To delete a preset, select it from the drop down next to `Delete preset`"})]})})]}),(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("div",{style:{minWidth:"130px",width:"130px",maxWidth:"130px",marginRight:"12px",fontSize:"20px"},children:"Share Presets:"}),(0,n.jsx)("div",{children:(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{style:{margin:"6px 6px 6px 0"},children:"You can share/import other players presets"}),(0,n.jsx)("div",{style:{margin:"6px 6px 6px 0"},children:"To share your preset, press `Copy Current Preset...` the value is automatically copied to your clipboard"}),(0,n.jsx)("div",{style:{margin:"6px 6px 6px 0"},children:"To import someone elses preset, copy their shared value into the empty text box and press 'Import Preset'"})]})})]})]})]})]})]})})}m.ZP.initialize([{trackingId:"G-GGLPK02VH8"}])},23701:function(){},42996:function(){}},function(e){e.O(0,[413,201,385,689,755,528,930,198,971,472,744],function(){return e(e.s=34953)}),_N_E=e.O()}]);