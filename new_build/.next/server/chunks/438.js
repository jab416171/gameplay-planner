"use strict";exports.id=438,exports.ids=[438],exports.modules={65438:(e,o,t)=>{t.d(o,{Z:()=>i});var n=t(30784),r=t(9885),s=t(91495),l=t(40334);function MouseOverPopover({tooltip:e,children:o,style:t,extraClasses:i,opacity:a,forceOpen:p,setForceOpen:u}){let[d,v]=(0,r.useState)(null),[c,h]=(0,r.useState)(!1),handlePopoverClose=()=>{u||v(null)};a=a||"0.9";let[g,x]=(0,r.useState)(100),[C,m]=(0,r.useState)(100);(0,r.useEffect)(()=>{x(window.innerWidth),m(window.innerHeight)},[]);let P="bottom",f="top";return d&&d.getBoundingClientRect().top/C>.5&&(P="top",f="bottom"),(0,n.jsxs)("div",{className:i?i+"popoverContainer":"popoverContainer",style:t||{},children:[n.jsx(l.Z,{component:"span","aria-haspopup":"true",onMouseEnter:e=>{v(e.currentTarget)},onMouseLeave:handlePopoverClose,children:o}),n.jsx(s.ZP,{id:"mouse-over-popover",sx:{pointerEvents:"none"},open:u?p:!!d,anchorEl:d,anchorOrigin:{vertical:P,horizontal:"left"},transformOrigin:{vertical:f,horizontal:"left"},onClose:handlePopoverClose,slotProps:{paper:{style:{backgroundColor:`rgba(255,255,255,${a})`,padding:"6px",pointerEvents:"auto"}}},children:e})]})}let i=MouseOverPopover}};