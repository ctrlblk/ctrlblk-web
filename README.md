# CtrlBlk Web

This is the code behind [ctrblk.com](https://ctrlblk.com), the homepage for [CtrlBlk](https://github.com/ctrlblk/ctrlblk).

## Build CtrlBlk Web

Prerequisites:

- [nodejs](https://nodejs.org/en) 24.22.3, as pinned in [`.node-version`](.node-version)
- [npm](https://www.npmjs.com/), the version bundled with that Node.js release

To run CtrlBlk Web locally:

```
$ git clone https://github.com/ctrlblk/ctrlblck-web.git
$ cd ctrblk
$ npm install
$ npm run dev
```

To build the page in order to host it somewhere:

```
$ git clone https://github.com/ctrlblk/ctrlblck-web.git
$ cd ctrblk
$ npm install
$ npm run build
$ ls .svelte-kit/output
```

Output is placed under `.svelte-kit`.

### Cloudflare

CtrlBlk Web is designed to be hosted on cloudflare pages. Follow the guide below to deploy it to cloudflare pages:

[Deploy via the Cloudflare dashboard](https://developers.cloudflare.com/pages/framework-guides/deploy-a-svelte-site/#deploy-via-the-cloudflare-dashboard)

The Cloudflare Pages build uses the Node.js version in [`.node-version`](.node-version). Don't set `NODE_VERSION` in the Pages project's variables, because it would override that file.

## About

- [GPLv3 license](LICENSE.txt)
- [Privacy Policy](https://ctrlblk.com/privacy)

## Acknowledgements

CtrlBlk Web makes use of the following open source projects:

- [nodejs](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)
- Various others, see [package.json](package.json)
