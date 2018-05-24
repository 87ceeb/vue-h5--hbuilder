# vue-h5-hbuilder

基于HBuilder h5+ vue-cli 多页面开发
开发时可使用npm run dev实时打包输出至dist目录，dist目录拉到hbuilder中真机运行，即可实时预览效果

├── build
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server-web.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   ├── webpack.dev..web.conf.js
│   └── webpack.prod.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── src
│   └── views
│        ├── assets 图片文件
│        ├── lib 
│        ├── components  
│        └── pages 多页面目录
│            ├── index
│            │   ├── index.html
│            │   ├── index.js
│            │   └── Test.vue
│            └── login
│                └── login.html
└── manifest.json
└── package.json

## 模板文档
[使用文档](https://github.com/aOrz/vue-template-for-hbuilder/edit/master/README.md)
## Build Setup

``` bash
# install dependencies
npm install

# 自动编译结果到指定文件夹
npm run dev

# serve with hot reload at localhost:8080
npm run webdev

# 打包
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
