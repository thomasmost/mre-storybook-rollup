# Minimum reproduceable example of Storybook bug with CommonJS exports?

I'm trying to use Storybook with a react component library bundled with CSS. The component is imported into a regular website at localhost:3000 and displays fine, but the Storybook preview errors with `The requested module '/@fs/Users/{user}/mre/packages/react/dist/index.js' does not provide an export named 'MyComponent'`

## Steps to reproduce

1. Clone this repo
2. Run `pnpm install`
3. Then `pnpm run dev`
4. Navigate to http://localhost:3000 and see the component ("Hello Storybook!")
5. Navigate to http://localhost:6006 and select MyComponent to see the error above

Note that in dist/index.js there is this line, which sure looks like an export to me.

```js
exports.MyComponent = MyComponent;
```