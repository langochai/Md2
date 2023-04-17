var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
var nameMap = new Map();
nameMap.set("Anand", 1001);
nameMap.set("Bhargavi", 1002);
nameMap.set("Chrestin", 1003);
nameMap.set("Daniel", 1004);
nameMap.set("Esther", 1005);
console.log(nameMap.size);
console.log(nameMap.get("Chrestin"));
console.log(nameMap.get("Esther"));
try {
    //Iterating map keys
    for (var _e = __values(nameMap.keys()), _f = _e.next(); !_f.done; _f = _e.next()) {
        var item = _f.value;
        console.log("Names: " + item);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
    }
    finally { if (e_1) throw e_1.error; }
}
try {
    //Iterating map values
    for (var _g = __values(nameMap.values()), _h = _g.next(); !_h.done; _h = _g.next()) {
        var item = _h.value;
        console.log("ID: ", item);
    }
}
catch (e_2_1) { e_2 = { error: e_2_1 }; }
finally {
    try {
        if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
    }
    finally { if (e_2) throw e_2.error; }
}
try {
    //Iterating map entries
    for (var _j = __values(nameMap.entries()), _k = _j.next(); !_k.done; _k = _j.next()) {
        var item = _k.value;
        console.log("entries: ", item[0], item[1]);
    }
}
catch (e_3_1) { e_3 = { error: e_3_1 }; }
finally {
    try {
        if (_k && !_k.done && (_c = _j.return)) _c.call(_j);
    }
    finally { if (e_3) throw e_3.error; }
}
try {
    //Destructuring on object entries
    for (var nameMap_1 = __values(nameMap), nameMap_1_1 = nameMap_1.next(); !nameMap_1_1.done; nameMap_1_1 = nameMap_1.next()) {
        var _l = __read(nameMap_1_1.value, 2), key = _l[0], value = _l[1];
        console.log("key value pairs: ", key, value);
    }
}
catch (e_4_1) { e_4 = { error: e_4_1 }; }
finally {
    try {
        if (nameMap_1_1 && !nameMap_1_1.done && (_d = nameMap_1.return)) _d.call(nameMap_1);
    }
    finally { if (e_4) throw e_4.error; }
}
// item Daniel will get deleted, will return 'true' as output
nameMap.delete("Daniel");
// Clear all the entries of the map
nameMap.clear();
console.log(nameMap.size);
