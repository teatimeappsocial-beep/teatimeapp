import React, { useState, useEffect } from "react";

const C = {
  bg: "#FAFAF7", card: "#FFFFFF", green: "#4A7C59", greenLight: "#E8F0E8",
  greenDark: "#3A5F45", terra: "#C4784A", terraLight: "#FDF0E8",
  gold: "#D4A847", brown: "#7A6B5D", brownLight: "#A89888",
  charcoal: "#1A1A1A", gray: "#F2F0ED", grayMid: "#D8D4CF", white: "#FFFFFF",
  danger: "#D45454",
};

const FONT = `'Plus Jakarta Sans', sans-serif`;
const DISPLAY = `'Playfair Display', serif`;

const ACTIVITIES = [
  { id: "all", emoji: "\u2728", label: "All", color: C.green },
  { id: "golf", emoji: "\u26F3", label: "Golf", color: "#4A7C59" },
  { id: "hiking", emoji: "\uD83E\uDD7E", label: "Hiking", color: "#6B8C5A" },
  { id: "water", emoji: "\uD83C\uDFC4", label: "Water", color: "#3A8B9F" },
  { id: "wine", emoji: "\uD83C\uDF77", label: "Wine", color: "#8B4A5A" },
  { id: "coffee", emoji: "\u2615", label: "Coffee", color: "#7A6B5D" },
  { id: "cooking", emoji: "\uD83C\uDF73", label: "Cooking", color: "#C4784A" },
  { id: "flowers", emoji: "\uD83C\uDF38", label: "Flowers", color: "#A07090" },
  { id: "movies", emoji: "\uD83C\uDFAC", label: "Movies", color: "#5A5A7A" },
  { id: "books", emoji: "\uD83D\uDCD6", label: "Books", color: "#6A5A4A" },
  { id: "games", emoji: "\uD83C\uDFAF", label: "Games", color: "#4A6A8A" },
  { id: "fitness", emoji: "\uD83D\uDCAA", label: "Fitness", color: "#5A8A6A" },
  { id: "ai-learn", emoji: "\uD83E\uDDE0", label: "AI Learn", color: "#4A7A8A" },
  { id: "interview", emoji: "\uD83D\uDCBC", label: "Interview", color: "#6A7A4A" },
  { id: "photo", emoji: "\uD83D\uDCF8", label: "Photo", color: "#5A5A5A" },
  { id: "running", emoji: "\uD83C\uDFC3", label: "Running", color: "#4A8A5A" },
  { id: "tea", emoji: "\uD83C\uDF75", label: "Tea Time", color: "#8B6D4E" },
];

const USERS = [
  { id:"u1", name:"David K.", avatar:"\uD83E\uDDD4", bio:"Weekend golfer, weekday engineer. Looking for partners who don't take themselves too seriously.", interests:["golf","hiking","coffee"], trust:4.8, verified:true, teatimes:12, city:"bayarea" },
  { id:"u2", name:"Sarah M.", avatar:"\uD83D\uDC69\u200D\uD83E\uDDB0", bio:"Sunset chaser. Trail runner. I make great trail mix and even better conversation.", interests:["hiking","running","wine"], trust:4.9, verified:true, teatimes:24, city:"bayarea" },
  { id:"u3", name:"Elena R.", avatar:"\uD83D\uDC69", bio:"Wine enthusiast. I believe the best conversations happen over a good glass.", interests:["wine","cooking","books"], trust:4.7, verified:true, teatimes:18, city:"bayarea" },
  { id:"u4", name:"Kevin W.", avatar:"\uD83E\uDDD1\u200D\uD83D\uDCBB", bio:"Teaching AI to non-tech people is my passion. Former teacher, now in tech.", interests:["ai-learn","coffee","books"], trust:4.6, verified:true, teatimes:8, city:"bayarea" },
  { id:"u5", name:"Tom H.", avatar:"\uD83C\uDFC4\u200D\u2642\uFE0F", bio:"SUP addict. Ocean lover. Extra boards and zero judgment for beginners.", interests:["water","fitness","coffee"], trust:4.5, verified:true, teatimes:15, city:"bayarea" },
  { id:"u6", name:"Rachel P.", avatar:"\uD83D\uDC69\u200D\uD83D\uDCBC", bio:"Career coach by day, interview practice buddy by night.", interests:["interview","coffee","books"], trust:4.8, verified:true, teatimes:20, city:"bayarea" },
  { id:"u7", name:"Michelle L.", avatar:"\uD83E\uDDD7\u200D\u2640\uFE0F", bio:"If it involves mountains, I'm in. Always up for post-hike brunch.", interests:["hiking","fitness","cooking"], trust:4.7, verified:true, teatimes:16, city:"vancouver" },
  { id:"u8", name:"Jen S.", avatar:"\u2615", bio:"Sunday coffee walks are my therapy. Capitol Hill local.", interests:["coffee","hiking","photo"], trust:4.9, verified:true, teatimes:30, city:"seattle" },
  { id:"u9", name:"Yuki T.", avatar:"\uD83C\uDF3A", bio:"Ikebana and modern floristry. I love seeing people discover their creative side.", interests:["flowers","cooking","coffee"], trust:4.8, verified:true, teatimes:14, city:"bayarea" },
  { id:"u10", name:"Soo Jin K.", avatar:"\uD83D\uDC69\u200D\uD83C\uDF73", bio:"Korean home cooking is how I show love. Small groups, big flavors!", interests:["cooking","flowers","wine"], trust:5.0, verified:true, teatimes:22, city:"bayarea" },
];

