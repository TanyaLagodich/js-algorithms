const caratsuba = (x, y) => {
    let n = +String(x).length;
    if (n === 1) {
        return x * y;
    } else {
        let midX = String(x).length / 2;
        let midY = String(y).length / 2;
        let [a, b] = [+String(x).slice(0, midX), +String(x).slice(midX)];
        let [c, d] = [+String(y).slice(0, midY), +String(y).slice(midY)];

        let p = a + b;
        let q = c + d;

        let ac = a * c;
        let bd = b * d;
        let pq = p * q;

        let abcd = pq - ac - bd;

        return Math.pow(10, n) * ac + Math.pow(10, n / 2) * abcd + bd;
    }
}
