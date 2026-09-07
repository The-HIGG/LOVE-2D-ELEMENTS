# Welcome to LÖVE 2D ELEMENTS!
This engine is mainly meant to be for my friends to learn coding, but whoever has this can use it too!

( Just don't expect everything to be professional. )

Also keep in mind this is a work in progress and very unfinished

Also you can install LÖVE 2D [here](https://love2d.org/)

# This is ran with LÖVE 2D TypeScript

You can look at an exmaple of LÖVE 2D TypeScriptToLua [here](https://github.com/TypeScriptToLua/TypeScriptToLua).

# LOVE 2D TypeScript setup

## Scripts

Requires [NodeJS](https://nodejs.org/en/download/) and [LÖVE 2D](https://love2d.org/) within your CLI.

| Command                | Description                                     |
| ---------------------- | ----------------------------------------------- |
| `npm install`          | ⏬ Install dependencies                         |
| `npm run build`        | 🔨 Build everything                             |
| `npm run watch`        | 🔨x♾ Re-build Lua files when a TS file is saved |
| `npm start`            | 🎮 Start the game                               |
| `npm run fix:prettier` | 💄 Fixes linting issues                         |
| `npm run lint`         | 💄 Checks for linting issues in code            |

To distribute the game, see the [game distribution wiki page](https://love2d.org/wiki/Game_Distribution).

External files can be placed in `res/` and referenced with `res/<filename>`.

e.g.

```ts
love.filesystem.read("res/input.txt");
```

### Notes

- If you're using VS Code, the [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension will automatically format your code for you so you don't need to run `npm run fix:prettier` on every change.
- Index your arrays at 0 in your source code.
- Lua does not iterate over sparse arrays (arrays with no values in the middle of them).

### Links

- [TypeScriptToLua Wiki](https://github.com/TypeScriptToLua/TypeScriptToLua/wiki)
  - [Writing Declarations](https://github.com/TypeScriptToLua/TypeScriptToLua/wiki/Writing-Declarations)
  - [Compiler Directives](https://github.com/TypeScriptToLua/TypeScriptToLua/wiki/Compiler-Directives)
- [LÖVE 2D Wiki](https://love2d.org/wiki/Main_Page)
- [LÖVE 2D - Getting Started](https://love2d.org/wiki/Getting_Started)