const TEATIMES = [
  { id:1, activity:"golf", title:"Weekend Morning Round", host:"u1", city:"bayarea", location:"Crystal Springs GC, Burlingame", date:"Sat, Jun 7", time:"7:30 AM", spots:3, total:4, joined:["u1"], likes:12, comments:3, desc:"Casual round, all skill levels. Good conversation, no phones on the course!" },
  { id:2, activity:"hiking", title:"Sunset Hike at Rancho", host:"u2", city:"bayarea", location:"Rancho San Antonio, Cupertino", date:"Sun, Jun 8", time:"5:00 PM", spots:4, total:6, joined:["u2","u4"], likes:28, comments:7, desc:"Easy-moderate 4 mile loop. Sunset from the ridge. Bring water and good vibes!" },
  { id:3, activity:"wine", title:"Thursday Wine & Chat", host:"u3", city:"bayarea", location:"Eno Wine Bar, San Jose", date:"Thu, Jun 5", time:"6:30 PM", spots:2, total:6, joined:["u3","u5","u9","u10"], likes:45, comments:12, desc:"Weekly wine night. Different varietal each week. No work talk allowed!" },
  { id:4, activity:"ai-learn", title:"AI Tools for Beginners", host:"u4", city:"bayarea", location:"Philz Coffee, San Mateo", date:"Sat, Jun 7", time:"10:00 AM", spots:3, total:5, joined:["u4","u6"], likes:34, comments:9, desc:"Casual AI session. Bring your laptop. Practical tips for everyday use." },
  { id:5, activity:"water", title:"Paddleboard Morning", host:"u5", city:"bayarea", location:"Pillar Point Harbor, Half Moon Bay", date:"Sun, Jun 8", time:"9:00 AM", spots:3, total:4, joined:["u5"], likes:22, comments:5, desc:"SUP in calm harbor. I have 2 extra boards. Beginners welcome. Coffee after!" },
  { id:6, activity:"interview", title:"Mock Interview Circle", host:"u6", city:"bayarea", location:"Coworking Space, Millbrae", date:"Wed, Jun 4", time:"6:00 PM", spots:2, total:4, joined:["u6","u4"], likes:38, comments:11, desc:"Take turns doing mock interviews with honest feedback. No-judgment zone." },
  { id:7, activity:"hiking", title:"Grouse Grind Saturday", host:"u7", city:"vancouver", location:"Grouse Mountain, North Van", date:"Sat, Jun 7", time:"8:00 AM", spots:4, total:6, joined:["u7"], likes:19, comments:4, desc:"The classic grind! Comfortable pace, brunch at the top." },
  { id:8, activity:"coffee", title:"Sunday Coffee Walk", host:"u8", city:"seattle", location:"Volunteer Park, Capitol Hill", date:"Sun, Jun 8", time:"10:00 AM", spots:5, total:6, joined:["u8"], likes:52, comments:15, desc:"Coffee from Victrola, walk through the park, just chat. Every Sunday!" },
  { id:9, activity:"flowers", title:"Spring Arrangement Class", host:"u9", city:"bayarea", location:"Community Studio, San Carlos", date:"Sat, Jun 7", time:"2:00 PM", spots:4, total:6, joined:["u9","u3"], likes:31, comments:8, desc:"Seasonal flower arrangement. All materials provided. $15. No experience needed!" },
  { id:10, activity:"cooking", title:"Korean Home Cooking", host:"u10", city:"bayarea", location:"Home Kitchen, Millbrae", date:"Fri, Jun 6", time:"6:00 PM", spots:2, total:4, joined:["u10","u3"], likes:67, comments:21, desc:"Kimchi jjigae and japchae from scratch. Take home leftovers!" },
];

const CITIES = [
  { id:"bayarea", label:"Bay Area", icon:"\uD83C\uDF09" },
  { id:"seattle", label:"Seattle", icon:"\uD83C\uDF32" },
  { id:"vancouver", label:"Vancouver", icon:"\uD83C\uDFD4\uFE0F" },
];

const getUser = id => USERS.find(u => u.id === id);
const getAct = id => ACTIVITIES.find(a => a.id === id);

