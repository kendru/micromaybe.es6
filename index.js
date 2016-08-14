const Just = x => (ok) => ok(x)
const Nothing = () => (_, err) => err()
const fmap = (m, f) => m(x => Just(f(x)), () => Nothing())
const bind = (m, f) => m(x => f(x), () => Nothing())
export { just, nothing, fmap, bind }
