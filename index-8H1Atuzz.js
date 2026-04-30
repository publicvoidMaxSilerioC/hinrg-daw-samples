(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const i of f)if(i.type==="childList")for(const w of i.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&u(w)}).observe(document,{childList:!0,subtree:!0});function s(f){const i={};return f.integrity&&(i.integrity=f.integrity),f.referrerPolicy&&(i.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?i.credentials="include":f.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function u(f){if(f.ep)return;f.ep=!0;const i=s(f);fetch(f.href,i)}})();let Nt=!1,Bt=null;const tn="https://publicvoidmaxsilerioc.github.io/hinrg-daw-samples";function K(t){if(!t||/^(https?:)?\/\//i.test(t)||t.startsWith("data:")||t.startsWith("blob:"))return t;if(t.startsWith("samples/library/"))return`${tn}/${t.slice(16)}`;if(t.startsWith("samples/"))return`${tn}/${t.slice(8)}`;const o=["Bajo/","Efectos/","Lead/","Pads/","Vocales/","drums/"];for(const s of o)if(t.startsWith(s))return`${tn}/${t}`;return t}async function ut(){try{Tone.getContext().state==="suspended"&&(await Tone.start(),console.log("🔊 Contexto de audio activado")),console.log("🎵 Iniciando DAW..."),Tone.Transport.start(),console.log("✅ Transport iniciado:",Tone.Transport.state),typeof ke<"u"&&ke&&(ke.start(0),console.log("✅ Drum sequencer iniciado:",ke.state)),typeof ye<"u"&&ye&&ye.forEach((t,o)=>{if(t&&t.track){const s=t.track.sequence;if(s&&s.start&&(s.start(0),console.log(`✅ Canal ${o+1} MIDI sequence iniciada`)),t.track.mode==="AUD"&&t.track.player)try{t.track.player.sync(),t.track.player.start(0),console.log(`✅ Canal ${o+1} audio player iniciado`)}catch(u){console.warn(`Canal ${o+1} audio sync error:`,u)}}}),fo(),Nt=!0,console.log("✅ DAW iniciado correctamente")}catch(t){console.error("❌ Error iniciando DAW:",t)}}function Ye(){try{console.log("⏹️ Deteniendo DAW..."),Tone.Transport.stop(),typeof ke<"u"&&ke&&(ke.stop(),console.log("✅ Drum sequencer detenido")),typeof ye<"u"&&ye&&ye.forEach((t,o)=>{if(t&&t.track){const s=t.track.sequence;if(s&&s.stop&&s.stop(),t.track.player)try{t.track.player.stop(),t.track.player.unsync()}catch(u){console.warn(`Canal ${o+1} audio stop error:`,u)}}}),qn(),Nt=!1,console.log("✅ DAW detenido correctamente")}catch(t){console.error("❌ Error deteniendo DAW:",t)}}function fo(){qn(),Bt=setInterval(()=>{if(typeof vt=="function"){const t=Math.floor(Tone.Transport.ticks/Tone.Time("16n").toTicks())%32;vt(t)}},50)}function qn(){Bt&&(clearInterval(Bt),Bt=null),typeof vt=="function"&&vt(-1)}console.log("✅ Funciones de control del DAW definidas al inicio");typeof window<"u"&&(window.__previewPlayer=window.__previewPlayer||null);function vo(){var t;try{const o=typeof window<"u"?window.__previewPlayer:null;if(o){try{o.stop(0)}catch{}try{o.disconnect()}catch{}try{(t=o.dispose)==null||t.call(o)}catch{}}}catch{}typeof window<"u"&&(window.__previewPlayer=null)}async function Pn(t){try{vo(),Tone.getContext().state==="suspended"&&(await Tone.start(),console.log("🔊 Contexto de audio activado para preview"));const o=K(t);console.log("🔊 Intentando previsualizar:",o);const s=new Tone.Player({url:o,loop:!1,autostart:!0}).toDestination();typeof window<"u"&&(window.__previewPlayer=s)}catch(o){console.warn("No se pudo previsualizar el sample:",o)}}const an=new Tone.Recorder;Tone.Frequency.A4=440;Tone.getDestination().connect(an);let ft=!1,Fn=0,zn=null;async function go(){try{Tone.getContext().state==="suspended"&&await Tone.start(),console.log("🔴 Iniciando grabación en tiempo real..."),await an.start(),ft=!0,Fn=Date.now();const t=document.getElementById("recBtn");t&&(t.classList.add("recording"),t.title="Detener grabación en tiempo real"),console.log("✅ Grabación en tiempo real iniciada correctamente")}catch(t){console.error("❌ Error iniciando grabación en tiempo real:",t),alert("Error al iniciar la grabación. Asegúrate de que el audio esté funcionando.")}}async function ho(){try{if(!ft)return;console.log("⏹️ Deteniendo grabación en tiempo real...");const t=await an.stop();ft=!1;const o=(Date.now()-Fn)/1e3;console.log(`📁 Grabación en tiempo real completada: ${o.toFixed(1)}s`),zn=await bo(t);const s=document.getElementById("recBtn"),u=document.getElementById("recNotification");s&&(s.classList.remove("recording"),s.title="Iniciar grabación en tiempo real"),u&&(u.classList.add("show"),setTimeout(()=>{u.classList.remove("show")},3e3)),console.log("💾 Grabación guardada en memoria temporal del DAW")}catch(t){console.error("❌ Error deteniendo grabación en tiempo real:",t),ft=!1;const o=document.getElementById("recBtn");o&&(o.classList.remove("recording"),o.title="Iniciar grabación en tiempo real")}}async function yo(){ft?await ho():await go()}function _t(){return zn}typeof window<"u"&&(window.getTemporaryRecording=_t);async function bo(t){try{const o=await t.arrayBuffer(),s=new DataView(o);if(String.fromCharCode(...new Uint8Array(o,0,4))!=="RIFF")return console.warn("No es un archivo RIFF válido"),t;const f=new ArrayBuffer(o.byteLength),i=new DataView(f);new Uint8Array(f).set(new Uint8Array(o)),i.setUint16(20,1,!0),i.setUint16(22,2,!0),i.setUint32(24,44100,!0),i.setUint16(34,16,!0);const S=44100*2*16/8;i.setUint32(28,S,!0);const L=2*16/8;return i.setUint16(32,L,!0),new Blob([f],{type:"audio/wav"})}catch(o){return console.warn("Error normalizando WAV headers:",o),t}}let Le=!1;function Ot(t,o){try{const s=URL.createObjectURL(t),u=document.createElement("a");u.href=s,u.download=o,u.style.display="none",document.body.appendChild(u),u.click(),document.body.removeChild(u),setTimeout(()=>{URL.revokeObjectURL(s)},1e3),console.log(`✅ Descarga iniciada: ${o}`)}catch(s){throw console.error("❌ Error en descarga:",s),new Error("No se pudo iniciar la descarga")}}async function xo(){if(Le){console.log("⚠️ Exportación ya en progreso");return}const t=_t();if(!t){alert("No hay grabación disponible. Usa el botón de grabación en tiempo real primero.");return}Le=!0;try{console.log("📤 Exportando grabación temporal...");const o=new Date().toISOString().replace(/[:.]/g,"-").slice(0,-5);Ot(t,`HINRG-DAW-Recording-${o}.wav`),console.log("✅ Grabación exportada correctamente")}catch(o){console.error("❌ Error exportando grabación:",o),alert("Error al exportar la grabación: "+o.message)}finally{Le=!1}}async function wo(){if(Le){console.log("⚠️ Exportación ya en progreso");return}Le=!0;try{console.log("📤 Exportando datos del proyecto...");const t={version:"1.0",timestamp:new Date().toISOString(),bpm:120,channels:[],drumPattern:[],metadata:{name:"HINRG DAW Project",creator:"HINRG DAW",description:"Proyecto exportado desde HINRG DAW"}};typeof window.channels<"u"&&window.channels&&window.channels.forEach((i,w)=>{if(!i)return;const S={index:w,name:`Canal ${w+1}`,mode:i.mode||"MIDI",volume:.8,pan:0,mute:!1,solo:!1,notes:i.notes||[],sample:null,audioClip:i.audioClip||null};t.channels.push(S)}),typeof ne<"u"&&ne&&["kick","snare","hihat","clap","bell","custm1","custm2"].forEach((w,S)=>{const L=[];if(ne[S])for(let j=0;j<32;j++){const V=ne[S][j];V&&V.classList.contains("active")&&L.push(j)}t.drumPattern.push({part:w,steps:L})});const o=document.getElementById("tempoInput");o&&(t.bpm=parseInt(o.value)||120);const s=JSON.stringify(t,null,2),u=new Blob([s],{type:"application/json"}),f=new Date().toISOString().replace(/[:.]/g,"-").slice(0,-5);Ot(u,`HINRG-DAW-Project-${f}.json`),console.log("✅ Proyecto exportado correctamente")}catch(t){console.error("❌ Error exportando proyecto:",t),alert("Error al exportar el proyecto: "+t.message)}finally{Le=!1}}async function Eo(){if(Le){console.log("⚠️ Exportación ya en progreso");return}Le=!0;try{if(console.log("📤 Exportando stems individuales..."),typeof Tone>"u")throw new Error("Tone.js no está disponible");Tone.getContext().state==="suspended"&&await Tone.start();const t=new Date().toISOString().replace(/[:.]/g,"-").slice(0,-5),o=8e3;console.log(`🎵 Grabando stems (${Math.round(o/1e3)}s cada uno)...`);async function s(f,i){console.log(`🔄 Grabando stem: ${i}...`);const w=new Tone.Recorder,S=ye[f];if(!S||!S.out)return console.warn(`⚠️ Canal ${f+1} no disponible`),null;S.out.disconnect(),S.out.connect(w),await w.start(),typeof ut=="function"&&await ut(),await new Promise(j=>setTimeout(j,o)),typeof Ye=="function"&&Ye();const L=await w.stop();return S.out.disconnect(),S.out.toDestination(),w.dispose(),L}const u=[];typeof window.channels<"u"&&window.channels&&window.channels.forEach((f,i)=>{if(!f)return;const w=`Canal-${i+1}`;u.push(s(i,w).then(S=>{S&&(Ot(S,`HINRG-DAW-Stem-${w}-${t}.wav`),console.log(`✅ Stem ${w} exportado`))}).catch(S=>{console.error(`❌ Error exportando stem ${w}:`,S)}))}),typeof Fe<"u"&&Fe&&u.push((async()=>{console.log("🔄 Grabando stem: Batería...");const f=new Tone.Recorder;typeof me<"u"&&me&&(me.disconnect(),me.connect(f)),await f.start(),typeof ut=="function"&&await ut(),await new Promise(w=>setTimeout(w,o)),typeof Ye=="function"&&Ye();const i=await f.stop();typeof me<"u"&&me&&(me.disconnect(),me.toDestination()),f.dispose(),i&&(Ot(i,`HINRG-DAW-Stem-Bateria-${t}.wav`),console.log("✅ Stem Batería exportado"))})().catch(f=>{console.error("❌ Error exportando stem Batería:",f)})),await Promise.all(u),console.log("✅ Todos los stems exportados correctamente"),alert(`Stems exportados correctamente. Se descargaron ${u.length} archivos WAV individuales.`)}catch(t){console.error("❌ Error exportando stems:",t),alert("Error al exportar stems: "+t.message)}finally{Le=!1}}function Co(t){var o;try{if(!t||t.__hasMuteShim)return t;let s=!1;const u=typeof((o=t.gain)==null?void 0:o.value)=="number"?t.gain.value:1;t.__preMuteGain=u,Object.defineProperty(t,"mute",{configurable:!0,enumerable:!1,get(){return s},set(f){s=!!f;try{t.gain&&typeof t.gain.rampTo=="function"?t.gain.rampTo(s?0:typeof t.__preMuteGain=="number"?t.__preMuteGain:1,.005):t.gain&&(t.gain.value=s?0:typeof t.__preMuteGain=="number"?t.__preMuteGain:1)}catch{}}}),t.__hasMuteShim=!0}catch{}return t}typeof window<"u"&&(window.__isDAWRunning=window.__isDAWRunning||!1);function So(t){try{const o=(t==null?void 0:t.audioClip)||{},s=o.bpm||o.BPM||o.bpmOriginal||o.tempo||o.sampleBPM,u=Number(s);return isFinite(u)&&u>0?u:null}catch{return null}}function ko(){try{const t=Tone.Transport.bpm.value;(window.channels||[]).forEach(o=>{const s=o==null?void 0:o.player;if(!s)return;const u=So(o);if(u)try{s.playbackRate=t/u}catch{}})}catch{}}function Lo(t,o){const s=Math.max(20,Math.min(300,parseFloat(t)||120));Tone.Transport.state;{Tone.Transport.bpm.value=s,ko();return}}let $e,ke,Nn;const ne=[],Rt=["kick","snare","hihat","clap","bell","custm1","custm2"],nn=32,To=10,ye=[];typeof window<"u"&&(window.channels=ye);let F={startOct:3,endOct:4};function $t(t=F.startOct,o=F.endOct){const s=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],u=[];for(let f=t;f<=o;f++)for(const i of s)u.push(`${i}${f}`);return u.reverse()}const pt=(t,o,s)=>Math.max(o,Math.min(s,t)),_n={major:[0,2,4,5,7,9,11]},Pt=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],Ke={key:"C",mode:"major"},Mo=t=>(t||"").replace(/[0-9]/g,""),Io=(t,o)=>t.slice(o).concat(t.slice(0,o));function Do(t=Ke.key,o=Ke.mode){const s=Pt.indexOf(t);if(s<0)return new Set(Pt);const u=Io(Pt,s),f=_n[o]||_n.major;return new Set(f.map(i=>u[i]))}function he(t,{min:o=-1,max:s=1,step:u=.01,value:f=0,onInput:i=()=>{}}={}){const w=t.querySelector(".needle")||(()=>{const y=document.createElement("div");return y.className="needle",t.appendChild(y),y})(),S=(y,z,oe)=>Math.max(z,Math.min(oe,y)),L=(y,z)=>z>0?Math.round(y/z)*z:y,j=y=>(y-o)/(s-o)*270-135,V=y=>o+(y+135)/270*(s-o);let R=S(f,o,s),fe=!1;function X(){w.style.transform=`translateX(-50%) rotate(${j(R)}deg)`,t.dataset.value=String(R),i(R)}function be(y){const z=t.getBoundingClientRect(),oe=z.left+z.width/2,H=z.top+z.height/2,gt=y.clientX-oe,Je=y.clientY-H;let ae=Math.atan2(Je,gt)*180/Math.PI+90;ae>180&&(ae-=360),ae<-180&&(ae+=360);const qt=S(ae,-135,135),n=L(S(V(qt),o,s),u);n!==R&&(R=n,X())}return t.addEventListener("pointerdown",y=>{fe=!0,t.setPointerCapture(y.pointerId),be(y)}),t.addEventListener("pointermove",y=>{fe&&be(y)}),t.addEventListener("pointerup",y=>{fe=!1,t.releasePointerCapture(y.pointerId)}),t.addEventListener("pointercancel",()=>{fe=!1}),t.addEventListener("wheel",y=>{y.preventDefault(),R=S(L(R+(y.deltaY>0?-1:1)*u,u),o,s),X()},{passive:!1}),t.tabIndex=0,t.setAttribute("role","slider"),t.setAttribute("aria-valuemin",String(o)),t.setAttribute("aria-valuemax",String(s)),t.addEventListener("keydown",y=>{y.key==="ArrowLeft"||y.key==="ArrowDown"?(R=S(L(R-u,u),o,s),X()):(y.key==="ArrowRight"||y.key==="ArrowUp")&&(R=S(L(R+u,u),o,s),X())}),t.addEventListener("dblclick",()=>{const y=o<=0&&0<=s?0:(o+s)/2;R=L(y,u),X()}),X(),{set(y){R=S(L(y,u),o,s),X()},get(){return R}}}function Ao(t,o,s,u,f){if(!t)return;const i=t.getContext("2d"),w=t.width=t.clientWidth||200,S=t.height=t.clientHeight||100;i.clearRect(0,0,w,S),i.fillStyle="#1a1a1a",i.fillRect(0,0,w,S),i.strokeStyle="#00bcd4",i.lineWidth=2,i.lineCap="round",i.lineJoin="round";const L=10,j=w-L*2,V=S-L*2,R=o+s+.5+f,fe=L+o/R*j,X=L+(o+s)/R*j,be=L+(o+s+.5)/R*j,y=L+j,z=L,oe=L+(1-u)*V,H=L+V;i.beginPath(),i.moveTo(L,H),i.lineTo(fe,z),i.lineTo(X,oe),i.lineTo(be,oe),i.lineTo(y,H),i.stroke(),i.fillStyle="#00bcd4",[[fe,z],[X,oe],[be,oe],[y,H]].forEach(([Je,ae])=>{i.beginPath(),i.arc(Je,ae,3,0,Math.PI*2),i.fill()}),i.fillStyle="#888",i.font="10px Arial",i.textAlign="center",i.fillText("A",fe,H+15),i.fillText("D",X,H+15),i.fillText("S",be,H+15),i.fillText("R",y,H+15)}let on=-1;function vt(t){var o,s,u,f;if(on>=0)for(let i=0;i<ne.length;i++)(s=(o=ne[i])==null?void 0:o[on])==null||s.classList.remove("playhead");if(on=t,t>=0)for(let i=0;i<ne.length;i++)(f=(u=ne[i])==null?void 0:u[t])==null||f.classList.add("playhead")}const Fe=new Tone.Players({kick:K("samples/drums/Kick/Apagado.wav"),snare:K("samples/drums/Snr/8bit.wav"),hihat:K("samples/drums/Hh/82Kg.wav"),clap:K("samples/drums/Clap/Aplauso.wav"),bell:K("samples/drums/Bell/16._GTS_Jazzy_Cowbell.wav"),custm1:K("samples/drums/Kick/Boxy.wav"),custm2:K("samples/drums/Snr/Azucar.wav")},()=>console.log("✅ Drum samples loaded from remote host")),me=new Tone.Gain(.8);Fe.connect(me);me.toDestination();const mt={};function $o(){try{Fe.disconnect()}catch{}Rt.forEach(t=>{const o=new Tone.Gain(1),s=new Tone.Panner(0);o.connect(s),s.connect(me),mt[t]={mute:!1,solo:!1,gainDb:0,pan:0},Fe.player(t).connect(o)})}$o();async function On(t,o){try{const s=K(o);console.log(`🔄 Cargando sample para ${t}: ${s}`),await Fe.player(t).load(s),console.log(`✅ ${t} -> ${s}`);const u=document.querySelector(`.drum-label[data-part="${t}"]`);u&&(u.title=`${t}: ${o.split("/").slice(-2).join("/")}`)}catch(s){console.warn(`❌ No se pudo cargar sample para ${t}:`,s)}}$e=new Tone.Synth({oscillator:{type:"triangle"},envelope:{attack:.01,decay:.1,sustain:.6,release:.4}}).toDestination();const Bo={kick:"Kick",snare:"Snr",hihat:"Hh",clap:"Clap",bell:"Bell"},Ro={kick:["Apagado.wav","Boxy.wav","Bright Sharp.wav","Chonk.wav","Love Triangle.wav","New Order.wav","Nrgetic.wav","OLIVER kickwav.wav","Samurai.wav","Seco.wav","Snap.wav","Sub.wav","Sup.wav","Um.wav","X.wav","kick.wav"],snare:["8bit.wav","Azucar.wav","Choncho.wav","Dog House.wav","Le Snr.wav","Lneto.wav","New Order.wav","PacMan.wav","Parachute.wav","Rev.wav","Room.wav","Seco.wav","Shock.wav","Stinky.wav","Supa.wav","Uff.wav","short.wav","snare.wav"],hihat:["82Kg.wav","Alexa.wav","Brillocito.wav","Chocolate.wav","Chop Chop Love.wav","Clt.wav","Closed.wav","Crunch.wav","Dms.wav","Fuerte.wav","Gorda.wav","Hat.wav","Hh.wav","Loose.wav","Open.wav","Pedal.wav","Short.wav","Tight.wav","Vintage.wav"],clap:["Al reves.wav","Aplauso.wav","Cip.wav","Clak.wav","Dams.wav","Das clap.wav","De Reversa.wav","Flat.wav","JJ.wav","Rev.wav","Room.wav","Shock.wav","Short.wav","Small.wav"],bell:["16._GTS_Jazzy_Cowbell.wav","BULLYFINGER_ATTR_cowbell_tr808_ampex_cl_tape.wav","OLIVER_percussion_cowbell_A#.wav","OLIVER_percussion_cowbell_B.wav","RP_TMS_DP_Cowbell_percussion_oneshot_spirit.wav","TS_DD_VOL3_bell_timbale_middle_rattle.wav"]};function Po(){const t=document.getElementById("tempoInput");if(t){const o=parseInt(t.value)||120;Lo(o),console.log(`🎵 BPM actualizado a: ${o}`)}}console.log("✅ PARTE 1 del script cargada correctamente");window.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("recBtn");t&&t.addEventListener("click",yo);const o=document.getElementById("exportBtn");o&&o.addEventListener("click",()=>{const n=document.createElement("div");n.style.cssText=`
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #1a1a1a;
        border: 1px solid #333;
        border-radius: 8px;
        padding: 20px;
        z-index: 10000;
        box-shadow: 0 8px 32px rgba(0,0,0,0.5);
        min-width: 300px;
      `,n.innerHTML=`
        <div style="color: #fff; font-size: 18px; margin-bottom: 15px; text-align: center;">📤 Exportar</div>
        <button id="exportRecordingBtn" style="width: 100%; margin: 5px 0; padding: 10px; background: #333; color: #fff; border: 1px solid #555; border-radius: 4px; cursor: pointer;">
          🎵 Descargar Grabación Temporal
        </button>
        <button id="exportProjectBtn" style="width: 100%; margin: 5px 0; padding: 10px; background: #333; color: #fff; border: 1px solid #555; border-radius: 4px; cursor: pointer;">
          💾 Exportar Proyecto (.json)
        </button>
        <button id="exportStemsBtn" style="width: 100%; margin: 5px 0; padding: 10px; background: #333; color: #fff; border: 1px solid #555; border-radius: 4px; cursor: pointer;">
          🎛️ Exportar Stems (Canales Separados)
        </button>
        <button id="closeExportBtn" style="width: 100%; margin: 10px 0 0 0; padding: 8px; background: #666; color: #fff; border: none; border-radius: 4px; cursor: pointer;">
          Cerrar
        </button>
      `;const c=n.querySelector("#exportRecordingBtn");_t()||(c.style.opacity="0.5",c.style.cursor="not-allowed",c.title="No hay grabación disponible"),document.body.appendChild(n),n.querySelector("#exportRecordingBtn").addEventListener("click",()=>{_t()&&(xo(),document.body.removeChild(n))}),n.querySelector("#exportProjectBtn").addEventListener("click",()=>{wo(),document.body.removeChild(n)}),n.querySelector("#exportStemsBtn").addEventListener("click",()=>{Eo(),document.body.removeChild(n)}),n.querySelector("#closeExportBtn").addEventListener("click",()=>{document.body.removeChild(n)}),setTimeout(()=>{const g=b=>{n.contains(b.target)||(document.body.removeChild(n),document.removeEventListener("click",g))};document.addEventListener("click",g)},100)});let s=document.getElementById("channels-container");if(!s){const n=document.createElement("div");n.id="channels-container",n.style.margin="1rem",document.body.appendChild(n),s=n,console.warn("ℹ️ No se encontró #channels-container. Se creó uno automáticamente.")}if(!document.getElementById("roll-selection-css")){const n=document.createElement("style");n.id="roll-selection-css",n.textContent=`
  .note-rect{ transition: box-shadow .12s ease, background-color .12s ease, opacity .12s ease; position: absolute !important; }
  .note-rect.selected{ background:#27e0ff !important; box-shadow:0 0 0 2px rgba(255,255,255,.9) inset, 0 0 6px rgba(39,224,255,.6); opacity:1 !important; z-index:999 !important; position: absolute !important; }

  /* Etiqueta mejorada - SIN botón flecha */
  .drum-label{ 
    position:relative; display:flex; align-items:center; justify-content:flex-start; 
    cursor: pointer; user-select: none; transition: background-color 0.2s ease;
  }
  .drum-label:hover{ background: #2a2a2a !important; }

  /* Estado muteado */
  .drum-label.muted {
    background: #3a0d0d !important;
    color: #ff9a9a !important;
    border-color: #6a1a1a !important;
  }

  /* MODAL CENTRADO */
  .drum-lib-backdrop{
    position:fixed; inset:0; background:rgba(0,0,0,.5); display:none; z-index:9998;
  }
  .drum-lib-center{
    position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
    width:min(520px, 92vw); max-height:70vh; background:#111; color:#eee;
    border:1px solid #333; border-radius:10px; box-shadow:0 10px 28px rgba(0,0,0,.5);
    display:flex; flex-direction:column; overflow:hidden; z-index:9999;
  }
  .drum-lib-header{
    display:flex; align-items:center; justify-content:space-between;
    padding:10px 12px; border-bottom:1px solid #222; background:#0f0f0f; font-weight:600;
  }
  .drum-lib-close{
    width:26px; height:26px; border-radius:6px; border:1px solid #333;
    background:#171717; color:#ddd; cursor:pointer; font-weight:700;
  }
  .drum-lib-close:hover{ background:#222; }
  .drum-lib-content{ overflow:auto; padding:6px 0; }
  .drum-lib-item{ 
    padding:8px 12px; cursor:pointer; border-bottom:1px solid #1e1e1e; 
    white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
    display:flex; align-items:center; justify-content:space-between;
  }
  .drum-lib-item:hover{ background:#1b1b1b; }
  .drum-lib-empty{ padding:10px 12px; color:#bbb; }
  .drum-lib-preview-btn{
    padding:2px 6px; font-size:10px; background:#333; border:1px solid #555; 
    color:#ddd; cursor:pointer; border-radius:3px; margin-left:8px;
  }
  .drum-lib-preview-btn:hover{ background:#444; }

  /* MODO AUDIO MAS VISIBLE */
  .channel-format.mode-aud {
    background: #ff6b35 !important;
    color: #fff !important;
    font-weight: bold !important;
    box-shadow: 0 0 8px rgba(255, 107, 53, 0.5) !important;
  }
  .channel-format.mode-midi {
    background: #333 !important;
    color: #ddd !important;
  }

  /* === ESTILOS PARA MODAL DE ENVOLVENTES === */
  .env-modal {
    position: fixed;
    background: #1a1a1a;
    border: 1px solid #333;
    border-radius: 8px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.6);
    z-index: 1500;
    display: none;
    min-width: 400px;
    max-width: 500px;
    color: #eee;
  }

  .env-modal-header {
    background: #1e1e1e;
    padding: 12px 16px;
    border-bottom: 1px solid #333;
    cursor: move;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .env-modal-close {
    background: none;
    border: none;
    color: #ccc;
    font-size: 18px;
    cursor: pointer;
    padding: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .env-modal-close:hover {
    color: #fff;
    background: #333;
    border-radius: 4px;
  }

  .env-content {
    padding: 20px;
  }

  .env-waveform-selector {
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid #333;
  }

  .env-waveform-selector label {
    display: block;
    margin-bottom: 8px;
    font-size: 12px;
    color: #ccc;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .env-waveform-buttons {
    display: flex;
    gap: 8px;
  }

  .env-waveform-btn {
    flex: 1;
    padding: 8px 12px;
    background: #333;
    border: 1px solid #555;
    color: #ddd;
    cursor: pointer;
    border-radius: 4px;
    font-size: 11px;
    transition: all 0.2s ease;
  }

  .env-waveform-btn:hover {
    background: #444;
    border-color: #666;
  }

  .env-waveform-btn.active {
    background: #00bcd4;
    border-color: #00bcd4;
    color: #000;
    font-weight: bold;
  }

  .env-graph-container {
    margin-bottom: 20px;
    background: #111;
    border: 1px solid #333;
    border-radius: 6px;
    padding: 10px;
  }

  .env-graph {
    width: 100%;
    height: 120px;
    border-radius: 4px;
  }

  .env-controls {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
  }

  .env-param {
    text-align: center;
  }

  .env-param-label {
    display: block;
    margin-bottom: 8px;
    font-size: 11px;
    color: #ccc;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .env-knob {
    width: 50px;
    height: 50px;
    background: #2a2a2a;
    border: 2px solid #444;
    border-radius: 50%;
    position: relative;
    margin: 0 auto 8px;
    cursor: pointer;
    transition: border-color 0.2s ease;
  }

  .env-knob:hover {
    border-color: #00bcd4;
  }

  .env-knob .needle {
    position: absolute;
    top: 6px;
    left: 50%;
    width: 2px;
    height: 18px;
    background: #00bcd4;
    transform-origin: bottom center;
    border-radius: 1px;
  }

  .env-value {
    font-size: 10px;
    color: #888;
    font-family: monospace;
  }
`,document.head.appendChild(n)}for(let n=0;n<To;n++){const c=qt(n);ye.push(c),s.appendChild(c.container)}{const n=document.getElementById("drum-grid");if(n){n.innerHTML="",ne.length=0;const c=document.createElement("div");c.className="drum-wrap";const g=document.createElement("div");g.className="drum-left";const b=document.createElement("div");b.className="drum-label-spacer",g.appendChild(b),["Kick","Snr","Hh","Clap","Bell","Cstm","Cstm"].forEach((I,$)=>{const P=Rt[$],k=document.createElement("div");k.className="drum-label",k.dataset.part=P;const q=document.createElement("span");q.textContent=I,k.appendChild(q),P.startsWith("custm")?k.title="Click derecho: Mute/Unmute — Drop desde librería para asignar sample":(k.title="Doble click: Abrir librería • Click derecho: Mute/Unmute",k.addEventListener("dblclick",W=>{W.preventDefault(),W.stopPropagation(),console.log(`🎵 Doble click en ${P} - Abriendo librería`),L(P)})),k.addEventListener("contextmenu",W=>{W.preventDefault(),W.stopPropagation();const J=mt[P].mute;mt[P].mute=!J,mt[P].mute?(k.classList.add("muted"),console.log(`🔇 ${P} muteado`)):(k.classList.remove("muted"),console.log(`🔊 ${P} desmuteado`))}),P.startsWith("custm")&&(k.addEventListener("dragover",W=>{var J,D;(D=(J=W.dataTransfer)==null?void 0:J.types)!=null&&D.includes("text/plain")&&W.preventDefault()}),k.addEventListener("drop",W=>{W.preventDefault();const J=W.dataTransfer.getData("text/plain");J&&(J.endsWith(".wav")||J.endsWith(".mp3")||J.endsWith(".ogg"))&&On(P,J)})),g.appendChild(k)});const r=document.createElement("div");r.className="drum-right";const T=document.createElement("div");T.className="drum-header";for(let I=0;I<nn;I++){const $=Math.floor(I/4)+1,P=I%4+1,k=document.createElement("div");k.textContent=`${$}.${P}`,T.appendChild(k)}r.appendChild(T);const se=document.createElement("div");se.className="drum-rows",Rt.forEach((I,$)=>{ne[$]=[];const P=document.createElement("div");P.className="drum-row";for(let k=0;k<nn;k++){const q=document.createElement("div");q.classList.add("drum-cell"),q.dataset.part=I,q.dataset.step=String(k),q.addEventListener("click",()=>{q.classList.toggle("active")}),P.appendChild(q),ne[$][k]=q}se.appendChild(P)}),r.appendChild(se),c.appendChild(g),c.appendChild(r),n.appendChild(c)}}let u=null,f=null,i=null,w=null;function S(){if(u)return;u=document.createElement("div"),u.className="drum-lib-backdrop",f=document.createElement("div"),f.className="drum-lib-center";const n=document.createElement("div");n.className="drum-lib-header",i=document.createElement("div"),i.textContent="Banco";const c=document.createElement("button");c.className="drum-lib-close",c.textContent="×",c.title="Cerrar",c.addEventListener("click",()=>{u.style.display="none"}),n.appendChild(i),n.appendChild(c),w=document.createElement("div"),w.className="drum-lib-content",w.innerHTML='<div class="drum-lib-empty">Cargando...</div>',f.appendChild(n),f.appendChild(w),u.appendChild(f),document.body.appendChild(u),u.addEventListener("click",g=>{f.contains(g.target)||(u.style.display="none")})}async function L(n){S(),i.textContent=`Banco: ${n}`,w.innerHTML='<div class="drum-lib-empty">Cargando...</div>',u.style.display="block",j(n)}function j(n){console.log("🔍 Mostrando samples reales para parte:",n);const c=Bo[n];if(!c){w.innerHTML=`<div class="drum-lib-empty">Parte "${n}" no soportada.</div>`;return}const g=Ro[n]||[];if(g.length===0){w.innerHTML=`<div class="drum-lib-empty">No se encontraron samples para "${n}".</div>`;return}const b=document.createDocumentFragment();g.forEach(x=>{const r=`samples/drums/${c}/${x}`,T=document.createElement("div");T.className="drum-lib-item";const se=document.createElement("span");se.textContent=x.replace(".wav","");const I=document.createElement("button");I.className="drum-lib-preview-btn",I.textContent="▶",I.title="Preview",I.addEventListener("click",async $=>{$.stopPropagation(),console.log("🔊 Preview clickeado para:",r),await Pn(r)}),T.appendChild(se),T.appendChild(I),T.addEventListener("click",async $=>{$.target!==I&&(console.log("🔄 Seleccionando sample:",r),await On(n,r),u.style.display="none")}),b.appendChild(T)}),w.innerHTML="",w.appendChild(b),console.log(`✅ Mostrados ${g.length} samples REALES para ${n}`)}ke=new Tone.Sequence((n,c)=>{vt(c),Rt.forEach((g,b)=>{var r,T;const x=(r=ne[b])==null?void 0:r[c];!x||!x.classList.contains("active")||(T=mt[g])!=null&&T.mute||Fe.player(g).start(n)})},Array.from({length:nn},(n,c)=>c),"16n"),ke.loop=!0;const V=document.getElementById("keyboard");if(V){V.innerHTML="",V.style.position="relative";const n=["C4","D4","E4","F4","G4","A4","B4","C5"],c={C4:{note:"C#4",leftOffset:60},D4:{note:"D#4",leftOffset:100},F4:{note:"F#4",leftOffset:180},G4:{note:"G#4",leftOffset:220},A4:{note:"A#4",leftOffset:260}},g=40;n.forEach(b=>{const x=document.createElement("div");x.classList.add("key","white-key"),x.dataset.note=b,x.textContent=b.replace(/[45]/,""),x.addEventListener("mousedown",async()=>{Tone.getContext().state==="suspended"&&await Tone.start(),x.classList.add("active"),$e.triggerAttack(b)}),x.addEventListener("mouseup",()=>{x.classList.remove("active"),$e.triggerRelease()});const r=document.createElement("div");r.classList.add("key-wrapper"),r.style.position="relative",r.style.width=`${g}px`,r.appendChild(x),V.appendChild(r)}),Object.entries(c).forEach(([b,{note:x,leftOffset:r}])=>{const T=document.createElement("div");T.classList.add("key","black-key"),T.dataset.note=x,T.style.left=`${r}px`,T.addEventListener("mousedown",async()=>{Tone.getContext().state==="suspended"&&await Tone.start(),T.classList.add("active"),$e.triggerAttack(x)}),T.addEventListener("mouseup",()=>{T.classList.remove("active"),$e.triggerRelease()}),V.appendChild(T)})}if(navigator.requestMIDIAccess)navigator.requestMIDIAccess().then(R,fe);else{const n=document.getElementById("midi-status");n&&(n.textContent="❌ MIDI not supported")}function R(n){Nn=n;for(let c of Nn.inputs.values()){c.onmidimessage=X;const g=document.getElementById("midi-status");g&&(g.textContent=`🎹 MIDI connected: ${c.name}`)}}function fe(){const n=document.getElementById("midi-status");n&&(n.textContent="❌ MIDI connection failed")}async function X(n){Tone.getContext().state==="suspended"&&await Tone.start();const[c,g,b]=n.data,x=Tone.Frequency(g,"midi").toNote();c===144&&b>0?($e.volume.value=Tone.gainToDb(b/127),$e.triggerAttack(x)):(c===128||c===144&&b===0)&&$e.triggerRelease()}const be=document.getElementById("infoButton"),y=document.getElementById("infoModal"),z=document.getElementById("closeModal");be&&y&&z&&(be.addEventListener("click",()=>y.style.display="block"),z.addEventListener("click",()=>y.style.display="none"),window.addEventListener("click",n=>{n.target===y&&(y.style.display="none")}));const oe=document.getElementById("tempoInput");oe&&oe.addEventListener("input",Po);const H=document.getElementById("sample-folders");async function gt(){try{const n=await fetch("samples/library/library.json",{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status}`);return await n.json()}catch(n){return console.warn("No se pudo cargar library.json:",n),null}}function Je(n){const c=document.createElement("div");c.classList.add("sample-item");const g=document.createElement("span");g.textContent=n.name;const b=document.createElement("button");return b.textContent="▶",b.addEventListener("click",()=>{try{Pn(n.path)}catch(x){console.warn("No se pudo previsualizar el sample:",x)}}),c.appendChild(g),c.appendChild(b),c.draggable=!0,c.dataset.path=n.path,c.addEventListener("dragstart",x=>{x.dataTransfer.setData("text/plain",c.dataset.path)}),c}function ae(n,c){const g=document.createElement("div");g.classList.add("sample-folder");const b=document.createElement("button");b.classList.add("folder-toggle"),b.textContent=`📁 ${n.name}`;const x=document.createElement("div");x.classList.add("sample-list"),x.style.display="none",b.addEventListener("click",()=>{x.style.display=x.style.display==="none"?"block":"none"}),Array.isArray(n.folders)&&n.folders.forEach(r=>ae(r,x)),Array.isArray(n.files)&&n.files.forEach(r=>{const T=(r.name||"").toLowerCase();(T.endsWith(".wav")||T.endsWith(".mp3")||T.endsWith(".ogg"))&&x.appendChild(Je(r))}),g.appendChild(b),g.appendChild(x),c.appendChild(g)}(async()=>{if(!H)return;H.innerHTML="";const n=await gt();if(!n){const c=document.createElement("div");c.style.color="#f66",c.style.padding="6px 8px",c.textContent="⚠️ No se pudo cargar la librería (samples/library/library.json). Revisa que el servidor esté activo y la ruta exista.",H.appendChild(c);return}if(Array.isArray(n.folders)&&n.folders.forEach(c=>ae(c,H)),Array.isArray(n.files)&&n.files.length){const c={name:"Raíz",folders:[],files:n.files};ae(c,H)}})();function qt(n){const c=new Tone.PolySynth(Tone.Synth,{oscillator:{type:"triangle"},envelope:{attack:.005,decay:.1,sustain:.7,release:.3},detune:0}),g=new Tone.Gain(.8),b=new Tone.Panner(0),x=new Tone.Gain;Co(x),c.connect(g),g.connect(b),b.connect(x),x.toDestination();let r={mode:"MIDI",synth:c,sampler:null,player:null,gain:g,pan:b,out:x,sequence:null,notes:null,sends:{},audioClip:null,envelope:{attack:.005,decay:.1,sustain:.7,release:.3},oscillatorType:"triangle"},se=K("samples/library/Lead/Agudo.wav"),I=!1,$=new Tone.Sampler({urls:{C4:se},onload:()=>{I=!0,console.log(`✅ Canal ${n+1}: Sampler cargado correctamente - ${se}`)},onerror:e=>{console.warn(`❌ Canal ${n+1}: Error cargando sampler - ${se}`,e),I=!1}}).connect(g),P=new Tone.AmplitudeEnvelope({attack:r.envelope.attack,decay:r.envelope.decay,sustain:r.envelope.sustain,release:r.envelope.release});function k(){if(r.mode==="MIDI"&&(c.set({oscillator:{type:r.oscillatorType},envelope:{attack:r.envelope.attack,decay:r.envelope.decay,sustain:r.envelope.sustain,release:r.envelope.release}}),$&&$.set))try{$.set({envelope:{attack:r.envelope.attack,decay:r.envelope.decay,sustain:r.envelope.sustain,release:r.envelope.release}})}catch(e){console.warn("No se pudo actualizar envolvente del sampler:",e)}}function q(){r.mode==="AUD"&&P&&P.set({attack:r.envelope.attack,decay:r.envelope.decay,sustain:r.envelope.sustain,release:r.envelope.release})}function W(e,a,p){if(r.mode==="MIDI")if(I)try{$.triggerAttackRelease(e,a,p)}catch(l){console.warn(`Canal ${n+1}: Error triggering note ${e}:`,l)}else try{c.triggerAttackRelease(e,a,p)}catch(l){console.warn(`Canal ${n+1}: Fallback synth error:`,l)}}function J(e){var a;try{const p=K(e);if(se=p,I=!1,typeof $.add=="function")$.add("C4",p,()=>{I=!0,console.log(`✅ Canal ${n+1}: Sample actualizado - ${p}`)});else{const l=$;$=new Tone.Sampler({urls:{C4:p},onload:()=>{I=!0,console.log(`✅ Canal ${n+1}: Nuevo sampler cargado - ${p}`)},onerror:d=>{console.warn(`❌ Canal ${n+1}: Error cargando sample - ${p}`,d),I=!1}}),$.connect(g),(a=l.dispose)==null||a.call(l),k()}Sn(e),Kt()}catch(p){console.warn("No se pudo cargar el sample:",p)}}const D=[];let ht=[],yt=[],N=new Set;const Ft=32;let sn=0;const bt=()=>{cancelAnimationFrame(sn),sn=requestAnimationFrame(()=>Yt())},Q=document.createElement("div");Q.classList.add("channel");const A=document.createElement("div");A.classList.add("piano-modal"),Object.assign(A.style,{display:"none",width:"450px",height:"300px",position:"absolute",left:"100px",top:`${100+n*20}px`,zIndex:"1000",background:"#121212",border:"1px solid #333",borderRadius:"8px",boxShadow:"0 8px 16px rgba(0,0,0,0.4)",overflow:"hidden"});const ze=document.createElement("div");ze.classList.add("piano-modal-header"),Object.assign(ze.style,{cursor:"move",padding:"8px 12px",background:"#1e1e1e",borderBottom:"1px solid #2a2a2a",fontWeight:"600",display:"flex",alignItems:"center",justifyContent:"space-between"});const rn=document.createElement("span");rn.textContent=`🎹 Piano Roll - Canal ${n+1}`,ze.appendChild(rn);const re=document.createElement("button");re.textContent="✕",re.title="Cerrar Piano Roll",Object.assign(re.style,{background:"none",border:"1px solid #555",color:"#ccc",fontSize:"14px",width:"26px",height:"26px",borderRadius:"4px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",lineHeight:"1",padding:"0",flexShrink:"0"}),re.addEventListener("mouseenter",()=>{re.style.background="#333",re.style.color="#fff"}),re.addEventListener("mouseleave",()=>{re.style.background="none",re.style.color="#ccc"}),re.addEventListener("click",e=>{e.stopPropagation(),A.style.display="none"}),ze.appendChild(re),A.appendChild(ze);const We=document.createElement("div");Object.assign(We.style,{display:"flex",gap:"8px",alignItems:"center",padding:"6px 10px"}),We.innerHTML=`
      <button class="oct-down">◀ Octava −</button>
      <span class="oct-label">Rango: C${F.startOct}–B${F.endOct}</span>
      <button class="oct-up">Octava + ▶</button>
    `,A.appendChild(We);const Qe=document.createElement("div");Object.assign(Qe.style,{display:"flex",gap:"8px",alignItems:"center",padding:"6px 10px",borderTop:"1px solid #2a2a2a"}),Qe.innerHTML=`
      <label style="font-size:12px;color:#ccc">Escala:</label>
      <select class="scale-key">
        ${Pt.map(e=>`<option value="${e}" ${e===Ke.key?"selected":""}>${e}</option>`).join("")}
      </select>
      <select class="scale-mode">
        <option value="major" ${Ke.mode==="major"?"selected":""}>Mayor</option>
      </select>
      <small style="color:#888; margin-left:auto;">SHIFT+clic para seleccionar · M para fusionar</small>
    `,A.appendChild(Qe);const ln=Qe.querySelector(".scale-key"),cn=Qe.querySelector(".scale-mode");ln.addEventListener("change",()=>{Ke.key=ln.value,je(),Me(),bt()}),cn.addEventListener("change",()=>{Ke.mode=cn.value,je(),Me(),bt()});const Ze=32,zt=38,xe=26,Te=4,et=48,tt=document.createElement("div");Object.assign(tt.style,{position:"relative",background:"#1b1b1b",padding:"6px",borderRadius:"6px",margin:"6px",marginTop:"10px",display:"flex",gap:`${Te}px`,height:"calc(100% - 24px)"}),A.appendChild(tt);const xt=document.createElement("div");Object.assign(xt.style,{width:`${et}px`,minWidth:`${et}px`,overflow:"hidden",flex:"0 0 auto",background:"#1b1b1b",borderRight:"1px solid #2b2b2b",zIndex:"5",boxShadow:"2px 0 0 #1b1b1b"}),tt.appendChild(xt);const U=document.createElement("div");U.style.position="relative",U.style.display="flex",U.style.flexDirection="column",U.style.gap="0px",xt.appendChild(U);const Be=6,wt=document.createElement("div");Object.assign(wt.style,{position:"absolute",left:`${Be+et+Te}px`,right:`${Be}px`,top:`${Be}px`,height:`${xe+4}px`,overflow:"hidden",zIndex:"10",background:"#1b1b1b",borderBottom:"1px solid #2b2b2b"}),tt.appendChild(wt);const Re=document.createElement("div");Object.assign(Re.style,{position:"absolute",left:`${Be+et+Te}px`,right:`${Be}px`,top:`${Be+xe+4}px`,bottom:`${Be}px`,overflow:"auto",background:"transparent",boxSizing:"content-box"}),tt.appendChild(Re);const Wt=document.createElement("div");Object.assign(Wt.style,{position:"absolute",right:"6px",bottom:"6px",width:"14px",height:"14px",cursor:"nwse-resize",borderRight:"2px solid #888",borderBottom:"2px solid #888",opacity:"0.85",zIndex:"20"}),A.appendChild(Wt);const Wn=420,jn=260;let dn,pn,un,mn,fn;function vn(e){const a=e.clientX-dn,p=e.clientY-pn,l=Math.max(Wn,un+a),d=Math.max(jn,mn+p);cancelAnimationFrame(fn),fn=requestAnimationFrame(()=>{A.style.width=l+"px",A.style.height=d+"px",Me()})}function gn(){document.removeEventListener("mousemove",vn),document.removeEventListener("mouseup",gn),document.body.style.userSelect=""}Wt.addEventListener("mousedown",e=>{e.preventDefault(),dn=e.clientX,pn=e.clientY,un=A.offsetWidth,mn=A.offsetHeight,document.body.style.userSelect="none",document.addEventListener("mousemove",vn),document.addEventListener("mouseup",gn)});const jt=document.createElement("div");Object.assign(jt.style,{display:"grid",gridTemplateColumns:`repeat(${Ze}, ${zt}px)`,gap:`${Te}px`,position:"sticky",top:"0",zIndex:"3",background:"#1b1b1b",paddingBottom:"4px",borderBottom:"1px solid #2b2b2b"});for(let e=0;e<Ze;e++){const a=Math.floor(e/4)+1,p=e%4+1,l=document.createElement("div");l.textContent=`${a}.${p}`,Object.assign(l.style,{height:`${xe}px`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",color:"#ddd",userSelect:"none",lineHeight:"1.1",padding:"2px 0"}),jt.appendChild(l)}wt.appendChild(jt);const Ht=document.createElement("div");Ht.style.flexShrink="0";function Me(){Ht.style.height=`${xe+4}px`}Me(),U.appendChild(Ht);const we=document.createElement("div");we.style.display="flex",we.style.flexDirection="column",we.style.gap="0px",we.style.zIndex="1",Re.appendChild(we),Re.style.paddingBottom="78px",A.style.paddingBottom="20px";function Hn(e,a,p){for(const l of e)if(l.pitch===a&&p>=l.startStep&&p<l.startStep+l.length)return l;return null}const Un=(e,a,p,l=1)=>e.push({pitch:a,startStep:p,length:Math.max(1,Math.floor(l))}),Gn=(e,a)=>{const p=e.indexOf(a);p>=0&&e.splice(p,1)};function Vn(e){if(N.size!==0){if(e.shiftKey&&(e.key==="ArrowRight"||e.key==="ArrowLeft")){e.preventDefault();for(const a of N){const p=Ze-a.startStep;a.length=pt(a.length+(e.key==="ArrowRight"?1:-1),1,p)}typeof B<"u"&&B[_]&&(B[_].notes=D.slice()),He()}(e.key==="m"||e.key==="M"||e.key==="Enter")&&N.size>=2&&(e.preventDefault(),Xn())}}function Xn(){if(N.size<2)return;const e=new Map;for(const l of N)e.has(l.pitch)||e.set(l.pitch,[]),e.get(l.pitch).push(l);const a=new Set;let p=!1;for(const[l,d]of e){if(d.length<2){a.add(d[0]);continue}let v=1/0,m=-1/0;for(const E of d){const M=E.startStep??0,Y=M+(E.length??1);M<v&&(v=M),Y>m&&(m=Y)}const C=Math.max(1,m-v);for(const E of d){const M=D.indexOf(E);M>=0&&D.splice(M,1)}const h={pitch:l,startStep:v,length:C};D.push(h),a.add(h),p=!0}if(p){N.clear();for(const l of a)N.add(l);typeof B<"u"&&B[_]&&(B[_].notes=D.slice()),He(),console.log(`🔗 Merged notes into ${a.size} sustained note(s)`)}}function je(){for(;U.children.length>1;)U.removeChild(U.lastChild);for(;we.firstChild;)we.removeChild(we.firstChild);ht=[],yt=[];const e=$t(),a=Do();for(let l=0;l<e.length;l++){const d=Mo(e[l]),v=a.has(d),m=l===e.length-1,C=document.createElement("div");Object.assign(C.style,{position:"relative",height:`${xe}px`,marginBottom:m?"0px":`${Te}px`,flexShrink:"0"});const h=document.createElement("div");Object.assign(h.style,{display:"grid",gridTemplateColumns:`repeat(${Ze}, ${zt}px)`,gap:`${Te}px`,alignItems:"center",height:"100%",boxSizing:"border-box",position:"relative",zIndex:"1"});const E=document.createElement("div");Object.assign(E.style,{position:"absolute",inset:"0",pointerEvents:"none",zIndex:"2"}),yt[l]=E,ht[l]=[];for(let ue=0;ue<Ze;ue++){const O=document.createElement("div");O.classList.add("piano-key"),v&&O.classList.add("in-scale"),O.dataset.note=e[l],O.dataset.step=String(ue);const _e=v?"#46515b":"#3f3f3f";O.dataset.baseBg=_e,Object.assign(O.style,{width:`${zt}px`,height:`${xe}px`,background:_e,border:"1px solid #2b2b2b",borderRadius:"3px",cursor:"pointer",boxSizing:"border-box",position:"relative",zIndex:"1"}),O.addEventListener("click",async Se=>{Tone.getContext().state==="suspended"&&await Tone.start();const Oe=O.dataset.note,qe=parseInt(O.dataset.step,10),G=Hn(D,Oe,qe);if(Se.detail===2){G&&(Gn(D,G),typeof B<"u"&&B[_]&&(B[_].notes=D.slice()),N.delete(G)),He();return}if(Se.shiftKey){G&&(N.has(G)?N.delete(G):N.add(G),W(Oe,.15)),He();return}if(G){const mo=N.size===1&&N.has(G);N.clear(),mo||N.add(G),W(Oe,.25)}else N.clear(),Un(D,Oe,qe,1),N.add(D[D.length-1]),typeof B<"u"&&B[_]&&(B[_].notes=D.slice()),W(Oe,.25);He()}),h.appendChild(O),ht[l][ue]=O}C.appendChild(h),C.appendChild(E),we.appendChild(C);const M=document.createElement("div"),Y=e[l]||"",ge=Y.replace(/[0-9]/g,""),Dt=Y.replace(/[^0-9]/g,""),At=ge[0]||"",Ce=ge.includes("#"),Ae=document.createElement("span");Ae.textContent=At,Ae.style.fontWeight="700";const pe=document.createElement("span");pe.textContent=Ce?"♯":"",pe.style.fontSize="10px",pe.style.marginLeft=Ce?"1px":"0";const te=document.createElement("span");te.textContent=Dt,te.style.fontSize="9px",te.style.color="#999",te.style.marginLeft="1px",M.appendChild(Ae),Ce&&M.appendChild(pe),M.appendChild(te),Object.assign(M.style,{width:`${et}px`,height:`${xe}px`,lineHeight:`${xe}px`,display:"flex",alignItems:"center",justifyContent:"flex-end",whiteSpace:"nowrap",background:v?"#222a33":"#1b1b1b",color:v?"#e6f0ff":"#ddd",fontSize:"12px",userSelect:"none",boxShadow:"inset 0 -1px 0 #222",paddingRight:"6px",boxSizing:"border-box",marginBottom:m?"0px":`${Te}px`,flexShrink:"0"}),U.appendChild(M)}let p=U.querySelector(".rail-bottom-spacer");p||(p=document.createElement("div"),p.className="rail-bottom-spacer"),p.style.height=`${xe+Te+48}px`,requestAnimationFrame(()=>Me()),U.appendChild(p),He()}function He(){var l;const e=$t();for(let d=0;d<e.length;d++)for(let v=0;v<32;v++){const m=(l=ht[d])==null?void 0:l[v];m&&(m.className="piano-key",m.dataset.baseBg==="#46515b"&&m.classList.add("in-scale"),m.style.background=m.dataset.baseBg||"#3f3f3f",m.style.outline="none",m.style.border="1px solid #2b2b2b",m.style.zIndex="1",m.style.boxShadow="none",m.style.opacity="1")}for(const d of yt)if(d)for(;d.firstChild;)d.removeChild(d.firstChild);const a=D.slice().sort((d,v)=>{const m=d.startStep??d.step??0,C=v.startStep??v.step??0;return m-C}),p=42;for(const d of a){const v=e.indexOf(d.pitch);if(v<0)continue;const m=pt(d.startStep??d.step??0,0,31),C=pt(d.length??1,1,32-m),h=N.has(d),E=document.createElement("div");E.className=h?"note-rect selected":"note-rect";const M=m*p,Y=C*p-4;Object.assign(E.style,{position:"absolute",left:M+"px",top:"0",width:Y+"px",height:"100%",background:h?"#27e0ff":"#00bcd4",opacity:h?"1":"0.9",borderRadius:"4px",boxShadow:h?"0 0 0 2px rgba(255,255,255,.9) inset, 0 0 8px rgba(39,224,255,.8)":"0 0 0 1px rgba(0,0,0,.3) inset",zIndex:h?"999":"5",pointerEvents:"none",transition:"none"});const ge=yt[v];ge&&ge.appendChild(E)}}je(),U.style.transform="translateY(0)",U.style.willChange="transform",xt.style.overflow="hidden",Re.addEventListener("scroll",()=>{wt.scrollLeft=Re.scrollLeft,U.style.transform=`translateY(-${Re.scrollTop}px)`});const hn=We.querySelector(".oct-label");We.querySelector(".oct-down").addEventListener("click",()=>{F.startOct>0&&(F.startOct=Math.max(0,F.startOct-1),F.endOct=F.startOct+1),hn.textContent=`Rango: C${F.startOct}–B${F.endOct}`,je(),Me(),bt()}),We.querySelector(".oct-up").addEventListener("click",()=>{F.startOct=F.startOct+1,F.endOct=F.startOct+1,hn.textContent=`Rango: C${F.startOct}–B${F.endOct}`,je(),Me(),bt()});const yn=new Tone.Sequence((e,a)=>{var p;if(a===0&&Ne&&Ne!==_){const l=Ne;Ct(),En(l)}if(r.mode==="MIDI"){const l=B&&B[_]?B[_].notes:D,d=l===((p=B[_])==null?void 0:p.notes)?D:l;for(const v of d)if((v.startStep??v.step)===a){const m=(v.length??1)*Tone.Time("16n").toSeconds();W(v.pitch,m,e)}}},Array.from({length:32},(e,a)=>a),"16n");yn.loop=!0,r.sequence=yn,document.body.appendChild(A),function(a,p){let d=0,v=0,m=!1;p.addEventListener("mousedown",E=>{m=!0,d=E.clientX-a.offsetLeft,v=E.clientY-a.offsetTop,document.addEventListener("mousemove",C),document.addEventListener("mouseup",h)});function C(E){if(!m)return;const M=Math.max(10,E.clientY-v);a.style.left=`${E.clientX-d}px`,a.style.top=`${M}px`}function h(){m=!1,document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",h)}}(A,ze);const Z=document.createElement("div");Z.classList.add("channel-controls"),Z.innerHTML=`
  <div class="ch-left-vertical">
    <input type="text" value="Canal ${n+1}" class="channel-name" />
    <label class="ctrl-label">VOL</label>
    <input type="range" min="0" max="1" step="0.01" value="0.8" class="channel-vol" />
    <label class="ctrl-label">PAN</label>
    <div class="pan-row">
      <div class="knob pan-knob" data-min="-1" data-max="1" data-step="0.01" data-value="0">
        <div class="needle"></div>
      </div>
      <button class="channel-mute" title="Mute" aria-pressed="false">M</button>
      <button class="channel-solo" title="Solo" aria-pressed="false">S</button>
    </div>
  </div>

  <div class="ch-right-zone">
    <div class="v-sep"></div>
    <div class="ch-right-stack">
      <button class="channel-format mode-midi" title="CLIC para cambiar a Audio/MIDI - Actualmente: MIDI">MIDI</button>
      <button class="channel-toggle-roll" title="Piano Roll">🎹</button>
    </div>
    <div class="v-sep"></div>
  </div>

  <div class="ch-right-info">
    <div class="sample-box" title="Arrastra un sample (MIDI) o un clip (AUDIO) a este canal">
      <span class="sample-label">Sample:</span>
      <span class="sample-name">(Lead/lead1.wav)</span>
    </div>
    <div class="section-select-container">
      <div class="section-btn active" data-section="A">
        <span class="section-label">A</span>
        <div class="section-mini-roll"><div class="mini-rows"></div></div>
      </div>
      <div class="section-btn" data-section="B">
        <span class="section-label">B</span>
        <div class="section-mini-roll"><div class="mini-rows"></div></div>
      </div>
      <div class="section-btn" data-section="C">
        <span class="section-label">C</span>
        <div class="section-mini-roll"><div class="mini-rows"></div></div>
      </div>
    </div>
    <div class="audio-mini"><canvas></canvas></div>
  </div>
`,Q.appendChild(Z);const bn=Z.querySelector(".channel-name"),xn=Z.querySelector(".channel-vol"),Yn=Z.querySelector(".pan-knob"),Ut=Z.querySelector(".channel-mute"),Gt=Z.querySelector(".channel-solo"),nt=Z.querySelector(".channel-toggle-roll"),ot=Z.querySelector(".channel-format"),Vt=Z.querySelector(".ch-right-info"),wn=Vt.querySelector(".sample-name"),Xt=Vt.querySelector(".section-select-container"),Pe=Array.from(Xt.querySelectorAll(".section-btn")),Ie=Vt.querySelector(".audio-mini"),ie=Ie.querySelector("canvas");r.audioCanvas=ie;const B={A:{notes:[],miniBarsRows:[],miniRowsEl:Pe[0].querySelector(".mini-rows")},B:{notes:[],miniBarsRows:[],miniRowsEl:Pe[1].querySelector(".mini-rows")},C:{notes:[],miniBarsRows:[],miniRowsEl:Pe[2].querySelector(".mini-rows")}};let _="A",Ne=null,Et=null;function Kn(){D.length=0;for(const e of B[_].notes)D.push(e)}function Jn(){B[_].notes=D.slice()}function En(e){e!==_&&(Jn(),_=e,Kn(),N.clear(),Pe.forEach(a=>a.classList.toggle("active",a.dataset.section===e)),Yt(),A.style.display==="block"&&(je(),Me()))}function Qn(e){if(e===_&&!Ne)return;if(!(Tone.Transport.state==="started"))Ct(),En(e);else{if(Ne===e){Ct();return}Ct(),Ne=e;const p=Pe.find(l=>l.dataset.section===e);p&&(Et=setInterval(()=>{p.classList.toggle("pending-blink")},300))}}function Ct(){Ne=null,Et&&(clearInterval(Et),Et=null),Pe.forEach(e=>e.classList.remove("pending-blink"))}Pe.forEach(e=>{e.addEventListener("click",()=>{r.mode==="MIDI"&&Qn(e.dataset.section)})});let St=null,ve=null,Cn;window.ResizeObserver&&(Cn=new ResizeObserver(()=>{r.mode==="AUD"&&ve&&Ue(ve)}),Cn.observe(Ie));const Zn={flipY:!1,flipX:!1,amp:.85,zoom:1};function Sn(e){const a=e.split("/").slice(-2).join("/");wn.textContent=a}function eo(e){const a=e.miniRowsEl;a.innerHTML="",e.miniBarsRows=[];const p=$t();for(let l=0;l<p.length;l++){const d=document.createElement("div");d.className="mini-row";const v=document.createElement("div");v.className="mini-bg";for(let C=0;C<Ft;C++){const h=document.createElement("div");h.className="mini-bg-cell",v.appendChild(h)}const m=document.createElement("div");m.className="mini-bars",d.appendChild(v),d.appendChild(m),a.appendChild(d),e.miniBarsRows.push(m)}}function to(e){const a=$t();for(const d of e.miniBarsRows)for(;d.firstChild;)d.removeChild(d.firstChild);const l=e.notes.slice().sort((d,v)=>{const m=d.startStep??d.step??0,C=v.startStep??v.step??0;return m!==C?m-C:String(d.pitch).localeCompare(String(v.pitch))});for(const d of l){const v=a.indexOf(d.pitch);if(v<0)continue;const m=pt(d.startStep??d.step??0,0,Ft-1),C=pt(d.length??1,1,Ft-m),h=document.createElement("div");h.className="mini-bar",h.style.gridColumn=`${m+1} / span ${C}`,e.miniBarsRows[v].appendChild(h)}}function Yt(){B[_].notes=D.slice();for(const e of["A","B","C"])eo(B[e]),to(B[e])}function Kt(){Yt()}function Jt(e=""){const a=ie.getContext("2d"),p=ie.width=Ie.clientWidth||300,l=ie.height=Ie.clientHeight||64;a.clearRect(0,0,p,l),a.fillStyle="#121212",a.fillRect(0,0,p,l);let d=0;for(let h=0;h<e.length;h++)d=d*31+e.charCodeAt(h)>>>0;const v=96,m=Math.max(2,Math.floor(p/v)),C=l/2;for(let h=0;h<v;h++){d=d*1664525+1013904223>>>0;const M=.3+(d>>>8)/16777215*.65,Y=Math.max(2,Math.floor(M*(l-6))),ge=h*m+1;a.fillStyle="#00bcd4",a.fillRect(ge,C-Y/2,m-2,Y)}}function Ue(e,a=Zn){const p=function(Ae){const{numberOfChannels:pe,length:te}=Ae;if(pe===1)return Ae.getChannelData(0);const ue=new Float32Array(te);for(let O=0;O<pe;O++){const _e=Ae.getChannelData(O);for(let Se=0;Se<te;Se++)ue[Se]+=_e[Se]/pe}return ue}(e),l=Math.max(1,Ie.clientWidth||0),d=Math.max(1,Ie.clientHeight||0);if(l<10||d<10){requestAnimationFrame(()=>Ue(e,a));return}const v=Math.max(1,window.devicePixelRatio||1),m=Math.floor(l*v),C=Math.floor(d*v);ie.width=m,ie.height=C,ie.style.width=l+"px",ie.style.height=d+"px";const h=ie.getContext("2d");h.clearRect(0,0,m,C),a.flipX&&(h.translate(m,0),h.scale(-1,1)),h.fillStyle="#121212",h.fillRect(0,0,m,C);const E=Math.floor(C/2);h.strokeStyle="#2a2a2a",h.lineWidth=Math.max(1,Math.round(1*v)),h.beginPath(),h.moveTo(0,E+.5),h.lineTo(m,E+.5),h.stroke();const M=a.flipY?-1:1,Y=C*Math.max(.05,Math.min(a.amp,1))/2,ge=Math.max(1,m/Math.max(.1,a.zoom)),Dt=Math.max(1,Math.floor(p.length/ge));h.fillStyle="#00bcd4";const At=1;for(let Ce=0;Ce<m;Ce+=At){const pe=Math.floor(Ce/m*ge)*Dt;let te=1,ue=-1;for(let qe=0;qe<Dt&&pe+qe<p.length;qe++){const G=p[pe+qe];G<te&&(te=G),G>ue&&(ue=G)}const O=Math.round(E+M*te*Y),_e=Math.round(E+M*ue*Y),Se=Math.min(O,_e),Oe=Math.max(1,Math.abs(_e-O));h.fillRect(Ce,Se,At,Oe)}}async function kn(e){try{const a=K(e),l=await(await fetch(a)).arrayBuffer(),v=await Tone.getContext().rawContext.decodeAudioData(l.slice(0));ve=v,r.decodedBuffer=ve,r.audioCanvas=ie,St=a,Ue(v)}catch(a){console.warn("No se pudo decodificar la forma de onda:",a),requestAnimationFrame(()=>Jt(e))}}const ee=new Tone.Player({url:void 0,loop:!0,autostart:!1}).connect(g);r.player=ee;async function no(e){var a,p;try{const l=K(e);console.log(`🔄 Canal ${n+1}: Cargando audio - ${l}`);try{ee.stop(),ee.unsync()}catch{}await ee.load(l),Sn(e),r.audioClip={url:l};const d=(p=(a=ee.buffer)==null?void 0:a.get)==null?void 0:p.call(a);d?(r.decodedBuffer=d,r.audioCanvas=ie,ve=d,St=e,requestAnimationFrame(()=>Ue(ve))):await kn(e),ee.loop=!0,ee.stop(0),r.mode==="AUD"&&q(),console.log(`✅ Canal ${n+1}: Audio cargado correctamente - ${e}`)}catch(l){console.warn(`❌ Canal ${n+1}: Error cargando audio:`,l),requestAnimationFrame(()=>Jt(e))}}function Ln(e){if(r.mode=e,e==="MIDI"){nt.classList.remove("btn-disabled"),nt.disabled=!1,Xt.style.display="",Ie.style.display="none",Kt();try{ee.stop(),ee.unsync()}catch{}k()}else if(e==="AUD"){if(nt.classList.add("btn-disabled"),nt.disabled=!0,A.style.display==="block"&&(A.style.display="none"),Xt.style.display="none",Ie.style.display="flex",ve)try{Ue(ve)}catch{}requestAnimationFrame(()=>{ve?Ue(ve):St?kn(St):Jt(wn.textContent)}),ee.loop=!0,ee.stop(0),q()}const a=e==="AUD";ot.classList.toggle("mode-aud",a),ot.classList.toggle("mode-midi",!a),ot.textContent=a?"AUD":"MIDI",ot.title=`CLIC para cambiar a ${a?"MIDI":"Audio"} - Actualmente: ${a?"AUDIO":"MIDI"}`}Q.addEventListener("dragover",e=>{var a,p;(p=(a=e.dataTransfer)==null?void 0:a.types)!=null&&p.includes("text/plain")&&e.preventDefault()}),Q.addEventListener("dragenter",()=>Q.classList.add("drag-over")),Q.addEventListener("dragleave",()=>Q.classList.remove("drag-over")),Q.addEventListener("drop",e=>{e.preventDefault();const a=e.dataTransfer.getData("text/plain");if(!a){Q.classList.remove("drag-over");return}if(!(a.endsWith(".wav")||a.endsWith(".mp3")||a.endsWith(".ogg"))){Q.classList.remove("drag-over");return}r.mode==="AUD"?no(a):J(a),Q.classList.remove("drag-over")});const kt=new Tone.Distortion({distortion:0,oversample:"2x",wet:0}),Lt=new Tone.Filter({frequency:2e4,type:"lowpass",rolloff:-12}),at=new Tone.Chorus({frequency:1.6,delayTime:3.5,depth:0,wet:0}),Tt=new Tone.FeedbackDelay({delayTime:"8n",feedback:0,wet:0}),st=new Tone.Reverb({decay:.1,preDelay:0,wet:0});at.start(),g.disconnect(),b.disconnect(),c.connect(g),$.connect(g),ee.connect(g),g.connect(b),b.connect(kt),kt.connect(Lt),Lt.connect(at),at.connect(Tt),Tt.connect(st),st.connect(x);const Tn=Z.querySelector(".ch-right-stack"),rt=document.createElement("button");rt.className="channel-fx",rt.title="Efectos (FX)",rt.textContent="FX",Tn.appendChild(rt);const Ee=document.createElement("div");Ee.className="fx-modal",Ee.style.display="none";const Ge=document.createElement("div");Ge.className="fx-modal-header",Object.assign(Ge.style,{display:"flex",alignItems:"center",justifyContent:"space-between"});const Qt=document.createElement("span");Qt.className="fx-title",Qt.textContent=`FX — Canal ${n+1}`,Ge.appendChild(Qt);const le=document.createElement("button");le.textContent="✕",le.title="Cerrar FX",Object.assign(le.style,{background:"none",border:"1px solid #555",color:"#ccc",fontSize:"14px",width:"26px",height:"26px",borderRadius:"4px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",lineHeight:"1",padding:"0",flexShrink:"0"}),le.addEventListener("mouseenter",()=>{le.style.background="#333",le.style.color="#fff"}),le.addEventListener("mouseleave",()=>{le.style.background="none",le.style.color="#ccc"}),le.addEventListener("click",e=>{e.stopPropagation(),Ee.style.display="none"}),Ge.appendChild(le),Ee.appendChild(Ge);const De=document.createElement("div");De.className="fx-grid",De.innerHTML=`
      <div class="fx-param"><div class="fx-label">Reverb</div><div class="knob fx-reverb"><div class="needle"></div></div><div class="fx-meter fx-meter--reverb"><div class="fill"></div></div></div>
      <div class="fx-param"><div class="fx-label">Delay</div><div class="knob fx-delay"><div class="needle"></div></div><div class="fx-meter fx-meter--delay"><div class="fill"></div></div></div>
      <div class="fx-param"><div class="fx-label">Distor</div><div class="knob fx-dist"><div class="needle"></div></div><div class="fx-meter fx-meter--dist"><div class="fill"></div></div></div>
      <div class="fx-param"><div class="fx-label">Chorus</div><div class="knob fx-chorus"><div class="needle"></div></div><div class="fx-meter fx-meter--chorus"><div class="fill"></div></div></div>
      <div class="fx-param"><div class="fx-label">Filter (Cutoff)</div><div class="knob fx-filter"><div class="needle"></div></div><div class="fx-meter fx-meter--filter"><div class="fill"></div></div></div>
    `,Ee.appendChild(De),document.body.appendChild(Ee),function(a,p){let d=0,v=0,m=!1;p.addEventListener("mousedown",E=>{m=!0,d=E.clientX-a.offsetLeft,v=E.clientY-a.offsetTop,document.addEventListener("mousemove",C),document.addEventListener("mouseup",h)});function C(E){if(!m)return;const M=Math.max(10,E.clientY-v);a.style.left=`${E.clientX-d}px`,a.style.top=`${M}px`}function h(){m=!1,document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",h)}}(Ee,Ge),rt.addEventListener("click",()=>{Ee.style.display=Ee.style.display==="none"?"block":"none"});const Mn=De.querySelector(".fx-reverb"),In=De.querySelector(".fx-delay"),Dn=De.querySelector(".fx-dist"),An=De.querySelector(".fx-chorus"),$n=De.querySelector(".fx-filter"),it=e=>e.closest(".fx-param").querySelector(".fx-meter .fill");he(Mn,{min:0,max:1,step:.01,value:0,onInput:e=>{st.wet.value=e,st.decay=.1+e*7.9,st.preDelay=e*.03,it(Mn).style.width=`${e*100}%`}}),he(In,{min:0,max:1,step:.01,value:0,onInput:e=>{Tt.feedback.value=Math.min(.9,e),Tt.wet.value=e,it(In).style.width=`${e*100}%`}}),he(Dn,{min:0,max:1,step:.01,value:0,onInput:e=>{kt.distortion=e*1.2,kt.wet.value=e,it(Dn).style.width=`${e*100}%`}}),he(An,{min:0,max:1,step:.01,value:0,onInput:e=>{at.depth=e,at.wet.value=e,it(An).style.width=`${e*100}%`}}),he($n,{min:0,max:1,step:.01,value:0,onInput:e=>{Lt.frequency.value=200+e*19800,it($n).style.width=`${e*100}%`}}),Lt.frequency.value=2e4;const lt=document.createElement("button");lt.className="channel-env",lt.title="Envolventes ADSR",lt.textContent="ENV",Tn.appendChild(lt);const ce=document.createElement("div");ce.className="env-modal",ce.style.display="none",ce.style.left="200px",ce.style.top=`${150+n*25}px`;const ct=document.createElement("div");ct.className="env-modal-header";const Bn=document.createElement("span");Bn.textContent=`🎛 Envolventes — Canal ${n+1}`;const Mt=document.createElement("button");Mt.className="env-modal-close",Mt.innerHTML="×",Mt.addEventListener("click",()=>{ce.style.display="none"}),ct.appendChild(Bn),ct.appendChild(Mt),ce.appendChild(ct);const dt=document.createElement("div");dt.className="env-content";const Ve=document.createElement("div");Ve.className="env-waveform-selector",Ve.innerHTML=`
      <label>Forma de Onda (Modo MIDI)</label>
      <div class="env-waveform-buttons">
        <button class="env-waveform-btn" data-type="sine">Sine</button>
        <button class="env-waveform-btn active" data-type="triangle">Triangle</button>
        <button class="env-waveform-btn" data-type="square">Square</button>
        <button class="env-waveform-btn" data-type="sawtooth">Saw</button>
      </div>
    `,dt.appendChild(Ve);const Zt=document.createElement("div");Zt.className="env-graph-container";const en=document.createElement("canvas");en.className="env-graph",Zt.appendChild(en),dt.appendChild(Zt);const de=document.createElement("div");de.className="env-controls",de.innerHTML=`
      <div class="env-param">
        <label class="env-param-label">Attack</label>
        <div class="env-knob env-attack">
          <div class="needle"></div>
        </div>
        <div class="env-value">0.005s</div>
      </div>
      <div class="env-param">
        <label class="env-param-label">Decay</label>
        <div class="env-knob env-decay">
          <div class="needle"></div>
        </div>
        <div class="env-value">0.100s</div>
      </div>
      <div class="env-param">
        <label class="env-param-label">Sustain</label>
        <div class="env-knob env-sustain">
          <div class="needle"></div>
        </div>
        <div class="env-value">0.700</div>
      </div>
      <div class="env-param">
        <label class="env-param-label">Release</label>
        <div class="env-knob env-release">
          <div class="needle"></div>
        </div>
        <div class="env-value">0.300s</div>
      </div>
    `,dt.appendChild(de),ce.appendChild(dt),document.body.appendChild(ce),function(a,p){let d=0,v=0,m=!1;p.addEventListener("mousedown",E=>{m=!0,d=E.clientX-a.offsetLeft,v=E.clientY-a.offsetTop,document.addEventListener("mousemove",C),document.addEventListener("mouseup",h)});function C(E){if(!m)return;const M=Math.max(10,E.clientY-v);a.style.left=`${E.clientX-d}px`,a.style.top=`${M}px`}function h(){m=!1,document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",h)}}(ce,ct);function Xe(){Ao(en,r.envelope.attack,r.envelope.decay,r.envelope.sustain,r.envelope.release)}const oo=de.querySelector(".env-attack"),ao=de.querySelector(".env-decay"),so=de.querySelector(".env-sustain"),ro=de.querySelector(".env-release"),io=de.querySelector(".env-param:nth-child(1) .env-value"),lo=de.querySelector(".env-param:nth-child(2) .env-value"),co=de.querySelector(".env-param:nth-child(3) .env-value"),po=de.querySelector(".env-param:nth-child(4) .env-value");he(oo,{min:.001,max:2,step:.001,value:r.envelope.attack,onInput:e=>{r.envelope.attack=e,io.textContent=`${e.toFixed(3)}s`,k(),q(),Xe()}}),he(ao,{min:.001,max:2,step:.001,value:r.envelope.decay,onInput:e=>{r.envelope.decay=e,lo.textContent=`${e.toFixed(3)}s`,k(),q(),Xe()}}),he(so,{min:0,max:1,step:.01,value:r.envelope.sustain,onInput:e=>{r.envelope.sustain=e,co.textContent=e.toFixed(3),k(),q(),Xe()}}),he(ro,{min:.001,max:4,step:.001,value:r.envelope.release,onInput:e=>{r.envelope.release=e,po.textContent=`${e.toFixed(3)}s`,k(),q(),Xe()}});const Rn=Ve.querySelectorAll(".env-waveform-btn");Rn.forEach(e=>{e.addEventListener("click",()=>{Rn.forEach(a=>a.classList.remove("active")),e.classList.add("active"),r.oscillatorType=e.dataset.type,k()})});function uo(){r.mode==="MIDI"?Ve.style.display="block":Ve.style.display="none"}lt.addEventListener("click",()=>{const e=ce.style.display==="block";ce.style.display=e?"none":"block",e||(uo(),Xe())}),bn.addEventListener("input",()=>{r.name=bn.value}),xn.addEventListener("input",()=>{const e=parseFloat(xn.value);g.gain.value=e}),he(Yn,{min:-1,max:1,step:.01,value:0,onInput:e=>{b.pan.value=e}}),Ut.addEventListener("click",()=>{const e=x.mute;x.mute=!e,Ut.classList.toggle("active",x.mute),Ut.setAttribute("aria-pressed",String(x.mute))});let It=!1;return Gt.addEventListener("click",()=>{It=!It,Gt.classList.toggle("active",It),Gt.setAttribute("aria-pressed",String(It))}),nt.addEventListener("click",()=>{if(r.mode==="MIDI"){const e=A.style.display==="block";A.style.display=e?"none":"block"}}),document.addEventListener("keydown",e=>{if(A.style.display!=="block")return;const a=e.target&&e.target.tagName||"";a==="INPUT"||a==="TEXTAREA"||a==="SELECT"||Vn(e)}),ot.addEventListener("click",()=>{const e=r.mode==="MIDI"?"AUD":"MIDI";Ln(e)}),Ln("MIDI"),Kt(),Xe(),{container:Q,track:r,modal:A,notes:D,mode:r.mode,out:x}}setTimeout(()=>{console.log("🔧 Aplicando correcciones críticas..."),ye.forEach((g,b)=>{g&&g.track&&g.track.sequence?console.log(`✅ Canal ${b+1}: Sequence ya asignado correctamente`):console.warn(`⚠️ Canal ${b+1}: Sequence no encontrado`)});let n=document.getElementById("playBtn"),c=document.getElementById("stopBtn");if(!n||!c){console.log("🎮 Creando controles de transporte...");const g=document.querySelector(".daw-transport-controls");g&&g.remove();const b=document.createElement("div");b.className="daw-transport-controls",b.style.cssText=`
        position: fixed; 
        top: 20px; 
        right: 20px; 
        z-index: 10000; 
        display: flex; 
        gap: 10px;
        background: rgba(0,0,0,0.8);
        padding: 10px;
        border-radius: 8px;
        border: 1px solid #333;
      `,n=document.createElement("button"),n.id="playBtn",n.innerHTML="▶️ Play",n.style.cssText=`
        padding: 12px 20px; 
        background: #00bcd4; 
        color: white; 
        border: none; 
        border-radius: 6px; 
        cursor: pointer;
        font-weight: bold;
        font-size: 14px;
        transition: background-color 0.2s ease;
      `,c=document.createElement("button"),c.id="stopBtn",c.innerHTML="⏹️ Stop",c.style.cssText=`
        padding: 12px 20px; 
        background: #f44336; 
        color: white; 
        border: none; 
        border-radius: 6px; 
        cursor: pointer;
        font-weight: bold;
        font-size: 14px;
        transition: background-color 0.2s ease;
      `,n.addEventListener("mouseenter",()=>{n.style.background="#00acc1"}),n.addEventListener("mouseleave",()=>{n.style.background=Nt?"#ff9800":"#00bcd4"}),c.addEventListener("mouseenter",()=>{c.style.background="#e53935"}),c.addEventListener("mouseleave",()=>{c.style.background="#f44336"}),b.appendChild(n),b.appendChild(c),document.body.appendChild(b),console.log("✅ Controles de transporte creados")}n.addEventListener("click",async()=>{Nt?(console.log("⏸️ Pausando DAW..."),Ye(),n.innerHTML="▶️ Play",n.style.background="#00bcd4"):(console.log("🎵 Iniciando DAW desde botón Play..."),await ut(),n.innerHTML="⏸️ Pause",n.style.background="#ff9800")}),c.addEventListener("click",()=>{console.log("⏹️ Deteniendo DAW desde botón Stop..."),Ye(),n.innerHTML="▶️ Play",n.style.background="#00bcd4"}),console.log("✅ Todas las correcciones aplicadas correctamente"),console.log("🎵 El DAW está listo para reproducir"),console.log("🎮 Usa los botones Play/Stop en la esquina superior derecha")},1e3),console.log("✅ PARTE 2 del script cargada correctamente")});