function App() {
  const [tab, setTab] = useState("home");
  const [city, setCity] = useState("bayarea");
  const [activity, setActivity] = useState("all");
  const [detail, setDetail] = useState(null);
  const [profileId, setProfileId] = useState(null);
  const [joinedIds, setJoinedIds] = useState([]);
  const [likedIds, setLikedIds] = useState([]);
  const [showCreate, setShowCreate] = useState(false);
  const [createDone, setCreateDone] = useState(false);
  const [showOnboard, setShowOnboard] = useState(true);
  const [obStep, setObStep] = useState(0);
  const [notifsRead, setNotifsRead] = useState([]);
  const [animate, setAnimate] = useState(false);

  const notifs = [
    { id:1, text:"Sarah M. joined your Sunset Hike", time:"2m" },
    { id:2, text:"Elena R. liked Korean Cooking", time:"15m" },
    { id:3, text:"New: Paddleboard Morning near you", time:"1h" },
    { id:4, text:"Mock Interview Circle is tomorrow!", time:"3h" },
  ];

  useEffect(() => { setTimeout(() => setAnimate(true), 100); }, []);
  useEffect(() => { setAnimate(false); setTimeout(() => setAnimate(true), 50); }, [tab, city, activity]);

  const filtered = TEATIMES.filter(t => t.city === city && (activity === "all" || t.activity === activity));
  const unreadCount = notifs.filter(n => !notifsRead.includes(n.id)).length;

  // Onboarding
  if (showOnboard) {
    const steps = [
      { emoji:"\uD83C\uDF75", title:"Welcome to Teatime", sub:"Where real people meet.\nNo algorithms. No AI. Just you.", btn:"Let's go" },
      { emoji:"\uD83D\uDEE1\uFE0F", title:"Verified Humans Only", sub:"Every person is ID-verified.\nNo bots. No fakes. No AI profiles.", btn:"I like that" },
      { emoji:"\uD83D\uDEAB", title:"Zero AI in Your Experience", sub:"No AI writes your bio.\nNo AI picks your friends.\nEvery word here is human.", btn:"Refreshing" },
      { emoji:"\u2600\uFE0F", title:"Show Up & Connect", sub:"Pick an interest. Join a small group.\nThe magic happens in person.", btn:"Find my Teatime" },
    ];
    const s = steps[obStep];
    return (
      <div style={{ minHeight:"100vh", background:C.bg, fontFamily:FONT, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:32, textAlign:"center" }}>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <div style={{ fontSize:72, marginBottom:32, opacity:animate?1:0, transform:animate?"translateY(0)":"translateY(20px)", transition:"all 0.6s ease" }}>{s.emoji}</div>
        <h1 style={{ fontFamily:DISPLAY, fontSize:32, color:C.charcoal, margin:"0 0 16px", lineHeight:1.2, opacity:animate?1:0, transform:animate?"translateY(0)":"translateY(20px)", transition:"all 0.6s ease 0.1s" }}>{s.title}</h1>
        <p style={{ fontSize:16, color:C.brown, lineHeight:1.8, whiteSpace:"pre-line", maxWidth:320, marginBottom:40, opacity:animate?1:0, transition:"all 0.6s ease 0.2s" }}>{s.sub}</p>
        <button onClick={() => obStep < 3 ? setObStep(obStep+1) : setShowOnboard(false)} style={{
          fontFamily:FONT, fontSize:16, fontWeight:600, background:C.green, color:C.white,
          border:"none", padding:"14px 40px", borderRadius:50, cursor:"pointer", boxShadow:`0 4px 16px ${C.green}30`,
          opacity:animate?1:0, transition:"all 0.6s ease 0.3s",
        }}>{s.btn}</button>
        <div style={{ display:"flex", gap:8, marginTop:32 }}>
          {steps.map((_,i) => <div key={i} style={{ width:i===obStep?24:8, height:8, borderRadius:4, background:i===obStep?C.green:C.grayMid, transition:"all 0.3s" }} />)}
        </div>
      </div>
    );
  }

  // Bottom Nav
  const bnav = (
    <div style={{ position:"fixed", bottom:0, left:0, right:0, background:C.white, borderTop:`1px solid ${C.gray}`, display:"flex", justifyContent:"space-around", padding:"6px 0 max(8px, env(safe-area-inset-bottom))", zIndex:300 }}>
      {[
        { id:"home", icon:"\uD83C\uDFE0", label:"Home" },
        { id:"discover", icon:"\uD83D\uDD0D", label:"Discover" },
        { id:"create", icon:"+", label:"", isCreate:true },
        { id:"notifs", icon:"\uD83D\uDD14", label:"Alerts" },
        { id:"me", icon:"\uD83D\uDC64", label:"Me" },
      ].map(n => (
        <button key={n.id} onClick={() => {
          if (n.id==="create") { setShowCreate(true); setCreateDone(false); }
          else { setTab(n.id); setDetail(null); setProfileId(null); }
        }} style={{
          fontFamily:FONT, fontSize:n.isCreate?0:10, color:tab===n.id?C.green:C.brownLight,
          background:"none", border:"none", cursor:"pointer", display:"flex",
          flexDirection:"column", alignItems:"center", gap:2, padding:"4px 12px",
          position:"relative", fontWeight:tab===n.id?600:400,
        }}>
          {n.isCreate ? (
            <div style={{ width:44, height:44, borderRadius:22, background:C.green, display:"flex", alignItems:"center", justifyContent:"center", color:C.white, fontSize:24, fontWeight:700, marginTop:-18, boxShadow:`0 4px 12px ${C.green}40` }}>+</div>
          ) : (
            <><span style={{ fontSize:22 }}>{n.icon}</span>{n.label}</>
          )}
          {n.id==="notifs" && unreadCount>0 && (
            <div style={{ position:"absolute", top:0, right:4, width:16, height:16, borderRadius:8, background:C.danger, color:C.white, fontSize:9, fontWeight:700, display:"flex", alignItems:"center", justifyContent:"center" }}>{unreadCount}</div>
          )}
        </button>
      ))}
    </div>
  );

  // Top Bar
  const tbar = (
    <div style={{ position:"sticky", top:0, zIndex:200, background:`${C.bg}F0`, backdropFilter:"blur(12px)", WebkitBackdropFilter:"blur(12px)", padding:"10px 16px", display:"flex", alignItems:"center", justifyContent:"space-between", borderBottom:`1px solid ${C.gray}` }}>
      <div style={{ display:"flex", alignItems:"center", gap:6, cursor:"pointer" }} onClick={() => { setTab("home"); setDetail(null); setProfileId(null); }}>
        <span style={{ fontSize:24 }}>{"\uD83C\uDF75"}</span>
        <span style={{ fontFamily:DISPLAY, fontSize:22, color:C.greenDark, fontWeight:600 }}>teatime</span>
      </div>
      <div style={{ display:"flex", gap:4 }}>
        {CITIES.map(c => (
          <button key={c.id} onClick={() => setCity(c.id)} style={{
            fontFamily:FONT, fontSize:11, fontWeight:city===c.id?600:400,
            color:city===c.id?C.green:C.brownLight, background:city===c.id?C.greenLight:"transparent",
            border:"none", padding:"5px 10px", borderRadius:14, cursor:"pointer",
          }}>{c.icon} {c.label}</button>
        ))}
      </div>
    </div>
  );

  // Stories Bar
  const storiesBar = (
    <div style={{ display:"flex", gap:10, padding:"14px 16px 6px", overflowX:"auto", WebkitOverflowScrolling:"touch", msOverflowStyle:"none", scrollbarWidth:"none" }}>
      {ACTIVITIES.map(a => (
        <button key={a.id} onClick={() => setActivity(a.id)} style={{
          display:"flex", flexDirection:"column", alignItems:"center", gap:5,
          background:"none", border:"none", cursor:"pointer", flexShrink:0, padding:0,
        }}>
          <div style={{
            width:52, height:52, borderRadius:16, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22,
            background:activity===a.id?`${a.color}18`:C.gray,
            border:`2.5px solid ${activity===a.id?a.color:"transparent"}`,
            transition:"all 0.2s",
            boxShadow:activity===a.id?`0 2px 8px ${a.color}20`:"none",
          }}>{a.emoji}</div>
          <span style={{ fontFamily:FONT, fontSize:10, fontWeight:activity===a.id?600:400, color:activity===a.id?a.color:C.brownLight }}>{a.label}</span>
        </button>
      ))}
    </div>
  );

  // Feed Card
  const FeedCard = ({ t }) => {
    const host = getUser(t.host);
    const act = getAct(t.activity);
    const liked = likedIds.includes(t.id);
    const joined = joinedIds.includes(t.id);
    return (
      <div style={{ background:C.card, borderRadius:20, marginBottom:14, overflow:"hidden", border:`1px solid ${C.gray}` }}>
        <div style={{ display:"flex", alignItems:"center", padding:"12px 14px", gap:10, cursor:"pointer" }} onClick={() => setProfileId(host.id)}>
          <div style={{ width:38, height:38, borderRadius:12, background:`${act.color}15`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, border:`2px solid ${act.color}30` }}>{host.avatar}</div>
          <div style={{ flex:1 }}>
            <div style={{ display:"flex", alignItems:"center", gap:5 }}>
              <span style={{ fontSize:13, fontWeight:600, color:C.charcoal }}>{host.name}</span>
              {host.verified && <span style={{ fontSize:11, color:C.green }}>{"\u2713"}</span>}
              <span style={{ fontSize:11, color:C.brownLight }}>{"\u00B7"} {"\u2605"} {host.trust}</span>
            </div>
            <div style={{ fontSize:11, color:C.brownLight }}>{t.date} {"\u00B7"} {t.time}</div>
          </div>
          <div style={{ padding:"3px 9px", borderRadius:10, background:`${act.color}12`, fontSize:10, fontWeight:600, color:act.color }}>{act.emoji} {act.label}</div>
        </div>
        <div style={{ padding:"0 14px 10px", cursor:"pointer" }} onClick={() => setDetail(t.id)}>
          <h3 style={{ fontFamily:DISPLAY, fontSize:19, color:C.charcoal, margin:"0 0 6px", lineHeight:1.3 }}>{t.title}</h3>
          <p style={{ fontSize:13, color:C.brown, lineHeight:1.6, margin:"0 0 10px" }}>{t.desc}</p>
          <div style={{ fontSize:12, color:C.brownLight, marginBottom:10 }}>{"\uD83D\uDCCD"} {t.location}</div>
          <div style={{ display:"flex", alignItems:"center" }}>
            {t.joined.map((uid,i) => {
              const u = getUser(uid);
              return <div key={uid} style={{ width:28, height:28, borderRadius:10, background:C.greenLight, display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, border:`2px solid ${C.white}`, marginLeft:i>0?-6:0, zIndex:t.joined.length-i }}>{u?.avatar}</div>;
            })}
            <span style={{ fontSize:11, color:t.spots<=2?C.terra:C.brownLight, fontWeight:t.spots<=2?600:400, marginLeft:8 }}>
              {t.spots} spot{t.spots!==1?"s":""} left
            </span>
            {joined && <span style={{ fontSize:11, color:C.green, fontWeight:600, marginLeft:8 }}>{"\u2713"} Going</span>}
          </div>
        </div>
        <div style={{ display:"flex", borderTop:`1px solid ${C.gray}` }}>
          <button onClick={e => { e.stopPropagation(); setLikedIds(liked?likedIds.filter(id=>id!==t.id):[...likedIds,t.id]); }} style={{
            flex:1, fontFamily:FONT, fontSize:12, fontWeight:500, color:liked?C.danger:C.brownLight,
            background:"none", border:"none", borderRight:`1px solid ${C.gray}`,
            padding:"10px", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:5,
          }}>{liked?"\u2764\uFE0F":"\uD83E\uDD0D"} {t.likes+(liked?1:0)}</button>
          <button onClick={e => { e.stopPropagation(); setDetail(t.id); }} style={{
            flex:1, fontFamily:FONT, fontSize:12, fontWeight:500, color:C.brownLight,
            background:"none", border:"none", borderRight:`1px solid ${C.gray}`,
            padding:"10px", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:5,
          }}>{"\uD83D\uDCAC"} {t.comments}</button>
          <button onClick={e => { e.stopPropagation(); if(!joined) setJoinedIds([...joinedIds,t.id]); }} style={{
            flex:1.2, fontFamily:FONT, fontSize:12, fontWeight:600,
            color:joined?C.green:C.white, background:joined?C.greenLight:C.green,
            border:"none", padding:"10px", cursor:joined?"default":"pointer",
            display:"flex", alignItems:"center", justifyContent:"center", gap:5,
          }}>{joined?"\u2713 Joined":"Join \u2600\uFE0F"}</button>
        </div>
      </div>
    );
  };

  // Create Sheet
  const createSheet = showCreate ? (
    <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.45)", zIndex:400, display:"flex", alignItems:"flex-end" }} onClick={() => { setShowCreate(false); setCreateDone(false); }}>
      <div onClick={e => e.stopPropagation()} style={{ background:C.white, borderRadius:"24px 24px 0 0", padding:"20px 20px 36px", width:"100%", maxWidth:500, margin:"0 auto", maxHeight:"88vh", overflow:"auto" }}>
        <div style={{ width:36, height:4, borderRadius:2, background:C.grayMid, margin:"0 auto 16px" }} />
        {createDone ? (
          <div style={{ textAlign:"center", padding:"28px 0" }}>
            <div style={{ fontSize:52, marginBottom:12 }}>{"\uD83C\uDF89"}</div>
            <h2 style={{ fontFamily:DISPLAY, fontSize:22, color:C.charcoal, marginBottom:6 }}>You're hosting!</h2>
            <p style={{ color:C.brown, fontSize:14, marginBottom:20 }}>Your Teatime is live. People nearby can find and join it now.</p>
            <button onClick={() => { setShowCreate(false); setCreateDone(false); }} style={{ fontFamily:FONT, fontSize:14, fontWeight:600, background:C.green, color:C.white, border:"none", padding:"12px 28px", borderRadius:50, cursor:"pointer" }}>Done</button>
          </div>
        ) : (
          <>
            <h2 style={{ fontFamily:DISPLAY, fontSize:22, color:C.charcoal, margin:"0 0 4px" }}>Host a Teatime</h2>
            <p style={{ color:C.brownLight, fontSize:12, margin:"0 0 16px" }}>Keep it small. Keep it real. Write it yourself. {"\uD83C\uDF75"}</p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:14 }}>
              {ACTIVITIES.filter(a=>a.id!=="all").slice(0,12).map(a => (
                <button key={a.id} style={{ padding:"6px 12px", borderRadius:12, border:`1px solid ${C.grayMid}`, background:C.white, fontSize:12, cursor:"pointer", fontFamily:FONT, color:C.brown }}>{a.emoji} {a.label}</button>
              ))}
            </div>
            {["What's the plan?","Where?","When? (e.g. Sat Jun 7, 10am)"].map((ph,i) => (
              <input key={i} placeholder={ph} style={{ width:"100%", padding:"12px 14px", borderRadius:12, border:`1px solid ${C.gray}`, fontFamily:FONT, fontSize:13, outline:"none", marginBottom:10, boxSizing:"border-box", background:C.bg }} />
            ))}
            <textarea placeholder="Tell people what to expect. Be yourself!" rows={3} style={{ width:"100%", padding:"12px 14px", borderRadius:12, border:`1px solid ${C.gray}`, fontFamily:FONT, fontSize:13, outline:"none", resize:"none", boxSizing:"border-box", background:C.bg, marginBottom:6 }} />
            <div style={{ fontSize:10, color:C.brownLight, marginBottom:12, textAlign:"center" }}>{"\u270D\uFE0F"} Write it yourself. That's the Teatime way.</div>
            <div style={{ display:"flex", gap:6, marginBottom:16, justifyContent:"center", alignItems:"center" }}>
              <span style={{ fontSize:11, color:C.brownLight }}>Max group:</span>
              {[2,4,6,8].map(n => <button key={n} style={{ width:38, height:38, borderRadius:12, border:`1px solid ${C.grayMid}`, background:C.white, fontSize:14, cursor:"pointer", fontFamily:FONT, color:C.brown, display:"flex", alignItems:"center", justifyContent:"center" }}>{n}</button>)}
            </div>
            <button onClick={() => setCreateDone(true)} style={{ width:"100%", padding:"13px", fontFamily:FONT, fontSize:15, fontWeight:600, background:C.green, color:C.white, border:"none", borderRadius:50, cursor:"pointer" }}>Create Teatime {"\u2600\uFE0F"}</button>
          </>
        )}
      </div>
    </div>
  ) : null;

  // Profile View
  if (profileId) {
    const u = getUser(profileId);
    const uTeatimes = TEATIMES.filter(t => t.host === u.id);
    return (
      <div style={{ minHeight:"100vh", background:C.bg, fontFamily:FONT, paddingBottom:80 }}>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        {tbar}
        <div style={{ maxWidth:500, margin:"0 auto", padding:"16px" }}>
          <button onClick={() => setProfileId(null)} style={{ fontFamily:FONT, fontSize:13, color:C.brownLight, background:"none", border:"none", cursor:"pointer", marginBottom:12, padding:0 }}>{"\u2190"} Back</button>
          <div style={{ textAlign:"center", marginBottom:24 }}>
            <div style={{ width:76, height:76, borderRadius:22, background:C.greenLight, display:"flex", alignItems:"center", justifyContent:"center", fontSize:36, margin:"0 auto 10px", border:`3px solid ${C.green}30` }}>{u.avatar}</div>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:6 }}>
              <h2 style={{ fontFamily:DISPLAY, fontSize:22, color:C.charcoal, margin:0 }}>{u.name}</h2>
              {u.verified && <span style={{ background:C.greenLight, color:C.green, fontSize:10, fontWeight:600, padding:"2px 8px", borderRadius:8 }}>{"\u2713"} Verified</span>}
            </div>
            <div style={{ display:"flex", justifyContent:"center", gap:28, margin:"14px 0" }}>
              <div><div style={{ fontSize:18, fontWeight:700, color:C.charcoal }}>{u.teatimes}</div><div style={{ fontSize:11, color:C.brownLight }}>Teatimes</div></div>
              <div><div style={{ fontSize:18, fontWeight:700, color:C.gold }}>{"\u2605"} {u.trust}</div><div style={{ fontSize:11, color:C.brownLight }}>Trust</div></div>
            </div>
            <p style={{ fontSize:13, color:C.brown, lineHeight:1.7, maxWidth:340, margin:"0 auto 14px" }}>{u.bio}</p>
            <div style={{ display:"flex", gap:6, justifyContent:"center", flexWrap:"wrap" }}>
              {u.interests.map(i => { const a=getAct(i); return <span key={i} style={{ padding:"4px 10px", borderRadius:10, background:`${a.color}12`, fontSize:11, color:a.color, fontWeight:500 }}>{a.emoji} {a.label}</span>; })}
            </div>
          </div>
          {uTeatimes.length > 0 && <>
            <h3 style={{ fontFamily:DISPLAY, fontSize:17, color:C.charcoal, marginBottom:10 }}>Their Teatimes</h3>
            {uTeatimes.map(t => <FeedCard key={t.id} t={t} />)}
          </>}
        </div>
        {bnav}
      </div>
    );
  }

  // Detail View
  if (detail) {
    const t = TEATIMES.find(tt => tt.id === detail);
    const host = getUser(t.host);
    const act = getAct(t.activity);
    const joined = joinedIds.includes(t.id);
    return (
      <div style={{ minHeight:"100vh", background:C.bg, fontFamily:FONT, paddingBottom:80 }}>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        {tbar}
        <div style={{ maxWidth:500, margin:"0 auto", padding:"16px" }}>
          <button onClick={() => setDetail(null)} style={{ fontFamily:FONT, fontSize:13, color:C.brownLight, background:"none", border:"none", cursor:"pointer", marginBottom:10, padding:0 }}>{"\u2190"} Back</button>
          <div style={{ background:C.card, borderRadius:20, overflow:"hidden", border:`1px solid ${C.gray}` }}>
            <div style={{ background:`linear-gradient(135deg, ${act.color}, ${act.color}BB)`, padding:"24px 18px", textAlign:"center" }}>
              <div style={{ fontSize:40, marginBottom:6 }}>{act.emoji}</div>
              <h2 style={{ fontFamily:DISPLAY, fontSize:24, color:C.white, margin:"0 0 4px" }}>{t.title}</h2>
              <div style={{ fontSize:12, color:"rgba(255,255,255,0.8)" }}>by {host.name} {"\u00B7"} {"\u2605"} {host.trust}</div>
            </div>
            <div style={{ padding:18 }}>
              {[
                { icon:"\uD83D\uDCC5", text:`${t.date} at ${t.time}` },
                { icon:"\uD83D\uDCCD", text:t.location },
                { icon:"\uD83D\uDC65", text:`${t.spots} spots left of ${t.total}` },
              ].map((d,i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", gap:10, fontSize:13, color:C.charcoal, marginBottom:10 }}><span>{d.icon}</span>{d.text}</div>
              ))}
              <div style={{ background:C.bg, borderRadius:12, padding:14, margin:"12px 0 16px" }}>
                <div style={{ fontSize:11, fontWeight:600, color:C.greenDark, marginBottom:4 }}>About</div>
                <div style={{ fontSize:13, color:C.brown, lineHeight:1.7 }}>{t.desc}</div>
              </div>
              <div style={{ marginBottom:16 }}>
                <div style={{ fontSize:11, fontWeight:600, color:C.greenDark, marginBottom:8 }}>Who's coming</div>
                <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                  {t.joined.map(uid => { const u=getUser(uid); return (
                    <div key={uid} onClick={() => setProfileId(uid)} style={{ display:"flex", alignItems:"center", gap:5, padding:"6px 12px", background:C.greenLight, borderRadius:12, cursor:"pointer" }}>
                      <span style={{ fontSize:14 }}>{u.avatar}</span>
                      <span style={{ fontSize:12, color:C.greenDark, fontWeight:500 }}>{u.name}</span>
                      {u.verified && <span style={{ color:C.green, fontSize:10 }}>{"\u2713"}</span>}
                    </div>
                  ); })}
                </div>
              </div>
              <button onClick={() => { if(!joined) setJoinedIds([...joinedIds,t.id]); }} style={{
                width:"100%", padding:13, fontFamily:FONT, fontSize:15, fontWeight:600,
                background:joined?C.greenLight:C.green, color:joined?C.greenDark:C.white,
                border:"none", borderRadius:50, cursor:joined?"default":"pointer",
              }}>{joined?"\u2713 You're going! See you there":"Join this Teatime \u2600\uFE0F"}</button>
            </div>
          </div>
        </div>
        {bnav}
      </div>
    );
  }

  // Notifications
  if (tab === "notifs") {
    return (
      <div style={{ minHeight:"100vh", background:C.bg, fontFamily:FONT, paddingBottom:80 }}>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        {tbar}
        <div style={{ maxWidth:500, margin:"0 auto", padding:"16px" }}>
          <h2 style={{ fontFamily:DISPLAY, fontSize:22, color:C.charcoal, marginBottom:14 }}>Notifications</h2>
          {notifs.map(n => {
            const isRead = notifsRead.includes(n.id);
            return (
              <div key={n.id} onClick={() => { if(!isRead) setNotifsRead([...notifsRead, n.id]); }} style={{ display:"flex", alignItems:"center", gap:10, padding:"12px 14px", background:isRead?C.white:C.greenLight, borderRadius:14, marginBottom:8, border:`1px solid ${isRead?C.gray:C.green}25`, cursor:"pointer" }}>
                <div style={{ width:7, height:7, borderRadius:4, background:isRead?"transparent":C.green, flexShrink:0 }} />
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:13, color:C.charcoal, fontWeight:isRead?400:600 }}>{n.text}</div>
                  <div style={{ fontSize:11, color:C.brownLight, marginTop:2 }}>{n.time} ago</div>
                </div>
              </div>
            );
          })}
        </div>
        {bnav}
      </div>
    );
  }

  // Discover
  if (tab === "discover") {
    const cityUsers = USERS.filter(u => u.city === city);
    return (
      <div style={{ minHeight:"100vh", background:C.bg, fontFamily:FONT, paddingBottom:80 }}>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        {tbar}
        <div style={{ maxWidth:500, margin:"0 auto", padding:"16px" }}>
          <h2 style={{ fontFamily:DISPLAY, fontSize:22, color:C.charcoal, marginBottom:4 }}>Discover People</h2>
          <p style={{ fontSize:12, color:C.brownLight, marginBottom:16 }}>Verified and ready to meet in {CITIES.find(c=>c.id===city)?.label}</p>
          {cityUsers.map(u => (
            <div key={u.id} onClick={() => setProfileId(u.id)} style={{
              display:"flex", alignItems:"center", gap:12, padding:"12px 14px",
              background:C.white, borderRadius:16, marginBottom:8, cursor:"pointer", border:`1px solid ${C.gray}`,
            }}>
              <div style={{ width:44, height:44, borderRadius:14, background:C.greenLight, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22 }}>{u.avatar}</div>
              <div style={{ flex:1 }}>
                <div style={{ display:"flex", alignItems:"center", gap:5 }}>
                  <span style={{ fontSize:14, fontWeight:600, color:C.charcoal }}>{u.name}</span>
                  {u.verified && <span style={{ color:C.green, fontSize:11 }}>{"\u2713"}</span>}
                  <span style={{ fontSize:11, color:C.gold }}>{"\u2605"} {u.trust}</span>
                </div>
                <div style={{ fontSize:11, color:C.brownLight, marginTop:1 }}>{u.teatimes} teatimes</div>
                <div style={{ display:"flex", gap:4, marginTop:4 }}>
                  {u.interests.map(i => { const a=getAct(i); return <span key={i} style={{ fontSize:12 }}>{a.emoji}</span>; })}
                </div>
              </div>
              <span style={{ color:C.grayMid }}>{"\u203A"}</span>
            </div>
          ))}
        </div>
        {bnav}
      </div>
    );
  }

  // Me
  if (tab === "me") {
    return (
      <div style={{ minHeight:"100vh", background:C.bg, fontFamily:FONT, paddingBottom:80 }}>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        {tbar}
        <div style={{ maxWidth:500, margin:"0 auto", padding:"20px 16px" }}>
          <div style={{ textAlign:"center", marginBottom:24 }}>
            <div style={{ width:80, height:80, borderRadius:24, background:C.terraLight, display:"flex", alignItems:"center", justifyContent:"center", fontSize:38, margin:"0 auto 10px", border:`3px solid ${C.terra}30` }}>{"\uD83D\uDC69"}</div>
            <h2 style={{ fontFamily:DISPLAY, fontSize:24, color:C.charcoal, margin:"0 0 4px" }}>Anna Y.</h2>
            <span style={{ background:C.greenLight, color:C.green, fontSize:11, fontWeight:600, padding:"3px 10px", borderRadius:8 }}>{"\u2713"} Verified Human</span>
            <div style={{ display:"flex", justifyContent:"center", gap:28, margin:"16px 0" }}>
              <div><div style={{ fontSize:20, fontWeight:700, color:C.charcoal }}>3</div><div style={{ fontSize:11, color:C.brownLight }}>Teatimes</div></div>
              <div><div style={{ fontSize:20, fontWeight:700, color:C.gold }}>{"\u2605"} 5.0</div><div style={{ fontSize:11, color:C.brownLight }}>Trust</div></div>
              <div><div style={{ fontSize:20, fontWeight:700, color:C.charcoal }}>0</div><div style={{ fontSize:11, color:C.brownLight }}>Hosting</div></div>
            </div>
            <p style={{ fontSize:13, color:C.brown, lineHeight:1.7, maxWidth:320, margin:"0 auto 12px" }}>Golf lover, wine enthusiast, always looking for new friends in the Bay Area. Originally from Vancouver. Mom of 2 amazing kids.</p>
            <div style={{ display:"flex", gap:6, justifyContent:"center", flexWrap:"wrap" }}>
              {["golf","wine","cooking","hiking","flowers"].map(i => { const a=getAct(i); return <span key={i} style={{ padding:"4px 10px", borderRadius:10, background:`${a.color}12`, fontSize:11, color:a.color, fontWeight:500 }}>{a.emoji} {a.label}</span>; })}
            </div>
          </div>
          <div style={{ background:C.white, borderRadius:16, border:`1px solid ${C.gray}`, overflow:"hidden" }}>
            {["Edit Profile","My Teatimes","Invite Friends","Settings","Help & Safety","About Teatime"].map((item,i,arr) => (
              <div key={i} style={{ padding:"13px 16px", fontSize:13, color:C.charcoal, borderBottom:i<arr.length-1?`1px solid ${C.gray}`:"none", display:"flex", justifyContent:"space-between", alignItems:"center", cursor:"pointer" }}>{item} <span style={{ color:C.grayMid }}>{"\u203A"}</span></div>
            ))}
          </div>
          <div style={{ textAlign:"center", marginTop:20, fontSize:11, color:C.brownLight }}>{"\uD83C\uDF75"} Teatime v1.0 {"\u00B7"} Be real. Meet real.</div>
        </div>
        {bnav}
      </div>
    );
  }

  // Home Feed
  return (
    <div style={{ minHeight:"100vh", background:C.bg, fontFamily:FONT, paddingBottom:80 }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      {tbar}
      {storiesBar}
      {createSheet}
      <div style={{ maxWidth:500, margin:"0 auto", padding:"6px 16px" }}>
        <div style={{ fontSize:12, color:C.brownLight, marginBottom:10 }}>
          {filtered.length} teatime{filtered.length!==1?"s":""} near you
        </div>
        {filtered.length === 0 ? (
          <div style={{ textAlign:"center", padding:"44px 20px", background:C.white, borderRadius:20, border:`1px solid ${C.gray}` }}>
            <div style={{ fontSize:36, marginBottom:10 }}>{"\uD83C\uDF75"}</div>
            <div style={{ fontFamily:DISPLAY, fontSize:18, color:C.charcoal, marginBottom:6 }}>No Teatimes here yet</div>
            <div style={{ color:C.brownLight, fontSize:13, marginBottom:16 }}>Be the first to host one!</div>
            <button onClick={() => setShowCreate(true)} style={{ fontFamily:FONT, fontSize:13, fontWeight:600, background:C.terra, color:C.white, border:"none", padding:"10px 22px", borderRadius:50, cursor:"pointer" }}>Host a Teatime {"\u2600\uFE0F"}</button>
          </div>
        ) : filtered.map(t => <FeedCard key={t.id} t={t} />)}
      </div>
      {bnav}
    </div>
  );
}

export default App;
