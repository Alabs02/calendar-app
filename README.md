<div align="center">
  <img src="https://raw.githubusercontent.com/Jobsity/ReactChallenge/main/src/assets/jobsity_logo_small.png"/>
</div>

# [JOBSITY CALENDAR SOLUTION](https://jobsity-calendar-app.vercel.app/)

<br />

> **APPLICATION SETUP**

```bash
yarn install
```

**OR**

```bash
npm run install -S
```

<br />
<br />

**Create a `.env` file and copy the contents of `.env.example` to the .evn
file**

`.evn`

```.evn
SASS_PATH="./src/sass"
REACT_APP_ACCU_WAETHER_API_KEY=LA9wbvEZ2Pn9ucFdyEaUH6c9NFbDABFV
REACT_APP_ACC_BASE_API_URL=http://dataservice.accuweather.com/
```

<br />

> **SPIN UP DEVELOPMENT SERVER**

```bash
yarn start
```

**OR**

```bash
npm run start
```

<br />

- You can find the project running on `http://localhost:3000/calendar`.
- [LIVE URL - JOBSITY CALENDAR SOLUTION](https://jobsity-calendar-app.vercel.app/). <br /> <br />

> **OTHER COMMANDS**

### To build the app

```bash
yarn build
```

**OR**

```bash
npm run build
```

<br />
<hr />
<br />

### To run test

```bash
yarn test
```

```bash
yarn test:dev
```

`To watch test files`

**OR**

```bash
npm run test
```

<br />
<hr />
<br />

> **MIGRATING APP FROM JAVASCRIPT TO TYPESCRIPT**

I think I went beyond the scope of the test but because I'm used to TypeScript
and it has great benefits, I migrated the App to TypeScript. <br /> <br />

> **REACT APP BUNDLING**

Instead of using `react-scripts` which is slow I change it to
[`Parcel`](https://parceljs.org/). Here are some benefits of percel:

- Better worker processes
- Multicore compiler
- Fast rebuilds
- Filesystem cache
- Out of the box support for JS, CSS, HTML, File Assets, and more
- No configuration needed
- **Parcel prints syntax highlighted code frames when it encounters erros to
  help you pinpoint the problem**
- No configuration needed
- **The Alias feature which helps you create aliases to avoid `../../components`
  to `@components/`**

`package.json`

```json
"alias": {
    "@/*": "./src/$1",
    "@styles/*": "./src/styles/$1",
    "@components/*": "./src/components/$1",
    "@pages/*": "./src/pages/$1"
  }
```

<br />
<br />

> **USING PRETTIER & ESLINT**

Using `Prettier` and `Eslint` will prevent a lot of problems starting with

- Prettier can format the entire code to look beautiful and up to the team
  standard. Things like quotes, spacing, indentation etc.
- Eslint helps to prevent runtime and build errors, and it's good to run
  `npm run eslint:fix`, `npm run format:fix` and unit/e2e test before pushing
  your codebase to git. <br /> <br />

`package.json`

```json
{
  "format": "prettier --check \"src/**/*.{js,jsx,md,scss,css}\"",
  "format:fix": "prettier --write \"src/**/*.{js,jsx,md,scss,css}\"",
  "eslint-fix": "eslint --fix \"src/**/*.{js,jsx,md,scss,css}\""
}
```

<br />
<br />

> **PROJECT FILE STRUCTURE**

My project file structure is inspired by `Vue JS` file structure 

<div align="center">
  <img src="https://firebasestorage.googleapis.com/v0/b/alaburausmanportfolio.appspot.com/o/Github-Assets%2Fimg%2Fcalendar-file-structure.png?alt=media&token=fd433ca1-e1ea-45f0-a7f4-dcb50a334c43"/>
</div>

<br /> <br />

> **CODING STYLES**

My **React JS** coding style is guided by
[Airbnb-React-Convention](https://github.com/Alabs02/Airbnb-React-Convention).
The SCSS is guide by
[BEM Methodology](https://en.bem.info/methodology/quick-start/).

I also built a **`MINI SCSSS-LIBRARY`** which has some
`utility classes/functions, color-palette` with can be extended to support
multiple themes.

<br />
<br />

> **STATE MANAGEMENT**

I changed the state management library to `Redux Toolkit` and I have simple file
structure that can accomdate robust projects with complex/large state. <br />
<br />

> **REASEON FOR ADDING BULMA CSS**

I added Bulma Css because of `time constraint`, I would have built the
`Modal Component` but time was against me. <br /> <br />

> **UNIT TEST**

I was not able to write unit testing due to time constraint but, I added
`jest.config` and `I organised the test file in the tests folder`. <br /> <br />

> **CONCLUSION**

I found the challenge to be quite interesting and I believe my work is a good
representation of what I am capable of. If you have any questions, concerns, or
suggestions on how I can improve, please do not hesitate to contact me at
<strong><a href="mailto: alabson.inc@gmail.com">alabson.inc@gmail.com</a></strong>.

I am open to any feedback and look forward to hearing from you. Thank you and
cheers! 🥂 <br /> <br /> <br />

> **END RESULT**
<div align="center">
  <img src="https://firebasestorage.googleapis.com/v0/b/alaburausmanportfolio.appspot.com/o/Github-Assets%2Fimg%2Fcalendar-app.png?alt=media&token=6bb2e9b8-a93e-49ff-975e-3ca6d4da36bd"/>
</div>
