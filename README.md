# iZUMi-endpoints

## restful

## web3

add below to your top `package.json` file

```json
  "scripts": {
    // ...
    "compile-abi-types": "node PATH/TO/MODULE/iZUMi-endpoints/src/web3/compileAbiTypes.js"
  },
```

Then run `npm run compile-abi` to generate Contract TypeScript files.

Edit `compileAbiTypes.js` **FIX_PATTEN** var to custom your own output fix.
