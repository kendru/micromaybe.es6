const just = x => (ok) => ok(x)
const nothing = () => (_, err) => err()
const fmap = (m, f) => m(x => just(f(x)), () => nothing())
const bind = (m, f) => m(x => f(x), () => nothing())
export { just, nothing, fmap, bind }
