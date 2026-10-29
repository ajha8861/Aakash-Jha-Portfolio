(()=>{
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
const G=window.gsap&&window.ScrollTrigger;let lenis=null;

/* ---------- static features (no libraries needed) ---------- */
const tick=()=>{const t=new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata',hour:'2-digit',minute:'2-digit',hour12:true});
 $('#clock').textContent='Sonipat · '+t+' IST';$('#clock2').textContent='Local time in Sonipat: '+t+' IST'};tick();setInterval(tick,30000);

$('#marq').innerHTML=Array(2).fill(['Power BI','Excel VBA','Python','SQL','Power Automate','Apps Script','SharePoint','QlikView','Salesforce','Gemini AI'].map(t=>`<span>${t}</span>`).join('')).join('');

const certs=[
['Duke University','Machine Learning Foundations for Product Managers','Jun 2026','ID KNF5VG431FPZ','ai pm'],
['Microsoft','Analyzing and Visualizing Data with Microsoft Power BI','May 2025','ID 8388128','data'],
['Simplilearn','Advance Prompt Engineering','Oct 2025','ID 9236550','ai'],
['Google','Foundations of Data Science','Nov 2023','','data'],
['Google','Python for Data Science, AI & Development','Feb 2024','','data ai'],
['Oracle','OCI 2025 Certified Data Science Professional','2025','ID OC7486486','data ai'],
['Google Digital Academy','Gemini for Workspace','Aug 2025','','ai'],
['Google Project Management','Business Analysis & Process Management','Jul 2025','ID 0S0D6KCTAR1G','pm'],
['IBM','Product Management: An Introduction','Mar 2025','ID 6CA0WDQYCQ7D','pm'],
['Coursera','Certified Data Scientist','Jan 2024','','data ai'],
['Microsoft Azure','Introduction to Programming Using Python','2024','','data'],
['Google Digital Garage','Google Analytics Individual Qualification','Jul 2023','ID 172307745','data']];
$('#certs').innerHTML=certs.map(c=>`<article class="ct" data-c="${c[4]}"><div class="ct-h"><span class="mg">${c[0][0]}</span><div><b>${c[0]}</b><small>${c[2]}</small></div></div><h4>${c[1]}</h4>${c[3]?`<span class="id">${c[3]}</span>`:''}</article>`).join('');
$('#filters').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;$$('#filters button').forEach(x=>x.classList.toggle('on',x===b));
 $$('.ct').forEach(c=>c.hidden=!(b.dataset.f==='all'||c.dataset.c.split(' ').includes(b.dataset.f)));G&&ScrollTrigger.refresh()});

/* project visuals */
const S='#e2bd6f',M='rgba(236,232,223,.28)';const svg=b=>`<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice">${b}</svg>`;
const V={
bars:()=>svg(Array.from({length:9},(_,i)=>{const h=[50,80,64,110,90,130,104,150,126][i];return `<rect x="${24+i*32}" y="${180-h}" width="20" height="${h}" rx="3" fill="${i>5?S:M}"/>`}).join('')+`<path d="M24 120 C80 90 120 110 160 70 S250 50 296 24" fill="none" stroke="${S}" stroke-width="2"/>`),
funnel:()=>svg([[40,280],[70,220],[100,160],[130,100]].map(([y,w],i)=>`<rect x="${160-w/2}" y="${y-26}" width="${w}" height="26" rx="5" fill="${i==3?S:M}" opacity="${1-i*.12}"/>`).join('')),
gauge:()=>svg(`<path d="M60 160 A100 100 0 0 1 260 160" fill="none" stroke="${M}" stroke-width="14" stroke-linecap="round"/><path d="M60 160 A100 100 0 0 1 218 78" fill="none" stroke="${S}" stroke-width="14" stroke-linecap="round"/><circle cx="160" cy="160" r="6" fill="${S}"/><path d="M160 160 L214 96" stroke="${S}" stroke-width="3"/>`),
grid:()=>svg(Array.from({length:60},(_,i)=>{const x=i%10,y=(i/10)|0;return `<rect x="${28+x*27}" y="${28+y*25}" width="21" height="19" rx="4" fill="${S}" opacity="${((x*7+y*13)%9+1)/11}"/>`}).join('')),
scatter:()=>svg(Array.from({length:46},(_,i)=>{const x=24+(i*53)%272,y=170-((i*37)%100)-(i%5)*8;return `<circle cx="${x}" cy="${Math.max(20,y)}" r="${3+(i%4)}" fill="${i%7==0?S:M}"/>`}).join('')),
play:()=>svg(`<circle cx="160" cy="100" r="52" fill="none" stroke="${S}" stroke-width="3"/><path d="M146 76 L190 100 L146 124Z" fill="${S}"/>`),
ui:()=>svg(`<rect x="70" y="14" width="180" height="172" rx="16" fill="none" stroke="${M}"/>`+[0,1,2].map(i=>`<rect x="84" y="${30+i*50}" width="152" height="40" rx="8" fill="${i==1?S:M}" opacity="${i==1?.9:.5}"/>`).join(''))};
$$('.viz').forEach(v=>v.innerHTML=V[v.dataset.viz]());
['bars','grid','scatter','gauge','funnel','ui'].forEach((k,i)=>{const c=$$('.card')[i];c&&c.insertAdjacentHTML('afterbegin','<div class="viz sm">'+V[k]()+'</div>')});

