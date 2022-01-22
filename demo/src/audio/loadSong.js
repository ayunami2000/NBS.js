class Instrument extends NBSjs.Instrument{audioBuffer="";constructor(n,t,e){super(n,t,e),void 0!==e&&(this.audioSrc=e.audioSrc||"")}}async function loadSong(n){n=NBSjs.Song.fromArrayBuffer(await n.file.arrayBuffer());return{song:n,structureText:JSON.stringify(n,void 0,4)}}function generateOverviews(n,t){var e={seconds:n.timePerTick*n.size/1e3,get s(){return(this.seconds%60).toFixed(2)},get m(){return Math.floor(this.seconds/60)},get format(){return prependZeros(this.m)+":"+prependZeros(this.s)}};const s=[];if(t)for(var[r,u]of t)s.push(u.name);return[["NBS version",n.nbsVersion],["Song name",n.name],["Song author",n.author],["Song description",n.description],["Song tick length",n.size],["Song duration",e.format],["Total layers",n.layers.length],["Custom instruments",n.instruments.map(n=>n.builtIn?null:n.name).filter(Boolean).join(", ")],["Available instruments",s.join(", ")]]}function prependZeros(n){return Array.from({length:Math.max(3-Math.floor(n).toString().length,0)}).join("0")+n}Instrument.builtIn=[new Instrument("Harp",0,{audioSrc:"assets/harp.mp3",builtIn:!0,pressKey:!0}),new Instrument("Double Bass",1,{audioSrc:"assets/dbass.mp3",builtIn:!0}),new Instrument("Bass Drum",2,{audioSrc:"assets/bdrum.mp3",builtIn:!0}),new Instrument("Snare Drum",3,{audioSrc:"assets/sdrum.mp3",builtIn:!0}),new Instrument("Click",4,{audioSrc:"assets/click.mp3",builtIn:!0}),new Instrument("Guitar",5,{audioSrc:"assets/guitar.mp3",builtIn:!0}),new Instrument("Flute",6,{audioSrc:"assets/flute.mp3",builtIn:!0}),new Instrument("Bell",7,{audioSrc:"assets/bell.mp3",builtIn:!0}),new Instrument("Chime",8,{audioSrc:"assets/chime.mp3",builtIn:!0}),new Instrument("Xylophone",9,{audioSrc:"assets/xylophone.mp3",builtIn:!0}),new Instrument("Iron Xylophone",10,{audioSrc:"assets/iron_xylophone.mp3",builtIn:!0}),new Instrument("Cow Bell",11,{audioSrc:"assets/cow_bell.mp3",builtIn:!0}),new Instrument("Didgeridoo",12,{audioSrc:"assets/didgeridoo.mp3",builtIn:!0}),new Instrument("Bit",13,{audioSrc:"assets/bit.mp3",builtIn:!0}),new Instrument("Banjo",14,{audioSrc:"assets/banjo.mp3",builtIn:!0}),new Instrument("Pling",15,{audioSrc:"assets/pling.mp3",builtIn:!0})],NBSjs.setInstrumentClass(Instrument);export{loadSong,generateOverviews};