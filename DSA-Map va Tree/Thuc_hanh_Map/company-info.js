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
var e_1, _a, e_2, _b, e_3, _c;
var employeeMap = new Map();
employeeMap.set("Saideep", 20);
employeeMap.set("Karthik", 25);
employeeMap.set("Sumit", 21);
employeeMap.set("Sameer", 22);
employeeMap.set("Raje", 24);
try {
    //Iterating over map keys
    for (var _d = __values(employeeMap.keys()), _e = _d.next(); !_e.done; _e = _d.next()) {
        var name_1 = _e.value;
        console.log("Employee Names= " + name_1);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
    }
    finally { if (e_1) throw e_1.error; }
}
try {
    //Iterating over map values
    for (var _f = __values(employeeMap.values()), _g = _f.next(); !_g.done; _g = _f.next()) {
        var age = _g.value;
        console.log("Employee Age= " + age);
    }
}
catch (e_2_1) { e_2 = { error: e_2_1 }; }
finally {
    try {
        if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
    }
    finally { if (e_2) throw e_2.error; }
}
console.log("The employeeMap Entries are: ");
try {
    //Iterating over map entries
    for (var _h = __values(employeeMap.entries()), _j = _h.next(); !_j.done; _j = _h.next()) {
        var entry = _j.value;
        console.log(entry[0], entry[1]);
    }
}
catch (e_3_1) { e_3 = { error: e_3_1 }; }
finally {
    try {
        if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
    }
    finally { if (e_3) throw e_3.error; }
}
