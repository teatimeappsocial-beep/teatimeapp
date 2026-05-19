import React, { useState, useEffect } from "react";

// Analytics tracking
function track(event, params){
  try{if(window.gtag)window.gtag('event',event,params);}catch(e){}
}

const C = {
  bg:"#FAFAF7",card:"#FFF",green:"#4A7C59",greenLight:"#E8F0E8",
  greenDark:"#3A5F45",terra:"#C4784A",terraLight:"#FDF0E8",
  gold:"#D4A847",brown:"#7A6B5D",brownLight:"#A89888",
  charcoal:"#1A1A1A",gray:"#F2F0ED",grayMid:"#D8D4CF",white:"#FFF",
  danger:"#D45454",ov:"rgba(0,0,0,0.45)",
};
const F=`'Plus Jakarta Sans',sans-serif`,D=`'Playfair Display',serif`;
const GL="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap";

const ACTS=[
  {id:"all",emoji:"\u2728",label:"All",color:C.green},
  {id:"golf",emoji:"\u26F3",label:"Golf",color:"#4A7C59"},
  {id:"hiking",emoji:"\uD83E\uDD7E",label:"Hiking",color:"#6B8C5A"},
  {id:"water",emoji:"\uD83C\uDFC4",label:"Water Sports",color:"#3A8B9F"},
  {id:"wine",emoji:"\uD83C\uDF77",label:"Wine & Dining",color:"#8B4A5A"},
  {id:"coffee",emoji:"\u2615",label:"Coffee",color:"#7A6B5D"},
  {id:"cooking",emoji:"\uD83C\uDF73",label:"Cooking",color:"#C4784A"},
  {id:"flowers",emoji:"\uD83C\uDF38",label:"Flowers",color:"#A07090"},
  {id:"movies",emoji:"\uD83C\uDFAC",label:"Movies",color:"#5A5A7A"},
  {id:"books",emoji:"\uD83D\uDCD6",label:"Books",color:"#6A5A4A"},
  {id:"games",emoji:"\uD83C\uDFAF",label:"Games",color:"#4A6A8A"},
  {id:"fitness",emoji:"\uD83D\uDCAA",label:"Fitness",color:"#5A8A6A"},
  {id:"ai-learn",emoji:"\uD83E\uDDE0",label:"AI Learn",color:"#4A7A8A"},
  {id:"interview",emoji:"\uD83D\uDCBC",label:"Interview",color:"#6A7A4A"},
  {id:"photo",emoji:"\uD83D\uDCF8",label:"Photo",color:"#5A5A5A"},
  {id:"running",emoji:"\uD83C\uDFC3",label:"Running",color:"#4A8A5A"},
  {id:"tea",emoji:"\uD83C\uDF75",label:"Tea Time",color:"#8B6D4E"},
];
const CITIES=[{id:"bayarea",label:"Bay Area",icon:"\uD83C\uDF09"},{id:"seattle",label:"Seattle",icon:"\uD83C\uDF32"},{id:"vancouver",label:"Vancouver",icon:"\uD83C\uDFD4\uFE0F"}];
const AVATARS=["\uD83E\uDDD1","\uD83D\uDC69","\uD83E\uDDD4","\uD83D\uDC68","\uD83D\uDC69\u200D\uD83E\uDDB0","\uD83E\uDDD1\u200D\uD83E\uDDB1","\uD83D\uDC71","\uD83D\uDC71\u200D\u2640\uFE0F"];

