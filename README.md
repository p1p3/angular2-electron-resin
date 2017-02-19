#angular-electronjs-resin(Raspberry Pi)

1. A boilerplate for developing kiosks, digital signage or other human-machine interaction projects based on [ElectronJS](http://electron.atom.io/), [Angular](http://angular.io) and [resin.io](http://resin.io).

2. This project is an adapation to the resin-electronjs project, which can be found [here](https://github.com/resin-io/resin-electronjs).

## Getting started

### Angular project
- angular project can be found inside  [angular-application](app/angular-application).
- inside the folder run :
    1. `npm install`.
    2. `ng serve`
- all [anugular-cli](https://github.com/angular/angular-cli) commands can be used.

#### Build angular project (before run electron)
- inside [app/angular-application](app/angular-application).
- run `npm run build`.

### Electron project
- electron configuration can be found inside  [app/main.js](app/main.js).
- inside the [application](app) run `npm run dev`.

### Resin project (Raspberry Pi)
- Sign up on [resin.io](https://dashboard.resin.io/signup)
- go throught the [getting started guide](http://docs.resin.io/raspberrypi/nodejs/getting-started/) and create a new application
- clone this repository to your local workspace
- add the _resin remote_ to your local workspace using the useful shortcut in the dashboard UI ![remoteadd](https://raw.githubusercontent.com/resin-io-playground/boombeastic/master/docs/gitresinremote.png)
- `git push resin master`
- see the magic happening, your device is getting updated Over-The-Air!
- extra configuration can be found in the resin-electronjs repository, which can be found [here](https://github.com/resin-io/resin-electronjs).
