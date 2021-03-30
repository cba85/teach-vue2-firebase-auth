# teach-vue-firebase-auth

> For demonstration purpose only

## Usage

Add your Firebase credentials in `main.js`: https://firebase.google.com/docs/web/setup?authuser=0#add-sdks-initialize

## Steps

1. Create Vue projet and clean files
2. Add Bulma and create view pages
   ```
   $ npm install bulma --save
   ```
   - Create `src/assets/scss/app.scss` and import it in `main.js` file
3. Init Firebase project (active email authentification)
   - Create an application in the Firebase project
   - Add Firebase config json in `main.js` file
   ```
   $ npm install firebase --save
   ```
4. Register users
5. Authenticate users
6. Keep auth state in VueX
7. Sign out
8. Middleware
9. Form validation with Vuelidate
   ```
   $ npm install vuelidate --save
   ```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
