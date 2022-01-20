(()=>{"use strict";var __webpack_modules__={"./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/function(__unused_webpack_module,exports,__webpack_require__){eval('\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { "default": mod };\n};\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nconst Song_1 = __importDefault(__webpack_require__(/*! ./nbs/Song */ "./nbs/Song.ts"));\nconst Layer_1 = __importDefault(__webpack_require__(/*! ./nbs/Layer */ "./nbs/Layer.ts"));\nconst Note_1 = __importDefault(__webpack_require__(/*! ./nbs/Note */ "./nbs/Note.ts"));\nconst Instrument_1 = __importDefault(__webpack_require__(/*! ./nbs/Instrument */ "./nbs/Instrument.ts"));\nconst util_1 = __webpack_require__(/*! ./util/util */ "./util/util.ts");\nfunction NBSjs() { }\nexports["default"] = NBSjs;\nNBSjs.Song = Song_1.default;\nNBSjs.Layer = Layer_1.default;\nNBSjs.Note = Note_1.default;\nNBSjs.Instrument = Instrument_1.default;\nNBSjs.getLayerClass = util_1.getLayerClass;\nNBSjs.getNoteClass = util_1.getNoteClass;\nNBSjs.getInstrumentClass = util_1.getInstrumentClass;\nNBSjs.setLayerClass = util_1.setLayerClass;\nNBSjs.setNoteClass = util_1.setNoteClass;\nNBSjs.setInstrumentClass = util_1.setInstrumentClass;\n\n\n//# sourceURL=webpack://NBSjs/./app.ts?')},"./nbs/Instrument.ts":
/*!***************************!*\
  !*** ./nbs/Instrument.ts ***!
  \***************************/(__unused_webpack_module,exports)=>{eval('\nvar _a;\nObject.defineProperty(exports, "__esModule", ({ value: true }));\n/**\n * Represents an instrument of a {@linkcode Note}.\n */\nclass Instrument {\n    /**\n     * Construct an instrument.\n     * @param name Name of the instrument\n     * @param id ID of the instrument in the song\'s instrument array\n     * @param options Options for the instrument\n     */\n    constructor(name, id, options) {\n        var _b, _c;\n        /**\n         * Name of the instrument.\n         */\n        this.name = "";\n        /**\n         * Audio source file of the instrument.\n         *\n         * NBS.js does not handle audio playback, this field is for storage.\n         */\n        this.audioSrc = "";\n        /**\n         * Key of the instrument.\n         *\n         * @example E = 44, F = 45\n         */\n        this.key = 45;\n        /**\n         * Whether the instrument is a built-in instrument.\n         */\n        this.builtIn = false;\n        /**\n         * Whether the instrument should press the keys on a keyboard.\n         */\n        this.pressKey = false;\n        this.name = name;\n        this.id = id;\n        // Parse options\n        this.audioSrc = (options === null || options === void 0 ? void 0 : options.audioSrc) || "";\n        this.key = (options === null || options === void 0 ? void 0 : options.key) === undefined ? 45 : options.key;\n        this.builtIn = (_b = options === null || options === void 0 ? void 0 : options.builtIn) !== null && _b !== void 0 ? _b : false;\n        this.pressKey = (_c = options === null || options === void 0 ? void 0 : options.pressKey) !== null && _c !== void 0 ? _c : false;\n    }\n}\nexports["default"] = Instrument;\n_a = Instrument;\n/**\n * The built-in instruments.\n *\n * Includes harp, double bass, bass drum, snare drum, click, guitar, flute, bell, chime, xylophone, iron xylophone, cow bell, didgeridoo, bit, banjo, and pling.\n *\n * All {@linkcode audioSrc} fields are empty by default - implementation dependent.\n */\nInstrument.builtIn = [\n    new _a("Harp", 0, {\n        "builtIn": true\n    }),\n    new _a("Double Bass", 1, {\n        "builtIn": true\n    }),\n    new _a("Bass Drum", 2, {\n        "builtIn": true\n    }),\n    new _a("Snare Drum", 3, {\n        "builtIn": true\n    }),\n    new _a("Click", 4, {\n        "builtIn": true\n    }),\n    new _a("Guitar", 5, {\n        "builtIn": true\n    }),\n    new _a("Flute", 6, {\n        "builtIn": true\n    }),\n    new _a("Bell", 7, {\n        "builtIn": true\n    }),\n    new _a("Chime", 8, {\n        "builtIn": true\n    }),\n    new _a("Xylophone", 9, {\n        "builtIn": true\n    }),\n    new _a("Iron Xylophone", 10, {\n        "builtIn": true\n    }),\n    new _a("Cow Bell", 11, {\n        "builtIn": true\n    }),\n    new _a("Didgeridoo", 12, {\n        "builtIn": true\n    }),\n    new _a("Bit", 13, {\n        "builtIn": true\n    }),\n    new _a("Banjo", 14, {\n        "builtIn": true\n    }),\n    new _a("Pling", 15, {\n        "builtIn": true\n    })\n];\n\n\n//# sourceURL=webpack://NBSjs/./nbs/Instrument.ts?')},"./nbs/Layer.ts":
/*!**********************!*\
  !*** ./nbs/Layer.ts ***!
  \**********************/(__unused_webpack_module,exports,__webpack_require__)=>{eval('\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nconst util_1 = __webpack_require__(/*! ../util/util */ "./util/util.ts");\n/**\n * Represents a layer of a song instance.\n */\nclass Layer {\n    /**\n     * Construct a layer.\n     *\n     * @param id ID of the layer\n     */\n    constructor(id) {\n        /**\n         * Name of the layer.\n         */\n        this.name = "";\n        /**\n         * Velocity (volume) of the layer.\n         */\n        this.velocity = 100;\n        /**\n         * Panning of the layer.\n         */\n        this.panning = 0;\n        /**\n         * Whether the layer is locked or muted.\n         */\n        this.locked = false;\n        /**\n         * Whether the layer is solo.\n         */\n        this.solo = false;\n        /**\n         * Notes within the layer.\n         */\n        this.notes = [];\n        this.id = id;\n    }\n    /**\n     * Set the note at a tick.\n     *\n     * @param tick Tick to set the note on\n     * @param note Note to set on tick\n     */\n    setNote(tick, note) {\n        this.notes[tick] = note;\n        return note;\n    }\n    /**\n     * Create and add a note to a tick.\n     *\n     * @param instrument The note\'s instrument\n     * @param tick Tick to set the note\n     * @param key The note\'s key\n     * @param panning The note\'s panning\n     * @param velocity The note\'s velocity\n     * @param pitch The note\'s pitch\n     */\n    addNote(tick, instrument, key, panning, velocity, pitch) {\n        const note = new ((0, util_1.getNoteClass)())(instrument, key, panning, velocity, pitch);\n        return this.setNote(tick, note);\n    }\n    /**\n     * Delete a note at a specified tick.\n     *\n     * @param tick Tick to remove note from\n     */\n    deleteNote(tick) {\n        delete this.notes[tick];\n    }\n}\nexports["default"] = Layer;\n\n\n//# sourceURL=webpack://NBSjs/./nbs/Layer.ts?')},"./nbs/Note.ts":
/*!*********************!*\
  !*** ./nbs/Note.ts ***!
  \*********************/function(__unused_webpack_module,exports,__webpack_require__){eval('\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { "default": mod };\n};\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nconst Instrument_1 = __importDefault(__webpack_require__(/*! ./Instrument */ "./nbs/Instrument.ts"));\nclass Note {\n    /**\n     * Construct a note.\n     * @param instrument Instrument of the note\n     * @param key Key of the note\n     * @param panning Panning of the note\n     * @param velocity Velocity of the note\n     * @param pitch Pitch of the note\n     */\n    constructor(instrument, key, panning, velocity, pitch) {\n        this.instrument = instrument !== null && instrument !== void 0 ? instrument : Instrument_1.default.builtIn[0];\n        this.key = key !== null && key !== void 0 ? key : 45;\n        this.panning = panning !== null && panning !== void 0 ? panning : 0;\n        this.velocity = velocity !== null && velocity !== void 0 ? velocity : 100;\n        this.pitch = pitch !== null && pitch !== void 0 ? pitch : 0;\n    }\n}\nexports["default"] = Note;\n\n\n//# sourceURL=webpack://NBSjs/./nbs/Note.ts?')},"./nbs/Song.ts":
/*!*********************!*\
  !*** ./nbs/Song.ts ***!
  \*********************/function(__unused_webpack_module,exports,__webpack_require__){eval('\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { "default": mod };\n};\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nconst util_1 = __webpack_require__(/*! ../util/util */ "./util/util.ts");\nconst fromArrayBuffer_1 = __importDefault(__webpack_require__(/*! ./file/fromArrayBuffer */ "./nbs/file/fromArrayBuffer.ts"));\nconst toArrayBuffer_1 = __importDefault(__webpack_require__(/*! ./file/toArrayBuffer */ "./nbs/file/toArrayBuffer.ts"));\n// TODO:\n// - Shrink song when removing notes\n// - Create field with loop tick (end of measure)\n/**\n * Represents a full NBS song file.\n *\n * Supports reading, writing, and manipulation.\n *\n * @example\n * ```js\n * const fs = require("fs");\n * const { Song, Note, Instrument } = require("@encode42/nbs.js");\n *\n * // Create a new song\n * const song = new Song();\n * song.name = "Triumph";\n * song.author = "Encode42";\n * song.tempo = 20;\n *\n * // Create 3 layers for 3 instruments\n * for (let layerCount = 0; layerCount < 3; layerCount++) {\n *     const instrument = Instrument.builtIn[layerCount];\n *\n *     // Create a layer for the instrument\n *     const layer = song.addLayer();\n *     layer.name = instrument.name;\n *\n *     // Notes that will be placed\n *     const notes = [\n *         new Note(instrument, 40),\n *         new Note(instrument, 45),\n *         new Note(instrument, 50),\n *         new Note(instrument, 45),\n *         new Note(instrument, 57)\n *     ];\n *\n *     // Place the notes\n *     for (let i = 0; i < notes.length; i++) {\n *         song.setNote(layer, i * 4, notes[i]);\n *     }\n * }\n *\n * // Write the song\n * fs.writeFileSync("song.nbs", Buffer.from(song.toArrayBuffer()));\n * ```\n */\nclass Song {\n    constructor() {\n        /**\n         * Size of the song in ticks.\n         */\n        this.size = 0;\n        /**\n         * Name of the song.\n         */\n        this.name = "";\n        /**\n         * Author of the song.\n         */\n        this.author = "";\n        /**\n         * Original author of the song.\n         */\n        this.originalAuthor = "";\n        /**\n         * Description of the song.\n         */\n        this.description = "";\n        /**\n         * Name of the imported MIDI file.\n         */\n        this.midiName = "";\n        /**\n         * Tempo (ticks per second) of the song.\n         */\n        this.tempo = 10;\n        /**\n         * Time signature of the song.\n         */\n        this.timeSignature = 4;\n        /**\n         * Whether looping is enabled.\n         */\n        this.loopEnabled = false;\n        /**\n         * Maximum times to loop the song.\n         */\n        this.maxLoopCount = 0;\n        /**\n         * Which tick to loop the song on.\n         */\n        this.loopStartTick = 0;\n        /**\n         * Whether auto-save is enabled.\n         */\n        this.autoSaveEnabled = false;\n        /**\n         * Duration of minutes between auto-saves.\n         */\n        this.autoSaveDuration = 5;\n        /**\n         * Minutes spent with the song open.\n         *\n         * **Does not automatically increment!**\n         */\n        this.minutesSpent = 0;\n        /**\n         * Times the song has received left-clicks.\n         *\n         * **Does not automatically increment!**\n         */\n        this.leftClicks = 0;\n        /**\n         * Times the song has received right-clicks.\n         *\n         * **Does not automatically increment!**\n         */\n        this.rightClicks = 0;\n        /**\n         * Total amount of blocks added.\n         *\n         * **Does not automatically increment!**\n         */\n        this.blocksAdded = 0;\n        /**\n         * Total amount of blocks removed.\n         *\n         * **Does not automatically increment!**\n         */\n        this.blocksRemoved = 0;\n        /**\n         * Version of NBS the song has been saved to.\n         *\n         * @see https://opennbs.org/nbs\n         */\n        this.nbsVersion = 5;\n        /**\n         * Index of the first custom instrument.\n         */\n        this.firstCustomIndex = this.instruments.length;\n        /**\n         * Layers within the song.\n         *\n         * @see {@linkcode Layer}\n         */\n        this.layers = [];\n        /**\n         * Whether the song has at least one solo layer.\n         */\n        this.hasSolo = false;\n        /**\n         * Errors occurred while loading, manipulating, or saving the nbs file.\n         *\n         * Returns an empty array if no errors occurred.\n         */\n        this.errors = [];\n    }\n    /**\n     * Instruments of the song.\n     */\n    get instruments() {\n        return (0, util_1.getInstrumentClass)().builtIn;\n    }\n    /**\n     * Amount of milliseconds each tick takes.\n     */\n    get timePerTick() {\n        return 20 / this.tempo * 50;\n    }\n    /**\n     * Length of the song in milliseconds.\n     */\n    get endTime() {\n        return this.size * this.timePerTick;\n    }\n    /**\n     * Create and add a new layer to the song.\n     */\n    addLayer() {\n        const layer = new ((0, util_1.getLayerClass)())(this.layers.length + 1);\n        this.layers.push(layer);\n        return layer;\n    }\n    /**\n     * Set the note at a tick.\n     *\n     * @param layer Layer to set the note on\n     * @param tick Tick to set the note\n     * @param note Note to set\n     */\n    setNote(layer, tick, note) {\n        this.expand(tick);\n        layer.setNote(tick, note);\n    }\n    /**\n     * Create and add a note to a tick.\n     *\n     * @param layer Layer to add the note to\n     * @param tick Tick to set the note\n     * @param instrument The note\'s instrument\n     * @param key The note\'s key\n     * @param panning The note\'s panning\n     * @param velocity The note\'s velocity\n     * @param pitch The note\'s pitch\n     */\n    addNote(layer, tick, instrument, key, panning, velocity, pitch) {\n        this.expand(tick);\n        // Construct the note\n        return layer.addNote(tick, instrument, key, panning, velocity, pitch);\n    }\n    /**\n     * Delete a layer from the song.\n     *\n     * @param layer Layer to delete.\n     */\n    deleteLayer(layer) {\n        this.layers.splice(this.layers.indexOf(layer), 1);\n    }\n    /**\n     * Generate and return an ArrayBuffer from this song.\n     *\n     * @return Generated ArrayBuffer\n     * Returns an empty ArrayBuffer if an error occurred\n     */\n    toArrayBuffer() {\n        return (0, toArrayBuffer_1.default)(this);\n    }\n    /**\n     * Generate and return an ArrayBuffer from a song.\n     *\n     * @param song Song to parse from\n     * @return Generated ArrayBuffer\n     * Returns an empty ArrayBuffer if an error occurred\n     */\n    static toArrayBuffer(song) {\n        return (0, toArrayBuffer_1.default)(song);\n    }\n    /**\n     * Parse and return a song from a file array buffer.\n     *\n     * @param buffer ArrayBuffer to parse from\n     * @return Parsed song\n     * Returns an empty song if an error occurred\n     */\n    static fromArrayBuffer(buffer) {\n        return (0, fromArrayBuffer_1.default)(buffer);\n    }\n    /**\n     * Expand the song if required.\n     *\n     * @param tick Tick that is being added\n     */\n    expand(tick) {\n        // Expand the song if required\n        if (tick + 1 > this.size) {\n            this.size = tick + 1;\n        }\n    }\n}\nexports["default"] = Song;\n\n\n//# sourceURL=webpack://NBSjs/./nbs/Song.ts?')},"./nbs/file/fromArrayBuffer.ts":
/*!*************************************!*\
  !*** ./nbs/file/fromArrayBuffer.ts ***!
  \*************************************/function(__unused_webpack_module,exports,__webpack_require__){eval('\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { "default": mod };\n};\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nconst util_1 = __webpack_require__(/*! ../../util/util */ "./util/util.ts");\nconst Song_1 = __importDefault(__webpack_require__(/*! ../Song */ "./nbs/Song.ts"));\nfunction fromArrayBuffer(buffer) {\n    const song = new Song_1.default();\n    try {\n        const reader = new util_1.BufferReader(buffer);\n        let size = reader.readShort(); // Read song size\n        // Check if NBS file is ONBS versioned\n        if (size === 0) {\n            song.nbsVersion = reader.readByte(); // Read NBS version\n            song.firstCustomIndex = reader.readByte(); // Read first custom instrument\n            if (song.nbsVersion >= 3) {\n                size = reader.readShort(); // Read real song size\n            }\n        }\n        const totalLayers = reader.readShort(); // Read total amount of layers\n        song.name = reader.readString(); // Read song name\n        song.author = reader.readString(); // Read song author\n        song.originalAuthor = reader.readString(); // Read song original author\n        song.description = reader.readString(); // Read song description\n        song.tempo = reader.readShort() / 100; // Read song tempo\n        song.autoSaveEnabled = Boolean(reader.readByte()); // Read song auto-save status\n        song.autoSaveDuration = reader.readByte(); // Read song auto-save interval\n        song.timeSignature = reader.readByte(); // Read song time signature\n        song.minutesSpent = reader.readInt(); // Read minutes spent in song\n        song.leftClicks = reader.readInt(); // Read left-clicks on song\n        song.rightClicks = reader.readInt(); // Read right-clicks on song\n        song.blocksAdded = reader.readInt(); // Read total blocks added to song\n        song.blocksRemoved = reader.readInt(); // Read total blocks removed from song\n        song.midiName = reader.readString(); // Read imported MIDI file name\n        if (song.nbsVersion >= 4) {\n            song.loopEnabled = Boolean(reader.readByte()); // Read loop status\n            song.maxLoopCount = reader.readByte(); // Read maximum loop count\n            song.loopStartTick = reader.readShort(); // Read loop start tick\n        }\n        // Read layer and note data\n        const rawNotes = [];\n        let tick = -1;\n        while (true) {\n            // Jump to the next tick\n            const jumpTicks = reader.readShort(); // Read amount of ticks to jump\n            if (jumpTicks === 0) {\n                break;\n            }\n            tick += jumpTicks;\n            let layer = -1;\n            while (true) {\n                // Jump to the next layer\n                const jumpLayers = reader.readShort(); // Read amount of layers to jump\n                if (jumpLayers === 0) {\n                    break;\n                }\n                layer += jumpLayers;\n                // Get note at tick\n                const instrument = reader.readByte(); // Read instrument of note\n                const key = reader.readByte(); // Read key of note\n                let velocity = 100;\n                let panning = 100;\n                let pitch = 0;\n                if (song.nbsVersion >= 4) {\n                    velocity = reader.readByte(); // Read velocity of note\n                    panning = reader.readUnsingedByte() - 100; // Read panning of note\n                    pitch = reader.readShort(); // Read pitch of note\n                }\n                // Push the note data to raw notes array\n                rawNotes.push({\n                    "instrument": instrument,\n                    "key": key,\n                    "velocity": velocity,\n                    "panning": panning,\n                    "pitch": pitch,\n                    "layer": layer,\n                    "tick": tick\n                });\n            }\n        }\n        // Guess song size for ONBS versions without size byte\n        if (song.nbsVersion > 0 && song.nbsVersion < 3) {\n            size = tick;\n        }\n        song.size = size;\n        // Add layers to song\n        if (buffer.byteLength > reader.currentByte) {\n            for (let i = 0; i < totalLayers; i++) {\n                const layer = song.addLayer();\n                layer.name = reader.readString(); // Read layer name\n                if (song.nbsVersion >= 4) {\n                    const lock = reader.readByte(); // Read layer lock status\n                    // Layer is locked\n                    if (lock === 1) {\n                        layer.locked = true;\n                    }\n                    // Layer is solo\n                    if (lock === 2) {\n                        layer.solo = song.hasSolo = true;\n                    }\n                }\n                layer.velocity = reader.readByte(); // Read layer velocity\n                let panning = 0;\n                if (song.nbsVersion >= 2) {\n                    panning = reader.readUnsingedByte() - 100; // Read layer panning\n                }\n                layer.panning = panning;\n            }\n        }\n        // Parse custom instruments\n        const customInstruments = reader.readByte(); // Read number of custom instruments\n        for (let i = 0; i < customInstruments; i++) {\n            song.instruments.push(new ((0, util_1.getInstrumentClass)())(reader.readString(), // Read instrument name\n            song.instruments.length, {\n                "audioSrc": reader.readString(),\n                "key": reader.readByte(),\n                "pressKey": Boolean(reader.readByte()) // Read press key status\n            }));\n        }\n        // Parse notes\n        for (const rawNote of rawNotes) {\n            // Create layer if non-existent\n            if (rawNote.layer >= song.layers.length) {\n                song.addLayer();\n            }\n            // Add note to layer\n            const layer = song.layers[rawNote.layer];\n            song.addNote(layer, rawNote.tick, song.instruments[rawNote.instrument], rawNote.key, rawNote.panning, rawNote.velocity, rawNote.pitch);\n        }\n    }\n    catch (e) {\n        song.errors.push(String(e));\n    }\n    return song;\n}\nexports["default"] = fromArrayBuffer;\n\n\n//# sourceURL=webpack://NBSjs/./nbs/file/fromArrayBuffer.ts?')},"./nbs/file/toArrayBuffer.ts":
/*!***********************************!*\
  !*** ./nbs/file/toArrayBuffer.ts ***!
  \***********************************/(__unused_webpack_module,exports,__webpack_require__)=>{eval('\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nconst util_1 = __webpack_require__(/*! ../../util/util */ "./util/util.ts");\nfunction toArrayBuffer(song) {\n    // Dry run to get target size\n    const size = write(song, 0, true).currentByte;\n    // Create the actual buffer\n    return write(song, size).buffer;\n}\nexports["default"] = toArrayBuffer;\nfunction write(song, size, dry = false) {\n    const writer = new util_1.BufferWriter(new ArrayBuffer(size), dry);\n    try {\n        if (song.nbsVersion >= 1) {\n            writer.writeShort(0); // Write ONBS spec\n            writer.writeByte(song.nbsVersion); // Write NBS version\n            writer.writeByte(song.firstCustomIndex); // First custom instrument index\n        }\n        if (song.nbsVersion === 0 || song.nbsVersion >= 3) {\n            writer.writeShort(song.size); // Write song size\n        }\n        writer.writeShort(song.layers.length); // Write total amount of layers\n        writer.writeString(song.name); // Write song name\n        writer.writeString(song.author); // Write song author\n        writer.writeString(song.originalAuthor); // Write song original author\n        writer.writeString(song.description); // Write song description\n        writer.writeShort(song.tempo * 100); // Write song tempo\n        writer.writeByte(+song.autoSaveEnabled); // Write song auto-save status\n        writer.writeByte(song.autoSaveDuration); // Write auto-save interval\n        writer.writeByte(song.timeSignature); // Write song time signature\n        writer.writeInt(Math.floor(song.minutesSpent)); // Write minutes spent in song\n        writer.writeInt(song.leftClicks); // Write left-clicks on song\n        writer.writeInt(song.rightClicks); // Write right-clicks on song\n        writer.writeInt(song.blocksAdded); // Write total blocks added to song\n        writer.writeInt(song.blocksRemoved); // Write total blocks removed from song\n        writer.writeString(song.midiName); // Write imported MIDI file name\n        if (song.nbsVersion >= 4) {\n            writer.writeByte(+song.loopEnabled); // Write loop status\n            writer.writeByte(song.maxLoopCount); // Write maximum loop count\n            writer.writeByte(song.loopStartTick); // Write loop start tick\n        }\n        writer.writeByte(0); // Write end of header\n        // Iterate each tick\n        let currentTick = -1;\n        for (let i = 0; i <= song.size; i++) {\n            // Ensure the layer has notes at the tick\n            let hasNotes = false;\n            for (const layer of song.layers) {\n                if (layer.notes[i]) {\n                    hasNotes = true;\n                    break;\n                }\n            }\n            if (!hasNotes) {\n                continue;\n            }\n            // Get amount of ticks to jump\n            const jumpTicks = i - currentTick;\n            currentTick = i;\n            writer.writeShort(jumpTicks); // Write amount of ticks to jump\n            // Iterate each layer\n            let currentLayer = -1;\n            for (let j = 0; j < song.layers.length; j++) {\n                const layer = song.layers[j];\n                const note = layer.notes[i];\n                if (note) {\n                    const jumpLayers = j - currentLayer;\n                    currentLayer = j;\n                    writer.writeShort(jumpLayers); // Write amount of layers to jump\n                    writer.writeByte(note.instrument.id); // Write instrument of note\n                    writer.writeByte(note.key); // Write key of note\n                    if (song.nbsVersion >= 4) {\n                        writer.writeByte(note.velocity); // Write velocity of note\n                        writer.writeUnsignedByte(note.panning + 100); // Write panning of note\n                        writer.writeShort(note.pitch); // Write pitch of note\n                    }\n                }\n            }\n            writer.writeShort(0); // Write end of tick\n        }\n        writer.writeShort(0); // Write end of notes\n        for (const layer of song.layers) {\n            writer.writeString(layer.name); // Write layer name\n            if (song.nbsVersion >= 4) {\n                let val = 0;\n                // Layer is locked\n                if (layer.locked) {\n                    val = 1;\n                }\n                // Layer is solo\n                if (layer.solo) {\n                    val = 2;\n                }\n                writer.writeByte(val); // Write layer lock status\n            }\n            writer.writeByte(layer.velocity); // Write layer velocity\n            if (song.nbsVersion >= 2) {\n                writer.writeByte(layer.panning + 100); // Write layer panning\n            }\n        }\n        writer.writeByte(song.instruments.length - song.firstCustomIndex); // Write number of custom instruments\n        for (let i = 0; i < song.instruments.length; i++) {\n            const instrument = song.instruments[i];\n            if (!instrument.builtIn) {\n                writer.writeString(instrument.name); // Write instrument name\n                writer.writeString(instrument.audioSrc); // Write instrument filename\n                writer.writeByte(instrument.key); // Write instrument key\n                writer.writeByte(+instrument.pressKey); // Write press key status\n            }\n        }\n    }\n    catch (e) {\n        song.errors.push(String(e));\n    }\n    return writer;\n}\n\n\n//# sourceURL=webpack://NBSjs/./nbs/file/toArrayBuffer.ts?')},"./util/util.ts":
/*!**********************!*\
  !*** ./util/util.ts ***!
  \**********************/function(__unused_webpack_module,exports,__webpack_require__){eval('\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { "default": mod };\n};\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.setInstrumentClass = exports.setNoteClass = exports.setLayerClass = exports.getInstrumentClass = exports.getNoteClass = exports.getLayerClass = exports.BufferWriter = exports.BufferReader = void 0;\nconst Instrument_1 = __importDefault(__webpack_require__(/*! ../nbs/Instrument */ "./nbs/Instrument.ts"));\nconst Note_1 = __importDefault(__webpack_require__(/*! ../nbs/Note */ "./nbs/Note.ts"));\nconst Layer_1 = __importDefault(__webpack_require__(/*! ../nbs/Layer */ "./nbs/Layer.ts"));\nclass Buffer {\n    constructor(buffer) {\n        this.currentByte = 0;\n        this.buffer = buffer;\n        this.viewer = new DataView(buffer);\n    }\n}\nclass BufferReader extends Buffer {\n    readByte() {\n        const result = this.viewer.getInt8(this.currentByte);\n        this.currentByte += 1;\n        return result;\n    }\n    readUnsingedByte() {\n        const result = this.viewer.getUint8(this.currentByte);\n        this.currentByte += 1;\n        return result;\n    }\n    readShort() {\n        const result = this.viewer.getInt16(this.currentByte, true);\n        this.currentByte += 2;\n        return result;\n    }\n    readInt() {\n        const result = this.viewer.getInt32(this.currentByte, true);\n        this.currentByte += 4;\n        return result;\n    }\n    readString() {\n        const length = this.readInt();\n        let result = "";\n        for (let i = 0; i < length; i++) {\n            const byte = this.readUnsingedByte();\n            result += String.fromCodePoint(byte);\n        }\n        return result;\n    }\n}\nexports.BufferReader = BufferReader;\nclass BufferWriter extends Buffer {\n    constructor(buffer, dry = false) {\n        super(buffer);\n        this.dry = dry;\n    }\n    writeByte(val) {\n        if (!this.dry) {\n            this.viewer.setInt8(this.currentByte, Math.floor(val));\n        }\n        this.currentByte += 1;\n    }\n    writeUnsignedByte(val) {\n        if (!this.dry) {\n            this.viewer.setUint8(this.currentByte, val);\n        }\n        this.currentByte += 1;\n    }\n    writeShort(val) {\n        if (!this.dry) {\n            this.viewer.setInt16(this.currentByte, val, true);\n        }\n        this.currentByte += 2;\n    }\n    writeInt(val) {\n        if (!this.dry) {\n            this.viewer.setInt32(this.currentByte, val, true);\n        }\n        this.currentByte += 4;\n    }\n    writeString(val) {\n        this.writeInt(val.length);\n        for (const i of val) {\n            // eslint-disable-next-line unicorn/prefer-code-point\n            this.writeUnsignedByte(i.charCodeAt(0));\n        }\n    }\n}\nexports.BufferWriter = BufferWriter;\nlet LayerClass = Layer_1.default;\nlet NoteClass = Note_1.default;\nlet InstrumentClass = Instrument_1.default;\n/**\n * Get the {@linkcode Layer} class.\n *\n * Utilized when a specialized layer class is required.\n */\nfunction getLayerClass() {\n    return LayerClass;\n}\nexports.getLayerClass = getLayerClass;\n/**\n * Set the layer class.\n *\n * Utilized when a specialized layer class is required.\n *\n * @example\n * ```js\n * import { Layer, setLayerClass } from "@encode42/nbs.js"\n *\n * class CustomLayer extends Layer {\n *      // Whether the layer is a custom layer\n *      isCustomLayer = false;\n * }\n *\n * setLayerClass(CustomLayer);\n * ```\n */\nfunction setLayerClass(clazz) {\n    LayerClass = clazz;\n}\nexports.setLayerClass = setLayerClass;\n/**\n * Get the {@linkcode Note} class.\n *\n * Utilized when a specialized note class is required.\n */\nfunction getNoteClass() {\n    return NoteClass;\n}\nexports.getNoteClass = getNoteClass;\n/**\n * Set the note class.\n *\n * Utilized when a specialized note class is required.\n *\n * @example\n * ```js\n * import { Note, setNoteClass } from "@encode42/nbs.js"\n *\n * class CustomNote extends Note {\n *      // The last tick the note was played.\n *      lastPlayed = 0;\n * }\n *\n * setNoteClass(CustomNote);\n * ```\n */\nfunction setNoteClass(clazz) {\n    NoteClass = clazz;\n}\nexports.setNoteClass = setNoteClass;\n/**\n * Get the {@linkcode Instrument} class.\n *\n * Utilized when a specialized instrument class is required.\n */\nfunction getInstrumentClass() {\n    return InstrumentClass;\n}\nexports.getInstrumentClass = getInstrumentClass;\n/**\n * Set the instrument class.\n *\n * Utilized when a specialized instrument class is required.\n *\n * @example\n * ```js\n * import { Instrument, setInstrumentClass } from "@encode42/nbs.js"\n *\n * class CustomInstrument extends Instrument {\n *      // Texture source file of the instrument.\n *      textureSrc = "";\n * }\n *\n * setInstrumentClass(CustomInstrument);\n * ```\n */\nfunction setInstrumentClass(clazz) {\n    InstrumentClass = clazz;\n}\nexports.setInstrumentClass = setInstrumentClass;\n\n\n//# sourceURL=webpack://NBSjs/./util/util.ts?')}},__webpack_module_cache__={};function __webpack_require__(n){var e=__webpack_module_cache__[n];if(void 0!==e)return e.exports;e=__webpack_module_cache__[n]={exports:{}};return __webpack_modules__[n].call(e.exports,e,e.exports,__webpack_require__),e.exports}var __webpack_exports__=__webpack_require__("./app.ts");self.NBSjs=__webpack_exports__.default})();