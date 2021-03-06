# Dicas Γteis

## Framework7 CLI Options

Framework7 app created with following options:

```
{
  "cwd": "D:\\Meus-Projetos\\app.dicas-uteis> ",
  "type": [
    "web",
    "cordova"
  ],
  "name": "Dicas Γteis",
  "pkg": "io.framework7.agendesalao",
  "framework": "vue",
  "template": "single-view",
  "cssPreProcessor": "scss",
  "bundler": "webpack",
  "cordova": {
    "folder": "cordova",
    "platforms": [
      "ios",
      "android",
      "electron",
      "osx"
    ],
    "plugins": [
      "cordova-plugin-statusbar",
      "cordova-plugin-keyboard",
      "cordova-plugin-splashscreen"
    ]
  },
  "webpack": {
    "developmentSourceMap": true,
    "productionSourceMap": true,
    "hashAssets": false,
    "preserveAssetsPaths": false,
    "inlineAssets": true
  },
  "theming": {
    "customColor": false,
    "color": "#007aff",
    "darkTheme": false,
    "iconFonts": true,
    "fillBars": false
  },
  "customBuild": false
}
```

## NPM Scripts

* π₯ `start` - run development server
* π§ `dev` - run development server
* π§ `build-dev` - build web app using development mode (faster build without minification and optimization)
* π§ `build-prod` - build web app for production
* π± `build-dev-cordova` - build cordova app using development mode (faster build without minification and optimization)
* π± `build-prod-cordova` - build cordova app
* π± `build-dev-cordova-ios` - build cordova iOS app using development mode (faster build without minification and optimization)
* π± `build-prod-cordova-ios` - build cordova iOS app
* π± `cordova-ios` - run dev build cordova iOS app
* π± `build-dev-cordova-android` - build cordova Android app using development mode (faster build without minification and optimization)
* π± `build-prod-cordova-android` - build cordova Android app
* π± `cordova-android` - run dev build cordova Android app
* π₯ `build-dev-cordova-electron` - build cordova Electron app using development mode (faster build without minification and optimization)
* π₯ `build-prod-cordova-electron` - build cordova Electron app
* π₯ `build-dev-cordova-osx` - build cordova macOS app using development mode (faster build without minification and optimization)
* π₯ `build-prod-cordova-osx` - build cordova macOS app
* π₯ `cordova-electron` - launch quick preview (without full build process) of Electron app in development mode

## WebPack

There is a webpack bundler setup. It compiles and bundles all "front-end" resources. You should work only with files located in `/src` folder. Webpack config located in `build/webpack.config.js`.

Webpack has specific way of handling static assets (CSS files, images, audios). You can learn more about correct way of doing things on [official webpack documentation](https://webpack.js.org/guides/asset-management/).
## Cordova

Cordova project located in `cordova` folder. You shouldn't modify content of `cordova/www` folder. Its content will be correctly generated when you call `npm run cordova-build-prod`.

## Cordova Electron

There is also cordova Electron platform installed. To learn more about it and Electron check this guides:

* [Cordova Electron Platform Guide](https://cordova.apache.org/docs/en/latest/guide/platforms/electron/index.html)
* [Official Electron Documentation](https://electronjs.org/docs)

## Assets

Assets (icons, splash screens) source images located in `assets-src` folder. To generate your own icons and splash screen images, you will need to replace all assets in this directory with your own images (pay attention to image size and format), and run the following command in the project directory:

```
framework7 assets
```

Or launch UI where you will be able to change icons and splash screens:

```
framework7 assets --ui
```

## Documentation & Resources

* [Framework7 Core Documentation](https://framework7.io/docs/)
* [Framework7 Vue Documentation](https://framework7.io/vue/)


* [Framework7 Icons Reference](https://framework7.io/icons/)
* [Community Forum](https://forum.framework7.io)

## Support Framework7

Love Framework7? Support project by donating or pledging on patreon:
https://patreon.com/vladimirkharlampidi