/* nav menu, copy, form */
const links=$('#links'),burger=$('#burger');
burger.onclick=()=>{const o=links.classList.toggle('open');burger.setAttribute('aria-expanded',o)};
links.addEventListener('click',e=>{if(e.target.closest('a')){links.classList.remove('open');burger.setAttribute('aria-expanded',false)}});
$('#copyMail').onclick=async()=>{const t=$('#mailT'),old=t.textContent;try{await navigator.clipboard.writeText(old);t.textContent='Copied';setTimeout(()=>t.textContent=old,1400)}catch(e){const r=document.createRange();r.selectNodeContents(t);const s=getSelection();s.removeAllRanges();s.addRange(r)}};
$('#form').addEventListener('submit',e=>{e.preventDefault();const n=$('#fn').value.trim(),m=$('#fe').value.trim(),b=$('#fm').value.trim(),s=$('#fs');
 if(!n||!/.+@.+/.test(m)||!b){s.textContent='Please fill in your name, a valid email and a message.';return}
 location.href=`mailto:aakashanalyst4950@gmail.com?subject=${encodeURIComponent('Portfolio enquiry from '+n)}&body=${encodeURIComponent(b+'\n\n'+n+' · '+m)}`;
 s.textContent='If your mail app did not open, copy the address above and email me directly.'});

/* media lightbox */
const lb=$('#lb'),lbB=$('#lbBody'),P={};$$('.pj').forEach(p=>P[p.dataset.id]=p);
const openLB=id=>{const p=P[id],m=p&&$('.shot img,.shot video',p);if(!m)return false;lbB.innerHTML='';let el;
 if(m.tagName==='VIDEO'){el=document.createElement('video');el.src=m.currentSrc||m.src;el.controls=true;el.autoplay=true;el.playsInline=true}else{el=new Image();el.src=m.src;el.alt=m.alt}
 lbB.appendChild(el);$('#lbT').textContent=$('h3',p).textContent;lb.hidden=false;lenis&&lenis.stop();$('#lbX').focus();return true};
const closeLB=()=>{lb.hidden=true;lbB.innerHTML='';lenis&&lenis.start()};
$('#lbX').onclick=closeLB;lb.addEventListener('click',e=>{if(e.target===lb||e.target===lbB)closeLB()});
$$('.shot').forEach(s=>s.addEventListener('click',()=>openLB(s.closest('.pj').dataset.id)));
if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting?e.target.play().catch(()=>{}):e.target.pause()),{threshold:.5});$$('.shot video').forEach(v=>io.observe(v))}