const SEEDS=[
  {id:"s1",activity:"golf",title:"Weekend Morning Round",hn:"David K.",ha:"\uD83E\uDDD4",city:"bayarea",loc:"Crystal Springs GC, Burlingame",date:"2026-06-07",time:"7:30 AM",total:4,joined:["David K."],likes:12,desc:"Casual round, all skill levels. Good conversation, no phones on the course!"},
  {id:"s2",activity:"hiking",title:"Sunset Hike at Rancho",hn:"Sarah M.",ha:"\uD83D\uDC69\u200D\uD83E\uDDB0",city:"bayarea",loc:"Rancho San Antonio, Cupertino",date:"2026-06-08",time:"5:00 PM",total:6,joined:["Sarah M.","Kevin W."],likes:28,desc:"Easy-moderate 4 mile loop. Sunset from the ridge. Bring water and good vibes!"},
  {id:"s3",activity:"wine",title:"Thursday Wine & Chat",hn:"Elena R.",ha:"\uD83D\uDC69",city:"bayarea",loc:"Eno Wine Bar, San Jose",date:"2026-06-05",time:"6:30 PM",total:6,joined:["Elena R.","Tom H.","Yuki T.","Soo Jin K."],likes:45,desc:"Weekly wine night. Different varietal each week. No work talk allowed!"},
  {id:"s4",activity:"ai-learn",title:"AI Tools for Beginners",hn:"Kevin W.",ha:"\uD83E\uDDD1\u200D\uD83D\uDCBB",city:"bayarea",loc:"Philz Coffee, San Mateo",date:"2026-06-07",time:"10:00 AM",total:5,joined:["Kevin W.","Rachel P."],likes:34,desc:"Casual AI session. Bring your laptop. Practical tips for everyday use."},
  {id:"s5",activity:"water",title:"Paddleboard Morning",hn:"Tom H.",ha:"\uD83C\uDFC4\u200D\u2642\uFE0F",city:"bayarea",loc:"Pillar Point Harbor, Half Moon Bay",date:"2026-06-08",time:"9:00 AM",total:4,joined:["Tom H."],likes:22,desc:"SUP in calm harbor. I have 2 extra boards. Beginners welcome. Coffee after!"},
  {id:"s6",activity:"interview",title:"Mock Interview Circle",hn:"Rachel P.",ha:"\uD83D\uDC69\u200D\uD83D\uDCBC",city:"bayarea",loc:"Coworking Space, Millbrae",date:"2026-06-04",time:"6:00 PM",total:4,joined:["Rachel P.","Kevin W."],likes:38,desc:"Take turns doing mock interviews with honest feedback. No-judgment zone."},
  {id:"s7",activity:"hiking",title:"Grouse Grind Saturday",hn:"Michelle L.",ha:"\uD83E\uDDD7\u200D\u2640\uFE0F",city:"vancouver",loc:"Grouse Mountain, North Van",date:"2026-06-07",time:"8:00 AM",total:6,joined:["Michelle L."],likes:19,desc:"The classic grind! Comfortable pace, brunch at the top."},
  {id:"s8",activity:"coffee",title:"Sunday Coffee Walk",hn:"Jen S.",ha:"\u2615",city:"seattle",loc:"Volunteer Park, Capitol Hill",date:"2026-06-08",time:"10:00 AM",total:6,joined:["Jen S."],likes:52,desc:"Coffee from Victrola, walk through the park, just chat. Every Sunday!"},
  {id:"s9",activity:"flowers",title:"Spring Arrangement Class",hn:"Yuki T.",ha:"\uD83C\uDF3A",city:"bayarea",loc:"Community Studio, San Carlos",date:"2026-06-07",time:"2:00 PM",total:6,joined:["Yuki T.","Elena R."],likes:31,desc:"Seasonal flower arrangement. All materials provided. $15. No experience needed!"},
  {id:"s10",activity:"cooking",title:"Korean Home Cooking",hn:"Soo Jin K.",ha:"\uD83D\uDC69\u200D\uD83C\uDF73",city:"bayarea",loc:"Home Kitchen, Millbrae",date:"2026-06-06",time:"6:00 PM",total:4,joined:["Soo Jin K.","Elena R."],likes:67,desc:"Kimchi jjigae and japchae from scratch. Take home leftovers!"},
];

