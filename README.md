<a href="https://plotly.com/javascript/"><img src="https://images.plot.ly/logo/plotlyjs-logo@2x.png" height="70"></a>

[![npm 版本](https://badge.fury.io/js/plotly.js.svg)](https://badge.fury.io/js/plotly.js)
[![CI](https://github.com/plotly/plotly.js/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/plotly/plotly.js/actions/workflows/ci.yml)
[![MIT 许可证](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://github.com/plotly/plotly.js/blob/master/LICENSE)

[Plotly.js](https://plotly.com/javascript) 是一个独立的 JavaScript 数据可视化库，它同时也是 Python 和 R 生态中名为 `plotly` 的模块的基础（分别称为 [Plotly.py](https://plotly.com/python) 和 [Plotly.R](http://plotly.com/r)）。

Plotly.js 可用于生成数十种图表类型与可视化效果，包括统计图表、3D 图形、科学图表、SVG 与瓦片地图、金融图表等。

<p align="center">
    <a href="https://plotly.com/javascript/" target="_blank">
        <img src="https://raw.githubusercontent.com/cldougl/plot_images/add_r_img/plotly_2017.png">
    </a>
</p>

如需 Plotly.js 相关的咨询、仪表盘开发、应用集成以及功能扩展，请[联系我们](https://plotly.com/products/consulting-and-oem/)。

<div align="center">
  <a href="https://dash.plotly.com/project-maintenance">
    <img src="https://dash.plotly.com/assets/images/maintained-by-plotly.png" width="400px" alt="由 Plotly 维护">
  </a>
</div>


## 目录

* [作为 Node 模块加载](#load-as-a-node-module)
* [通过 script 标签加载](#load-via-script-tag)
* [打包版本（Bundles）](#bundles)
* [加载与构建 plotly.js 的其他方式](#alternative-ways-to-load-and-build-plotlyjs)
* [文档](#documentation)
* [Bug 与功能请求](#bugs-and-feature-requests)
* [贡献](#contributing)
* [重要贡献者](#notable-contributors)
* [版权与许可证](#copyright-and-license)
* [社区](#community)

---
## 作为 Node 模块加载
安装[开箱即用的发行打包版本](https://github.com/plotly/plotly.js/blob/master/dist/README.md)
```sh
npm i --save plotly.js-dist-min
```

并在 Node.js 中使用 import 或 require
```js
// ES6 模块
import Plotly from 'plotly.js-dist-min'

// CommonJS
var Plotly = require('plotly.js-dist-min')
```

如果你更倾向于使用未压缩的包，也可以考虑使用 [`plotly.js-dist`](https://www.npmjs.com/package/plotly.js-dist)。

---
## 通过 script 标签加载

### script HTML 元素
> 在下面的示例中，`Plotly` 对象由 `script` 标签添加到 window（全局）作用域中。随后使用 `newPlot` 方法，将 `data` 和 `layout` 所描述的的可交互图形绘制到名为 `gd` 的目标 `div` 中。如上方示例所示，掌握 HTML 与 [JSON](https://en.wikipedia.org/wiki/JSON) 语法的基础知识就足以入门——也就是说，无论是否使用 JavaScript 都可以开始！若想进一步学习并使用 plotly.js 构建更多内容，请访问 [plotly.js 文档](https://plotly.com/javascript)。

```html
<head>
    <script src="https://cdn.plot.ly/plotly-3.7.0.min.js" charset="utf-8"></script>
</head>
<body>
    <div id="gd"></div>

    <script>
        Plotly.newPlot("gd", /* JSON 对象 */ {
            "data": [{ "y": [1, 2, 3] }],
            "layout": { "width": 600, "height": 400}
        })
    </script>
</body>
```

另外，你也可以考虑在 script 标签中使用[原生 ES6 import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)。
```html
<script type="module">
    import "https://cdn.plot.ly/plotly-3.7.0.min.js"
    Plotly.newPlot("gd", [{ y: [1, 2, 3] }])
</script>
```

Fastly 通过免费的 CDN 服务为 Plotly.js 提供支持。了解更多：<https://www.fastly.com/open-source>。

### 未压缩版本同样可在 CDN 上获取
由于非压缩的源文件可能包含 UTF-8 之外的字符，建议在加载这些打包版本时指定 `charset`。
```html
<script src="https://cdn.plot.ly/plotly-3.7.0.js" charset="utf-8"></script>
```

> 请注意，从 v2 版本起，CDN 上的 "plotly-latest" 输出（例如 https://cdn.plot.ly/plotly-latest.min.js）将不再更新，并停留在最后一个 v1 补丁版本 v1.58.5。因此，若要在 CDN 上使用 plotly.js v2 及更高版本，你必须指定确切的 plotly.js 版本。

### MathJax
你可以加载 MathJax 第二版或第三版的文件。例如：
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-AMS-MML_SVG.js"></script>
```

```html
<script src="https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-svg.js"></script>
```

> 使用 MathJax 第三版时，除了为 plotly 图形输出 `svg` 之外，还可以为页面的其他部分使用 `chtml` 输出。
请参考 `devtools/test_dashboard/index-mathjax3chtml.html` 查看示例。

### 需要在页面上放置多个 WebGL 图形？
你可以在加载其他脚本之前，先加载 [virtual-webgl](https://github.com/greggman/virtual-webgl) 脚本（针对 WebGL 1，而非 WebGL 2）。
```html
<script src="https://unpkg.com/virtual-webgl@1.0.6/src/virtual-webgl.js"></script>
```

## 打包版本（Bundles）
plotly.js 的打包版本有两种：
1. 发布到 `npm` 和 `CDN` 的完整版与部分官方打包版本，详见 [dist README](https://github.com/plotly/plotly.js/blob/master/dist/README.md)。
2. 你可以自己创建的自定义打包版本，以便根据需求优化包的体积。更多信息请访问 [CUSTOM_BUNDLE](https://github.com/plotly/plotly.js/blob/master/CUSTOM_BUNDLE.md)。

---
## 加载与构建 plotly.js 的其他方式
如果你的库需要以官方或自定义打包版本之外的方式，去打包或直接加载 [plotly.js/lib/index.js](https://github.com/plotly/plotly.js/blob/master/lib/index.js) 或其部分模块（类似于 [index-basic](https://github.com/plotly/plotly.js/blob/master/lib/index-basic.js)），或者你想调整默认的构建配置，请访问 [`BUILDING.md`](https://github.com/plotly/plotly.js/blob/master/BUILDING.md)。

---
## 文档

官方 plotly.js 文档托管于 [https://plotly.com/javascript](https://plotly.com/javascript)。

这些页面由 Plotly 的 [graphing-library-docs 仓库](https://github.com/plotly/graphing-library-docs) 生成，该仓库基于 [Jekyll](https://jekyllrb.com/) 构建，并公开发布在 GitHub Pages 上。
若想了解更多关于为 Plotly 文档做贡献的信息，请阅读[贡献指南](https://github.com/plotly/graphing-library-docs/blob/master/README.md)。

---
## Bug 与功能请求

有 bug 或功能请求？请[在 GitHub 上提交 issue](https://github.com/plotly/plotly.js/issues/new)，并留意[issue 指南](https://github.com/plotly/plotly.js/blob/master/.github/ISSUE_TEMPLATE.md)。你可能还想了解[Plotly.js 的变更是如何产生的](https://github.com/plotly/plotly.js/blob/master/CONTRIBUTING.md)。

---
## 贡献

请阅读我们的[贡献指南](https://github.com/plotly/plotly.js/blob/master/CONTRIBUTING.md)。其中包含提交 issue 的说明、在项目中使用 plotly.js 的方法以及开发相关注意事项。

---
## 重要贡献者

Plotly.js 是一个庞大且充满活力的生态体系的核心，众多贡献者在此提交 issue、复现 bug、提出改进建议、在本仓库（以及其他上游或下游仓库）中编写代码，并在 Plotly 社区论坛中帮助用户。以下人员因其对这一生态体系做出的卓越贡献而值得特别表彰：

| 贡献者 | GitHub |  状态 |
|-------------|--------|---------|
|**Alex C. Johnson**| [@alexcjohnson](https://github.com/alexcjohnson) | 活跃，维护者 |
|**Emily Kellison-Linn** | [@emilykl](https://github.com/emilykl) | 活跃，维护者 |
|**Cameron DeCoster** | [@camdecoster](https://github.com/camdecoster) | 活跃，维护者 |
|**Mojtaba Samimi** | [@archmoj](https://github.com/archmoj) | 活跃，社区贡献者 |
|**My-Tien Nguyen**| [@my-tien](https://github.com/my-tien) | 活跃，社区贡献者 |
|**Birk Skyum**| [@birkskyum](https://github.com/birkskyum) | 活跃，社区贡献者 |
|**Étienne Tétreault-Pinard**| [@etpinard](https://github.com/etpinard) | 名人堂 |
|**Antoine Roy-Gobeil** | [@antoinerg](https://github.com/antoinerg) | 名人堂 |
|**Jack Parmer**| [@jackparmer](https://github.com/jackparmer) | 名人堂 |
|**Nicolas Kruchten** | [@nicolaskruchten](https://github.com/nicolaskruchten) | 名人堂 |
|**Mikola Lysenko**| [@mikolalysenko](https://github.com/mikolalysenko) | 名人堂 |
|**Ricky Reusser**| [@rreusser](https://github.com/rreusser) | 名人堂 |
|**Dmitry Yv.** | [@dy](https://github.com/dy) | 名人堂 |
|**Jon Mease** | [@jonmmease](https://github.com/jonmmease) | 名人堂 |
|**Robert Monfera**| [@monfera](https://github.com/monfera) | 名人堂 |
|**Robert Möstl** | [@rmoestl](https://github.com/rmoestl) | 名人堂 |
|**Nicolas Riesco**| [@n-riesco](https://github.com/n-riesco) | 名人堂 |
|**Miklós Tusz**| [@mdtusz](https://github.com/mdtusz) | 名人堂 |
|**Chelsea Douglas**| [@cldougl](https://github.com/cldougl) | 名人堂 |
|**Ben Postlethwaite**| [@bpostlethwaite](https://github.com/bpostlethwaite) | 名人堂 |
|**Hannah Ker** | [@hannahker](https://github.com/hannahker) | 名人堂 |
|**Chris Parmer**| [@chriddyp](https://github.com/chriddyp) | 名人堂 |
|**Alex Vados**| [@alexander-daniel](https://github.com/alexander-daniel) | 名人堂 |

---
## 版权与许可证

代码与文档版权归 2025 Plotly, Inc. 所有。

代码基于 [MIT 许可证](https://github.com/plotly/plotly.js/blob/master/LICENSE) 发布。

### 版本管理

本项目依据 [语义化版本规范](https://semver.org/) 进行维护。

各发布版本的更新日志，请查看我们 GitHub 项目的[发布板块](https://github.com/plotly/plotly.js/releases)。

---
## 社区

* 在 [X](https://x.com/plotlygraphs) 和 [LinkedIn](https://www.linkedin.com/company/plotly/) 上关注我们，获取最新 Plotly 资讯。
* 实现方面的帮助可以在我们的社区论坛（标签为 [`plotly-js`](https://community.plotly.com/c/plotly-js)）或
  Stack Overflow（标签为 [`plotly.js`](https://stackoverflow.com/questions/tagged/plotly.js)）找到。
* 开发者在通过 [npm](https://www.npmjs.com/search?q=keywords:plotly) 分发修改或扩展 plotly.js 功能的包时，应使用关键字 `plotly`。