/* BYTE assistant */
const L=(t,u)=>`<a href="${u}" target="_blank" rel="noopener">${t}</a>`,B=(t,a)=>`<button class="act" data-a="${a}">${t}</button>`;
const PL=[['bite','BYTE Cognitive HUD'],['logistics','Logistics website'],['ecom','E-commerce dashboard'],['hr','HR analytics'],['amazon','Amazon sales'],['card','Credit card report'],['dmart','DMart sales'],['calc','Compound interest calculator']];
const YTL=L('Rulerbyte channel','https://www.youtube.com/@Rulerbyte')+'<br>'+L('Aakash Analyst channel','https://www.youtube.com/@Aakashanalyst')+'<br>'+L('Zomato clone walkthrough','https://youtu.be/kFvddF26PSU');
const one=(id,t)=>t+'<br>'+B('Preview it','lb:'+id);
const KB=[
[/^(hi|hello|hey|hii|namaste|yo|good (morning|evening|afternoon))\b/,"Hello! I'm BYTE. I can introduce Aakash, show his projects and videos, or share how to connect. What would you like?"],
[/how are you|what'?s up|how r u/,'Running smoothly, thanks! Want to see projects, videos or learn about Aakash?'],
[/thank|thanks|great|awesome|nice|cool|good job/,'Happy to help! Anything else you would like to see?'],
[/bye|goodbye|see you|cya/,'Thanks for visiting. Feel free to connect with Aakash on LinkedIn anytime.'],
[/who are you|your name|what are you|are you (a )?(bot|ai)|about you/,"I'm BYTE, a small assistant on Aakash Jha's portfolio. I answer questions about his work and open his projects and videos."],
[/what can you do|help|options|menu/,'Ask me about: Aakash, projects, dashboards, YouTube videos, skills, experience, certifications, location or how to connect.'],
[/youtube|video|channel|rulerbyte|watch|tutorial/,'Watch and learn on YouTube:<br>'+YTL+'<br><br>Project demo videos:<br>'+B('BYTE Cognitive HUD','lb:bite')+B('Logistics website','lb:logistics')],
[/zomato/,'The Zomato frontend clone is a responsive food-ordering interface. Watch it here:<br>'+L('Zomato clone on YouTube','https://youtu.be/kFvddF26PSU')],
[/bite|byte.*(hud|project)|hud|voice|cognitive/,one('bite','BYTE Cognitive HUD is a voice-driven assistant dashboard with a holographic globe, 3D solar system, system telemetry and Gemini / ChatGPT consoles.')],
[/logistic|moving|packer|group/,one('logistics','A Group Logistics Solution is a business website for a packing and moving company, with services, about and contact sections.')],
[/hr analytic|attrition|hr dash/,one('hr','The HR Analytics dashboard covers attrition by department, salary slab, gender and experience, plus job satisfaction.')],
[/credit|card/,one('card','The Credit Card Customer Report shows revenue, interest and income by gender, age, state, salary and card tier.')],
[/amazon/,one('amazon','The Amazon Sales Dashboard 2024 (Excel) tracks sales, units, cities and a state-wise map.')],
[/dmart|d-mart/,one('dmart','The DMart Sales Dashboard 2024 (Excel) breaks sales down by category, region, ship mode, segment and sub-category.')],
[/e-?com|sales dash|power bi|dashboard|bi\b/,'Dashboards by Aakash:<br>'+['ecom','hr','amazon','card','dmart'].map(i=>B(PL.find(p=>p[0]==i)[1],'lb:'+i)).join('')],
[/calc|compound|sip|interest/,one('calc','The Compound Interest Calculator is a web app with sliders for amount, rate and duration and a live growth chart.')],
[/vba|macro|pdf|shipment|bom|automation|automate|excel/,'VBA automations include: converting an Excel report to PDF, a shipment tracking form that saves entries into master data, and a BOM filling form. Plus Power Automate, SharePoint and Apps Script flows.'],
[/quiz|book|website|web ?site|html|css|frontend/,'Web builds: an e-commerce book-selling site, an HTML quiz, the Zomato clone, the Logistics website and the Compound Interest Calculator.'],
[/project|portfolio|work sample|show me|what.*built|projects/,'Tap a project to preview it:<br>'+PL.map(([i,t])=>B(t,'lb:'+i)).join('')+'<br>'+B('Videos on YouTube','q:youtube')],
[/skill|stack|language|technolog|tool/,'Core stack: Power BI and DAX, Excel VBA, Power Automate, SharePoint, Python (pandas), SQL, Apps Script, QlikView, Salesforce, and AI workflows with Gemini and prompt engineering.'],
[/experience|career|job|compan|role|timeline|worked/,'5+ years: Sr. Executive Data Analyst at SL Fasteners (Feb 2026 to now), MIS Analyst at Manohar Filaments, Senior Executive HR and Systems at Padia Exports, and EDP Head at PP Automotive Mahindra.'],
[/cert|oracle|course|credential|duke|ibm|microsoft|google/,'12 certifications, including Oracle OCI 2025 Data Science Professional, Microsoft Power BI, Duke ML for Product Managers, IBM Product Management and Google Analytics. See the Credentials section.'],
[/where|locat|city|sonipat|india|based/,'Aakash is based in Sonipat, Haryana, India.'],
[/linkedin|github|instagram|twitter|whatsapp|contact|connect|email|mail|phone|reach|network|collab/,'Let\'s connect:<br>'+L('LinkedIn','https://www.linkedin.com/in/aakashjha9/')+'<br>'+L('GitHub','https://github.com/ajha8861')+'<br>'+L('WhatsApp','https://wa.me/919050996163')+'<br>'+L('Instagram @aakashjha__','https://www.instagram.com/aakashjha__/')+'<br>Email: aakashanalyst4950@gmail.com'],
[/marketing|roas|cpa|ads/,'He has built attribution views tracking CPA, ROAS and conversions across channels.'],
[/ware|stock|inventory/,'He has built SQL and VBA tools that track stock turns and compile reorder requirements.'],
[/payroll|esic|pf|hrmis/,'He has run HRMIS, payroll, attendance and ESIC/PF compliance, with audit-ready reporting.'],
[/aakash|jha|who|owner|person|introduce|developer|analyst/,'Aakash Jha is a Sr. Executive Data Analyst and MIS automation specialist in Sonipat, with 5+ years across manufacturing, exports, automotive retail and e-commerce. He builds Power BI dashboards, Excel VBA automations and Python/SQL pipelines, and teaches on YouTube as Rulerbyte and Aakash Analyst.']];
const bx=$('#byte'),bm=$('#byteM');
const say=(t,c)=>{const d=document.createElement('div');d.className='m '+c;c==='me'?d.textContent=t:d.innerHTML=t;bm.appendChild(d);bm.scrollTop=1e5};
const ask=q=>{say(q,'me');const s=q.toLowerCase().trim(),k=KB.find(([r])=>r.test(s));
 setTimeout(()=>say(k?k[1]:"I'm not sure about that yet. Try one of these:<br>"+B('Projects','q:projects')+B('YouTube','q:youtube')+B('Skills','q:skills')+B('Connect','q:connect'),'bot'),320)};
bm.addEventListener('click',e=>{const b=e.target.closest('.act');if(!b)return;const [t,v]=b.dataset.a.split(':');if(t==='lb'){bx.hidden=true;openLB(v)||say('Preview not available.','bot')}else ask(v)});
$('#byteB').onclick=()=>{bx.hidden=!bx.hidden;$('#byteB').setAttribute('aria-expanded',!bx.hidden);if(!bx.hidden)$('#byteI').focus()};
$('#byteX').onclick=()=>{bx.hidden=true};addEventListener('keydown',e=>{if(e.key==='Escape'){bx.hidden=true;if(!lb.hidden)closeLB()}});
$('#byteF').onsubmit=e=>{e.preventDefault();const i=$('#byteI');if(i.value.trim())ask(i.value.trim());i.value=''};
$$('.byte-q button').forEach(b=>b.onclick=()=>ask(b.textContent));

/* showreel with sound */
const rv=$('#rv'),pl=$('#play');
pl.onclick=()=>{rv.muted=false;rv.controls=true;rv.play().then(()=>pl.classList.add('off')).catch(()=>{})};
rv.onended=()=>{pl.classList.remove('off');rv.controls=false};

const hv=$('#hv');
const pre=$('#pre');
const done=()=>{pre.style.display='none'};
if(!G||reduce){hv.currentTime=4.1;hv.pause();$('#preN').textContent='100';pre.style.transition='opacity .4s';setTimeout(()=>{pre.style.opacity=0;setTimeout(done,450)},300);
 $$('.w').forEach(w=>w.style.opacity=1);if(!G)return}

/* ---------- enhanced motion ---------- */
gsap.registerPlugin(ScrollTrigger);
document.documentElement.classList.add('motion');
if(!reduce&&window.Lenis){lenis=new Lenis({duration:1.2,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),wheelMultiplier:.95});
 lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(t=>lenis.raf(t*1000));gsap.ticker.lagSmoothing(0);lenis.stop()}
