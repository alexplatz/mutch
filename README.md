# Mutch
A simple [pattern matching](https://stackoverflow.com/questions/2225774/haskell-pattern-matching-what-is-it) library to hold you over until [the proposal](https://github.com/tc39/proposal-pattern-matching) gets merged

## Installation
Use your favorite npm package manager to add `mutch`, then import `match` from it like so:
```shell
bun i mutch
```
then
```javascript
import { match } from 'mutch'
```

## Use
`match` takes in 3 parameters: 
- `value` - the value to match on
- `whens` - an array of `when`-`then` tuples, where `when` is a value of the same type as `value` and `then` is a callback function optionally taking in `value` and returning anything 
- `otherwise` - a default `then`

So, if you wanted to match on some json, it'd look something like this:
```javascript
const coords = { x: 1, y: 2 }

match(coords,
  [
    [{ x: 1, y: 2 }, (c) => c.x],
    [{ x: 4, y: 8 }, (c) => c.y],
  ],
  () => 0
)

// output: 1
```

## Why
One of the limitations I've run into with modern javascript is the lack of pattern matching, a feature I've loved about more functional languages. Sure, js has `switch`, but that's a statement, and so the result cannot be intuitively captured the way you would any other data. While I recognize this library can 100% be made redundant by just arranging your `if`s in a certain pattern, the result is typically difficult to read or necessarily imperitive code. And I have enough of an issue with that that I wrote a library about it.

Basically:
- ternary chaining is hard to read -- an accessibility concern
- `if` blocks are imperative
- `switch` statements are imperative  

as for why *this* library:
- it's reasonably functional under the hood
- it's like 30 lines
- it uses native, functional js syntax 
- did I mention it's just a function?

## Notes
- I created this with performance in mind, but with the ultimate goal that it should be ergonomic and organic, so json deep equality is not explicitly supported
- Matching on functions is currently not supported, simply because I can't imagine a scenario where that would be useful? Feel free to open a PR about it

## Contributing
Feel free to open up a PR :D

## License
Licensed under GPLv3
