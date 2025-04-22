export const match = <T,>(
  value: T,
  whens: [T, (x: T) => any][],
  otherwise: (x: T) => any
) => {
  const result = whens.find(when => equals(value, when[0]))
  return result ? result[1](value) : otherwise(value)
}

const equals = <T,>(a: T, b: T) =>
  (Array.isArray(a) && Array.isArray(b)) ? a.every((x, i) => x === b[i]) :
    (a instanceof Object && b instanceof Object) ? compareObject({ obj1: Object.entries(a), obj2: Object.entries(b), pos: 0, equal: true }).equal :
      a === b

const compareObject = ({
  obj1,
  obj2,
  pos,
  equal
}: { obj1: [string, any][], obj2: [string, any][], pos: number, equal: boolean }): { obj1: [string, any][], obj2: [string, any][], pos: number, equal: boolean } =>
  obj1[pos] && obj2[pos] && equal ?
    compareObject({
      obj1,
      obj2,
      pos: pos + 1,
      equal: obj1[pos][0] === obj2[pos][0] && obj1[pos][1] === obj2[pos][1]
    }) :
    { obj1, obj2, pos, equal: equal && obj1.length === obj2.length }