$$('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=$(a.getAttribute('href'));if(!t)return;e.preventDefault();lenis?lenis.scrollTo(t,{offset:a.hash==='#top'?0:-20}):t.scrollIntoView({behavior:reduce?'auto':'smooth'})}));

/* preloader -> intro */
const intro=()=>{pre.style.animation='none';gsap.to(pre,{yPercent:-100,duration:.9,ease:'power4.inOut',onComplete:done});
 lenis&&lenis.start();hv.play().catch(()=>{});
 if(!reduce){gsap.from('.hero .li',{yPercent:115,duration:1.2,ease:'expo.out',stagger:.12,delay:.55});
 gsap.from('.status,.hero-cta',{opacity:0,y:20,duration:1,delay:.9,stagger:.15});gsap.from('.wordmark',{yPercent:40,opacity:0,duration:1.6,ease:'expo.out',delay:.7})}};
if(reduce){hv.pause()}else{
 const o={v:0};gsap.to(o,{v:100,duration:1.5,ease:'power2.inOut',onUpdate(){$('#preN').textContent=String(Math.round(o.v)).padStart(3,'0');pre.style.setProperty('--p',o.v/100)},onComplete:()=>{(document.fonts&&document.fonts.ready||Promise.resolve()).then(intro)}});
 setTimeout(()=>{if(pre.style.display!=='none'&&!pre._d){pre._d=1;intro()}},3200)}

/* scroll progress, nav hide, section label */
const prog=$('#prog'),nav=$('#nav');let lastY=0;
ScrollTrigger.create({start:0,end:'max',onUpdate:s=>{prog.style.transform=`scaleX(${s.progress})`;const y=s.scroll();nav.classList.toggle('hide',y>lastY&&y>400&&!links.classList.contains('open'));lastY=y}});
$$('[data-label]').forEach(s=>ScrollTrigger.create({trigger:s,start:'top 55%',end:'bottom 55%',onToggle:t=>t.isActive&&($('#secLabel').textContent=s.dataset.label)}));

/* hero scrub */
if(!reduce){
gsap.to('#heroVid',{scale:1.12,opacity:.25,yPercent:10,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
gsap.to('.hero-in',{yPercent:-12,opacity:0,ease:'none',scrollTrigger:{trigger:'.hero',start:'20% top',end:'bottom top',scrub:true}});
gsap.to('.wordmark',{yPercent:-20,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});

/* parallax + reveals */
$$('[data-speed]').forEach(el=>gsap.to(el,{y:()=>parseFloat(el.dataset.speed)*-300,ease:'none',scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:true}}));
$$('[data-rise]').forEach(el=>gsap.from(el,{y:60,opacity:0,duration:1.1,ease:'expo.out',scrollTrigger:{trigger:el,start:'top 90%'}}));
$$('.ct').forEach(el=>gsap.from(el,{y:40,opacity:0,duration:.8,ease:'expo.out',scrollTrigger:{trigger:el,start:'top 94%'}}));

/* word-by-word scrub */
const sw=$('.scrub-words');sw.innerHTML=sw.textContent.split(' ').map(w=>`<span class="w">${w}</span>`).join(' ');
gsap.to('.w',{opacity:1,stagger:.1,ease:'none',scrollTrigger:{trigger:sw,start:'top 82%',end:'bottom 45%',scrub:.6}});

/* counters */
$$('[data-count]').forEach(el=>{const n=+el.dataset.count,o={v:0};ScrollTrigger.create({trigger:el,start:'top 92%',once:true,onEnter:()=>gsap.to(o,{v:n,duration:1.8,ease:'power3.out',onUpdate:()=>el.textContent=Math.round(o.v)+(el.dataset.suf||'')})})});

/* marquee driven by scroll velocity */
const mq=$('#marq');let mx=0,dir=-1;const half=()=>mq.scrollWidth/2;
gsap.ticker.add(()=>{const v=lenis?lenis.velocity:0;if(v)dir=v>0?-1:1;mx+=dir*(.7+Math.abs(v)*.5);const h=half();if(mx<-h)mx+=h;if(mx>0)mx-=h;mq.style.transform=`translate3d(${mx}px,0,0)`});

/* experience stack: previous card recedes */
$$('.xp-c').forEach((c,i,all)=>{const n=all[i+1];if(!n||innerWidth<761)return;gsap.to(c,{scale:.93,opacity:.45,ease:'none',scrollTrigger:{trigger:n,start:'top 85%',end:'top 18%',scrub:true}})});

/* horizontal work */
gsap.matchMedia().add('(min-width: 901px)',()=>{const tr=$('#track');const d=()=>tr.scrollWidth-innerWidth+40;
 gsap.to(tr,{x:()=>-d(),ease:'none',scrollTrigger:{trigger:'#work',start:'top top',end:()=>'+='+d(),pin:true,scrub:.7,invalidateOnRefresh:true}});
 $$('.pj .viz').forEach(v=>gsap.fromTo(v,{scale:1.08},{scale:1,ease:'none',scrollTrigger:{trigger:v,start:'top bottom',end:'bottom top',scrub:true}}))});

/* showreel: frame grows to full-bleed */
gsap.matchMedia().add('(min-width: 761px)',()=>{
 gsap.fromTo('#reelF',{scale:.72,clipPath:'inset(8% 6% round 40px)'},{scale:1.18,clipPath:'inset(0% 0% round 0px)',ease:'none',scrollTrigger:{trigger:'#reel',start:'top 70%',end:'center top',scrub:true}});
 gsap.from('.reel-t',{opacity:0,y:60,scrollTrigger:{trigger:'#reel',start:'top 30%',end:'top -10%',scrub:true}})});

/* 3D tilt + spotlight */
if(fine){$$('[data-tilt]').forEach(el=>{const rx=gsap.quickTo(el,'rotationX',{duration:.5,ease:'power3'}),ry=gsap.quickTo(el,'rotationY',{duration:.5,ease:'power3'});
 el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;ry((x-.5)*12);rx((.5-y)*12);el.style.setProperty('--mx',x*100+'%');el.style.setProperty('--my',y*100+'%')});
 el.addEventListener('pointerleave',()=>{rx(0);ry(0)})});
 const p=$('.portrait');const px=gsap.quickTo(p,'rotationY',{duration:.8}),py=gsap.quickTo(p,'rotationX',{duration:.8});
 addEventListener('pointermove',e=>{px((e.clientX/innerWidth-.5)*14);py((.5-e.clientY/innerHeight)*10)});
 $$('[data-magnetic]').forEach(el=>{const x=gsap.quickTo(el,'x',{duration:.5,ease:'power3'}),y=gsap.quickTo(el,'y',{duration:.5,ease:'power3'});
  el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();x((e.clientX-r.left-r.width/2)*.3);y((e.clientY-r.top-r.height/2)*.3)});el.addEventListener('pointerleave',()=>{x(0);y(0)})})}
}

