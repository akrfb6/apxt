(self.webpackChunkapp_apexar = self.webpackChunkapp_apexar || []).push([[293], {
    7206: K=>{
        "use strict";
        var f = {
            single_source_shortest_paths: function(v, u, g) {
                var d = {}
                  , h = {};
                h[u] = 0;
                var w, b, p, $, R, O, m = f.PriorityQueue.make();
                for (m.push(u, 0); !m.empty(); )
                    for (p in $ = (w = m.pop()).cost,
                    R = v[b = w.value] || {})
                        R.hasOwnProperty(p) && (O = $ + R[p],
                        (typeof h[p] > "u" || h[p] > O) && (h[p] = O,
                        m.push(p, O),
                        d[p] = b));
                if (typeof g < "u" && typeof h[g] > "u") {
                    var q = ["Could not find a path from ", u, " to ", g, "."].join("");
                    throw new Error(q)
                }
                return d
            },
            extract_shortest_path_from_predecessor_list: function(v, u) {
                for (var g = [], d = u; d; )
                    g.push(d),
                    d = v[d];
                return g.reverse(),
                g
            },
            find_path: function(v, u, g) {
                var d = f.single_source_shortest_paths(v, u, g);
                return f.extract_shortest_path_from_predecessor_list(d, g)
            },
            PriorityQueue: {
                make: function(v) {
                    var d, u = f.PriorityQueue, g = {};
                    for (d in v = v || {},
                    u)
                        u.hasOwnProperty(d) && (g[d] = u[d]);
                    return g.queue = [],
                    g.sorter = v.sorter || u.default_sorter,
                    g
                },
                default_sorter: function(v, u) {
                    return v.cost - u.cost
                },
                push: function(v, u) {
                    this.queue.push({
                        value: v,
                        cost: u
                    }),
                    this.queue.sort(this.sorter)
                },
                pop: function() {
                    return this.queue.shift()
                },
                empty: function() {
                    return 0 === this.queue.length
                }
            }
        };
        K.exports = f
    }
    ,
    6119: K=>{
        "use strict";
        K.exports = function(v) {
            for (var u = [], g = v.length, d = 0; d < g; d++) {
                var h = v.charCodeAt(d);
                if (h >= 55296 && h <= 56319 && g > d + 1) {
                    var m = v.charCodeAt(d + 1);
                    m >= 56320 && m <= 57343 && (h = 1024 * (h - 55296) + m - 56320 + 65536,
                    d += 1)
                }
                h < 128 ? u.push(h) : h < 2048 ? (u.push(h >> 6 | 192),
                u.push(63 & h | 128)) : h < 55296 || h >= 57344 && h < 65536 ? (u.push(h >> 12 | 224),
                u.push(h >> 6 & 63 | 128),
                u.push(63 & h | 128)) : h >= 65536 && h <= 1114111 ? (u.push(h >> 18 | 240),
                u.push(h >> 12 & 63 | 128),
                u.push(h >> 6 & 63 | 128),
                u.push(63 & h | 128)) : u.push(239, 191, 189)
            }
            return new Uint8Array(u).buffer
        }
    }
    ,
    8251: (K,f,v)=>{
        const u = v(8310)
          , g = v(6208)
          , d = v(6422)
          , h = v(7772);
        function m(w, b, p, $, R) {
            const Z = [].slice.call(arguments, 1)
              , O = Z.length
              , k = "function" == typeof Z[O - 1];
            if (!k && !u())
                throw new Error("Callback required as last argument");
            if (!k) {
                if (O < 1)
                    throw new Error("Too few arguments provided");
                return 1 === O ? (p = b,
                b = $ = void 0) : 2 === O && !b.getContext && ($ = p,
                p = b,
                b = void 0),
                new Promise(function(L, q) {
                    try {
                        const lt = g.create(p, $);
                        L(w(lt, b, $))
                    } catch (lt) {
                        q(lt)
                    }
                }
                )
            }
            if (O < 2)
                throw new Error("Too few arguments provided");
            2 === O ? (R = p,
            p = b,
            b = $ = void 0) : 3 === O && (b.getContext && typeof R > "u" ? (R = $,
            $ = void 0) : (R = $,
            $ = p,
            p = b,
            b = void 0));
            try {
                const L = g.create(p, $);
                R(null, w(L, b, $))
            } catch (L) {
                R(L)
            }
        }
        f.create = g.create,
        f.toCanvas = m.bind(null, d.render),
        f.toDataURL = m.bind(null, d.renderToDataURL),
        f.toString = m.bind(null, function(w, b, p) {
            return h.render(w, p)
        })
    }
    ,
    8310: K=>{
        K.exports = function() {
            return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
        }
    }
    ,
    5281: (K,f,v)=>{
        const u = v(2562).getSymbolSize;
        f.getRowColCoords = function(d) {
            if (1 === d)
                return [];
            const h = Math.floor(d / 7) + 2
              , m = u(d)
              , w = 145 === m ? 26 : 2 * Math.ceil((m - 13) / (2 * h - 2))
              , b = [m - 7];
            for (let p = 1; p < h - 1; p++)
                b[p] = b[p - 1] - w;
            return b.push(6),
            b.reverse()
        }
        ,
        f.getPositions = function(d) {
            const h = []
              , m = f.getRowColCoords(d)
              , w = m.length;
            for (let b = 0; b < w; b++)
                for (let p = 0; p < w; p++)
                    0 === b && 0 === p || 0 === b && p === w - 1 || b === w - 1 && 0 === p || h.push([m[b], m[p]]);
            return h
        }
    }
    ,
    120: (K,f,v)=>{
        const u = v(1239)
          , g = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
        function d(h) {
            this.mode = u.ALPHANUMERIC,
            this.data = h
        }
        d.getBitsLength = function(m) {
            return 11 * Math.floor(m / 2) + m % 2 * 6
        }
        ,
        d.prototype.getLength = function() {
            return this.data.length
        }
        ,
        d.prototype.getBitsLength = function() {
            return d.getBitsLength(this.data.length)
        }
        ,
        d.prototype.write = function(m) {
            let w;
            for (w = 0; w + 2 <= this.data.length; w += 2) {
                let b = 45 * g.indexOf(this.data[w]);
                b += g.indexOf(this.data[w + 1]),
                m.put(b, 11)
            }
            this.data.length % 2 && m.put(g.indexOf(this.data[w]), 6)
        }
        ,
        K.exports = d
    }
    ,
    6509: K=>{
        function f() {
            this.buffer = [],
            this.length = 0
        }
        f.prototype = {
            get: function(v) {
                const u = Math.floor(v / 8);
                return 1 == (this.buffer[u] >>> 7 - v % 8 & 1)
            },
            put: function(v, u) {
                for (let g = 0; g < u; g++)
                    this.putBit(1 == (v >>> u - g - 1 & 1))
            },
            getLengthInBits: function() {
                return this.length
            },
            putBit: function(v) {
                const u = Math.floor(this.length / 8);
                this.buffer.length <= u && this.buffer.push(0),
                v && (this.buffer[u] |= 128 >>> this.length % 8),
                this.length++
            }
        },
        K.exports = f
    }
    ,
    5147: K=>{
        function f(v) {
            if (!v || v < 1)
                throw new Error("BitMatrix size must be defined and greater than 0");
            this.size = v,
            this.data = new Uint8Array(v * v),
            this.reservedBit = new Uint8Array(v * v)
        }
        f.prototype.set = function(v, u, g, d) {
            const h = v * this.size + u;
            this.data[h] = g,
            d && (this.reservedBit[h] = !0)
        }
        ,
        f.prototype.get = function(v, u) {
            return this.data[v * this.size + u]
        }
        ,
        f.prototype.xor = function(v, u, g) {
            this.data[v * this.size + u] ^= g
        }
        ,
        f.prototype.isReserved = function(v, u) {
            return this.reservedBit[v * this.size + u]
        }
        ,
        K.exports = f
    }
    ,
    6339: (K,f,v)=>{
        const u = v(6119)
          , g = v(1239);
        function d(h) {
            this.mode = g.BYTE,
            "string" == typeof h && (h = u(h)),
            this.data = new Uint8Array(h)
        }
        d.getBitsLength = function(m) {
            return 8 * m
        }
        ,
        d.prototype.getLength = function() {
            return this.data.length
        }
        ,
        d.prototype.getBitsLength = function() {
            return d.getBitsLength(this.data.length)
        }
        ,
        d.prototype.write = function(h) {
            for (let m = 0, w = this.data.length; m < w; m++)
                h.put(this.data[m], 8)
        }
        ,
        K.exports = d
    }
    ,
    7191: (K,f,v)=>{
        const u = v(4505)
          , g = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81]
          , d = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
        f.getBlocksCount = function(m, w) {
            switch (w) {
            case u.L:
                return g[4 * (m - 1) + 0];
            case u.M:
                return g[4 * (m - 1) + 1];
            case u.Q:
                return g[4 * (m - 1) + 2];
            case u.H:
                return g[4 * (m - 1) + 3];
            default:
                return
            }
        }
        ,
        f.getTotalCodewordsCount = function(m, w) {
            switch (w) {
            case u.L:
                return d[4 * (m - 1) + 0];
            case u.M:
                return d[4 * (m - 1) + 1];
            case u.Q:
                return d[4 * (m - 1) + 2];
            case u.H:
                return d[4 * (m - 1) + 3];
            default:
                return
            }
        }
    }
    ,
    4505: (K,f)=>{
        f.L = {
            bit: 1
        },
        f.M = {
            bit: 0
        },
        f.Q = {
            bit: 3
        },
        f.H = {
            bit: 2
        },
        f.isValid = function(g) {
            return g && typeof g.bit < "u" && g.bit >= 0 && g.bit < 4
        }
        ,
        f.from = function(g, d) {
            if (f.isValid(g))
                return g;
            try {
                return function v(u) {
                    if ("string" != typeof u)
                        throw new Error("Param is not a string");
                    switch (u.toLowerCase()) {
                    case "l":
                    case "low":
                        return f.L;
                    case "m":
                    case "medium":
                        return f.M;
                    case "q":
                    case "quartile":
                        return f.Q;
                    case "h":
                    case "high":
                        return f.H;
                    default:
                        throw new Error("Unknown EC Level: " + u)
                    }
                }(g)
            } catch {
                return d
            }
        }
    }
    ,
    5232: (K,f,v)=>{
        const u = v(2562).getSymbolSize;
        f.getPositions = function(h) {
            const m = u(h);
            return [[0, 0], [m - 7, 0], [0, m - 7]]
        }
    }
    ,
    8508: (K,f,v)=>{
        const u = v(2562)
          , h = u.getBCHDigit(1335);
        f.getEncodedBits = function(w, b) {
            const p = w.bit << 3 | b;
            let $ = p << 10;
            for (; u.getBCHDigit($) - h >= 0; )
                $ ^= 1335 << u.getBCHDigit($) - h;
            return 21522 ^ (p << 10 | $)
        }
    }
    ,
    1674: (K,f)=>{
        const v = new Uint8Array(512)
          , u = new Uint8Array(256);
        (function() {
            let d = 1;
            for (let h = 0; h < 255; h++)
                v[h] = d,
                u[d] = h,
                d <<= 1,
                256 & d && (d ^= 285);
            for (let h = 255; h < 512; h++)
                v[h] = v[h - 255]
        }
        )(),
        f.log = function(d) {
            if (d < 1)
                throw new Error("log(" + d + ")");
            return u[d]
        }
        ,
        f.exp = function(d) {
            return v[d]
        }
        ,
        f.mul = function(d, h) {
            return 0 === d || 0 === h ? 0 : v[u[d] + u[h]]
        }
    }
    ,
    9995: (K,f,v)=>{
        const u = v(1239)
          , g = v(2562);
        function d(h) {
            this.mode = u.KANJI,
            this.data = h
        }
        d.getBitsLength = function(m) {
            return 13 * m
        }
        ,
        d.prototype.getLength = function() {
            return this.data.length
        }
        ,
        d.prototype.getBitsLength = function() {
            return d.getBitsLength(this.data.length)
        }
        ,
        d.prototype.write = function(h) {
            let m;
            for (m = 0; m < this.data.length; m++) {
                let w = g.toSJIS(this.data[m]);
                if (w >= 33088 && w <= 40956)
                    w -= 33088;
                else {
                    if (!(w >= 57408 && w <= 60351))
                        throw new Error("Invalid SJIS character: " + this.data[m] + "\nMake sure your charset is UTF-8");
                    w -= 49472
                }
                w = 192 * (w >>> 8 & 255) + (255 & w),
                h.put(w, 13)
            }
        }
        ,
        K.exports = d
    }
    ,
    9023: (K,f)=>{
        f.Patterns = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7
        };
        function u(g, d, h) {
            switch (g) {
            case f.Patterns.PATTERN000:
                return (d + h) % 2 == 0;
            case f.Patterns.PATTERN001:
                return d % 2 == 0;
            case f.Patterns.PATTERN010:
                return h % 3 == 0;
            case f.Patterns.PATTERN011:
                return (d + h) % 3 == 0;
            case f.Patterns.PATTERN100:
                return (Math.floor(d / 2) + Math.floor(h / 3)) % 2 == 0;
            case f.Patterns.PATTERN101:
                return d * h % 2 + d * h % 3 == 0;
            case f.Patterns.PATTERN110:
                return (d * h % 2 + d * h % 3) % 2 == 0;
            case f.Patterns.PATTERN111:
                return (d * h % 3 + (d + h) % 2) % 2 == 0;
            default:
                throw new Error("bad maskPattern:" + g)
            }
        }
        f.isValid = function(d) {
            return null != d && "" !== d && !isNaN(d) && d >= 0 && d <= 7
        }
        ,
        f.from = function(d) {
            return f.isValid(d) ? parseInt(d, 10) : void 0
        }
        ,
        f.getPenaltyN1 = function(d) {
            const h = d.size;
            let m = 0
              , w = 0
              , b = 0
              , p = null
              , $ = null;
            for (let R = 0; R < h; R++) {
                w = b = 0,
                p = $ = null;
                for (let Z = 0; Z < h; Z++) {
                    let O = d.get(R, Z);
                    O === p ? w++ : (w >= 5 && (m += w - 5 + 3),
                    p = O,
                    w = 1),
                    O = d.get(Z, R),
                    O === $ ? b++ : (b >= 5 && (m += b - 5 + 3),
                    $ = O,
                    b = 1)
                }
                w >= 5 && (m += w - 5 + 3),
                b >= 5 && (m += b - 5 + 3)
            }
            return m
        }
        ,
        f.getPenaltyN2 = function(d) {
            const h = d.size;
            let m = 0;
            for (let w = 0; w < h - 1; w++)
                for (let b = 0; b < h - 1; b++) {
                    const p = d.get(w, b) + d.get(w, b + 1) + d.get(w + 1, b) + d.get(w + 1, b + 1);
                    (4 === p || 0 === p) && m++
                }
            return 3 * m
        }
        ,
        f.getPenaltyN3 = function(d) {
            const h = d.size;
            let m = 0
              , w = 0
              , b = 0;
            for (let p = 0; p < h; p++) {
                w = b = 0;
                for (let $ = 0; $ < h; $++)
                    w = w << 1 & 2047 | d.get(p, $),
                    $ >= 10 && (1488 === w || 93 === w) && m++,
                    b = b << 1 & 2047 | d.get($, p),
                    $ >= 10 && (1488 === b || 93 === b) && m++
            }
            return 40 * m
        }
        ,
        f.getPenaltyN4 = function(d) {
            let h = 0;
            const m = d.data.length;
            for (let b = 0; b < m; b++)
                h += d.data[b];
            return 10 * Math.abs(Math.ceil(100 * h / m / 5) - 10)
        }
        ,
        f.applyMask = function(d, h) {
            const m = h.size;
            for (let w = 0; w < m; w++)
                for (let b = 0; b < m; b++)
                    h.isReserved(b, w) || h.xor(b, w, u(d, b, w))
        }
        ,
        f.getBestMask = function(d, h) {
            const m = Object.keys(f.Patterns).length;
            let w = 0
              , b = 1 / 0;
            for (let p = 0; p < m; p++) {
                h(p),
                f.applyMask(p, d);
                const $ = f.getPenaltyN1(d) + f.getPenaltyN2(d) + f.getPenaltyN3(d) + f.getPenaltyN4(d);
                f.applyMask(p, d),
                $ < b && (b = $,
                w = p)
            }
            return w
        }
    }
    ,
    1239: (K,f,v)=>{
        const u = v(6161)
          , g = v(2427);
        f.NUMERIC = {
            id: "Numeric",
            bit: 1,
            ccBits: [10, 12, 14]
        },
        f.ALPHANUMERIC = {
            id: "Alphanumeric",
            bit: 2,
            ccBits: [9, 11, 13]
        },
        f.BYTE = {
            id: "Byte",
            bit: 4,
            ccBits: [8, 16, 16]
        },
        f.KANJI = {
            id: "Kanji",
            bit: 8,
            ccBits: [8, 10, 12]
        },
        f.MIXED = {
            bit: -1
        },
        f.getCharCountIndicator = function(m, w) {
            if (!m.ccBits)
                throw new Error("Invalid mode: " + m);
            if (!u.isValid(w))
                throw new Error("Invalid version: " + w);
            return w >= 1 && w < 10 ? m.ccBits[0] : w < 27 ? m.ccBits[1] : m.ccBits[2]
        }
        ,
        f.getBestModeForData = function(m) {
            return g.testNumeric(m) ? f.NUMERIC : g.testAlphanumeric(m) ? f.ALPHANUMERIC : g.testKanji(m) ? f.KANJI : f.BYTE
        }
        ,
        f.toString = function(m) {
            if (m && m.id)
                return m.id;
            throw new Error("Invalid mode")
        }
        ,
        f.isValid = function(m) {
            return m && m.bit && m.ccBits
        }
        ,
        f.from = function(m, w) {
            if (f.isValid(m))
                return m;
            try {
                return function d(h) {
                    if ("string" != typeof h)
                        throw new Error("Param is not a string");
                    switch (h.toLowerCase()) {
                    case "numeric":
                        return f.NUMERIC;
                    case "alphanumeric":
                        return f.ALPHANUMERIC;
                    case "kanji":
                        return f.KANJI;
                    case "byte":
                        return f.BYTE;
                    default:
                        throw new Error("Unknown mode: " + h)
                    }
                }(m)
            } catch {
                return w
            }
        }
    }
    ,
    4254: (K,f,v)=>{
        const u = v(1239);
        function g(d) {
            this.mode = u.NUMERIC,
            this.data = d.toString()
        }
        g.getBitsLength = function(h) {
            return 10 * Math.floor(h / 3) + (h % 3 ? h % 3 * 3 + 1 : 0)
        }
        ,
        g.prototype.getLength = function() {
            return this.data.length
        }
        ,
        g.prototype.getBitsLength = function() {
            return g.getBitsLength(this.data.length)
        }
        ,
        g.prototype.write = function(h) {
            let m, w, b;
            for (m = 0; m + 3 <= this.data.length; m += 3)
                w = this.data.substr(m, 3),
                b = parseInt(w, 10),
                h.put(b, 10);
            const p = this.data.length - m;
            p > 0 && (w = this.data.substr(m),
            b = parseInt(w, 10),
            h.put(b, 3 * p + 1))
        }
        ,
        K.exports = g
    }
    ,
    2376: (K,f,v)=>{
        const u = v(1674);
        f.mul = function(d, h) {
            const m = new Uint8Array(d.length + h.length - 1);
            for (let w = 0; w < d.length; w++)
                for (let b = 0; b < h.length; b++)
                    m[w + b] ^= u.mul(d[w], h[b]);
            return m
        }
        ,
        f.mod = function(d, h) {
            let m = new Uint8Array(d);
            for (; m.length - h.length >= 0; ) {
                const w = m[0];
                for (let p = 0; p < h.length; p++)
                    m[p] ^= u.mul(h[p], w);
                let b = 0;
                for (; b < m.length && 0 === m[b]; )
                    b++;
                m = m.slice(b)
            }
            return m
        }
        ,
        f.generateECPolynomial = function(d) {
            let h = new Uint8Array([1]);
            for (let m = 0; m < d; m++)
                h = f.mul(h, new Uint8Array([1, u.exp(m)]));
            return h
        }
    }
    ,
    6208: (K,f,v)=>{
        const u = v(2562)
          , g = v(4505)
          , d = v(6509)
          , h = v(5147)
          , m = v(5281)
          , w = v(5232)
          , b = v(9023)
          , p = v(7191)
          , $ = v(5410)
          , R = v(9467)
          , Z = v(8508)
          , O = v(1239)
          , k = v(1799);
        function H(I, B, M) {
            const A = I.size
              , W = Z.getEncodedBits(B, M);
            let S, T;
            for (S = 0; S < 15; S++)
                T = 1 == (W >> S & 1),
                I.set(S < 6 ? S : S < 8 ? S + 1 : A - 15 + S, 8, T, !0),
                I.set(8, S < 8 ? A - S - 1 : S < 9 ? 15 - S - 1 + 1 : 15 - S - 1, T, !0);
            I.set(A - 8, 8, 1, !0)
        }
        function dt(I, B, M, A) {
            let W;
            if (Array.isArray(I))
                W = k.fromArray(I);
            else {
                if ("string" != typeof I)
                    throw new Error("Invalid data");
                {
                    let xt = B;
                    if (!xt) {
                        const Ot = k.rawSplit(I);
                        xt = R.getBestVersionForData(Ot, M)
                    }
                    W = k.fromString(I, xt || 40)
                }
            }
            const S = R.getBestVersionForData(W, M);
            if (!S)
                throw new Error("The amount of data is too big to be stored in a QR Code");
            if (B) {
                if (B < S)
                    throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + S + ".\n")
            } else
                B = S;
            const T = function P(I, B, M) {
                const A = new d;
                M.forEach(function(D) {
                    A.put(D.mode.bit, 4),
                    A.put(D.getLength(), O.getCharCountIndicator(D.mode, I)),
                    D.write(A)
                });
                const T = 8 * (u.getSymbolTotalCodewords(I) - p.getTotalCodewordsCount(I, B));
                for (A.getLengthInBits() + 4 <= T && A.put(0, 4); A.getLengthInBits() % 8 != 0; )
                    A.putBit(0);
                const U = (T - A.getLengthInBits()) / 8;
                for (let D = 0; D < U; D++)
                    A.put(D % 2 ? 17 : 236, 8);
                return function at(I, B, M) {
                    const A = u.getSymbolTotalCodewords(B)
                      , S = A - p.getTotalCodewordsCount(B, M)
                      , T = p.getBlocksCount(B, M)
                      , D = T - A % T
                      , xt = Math.floor(A / T)
                      , Ot = Math.floor(S / T)
                      , re = Ot + 1
                      , Tt = xt - Ot
                      , we = new $(Tt);
                    let zt = 0;
                    const bt = new Array(T)
                      , ne = new Array(T);
                    let Ht = 0;
                    const ve = new Uint8Array(I.buffer);
                    for (let it = 0; it < T; it++) {
                        const Vt = it < D ? Ot : re;
                        bt[it] = ve.slice(zt, zt + Vt),
                        ne[it] = we.encode(bt[it]),
                        zt += Vt,
                        Ht = Math.max(Ht, Vt)
                    }
                    const Ft = new Uint8Array(A);
                    let rt, gt, C = 0;
                    for (rt = 0; rt < Ht; rt++)
                        for (gt = 0; gt < T; gt++)
                            rt < bt[gt].length && (Ft[C++] = bt[gt][rt]);
                    for (rt = 0; rt < Tt; rt++)
                        for (gt = 0; gt < T; gt++)
                            Ft[C++] = ne[gt][rt];
                    return Ft
                }(A, I, B)
            }(B, M, W)
              , U = u.getSymbolSize(B)
              , D = new h(U);
            return function L(I, B) {
                const M = I.size
                  , A = w.getPositions(B);
                for (let W = 0; W < A.length; W++) {
                    const S = A[W][0]
                      , T = A[W][1];
                    for (let U = -1; U <= 7; U++)
                        if (!(S + U <= -1 || M <= S + U))
                            for (let D = -1; D <= 7; D++)
                                T + D <= -1 || M <= T + D || I.set(S + U, T + D, U >= 0 && U <= 6 && (0 === D || 6 === D) || D >= 0 && D <= 6 && (0 === U || 6 === U) || U >= 2 && U <= 4 && D >= 2 && D <= 4, !0)
                }
            }(D, B),
            function q(I) {
                const B = I.size;
                for (let M = 8; M < B - 8; M++) {
                    const A = M % 2 == 0;
                    I.set(M, 6, A, !0),
                    I.set(6, M, A, !0)
                }
            }(D),
            function lt(I, B) {
                const M = m.getPositions(B);
                for (let A = 0; A < M.length; A++) {
                    const W = M[A][0]
                      , S = M[A][1];
                    for (let T = -2; T <= 2; T++)
                        for (let U = -2; U <= 2; U++)
                            I.set(W + T, S + U, -2 === T || 2 === T || -2 === U || 2 === U || 0 === T && 0 === U, !0)
                }
            }(D, B),
            H(D, M, 0),
            B >= 7 && function z(I, B) {
                const M = I.size
                  , A = R.getEncodedBits(B);
                let W, S, T;
                for (let U = 0; U < 18; U++)
                    W = Math.floor(U / 3),
                    S = U % 3 + M - 8 - 3,
                    T = 1 == (A >> U & 1),
                    I.set(W, S, T, !0),
                    I.set(S, W, T, !0)
            }(D, B),
            function N(I, B) {
                const M = I.size;
                let A = -1
                  , W = M - 1
                  , S = 7
                  , T = 0;
                for (let U = M - 1; U > 0; U -= 2)
                    for (6 === U && U--; ; ) {
                        for (let D = 0; D < 2; D++)
                            if (!I.isReserved(W, U - D)) {
                                let xt = !1;
                                T < B.length && (xt = 1 == (B[T] >>> S & 1)),
                                I.set(W, U - D, xt),
                                S--,
                                -1 === S && (T++,
                                S = 7)
                            }
                        if (W += A,
                        W < 0 || M <= W) {
                            W -= A,
                            A = -A;
                            break
                        }
                    }
            }(D, T),
            isNaN(A) && (A = b.getBestMask(D, H.bind(null, D, M))),
            b.applyMask(A, D),
            H(D, M, A),
            {
                modules: D,
                version: B,
                errorCorrectionLevel: M,
                maskPattern: A,
                segments: W
            }
        }
        f.create = function(B, M) {
            if (typeof B > "u" || "" === B)
                throw new Error("No input text");
            let W, S, A = g.M;
            return typeof M < "u" && (A = g.from(M.errorCorrectionLevel, g.M),
            W = R.from(M.version),
            S = b.from(M.maskPattern),
            M.toSJISFunc && u.setToSJISFunction(M.toSJISFunc)),
            dt(B, W, A, S)
        }
    }
    ,
    5410: (K,f,v)=>{
        const u = v(2376);
        function g(d) {
            this.genPoly = void 0,
            this.degree = d,
            this.degree && this.initialize(this.degree)
        }
        g.prototype.initialize = function(h) {
            this.degree = h,
            this.genPoly = u.generateECPolynomial(this.degree)
        }
        ,
        g.prototype.encode = function(h) {
            if (!this.genPoly)
                throw new Error("Encoder not initialized");
            const m = new Uint8Array(h.length + this.degree);
            m.set(h);
            const w = u.mod(m, this.genPoly)
              , b = this.degree - w.length;
            if (b > 0) {
                const p = new Uint8Array(this.degree);
                return p.set(w, b),
                p
            }
            return w
        }
        ,
        K.exports = g
    }
    ,
    2427: (K,f)=>{
        const v = "[0-9]+";
        let g = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
        g = g.replace(/u/g, "\\u");
        const d = "(?:(?![A-Z0-9 $%*+\\-./:]|" + g + ")(?:.|[\r\n]))+";
        f.KANJI = new RegExp(g,"g"),
        f.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),
        f.BYTE = new RegExp(d,"g"),
        f.NUMERIC = new RegExp(v,"g"),
        f.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+","g");
        const h = new RegExp("^" + g + "$")
          , m = new RegExp("^" + v + "$")
          , w = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
        f.testKanji = function(p) {
            return h.test(p)
        }
        ,
        f.testNumeric = function(p) {
            return m.test(p)
        }
        ,
        f.testAlphanumeric = function(p) {
            return w.test(p)
        }
    }
    ,
    1799: (K,f,v)=>{
        const u = v(1239)
          , g = v(4254)
          , d = v(120)
          , h = v(6339)
          , m = v(9995)
          , w = v(2427)
          , b = v(2562)
          , p = v(7206);
        function $(z) {
            return unescape(encodeURIComponent(z)).length
        }
        function R(z, H, N) {
            const P = [];
            let at;
            for (; null !== (at = z.exec(N)); )
                P.push({
                    data: at[0],
                    index: at.index,
                    mode: H,
                    length: at[0].length
                });
            return P
        }
        function Z(z) {
            const H = R(w.NUMERIC, u.NUMERIC, z)
              , N = R(w.ALPHANUMERIC, u.ALPHANUMERIC, z);
            let P, at;
            return b.isKanjiModeEnabled() ? (P = R(w.BYTE, u.BYTE, z),
            at = R(w.KANJI, u.KANJI, z)) : (P = R(w.BYTE_KANJI, u.BYTE, z),
            at = []),
            H.concat(N, P, at).sort(function(I, B) {
                return I.index - B.index
            }).map(function(I) {
                return {
                    data: I.data,
                    mode: I.mode,
                    length: I.length
                }
            })
        }
        function O(z, H) {
            switch (H) {
            case u.NUMERIC:
                return g.getBitsLength(z);
            case u.ALPHANUMERIC:
                return d.getBitsLength(z);
            case u.KANJI:
                return m.getBitsLength(z);
            case u.BYTE:
                return h.getBitsLength(z)
            }
        }
        function lt(z, H) {
            let N;
            const P = u.getBestModeForData(z);
            if (N = u.from(H, P),
            N !== u.BYTE && N.bit < P.bit)
                throw new Error('"' + z + '" cannot be encoded with mode ' + u.toString(N) + ".\n Suggested mode is: " + u.toString(P));
            switch (N === u.KANJI && !b.isKanjiModeEnabled() && (N = u.BYTE),
            N) {
            case u.NUMERIC:
                return new g(z);
            case u.ALPHANUMERIC:
                return new d(z);
            case u.KANJI:
                return new m(z);
            case u.BYTE:
                return new h(z)
            }
        }
        f.fromArray = function(H) {
            return H.reduce(function(N, P) {
                return "string" == typeof P ? N.push(lt(P, null)) : P.data && N.push(lt(P.data, P.mode)),
                N
            }, [])
        }
        ,
        f.fromString = function(H, N) {
            const at = function L(z) {
                const H = [];
                for (let N = 0; N < z.length; N++) {
                    const P = z[N];
                    switch (P.mode) {
                    case u.NUMERIC:
                        H.push([P, {
                            data: P.data,
                            mode: u.ALPHANUMERIC,
                            length: P.length
                        }, {
                            data: P.data,
                            mode: u.BYTE,
                            length: P.length
                        }]);
                        break;
                    case u.ALPHANUMERIC:
                        H.push([P, {
                            data: P.data,
                            mode: u.BYTE,
                            length: P.length
                        }]);
                        break;
                    case u.KANJI:
                        H.push([P, {
                            data: P.data,
                            mode: u.BYTE,
                            length: $(P.data)
                        }]);
                        break;
                    case u.BYTE:
                        H.push([{
                            data: P.data,
                            mode: u.BYTE,
                            length: $(P.data)
                        }])
                    }
                }
                return H
            }(Z(H, b.isKanjiModeEnabled()))
              , dt = function q(z, H) {
                const N = {}
                  , P = {
                    start: {}
                };
                let at = ["start"];
                for (let dt = 0; dt < z.length; dt++) {
                    const I = z[dt]
                      , B = [];
                    for (let M = 0; M < I.length; M++) {
                        const A = I[M]
                          , W = "" + dt + M;
                        B.push(W),
                        N[W] = {
                            node: A,
                            lastCount: 0
                        },
                        P[W] = {};
                        for (let S = 0; S < at.length; S++) {
                            const T = at[S];
                            N[T] && N[T].node.mode === A.mode ? (P[T][W] = O(N[T].lastCount + A.length, A.mode) - O(N[T].lastCount, A.mode),
                            N[T].lastCount += A.length) : (N[T] && (N[T].lastCount = A.length),
                            P[T][W] = O(A.length, A.mode) + 4 + u.getCharCountIndicator(A.mode, H))
                        }
                    }
                    at = B
                }
                for (let dt = 0; dt < at.length; dt++)
                    P[at[dt]].end = 0;
                return {
                    map: P,
                    table: N
                }
            }(at, N)
              , I = p.find_path(dt.map, "start", "end")
              , B = [];
            for (let M = 1; M < I.length - 1; M++)
                B.push(dt.table[I[M]].node);
            return f.fromArray(function k(z) {
                return z.reduce(function(H, N) {
                    const P = H.length - 1 >= 0 ? H[H.length - 1] : null;
                    return P && P.mode === N.mode ? (H[H.length - 1].data += N.data,
                    H) : (H.push(N),
                    H)
                }, [])
            }(B))
        }
        ,
        f.rawSplit = function(H) {
            return f.fromArray(Z(H, b.isKanjiModeEnabled()))
        }
    }
    ,
    2562: (K,f)=>{
        let v;
        const u = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
        f.getSymbolSize = function(d) {
            if (!d)
                throw new Error('"version" cannot be null or undefined');
            if (d < 1 || d > 40)
                throw new Error('"version" should be in range from 1 to 40');
            return 4 * d + 17
        }
        ,
        f.getSymbolTotalCodewords = function(d) {
            return u[d]
        }
        ,
        f.getBCHDigit = function(g) {
            let d = 0;
            for (; 0 !== g; )
                d++,
                g >>>= 1;
            return d
        }
        ,
        f.setToSJISFunction = function(d) {
            if ("function" != typeof d)
                throw new Error('"toSJISFunc" is not a valid function.');
            v = d
        }
        ,
        f.isKanjiModeEnabled = function() {
            return typeof v < "u"
        }
        ,
        f.toSJIS = function(d) {
            return v(d)
        }
    }
    ,
    6161: (K,f)=>{
        f.isValid = function(u) {
            return !isNaN(u) && u >= 1 && u <= 40
        }
    }
    ,
    9467: (K,f,v)=>{
        const u = v(2562)
          , g = v(7191)
          , d = v(4505)
          , h = v(1239)
          , m = v(6161)
          , b = u.getBCHDigit(7973);
        function $(O, k) {
            return h.getCharCountIndicator(O, k) + 4
        }
        function R(O, k) {
            let L = 0;
            return O.forEach(function(q) {
                const lt = $(q.mode, k);
                L += lt + q.getBitsLength()
            }),
            L
        }
        f.from = function(k, L) {
            return m.isValid(k) ? parseInt(k, 10) : L
        }
        ,
        f.getCapacity = function(k, L, q) {
            if (!m.isValid(k))
                throw new Error("Invalid QR Code version");
            typeof q > "u" && (q = h.BYTE);
            const H = 8 * (u.getSymbolTotalCodewords(k) - g.getTotalCodewordsCount(k, L));
            if (q === h.MIXED)
                return H;
            const N = H - $(q, k);
            switch (q) {
            case h.NUMERIC:
                return Math.floor(N / 10 * 3);
            case h.ALPHANUMERIC:
                return Math.floor(N / 11 * 2);
            case h.KANJI:
                return Math.floor(N / 13);
            default:
                return Math.floor(N / 8)
            }
        }
        ,
        f.getBestVersionForData = function(k, L) {
            let q;
            const lt = d.from(L, d.M);
            if (Array.isArray(k)) {
                if (k.length > 1)
                    return function Z(O, k) {
                        for (let L = 1; L <= 40; L++)
                            if (R(O, L) <= f.getCapacity(L, k, h.MIXED))
                                return L
                    }(k, lt);
                if (0 === k.length)
                    return 1;
                q = k[0]
            } else
                q = k;
            return function p(O, k, L) {
                for (let q = 1; q <= 40; q++)
                    if (k <= f.getCapacity(q, L, O))
                        return q
            }(q.mode, q.getLength(), lt)
        }
        ,
        f.getEncodedBits = function(k) {
            if (!m.isValid(k) || k < 7)
                throw new Error("Invalid QR Code version");
            let L = k << 12;
            for (; u.getBCHDigit(L) - b >= 0; )
                L ^= 7973 << u.getBCHDigit(L) - b;
            return k << 12 | L
        }
    }
    ,
    6422: (K,f,v)=>{
        const u = v(1101);
        f.render = function(m, w, b) {
            let p = b
              , $ = w;
            typeof p > "u" && (!w || !w.getContext) && (p = w,
            w = void 0),
            w || ($ = function d() {
                try {
                    return document.createElement("canvas")
                } catch {
                    throw new Error("You need to specify a canvas element")
                }
            }()),
            p = u.getOptions(p);
            const R = u.getImageWidth(m.modules.size, p)
              , Z = $.getContext("2d")
              , O = Z.createImageData(R, R);
            return u.qrToImageData(O.data, m, p),
            function g(h, m, w) {
                h.clearRect(0, 0, m.width, m.height),
                m.style || (m.style = {}),
                m.height = w,
                m.width = w,
                m.style.height = w + "px",
                m.style.width = w + "px"
            }(Z, $, R),
            Z.putImageData(O, 0, 0),
            $
        }
        ,
        f.renderToDataURL = function(m, w, b) {
            let p = b;
            return typeof p > "u" && (!w || !w.getContext) && (p = w,
            w = void 0),
            p || (p = {}),
            f.render(m, w, p).toDataURL(p.type || "image/png", (p.rendererOpts || {}).quality)
        }
    }
    ,
    7772: (K,f,v)=>{
        const u = v(1101);
        function g(m, w) {
            const b = m.a / 255
              , p = w + '="' + m.hex + '"';
            return b < 1 ? p + " " + w + '-opacity="' + b.toFixed(2).slice(1) + '"' : p
        }
        function d(m, w, b) {
            let p = m + w;
            return typeof b < "u" && (p += " " + b),
            p
        }
        f.render = function(w, b, p) {
            const $ = u.getOptions(b)
              , R = w.modules.size
              , Z = w.modules.data
              , O = R + 2 * $.margin
              , k = $.color.light.a ? "<path " + g($.color.light, "fill") + ' d="M0 0h' + O + "v" + O + 'H0z"/>' : ""
              , L = "<path " + g($.color.dark, "stroke") + ' d="' + function h(m, w, b) {
                let p = ""
                  , $ = 0
                  , R = !1
                  , Z = 0;
                for (let O = 0; O < m.length; O++) {
                    const k = Math.floor(O % w)
                      , L = Math.floor(O / w);
                    !k && !R && (R = !0),
                    m[O] ? (Z++,
                    O > 0 && k > 0 && m[O - 1] || (p += R ? d("M", k + b, .5 + L + b) : d("m", $, 0),
                    $ = 0,
                    R = !1),
                    k + 1 < w && m[O + 1] || (p += d("h", Z),
                    Z = 0)) : $++
                }
                return p
            }(Z, R, $.margin) + '"/>'
              , z = '<svg xmlns="http://www.w3.org/2000/svg" ' + ($.width ? 'width="' + $.width + '" height="' + $.width + '" ' : "") + 'viewBox="0 0 ' + O + " " + O + '" shape-rendering="crispEdges">' + k + L + "</svg>\n";
            return "function" == typeof p && p(null, z),
            z
        }
    }
    ,
    1101: (K,f)=>{
        function v(u) {
            if ("number" == typeof u && (u = u.toString()),
            "string" != typeof u)
                throw new Error("Color should be defined as hex string");
            let g = u.slice().replace("#", "").split("");
            if (g.length < 3 || 5 === g.length || g.length > 8)
                throw new Error("Invalid hex color: " + u);
            (3 === g.length || 4 === g.length) && (g = Array.prototype.concat.apply([], g.map(function(h) {
                return [h, h]
            }))),
            6 === g.length && g.push("F", "F");
            const d = parseInt(g.join(""), 16);
            return {
                r: d >> 24 & 255,
                g: d >> 16 & 255,
                b: d >> 8 & 255,
                a: 255 & d,
                hex: "#" + g.slice(0, 6).join("")
            }
        }
        f.getOptions = function(g) {
            g || (g = {}),
            g.color || (g.color = {});
            const h = g.width && g.width >= 21 ? g.width : void 0;
            return {
                width: h,
                scale: h ? 4 : g.scale || 4,
                margin: typeof g.margin > "u" || null === g.margin || g.margin < 0 ? 4 : g.margin,
                color: {
                    dark: v(g.color.dark || "#000000ff"),
                    light: v(g.color.light || "#ffffffff")
                },
                type: g.type,
                rendererOpts: g.rendererOpts || {}
            }
        }
        ,
        f.getScale = function(g, d) {
            return d.width && d.width >= g + 2 * d.margin ? d.width / (g + 2 * d.margin) : d.scale
        }
        ,
        f.getImageWidth = function(g, d) {
            const h = f.getScale(g, d);
            return Math.floor((g + 2 * d.margin) * h)
        }
        ,
        f.qrToImageData = function(g, d, h) {
            const m = d.modules.size
              , w = d.modules.data
              , b = f.getScale(m, h)
              , p = Math.floor((m + 2 * h.margin) * b)
              , $ = h.margin * b
              , R = [h.color.light, h.color.dark];
            for (let Z = 0; Z < p; Z++)
                for (let O = 0; O < p; O++) {
                    let k = 4 * (Z * p + O)
                      , L = h.color.light;
                    Z >= $ && O >= $ && Z < p - $ && O < p - $ && (L = R[w[Math.floor((Z - $) / b) * m + Math.floor((O - $) / b)] ? 1 : 0]),
                    g[k++] = L.r,
                    g[k++] = L.g,
                    g[k++] = L.b,
                    g[k] = L.a
                }
        }
    }
    ,
    3293: (K,f,v)=>{
        "use strict";
        v.r(f),
        v.d(f, {
            WcmModal: ()=>ee,
            WcmQrCode: ()=>_t
        });
        var u = v(5861);
        const g = window
          , d = g.ShadowRoot && (void 0 === g.ShadyCSS || g.ShadyCSS.nativeShadow) && "adoptedStyleSheets"in Document.prototype && "replace"in CSSStyleSheet.prototype
          , h = Symbol()
          , m = new WeakMap;
        class w {
            constructor(r, i, l) {
                if (this._$cssResult$ = !0,
                l !== h)
                    throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                this.cssText = r,
                this.t = i
            }
            get styleSheet() {
                let r = this.o;
                const i = this.t;
                if (d && void 0 === r) {
                    const l = void 0 !== i && 1 === i.length;
                    l && (r = m.get(i)),
                    void 0 === r && ((this.o = r = new CSSStyleSheet).replaceSync(this.cssText),
                    l && m.set(i, r))
                }
                return r
            }
            toString() {
                return this.cssText
            }
        }
        const p = (n,...r)=>{
            const i = 1 === n.length ? n[0] : r.reduce((l,s,a)=>l + (c=>{
                if (!0 === c._$cssResult$)
                    return c.cssText;
                if ("number" == typeof c)
                    return c;
                throw Error("Value passed to 'css' function must be a 'css' function result: " + c + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
            }
            )(s) + n[a + 1], n[0]);
            return new w(i,n,h)
        }
          , R = d ? n=>n : n=>n instanceof CSSStyleSheet ? (r=>{
            let i = "";
            for (const l of r.cssRules)
                i += l.cssText;
            return (n=>new w("string" == typeof n ? n : n + "",void 0,h))(i)
        }
        )(n) : n;
        var Z;
        const O = window
          , k = O.trustedTypes
          , L = k ? k.emptyScript : ""
          , q = O.reactiveElementPolyfillSupport
          , lt = {
            toAttribute(n, r) {
                switch (r) {
                case Boolean:
                    n = n ? L : null;
                    break;
                case Object:
                case Array:
                    n = null == n ? n : JSON.stringify(n)
                }
                return n
            },
            fromAttribute(n, r) {
                let i = n;
                switch (r) {
                case Boolean:
                    i = null !== n;
                    break;
                case Number:
                    i = null === n ? null : Number(n);
                    break;
                case Object:
                case Array:
                    try {
                        i = JSON.parse(n)
                    } catch {
                        i = null
                    }
                }
                return i
            }
        }
          , z = (n,r)=>r !== n && (r == r || n == n)
          , H = {
            attribute: !0,
            type: String,
            converter: lt,
            reflect: !1,
            hasChanged: z
        }
          , N = "finalized";
        class P extends HTMLElement {
            constructor() {
                super(),
                this._$Ei = new Map,
                this.isUpdatePending = !1,
                this.hasUpdated = !1,
                this._$El = null,
                this._$Eu()
            }
            static addInitializer(r) {
                var i;
                this.finalize(),
                (null !== (i = this.h) && void 0 !== i ? i : this.h = []).push(r)
            }
            static get observedAttributes() {
                this.finalize();
                const r = [];
                return this.elementProperties.forEach((i,l)=>{
                    const s = this._$Ep(l, i);
                    void 0 !== s && (this._$Ev.set(s, l),
                    r.push(s))
                }
                ),
                r
            }
            static createProperty(r, i=H) {
                if (i.state && (i.attribute = !1),
                this.finalize(),
                this.elementProperties.set(r, i),
                !i.noAccessor && !this.prototype.hasOwnProperty(r)) {
                    const l = "symbol" == typeof r ? Symbol() : "__" + r
                      , s = this.getPropertyDescriptor(r, l, i);
                    void 0 !== s && Object.defineProperty(this.prototype, r, s)
                }
            }
            static getPropertyDescriptor(r, i, l) {
                return {
                    get() {
                        return this[i]
                    },
                    set(s) {
                        const a = this[r];
                        this[i] = s,
                        this.requestUpdate(r, a, l)
                    },
                    configurable: !0,
                    enumerable: !0
                }
            }
            static getPropertyOptions(r) {
                return this.elementProperties.get(r) || H
            }
            static finalize() {
                if (this.hasOwnProperty(N))
                    return !1;
                this[N] = !0;
                const r = Object.getPrototypeOf(this);
                if (r.finalize(),
                void 0 !== r.h && (this.h = [...r.h]),
                this.elementProperties = new Map(r.elementProperties),
                this._$Ev = new Map,
                this.hasOwnProperty("properties")) {
                    const i = this.properties
                      , l = [...Object.getOwnPropertyNames(i), ...Object.getOwnPropertySymbols(i)];
                    for (const s of l)
                        this.createProperty(s, i[s])
                }
                return this.elementStyles = this.finalizeStyles(this.styles),
                !0
            }
            static finalizeStyles(r) {
                const i = [];
                if (Array.isArray(r)) {
                    const l = new Set(r.flat(1 / 0).reverse());
                    for (const s of l)
                        i.unshift(R(s))
                } else
                    void 0 !== r && i.push(R(r));
                return i
            }
            static _$Ep(r, i) {
                const l = i.attribute;
                return !1 === l ? void 0 : "string" == typeof l ? l : "string" == typeof r ? r.toLowerCase() : void 0
            }
            _$Eu() {
                var r;
                this._$E_ = new Promise(i=>this.enableUpdating = i),
                this._$AL = new Map,
                this._$Eg(),
                this.requestUpdate(),
                null === (r = this.constructor.h) || void 0 === r || r.forEach(i=>i(this))
            }
            addController(r) {
                var i, l;
                (null !== (i = this._$ES) && void 0 !== i ? i : this._$ES = []).push(r),
                void 0 !== this.renderRoot && this.isConnected && (null === (l = r.hostConnected) || void 0 === l || l.call(r))
            }
            removeController(r) {
                var i;
                null === (i = this._$ES) || void 0 === i || i.splice(this._$ES.indexOf(r) >>> 0, 1)
            }
            _$Eg() {
                this.constructor.elementProperties.forEach((r,i)=>{
                    this.hasOwnProperty(i) && (this._$Ei.set(i, this[i]),
                    delete this[i])
                }
                )
            }
            createRenderRoot() {
                var r;
                const i = null !== (r = this.shadowRoot) && void 0 !== r ? r : this.attachShadow(this.constructor.shadowRootOptions);
                return ((n,r)=>{
                    d ? n.adoptedStyleSheets = r.map(i=>i instanceof CSSStyleSheet ? i : i.styleSheet) : r.forEach(i=>{
                        const l = document.createElement("style")
                          , s = g.litNonce;
                        void 0 !== s && l.setAttribute("nonce", s),
                        l.textContent = i.cssText,
                        n.appendChild(l)
                    }
                    )
                }
                )(i, this.constructor.elementStyles),
                i
            }
            connectedCallback() {
                var r;
                void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
                this.enableUpdating(!0),
                null === (r = this._$ES) || void 0 === r || r.forEach(i=>{
                    var l;
                    return null === (l = i.hostConnected) || void 0 === l ? void 0 : l.call(i)
                }
                )
            }
            enableUpdating(r) {}
            disconnectedCallback() {
                var r;
                null === (r = this._$ES) || void 0 === r || r.forEach(i=>{
                    var l;
                    return null === (l = i.hostDisconnected) || void 0 === l ? void 0 : l.call(i)
                }
                )
            }
            attributeChangedCallback(r, i, l) {
                this._$AK(r, l)
            }
            _$EO(r, i, l=H) {
                var s;
                const a = this.constructor._$Ep(r, l);
                if (void 0 !== a && !0 === l.reflect) {
                    const c = (void 0 !== (null === (s = l.converter) || void 0 === s ? void 0 : s.toAttribute) ? l.converter : lt).toAttribute(i, l.type);
                    this._$El = r,
                    null == c ? this.removeAttribute(a) : this.setAttribute(a, c),
                    this._$El = null
                }
            }
            _$AK(r, i) {
                var l;
                const s = this.constructor
                  , a = s._$Ev.get(r);
                if (void 0 !== a && this._$El !== a) {
                    const c = s.getPropertyOptions(a)
                      , x = "function" == typeof c.converter ? {
                        fromAttribute: c.converter
                    } : void 0 !== (null === (l = c.converter) || void 0 === l ? void 0 : l.fromAttribute) ? c.converter : lt;
                    this._$El = a,
                    this[a] = x.fromAttribute(i, c.type),
                    this._$El = null
                }
            }
            requestUpdate(r, i, l) {
                let s = !0;
                void 0 !== r && (((l = l || this.constructor.getPropertyOptions(r)).hasChanged || z)(this[r], i) ? (this._$AL.has(r) || this._$AL.set(r, i),
                !0 === l.reflect && this._$El !== r && (void 0 === this._$EC && (this._$EC = new Map),
                this._$EC.set(r, l))) : s = !1),
                !this.isUpdatePending && s && (this._$E_ = this._$Ej())
            }
            _$Ej() {
                var r = this;
                return (0,
                u.Z)(function*() {
                    r.isUpdatePending = !0;
                    try {
                        yield r._$E_
                    } catch (l) {
                        Promise.reject(l)
                    }
                    const i = r.scheduleUpdate();
                    return null != i && (yield i),
                    !r.isUpdatePending
                })()
            }
            scheduleUpdate() {
                return this.performUpdate()
            }
            performUpdate() {
                var r;
                if (!this.isUpdatePending)
                    return;
                this._$Ei && (this._$Ei.forEach((s,a)=>this[a] = s),
                this._$Ei = void 0);
                let i = !1;
                const l = this._$AL;
                try {
                    i = this.shouldUpdate(l),
                    i ? (this.willUpdate(l),
                    null === (r = this._$ES) || void 0 === r || r.forEach(s=>{
                        var a;
                        return null === (a = s.hostUpdate) || void 0 === a ? void 0 : a.call(s)
                    }
                    ),
                    this.update(l)) : this._$Ek()
                } catch (s) {
                    throw i = !1,
                    this._$Ek(),
                    s
                }
                i && this._$AE(l)
            }
            willUpdate(r) {}
            _$AE(r) {
                var i;
                null === (i = this._$ES) || void 0 === i || i.forEach(l=>{
                    var s;
                    return null === (s = l.hostUpdated) || void 0 === s ? void 0 : s.call(l)
                }
                ),
                this.hasUpdated || (this.hasUpdated = !0,
                this.firstUpdated(r)),
                this.updated(r)
            }
            _$Ek() {
                this._$AL = new Map,
                this.isUpdatePending = !1
            }
            get updateComplete() {
                return this.getUpdateComplete()
            }
            getUpdateComplete() {
                return this._$E_
            }
            shouldUpdate(r) {
                return !0
            }
            update(r) {
                void 0 !== this._$EC && (this._$EC.forEach((i,l)=>this._$EO(l, this[l], i)),
                this._$EC = void 0),
                this._$Ek()
            }
            updated(r) {}
            firstUpdated(r) {}
        }
        var at;
        P[N] = !0,
        P.elementProperties = new Map,
        P.elementStyles = [],
        P.shadowRootOptions = {
            mode: "open"
        },
        q?.({
            ReactiveElement: P
        }),
        (null !== (Z = O.reactiveElementVersions) && void 0 !== Z ? Z : O.reactiveElementVersions = []).push("1.6.3");
        const dt = window
          , I = dt.trustedTypes
          , B = I ? I.createPolicy("lit-html", {
            createHTML: n=>n
        }) : void 0
          , M = "$lit$"
          , A = `lit$${(Math.random() + "").slice(9)}$`
          , W = "?" + A
          , S = `<${W}>`
          , T = document
          , U = ()=>T.createComment("")
          , D = n=>null === n || "object" != typeof n && "function" != typeof n
          , xt = Array.isArray
          , re = "[ \t\n\f\r]"
          , Tt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g
          , we = /-->/g
          , zt = />/g
          , bt = RegExp(`>|${re}(?:([^\\s"'>=/]+)(${re}*=${re}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g")
          , ne = /'/g
          , Ht = /"/g
          , ve = /^(?:script|style|textarea|title)$/i
          , Ft = n=>(r,...i)=>({
            _$litType$: n,
            strings: r,
            values: i
        })
          , C = Ft(1)
          , rt = Ft(2)
          , gt = Symbol.for("lit-noChange")
          , it = Symbol.for("lit-nothing")
          , Vt = new WeakMap
          , Lt = T.createTreeWalker(T, 129, null, !1);
        function uo(n, r) {
            if (!Array.isArray(n) || !n.hasOwnProperty("raw"))
                throw Error("invalid template strings array");
            return void 0 !== B ? B.createHTML(r) : r
        }
        class ie {
            constructor({strings: r, _$litType$: i}, l) {
                let s;
                this.parts = [];
                let a = 0
                  , c = 0;
                const x = r.length - 1
                  , E = this.parts
                  , [_,J] = ((n,r)=>{
                    const i = n.length - 1
                      , l = [];
                    let s, a = 2 === r ? "<svg>" : "", c = Tt;
                    for (let x = 0; x < i; x++) {
                        const E = n[x];
                        let _, J, tt = -1, V = 0;
                        for (; V < E.length && (c.lastIndex = V,
                        J = c.exec(E),
                        null !== J); )
                            V = c.lastIndex,
                            c === Tt ? "!--" === J[1] ? c = we : void 0 !== J[1] ? c = zt : void 0 !== J[2] ? (ve.test(J[2]) && (s = RegExp("</" + J[2], "g")),
                            c = bt) : void 0 !== J[3] && (c = bt) : c === bt ? ">" === J[0] ? (c = s ?? Tt,
                            tt = -1) : void 0 === J[1] ? tt = -2 : (tt = c.lastIndex - J[2].length,
                            _ = J[1],
                            c = void 0 === J[3] ? bt : '"' === J[3] ? Ht : ne) : c === Ht || c === ne ? c = bt : c === we || c === zt ? c = Tt : (c = bt,
                            s = void 0);
                        const st = c === bt && n[x + 1].startsWith("/>") ? " " : "";
                        a += c === Tt ? E + S : tt >= 0 ? (l.push(_),
                        E.slice(0, tt) + M + E.slice(tt) + A + st) : E + A + (-2 === tt ? (l.push(void 0),
                        x) : st)
                    }
                    return [uo(n, a + (n[i] || "<?>") + (2 === r ? "</svg>" : "")), l]
                }
                )(r, i);
                if (this.el = ie.createElement(_, l),
                Lt.currentNode = this.el.content,
                2 === i) {
                    const tt = this.el.content
                      , V = tt.firstChild;
                    V.remove(),
                    tt.append(...V.childNodes)
                }
                for (; null !== (s = Lt.nextNode()) && E.length < x; ) {
                    if (1 === s.nodeType) {
                        if (s.hasAttributes()) {
                            const tt = [];
                            for (const V of s.getAttributeNames())
                                if (V.endsWith(M) || V.startsWith(A)) {
                                    const st = J[c++];
                                    if (tt.push(V),
                                    void 0 !== st) {
                                        const et = s.getAttribute(st.toLowerCase() + M).split(A)
                                          , Y = /([.?@])?(.*)/.exec(st);
                                        E.push({
                                            type: 1,
                                            index: a,
                                            name: Y[2],
                                            strings: et,
                                            ctor: "." === Y[1] ? fo : "?" === Y[1] ? po : "@" === Y[1] ? wo : se
                                        })
                                    } else
                                        E.push({
                                            type: 6,
                                            index: a
                                        })
                                }
                            for (const V of tt)
                                s.removeAttribute(V)
                        }
                        if (ve.test(s.tagName)) {
                            const tt = s.textContent.split(A)
                              , V = tt.length - 1;
                            if (V > 0) {
                                s.textContent = I ? I.emptyScript : "";
                                for (let st = 0; st < V; st++)
                                    s.append(tt[st], U()),
                                    Lt.nextNode(),
                                    E.push({
                                        type: 2,
                                        index: ++a
                                    });
                                s.append(tt[V], U())
                            }
                        }
                    } else if (8 === s.nodeType)
                        if (s.data === W)
                            E.push({
                                type: 2,
                                index: a
                            });
                        else {
                            let tt = -1;
                            for (; -1 !== (tt = s.data.indexOf(A, tt + 1)); )
                                E.push({
                                    type: 7,
                                    index: a
                                }),
                                tt += A.length - 1
                        }
                    a++
                }
            }
            static createElement(r, i) {
                const l = T.createElement("template");
                return l.innerHTML = r,
                l
            }
        }
        function Nt(n, r, i=n, l) {
            var s, a, c, x;
            if (r === gt)
                return r;
            let E = void 0 !== l ? null === (s = i._$Co) || void 0 === s ? void 0 : s[l] : i._$Cl;
            const _ = D(r) ? void 0 : r._$litDirective$;
            return E?.constructor !== _ && (null === (a = E?._$AO) || void 0 === a || a.call(E, !1),
            void 0 === _ ? E = void 0 : (E = new _(n),
            E._$AT(n, i, l)),
            void 0 !== l ? (null !== (c = (x = i)._$Co) && void 0 !== c ? c : x._$Co = [])[l] = E : i._$Cl = E),
            void 0 !== E && (r = Nt(n, E._$AS(n, r.values), E, l)),
            r
        }
        class go {
            constructor(r, i) {
                this._$AV = [],
                this._$AN = void 0,
                this._$AD = r,
                this._$AM = i
            }
            get parentNode() {
                return this._$AM.parentNode
            }
            get _$AU() {
                return this._$AM._$AU
            }
            u(r) {
                var i;
                const {el: {content: l}, parts: s} = this._$AD
                  , a = (null !== (i = r?.creationScope) && void 0 !== i ? i : T).importNode(l, !0);
                Lt.currentNode = a;
                let c = Lt.nextNode()
                  , x = 0
                  , E = 0
                  , _ = s[0];
                for (; void 0 !== _; ) {
                    if (x === _.index) {
                        let J;
                        2 === _.type ? J = new Zt(c,c.nextSibling,this,r) : 1 === _.type ? J = new _.ctor(c,_.name,_.strings,this,r) : 6 === _.type && (J = new vo(c,this,r)),
                        this._$AV.push(J),
                        _ = s[++E]
                    }
                    x !== _?.index && (c = Lt.nextNode(),
                    x++)
                }
                return Lt.currentNode = T,
                a
            }
            v(r) {
                let i = 0;
                for (const l of this._$AV)
                    void 0 !== l && (void 0 !== l.strings ? (l._$AI(r, l, i),
                    i += l.strings.length - 2) : l._$AI(r[i])),
                    i++
            }
        }
        class Zt {
            constructor(r, i, l, s) {
                var a;
                this.type = 2,
                this._$AH = it,
                this._$AN = void 0,
                this._$AA = r,
                this._$AB = i,
                this._$AM = l,
                this.options = s,
                this._$Cp = null === (a = s?.isConnected) || void 0 === a || a
            }
            get _$AU() {
                var r, i;
                return null !== (i = null === (r = this._$AM) || void 0 === r ? void 0 : r._$AU) && void 0 !== i ? i : this._$Cp
            }
            get parentNode() {
                let r = this._$AA.parentNode;
                const i = this._$AM;
                return void 0 !== i && 11 === r?.nodeType && (r = i.parentNode),
                r
            }
            get startNode() {
                return this._$AA
            }
            get endNode() {
                return this._$AB
            }
            _$AI(r, i=this) {
                r = Nt(this, r, i),
                D(r) ? r === it || null == r || "" === r ? (this._$AH !== it && this._$AR(),
                this._$AH = it) : r !== this._$AH && r !== gt && this._(r) : void 0 !== r._$litType$ ? this.g(r) : void 0 !== r.nodeType ? this.$(r) : (n=>xt(n) || "function" == typeof n?.[Symbol.iterator])(r) ? this.T(r) : this._(r)
            }
            k(r) {
                return this._$AA.parentNode.insertBefore(r, this._$AB)
            }
            $(r) {
                this._$AH !== r && (this._$AR(),
                this._$AH = this.k(r))
            }
            _(r) {
                this._$AH !== it && D(this._$AH) ? this._$AA.nextSibling.data = r : this.$(T.createTextNode(r)),
                this._$AH = r
            }
            g(r) {
                var i;
                const {values: l, _$litType$: s} = r
                  , a = "number" == typeof s ? this._$AC(r) : (void 0 === s.el && (s.el = ie.createElement(uo(s.h, s.h[0]), this.options)),
                s);
                if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === a)
                    this._$AH.v(l);
                else {
                    const c = new go(a,this)
                      , x = c.u(this.options);
                    c.v(l),
                    this.$(x),
                    this._$AH = c
                }
            }
            _$AC(r) {
                let i = Vt.get(r.strings);
                return void 0 === i && Vt.set(r.strings, i = new ie(r)),
                i
            }
            T(r) {
                xt(this._$AH) || (this._$AH = [],
                this._$AR());
                const i = this._$AH;
                let l, s = 0;
                for (const a of r)
                    s === i.length ? i.push(l = new Zt(this.k(U()),this.k(U()),this,this.options)) : l = i[s],
                    l._$AI(a),
                    s++;
                s < i.length && (this._$AR(l && l._$AB.nextSibling, s),
                i.length = s)
            }
            _$AR(r=this._$AA.nextSibling, i) {
                var l;
                for (null === (l = this._$AP) || void 0 === l || l.call(this, !1, !0, i); r && r !== this._$AB; ) {
                    const s = r.nextSibling;
                    r.remove(),
                    r = s
                }
            }
            setConnected(r) {
                var i;
                void 0 === this._$AM && (this._$Cp = r,
                null === (i = this._$AP) || void 0 === i || i.call(this, r))
            }
        }
        class se {
            constructor(r, i, l, s, a) {
                this.type = 1,
                this._$AH = it,
                this._$AN = void 0,
                this.element = r,
                this.name = i,
                this._$AM = s,
                this.options = a,
                l.length > 2 || "" !== l[0] || "" !== l[1] ? (this._$AH = Array(l.length - 1).fill(new String),
                this.strings = l) : this._$AH = it
            }
            get tagName() {
                return this.element.tagName
            }
            get _$AU() {
                return this._$AM._$AU
            }
            _$AI(r, i=this, l, s) {
                const a = this.strings;
                let c = !1;
                if (void 0 === a)
                    r = Nt(this, r, i, 0),
                    c = !D(r) || r !== this._$AH && r !== gt,
                    c && (this._$AH = r);
                else {
                    const x = r;
                    let E, _;
                    for (r = a[0],
                    E = 0; E < a.length - 1; E++)
                        _ = Nt(this, x[l + E], i, E),
                        _ === gt && (_ = this._$AH[E]),
                        c || (c = !D(_) || _ !== this._$AH[E]),
                        _ === it ? r = it : r !== it && (r += (_ ?? "") + a[E + 1]),
                        this._$AH[E] = _
                }
                c && !s && this.j(r)
            }
            j(r) {
                r === it ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, r ?? "")
            }
        }
        class fo extends se {
            constructor() {
                super(...arguments),
                this.type = 3
            }
            j(r) {
                this.element[this.name] = r === it ? void 0 : r
            }
        }
        const Qo = I ? I.emptyScript : "";
        class po extends se {
            constructor() {
                super(...arguments),
                this.type = 4
            }
            j(r) {
                r && r !== it ? this.element.setAttribute(this.name, Qo) : this.element.removeAttribute(this.name)
            }
        }
        class wo extends se {
            constructor(r, i, l, s, a) {
                super(r, i, l, s, a),
                this.type = 5
            }
            _$AI(r, i=this) {
                var l;
                if ((r = null !== (l = Nt(this, r, i, 0)) && void 0 !== l ? l : it) === gt)
                    return;
                const s = this._$AH
                  , a = r === it && s !== it || r.capture !== s.capture || r.once !== s.once || r.passive !== s.passive
                  , c = r !== it && (s === it || a);
                a && this.element.removeEventListener(this.name, this, s),
                c && this.element.addEventListener(this.name, this, r),
                this._$AH = r
            }
            handleEvent(r) {
                var i, l;
                "function" == typeof this._$AH ? this._$AH.call(null !== (l = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== l ? l : this.element, r) : this._$AH.handleEvent(r)
            }
        }
        class vo {
            constructor(r, i, l) {
                this.element = r,
                this.type = 6,
                this._$AN = void 0,
                this._$AM = i,
                this.options = l
            }
            get _$AU() {
                return this._$AM._$AU
            }
            _$AI(r) {
                Nt(this, r)
            }
        }
        const bo = dt.litHtmlPolyfillSupport;
        var Pe, Se;
        bo?.(ie, Zt),
        (null !== (at = dt.litHtmlVersions) && void 0 !== at ? at : dt.litHtmlVersions = []).push("2.8.0");
        class G extends P {
            constructor() {
                super(...arguments),
                this.renderOptions = {
                    host: this
                },
                this._$Do = void 0
            }
            createRenderRoot() {
                var r, i;
                const l = super.createRenderRoot();
                return null !== (r = (i = this.renderOptions).renderBefore) && void 0 !== r || (i.renderBefore = l.firstChild),
                l
            }
            update(r) {
                const i = this.render();
                this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
                super.update(r),
                this._$Do = ((n,r,i)=>{
                    var l, s;
                    const a = null !== (l = i?.renderBefore) && void 0 !== l ? l : r;
                    let c = a._$litPart$;
                    if (void 0 === c) {
                        const x = null !== (s = i?.renderBefore) && void 0 !== s ? s : null;
                        a._$litPart$ = c = new Zt(r.insertBefore(U(), x),x,void 0,i ?? {})
                    }
                    return c._$AI(n),
                    c
                }
                )(i, this.renderRoot, this.renderOptions)
            }
            connectedCallback() {
                var r;
                super.connectedCallback(),
                null === (r = this._$Do) || void 0 === r || r.setConnected(!0)
            }
            disconnectedCallback() {
                var r;
                super.disconnectedCallback(),
                null === (r = this._$Do) || void 0 === r || r.setConnected(!1)
            }
            render() {
                return gt
            }
        }
        G.finalized = !0,
        G._$litElement$ = !0,
        null === (Pe = globalThis.litElementHydrateSupport) || void 0 === Pe || Pe.call(globalThis, {
            LitElement: G
        });
        const yo = globalThis.litElementPolyfillSupport;
        yo?.({
            LitElement: G
        }),
        (null !== (Se = globalThis.litElementVersions) && void 0 !== Se ? Se : globalThis.litElementVersions = []).push("3.3.3");
        const X = n=>r=>{
            return "function" == typeof r ? (l = r,
            customElements.define(n, l),
            l) : ((i,l)=>{
                const {kind: s, elements: a} = l;
                return {
                    kind: s,
                    elements: a,
                    finisher(c) {
                        customElements.define(i, c)
                    }
                }
            }
            )(n, r);
            var l
        }
          , Xo = (n,r)=>"method" === r.kind && r.descriptor && !("value"in r.descriptor) ? {
            ...r,
            finisher(i) {
                i.createProperty(r.key, n)
            }
        } : {
            kind: "field",
            key: Symbol(),
            placement: "own",
            descriptor: {},
            originalKey: r.key,
            initializer() {
                "function" == typeof r.initializer && (this[r.key] = r.initializer.call(this))
            },
            finisher(i) {
                i.createProperty(r.key, n)
            }
        }
          , tr = (n,r,i)=>{
            r.constructor.createProperty(i, n)
        }
        ;
        function F(n) {
            return (r,i)=>void 0 !== i ? tr(n, r, i) : Xo(n, r)
        }
        function wt(n) {
            return F({
                ...n,
                state: !0
            })
        }
        window;
        class nr {
            constructor(r) {}
            get _$AU() {
                return this._$AM._$AU
            }
            _$AT(r, i, l) {
                this._$Ct = r,
                this._$AM = i,
                this._$Ci = l
            }
            _$AS(r, i) {
                return this.update(r, i)
            }
            update(r, i) {
                return this.render(...i)
            }
        }
        const $t = (n = class extends nr {
            constructor(n) {
                var r;
                if (super(n),
                1 !== n.type || "class" !== n.name || (null === (r = n.strings) || void 0 === r ? void 0 : r.length) > 2)
                    throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")
            }
            render(n) {
                return " " + Object.keys(n).filter(r=>n[r]).join(" ") + " "
            }
            update(n, [r]) {
                var i, l;
                if (void 0 === this.it) {
                    this.it = new Set,
                    void 0 !== n.strings && (this.nt = new Set(n.strings.join(" ").split(/\s/).filter(a=>"" !== a)));
                    for (const a in r)
                        r[a] && (null === (i = this.nt) || void 0 === i || !i.has(a)) && this.it.add(a);
                    return this.render(r)
                }
                const s = n.element.classList;
                this.it.forEach(a=>{
                    a in r || (s.remove(a),
                    this.it.delete(a))
                }
                );
                for (const a in r) {
                    const c = !!r[a];
                    c === this.it.has(a) || null !== (l = this.nt) && void 0 !== l && l.has(a) || (c ? (s.add(a),
                    this.it.add(a)) : (s.remove(a),
                    this.it.delete(a)))
                }
                return gt
            }
        }
        ,
        (...r)=>({
            _$litDirective$: n,
            values: r
        }));
        var n, y = v(9111);
        const yt = {
            duration: .3,
            delay: 0,
            endDelay: 0,
            repeat: 0,
            easing: "ease"
        }
          , le_ms = n=>1e3 * n
          , le_s = n=>n / 1e3
          , xo = ()=>{}
          , It = n=>n;
        function Co(n, r=!0) {
            if (n && "finished" !== n.playState)
                try {
                    n.stop ? n.stop() : (r && n.commitStyles(),
                    n.cancel())
                } catch {}
        }
        const ir = n=>n()
          , Eo = (n,r,i=yt.duration)=>new Proxy({
            animations: n.map(ir).filter(Boolean),
            duration: i,
            options: r
        },lr)
          , lr = {
            get: (n,r)=>{
                const i = (n=>n.animations[0])(n);
                switch (r) {
                case "duration":
                    return n.duration;
                case "currentTime":
                    return le_s(i?.[r] || 0);
                case "playbackRate":
                case "playState":
                    return i?.[r];
                case "finished":
                    return n.finished || (n.finished = Promise.all(n.animations.map(ar)).catch(xo)),
                    n.finished;
                case "stop":
                    return ()=>{
                        n.animations.forEach(l=>Co(l))
                    }
                    ;
                case "forEachNative":
                    return l=>{
                        n.animations.forEach(s=>l(s, n))
                    }
                    ;
                default:
                    return typeof i?.[r] > "u" ? void 0 : ()=>n.animations.forEach(l=>l[r]())
                }
            }
            ,
            set: (n,r,i)=>{
                switch (r) {
                case "currentTime":
                    i = le_ms(i);
                case "playbackRate":
                    for (let l = 0; l < n.animations.length; l++)
                        n.animations[l][r] = i;
                    return !0
                }
                return !1
            }
        }
          , ar = n=>n.finished
          , Le = n=>"object" == typeof n && !!n.createAnimation
          , be = n=>"number" == typeof n
          , Kt = n=>Array.isArray(n) && !be(n[0])
          , $o = (n,r,i)=>-i * n + i * r + n
          , Ne = (n,r,i)=>r - n == 0 ? 1 : (i - n) / (r - n);
        function Ao(n, r) {
            const i = n[n.length - 1];
            for (let l = 1; l <= r; l++) {
                const s = Ne(0, r, l);
                n.push($o(i, 1, s))
            }
        }
        const _o = (n,r,i)=>Math.min(Math.max(i, n), r);
        const Oo = (n,r,i)=>(((1 - 3 * i + 3 * r) * n + (3 * i - 6 * r)) * n + 3 * r) * n
          , mr = 1e-7
          , gr = 12;
        function ae(n, r, i, l) {
            if (n === r && i === l)
                return It;
            return a=>0 === a || 1 === a ? a : Oo((a=>function fr(n, r, i, l, s) {
                let a, c, x = 0;
                do {
                    c = r + (i - r) / 2,
                    a = Oo(c, l, s) - n,
                    a > 0 ? i = c : r = c
                } while (Math.abs(a) > mr && ++x < gr);
                return c
            }(a, 0, 1, n, i))(a), r, l)
        }
        const Yt = n=>"function" == typeof n
          , To = n=>Array.isArray(n) && be(n[0])
          , Io = {
            ease: ae(.25, .1, .25, 1),
            "ease-in": ae(.42, 0, 1, 1),
            "ease-in-out": ae(.42, 0, .58, 1),
            "ease-out": ae(0, 0, .58, 1)
        }
          , wr = /\((.*?)\)/;
        function ko(n) {
            if (Yt(n))
                return n;
            if (To(n))
                return ae(...n);
            if (Io[n])
                return Io[n];
            if (n.startsWith("steps")) {
                const r = wr.exec(n);
                if (r) {
                    const i = r[1].split(",");
                    return ((n,r="end")=>i=>{
                        const l = (i = "end" === r ? Math.min(i, .999) : Math.max(i, .001)) * n
                          , s = "end" === r ? Math.floor(l) : Math.ceil(l);
                        return _o(0, 1, s / n)
                    }
                    )(parseFloat(i[0]), i[1].trim())
                }
            }
            return It
        }
        class Mo {
            constructor(r, i=[0, 1], {easing: l, duration: s=yt.duration, delay: a=yt.delay, endDelay: c=yt.endDelay, repeat: x=yt.repeat, offset: E, direction: _="normal", autoplay: J=!0}={}) {
                if (this.startTime = null,
                this.rate = 1,
                this.t = 0,
                this.cancelTimestamp = null,
                this.easing = It,
                this.duration = 0,
                this.totalDuration = 0,
                this.repeat = 0,
                this.playState = "idle",
                this.finished = new Promise((V,st)=>{
                    this.resolve = V,
                    this.reject = st
                }
                ),
                Le(l = l || yt.easing)) {
                    const V = l.createAnimation(i);
                    l = V.easing,
                    i = V.keyframes || i,
                    s = V.duration || s
                }
                this.repeat = x,
                this.easing = Kt(l) ? It : ko(l),
                this.updateDuration(s);
                const tt = function ur(n, r=function cr(n) {
                    const r = [0];
                    return Ao(r, n - 1),
                    r
                }(n.length), i=It) {
                    const l = n.length
                      , s = l - r.length;
                    return s > 0 && Ao(r, s),
                    a=>{
                        let c = 0;
                        for (; c < l - 2 && !(a < r[c + 1]); c++)
                            ;
                        let x = _o(0, 1, Ne(r[c], r[c + 1], a));
                        return x = function hr(n, r) {
                            return Kt(n) ? n[((n,r,i)=>{
                                const l = r - n;
                                return ((i - n) % l + l) % l + n
                            }
                            )(0, n.length, r)] : n
                        }(i, c)(x),
                        $o(n[c], n[c + 1], x)
                    }
                }(i, E, Kt(l) ? l.map(ko) : It);
                this.tick = V=>{
                    var st;
                    let et = 0;
                    et = void 0 !== this.pauseTime ? this.pauseTime : (V - this.startTime) * this.rate,
                    this.t = et,
                    et /= 1e3,
                    et = Math.max(et - a, 0),
                    "finished" === this.playState && void 0 === this.pauseTime && (et = this.totalDuration);
                    const Y = et / this.duration;
                    let ht = Math.floor(Y)
                      , ot = Y % 1;
                    !ot && Y >= 1 && (ot = 1),
                    1 === ot && ht--;
                    const mt = ht % 2;
                    ("reverse" === _ || "alternate" === _ && mt || "alternate-reverse" === _ && !mt) && (ot = 1 - ot);
                    const ft = et >= this.totalDuration ? 1 : Math.min(ot, 1)
                      , vt = tt(this.easing(ft));
                    r(vt),
                    void 0 === this.pauseTime && ("finished" === this.playState || et >= this.totalDuration + c) ? (this.playState = "finished",
                    null === (st = this.resolve) || void 0 === st || st.call(this, vt)) : "idle" !== this.playState && (this.frameRequestId = requestAnimationFrame(this.tick))
                }
                ,
                J && this.play()
            }
            play() {
                const r = performance.now();
                this.playState = "running",
                void 0 !== this.pauseTime ? this.startTime = r - this.pauseTime : this.startTime || (this.startTime = r),
                this.cancelTimestamp = this.startTime,
                this.pauseTime = void 0,
                this.frameRequestId = requestAnimationFrame(this.tick)
            }
            pause() {
                this.playState = "paused",
                this.pauseTime = this.t
            }
            finish() {
                this.playState = "finished",
                this.tick(0)
            }
            stop() {
                var r;
                this.playState = "idle",
                void 0 !== this.frameRequestId && cancelAnimationFrame(this.frameRequestId),
                null === (r = this.reject) || void 0 === r || r.call(this, !1)
            }
            cancel() {
                this.stop(),
                this.tick(this.cancelTimestamp)
            }
            reverse() {
                this.rate *= -1
            }
            commitStyles() {}
            updateDuration(r) {
                this.duration = r,
                this.totalDuration = r * (this.repeat + 1)
            }
            get currentTime() {
                return this.t
            }
            set currentTime(r) {
                void 0 !== this.pauseTime || 0 === this.rate ? this.pauseTime = r : this.startTime = performance.now() - r / this.rate
            }
            get playbackRate() {
                return this.rate
            }
            set playbackRate(r) {
                this.rate = r
            }
        }
        class vr {
            setAnimation(r) {
                this.animation = r,
                r?.finished.then(()=>this.clearAnimation()).catch(()=>{}
                )
            }
            clearAnimation() {
                this.animation = this.generator = void 0
            }
        }
        const Be = new WeakMap;
        function So(n) {
            return Be.has(n) || Be.set(n, {
                transforms: [],
                values: new Map
            }),
            Be.get(n)
        }
        const xr = ["", "X", "Y", "Z"]
          , ye = {
            x: "translateX",
            y: "translateY",
            z: "translateZ"
        }
          , Ro = {
            syntax: "<angle>",
            initialValue: "0deg",
            toDefaultUnit: n=>n + "deg"
        }
          , Er = {
            translate: {
                syntax: "<length-percentage>",
                initialValue: "0px",
                toDefaultUnit: n=>n + "px"
            },
            rotate: Ro,
            scale: {
                syntax: "<number>",
                initialValue: 1,
                toDefaultUnit: It
            },
            skew: Ro
        }
          , ce = new Map
          , De = n=>`--motion-${n}`
          , xe = ["x", "y", "z"];
        ["translate", "scale", "rotate", "skew"].forEach(n=>{
            xr.forEach(r=>{
                xe.push(n + r),
                ce.set(De(n + r), Er[n])
            }
            )
        }
        );
        const $r = (n,r)=>xe.indexOf(n) - xe.indexOf(r)
          , Ar = new Set(xe)
          , Lo = n=>Ar.has(n)
          , Or = n=>n.sort($r).reduce(Tr, "").trim()
          , Tr = (n,r)=>`${n} ${r}(var(${De(r)}))`
          , Ue = n=>n.startsWith("--")
          , No = new Set
          , je = (n,r)=>document.createElement("div").animate(n, r)
          , Bo = {
            cssRegisterProperty: ()=>typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
            waapi: ()=>Object.hasOwnProperty.call(Element.prototype, "animate"),
            partialKeyframes: ()=>{
                try {
                    je({
                        opacity: [1]
                    })
                } catch {
                    return !1
                }
                return !0
            }
            ,
            finished: ()=>!!je({
                opacity: [0, 1]
            }, {
                duration: .001
            }).finished,
            linearEasing: ()=>{
                try {
                    je({
                        opacity: 0
                    }, {
                        easing: "linear(0, 1)"
                    })
                } catch {
                    return !1
                }
                return !0
            }
        }
          , We = {}
          , Gt = {};
        for (const n in Bo)
            Gt[n] = ()=>(void 0 === We[n] && (We[n] = Bo[n]()),
            We[n]);
        const Do = (n,r)=>Yt(n) ? Gt.linearEasing() ? `linear(${((n,r)=>{
            leti = "";
            const l = Math.round(r / .015);
            for (lets = 0; s < l; s++)
                i += n(Ne(0, l - 1, s)) + ", ";
            return i.substring(0, i.length - 2)
        }
        )(n, r)})` : yt.easing : To(n) ? Pr(n) : n
          , Pr = ([n,r,i,l])=>`cubic-bezier(${n}, ${r}, ${i}, ${l})`;
        function ze(n) {
            return ye[n] && (n = ye[n]),
            Lo(n) ? De(n) : n
        }
        const Ce_get = (n,r)=>{
            r = ze(r);
            let i = Ue(r) ? n.style.getPropertyValue(r) : getComputedStyle(n)[r];
            if (!i && 0 !== i) {
                const l = ce.get(r);
                l && (i = l.initialValue)
            }
            return i
        }
          , Ce_set = (n,r,i)=>{
            r = ze(r),
            Ue(r) ? n.style.setProperty(r, i) : n.style[r] = i
        }
        ;
        function Dr(n, r, i, l={}, s) {
            const a = function Br() {
                return window.__MOTION_DEV_TOOLS_RECORD
            }()
              , c = !1 !== l.record && a;
            let x, {duration: E=yt.duration, delay: _=yt.delay, endDelay: J=yt.endDelay, repeat: tt=yt.repeat, easing: V=yt.easing, persist: st=!1, direction: et, offset: Y, allowWebkitAcceleration: ht=!1, autoplay: ot=!0} = l;
            const mt = So(n)
              , ft = Lo(r);
            let vt = Gt.waapi();
            ft && ((n,r)=>{
                ye[r] && (r = ye[r]);
                const {transforms: i} = So(n);
                (function yr(n, r) {
                    -1 === n.indexOf(r) && n.push(r)
                }
                )(i, r),
                n.style.transform = Or(i)
            }
            )(n, r);
            const Ct = ze(r)
              , ke = function br(n, r) {
                return n.has(r) || n.set(r, new vr),
                n.get(r)
            }(mt.values, Ct)
              , Rt = ce.get(Ct);
            return Co(ke.animation, !(Le(V) && ke.generator) && !1 !== l.record),
            ()=>{
                const Me = ()=>{
                    var ct, pe;
                    return null !== (pe = null !== (ct = Ce_get(n, Ct)) && void 0 !== ct ? ct : Rt?.initialValue) && void 0 !== pe ? pe : 0
                }
                ;
                let ut = function Sr(n, r) {
                    for (let i = 0; i < n.length; i++)
                        null === n[i] && (n[i] = i ? n[i - 1] : r());
                    return n
                }((n=>Array.isArray(n) ? n : [n])(i), Me);
                const Jo = function Nr(n, r) {
                    var i;
                    let l = r?.toDefaultUnit || It;
                    const s = n[n.length - 1];
                    if ((n=>"string" == typeof n)(s)) {
                        const a = (null === (i = s.match(/(-?[\d.]+)([a-z%]*)/)) || void 0 === i ? void 0 : i[2]) || "";
                        a && (l = c=>c + a)
                    }
                    return l
                }(ut, Rt);
                if (Le(V)) {
                    const ct = V.createAnimation(ut, "opacity" !== r, Me, Ct, ke);
                    V = ct.easing,
                    ut = ct.keyframes || ut,
                    E = ct.duration || E
                }
                if (Ue(Ct) && (Gt.cssRegisterProperty() ? function Ir(n) {
                    if (!No.has(n)) {
                        No.add(n);
                        try {
                            const {syntax: r, initialValue: i} = ce.has(n) ? ce.get(n) : {};
                            CSS.registerProperty({
                                name: n,
                                inherits: !1,
                                syntax: r,
                                initialValue: i
                            })
                        } catch {}
                    }
                }(Ct) : vt = !1),
                ft && !Gt.linearEasing() && (Yt(V) || Kt(V) && V.some(Yt)) && (vt = !1),
                vt) {
                    Rt && (ut = ut.map(Wt=>be(Wt) ? Rt.toDefaultUnit(Wt) : Wt)),
                    1 === ut.length && (!Gt.partialKeyframes() || c) && ut.unshift(Me());
                    const ct = {
                        delay: le_ms(_),
                        duration: le_ms(E),
                        endDelay: le_ms(J),
                        easing: Kt(V) ? void 0 : Do(V, E),
                        direction: et,
                        iterations: tt + 1,
                        fill: "both"
                    };
                    x = n.animate({
                        [Ct]: ut,
                        offset: Y,
                        easing: Kt(V) ? V.map(Wt=>Do(Wt, E)) : void 0
                    }, ct),
                    x.finished || (x.finished = new Promise((Wt,ss)=>{
                        x.onfinish = Wt,
                        x.oncancel = ss
                    }
                    ));
                    const pe = ut[ut.length - 1];
                    x.finished.then(()=>{
                        st || (Ce_set(n, Ct, pe),
                        x.cancel())
                    }
                    ).catch(xo),
                    ht || (x.playbackRate = 1.000001)
                } else if (s && ft)
                    ut = ut.map(ct=>"string" == typeof ct ? parseFloat(ct) : ct),
                    1 === ut.length && ut.unshift(parseFloat(Me())),
                    x = new s(ct=>{
                        Ce_set(n, Ct, Jo ? Jo(ct) : ct)
                    }
                    ,ut,Object.assign(Object.assign({}, l), {
                        duration: E,
                        easing: V
                    }));
                else {
                    const ct = ut[ut.length - 1];
                    Ce_set(n, Ct, Rt && be(ct) ? Rt.toDefaultUnit(ct) : ct)
                }
                return c && a(n, r, ut, {
                    duration: E,
                    delay: _,
                    easing: V,
                    repeat: tt,
                    offset: Y
                }, "motion-one"),
                ke.setAnimation(x),
                x && !ot && x.pause(),
                x
            }
        }
        const Ur = (n,r)=>n[r] ? Object.assign(Object.assign({}, n), n[r]) : Object.assign({}, n);
        function zr(n, r, i) {
            return Yt(n) ? n(r, i) : n
        }
        const Fr = function Hr(n) {
            return function(i, l, s={}) {
                i = function jr(n, r) {
                    var i;
                    return "string" == typeof n ? r ? (null !== (i = r[n]) && void 0 !== i || (r[n] = document.querySelectorAll(n)),
                    n = r[n]) : n = document.querySelectorAll(n) : n instanceof Element && (n = [n]),
                    Array.from(n || [])
                }(i);
                const a = i.length
                  , c = [];
                for (let x = 0; x < a; x++) {
                    const E = i[x];
                    for (const _ in l) {
                        const J = Ur(s, _);
                        J.delay = zr(J.delay, x, a);
                        const tt = Dr(E, _, l[_], J, n);
                        c.push(tt)
                    }
                }
                return Eo(c, s, s.duration)
            }
        }(Mo);
        function Vr(n, r={}) {
            return Eo([()=>{
                const i = new Mo(n,[0, 1],r);
                return i.finished.catch(()=>{}
                ),
                i
            }
            ], r, r.duration)
        }
        function Bt(n, r, i) {
            return (Yt(n) ? Vr : Fr)(n, r, i)
        }
        const pt = n=>n ?? it;
        var Zr = v(8251)
          , Kr = Object.defineProperty
          , Uo = Object.getOwnPropertySymbols
          , Yr = Object.prototype.hasOwnProperty
          , Gr = Object.prototype.propertyIsEnumerable
          , jo = (n,r,i)=>r in n ? Kr(n, r, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : n[r] = i
          , He = (n,r)=>{
            for (var i in r || (r = {}))
                Yr.call(r, i) && jo(n, i, r[i]);
            if (Uo)
                for (var i of Uo(r))
                    Gr.call(r, i) && jo(n, i, r[i]);
            return n
        }
        ;
        const Q = {
            getPreset: n=>({
                "--wcm-accent-color": "#3396FF",
                "--wcm-accent-fill-color": "#FFFFFF",
                "--wcm-z-index": "89",
                "--wcm-background-color": "#3396FF",
                "--wcm-background-border-radius": "8px",
                "--wcm-container-border-radius": "30px",
                "--wcm-wallet-icon-border-radius": "15px",
                "--wcm-wallet-icon-large-border-radius": "30px",
                "--wcm-wallet-icon-small-border-radius": "7px",
                "--wcm-input-border-radius": "28px",
                "--wcm-button-border-radius": "10px",
                "--wcm-notification-border-radius": "36px",
                "--wcm-secondary-button-border-radius": "28px",
                "--wcm-icon-button-border-radius": "50%",
                "--wcm-button-hover-highlight-border-radius": "10px",
                "--wcm-text-big-bold-size": "20px",
                "--wcm-text-big-bold-weight": "600",
                "--wcm-text-big-bold-line-height": "24px",
                "--wcm-text-big-bold-letter-spacing": "-0.03em",
                "--wcm-text-big-bold-text-transform": "none",
                "--wcm-text-xsmall-bold-size": "10px",
                "--wcm-text-xsmall-bold-weight": "700",
                "--wcm-text-xsmall-bold-line-height": "12px",
                "--wcm-text-xsmall-bold-letter-spacing": "0.02em",
                "--wcm-text-xsmall-bold-text-transform": "uppercase",
                "--wcm-text-xsmall-regular-size": "12px",
                "--wcm-text-xsmall-regular-weight": "600",
                "--wcm-text-xsmall-regular-line-height": "14px",
                "--wcm-text-xsmall-regular-letter-spacing": "-0.03em",
                "--wcm-text-xsmall-regular-text-transform": "none",
                "--wcm-text-small-thin-size": "14px",
                "--wcm-text-small-thin-weight": "500",
                "--wcm-text-small-thin-line-height": "16px",
                "--wcm-text-small-thin-letter-spacing": "-0.03em",
                "--wcm-text-small-thin-text-transform": "none",
                "--wcm-text-small-regular-size": "14px",
                "--wcm-text-small-regular-weight": "600",
                "--wcm-text-small-regular-line-height": "16px",
                "--wcm-text-small-regular-letter-spacing": "-0.03em",
                "--wcm-text-small-regular-text-transform": "none",
                "--wcm-text-medium-regular-size": "16px",
                "--wcm-text-medium-regular-weight": "600",
                "--wcm-text-medium-regular-line-height": "20px",
                "--wcm-text-medium-regular-letter-spacing": "-0.03em",
                "--wcm-text-medium-regular-text-transform": "none",
                "--wcm-font-family": "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
                "--wcm-font-feature-settings": "'tnum' on, 'lnum' on, 'case' on",
                "--wcm-success-color": "rgb(38,181,98)",
                "--wcm-error-color": "rgb(242, 90, 103)",
                "--wcm-overlay-background-color": "rgba(0, 0, 0, 0.3)",
                "--wcm-overlay-backdrop-filter": "none"
            }[n]),
            setTheme() {
                const n = document.querySelector(":root")
                  , {themeVariables: r} = y.ThemeCtrl.state;
                if (n) {
                    const i = He(He(He({}, function Jr() {
                        var n;
                        const i = {
                            light: {
                                foreground: {
                                    1: "rgb(20,20,20)",
                                    2: "rgb(121,134,134)",
                                    3: "rgb(158,169,169)"
                                },
                                background: {
                                    1: "rgb(255,255,255)",
                                    2: "rgb(241,243,243)",
                                    3: "rgb(228,231,231)"
                                },
                                overlay: "rgba(0,0,0,0.1)"
                            },
                            dark: {
                                foreground: {
                                    1: "rgb(228,231,231)",
                                    2: "rgb(148,158,158)",
                                    3: "rgb(110,119,119)"
                                },
                                background: {
                                    1: "rgb(20,20,20)",
                                    2: "rgb(39,42,42)",
                                    3: "rgb(59,64,64)"
                                },
                                overlay: "rgba(255,255,255,0.1)"
                            }
                        }[null != (n = y.ThemeCtrl.state.themeMode) ? n : "dark"];
                        return {
                            "--wcm-color-fg-1": i.foreground[1],
                            "--wcm-color-fg-2": i.foreground[2],
                            "--wcm-color-fg-3": i.foreground[3],
                            "--wcm-color-bg-1": i.background[1],
                            "--wcm-color-bg-2": i.background[2],
                            "--wcm-color-bg-3": i.background[3],
                            "--wcm-color-overlay": i.overlay
                        }
                    }()), {
                        "--wcm-accent-color": "#3396FF",
                        "--wcm-accent-fill-color": "#FFFFFF",
                        "--wcm-z-index": "89",
                        "--wcm-background-color": "#3396FF",
                        "--wcm-background-border-radius": "8px",
                        "--wcm-container-border-radius": "30px",
                        "--wcm-wallet-icon-border-radius": "15px",
                        "--wcm-wallet-icon-large-border-radius": "30px",
                        "--wcm-wallet-icon-small-border-radius": "7px",
                        "--wcm-input-border-radius": "28px",
                        "--wcm-button-border-radius": "10px",
                        "--wcm-notification-border-radius": "36px",
                        "--wcm-secondary-button-border-radius": "28px",
                        "--wcm-icon-button-border-radius": "50%",
                        "--wcm-button-hover-highlight-border-radius": "10px",
                        "--wcm-text-big-bold-size": "20px",
                        "--wcm-text-big-bold-weight": "600",
                        "--wcm-text-big-bold-line-height": "24px",
                        "--wcm-text-big-bold-letter-spacing": "-0.03em",
                        "--wcm-text-big-bold-text-transform": "none",
                        "--wcm-text-xsmall-bold-size": "10px",
                        "--wcm-text-xsmall-bold-weight": "700",
                        "--wcm-text-xsmall-bold-line-height": "12px",
                        "--wcm-text-xsmall-bold-letter-spacing": "0.02em",
                        "--wcm-text-xsmall-bold-text-transform": "uppercase",
                        "--wcm-text-xsmall-regular-size": "12px",
                        "--wcm-text-xsmall-regular-weight": "600",
                        "--wcm-text-xsmall-regular-line-height": "14px",
                        "--wcm-text-xsmall-regular-letter-spacing": "-0.03em",
                        "--wcm-text-xsmall-regular-text-transform": "none",
                        "--wcm-text-small-thin-size": "14px",
                        "--wcm-text-small-thin-weight": "500",
                        "--wcm-text-small-thin-line-height": "16px",
                        "--wcm-text-small-thin-letter-spacing": "-0.03em",
                        "--wcm-text-small-thin-text-transform": "none",
                        "--wcm-text-small-regular-size": "14px",
                        "--wcm-text-small-regular-weight": "600",
                        "--wcm-text-small-regular-line-height": "16px",
                        "--wcm-text-small-regular-letter-spacing": "-0.03em",
                        "--wcm-text-small-regular-text-transform": "none",
                        "--wcm-text-medium-regular-size": "16px",
                        "--wcm-text-medium-regular-weight": "600",
                        "--wcm-text-medium-regular-line-height": "20px",
                        "--wcm-text-medium-regular-letter-spacing": "-0.03em",
                        "--wcm-text-medium-regular-text-transform": "none",
                        "--wcm-font-family": "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
                        "--wcm-font-feature-settings": "'tnum' on, 'lnum' on, 'case' on",
                        "--wcm-success-color": "rgb(38,181,98)",
                        "--wcm-error-color": "rgb(242, 90, 103)",
                        "--wcm-overlay-background-color": "rgba(0, 0, 0, 0.3)",
                        "--wcm-overlay-backdrop-filter": "none"
                    }), r);
                    Object.entries(i).forEach(([l,s])=>n.style.setProperty(l, s))
                }
            },
            globalCss: p`*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button wcm-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--wcm-accent-fill-color);background:var(--wcm-accent-color)}`
        }
          , Qr = p`button{border-radius:var(--wcm-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--wcm-accent-color)}button path{fill:var(--wcm-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--wcm-color-overlay)}button:disabled::after{background-color:transparent}.wcm-icon-left svg{margin-right:5px}.wcm-icon-right svg{margin-left:5px}button:active::after{background-color:var(--wcm-color-overlay)}.wcm-ghost,.wcm-ghost:active::after,.wcm-outline{background-color:transparent}.wcm-ghost:active{opacity:.5}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}.wcm-ghost:hover::after{background-color:transparent}.wcm-ghost:hover{opacity:.5}}button:disabled{background-color:var(--wcm-color-bg-3);pointer-events:none}.wcm-ghost::after{border-color:transparent}.wcm-ghost path{fill:var(--wcm-color-fg-2)}.wcm-outline path{fill:var(--wcm-accent-color)}.wcm-outline:disabled{background-color:transparent;opacity:.5}`;
        var qr = Object.defineProperty
          , Xr = Object.getOwnPropertyDescriptor
          , Jt = (n,r,i,l)=>{
            for (var c, s = l > 1 ? void 0 : l ? Xr(r, i) : r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = (l ? c(r, i, s) : c(s)) || s);
            return l && s && qr(r, i, s),
            s
        }
        ;
        let kt = class extends G {
            constructor() {
                super(...arguments),
                this.disabled = !1,
                this.iconLeft = void 0,
                this.iconRight = void 0,
                this.onClick = ()=>null,
                this.variant = "default"
            }
            render() {
                let r = "inverse";
                return "ghost" === this.variant && (r = "secondary"),
                "outline" === this.variant && (r = "accent"),
                C`<button class="${$t({
                    "wcm-icon-left": void 0 !== this.iconLeft,
                    "wcm-icon-right": void 0 !== this.iconRight,
                    "wcm-ghost": "ghost" === this.variant,
                    "wcm-outline": "outline" === this.variant
                })}" ?disabled="${this.disabled}" @click="${this.onClick}">${this.iconLeft}<wcm-text variant="small-regular" color="${r}"><slot></slot></wcm-text>${this.iconRight}</button>`
            }
        }
        ;
        kt.styles = [Q.globalCss, Qr],
        Jt([F({
            type: Boolean
        })], kt.prototype, "disabled", 2),
        Jt([F()], kt.prototype, "iconLeft", 2),
        Jt([F()], kt.prototype, "iconRight", 2),
        Jt([F()], kt.prototype, "onClick", 2),
        Jt([F()], kt.prototype, "variant", 2),
        kt = Jt([X("wcm-button")], kt);
        const tn = p`:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--wcm-button-border-radius);color:var(--wcm-accent-fill-color);background-color:var(--wcm-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--wcm-color-overlay)}button:active::after{background-color:var(--wcm-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--wcm-color-bg-3);color:var(--wcm-color-fg-3)}.wcm-secondary{color:var(--wcm-accent-color);background-color:transparent}.wcm-secondary::after{display:none}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}}`;
        var en = Object.defineProperty
          , on = Object.getOwnPropertyDescriptor
          , Fe = (n,r,i,l)=>{
            for (var c, s = l > 1 ? void 0 : l ? on(r, i) : r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = (l ? c(r, i, s) : c(s)) || s);
            return l && s && en(r, i, s),
            s
        }
        ;
        let de = class extends G {
            constructor() {
                super(...arguments),
                this.disabled = !1,
                this.variant = "primary"
            }
            render() {
                return C`<button ?disabled="${this.disabled}" class="${$t({
                    "wcm-secondary": "secondary" === this.variant
                })}"><slot></slot></button>`
            }
        }
        ;
        de.styles = [Q.globalCss, tn],
        Fe([F({
            type: Boolean
        })], de.prototype, "disabled", 2),
        Fe([F()], de.prototype, "variant", 2),
        de = Fe([X("wcm-button-big")], de);
        const rn = p`:host{background-color:var(--wcm-color-bg-2);border-top:1px solid var(--wcm-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}`;
        let Ve = class extends G {
            render() {
                return C`<div><slot></slot></div>`
            }
        }
        ;
        Ve.styles = [Q.globalCss, rn],
        Ve = ((n,r,i,l)=>{
            for (var c, s = r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = c(s) || s);
            return s
        }
        )([X("wcm-info-footer")], Ve);
        const nt = {
            CROSS_ICON: rt`<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`,
            WALLET_CONNECT_LOGO: rt`<svg width="178" height="29" viewBox="0 0 178 29" id="wcm-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`,
            WALLET_CONNECT_ICON: rt`<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`,
            WALLET_CONNECT_ICON_COLORED: rt`<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`,
            BACK_ICON: rt`<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`,
            COPY_ICON: rt`<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`,
            RETRY_ICON: rt`<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`,
            DESKTOP_ICON: rt`<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
            MOBILE_ICON: rt`<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`,
            ARROW_DOWN_ICON: rt`<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`,
            ARROW_UP_RIGHT_ICON: rt`<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
            ARROW_RIGHT_ICON: rt`<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`,
            QRCODE_ICON: rt`<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`,
            SCAN_ICON: rt`<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`,
            CHECKMARK_ICON: rt`<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`,
            SEARCH_ICON: rt`<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`,
            WALLET_PLACEHOLDER: rt`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
            GLOBE_ICON: rt`<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>`
        }
          , an = p`.wcm-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--wcm-background-border-radius) * .9);background-color:var(--wcm-background-color);background-position:center;background-size:cover}.wcm-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.wcm-toolbar img,.wcm-toolbar svg{height:28px;object-position:left center;object-fit:contain}#wcm-wc-logo path{fill:var(--wcm-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--wcm-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--wcm-color-bg-1);box-shadow:0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--wcm-color-fg-1)}.wcm-toolbar div{display:flex}@media(hover:hover){button:hover{background-color:var(--wcm-color-bg-2)}}`;
        let Ze = class extends G {
            render() {
                return C`<div class="wcm-toolbar-placeholder"></div><div class="wcm-toolbar">${nt.WALLET_CONNECT_LOGO} <button @click="${y.jb.close}">${nt.CROSS_ICON}</button></div>`
            }
        }
        ;
        Ze.styles = [Q.globalCss, an],
        Ze = ((n,r,i,l)=>{
            for (var c, s = r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = c(s) || s);
            return s
        }
        )([X("wcm-modal-backcard")], Ze);
        const un = p`main{padding:20px;padding-top:0;width:100%}`;
        let Ke = class extends G {
            render() {
                return C`<main><slot></slot></main>`
            }
        }
        ;
        Ke.styles = [Q.globalCss, un],
        Ke = ((n,r,i,l)=>{
            for (var c, s = r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = c(s) || s);
            return s
        }
        )([X("wcm-modal-content")], Ke);
        const pn = p`footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--wcm-color-bg-2)}`;
        let Ye = class extends G {
            render() {
                return C`<footer><slot></slot></footer>`
            }
        }
        ;
        Ye.styles = [Q.globalCss, pn],
        Ye = ((n,r,i,l)=>{
            for (var c, s = r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = c(s) || s);
            return s
        }
        )([X("wcm-modal-footer")], Ye);
        const yn = p`header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.wcm-border{border-bottom:1px solid var(--wcm-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}header button:active{opacity:.5}@media(hover:hover){header button:hover{opacity:.5}}.wcm-back-btn{position:absolute;left:0}.wcm-action-btn{position:absolute;right:0}path{fill:var(--wcm-accent-color)}`;
        var xn = Object.defineProperty
          , Cn = Object.getOwnPropertyDescriptor
          , he = (n,r,i,l)=>{
            for (var c, s = l > 1 ? void 0 : l ? Cn(r, i) : r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = (l ? c(r, i, s) : c(s)) || s);
            return l && s && xn(r, i, s),
            s
        }
        ;
        let Dt = class extends G {
            constructor() {
                super(...arguments),
                this.title = "",
                this.onAction = void 0,
                this.actionIcon = void 0,
                this.border = !1
            }
            backBtnTemplate() {
                return C`<button class="wcm-back-btn" @click="${y.AV.goBack}">${nt.BACK_ICON}</button>`
            }
            actionBtnTemplate() {
                return C`<button class="wcm-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`
            }
            render() {
                const r = y.AV.state.history.length > 1
                  , i = this.title ? C`<wcm-text variant="big-bold">${this.title}</wcm-text>` : C`<slot></slot>`;
                return C`<header class="${$t({
                    "wcm-border": this.border
                })}">${r ? this.backBtnTemplate() : null} ${i} ${this.onAction ? this.actionBtnTemplate() : null}</header>`
            }
        }
        ;
        Dt.styles = [Q.globalCss, yn],
        he([F()], Dt.prototype, "title", 2),
        he([F()], Dt.prototype, "onAction", 2),
        he([F()], Dt.prototype, "actionIcon", 2),
        he([F({
            type: Boolean
        })], Dt.prototype, "border", 2),
        Dt = he([X("wcm-modal-header")], Dt);
        const j = {
            MOBILE_BREAKPOINT: 600,
            WCM_RECENT_WALLET_DATA: "WCM_RECENT_WALLET_DATA",
            EXPLORER_WALLET_URL: "https://explorer.walletconnect.com/?type=wallet",
            getShadowRootElement(n, r) {
                const i = n.renderRoot.querySelector(r);
                if (!i)
                    throw new Error(`${r} not found`);
                return i
            },
            getWalletIcon({id: n, image_id: r}) {
                const {walletImages: i} = y.ConfigCtrl.state;
                return null != i && i[n] ? i[n] : r ? y.ExplorerCtrl.getWalletImageUrl(r) : ""
            },
            getWalletName: (n,r=!1)=>r && n.length > 8 ? `${n.substring(0, 8)}..` : n,
            isMobileAnimation: ()=>window.innerWidth <= j.MOBILE_BREAKPOINT,
            preloadImage: n=>(0,
            u.Z)(function*() {
                const r = new Promise((i,l)=>{
                    const s = new Image;
                    s.onload = i,
                    s.onerror = l,
                    s.crossOrigin = "anonymous",
                    s.src = n
                }
                );
                return Promise.race([r, y.zv.wait(3e3)])
            })(),
            getErrorMessage: n=>n instanceof Error ? n.message : "Unknown Error",
            debounce(n, r=500) {
                let i;
                return (...l)=>{
                    i && clearTimeout(i),
                    i = setTimeout(function s() {
                        n(...l)
                    }, r)
                }
            },
            handleMobileLinking(n) {
                const {walletConnectUri: r} = y.OptionsCtrl.state
                  , {mobile: i, name: l} = n
                  , s = i?.native
                  , a = i?.universal;
                j.setRecentWallet(n),
                r && function c(x) {
                    let E = "";
                    s ? E = y.zv.formatUniversalUrl(s, x, l) : a && (E = y.zv.formatNativeUrl(a, x, l)),
                    y.zv.openHref(E, "_self")
                }(r)
            },
            handleAndroidLinking() {
                const {walletConnectUri: n} = y.OptionsCtrl.state;
                n && (y.zv.setWalletConnectAndroidDeepLink(n),
                y.zv.openHref(n, "_self"))
            },
            handleUriCopy: ()=>(0,
            u.Z)(function*() {
                const {walletConnectUri: n} = y.OptionsCtrl.state;
                if (n)
                    try {
                        yield navigator.clipboard.writeText(n),
                        y.ToastCtrl.openToast("Link copied", "success")
                    } catch {
                        y.ToastCtrl.openToast("Failed to copy", "error")
                    }
            })(),
            getCustomImageUrls() {
                const {walletImages: n} = y.ConfigCtrl.state
                  , r = Object.values(n ?? {});
                return Object.values(r)
            },
            truncate: (n,r=8)=>n.length <= r ? n : `${n.substring(0, 4)}...${n.substring(n.length - 4)}`,
            setRecentWallet(n) {
                try {
                    localStorage.setItem(j.WCM_RECENT_WALLET_DATA, JSON.stringify(n))
                } catch {
                    console.info("Unable to set recent wallet")
                }
            },
            getRecentWallet() {
                try {
                    const n = localStorage.getItem(j.WCM_RECENT_WALLET_DATA);
                    return n ? JSON.parse(n) : void 0
                } catch {
                    console.info("Unable to get recent wallet")
                }
            },
            caseSafeIncludes: (n,r)=>n.toUpperCase().includes(r.toUpperCase()),
            openWalletExplorerUrl() {
                y.zv.openHref(j.EXPLORER_WALLET_URL, "_blank")
            },
            getCachedRouterWalletPlatforms() {
                const {desktop: n, mobile: r} = y.zv.getWalletRouterData()
                  , i = !!n?.native
                  , l = !!n?.universal;
                return {
                    isDesktop: i,
                    isMobile: !!r?.native || !!r?.universal,
                    isWeb: l
                }
            },
            goToConnectingView(n) {
                y.AV.setData({
                    Wallet: n
                });
                const r = y.zv.isMobile()
                  , {isDesktop: i, isWeb: l, isMobile: s} = j.getCachedRouterWalletPlatforms();
                y.AV.push(r ? s ? "MobileConnecting" : l ? "WebConnecting" : "InstallWallet" : i ? "DesktopConnecting" : l ? "WebConnecting" : s ? "MobileQrcodeConnecting" : "InstallWallet")
            }
        }
          , En = p`.wcm-router{overflow:hidden;will-change:transform}.wcm-content{display:flex;flex-direction:column}`;
        var $n = Object.defineProperty
          , An = Object.getOwnPropertyDescriptor
          , Ge = (n,r,i,l)=>{
            for (var c, s = l > 1 ? void 0 : l ? An(r, i) : r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = (l ? c(r, i, s) : c(s)) || s);
            return l && s && $n(r, i, s),
            s
        }
        ;
        let ue = class extends G {
            constructor() {
                super(),
                this.view = y.AV.state.view,
                this.prevView = y.AV.state.view,
                this.unsubscribe = void 0,
                this.oldHeight = "0px",
                this.resizeObserver = void 0,
                this.unsubscribe = y.AV.subscribe(n=>{
                    this.view !== n.view && this.onChangeRoute()
                }
                )
            }
            firstUpdated() {
                this.resizeObserver = new ResizeObserver(([n])=>{
                    const r = `${n.contentRect.height}px`;
                    "0px" !== this.oldHeight && Bt(this.routerEl, {
                        height: [this.oldHeight, r]
                    }, {
                        duration: .2
                    }),
                    this.oldHeight = r
                }
                ),
                this.resizeObserver.observe(this.contentEl)
            }
            disconnectedCallback() {
                var n, r;
                null == (n = this.unsubscribe) || n.call(this),
                null == (r = this.resizeObserver) || r.disconnect()
            }
            get routerEl() {
                return j.getShadowRootElement(this, ".wcm-router")
            }
            get contentEl() {
                return j.getShadowRootElement(this, ".wcm-content")
            }
            viewTemplate() {
                switch (this.view) {
                case "ConnectWallet":
                    return C`<wcm-connect-wallet-view></wcm-connect-wallet-view>`;
                case "DesktopConnecting":
                    return C`<wcm-desktop-connecting-view></wcm-desktop-connecting-view>`;
                case "MobileConnecting":
                    return C`<wcm-mobile-connecting-view></wcm-mobile-connecting-view>`;
                case "WebConnecting":
                    return C`<wcm-web-connecting-view></wcm-web-connecting-view>`;
                case "MobileQrcodeConnecting":
                    return C`<wcm-mobile-qr-connecting-view></wcm-mobile-qr-connecting-view>`;
                case "WalletExplorer":
                    return C`<wcm-wallet-explorer-view></wcm-wallet-explorer-view>`;
                case "Qrcode":
                    return C`<wcm-qrcode-view></wcm-qrcode-view>`;
                case "InstallWallet":
                    return C`<wcm-install-wallet-view></wcm-install-wallet-view>`;
                default:
                    return C`<div>Not Found</div>`
                }
            }
            onChangeRoute() {
                var n = this;
                return (0,
                u.Z)(function*() {
                    yield Bt(n.routerEl, {
                        opacity: [1, 0],
                        scale: [1, 1.02]
                    }, {
                        duration: .15,
                        delay: .1
                    }).finished,
                    n.view = y.AV.state.view,
                    Bt(n.routerEl, {
                        opacity: [0, 1],
                        scale: [.99, 1]
                    }, {
                        duration: .37,
                        delay: .05
                    })
                })()
            }
            render() {
                return C`<div class="wcm-router"><div class="wcm-content">${this.viewTemplate()}</div></div>`
            }
        }
        ;
        ue.styles = [Q.globalCss, En],
        Ge([wt()], ue.prototype, "view", 2),
        Ge([wt()], ue.prototype, "prevView", 2),
        ue = Ge([X("wcm-modal-router")], ue);
        const _n = p`div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--wcm-notification-border-radius);border:1px solid var(--wcm-color-overlay);background-color:var(--wcm-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--wcm-color-bg-3)}}.wcm-success path{fill:var(--wcm-accent-color)}.wcm-error path{fill:var(--wcm-error-color)}`;
        var On = Object.defineProperty
          , Tn = Object.getOwnPropertyDescriptor
          , zo = (n,r,i,l)=>{
            for (var c, s = l > 1 ? void 0 : l ? Tn(r, i) : r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = (l ? c(r, i, s) : c(s)) || s);
            return l && s && On(r, i, s),
            s
        }
        ;
        let Ee = class extends G {
            constructor() {
                super(),
                this.open = !1,
                this.unsubscribe = void 0,
                this.timeout = void 0,
                this.unsubscribe = y.ToastCtrl.subscribe(n=>{
                    n.open ? (this.open = !0,
                    this.timeout = setTimeout(()=>y.ToastCtrl.closeToast(), 2200)) : (this.open = !1,
                    clearTimeout(this.timeout))
                }
                )
            }
            disconnectedCallback() {
                var n;
                null == (n = this.unsubscribe) || n.call(this),
                clearTimeout(this.timeout),
                y.ToastCtrl.closeToast()
            }
            render() {
                const {message: n, variant: r} = y.ToastCtrl.state;
                return this.open ? C`<div class="${$t({
                    "wcm-success": "success" === r,
                    "wcm-error": "error" === r
                })}">${"success" === r ? nt.CHECKMARK_ICON : null} ${"error" === r ? nt.CROSS_ICON : null}<wcm-text variant="small-regular">${n}</wcm-text></div>` : null
            }
        }
        ;
        function Je(n, r, i) {
            return n !== r && (n - r < 0 ? r - n : n - r) <= i + .1
        }
        Ee.styles = [Q.globalCss, _n],
        zo([wt()], Ee.prototype, "open", 2),
        Ee = zo([X("wcm-modal-toast")], Ee);
        const Mn = {
            generate(n, r, i) {
                const l = "#141414"
                  , a = []
                  , c = function kn(n, r) {
                    const i = Array.prototype.slice.call(Zr.create(n, {
                        errorCorrectionLevel: r
                    }).modules.data, 0)
                      , l = Math.sqrt(i.length);
                    return i.reduce((s,a,c)=>(c % l == 0 ? s.push([a]) : s[s.length - 1].push(a)) && s, [])
                }(n, "Q")
                  , x = r / c.length
                  , E = [{
                    x: 0,
                    y: 0
                }, {
                    x: 1,
                    y: 0
                }, {
                    x: 0,
                    y: 1
                }];
                E.forEach(({x: et, y: Y})=>{
                    const ht = (c.length - 7) * x * et
                      , ot = (c.length - 7) * x * Y;
                    for (let ft = 0; ft < E.length; ft += 1) {
                        const vt = x * (7 - 2 * ft);
                        a.push(rt`<rect fill="${ft % 2 == 0 ? l : "#ffffff"}" height="${vt}" rx="${.45 * vt}" ry="${.45 * vt}" width="${vt}" x="${ht + x * ft}" y="${ot + x * ft}">`)
                    }
                }
                );
                const _ = Math.floor((i + 25) / x)
                  , J = c.length / 2 - _ / 2
                  , tt = c.length / 2 + _ / 2 - 1
                  , V = [];
                c.forEach((et,Y)=>{
                    et.forEach((ht,ot)=>{
                        !c[Y][ot] || Y < 7 && ot < 7 || Y > c.length - 8 && ot < 7 || Y < 7 && ot > c.length - 8 || Y > J && Y < tt && ot > J && ot < tt || V.push([Y * x + x / 2, ot * x + x / 2])
                    }
                    )
                }
                );
                const st = {};
                return V.forEach(([et,Y])=>{
                    st[et] ? st[et].push(Y) : st[et] = [Y]
                }
                ),
                Object.entries(st).map(([et,Y])=>{
                    const ht = Y.filter(ot=>Y.every(mt=>!Je(ot, mt, x)));
                    return [Number(et), ht]
                }
                ).forEach(([et,Y])=>{
                    Y.forEach(ht=>{
                        a.push(rt`<circle cx="${et}" cy="${ht}" fill="${l}" r="${x / 2.5}">`)
                    }
                    )
                }
                ),
                Object.entries(st).filter(([et,Y])=>Y.length > 1).map(([et,Y])=>{
                    const ht = Y.filter(ot=>Y.some(mt=>Je(ot, mt, x)));
                    return [Number(et), ht]
                }
                ).map(([et,Y])=>{
                    Y.sort((ot,mt)=>ot < mt ? -1 : 1);
                    const ht = [];
                    for (const ot of Y) {
                        const mt = ht.find(ft=>ft.some(vt=>Je(ot, vt, x)));
                        mt ? mt.push(ot) : ht.push([ot])
                    }
                    return [et, ht.map(ot=>[ot[0], ot[ot.length - 1]])]
                }
                ).forEach(([et,Y])=>{
                    Y.forEach(([ht,ot])=>{
                        a.push(rt`<line x1="${et}" x2="${et}" y1="${ht}" y2="${ot}" stroke="${l}" stroke-width="${x / 1.25}" stroke-linecap="round">`)
                    }
                    )
                }
                ),
                a
            }
        }
          , Pn = p`@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;aspect-ratio:1/1;animation:fadeIn ease .2s}.wcm-dark{background-color:#fff;border-radius:var(--wcm-container-border-radius);padding:18px;box-shadow:0 2px 5px #000}svg:first-child,wcm-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{width:25%;height:25%;border-radius:var(--wcm-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--wcm-accent-color)}svg:first-child path:last-child{stroke:var(--wcm-color-overlay)}`;
        var Sn = Object.defineProperty
          , Rn = Object.getOwnPropertyDescriptor
          , Qt = (n,r,i,l)=>{
            for (var c, s = l > 1 ? void 0 : l ? Rn(r, i) : r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = (l ? c(r, i, s) : c(s)) || s);
            return l && s && Sn(r, i, s),
            s
        }
        ;
        let _t = class extends G {
            constructor() {
                super(...arguments),
                this.uri = "",
                this.size = 0,
                this.imageId = void 0,
                this.walletId = void 0,
                this.imageUrl = void 0
            }
            svgTemplate() {
                const n = "light" === y.ThemeCtrl.state.themeMode ? this.size : this.size - 36;
                return rt`<svg height="${n}" width="${n}">${Mn.generate(this.uri, n, n / 4)}</svg>`
            }
            render() {
                return C`<div style="${`width: ${this.size}px`}" class="${$t({
                    "wcm-dark": "dark" === y.ThemeCtrl.state.themeMode
                })}">${this.walletId || this.imageUrl ? C`<wcm-wallet-image walletId="${pt(this.walletId)}" imageId="${pt(this.imageId)}" imageUrl="${pt(this.imageUrl)}"></wcm-wallet-image>` : nt.WALLET_CONNECT_ICON_COLORED} ${this.svgTemplate()}</div>`
            }
        }
        ;
        _t.styles = [Q.globalCss, Pn],
        Qt([F()], _t.prototype, "uri", 2),
        Qt([F({
            type: Number
        })], _t.prototype, "size", 2),
        Qt([F()], _t.prototype, "imageId", 2),
        Qt([F()], _t.prototype, "walletId", 2),
        Qt([F()], _t.prototype, "imageUrl", 2),
        _t = Qt([X("wcm-qrcode")], _t);
        const Ln = p`:host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--wcm-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:var(--wcm-color-fg-1);background-color:var(--wcm-color-bg-3);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay);caret-color:var(--wcm-accent-color)}input::placeholder{color:var(--wcm-color-fg-2)}svg{left:10px;top:4px;pointer-events:none;position:absolute;width:20px;height:20px}input:focus-within{box-shadow:inset 0 0 0 1px var(--wcm-accent-color)}path{fill:var(--wcm-color-fg-2)}`;
        var Nn = Object.defineProperty
          , Bn = Object.getOwnPropertyDescriptor
          , Fo = (n,r,i,l)=>{
            for (var c, s = l > 1 ? void 0 : l ? Bn(r, i) : r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = (l ? c(r, i, s) : c(s)) || s);
            return l && s && Nn(r, i, s),
            s
        }
        ;
        let $e = class extends G {
            constructor() {
                super(...arguments),
                this.onChange = ()=>null
            }
            render() {
                return C`<input type="text" @input="${this.onChange}" placeholder="Search wallets"> ${nt.SEARCH_ICON}`
            }
        }
        ;
        $e.styles = [Q.globalCss, Ln],
        Fo([F()], $e.prototype, "onChange", 2),
        $e = Fo([X("wcm-search-input")], $e);
        const Dn = p`@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--wcm-accent-color)}`;
        let Qe = class extends G {
            render() {
                return C`<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`
            }
        }
        ;
        Qe.styles = [Q.globalCss, Dn],
        Qe = ((n,r,i,l)=>{
            for (var c, s = r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = c(s) || s);
            return s
        }
        )([X("wcm-spinner")], Qe);
        const zn = p`span{font-style:normal;font-family:var(--wcm-font-family);font-feature-settings:var(--wcm-font-feature-settings)}.wcm-xsmall-bold{font-family:var(--wcm-text-xsmall-bold-font-family);font-weight:var(--wcm-text-xsmall-bold-weight);font-size:var(--wcm-text-xsmall-bold-size);line-height:var(--wcm-text-xsmall-bold-line-height);letter-spacing:var(--wcm-text-xsmall-bold-letter-spacing);text-transform:var(--wcm-text-xsmall-bold-text-transform)}.wcm-xsmall-regular{font-family:var(--wcm-text-xsmall-regular-font-family);font-weight:var(--wcm-text-xsmall-regular-weight);font-size:var(--wcm-text-xsmall-regular-size);line-height:var(--wcm-text-xsmall-regular-line-height);letter-spacing:var(--wcm-text-xsmall-regular-letter-spacing);text-transform:var(--wcm-text-xsmall-regular-text-transform)}.wcm-small-thin{font-family:var(--wcm-text-small-thin-font-family);font-weight:var(--wcm-text-small-thin-weight);font-size:var(--wcm-text-small-thin-size);line-height:var(--wcm-text-small-thin-line-height);letter-spacing:var(--wcm-text-small-thin-letter-spacing);text-transform:var(--wcm-text-small-thin-text-transform)}.wcm-small-regular{font-family:var(--wcm-text-small-regular-font-family);font-weight:var(--wcm-text-small-regular-weight);font-size:var(--wcm-text-small-regular-size);line-height:var(--wcm-text-small-regular-line-height);letter-spacing:var(--wcm-text-small-regular-letter-spacing);text-transform:var(--wcm-text-small-regular-text-transform)}.wcm-medium-regular{font-family:var(--wcm-text-medium-regular-font-family);font-weight:var(--wcm-text-medium-regular-weight);font-size:var(--wcm-text-medium-regular-size);line-height:var(--wcm-text-medium-regular-line-height);letter-spacing:var(--wcm-text-medium-regular-letter-spacing);text-transform:var(--wcm-text-medium-regular-text-transform)}.wcm-big-bold{font-family:var(--wcm-text-big-bold-font-family);font-weight:var(--wcm-text-big-bold-weight);font-size:var(--wcm-text-big-bold-size);line-height:var(--wcm-text-big-bold-line-height);letter-spacing:var(--wcm-text-big-bold-letter-spacing);text-transform:var(--wcm-text-big-bold-text-transform)}:host(*){color:var(--wcm-color-fg-1)}.wcm-color-primary{color:var(--wcm-color-fg-1)}.wcm-color-secondary{color:var(--wcm-color-fg-2)}.wcm-color-tertiary{color:var(--wcm-color-fg-3)}.wcm-color-inverse{color:var(--wcm-accent-fill-color)}.wcm-color-accnt{color:var(--wcm-accent-color)}.wcm-color-error{color:var(--wcm-error-color)}`;
        var Hn = Object.defineProperty
          , Fn = Object.getOwnPropertyDescriptor
          , qe = (n,r,i,l)=>{
            for (var c, s = l > 1 ? void 0 : l ? Fn(r, i) : r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = (l ? c(r, i, s) : c(s)) || s);
            return l && s && Hn(r, i, s),
            s
        }
        ;
        let me = class extends G {
            constructor() {
                super(...arguments),
                this.variant = "medium-regular",
                this.color = "primary"
            }
            render() {
                return C`<span><slot class="${$t({
                    "wcm-big-bold": "big-bold" === this.variant,
                    "wcm-medium-regular": "medium-regular" === this.variant,
                    "wcm-small-regular": "small-regular" === this.variant,
                    "wcm-small-thin": "small-thin" === this.variant,
                    "wcm-xsmall-regular": "xsmall-regular" === this.variant,
                    "wcm-xsmall-bold": "xsmall-bold" === this.variant,
                    "wcm-color-primary": "primary" === this.color,
                    "wcm-color-secondary": "secondary" === this.color,
                    "wcm-color-tertiary": "tertiary" === this.color,
                    "wcm-color-inverse": "inverse" === this.color,
                    "wcm-color-accnt": "accent" === this.color,
                    "wcm-color-error": "error" === this.color
                })}"></slot></span>`
            }
        }
        ;
        me.styles = [Q.globalCss, zn],
        qe([F()], me.prototype, "variant", 2),
        qe([F()], me.prototype, "color", 2),
        me = qe([X("wcm-text")], me);
        const Vn = p`button{width:100%;height:100%;border-radius:var(--wcm-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}wcm-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}wcm-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--wcm-wallet-icon-border-radius);margin-bottom:5px}.wcm-sublabel{margin-top:2px}`;
        var Zn = Object.defineProperty
          , Kn = Object.getOwnPropertyDescriptor
          , Mt = (n,r,i,l)=>{
            for (var c, s = l > 1 ? void 0 : l ? Kn(r, i) : r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = (l ? c(r, i, s) : c(s)) || s);
            return l && s && Zn(r, i, s),
            s
        }
        ;
        let Et = class extends G {
            constructor() {
                super(...arguments),
                this.onClick = ()=>null,
                this.name = "",
                this.walletId = "",
                this.label = void 0,
                this.imageId = void 0,
                this.installed = !1,
                this.recent = !1
            }
            sublabelTemplate() {
                return this.recent ? C`<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">RECENT</wcm-text>` : this.installed ? C`<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</wcm-text>` : null
            }
            handleClick() {
                y.uA.click({
                    name: "WALLET_BUTTON",
                    walletId: this.walletId
                }),
                this.onClick()
            }
            render() {
                var n;
                return C`<button @click="${this.handleClick.bind(this)}"><div><wcm-wallet-image walletId="${this.walletId}" imageId="${pt(this.imageId)}"></wcm-wallet-image><wcm-text variant="xsmall-regular">${null != (n = this.label) ? n : j.getWalletName(this.name, !0)}</wcm-text>${this.sublabelTemplate()}</div></button>`
            }
        }
        ;
        Et.styles = [Q.globalCss, Vn],
        Mt([F()], Et.prototype, "onClick", 2),
        Mt([F()], Et.prototype, "name", 2),
        Mt([F()], Et.prototype, "walletId", 2),
        Mt([F()], Et.prototype, "label", 2),
        Mt([F()], Et.prototype, "imageId", 2),
        Mt([F({
            type: Boolean
        })], Et.prototype, "installed", 2),
        Mt([F({
            type: Boolean
        })], Et.prototype, "recent", 2),
        Et = Mt([X("wcm-wallet-button")], Et);
        const Yn = p`:host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--wcm-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--wcm-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
        var Gn = Object.defineProperty
          , Jn = Object.getOwnPropertyDescriptor
          , Ae = (n,r,i,l)=>{
            for (var c, s = l > 1 ? void 0 : l ? Jn(r, i) : r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = (l ? c(r, i, s) : c(s)) || s);
            return l && s && Gn(r, i, s),
            s
        }
        ;
        let qt = class extends G {
            constructor() {
                super(...arguments),
                this.walletId = "",
                this.imageId = void 0,
                this.imageUrl = void 0
            }
            render() {
                var n;
                const r = null != (n = this.imageUrl) && n.length ? this.imageUrl : j.getWalletIcon({
                    id: this.walletId,
                    image_id: this.imageId
                });
                return C`${r.length ? C`<div><img crossorigin="anonymous" src="${r}" alt="${this.id}"></div>` : nt.WALLET_PLACEHOLDER}`
            }
        }
        ;
        qt.styles = [Q.globalCss, Yn],
        Ae([F()], qt.prototype, "walletId", 2),
        Ae([F()], qt.prototype, "imageId", 2),
        Ae([F()], qt.prototype, "imageUrl", 2),
        qt = Ae([X("wcm-wallet-image")], qt);
        var Qn = Object.defineProperty
          , qn = Object.getOwnPropertyDescriptor
          , Vo = (n,r,i,l)=>{
            for (var c, s = l > 1 ? void 0 : l ? qn(r, i) : r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = (l ? c(r, i, s) : c(s)) || s);
            return l && s && Qn(r, i, s),
            s
        }
        ;
        let Xe = class extends G {
            constructor() {
                super(),
                this.preload = !0,
                this.preloadData()
            }
            loadImages(n) {
                return (0,
                u.Z)(function*() {
                    try {
                        null != n && n.length && (yield Promise.all(n.map(function() {
                            var r = (0,
                            u.Z)(function*(i) {
                                return j.preloadImage(i)
                            });
                            return function(i) {
                                return r.apply(this, arguments)
                            }
                        }())))
                    } catch {
                        console.info("Unsuccessful attempt at preloading some images", n)
                    }
                })()
            }
            preloadListings() {
                var n = this;
                return (0,
                u.Z)(function*() {
                    if (y.ConfigCtrl.state.enableExplorer) {
                        yield y.ExplorerCtrl.getRecomendedWallets(),
                        y.OptionsCtrl.setIsDataLoaded(!0);
                        const {recomendedWallets: r} = y.ExplorerCtrl.state
                          , i = r.map(l=>j.getWalletIcon(l));
                        yield n.loadImages(i)
                    } else
                        y.OptionsCtrl.setIsDataLoaded(!0)
                })()
            }
            preloadCustomImages() {
                var n = this;
                return (0,
                u.Z)(function*() {
                    const r = j.getCustomImageUrls();
                    yield n.loadImages(r)
                })()
            }
            preloadData() {
                var n = this;
                return (0,
                u.Z)(function*() {
                    try {
                        n.preload && (n.preload = !1,
                        yield Promise.all([n.preloadListings(), n.preloadCustomImages()]))
                    } catch (r) {
                        console.error(r),
                        y.ToastCtrl.openToast("Failed preloading", "error")
                    }
                })()
            }
        }
        ;
        Vo([wt()], Xe.prototype, "preload", 2),
        Xe = Vo([X("wcm-explorer-context")], Xe);
        let Zo = class extends G {
            constructor() {
                super(),
                this.unsubscribeTheme = void 0,
                Q.setTheme(),
                this.unsubscribeTheme = y.ThemeCtrl.subscribe(Q.setTheme)
            }
            disconnectedCallback() {
                var n;
                null == (n = this.unsubscribeTheme) || n.call(this)
            }
        }
        ;
        Zo = ((n,r,i,l)=>{
            for (var c, s = r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = c(s) || s);
            return s
        }
        )([X("wcm-theme-context")], Zo);
        const oi = p`@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.wcm-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.wcm-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}.wcm-track svg{margin:0 5px}wcm-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--wcm-wallet-icon-border-radius)}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-title{display:flex;align-items:center;margin-bottom:10px}.wcm-title svg{margin-right:6px}.wcm-title path{fill:var(--wcm-accent-color)}wcm-modal-footer .wcm-title{padding:0 10px}wcm-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--wcm-color-bg-1))}wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-info-footer wcm-text{text-align:center;margin-bottom:15px}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
        let to = class extends G {
            onGoToQrcode() {
                y.AV.push("Qrcode")
            }
            render() {
                const {recomendedWallets: n} = y.ExplorerCtrl.state
                  , r = [...n, ...n];
                return C`<wcm-modal-header title="Connect your wallet" .onAction="${this.onGoToQrcode}" .actionIcon="${nt.QRCODE_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-title">${nt.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">WalletConnect</wcm-text></div><div class="wcm-slider"><div class="wcm-track">${[...Array(2 * y.zv.RECOMMENDED_WALLET_AMOUNT)].map((l,s)=>{
                    const a = r[s % r.length];
                    return a ? C`<wcm-wallet-image walletId="${a.id}" imageId="${a.image_id}"></wcm-wallet-image>` : nt.WALLET_PLACEHOLDER
                }
                )}</div><wcm-button-big @click="${j.handleAndroidLinking}"><wcm-text variant="medium-regular" color="inverse">Select Wallet</wcm-text></wcm-button-big></div></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">Choose WalletConnect to see supported apps on your device</wcm-text></wcm-info-footer>`
            }
        }
        ;
        to.styles = [Q.globalCss, oi],
        to = ((n,r,i,l)=>{
            for (var c, s = r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = c(s) || s);
            return s
        }
        )([X("wcm-android-wallet-selection")], to);
        const si = p`@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--wcm-accent-color);animation:loading 1s linear infinite}wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:90px;height:90px}wcm-text{margin-bottom:40px}.wcm-error svg{stroke:var(--wcm-error-color)}.wcm-error use{display:none}.wcm-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.wcm-stale svg,.wcm-stale use{display:none}`;
        var li = Object.defineProperty
          , ai = Object.getOwnPropertyDescriptor
          , Xt = (n,r,i,l)=>{
            for (var c, s = l > 1 ? void 0 : l ? ai(r, i) : r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = (l ? c(r, i, s) : c(s)) || s);
            return l && s && li(r, i, s),
            s
        }
        ;
        let Pt = class extends G {
            constructor() {
                super(...arguments),
                this.walletId = void 0,
                this.imageId = void 0,
                this.isError = !1,
                this.isStale = !1,
                this.label = ""
            }
            svgLoaderTemplate() {
                var n, r;
                const i = null != (r = null == (n = y.ThemeCtrl.state.themeVariables) ? void 0 : n["--wcm-wallet-icon-large-border-radius"]) ? r : Q.getPreset("--wcm-wallet-icon-large-border-radius");
                let l = 0;
                return l = i.includes("%") ? .88 * parseInt(i, 10) : parseInt(i, 10),
                l *= 1.17,
                C`<svg viewBox="0 0 110 110" width="110" height="110"><rect id="wcm-loader" x="2" y="2" width="106" height="106" rx="${l}"/><use xlink:href="#wcm-loader" stroke-dasharray="106 ${317 - 1.57 * l}" stroke-dashoffset="${425 - 1.8 * l}"></use></svg>`
            }
            render() {
                return C`<div class="${$t({
                    "wcm-error": this.isError,
                    "wcm-stale": this.isStale
                })}">${this.svgLoaderTemplate()}<wcm-wallet-image walletId="${pt(this.walletId)}" imageId="${pt(this.imageId)}"></wcm-wallet-image></div><wcm-text variant="medium-regular" color="${this.isError ? "error" : "primary"}">${this.isError ? "Connection declined" : this.label}</wcm-text>`
            }
        }
        ;
        Pt.styles = [Q.globalCss, si],
        Xt([F()], Pt.prototype, "walletId", 2),
        Xt([F()], Pt.prototype, "imageId", 2),
        Xt([F({
            type: Boolean
        })], Pt.prototype, "isError", 2),
        Xt([F({
            type: Boolean
        })], Pt.prototype, "isStale", 2),
        Xt([F()], Pt.prototype, "label", 2),
        Pt = Xt([X("wcm-connector-waiting")], Pt);
        const te = {
            manualWallets() {
                var n, r;
                const {mobileWallets: i, desktopWallets: l} = y.ConfigCtrl.state
                  , s = null == (n = te.recentWallet()) ? void 0 : n.id
                  , a = y.zv.isMobile() ? i : l
                  , c = a?.filter(x=>s !== x.id);
                return null != (r = y.zv.isMobile() ? c?.map(({id: x, name: E, links: _})=>({
                    id: x,
                    name: E,
                    mobile: _,
                    links: _
                })) : c?.map(({id: x, name: E, links: _})=>({
                    id: x,
                    name: E,
                    desktop: _,
                    links: _
                }))) ? r : []
            },
            recentWallet: ()=>j.getRecentWallet(),
            recomendedWallets(n=!1) {
                var r;
                const i = n || null == (r = te.recentWallet()) ? void 0 : r.id
                  , {recomendedWallets: l} = y.ExplorerCtrl.state;
                return l.filter(s=>i !== s.id)
            }
        }
          , St = {
            onConnecting(n) {
                j.goToConnectingView(n)
            },
            manualWalletsTemplate() {
                return te.manualWallets().map(n=>C`<wcm-wallet-button walletId="${n.id}" name="${n.name}" .onClick="${()=>this.onConnecting(n)}"></wcm-wallet-button>`)
            },
            recomendedWalletsTemplate(n=!1) {
                return te.recomendedWallets(n).map(r=>C`<wcm-wallet-button name="${r.name}" walletId="${r.id}" imageId="${r.image_id}" .onClick="${()=>this.onConnecting(r)}"></wcm-wallet-button>`)
            },
            recentWalletTemplate() {
                const n = te.recentWallet();
                if (n)
                    return C`<wcm-wallet-button name="${n.name}" walletId="${n.id}" imageId="${pt(n.image_id)}" .recent="${!0}" .onClick="${()=>this.onConnecting(n)}"></wcm-wallet-button>`
            }
        }
          , ci = p`.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-desktop-title,.wcm-mobile-title{display:flex;align-items:center}.wcm-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.wcm-desktop-title{margin-bottom:10px;padding:0 10px}.wcm-subtitle{display:flex;align-items:center}.wcm-subtitle:last-child path{fill:var(--wcm-color-fg-3)}.wcm-desktop-title svg,.wcm-mobile-title svg{margin-right:6px}.wcm-desktop-title path,.wcm-mobile-title path{fill:var(--wcm-accent-color)}`;
        let eo = class extends G {
            render() {
                const {explorerExcludedWalletIds: n, enableExplorer: r} = y.ConfigCtrl.state
                  , i = "ALL" !== n && r
                  , l = St.manualWalletsTemplate()
                  , s = St.recomendedWalletsTemplate();
                let a = [St.recentWalletTemplate(), ...l, ...s];
                a = a.filter(Boolean);
                const c = a.length > 4 || i;
                let x = [];
                return x = c ? a.slice(0, 3) : a,
                C`<wcm-modal-header .border="${!0}" title="Connect your wallet" .onAction="${j.handleUriCopy}" .actionIcon="${nt.COPY_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-mobile-title"><div class="wcm-subtitle">${nt.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">Mobile</wcm-text></div><div class="wcm-subtitle">${nt.SCAN_ICON}<wcm-text variant="small-regular" color="secondary">Scan with your wallet</wcm-text></div></div><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>${x.length ? C`<wcm-modal-footer><div class="wcm-desktop-title">${nt.DESKTOP_ICON}<wcm-text variant="small-regular" color="accent">Desktop</wcm-text></div><div class="wcm-grid">${x} ${c ? C`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>` : null}</div></wcm-modal-footer>` : null}`
            }
        }
        ;
        eo.styles = [Q.globalCss, ci],
        eo = ((n,r,i,l)=>{
            for (var c, s = r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = c(s) || s);
            return s
        }
        )([X("wcm-desktop-wallet-selection")], eo);
        const mi = p`div{background-color:var(--wcm-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--wcm-color-bg-3);text-align:center}a{color:var(--wcm-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:active{opacity:.8}@media(hover:hover){a:hover{opacity:.8}}`;
        let oo = class extends G {
            render() {
                const {termsOfServiceUrl: n, privacyPolicyUrl: r} = y.ConfigCtrl.state;
                return n ?? r ? C`<div><wcm-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app's ${n ? C`<a href="${n}" target="_blank" rel="noopener noreferrer">Terms of Service</a>` : null} ${n && r ? "and" : null} ${r ? C`<a href="${r}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>` : null}</wcm-text></div>` : null
            }
        }
        ;
        oo.styles = [Q.globalCss, mi],
        oo = ((n,r,i,l)=>{
            for (var c, s = r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = c(s) || s);
            return s
        }
        )([X("wcm-legal-notice")], oo);
        const wi = p`div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;
        let ro = class extends G {
            onQrcode() {
                y.AV.push("Qrcode")
            }
            render() {
                const {explorerExcludedWalletIds: n, enableExplorer: r} = y.ConfigCtrl.state
                  , i = "ALL" !== n && r
                  , l = St.manualWalletsTemplate()
                  , s = St.recomendedWalletsTemplate();
                let a = [St.recentWalletTemplate(), ...l, ...s];
                a = a.filter(Boolean);
                const c = a.length > 8 || i;
                let x = [];
                return x = c ? a.slice(0, 7) : a,
                C`<wcm-modal-header title="Connect your wallet" .onAction="${this.onQrcode}" .actionIcon="${nt.QRCODE_ICON}"></wcm-modal-header>${x.length ? C`<wcm-modal-content><div>${x} ${c ? C`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>` : null}</div></wcm-modal-content>` : null}`
            }
        }
        ;
        ro.styles = [Q.globalCss, wi],
        ro = ((n,r,i,l)=>{
            for (var c, s = r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = c(s) || s);
            return s
        }
        )([X("wcm-mobile-wallet-selection")], ro);
        const xi = p`:host{all:initial}.wcm-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--wcm-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;opacity:0;pointer-events:none;background-color:var(--wcm-overlay-background-color);backdrop-filter:var(--wcm-overlay-backdrop-filter)}@media(max-height:720px) and (orientation:landscape){.wcm-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.wcm-active{pointer-events:auto}.wcm-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) var(--wcm-container-border-radius) var(--wcm-container-border-radius);border:1px solid var(--wcm-color-overlay);overflow:hidden}.wcm-card{width:100%;position:relative;border-radius:var(--wcm-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--wcm-color-overlay);background-color:var(--wcm-color-bg-1);color:var(--wcm-color-fg-1)}@media(max-width:600px){.wcm-container{max-width:440px;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) 0 0}.wcm-card{border-radius:var(--wcm-container-border-radius) var(--wcm-container-border-radius) 0 0}.wcm-overlay{align-items:flex-end}}@media(max-width:440px){.wcm-container{border:0}}`;
        var Ci = Object.defineProperty
          , Ei = Object.getOwnPropertyDescriptor
          , no = (n,r,i,l)=>{
            for (var c, s = l > 1 ? void 0 : l ? Ei(r, i) : r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = (l ? c(r, i, s) : c(s)) || s);
            return l && s && Ci(r, i, s),
            s
        }
        ;
        let ee = class extends G {
            constructor() {
                super(),
                this.open = !1,
                this.active = !1,
                this.unsubscribeModal = void 0,
                this.abortController = void 0,
                this.unsubscribeModal = y.jb.subscribe(n=>{
                    n.open ? this.onOpenModalEvent() : this.onCloseModalEvent()
                }
                )
            }
            disconnectedCallback() {
                var n;
                null == (n = this.unsubscribeModal) || n.call(this)
            }
            get overlayEl() {
                return j.getShadowRootElement(this, ".wcm-overlay")
            }
            get containerEl() {
                return j.getShadowRootElement(this, ".wcm-container")
            }
            toggleBodyScroll(n) {
                document.querySelector("body") && (n ? document.getElementById("wcm-styles")?.remove() : document.head.insertAdjacentHTML("beforeend", '<style id="wcm-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>'))
            }
            onCloseModal(n) {
                n.target === n.currentTarget && y.jb.close()
            }
            onOpenModalEvent() {
                var n = this;
                this.toggleBodyScroll(!1),
                this.addKeyboardEvents(),
                this.open = !0,
                setTimeout((0,
                u.Z)(function*() {
                    const r = j.isMobileAnimation() ? {
                        y: ["50vh", "0vh"]
                    } : {
                        scale: [.98, 1]
                    };
                    yield Promise.all([Bt(n.overlayEl, {
                        opacity: [0, 1]
                    }, {
                        delay: .1,
                        duration: .2
                    }).finished, Bt(n.containerEl, r, {
                        delay: .1,
                        duration: .2
                    }).finished]),
                    n.active = !0
                }), 0)
            }
            onCloseModalEvent() {
                var n = this;
                return (0,
                u.Z)(function*() {
                    n.toggleBodyScroll(!0),
                    n.removeKeyboardEvents();
                    const r = j.isMobileAnimation() ? {
                        y: ["0vh", "50vh"]
                    } : {
                        scale: [1, .98]
                    };
                    yield Promise.all([Bt(n.overlayEl, {
                        opacity: [1, 0]
                    }, {
                        duration: .2
                    }).finished, Bt(n.containerEl, r, {
                        duration: .2
                    }).finished]),
                    n.containerEl.removeAttribute("style"),
                    n.active = !1,
                    n.open = !1
                })()
            }
            addKeyboardEvents() {
                this.abortController = new AbortController,
                window.addEventListener("keydown", n=>{
                    var r;
                    "Escape" === n.key ? y.jb.close() : "Tab" === n.key && (null != (r = n.target) && r.tagName.includes("wcm-") || this.containerEl.focus())
                }
                , this.abortController),
                this.containerEl.focus()
            }
            removeKeyboardEvents() {
                var n;
                null == (n = this.abortController) || n.abort(),
                this.abortController = void 0
            }
            render() {
                return C`<wcm-explorer-context></wcm-explorer-context><wcm-theme-context></wcm-theme-context><div id="wcm-modal" class="${$t({
                    "wcm-overlay": !0,
                    "wcm-active": this.active
                })}" @click="${this.onCloseModal}" role="alertdialog" aria-modal="true"><div class="wcm-container" tabindex="0">${this.open ? C`<wcm-modal-backcard></wcm-modal-backcard><div class="wcm-card"><wcm-modal-router></wcm-modal-router><wcm-modal-toast></wcm-modal-toast></div>` : null}</div></div>`
            }
        }
        ;
        ee.styles = [Q.globalCss, xi],
        no([wt()], ee.prototype, "open", 2),
        no([wt()], ee.prototype, "active", 2),
        ee = no([X("wcm-modal")], ee);
        const $i = p`div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}wcm-button{margin:0 5px}`;
        var Ai = Object.defineProperty
          , _i = Object.getOwnPropertyDescriptor
          , ge = (n,r,i,l)=>{
            for (var c, s = l > 1 ? void 0 : l ? _i(r, i) : r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = (l ? c(r, i, s) : c(s)) || s);
            return l && s && Ai(r, i, s),
            s
        }
        ;
        let Ut = class extends G {
            constructor() {
                super(...arguments),
                this.isMobile = !1,
                this.isDesktop = !1,
                this.isWeb = !1,
                this.isRetry = !1
            }
            onMobile() {
                y.zv.isMobile() ? y.AV.replace("MobileConnecting") : y.AV.replace("MobileQrcodeConnecting")
            }
            onDesktop() {
                y.AV.replace("DesktopConnecting")
            }
            onWeb() {
                y.AV.replace("WebConnecting")
            }
            render() {
                return C`<div>${this.isRetry ? C`<slot></slot>` : null} ${this.isMobile ? C`<wcm-button .onClick="${this.onMobile}" .iconLeft="${nt.MOBILE_ICON}" variant="outline">Mobile</wcm-button>` : null} ${this.isDesktop ? C`<wcm-button .onClick="${this.onDesktop}" .iconLeft="${nt.DESKTOP_ICON}" variant="outline">Desktop</wcm-button>` : null} ${this.isWeb ? C`<wcm-button .onClick="${this.onWeb}" .iconLeft="${nt.GLOBE_ICON}" variant="outline">Web</wcm-button>` : null}</div>`
            }
        }
        ;
        Ut.styles = [Q.globalCss, $i],
        ge([F({
            type: Boolean
        })], Ut.prototype, "isMobile", 2),
        ge([F({
            type: Boolean
        })], Ut.prototype, "isDesktop", 2),
        ge([F({
            type: Boolean
        })], Ut.prototype, "isWeb", 2),
        ge([F({
            type: Boolean
        })], Ut.prototype, "isRetry", 2),
        Ut = ge([X("wcm-platform-selection")], Ut);
        const Oi = p`button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--wcm-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.wcm-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--wcm-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--wcm-color-bg-2);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}.wcm-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--wcm-wallet-icon-border-radius)/ 2);border:1px solid var(--wcm-color-overlay)}.wcm-icons svg{width:21px;height:21px}.wcm-icons img:nth-child(1),.wcm-icons img:nth-child(2),.wcm-icons svg:nth-child(1),.wcm-icons svg:nth-child(2){margin-bottom:4px}wcm-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
        let io = class extends G {
            onClick() {
                y.AV.push("WalletExplorer")
            }
            render() {
                const {recomendedWallets: n} = y.ExplorerCtrl.state
                  , i = [...n, ...te.manualWallets()].reverse().slice(0, 4);
                return C`<button @click="${this.onClick}"><div class="wcm-icons">${i.map(l=>{
                    const s = j.getWalletIcon(l);
                    if (s)
                        return C`<img crossorigin="anonymous" src="${s}">`;
                    const a = j.getWalletIcon({
                        id: l.id
                    });
                    return a ? C`<img crossorigin="anonymous" src="${a}">` : nt.WALLET_PLACEHOLDER
                }
                )} ${[...Array(4 - i.length)].map(()=>nt.WALLET_PLACEHOLDER)}</div><wcm-text variant="xsmall-regular">View All</wcm-text></button>`
            }
        }
        ;
        io.styles = [Q.globalCss, Oi],
        io = ((n,r,i,l)=>{
            for (var c, s = r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = c(s) || s);
            return s
        }
        )([X("wcm-view-all-wallets-button")], io);
        const Mi = p`.wcm-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;
        var Pi = Object.defineProperty
          , Si = Object.getOwnPropertyDescriptor
          , _e = (n,r,i,l)=>{
            for (var c, s = l > 1 ? void 0 : l ? Si(r, i) : r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = (l ? c(r, i, s) : c(s)) || s);
            return l && s && Pi(r, i, s),
            s
        }
        ;
        let oe = class extends G {
            constructor() {
                super(),
                this.walletId = "",
                this.imageId = "",
                this.uri = "",
                setTimeout(()=>{
                    const {walletConnectUri: n} = y.OptionsCtrl.state;
                    this.uri = n
                }
                , 0)
            }
            get overlayEl() {
                return j.getShadowRootElement(this, ".wcm-qr-container")
            }
            render() {
                return C`<div class="wcm-qr-container">${this.uri ? C`<wcm-qrcode size="${this.overlayEl.offsetWidth}" uri="${this.uri}" walletId="${pt(this.walletId)}" imageId="${pt(this.imageId)}"></wcm-qrcode>` : C`<wcm-spinner></wcm-spinner>`}</div>`
            }
        }
        ;
        oe.styles = [Q.globalCss, Mi],
        _e([F()], oe.prototype, "walletId", 2),
        _e([F()], oe.prototype, "imageId", 2),
        _e([wt()], oe.prototype, "uri", 2),
        oe = _e([X("wcm-walletconnect-qr")], oe);
        let so = class extends G {
            viewTemplate() {
                return y.zv.isAndroid() ? C`<wcm-android-wallet-selection></wcm-android-wallet-selection>` : y.zv.isMobile() ? C`<wcm-mobile-wallet-selection></wcm-mobile-wallet-selection>` : C`<wcm-desktop-wallet-selection></wcm-desktop-wallet-selection>`
            }
            render() {
                return C`${this.viewTemplate()}<wcm-legal-notice></wcm-legal-notice>`
            }
        }
        ;
        so.styles = [Q.globalCss],
        so = ((n,r,i,l)=>{
            for (var c, s = r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = c(s) || s);
            return s
        }
        )([X("wcm-connect-wallet-view")], so);
        const Bi = p`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
        var Di = Object.defineProperty
          , Ui = Object.getOwnPropertyDescriptor
          , Ko = (n,r,i,l)=>{
            for (var c, s = l > 1 ? void 0 : l ? Ui(r, i) : r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = (l ? c(r, i, s) : c(s)) || s);
            return l && s && Di(r, i, s),
            s
        }
        ;
        let Oe = class extends G {
            constructor() {
                super(),
                this.isError = !1,
                this.openDesktopApp()
            }
            onFormatAndRedirect(n) {
                const {desktop: r, name: i} = y.zv.getWalletRouterData()
                  , l = r?.native;
                if (l) {
                    const s = y.zv.formatNativeUrl(l, n, i);
                    y.zv.openHref(s, "_self")
                }
            }
            openDesktopApp() {
                const {walletConnectUri: n} = y.OptionsCtrl.state
                  , r = y.zv.getWalletRouterData();
                j.setRecentWallet(r),
                n && this.onFormatAndRedirect(n)
            }
            render() {
                const {name: n, id: r, image_id: i} = y.zv.getWalletRouterData()
                  , {isMobile: l, isWeb: s} = j.getCachedRouterWalletPlatforms();
                return C`<wcm-modal-header title="${n}" .onAction="${j.handleUriCopy}" .actionIcon="${nt.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${r}" imageId="${pt(i)}" label="${`Continue in ${n}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Connection can continue loading if ${n} is not installed on your device`}</wcm-text><wcm-platform-selection .isMobile="${l}" .isWeb="${s}" .isRetry="${!0}"><wcm-button .onClick="${this.openDesktopApp.bind(this)}" .iconRight="${nt.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`
            }
        }
        ;
        Oe.styles = [Q.globalCss, Bi],
        Ko([wt()], Oe.prototype, "isError", 2),
        Oe = Ko([X("wcm-desktop-connecting-view")], Oe);
        const ji = p`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}wcm-button{margin-top:15px}`;
        let lo = class extends G {
            onInstall(n) {
                n && y.zv.openHref(n, "_blank")
            }
            render() {
                const {name: n, id: r, image_id: i, homepage: l} = y.zv.getWalletRouterData();
                return C`<wcm-modal-header title="${n}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${r}" imageId="${pt(i)}" label="Not Detected" .isStale="${!0}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Download ${n} to continue. If multiple browser extensions are installed, disable non ${n} ones and try again`}</wcm-text><wcm-button .onClick="${()=>this.onInstall(l)}" .iconLeft="${nt.ARROW_DOWN_ICON}">Download</wcm-button></wcm-info-footer>`
            }
        }
        ;
        lo.styles = [Q.globalCss, ji],
        lo = ((n,r,i,l)=>{
            for (var c, s = r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = c(s) || s);
            return s
        }
        )([X("wcm-install-wallet-view")], lo);
        const Fi = p`wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}wcm-info-footer{display:flex;width:100%}.wcm-app-store{justify-content:space-between}.wcm-app-store wcm-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--wcm-wallet-icon-small-border-radius)}.wcm-app-store div{display:flex;align-items:center}.wcm-app-store wcm-button{margin-right:-10px}.wcm-note{flex-direction:column;align-items:center;padding:5px 0}.wcm-note wcm-text{text-align:center}wcm-platform-selection{margin-top:-15px}.wcm-note wcm-text{margin-top:15px}.wcm-note wcm-text span{color:var(--wcm-accent-color)}`;
        var Vi = Object.defineProperty
          , Zi = Object.getOwnPropertyDescriptor
          , Yo = (n,r,i,l)=>{
            for (var c, s = l > 1 ? void 0 : l ? Zi(r, i) : r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = (l ? c(r, i, s) : c(s)) || s);
            return l && s && Vi(r, i, s),
            s
        }
        ;
        let Te = class extends G {
            constructor() {
                super(),
                this.isError = !1,
                this.openMobileApp()
            }
            onFormatAndRedirect(n, r=!1) {
                const {mobile: i, name: l} = y.zv.getWalletRouterData()
                  , s = i?.native
                  , a = i?.universal;
                if (s && !r) {
                    const c = y.zv.formatNativeUrl(s, n, l);
                    y.zv.openHref(c, "_self")
                } else if (a) {
                    const c = y.zv.formatUniversalUrl(a, n, l);
                    y.zv.openHref(c, "_self")
                }
            }
            openMobileApp(n=!1) {
                const {walletConnectUri: r} = y.OptionsCtrl.state
                  , i = y.zv.getWalletRouterData();
                j.setRecentWallet(i),
                r && this.onFormatAndRedirect(r, n)
            }
            onGoToAppStore(n) {
                n && y.zv.openHref(n, "_blank")
            }
            render() {
                const {name: n, id: r, image_id: i, app: l, mobile: s} = y.zv.getWalletRouterData()
                  , {isWeb: a} = j.getCachedRouterWalletPlatforms()
                  , c = l?.ios
                  , x = s?.universal;
                return C`<wcm-modal-header title="${n}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${r}" imageId="${pt(i)}" label="Tap 'Open' to continue…" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer class="wcm-note"><wcm-platform-selection .isWeb="${a}" .isRetry="${!0}"><wcm-button .onClick="${()=>this.openMobileApp(!1)}" .iconRight="${nt.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection>${x ? C`<wcm-text color="secondary" variant="small-thin">Still doesn't work? <span tabindex="0" @click="${()=>this.openMobileApp(!0)}">Try this alternate link</span></wcm-text>` : null}</wcm-info-footer><wcm-info-footer class="wcm-app-store"><div><wcm-wallet-image walletId="${r}" imageId="${pt(i)}"></wcm-wallet-image><wcm-text>${`Get ${n}`}</wcm-text></div><wcm-button .iconRight="${nt.ARROW_RIGHT_ICON}" .onClick="${()=>this.onGoToAppStore(c)}" variant="ghost">App Store</wcm-button></wcm-info-footer>`
            }
        }
        ;
        Te.styles = [Q.globalCss, Fi],
        Yo([wt()], Te.prototype, "isError", 2),
        Te = Yo([X("wcm-mobile-connecting-view")], Te);
        const Ki = p`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
        let ao = class extends G {
            render() {
                const {name: n, id: r, image_id: i} = y.zv.getWalletRouterData()
                  , {isDesktop: l, isWeb: s} = j.getCachedRouterWalletPlatforms();
                return C`<wcm-modal-header title="${n}" .onAction="${j.handleUriCopy}" .actionIcon="${nt.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr walletId="${r}" imageId="${pt(i)}"></wcm-walletconnect-qr></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Scan this QR Code with your phone's camera or inside ${n} app`}</wcm-text><wcm-platform-selection .isDesktop="${l}" .isWeb="${s}"></wcm-platform-selection></wcm-info-footer>`
            }
        }
        ;
        ao.styles = [Q.globalCss, Ki],
        ao = ((n,r,i,l)=>{
            for (var c, s = r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = c(s) || s);
            return s
        }
        )([X("wcm-mobile-qr-connecting-view")], ao);
        let co = class extends G {
            render() {
                return C`<wcm-modal-header title="Scan the code" .onAction="${j.handleUriCopy}" .actionIcon="${nt.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>`
            }
        }
        ;
        co.styles = [Q.globalCss],
        co = ((n,r,i,l)=>{
            for (var c, s = r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = c(s) || s);
            return s
        }
        )([X("wcm-qrcode-view")], co);
        const ts = p`wcm-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}wcm-modal-content::after,wcm-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}wcm-modal-content::before{box-shadow:0 -1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(var(--wcm-color-bg-1),rgba(255,255,255,0))}wcm-modal-content::after{box-shadow:0 1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--wcm-color-bg-1));top:calc(100% - 20px)}wcm-modal-content::-webkit-scrollbar{display:none}.wcm-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.wcm-empty,.wcm-loading{display:flex}.wcm-loading .wcm-placeholder-block{height:100%}.wcm-end-reached .wcm-placeholder-block{height:0;opacity:0}.wcm-empty .wcm-placeholder-block{opacity:1;height:100%}wcm-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;
        var es = Object.defineProperty
          , os = Object.getOwnPropertyDescriptor
          , fe = (n,r,i,l)=>{
            for (var c, s = l > 1 ? void 0 : l ? os(r, i) : r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = (l ? c(r, i, s) : c(s)) || s);
            return l && s && es(r, i, s),
            s
        }
        ;
        let jt = class extends G {
            constructor() {
                super(...arguments),
                this.loading = !y.ExplorerCtrl.state.wallets.listings.length,
                this.firstFetch = !y.ExplorerCtrl.state.wallets.listings.length,
                this.search = "",
                this.endReached = !1,
                this.intersectionObserver = void 0,
                this.searchDebounce = j.debounce(n=>{
                    n.length >= 1 ? (this.firstFetch = !0,
                    this.endReached = !1,
                    this.search = n,
                    y.ExplorerCtrl.resetSearch(),
                    this.fetchWallets()) : this.search && (this.search = "",
                    this.endReached = this.isLastPage(),
                    y.ExplorerCtrl.resetSearch())
                }
                )
            }
            firstUpdated() {
                this.createPaginationObserver()
            }
            disconnectedCallback() {
                var n;
                null == (n = this.intersectionObserver) || n.disconnect()
            }
            get placeholderEl() {
                return j.getShadowRootElement(this, ".wcm-placeholder-block")
            }
            createPaginationObserver() {
                this.intersectionObserver = new IntersectionObserver(([n])=>{
                    n.isIntersecting && (!this.search || !this.firstFetch) && this.fetchWallets()
                }
                ),
                this.intersectionObserver.observe(this.placeholderEl)
            }
            isLastPage() {
                const {wallets: n, search: r} = y.ExplorerCtrl.state
                  , {listings: i, total: l} = this.search ? r : n;
                return l <= 40 || i.length >= l
            }
            fetchWallets() {
                var n = this;
                return (0,
                u.Z)(function*() {
                    var r;
                    const {wallets: i, search: l} = y.ExplorerCtrl.state
                      , {listings: s, total: a, page: c} = n.search ? l : i;
                    if (!n.endReached && (n.firstFetch || a > 40 && s.length < a))
                        try {
                            n.loading = !0;
                            const x = null == (r = y.OptionsCtrl.state.chains) ? void 0 : r.join(",")
                              , {listings: E} = yield y.ExplorerCtrl.getWallets({
                                page: n.firstFetch ? 1 : c + 1,
                                entries: 40,
                                search: n.search,
                                version: 2,
                                chains: x
                            })
                              , _ = E.map(J=>j.getWalletIcon(J));
                            yield Promise.all([..._.map(function() {
                                var J = (0,
                                u.Z)(function*(tt) {
                                    return j.preloadImage(tt)
                                });
                                return function(tt) {
                                    return J.apply(this, arguments)
                                }
                            }()), y.zv.wait(300)]),
                            n.endReached = n.isLastPage()
                        } catch (x) {
                            console.error(x),
                            y.ToastCtrl.openToast(j.getErrorMessage(x), "error")
                        } finally {
                            n.loading = !1,
                            n.firstFetch = !1
                        }
                })()
            }
            onConnect(n) {
                y.zv.isAndroid() ? j.handleMobileLinking(n) : j.goToConnectingView(n)
            }
            onSearchChange(n) {
                const {value: r} = n.target;
                this.searchDebounce(r)
            }
            render() {
                const {wallets: n, search: r} = y.ExplorerCtrl.state
                  , {listings: i} = this.search ? r : n
                  , l = this.loading && !i.length
                  , s = this.search.length >= 3;
                let a = St.manualWalletsTemplate()
                  , c = St.recomendedWalletsTemplate(!0);
                s && (a = a.filter(({values: _})=>j.caseSafeIncludes(_[0], this.search)),
                c = c.filter(({values: _})=>j.caseSafeIncludes(_[0], this.search)));
                const x = !this.loading && !i.length && !c.length
                  , E = {
                    "wcm-loading": l,
                    "wcm-end-reached": this.endReached || !this.loading,
                    "wcm-empty": x
                };
                return C`<wcm-modal-header><wcm-search-input .onChange="${this.onSearchChange.bind(this)}"></wcm-search-input></wcm-modal-header><wcm-modal-content class="${$t(E)}"><div class="wcm-grid">${l ? null : a} ${l ? null : c} ${l ? null : i.map(_=>C`${_ ? C`<wcm-wallet-button imageId="${_.image_id}" name="${_.name}" walletId="${_.id}" .onClick="${()=>this.onConnect(_)}"></wcm-wallet-button>` : null}`)}</div><div class="wcm-placeholder-block">${x ? C`<wcm-text variant="big-bold" color="secondary">No results found</wcm-text>` : null} ${!x && this.loading ? C`<wcm-spinner></wcm-spinner>` : null}</div></wcm-modal-content>`
            }
        }
        ;
        jt.styles = [Q.globalCss, ts],
        fe([wt()], jt.prototype, "loading", 2),
        fe([wt()], jt.prototype, "firstFetch", 2),
        fe([wt()], jt.prototype, "search", 2),
        fe([wt()], jt.prototype, "endReached", 2),
        jt = fe([X("wcm-wallet-explorer-view")], jt);
        const rs = p`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
        var ns = Object.defineProperty
          , is = Object.getOwnPropertyDescriptor
          , Go = (n,r,i,l)=>{
            for (var c, s = l > 1 ? void 0 : l ? is(r, i) : r, a = n.length - 1; a >= 0; a--)
                (c = n[a]) && (s = (l ? c(r, i, s) : c(s)) || s);
            return l && s && ns(r, i, s),
            s
        }
        ;
        let Ie = class extends G {
            constructor() {
                super(),
                this.isError = !1,
                this.openWebWallet()
            }
            onFormatAndRedirect(n) {
                const {desktop: r, name: i} = y.zv.getWalletRouterData()
                  , l = r?.universal;
                if (l) {
                    const s = y.zv.formatUniversalUrl(l, n, i);
                    y.zv.openHref(s, "_blank")
                }
            }
            openWebWallet() {
                const {walletConnectUri: n} = y.OptionsCtrl.state
                  , r = y.zv.getWalletRouterData();
                j.setRecentWallet(r),
                n && this.onFormatAndRedirect(n)
            }
            render() {
                const {name: n, id: r, image_id: i} = y.zv.getWalletRouterData()
                  , {isMobile: l, isDesktop: s} = j.getCachedRouterWalletPlatforms()
                  , a = y.zv.isMobile();
                return C`<wcm-modal-header title="${n}" .onAction="${j.handleUriCopy}" .actionIcon="${nt.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${r}" imageId="${pt(i)}" label="${`Continue in ${n}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`${n} web app has opened in a new tab. Go there, accept the connection, and come back`}</wcm-text><wcm-platform-selection .isMobile="${l}" .isDesktop="${!a && s}" .isRetry="${!0}"><wcm-button .onClick="${this.openWebWallet.bind(this)}" .iconRight="${nt.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`
            }
        }
        ;
        Ie.styles = [Q.globalCss, rs],
        Go([wt()], Ie.prototype, "isError", 2),
        Ie = Go([X("wcm-web-connecting-view")], Ie)
    }
}]);
