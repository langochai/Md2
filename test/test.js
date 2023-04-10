
    function appendAndDelete(s, t, k) {
        let i = 0
        for (; i < s.length; i++) {
            if (s[i] !== t[i])
                break;
        }
        let z = (s.length + t.length) - (i * 2);
        if (k >= s.length + t.length) {
            return 'YES'
        } else if (z % 2 === k % 2 && z <= k) {
            return 'YES'
        } else return 'NO';
    }
let s = 'hackerhappy'

let t = 'hackerrank'

let k = 9
console.log(appendAndDelete(s,t,k))