function gid(){return"t"+Date.now()+Math.random().toString(36).substr(2,5);}
function ga(id){return ACTS.find(a=>a.id===id)||ACTS[0];}
function fd(d){if(!d)return"";try{return new Date(d+"T00:00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});}catch(e){return d;}}

function App(){
  const[tab,sTab]=useState("home");
  const[city,sCity]=useState("bayarea");
  const[act,sAct]=useState("all");
  const[det,sDet]=useState(null);
  const[showC,sSC]=useState(false);
  const[cDone,sCD]=useState(false);
  const[showS,sSS]=useState(false);
  const[showOb,sOb]=useState(true);
  const[obS,sObS]=useState(0);
  const[user,sUser]=useState(null);
  const[teas,sTeas]=useState([...SEEDS]);
  const[joined,sJoined]=useState([]);
  const[liked,sLiked]=useState([]);
  const[anim,sAnim]=useState(false);
  // signup
  const[sn,sSn]=useState("");
  const[sb,sSb]=useState("");
  const[sc,sSc]=useState("bayarea");
  const[si,sSi]=useState([]);
  const[sa,sSa]=useState(AVATARS[0]);
  // create
  const[ct,sCt]=useState("");
  const[ca,sCa]=useState("");
  const[cl,sCl]=useState("");
  const[cd,sCd]=useState("");
  const[cm,sCm]=useState("");
  const[cx,sCx]=useState("");
  const[cn,sCn]=useState(4);

  useEffect(()=>{setTimeout(()=>sAnim(true),100);},[]);
  useEffect(()=>{sAnim(false);setTimeout(()=>sAnim(true),50);track('page_view',{page:tab,city});},[tab,city,act]);

  const fil=teas.filter(t=>t.city===city&&(act==="all"||t.activity===act));

  const doJoin=(id)=>{if(!user){sSS(true);track('signup_prompt',{trigger:'join'});return;}sJoined(p=>{const t=teas.find(x=>x.id===id);if(p.includes(id))return p.filter(x=>x!==id);track('join_teatime',{teatime_id:id,activity:t?.activity,city:t?.city});return[...p,id];});};
  const doLike=(id)=>{sLiked(p=>{if(p.includes(id))return p.filter(x=>x!==id);track('like_teatime',{teatime_id:id});return[...p,id];});};
  const doSignup=()=>{if(!sn.trim()||si.length<2)return;const u={name:sn.trim(),bio:sb.trim(),city:sc,interests:si,avatar:sa,trust:5.0};sUser(u);sSS(false);sCity(sc);track('sign_up',{city:sc,interests:si.join(',')});};
  const doCreate=()=>{
    if(!user){sSS(true);return;}
    if(!ct.trim()||!ca||!cl.trim()||!cd||!cm.trim())return;
    const nt={id:gid(),activity:ca,title:ct.trim(),hn:user.name,ha:user.avatar,city,loc:cl.trim(),date:cd,time:cm.trim(),total:cn,joined:[user.name],likes:0,desc:cx.trim()||"Come join us!"};
    sTeas(p=>[nt,...p]);sCt("");sCa("");sCl("");sCd("");sCm("");sCx("");sCn(4);sCD(true);
    track('create_teatime',{activity:ca,city,total:cn});
  };

  const inp={width:"100%",padding:"12px 14px",borderRadius:12,border:`1px solid ${C.gray}`,fontFamily:F,fontSize:13,outline:"none",marginBottom:10,boxSizing:"border-box",background:C.bg};
  const lbl={fontSize:12,fontWeight:600,color:C.greenDark,marginBottom:6,display:"block"};

  // Onboard
  if(showOb){
    const steps=[
      {e:"\uD83C\uDF75",t:"Welcome to Teatime",s:"Where real people meet.\nNo algorithms. No AI. Just you.",b:"Let's go"},
      {e:"\uD83D\uDEE1\uFE0F",t:"Verified Humans Only",s:"Every person is ID-verified.\nNo bots. No fakes. No AI profiles.",b:"I like that"},
      {e:"\uD83D\uDEAB",t:"Zero AI in Your Experience",s:"No AI writes your bio.\nNo AI picks your friends.\nEvery word here is human.",b:"Refreshing"},
      {e:"\u2600\uFE0F",t:"Show Up & Connect",s:"Pick an interest. Join a small group.\nThe magic happens in person.",b:"Find my Teatime"},
    ];
    const st=steps[obS];
    return(<div style={{minHeight:"100vh",background:C.bg,fontFamily:F,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:32,textAlign:"center"}}>
      <link href={GL} rel="stylesheet"/>
      <div style={{fontSize:72,marginBottom:32,opacity:anim?1:0,transform:anim?"translateY(0)":"translateY(20px)",transition:"all 0.6s"}}>{st.e}</div>
      <h1 style={{fontFamily:D,fontSize:32,color:C.charcoal,margin:"0 0 16px",opacity:anim?1:0,transition:"all 0.6s 0.1s"}}>{st.t}</h1>
      <p style={{fontSize:16,color:C.brown,lineHeight:1.8,whiteSpace:"pre-line",maxWidth:320,marginBottom:40,opacity:anim?1:0,transition:"all 0.6s 0.2s"}}>{st.s}</p>
      <button onClick={()=>obS<3?sObS(obS+1):sOb(false)} style={{fontFamily:F,fontSize:16,fontWeight:600,background:C.green,color:C.white,border:"none",padding:"14px 40px",borderRadius:50,cursor:"pointer",boxShadow:`0 4px 16px ${C.green}30`,opacity:anim?1:0,transition:"all 0.6s 0.3s"}}>{st.b}</button>
      <div style={{display:"flex",gap:8,marginTop:32}}>{steps.map((_,i)=><div key={i} style={{width:i===obS?24:8,height:8,borderRadius:4,background:i===obS?C.green:C.grayMid,transition:"all 0.3s"}}/>)}</div>
    </div>);
  }

  // Signup
  const signM=showS?(<div style={{position:"fixed",inset:0,background:C.ov,zIndex:500,display:"flex",alignItems:"center",justifyContent:"center",padding:16}} onClick={()=>sSS(false)}>
    <link href={GL} rel="stylesheet"/>
    <div onClick={e=>e.stopPropagation()} style={{background:C.white,borderRadius:24,padding:24,maxWidth:420,width:"100%",maxHeight:"90vh",overflow:"auto"}}>
      <h2 style={{fontFamily:D,fontSize:24,color:C.charcoal,margin:"0 0 4px"}}>Join Teatime</h2>
      <p style={{color:C.brownLight,fontSize:12,margin:"0 0 20px"}}>Create your profile. Be real. {"\uD83C\uDF75"}</p>
      <span style={lbl}>Avatar</span>
      <div style={{display:"flex",gap:8,marginBottom:16,flexWrap:"wrap"}}>{AVATARS.map(a=><button key={a} onClick={()=>sSa(a)} style={{width:44,height:44,borderRadius:14,border:`2px solid ${sa===a?C.green:"transparent"}`,background:sa===a?C.greenLight:C.gray,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,cursor:"pointer"}}>{a}</button>)}</div>
      <span style={lbl}>Your name</span>
      <input value={sn} onChange={e=>sSn(e.target.value)} placeholder="First name and last initial" style={inp}/>
      <span style={lbl}>About you</span>
      <textarea value={sb} onChange={e=>sSb(e.target.value)} placeholder="What do you enjoy? What are you looking for?" rows={3} style={{...inp,resize:"none"}}/>
      <div style={{fontSize:10,color:C.brownLight,marginBottom:12,textAlign:"center"}}>{"\u270D\uFE0F"} Write it yourself. That's the Teatime way.</div>
      <span style={lbl}>Your city</span>
      <div style={{display:"flex",gap:6,marginBottom:16}}>{CITIES.map(c=><button key={c.id} onClick={()=>sSc(c.id)} style={{flex:1,padding:10,borderRadius:12,border:`1.5px solid ${sc===c.id?C.green:C.grayMid}`,background:sc===c.id?C.greenLight:C.white,fontFamily:F,fontSize:12,cursor:"pointer",color:sc===c.id?C.green:C.brown,fontWeight:sc===c.id?600:400}}>{c.icon} {c.label}</button>)}</div>
      <span style={lbl}>Interests (pick 2+)</span>
      <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:20}}>{ACTS.filter(a=>a.id!=="all").map(a=>{const sel=si.includes(a.id);return <button key={a.id} onClick={()=>sSi(sel?si.filter(x=>x!==a.id):[...si,a.id])} style={{padding:"6px 12px",borderRadius:12,border:`1.5px solid ${sel?a.color:C.grayMid}`,background:sel?`${a.color}15`:C.white,fontSize:12,cursor:"pointer",fontFamily:F,color:sel?a.color:C.brown,fontWeight:sel?600:400}}>{a.emoji} {a.label}</button>;})}</div>
      <button onClick={doSignup} disabled={!sn.trim()||si.length<2} style={{width:"100%",padding:14,fontFamily:F,fontSize:16,fontWeight:600,background:sn.trim()&&si.length>=2?C.green:C.grayMid,color:C.white,border:"none",borderRadius:50,cursor:sn.trim()&&si.length>=2?"pointer":"not-allowed"}}>{sn.trim()&&si.length>=2?"Join Teatime \u2600\uFE0F":"Pick name and 2+ interests"}</button>
    </div>
  </div>):null;

  // Nav
  const nav=(<div style={{position:"fixed",bottom:0,left:0,right:0,background:C.white,borderTop:`1px solid ${C.gray}`,display:"flex",justifyContent:"space-around",padding:"6px 0 max(8px,env(safe-area-inset-bottom))",zIndex:300}}>
    {[{id:"home",ic:"\uD83C\uDFE0",lb:"Home"},{id:"discover",ic:"\uD83D\uDD0D",lb:"Discover"},{id:"create",ic:"+",lb:"",cr:true},{id:"about",ic:"\uD83C\uDF75",lb:"About"},{id:"me",ic:"\uD83D\uDC64",lb:"Me"}].map(n=>
      <button key={n.id} onClick={()=>{if(n.id==="create"){if(!user)sSS(true);else{sSC(true);sCD(false);}}else{sTab(n.id);sDet(null);}}} style={{fontFamily:F,fontSize:n.cr?0:10,color:tab===n.id?C.green:C.brownLight,background:"none",border:"none",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:2,padding:"4px 12px",fontWeight:tab===n.id?600:400}}>
        {n.cr?<div style={{width:44,height:44,borderRadius:22,background:C.green,display:"flex",alignItems:"center",justifyContent:"center",color:C.white,fontSize:24,fontWeight:700,marginTop:-18,boxShadow:`0 4px 12px ${C.green}40`}}>+</div>:<><span style={{fontSize:22}}>{n.ic}</span>{n.lb}</>}
      </button>
    )}
  </div>);

  // Top
  const top=(<div style={{position:"sticky",top:0,zIndex:200,background:`${C.bg}F0`,backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",padding:"10px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:`1px solid ${C.gray}`}}>
    <div style={{display:"flex",alignItems:"center",gap:6,cursor:"pointer"}} onClick={()=>{sTab("home");sDet(null);}}>
      <span style={{fontSize:24}}>{"\uD83C\uDF75"}</span><span style={{fontFamily:D,fontSize:22,color:C.greenDark,fontWeight:600}}>teatime</span>
    </div>
    <div style={{display:"flex",gap:4}}>{CITIES.map(c=><button key={c.id} onClick={()=>sCity(c.id)} style={{fontFamily:F,fontSize:11,fontWeight:city===c.id?600:400,color:city===c.id?C.green:C.brownLight,background:city===c.id?C.greenLight:"transparent",border:"none",padding:"5px 10px",borderRadius:14,cursor:"pointer"}}>{c.icon} {c.label}</button>)}</div>
  </div>);

  // Stories
  const stories=(<div style={{display:"flex",gap:10,padding:"14px 16px 6px",overflowX:"auto",WebkitOverflowScrolling:"touch",scrollbarWidth:"none"}}>
    {ACTS.map(a=><button key={a.id} onClick={()=>sAct(a.id)} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:5,background:"none",border:"none",cursor:"pointer",flexShrink:0,padding:0}}>
      <div style={{width:52,height:52,borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,background:act===a.id?`${a.color}18`:C.gray,border:`2.5px solid ${act===a.id?a.color:"transparent"}`,transition:"all 0.2s",boxShadow:act===a.id?`0 2px 8px ${a.color}20`:"none"}}>{a.emoji}</div>
      <span style={{fontFamily:F,fontSize:10,fontWeight:act===a.id?600:400,color:act===a.id?a.color:C.brownLight}}>{a.label}</span>
    </button>)}
  </div>);

  // Card
  const Card=({t})=>{const ac=ga(t.activity);const lk=liked.includes(t.id);const jn=joined.includes(t.id);const sp=t.total-(t.joined?.length||0)-(jn?1:0);
    return(<div style={{background:C.card,borderRadius:20,marginBottom:14,overflow:"hidden",border:`1px solid ${C.gray}`}}>
      <div style={{display:"flex",alignItems:"center",padding:"12px 14px",gap:10}}>
        <div style={{width:38,height:38,borderRadius:12,background:`${ac.color}15`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,border:`2px solid ${ac.color}30`}}>{t.ha||"\uD83E\uDDD1"}</div>
        <div style={{flex:1}}>
          <div style={{display:"flex",alignItems:"center",gap:5}}><span style={{fontSize:13,fontWeight:600,color:C.charcoal}}>{t.hn}</span><span style={{fontSize:11,color:C.green}}>{"\u2713"}</span></div>
          <div style={{fontSize:11,color:C.brownLight}}>{fd(t.date)} {"\u00B7"} {t.time}</div>
        </div>
        <div style={{padding:"3px 9px",borderRadius:10,background:`${ac.color}12`,fontSize:10,fontWeight:600,color:ac.color}}>{ac.emoji} {ac.label}</div>
      </div>
      <div style={{padding:"0 14px 10px",cursor:"pointer"}} onClick={()=>sDet(t.id)}>
        <h3 style={{fontFamily:D,fontSize:19,color:C.charcoal,margin:"0 0 6px"}}>{t.title}</h3>
        <p style={{fontSize:13,color:C.brown,lineHeight:1.6,margin:"0 0 10px"}}>{t.desc}</p>
        <div style={{fontSize:12,color:C.brownLight,marginBottom:10}}>{"\uD83D\uDCCD"} {t.loc}</div>
        <div style={{display:"flex",alignItems:"center"}}>
          <span style={{fontSize:11,color:sp<=2?C.terra:C.brownLight,fontWeight:sp<=2?600:400}}>{"\uD83D\uDC65"} {Math.max(0,sp)} spot{sp!==1?"s":""} left</span>
          {jn&&<span style={{fontSize:11,color:C.green,fontWeight:600,marginLeft:8}}>{"\u2713"} Going</span>}
        </div>
      </div>
      <div style={{display:"flex",borderTop:`1px solid ${C.gray}`}}>
        <button onClick={e=>{e.stopPropagation();doLike(t.id);}} style={{flex:1,fontFamily:F,fontSize:12,fontWeight:500,color:lk?C.danger:C.brownLight,background:"none",border:"none",borderRight:`1px solid ${C.gray}`,padding:10,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5}}>{lk?"\u2764\uFE0F":"\uD83E\uDD0D"} {(t.likes||0)+(lk?1:0)}</button>
        <button onClick={e=>{e.stopPropagation();sDet(t.id);}} style={{flex:1,fontFamily:F,fontSize:12,fontWeight:500,color:C.brownLight,background:"none",border:"none",borderRight:`1px solid ${C.gray}`,padding:10,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5}}>{"\uD83D\uDCAC"} Details</button>
        <button onClick={e=>{e.stopPropagation();doJoin(t.id);}} style={{flex:1.2,fontFamily:F,fontSize:12,fontWeight:600,color:jn?C.green:C.white,background:jn?C.greenLight:C.green,border:"none",padding:10,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5}}>{jn?"\u2713 Joined":"Join \u2600\uFE0F"}</button>
      </div>
    </div>);
  };

  // Create
  const crM=showC?(<div style={{position:"fixed",inset:0,background:C.ov,zIndex:400,display:"flex",alignItems:"flex-end"}} onClick={()=>{sSC(false);sCD(false);}}>
    <link href={GL} rel="stylesheet"/>
    <div onClick={e=>e.stopPropagation()} style={{background:C.white,borderRadius:"24px 24px 0 0",padding:"20px 20px 36px",width:"100%",maxWidth:500,margin:"0 auto",maxHeight:"88vh",overflow:"auto"}}>
      <div style={{width:36,height:4,borderRadius:2,background:C.grayMid,margin:"0 auto 16px"}}/>
      {cDone?(<div style={{textAlign:"center",padding:"28px 0"}}>
        <div style={{fontSize:52,marginBottom:12}}>{"\uD83C\uDF89"}</div>
        <h2 style={{fontFamily:D,fontSize:22,color:C.charcoal,marginBottom:6}}>You're hosting!</h2>
        <p style={{color:C.brown,fontSize:14,marginBottom:20}}>Your Teatime is live. People can find and join it now.</p>
        <button onClick={()=>{sSC(false);sCD(false);}} style={{fontFamily:F,fontSize:14,fontWeight:600,background:C.green,color:C.white,border:"none",padding:"12px 28px",borderRadius:50,cursor:"pointer"}}>Done</button>
      </div>):(<>
        <h2 style={{fontFamily:D,fontSize:22,color:C.charcoal,margin:"0 0 4px"}}>Host a Teatime</h2>
        <p style={{color:C.brownLight,fontSize:12,margin:"0 0 16px"}}>Keep it small. Keep it real. {"\uD83C\uDF75"}</p>
        <span style={lbl}>Activity</span>
        <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:14}}>{ACTS.filter(a=>a.id!=="all").map(a=><button key={a.id} onClick={()=>sCa(a.id)} style={{padding:"6px 12px",borderRadius:12,border:`1.5px solid ${ca===a.id?a.color:C.grayMid}`,background:ca===a.id?`${a.color}15`:C.white,fontSize:12,cursor:"pointer",fontFamily:F,color:ca===a.id?a.color:C.brown,fontWeight:ca===a.id?600:400}}>{a.emoji} {a.label}</button>)}</div>
        <span style={lbl}>Title</span>
        <input value={ct} onChange={e=>sCt(e.target.value)} placeholder="e.g. Saturday Morning Round" style={inp}/>
        <span style={lbl}>Location</span>
        <input value={cl} onChange={e=>sCl(e.target.value)} placeholder="e.g. Crystal Springs Golf Course" style={inp}/>
        <div style={{display:"flex",gap:10,marginBottom:10}}>
          <div style={{flex:1}}><span style={lbl}>Date</span><input type="date" value={cd} onChange={e=>sCd(e.target.value)} style={inp}/></div>
          <div style={{flex:1}}><span style={lbl}>Time</span><input value={cm} onChange={e=>sCm(e.target.value)} placeholder="e.g. 10:00 AM" style={inp}/></div>
        </div>
        <span style={lbl}>Description</span>
        <textarea value={cx} onChange={e=>sCx(e.target.value)} placeholder="Tell people what to expect!" rows={3} style={{...inp,resize:"none"}}/>
        <div style={{fontSize:10,color:C.brownLight,marginBottom:12,textAlign:"center"}}>{"\u270D\uFE0F"} Write it yourself. That's the Teatime way.</div>
        <div style={{display:"flex",gap:6,marginBottom:16,justifyContent:"center",alignItems:"center"}}>
          <span style={{fontSize:11,color:C.brownLight}}>Max group:</span>
          {[2,4,6,8].map(n=><button key={n} onClick={()=>sCn(n)} style={{width:38,height:38,borderRadius:12,border:`1.5px solid ${cn===n?C.green:C.grayMid}`,background:cn===n?C.greenLight:C.white,fontSize:14,cursor:"pointer",fontFamily:F,color:cn===n?C.green:C.brown,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:cn===n?600:400}}>{n}</button>)}
        </div>
        <button onClick={doCreate} style={{width:"100%",padding:13,fontFamily:F,fontSize:15,fontWeight:600,background:ct.trim()&&ca&&cl.trim()&&cd&&cm.trim()?C.green:C.grayMid,color:C.white,border:"none",borderRadius:50,cursor:ct.trim()&&ca&&cl.trim()&&cd&&cm.trim()?"pointer":"not-allowed"}}>Create Teatime {"\u2600\uFE0F"}</button>
      </>)}
    </div>
  </div>):null;

  // Detail
  if(det){const t=teas.find(x=>x.id===det);if(!t){sDet(null);return null;}const ac=ga(t.activity);const jn=joined.includes(t.id);const sp=t.total-(t.joined?.length||0)-(jn?1:0);
    return(<div style={{minHeight:"100vh",background:C.bg,fontFamily:F,paddingBottom:80}}>
      <link href={GL} rel="stylesheet"/>{top}
      <div style={{maxWidth:500,margin:"0 auto",padding:16}}>
        <button onClick={()=>sDet(null)} style={{fontFamily:F,fontSize:13,color:C.brownLight,background:"none",border:"none",cursor:"pointer",marginBottom:10,padding:0}}>{"\u2190"} Back</button>
        <div style={{background:C.card,borderRadius:20,overflow:"hidden",border:`1px solid ${C.gray}`}}>
          <div style={{background:`linear-gradient(135deg,${ac.color},${ac.color}BB)`,padding:"24px 18px",textAlign:"center"}}>
            <div style={{fontSize:40,marginBottom:6}}>{ac.emoji}</div>
            <h2 style={{fontFamily:D,fontSize:24,color:C.white,margin:"0 0 4px"}}>{t.title}</h2>
            <div style={{fontSize:12,color:"rgba(255,255,255,0.8)"}}>by {t.hn}</div>
          </div>
          <div style={{padding:18}}>
            {[{i:"\uD83D\uDCC5",x:`${fd(t.date)} at ${t.time}`},{i:"\uD83D\uDCCD",x:t.loc},{i:"\uD83D\uDC65",x:`${Math.max(0,sp)} spots left of ${t.total}`}].map((d,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:10,fontSize:13,color:C.charcoal,marginBottom:10}}><span>{d.i}</span>{d.x}</div>)}
            <div style={{background:C.bg,borderRadius:12,padding:14,margin:"12px 0 16px"}}>
              <div style={{fontSize:11,fontWeight:600,color:C.greenDark,marginBottom:4}}>About</div>
              <div style={{fontSize:13,color:C.brown,lineHeight:1.7}}>{t.desc}</div>
            </div>
            <div style={{marginBottom:16}}>
              <div style={{fontSize:11,fontWeight:600,color:C.greenDark,marginBottom:8}}>Who's coming</div>
              <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                {(t.joined||[]).map((n,i)=><div key={i} style={{padding:"6px 12px",background:C.greenLight,borderRadius:12,fontSize:12,color:C.greenDark,fontWeight:500,display:"flex",alignItems:"center",gap:5}}>{n} <span style={{color:C.green,fontSize:10}}>{"\u2713"}</span></div>)}
                {jn&&user&&<div style={{padding:"6px 12px",background:C.terraLight,borderRadius:12,fontSize:12,color:C.terra,fontWeight:500}}>You!</div>}
              </div>
            </div>
            <button onClick={()=>doJoin(t.id)} style={{width:"100%",padding:13,fontFamily:F,fontSize:15,fontWeight:600,background:jn?C.greenLight:C.green,color:jn?C.greenDark:C.white,border:"none",borderRadius:50,cursor:"pointer"}}>{jn?"\u2713 You're going!":"Join this Teatime \u2600\uFE0F"}</button>
          </div>
        </div>
      </div>{nav}
    </div>);
  }

  // About
  if(tab==="about"){return(<div style={{minHeight:"100vh",background:C.bg,fontFamily:F,paddingBottom:80}}>
    <link href={GL} rel="stylesheet"/>{top}
    <div style={{maxWidth:500,margin:"0 auto",padding:"24px 16px",textAlign:"center"}}>
      <div style={{fontSize:48,marginBottom:12}}>{"\uD83C\uDF75"}</div>
      <h2 style={{fontFamily:D,fontSize:28,color:C.charcoal,marginBottom:8}}>About Teatime</h2>
      <p style={{fontSize:14,color:C.brown,lineHeight:1.8,marginBottom:24}}>Teatime is where real people meet over shared interests. No algorithms decide who you see. No AI writes your messages. Just real humans showing up and connecting in person.</p>
      <div style={{background:C.card,borderRadius:16,padding:20,border:`1px solid ${C.gray}`,textAlign:"left",marginBottom:16}}>
        <h3 style={{fontFamily:D,fontSize:18,color:C.greenDark,marginBottom:12}}>The Teatime Promise</h3>
        {["Every profile is a verified real person","Every word is written by a human","Every photo is real, no AI generation","Every connection is earned by showing up","AI guards the door. Humans keep the room real."].map((p,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:i<4?`1px solid ${C.gray}`:"none"}}><span style={{color:C.gold}}>{"\u2726"}</span><span style={{fontSize:13,color:C.brown}}>{p}</span></div>)}
      </div>
      <p style={{fontSize:12,color:C.brownLight}}>Bay Area {"\u00B7"} Seattle {"\u00B7"} Vancouver</p>
      <p style={{fontSize:11,color:C.brownLight,marginTop:8}}>{"\uD83C\uDF75"} Be real. Meet real.</p>
    </div>{nav}
  </div>);}

  // Me
  if(tab==="me"){
    if(!user)return(<div style={{minHeight:"100vh",background:C.bg,fontFamily:F,paddingBottom:80}}>
      <link href={GL} rel="stylesheet"/>{top}
      <div style={{maxWidth:500,margin:"0 auto",padding:"40px 16px",textAlign:"center"}}>
        <div style={{fontSize:48,marginBottom:16}}>{"\uD83D\uDC64"}</div>
        <h2 style={{fontFamily:D,fontSize:24,color:C.charcoal,marginBottom:8}}>Join Teatime</h2>
        <p style={{color:C.brown,fontSize:14,marginBottom:24}}>Create your profile to host and join Teatimes.</p>
        <button onClick={()=>sSS(true)} style={{fontFamily:F,fontSize:15,fontWeight:600,background:C.green,color:C.white,border:"none",padding:"14px 36px",borderRadius:50,cursor:"pointer"}}>Create Profile {"\u2600\uFE0F"}</button>
      </div>{signM}{nav}
    </div>);
    return(<div style={{minHeight:"100vh",background:C.bg,fontFamily:F,paddingBottom:80}}>
      <link href={GL} rel="stylesheet"/>{top}
      <div style={{maxWidth:500,margin:"0 auto",padding:"20px 16px"}}>
        <div style={{textAlign:"center",marginBottom:24}}>
          <div style={{width:80,height:80,borderRadius:24,background:C.terraLight,display:"flex",alignItems:"center",justifyContent:"center",fontSize:38,margin:"0 auto 10px",border:`3px solid ${C.terra}30`}}>{user.avatar}</div>
          <h2 style={{fontFamily:D,fontSize:24,color:C.charcoal,margin:"0 0 4px"}}>{user.name}</h2>
          <span style={{background:C.greenLight,color:C.green,fontSize:11,fontWeight:600,padding:"3px 10px",borderRadius:8}}>{"\u2713"} Verified Human</span>
          <div style={{display:"flex",justifyContent:"center",gap:28,margin:"16px 0"}}>
            <div><div style={{fontSize:20,fontWeight:700,color:C.charcoal}}>{joined.length}</div><div style={{fontSize:11,color:C.brownLight}}>Joined</div></div>
            <div><div style={{fontSize:20,fontWeight:700,color:C.gold}}>{"\u2605"} {user.trust}</div><div style={{fontSize:11,color:C.brownLight}}>Trust</div></div>
          </div>
          {user.bio&&<p style={{fontSize:13,color:C.brown,lineHeight:1.7,maxWidth:320,margin:"0 auto 12px"}}>{user.bio}</p>}
          <div style={{display:"flex",gap:6,justifyContent:"center",flexWrap:"wrap"}}>{(user.interests||[]).map(i=>{const a=ga(i);return <span key={i} style={{padding:"4px 10px",borderRadius:10,background:`${a.color}12`,fontSize:11,color:a.color,fontWeight:500}}>{a.emoji} {a.label}</span>;})}</div>
        </div>
      </div>{nav}
    </div>);
  }

  // Discover
  if(tab==="discover"){return(<div style={{minHeight:"100vh",background:C.bg,fontFamily:F,paddingBottom:80}}>
    <link href={GL} rel="stylesheet"/>{top}
    <div style={{maxWidth:500,margin:"0 auto",padding:16}}>
      <h2 style={{fontFamily:D,fontSize:22,color:C.charcoal,marginBottom:4}}>Discover Activities</h2>
      <p style={{fontSize:12,color:C.brownLight,marginBottom:16}}>Find your next Teatime by interest</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:10}}>
        {ACTS.filter(a=>a.id!=="all").map(a=>{const c=teas.filter(t=>t.city===city&&t.activity===a.id).length;
          return <button key={a.id} onClick={()=>{sAct(a.id);sTab("home");}} style={{background:C.card,borderRadius:16,padding:"16px 14px",border:`1px solid ${C.gray}`,cursor:"pointer",textAlign:"left",display:"flex",alignItems:"center",gap:10,fontFamily:F}}>
            <div style={{width:42,height:42,borderRadius:12,background:`${a.color}15`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20}}>{a.emoji}</div>
            <div><div style={{fontSize:13,fontWeight:600,color:C.charcoal}}>{a.label}</div><div style={{fontSize:11,color:C.brownLight}}>{c} teatime{c!==1?"s":""}</div></div>
          </button>;
        })}
      </div>
    </div>{nav}
  </div>);}

  // Home
  return(<div style={{minHeight:"100vh",background:C.bg,fontFamily:F,paddingBottom:80}}>
    <link href={GL} rel="stylesheet"/>{top}{stories}{crM}{signM}
    <div style={{maxWidth:500,margin:"0 auto",padding:"6px 16px"}}>
      {!user&&<div style={{background:C.greenLight,borderRadius:14,padding:"12px 16px",marginBottom:14,display:"flex",alignItems:"center",justifyContent:"space-between",border:`1px solid ${C.green}25`}}>
        <span style={{fontSize:13,color:C.greenDark}}>Join to create and attend Teatimes</span>
        <button onClick={()=>sSS(true)} style={{fontFamily:F,fontSize:12,fontWeight:600,background:C.green,color:C.white,border:"none",padding:"6px 14px",borderRadius:20,cursor:"pointer"}}>Sign up</button>
      </div>}
      <div style={{fontSize:12,color:C.brownLight,marginBottom:10}}>{fil.length} teatime{fil.length!==1?"s":""} in {CITIES.find(c=>c.id===city)?.label}</div>
      {fil.length===0?<div style={{textAlign:"center",padding:"44px 20px",background:C.white,borderRadius:20,border:`1px solid ${C.gray}`}}>
        <div style={{fontSize:36,marginBottom:10}}>{"\uD83C\uDF75"}</div>
        <div style={{fontFamily:D,fontSize:18,color:C.charcoal,marginBottom:6}}>No Teatimes here yet</div>
        <div style={{color:C.brownLight,fontSize:13,marginBottom:16}}>Be the first to host one!</div>
        <button onClick={()=>{if(!user)sSS(true);else{sSC(true);sCD(false);}}} style={{fontFamily:F,fontSize:13,fontWeight:600,background:C.terra,color:C.white,border:"none",padding:"10px 22px",borderRadius:50,cursor:"pointer"}}>Host a Teatime {"\u2600\uFE0F"}</button>
      </div>:fil.map(t=><Card key={t.id} t={t}/>)}
    </div>{nav}
  </div>);
}

export default App;