/* cursor */
if(fine&&!reduce){document.documentElement.classList.add('has-cur');const c=$('#cur'),r=$('#curR'),t=$('#curT');
 const cx=gsap.quickTo(c,'x',{duration:.08}),cy=gsap.quickTo(c,'y',{duration:.08}),rx=gsap.quickTo(r,'x',{duration:.4,ease:'power3'}),ry=gsap.quickTo(r,'y',{duration:.4,ease:'power3'});
 addEventListener('pointermove',e=>{cx(e.clientX);cy(e.clientY);rx(e.clientX);ry(e.clientY);const h=e.target.closest('[data-cur]'),l=e.target.closest('a,button,input,textarea,.ct');
  t.textContent=h?h.dataset.cur:'';r.classList.toggle('big',!!h);r.classList.toggle('hov',!!l&&!h)})}

/* ---------- WebGL data field ---------- */
if(window.THREE){
try{
const cv=$('#gl'),R=new THREE.WebGLRenderer({canvas:cv,alpha:true,antialias:false,powerPreference:'low-power'});
R.setPixelRatio(Math.min(devicePixelRatio,1.6));
const sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(55,1,.1,200);
const small=innerWidth<800,NX=small?90:190,NZ=small?60:120,pos=new Float32Array(NX*NZ*3);let k=0;
for(let i=0;i<NX;i++)for(let j=0;j<NZ;j++){pos[k++]=(i/NX-.5)*70;pos[k++]=0;pos[k++]=(j/NZ-.5)*50}
const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(pos,3));
const U={t:{value:0},m:{value:new THREE.Vector2(0,0)},s:{value:0},px:{value:Math.min(devicePixelRatio,1.6)}};
const mat=new THREE.ShaderMaterial({uniforms:U,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,
vertexShader:`uniform float t,s,px;uniform vec2 m;varying float h;varying float d;
void main(){vec3 p=position;float w=sin(p.x*.28+t*.6)*.9+cos(p.z*.33-t*.5)*.8+sin((p.x+p.z)*.17+t*.3)*1.2;
float md=distance(p.xz,m);w+=sin(md*1.3-t*3.)*exp(-md*.28)*2.2;p.y=w;h=w;
vec4 mv=modelViewMatrix*vec4(p,1.);d=-mv.z;gl_PointSize=px*(1.5+max(0.,w)*.5)*(40./d);gl_Position=projectionMatrix*mv;}`,
fragmentShader:`uniform float s;varying float h;varying float d;
void main(){float r=length(gl_PointCoord-.5);if(r>.5)discard;float a=smoothstep(.5,.05,r);
vec3 gold=vec3(.89,.74,.43),teal=vec3(.17,.43,.53);vec3 c=mix(teal,gold,smoothstep(-1.,2.6,h)*(1.-s*.35));
float fade=smoothstep(60.,8.,d);gl_FragColor=vec4(c,a*fade*(.28+smoothstep(0.,2.5,h)*.55));}`});
const pts=new THREE.Points(g,mat);sc.add(pts);
let mx=0,my=0,sx=0,sy=0,scroll=0,sP=0;
addEventListener('pointermove',e=>{mx=(e.clientX/innerWidth-.5)*2;my=(e.clientY/innerHeight-.5)*2});
const rs=()=>{R.setSize(innerWidth,innerHeight,false);cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix()};rs();addEventListener('resize',rs);
let vis=true;document.addEventListener('visibilitychange',()=>vis=!document.hidden);
const frame=(ts)=>{const t=ts*.001;
 const max=document.documentElement.scrollHeight-innerHeight||1;scroll=scrollY/max;sP+=(scroll-sP)*.06;sx+=(mx-sx)*.04;sy+=(my-sy)*.04;
 U.t.value=reduce?2:t;U.s.value=sP;U.m.value.set(sx*20,sy*10);
 cam.position.set(sx*3+Math.sin(sP*6.28)*8,6.5-sP*3+sy*1.5,22-sP*14);cam.lookAt(sx*2+sP*12-6,0,-6-sP*10);
 pts.rotation.y=sP*1.1;cv.style.opacity=Math.max(.25,.9-Math.min(1,scrollY/innerHeight)*.5);
 if(vis)R.render(sc,cam);if(!reduce)requestAnimationFrame(frame)};
requestAnimationFrame(frame);
}catch(e){}}
})();
