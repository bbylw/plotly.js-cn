import './style.css'
import {
  renderHeroChart,
  renderSurface3D,
  renderBubbleChart,
  renderCandlestick,
  renderChoropleth,
  renderViolin,
  renderHeatmap,
  renderTreemap,
  renderSankey,
  renderContour,
  renderPolar,
  renderScatter3D,
  renderAnimatedLines,
  renderSunburst,
  renderWaterfall,
  renderDensityContour,
} from './charts'
import {
  logoMark,
  chartTypeIcon,
  featureIcon,
  communityIcon,
  arrowRight,
  plusIcon,
  githubIcon,
} from './icons'

/* ============================================
   Shared data — updated to new palette
   ============================================ */
const chartCategories = [
  { id: 'basic', name: '基础图表', desc: 'Basic Charts', color: '#5eead4' },
  { id: 'statistical', name: '统计图表', desc: 'Statistical Charts', color: '#fb7185' },
  { id: 'scientific', name: '科学图表', desc: 'Scientific Charts', color: '#fbbf24' },
  { id: 'financial', name: '金融图表', desc: 'Financial Charts', color: '#86efac' },
  { id: 'maps', name: '地图', desc: 'Maps', color: '#38bdf8' },
  { id: '3d', name: '3D 图表', desc: '3D Charts', color: '#a78bfa' },
  { id: 'advanced', name: '高级图表', desc: 'Advanced', color: '#5eead4' },
]

const chartTypes = [
  { name: '折线图', desc: 'scatter', color: '#5eead4', icon: 'line', cat: 'basic' },
  { name: '柱状图', desc: 'bar', color: '#38bdf8', icon: 'bar', cat: 'basic' },
  { name: '散点图', desc: 'scatter', color: '#a78bfa', icon: 'scatter', cat: 'basic' },
  { name: '饼图', desc: 'pie', color: '#fb7185', icon: 'pie', cat: 'basic' },
  { name: '气泡图', desc: 'bubble', color: '#5eead4', icon: 'scatter', cat: 'basic' },
  { name: '小提琴图', desc: 'violin', color: '#fb7185', icon: 'violin', cat: 'statistical' },
  { name: '箱线图', desc: 'box', color: '#38bdf8', icon: 'box', cat: 'statistical' },
  { name: '直方图', desc: 'histogram', color: '#a78bfa', icon: 'histogram', cat: 'statistical' },
  { name: '密度图', desc: 'density', color: '#5eead4', icon: 'density', cat: 'statistical' },
  { name: '等高线', desc: 'contour', color: '#fbbf24', icon: 'contour', cat: 'scientific' },
  { name: '热力图', desc: 'heatmap', color: '#5eead4', icon: 'heatmap', cat: 'scientific' },
  { name: '平行坐标', desc: 'parallel', color: '#86efac', icon: 'parallel', cat: 'scientific' },
  { name: 'K 线图', desc: 'candlestick', color: '#5eead4', icon: 'candlestick', cat: 'financial' },
  { name: '瀑布图', desc: 'waterfall', color: '#fb7185', icon: 'waterfall', cat: 'financial' },
  { name: '指标卡', desc: 'indicator', color: '#fbbf24', icon: 'gauge', cat: 'financial' },
  { name: '等值线地图', desc: 'choropleth', color: '#fb7185', icon: 'map', cat: 'maps' },
  { name: '散点地图', desc: 'scattergeo', color: '#5eead4', icon: 'geo', cat: 'maps' },
  { name: '3D 曲面', desc: 'surface', color: '#5eead4', icon: 'surface3d', cat: '3d' },
  { name: '3D 散点', desc: 'scatter3d', color: '#86efac', icon: 'cube3d', cat: '3d' },
  { name: '3D 柱体', desc: 'bar3d', color: '#fb7185', icon: 'bar3d', cat: '3d' },
  { name: '桑基图', desc: 'sankey', color: '#fbbf24', icon: 'sankey', cat: 'advanced' },
  { name: '旭日图', desc: 'sunburst', color: '#5eead4', icon: 'sunburst', cat: 'advanced' },
  { name: '矩形树图', desc: 'treemap', color: '#38bdf8', icon: 'treemap', cat: 'advanced' },
  { name: '漏斗图', desc: 'funnel', color: '#86efac', icon: 'funnel', cat: 'advanced' },
  { name: '雷达图', desc: 'radar', color: '#a78bfa', icon: 'radar', cat: 'advanced' },
]

const contributors = [
  { name: 'Alex C. Johnson', github: 'alexcjohnson', status: 'active' },
  { name: 'Emily Kellison-Linn', github: 'emilykl', status: 'active' },
  { name: 'Cameron DeCoster', github: 'camdecoster', status: 'active' },
  { name: 'Mojtaba Samimi', github: 'archmoj', status: 'active' },
  { name: 'My-Tien Nguyen', github: 'my-tien', status: 'active' },
  { name: 'Birk Skyum', github: 'birkskyum', status: 'active' },
  { name: 'Étienne Tétreault-Pinard', github: 'etpinard', status: 'hall' },
  { name: 'Antoine Roy-Gobeil', github: 'antoinerg', status: 'hall' },
  { name: 'Jack Parmer', github: 'jackparmer', status: 'hall' },
  { name: 'Nicolas Kruchten', github: 'nicolaskruchten', status: 'hall' },
  { name: 'Mikola Lysenko', github: 'mikolalysenko', status: 'hall' },
  { name: 'Ricky Reusser', github: 'rreusser', status: 'hall' },
  { name: 'Dmitry Yv.', github: 'dy', status: 'hall' },
  { name: 'Jon Mease', github: 'jonmmease', status: 'hall' },
  { name: 'Robert Monfera', github: 'monfera', status: 'hall' },
  { name: 'Robert Möstl', github: 'rmoestl', status: 'hall' },
  { name: 'Nicolas Riesco', github: 'n-riesco', status: 'hall' },
  { name: 'Miklós Tusz', github: 'mdtusz', status: 'hall' },
  { name: 'Chelsea Douglas', github: 'cldougl', status: 'hall' },
  { name: 'Ben Postlethwaite', github: 'bpostlethwaite', status: 'hall' },
  { name: 'Hannah Ker', github: 'hannahker', status: 'hall' },
  { name: 'Chris Parmer', github: 'chriddyp', status: 'hall' },
  { name: 'Alex Vados', github: 'alexander-daniel', status: 'hall' },
]

/* ============================================
   Navigation
   ============================================ */
const navItems = [
  { label: '首页', route: '/' },
  { label: '图表演示', route: '/gallery' },
  { label: '快速开始', route: '/install' },
  { label: '图表类型', route: '/chart-types' },
  { label: '贡献指南', route: '/contributing' },
  { label: '社区', route: '/community' },
]

function renderNav(activeRoute: string) {
  return `
  <nav class="nav">
    <div class="nav-inner">
      <a href="#/" class="nav-logo">
        <span class="nav-logo-mark">${logoMark(28)}</span>
        Plotly.js
      </a>
      <ul class="nav-links">
        ${navItems.map(item => `
          <li><a href="#${item.route}" class="${item.route === activeRoute ? 'nav-active' : ''}">${item.label}</a></li>
        `).join('')}
      </ul>
      <a href="https://github.com/plotly/plotly.js" target="_blank" rel="noopener" class="nav-cta">${githubIcon(14)} GitHub</a>
    </div>
  </nav>
  `
}

function renderFooter() {
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-inner">
        <div class="footer-text">
          代码与文档版权归 2025 Plotly, Inc. 所有 · 基于 MIT 许可证发布
        </div>
        <ul class="footer-links">
          <li><a href="https://plotly.com/javascript/" target="_blank" rel="noopener">官方文档</a></li>
          <li><a href="https://github.com/plotly/plotly.js" target="_blank" rel="noopener">GitHub</a></li>
          <li><a href="https://x.com/plotlygraphs" target="_blank" rel="noopener">X</a></li>
          <li><a href="https://www.linkedin.com/company/plotly/" target="_blank" rel="noopener">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  </footer>
  `
}

/* ============================================
   Page: Home
   ============================================ */
function homePage(): string {
  return `
  <section class="hero" id="hero">
    <div class="hero-bg"></div>
    <div class="hero-grid"></div>
    <div class="hero-coords">
      <span>(0,0)</span>
      <span>(1,0)</span>
      <span>(0,1)</span>
      <span>(1,1)</span>
    </div>
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <div class="hero-badges">
            <span class="hero-badge"><span class="dot pulse-dot"></span> v3.7.0</span>
            <span class="hero-badge">MIT</span>
            <span class="hero-badge">zero-dep</span>
          </div>
          <h1>用 <span class="brand">Plotly.js</span><br>让数据开口说话</h1>
          <p>独立的 JavaScript 数据可视化库，支持数十种图表类型——统计图表、3D 图形、科学图表、SVG 与瓦片地图、金融图表。从简单折线到复杂 3D 曲面，只需几行代码。</p>
          <div class="hero-actions">
            <a href="#/gallery" class="btn-primary">
              探索图表演示
              ${arrowRight(15)}
            </a>
            <a href="#/install" class="btn-secondary">
              ${plusIcon(15)}
              快速开始
            </a>
          </div>
        </div>
        <div class="hero-chart-wrap">
          <div class="hero-chart-frame">
            <div class="hero-chart-header">
              <span class="hero-chart-dot" style="background:#fb7185"></span>
              <span class="hero-chart-dot" style="background:#fbbf24"></span>
              <span class="hero-chart-dot" style="background:#5eead4"></span>
              <span class="hero-chart-title">surface.gl</span>
              <div class="hero-chart-readout">
                <span>fps <span class="val">60</span></span>
                <span>z_max <span class="val">3.2</span></span>
              </div>
            </div>
            <div id="hero-chart"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="axis-divider"></div>

  <section class="section" id="features">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-eyebrow">CAPABILITIES</span>
        <h2 class="section-title">为什么选择 Plotly.js</h2>
        <p class="section-subtitle">从基础图表到高级 3D 可视化，Plotly.js 提供完整的交互式数据可视化解决方案。</p>
      </div>

      <div class="bento-grid">
        <div class="bento-card wide reveal" style="--i:0;background:linear-gradient(135deg,rgba(94,234,212,0.04),transparent)">
          <div class="bento-icon" style="background:rgba(94,234,212,0.08);color:#5eead4">
            ${featureIcon('chartTypes', '#5eead4')}
          </div>
          <h3>40+ 种图表类型</h3>
          <p>覆盖折线、柱状、散点、饼图等基础图表，以及 3D 曲面、小提琴图、桑基图、旭日图、瀑布图、等值线地图等高级图表类型。无论是统计分析、科学计算还是金融展示，都能找到合适的可视化方式。</p>
          <span class="bento-label">[ 01 / chart_types ]</span>
        </div>

        <div class="bento-card reveal" style="--i:1">
          <div class="bento-icon" style="background:rgba(167,139,250,0.08);color:#a78bfa">
            ${featureIcon('layers3d', '#a78bfa')}
          </div>
          <h3>原生 3D 可视化</h3>
          <p>基于 WebGL 的 3D 渲染引擎，支持 3D 散点、曲面、网格、柱体等多种 3D 图表，可自由旋转缩放。</p>
          <span class="bento-label">[ 02 / webgl_3d ]</span>
        </div>

        <div class="bento-card reveal" style="--i:2">
          <div class="bento-icon" style="background:rgba(56,189,248,0.08);color:#38bdf8">
            ${featureIcon('globe', '#38bdf8')}
          </div>
          <h3>内置地图支持</h3>
          <p>支持等值线地图、散点地图、地理散点等多种地图可视化，内置国家/州级地理数据。</p>
          <span class="bento-label">[ 03 / geo_maps ]</span>
        </div>

        <div class="bento-card reveal" style="--i:3">
          <div class="bento-icon" style="background:rgba(251,113,133,0.08);color:#fb7185">
            ${featureIcon('animation', '#fb7185')}
          </div>
          <h3>动画与过渡</h3>
          <p>内置帧动画系统，支持数据更新过渡、平滑动画效果，让数据变化过程清晰可见。</p>
          <span class="bento-label">[ 04 / animation ]</span>
        </div>

        <div class="bento-card reveal" style="--i:4">
          <div class="bento-icon" style="background:rgba(251,191,36,0.08);color:#fbbf24">
            ${featureIcon('interactive', '#fbbf24')}
          </div>
          <h3>完全交互</h3>
          <p>开箱即用的缩放、平移、悬停提示、图例切换、范围选择等交互功能，无需额外配置。</p>
          <span class="bento-label">[ 05 / interactive ]</span>
        </div>

        <div class="bento-card wide reveal" style="--i:5;background:linear-gradient(135deg,rgba(94,234,212,0.04),transparent)">
          <div class="bento-icon" style="background:rgba(94,234,212,0.08);color:#5eead4">
            ${featureIcon('ecosystem', '#5eead4')}
          </div>
          <h3>多框架生态</h3>
          <p>Plotly.js 是 Plotly 生态的核心引擎，Python 的 Plotly.py 和 R 的 Plotly.R 都构建在它之上。一次学习，跨语言复用。同时支持 React、Vue、Angular 等主流前端框架的无缝集成。</p>
          <span class="bento-label">[ 06 / ecosystem ]</span>
        </div>

        <div class="bento-card reveal" style="--i:6">
          <div class="bento-icon" style="background:rgba(134,239,172,0.08);color:#86efac">
            ${featureIcon('independent', '#86efac')}
          </div>
          <h3>零依赖</h3>
          <p>独立的 JavaScript 库，不依赖任何其他框架。通过 npm 或 CDN 即可使用。</p>
          <span class="bento-label">[ 07 / standalone ]</span>
        </div>

        <div class="bento-card reveal" style="--i:7">
          <div class="bento-icon" style="background:rgba(56,189,248,0.08);color:#38bdf8">
            ${featureIcon('export', '#38bdf8')}
          </div>
          <h3>导出与分享</h3>
          <p>支持导出为 PNG、SVG、JPEG 等格式，可嵌入静态报告或分享到网页。</p>
          <span class="bento-label">[ 08 / export ]</span>
        </div>
      </div>
    </div>
  </section>

  <div class="axis-divider"></div>

  <section class="section cta-section">
    <div class="container">
      <div class="cta-box reveal">
        <h2>准备好开始可视化了吗？</h2>
        <p>立即安装 Plotly.js，用几行代码创建你的第一个交互式图表。</p>
        <div class="hero-actions" style="justify-content:center">
          <a href="#/install" class="btn-primary">
            快速开始
            ${arrowRight(15)}
          </a>
          <a href="https://plotly.com/javascript/" target="_blank" rel="noopener" class="btn-secondary">
            查看官方文档
          </a>
        </div>
      </div>
    </div>
  </section>
  `
}

/* ============================================
   Page: Gallery
   ============================================ */
function galleryPage(): string {
  const charts = [
    { id: 'chart-animated-lines', title: '动态多系列折线图', desc: '实时数据流 · 多系列叠加 · 平滑曲线', tag: '动画', tagColor: '94,234,212', wide: true },
    { id: 'chart-surface-3d', title: '3D 曲面图', desc: '数学函数可视化 · 拖动旋转', tag: '3D', tagColor: '167,139,250', wide: false },
    { id: 'chart-bubble', title: '气泡散点图', desc: '四维数据展示 · 自动刷新', tag: '动态', tagColor: '56,189,248', wide: false },
    { id: 'chart-candlestick', title: 'K 线图 + 移动平均线', desc: '金融时间序列 · 范围选择器 · 涨跌色彩', tag: '金融', tagColor: '94,234,212', wide: true },
    { id: 'chart-choropleth', title: '世界地图 — 等值线图', desc: '国家数据分布 · 自然地球投影 · 悬停查看', tag: '地图', tagColor: '251,113,133', wide: true, height: '380px' },
    { id: 'chart-violin', title: '小提琴图', desc: '分布密度 · 内嵌箱线图 · 离群点', tag: '统计', tagColor: '251,113,133', wide: false },
    { id: 'chart-heatmap', title: '热力图', desc: '二维矩阵 · 连续色彩映射', tag: '科学', tagColor: '251,191,36', wide: false },
    { id: 'chart-treemap', title: '矩形树图', desc: '层级数据 · 面积比例 · 分类着色', tag: '层级', tagColor: '94,234,212', wide: false },
    { id: 'chart-sankey', title: '桑基图', desc: '数据流向 · 多层级追踪', tag: '流向', tagColor: '167,139,250', wide: false },
    { id: 'chart-contour', title: '等高线图', desc: '标量场可视化 · 等值线追踪', tag: '科学', tagColor: '56,189,248', wide: false },
    { id: 'chart-polar', title: '雷达图', desc: '多维度对比 · 填充区域', tag: '对比', tagColor: '251,113,133', wide: false },
    { id: 'chart-scatter3d', title: '3D 散点图', desc: '三维数据 · 螺旋分布 · 旋转视角', tag: '3D', tagColor: '94,234,212', wide: false },
    { id: 'chart-sunburst', title: '旭日图', desc: '径向层级 · 多层展开', tag: '层级', tagColor: '251,191,36', wide: false },
    { id: 'chart-waterfall', title: '瀑布图', desc: '增量分解 · 正负对比 · 汇总', tag: '金融', tagColor: '134,239,172', wide: false },
    { id: 'chart-density', title: '密度等高线', desc: '二维直方图 · 核密度估计', tag: '统计', tagColor: '94,234,212', wide: false },
  ]

  return `
  <section class="section" id="gallery" style="padding-top:100px">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-eyebrow">LIVE DEMOS</span>
        <h2 class="section-title">实时图表演示</h2>
        <p class="section-subtitle">以下所有图表均由 Plotly.js 实时渲染——支持缩放、平移、悬停查看数据、导出图片。拖动 3D 图表旋转视角，体验真正的交互式数据可视化。</p>
      </div>

      <div class="chart-gallery">
        ${charts.map((c, i) => `
          <div class="chart-card ${c.wide ? 'wide' : ''} reveal" style="--i:${i}">
            <div class="chart-card-header">
              <div class="chart-card-info">
                <span class="chart-card-label">CHART_${String(i + 1).padStart(2, '0')}</span>
                <h3>${c.title}</h3>
                <p>${c.desc}</p>
              </div>
              <span class="chart-card-tag" style="background:rgba(${c.tagColor},0.08);color:rgb(${c.tagColor})">${c.tag}</span>
            </div>
            <div class="chart-card-body">
              <div id="${c.id}" class="plotly-chart" ${c.height ? `style="height:${c.height}"` : ''}></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>
  `
}

/* ============================================
   Page: Install
   ============================================ */
function installPage(): string {
  return `
  <section class="section" id="install" style="background:var(--panel);padding-top:100px">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-eyebrow">QUICK START</span>
        <h2 class="section-title">三步开始使用</h2>
        <p class="section-subtitle">通过 npm 安装或直接引入 CDN 脚本，几分钟内即可创建你的第一个交互式图表。</p>
      </div>

      <div class="install-grid">
        <div class="reveal" style="--i:0">
          <div class="install-steps">
            <div class="install-step">
              <div class="install-step-num">1</div>
              <div>
                <h4>安装 Plotly.js</h4>
                <p>通过 npm 安装压缩版打包文件，或直接通过 CDN 引入。</p>
              </div>
            </div>
            <div class="install-step">
              <div class="install-step-num">2</div>
              <div>
                <h4>创建容器元素</h4>
                <p>在 HTML 中添加一个 div 作为图表的渲染目标。</p>
              </div>
            </div>
            <div class="install-step">
              <div class="install-step-num">3</div>
              <div>
                <h4>调用 newPlot</h4>
                <p>传入数据和布局配置，Plotly 会自动渲染交互式图表。</p>
              </div>
            </div>
          </div>
        </div>

        <div class="reveal" style="--i:1">
          <div class="install-tabs" id="install-tabs">
            <button class="install-tab active" data-tab="npm">npm</button>
            <button class="install-tab" data-tab="cdn">CDN</button>
            <button class="install-tab" data-tab="esm">ES Module</button>
          </div>

          <div class="install-code" id="install-code-npm">
            <div class="install-code-header">
              <span class="install-code-label">Terminal + app.js</span>
              <button class="copy-btn" data-copy="npm">复制</button>
            </div>
<pre><code><span class="com"># 安装</span>
<span class="kw">npm</span> i --save plotly.js-dist-min

<span class="com">// app.js</span>
<span class="kw">import</span> Plotly <span class="kw">from</span> <span class="str">'plotly.js-dist-min'</span>

<span class="com">// 创建图表</span>
Plotly.<span class="fn">newPlot</span>(<span class="str">'gd'</span>, [
  { <span class="var">y</span>: [<span class="kw">1</span>, <span class="kw">2</span>, <span class="kw">3</span>], <span class="var">type</span>: <span class="str">'scatter'</span> }
], {
  <span class="var">title</span>: <span class="str">'我的第一个图表'</span>
})</code></pre>
          </div>

          <div class="install-code" id="install-code-cdn" style="display:none">
            <div class="install-code-header">
              <span class="install-code-label">index.html</span>
              <button class="copy-btn" data-copy="cdn">复制</button>
            </div>
<pre><code><span class="com">&lt;!-- 引入 Plotly.js --&gt;</span>
&lt;<span class="kw">script</span> <span class="var">src</span>=<span class="str">"https://cdn.plot.ly/plotly-3.7.0.min.js"</span>&gt;&lt;/<span class="kw">script</span>&gt;

<span class="com">&lt;!-- 图表容器 --&gt;</span>
&lt;<span class="kw">div</span> <span class="var">id</span>=<span class="str">"gd"</span>&gt;&lt;/<span class="kw">div</span>&gt;

<span class="com">&lt;!-- 渲染图表 --&gt;</span>
&lt;<span class="kw">script</span>&gt;
  Plotly.<span class="fn">newPlot</span>(<span class="str">"gd"</span>, {
    <span class="str">"data"</span>: [{ <span class="str">"y"</span>: [<span class="kw">1</span>, <span class="kw">2</span>, <span class="kw">3</span>] }],
    <span class="str">"layout"</span>: { <span class="str">"width"</span>: <span class="kw">600</span>, <span class="str">"height"</span>: <span class="kw">400</span> }
  })
&lt;/<span class="kw">script</span>&gt;</code></pre>
          </div>

          <div class="install-code" id="install-code-esm" style="display:none">
            <div class="install-code-header">
              <span class="install-code-label">index.html</span>
              <button class="copy-btn" data-copy="esm">复制</button>
            </div>
<pre><code><span class="com">&lt;!-- 原生 ES6 模块引入 --&gt;</span>
&lt;<span class="kw">script</span> <span class="var">type</span>=<span class="str">"module"</span>&gt;
  <span class="kw">import</span> <span class="str">"https://cdn.plot.ly/plotly-3.7.0.min.js"</span>

  Plotly.<span class="fn">newPlot</span>(<span class="str">"gd"</span>, [
    { <span class="var">y</span>: [<span class="kw">1</span>, <span class="kw">2</span>, <span class="kw">3</span>] }
  ])
&lt;/<span class="kw">script</span>&gt;

<span class="com">&lt;!-- 也支持 MathJax 集成 --&gt;</span>
&lt;<span class="kw">script</span> <span class="var">src</span>=<span class="str">"https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-svg.js"</span>&gt;
&lt;/<span class="kw">script</span>&gt;</code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="axis-divider"></div>

  <section class="section" id="best-practices">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-eyebrow">BEST PRACTICES</span>
        <h2 class="section-title">编写高质量示例</h2>
        <p class="section-subtitle">遵循 Plotly 官方文档的最佳实践，让你的代码示例更清晰、更专业。</p>
      </div>

      <div class="bento-grid">
        <div class="bento-card reveal" style="--i:0">
          <div class="bento-icon" style="background:rgba(94,234,212,0.08);color:#5eead4">
            ${featureIcon('interactive', '#5eead4')}
          </div>
          <h3>避免全局变量</h3>
          <p>不要为 <code>data</code> 和 <code>layout</code> 使用全局 JavaScript 变量，应将它们作为参数传入 <code>newPlot()</code>。</p>
        </div>

        <div class="bento-card reveal" style="--i:1">
          <div class="bento-icon" style="background:rgba(167,139,250,0.08);color:#a78bfa">
            ${featureIcon('layers3d', '#a78bfa')}
          </div>
          <h3>使用 myDiv 命名</h3>
          <p>图表显示在名为 <code>myDiv</code> 的 DOM 元素中，保持与官方文档示例的一致性。</p>
        </div>

        <div class="bento-card reveal" style="--i:2">
          <div class="bento-icon" style="background:rgba(251,113,133,0.08);color:#fb7185">
            ${featureIcon('animation', '#fb7185')}
          </div>
          <h3>调用 newPlot()</h3>
          <p>始终使用 <code>Plotly.newPlot()</code> 函数创建图表，而非 <code>react()</code> 或 <code>plot()</code>。</p>
        </div>

        <div class="bento-card reveal" style="--i:3">
          <div class="bento-icon" style="background:rgba(134,239,172,0.08);color:#86efac">
            ${featureIcon('independent', '#86efac')}
          </div>
          <h3>使用真实数据</h3>
          <p>尽量使用真实数据而非随机或虚拟数据，让示例更具实用性。大数据集可上传至 <a href="https://github.com/plotly/datasets" target="_blank" rel="noopener" style="color:var(--signal)">plotly/datasets</a> 仓库。</p>
        </div>

        <div class="bento-card reveal" style="--i:4">
          <div class="bento-icon" style="background:rgba(56,189,248,0.08);color:#38bdf8">
            ${featureIcon('globe', '#38bdf8')}
          </div>
          <h3>Mapbox 令牌</h3>
          <p>如果图表需要 Mapbox 认证，使用 <code>var config = {mapboxAccessToken: "your access token"}</code> 配置。构建时会自动替换为 Plotly 的私有令牌。</p>
        </div>

        <div class="bento-card reveal" style="--i:5">
          <div class="bento-icon" style="background:rgba(251,191,36,0.08);color:#fbbf24">
            ${featureIcon('chartTypes', '#fbbf24')}
          </div>
          <h3>从简到难排序</h3>
          <p>在文档示例中，按从基础到高级的顺序排列 <code>order</code> 字段，让读者循序渐进地学习。</p>
        </div>
      </div>
    </div>
  </section>
  `
}

/* ============================================
   Page: Chart Types
   ============================================ */
function chartTypesPage(): string {
  return `
  <section class="section" id="chart-types" style="padding-top:100px">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-eyebrow">CHART CATALOG</span>
        <h2 class="section-title">40+ 种图表类型</h2>
        <p class="section-subtitle">从基础统计到高级 3D 可视化，Plotly.js 按官方文档分类组织了七大图表类别，几乎涵盖了所有数据可视化需求。</p>
      </div>

      ${chartCategories.map(cat => {
        const items = chartTypes.filter(ct => ct.cat === cat.id)
        return `
        <div class="chart-cat-section reveal">
          <div class="chart-cat-header">
            <span class="chart-cat-badge" style="background:${cat.color}10;color:${cat.color}">${cat.desc}</span>
            <h3 class="chart-cat-title">${cat.name}</h3>
            <span class="chart-cat-count">${items.length} types</span>
          </div>
          <div class="chart-types-grid">
            ${items.map(ct => `
              <div class="chart-type-item">
                <div class="chart-type-icon" style="background:${ct.color}10">
                  ${chartTypeIcon(ct.icon, ct.color)}
                </div>
                <div>
                  <div class="chart-type-name">${ct.name}</div>
                  <div class="chart-type-desc">${ct.desc}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        `
      }).join('')}
    </div>
  </section>
  `
}

/* ============================================
   Page: Community
   ============================================ */
function communityPage(): string {
  return `
  <section class="section" id="contributors" style="background:var(--panel);padding-top:100px">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-eyebrow">COMMUNITY</span>
        <h2 class="section-title">重要贡献者</h2>
        <p class="section-subtitle">Plotly.js 是一个庞大且充满活力的生态体系的核心，众多贡献者在此提交 issue、复现 bug、提出改进建议并编写代码。</p>
      </div>

      <div class="contributors-grid reveal">
        ${contributors.map(c => `
          <div class="contributor-card">
            <div class="contributor-avatar">${c.name.charAt(0)}</div>
            <div class="contributor-info">
              <h4>${c.name}</h4>
              <a href="https://github.com/${c.github}" target="_blank" rel="noopener">@${c.github}</a>
            </div>
            <span class="contributor-badge ${c.status === 'active' ? 'active' : 'hall'}">
              ${c.status === 'active' ? 'active' : 'hall'}
            </span>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <div class="axis-divider"></div>

  <section class="section" id="community">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-eyebrow">CONNECT</span>
        <h2 class="section-title">社区与资源</h2>
        <p class="section-subtitle">在社区论坛、Stack Overflow 或社交媒体上与全球开发者交流。</p>
      </div>

      <div class="community-grid reveal">
        <a href="https://community.plotly.com/c/plotly-js" target="_blank" rel="noopener" class="community-card">
          <div class="bento-icon" style="background:rgba(94,234,212,0.08);color:#5eead4">
            ${communityIcon('forum', '#5eead4')}
          </div>
          <h4>社区论坛</h4>
          <p>在 Plotly 社区论坛的 plotly-js 标签下提问、分享和讨论。</p>
          <span class="community-card-arrow">community.plotly.com →</span>
        </a>

        <a href="https://stackoverflow.com/questions/tagged/plotly.js" target="_blank" rel="noopener" class="community-card">
          <div class="bento-icon" style="background:rgba(251,113,133,0.08);color:#fb7185">
            ${communityIcon('stackoverflow', '#fb7185')}
          </div>
          <h4>Stack Overflow</h4>
          <p>在 Stack Overflow 上搜索 plotly.js 标签，获取技术解答。</p>
          <span class="community-card-arrow">stackoverflow.com →</span>
        </a>

        <a href="https://github.com/plotly/plotly.js" target="_blank" rel="noopener" class="community-card">
          <div class="bento-icon" style="background:rgba(56,189,248,0.08);color:#38bdf8">
            ${communityIcon('github', '#38bdf8')}
          </div>
          <h4>GitHub 仓库</h4>
          <p>查看源码、提交 issue、参与贡献，与 Plotly.js 团队一起构建。</p>
          <span class="community-card-arrow">github.com →</span>
        </a>
      </div>
    </div>
  </section>

  <div class="axis-divider"></div>

  <section class="section cta-section">
    <div class="container">
      <div class="cta-box reveal">
        <h2>准备好开始可视化了吗？</h2>
        <p>立即安装 Plotly.js，用几行代码创建你的第一个交互式图表。</p>
        <div class="hero-actions" style="justify-content:center">
          <a href="#/install" class="btn-primary">
            快速开始
            ${arrowRight(15)}
          </a>
          <a href="https://github.com/plotly/plotly.js" target="_blank" rel="noopener" class="btn-secondary">
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
  `
}

/* ============================================
   Page: Contributing
   ============================================ */
function contributingPage(): string {
  return `
  <section class="section" id="contributing" style="padding-top:100px">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-eyebrow">CONTRIBUTE</span>
        <h2 class="section-title">贡献指南</h2>
        <p class="section-subtitle">Plotly 欢迎社区为其开源图表库文档做出贡献。无论是修正错别字、添加新示例还是改进说明，每一份贡献都让文档更好。</p>
      </div>

      <div class="bento-grid" style="margin-bottom:40px">
        <div class="bento-card wide reveal" style="--i:0;background:linear-gradient(135deg,rgba(94,234,212,0.04),transparent)">
          <div class="bento-icon" style="background:rgba(94,234,212,0.08);color:#5eead4">
            ${featureIcon('ecosystem', '#5eead4')}
          </div>
          <h3>仓库概览</h3>
          <p><code>graphing-library-docs</code> 仓库主要服务于 Plotly 的图表库文档索引页、JavaScript 图表库文档（<a href="https://plotly.com/javascript" target="_blank" rel="noopener" style="color:var(--signal)">plotly.com/javascript</a>）。JavaScript 文档内容存放在 <code>_posts/plotly_js</code> 目录中。Python 和 R 的文档内容不在本仓库中，而是在构建时从上游仓库拉取。</p>
        </div>

        <div class="bento-card reveal" style="--i:1">
          <div class="bento-icon" style="background:rgba(251,113,133,0.08);color:#fb7185">
            ${featureIcon('interactive', '#fb7185')}
          </div>
          <h3>快速贡献</h3>
          <p>在文档页面右上角点击「在 GitHub 上编辑此页面」链接，直接提交 Pull Request。不用担心弄坏网站——你的更改不会立即上线，Plotly 团队成员会先进行代码审查。</p>
        </div>

        <div class="bento-card reveal" style="--i:2">
          <div class="bento-icon" style="background:rgba(134,239,172,0.08);color:#86efac">
            ${featureIcon('independent', '#86efac')}
          </div>
          <h3>本地开发</h3>
          <p>克隆仓库后安装 Ruby 2.7.4、Python 包和 Node 包，运行 <code>make setup</code> 一键安装所有依赖，然后用 <code>bundle exec jekyll serve</code> 启动本地服务。</p>
        </div>
      </div>

      <div class="contributing-sections">
        <div class="contributing-block reveal">
          <h3 class="contributing-block-title">
            <span class="contributing-block-num">01</span>
            本地环境搭建
          </h3>
          <p class="contributing-block-desc">对于较大的改动（如新增示例文章），建议在本地搭建开发环境以测试更改。</p>
          <div class="install-code">
            <div class="install-code-header">
              <span class="install-code-label">Terminal</span>
            </div>
<pre><code><span class="com"># 1. 克隆仓库</span>
<span class="kw">git</span> clone git@github.com:plotly/graphing-library-docs.git
<span class="kw">cd</span> graphing-library-docs

<span class="com"># 2. 安装 Ruby 2.7.4</span>
<span class="kw">ruby</span> --version  <span class="com"># 确认版本</span>

<span class="com"># 3. 一键安装所有依赖</span>
<span class="kw">make</span> setup
<span class="com"># 或者手动安装：</span>
<span class="kw">gem</span> install bundler <span class="kw">&&</span> bundle install  <span class="com"># Ruby gems</span>
<span class="kw">pip</span> install -r requirements.txt      <span class="com"># Python 包</span>
<span class="kw">npm</span> install                           <span class="com"># Node 包</span>
<span class="kw">make</span> fetch_upstream_files             <span class="com"># 上游教程内容</span>

<span class="com"># 4. 启动 Jekyll 服务</span>
bundle <span class="kw">exec</span> jekyll serve --config _config_dev.yml

<span class="com"># 5. 访问 http://localhost:4000</span></code></pre>
          </div>
          <p style="font-size:13px;color:var(--text-mute);margin-top:12px">默认开发配置 <code>_config_dev.yml</code> 排除了 <code>_posts/plotly_js</code> 和 <code>_posts/python-v3</code> 以加速构建。可创建 <code>_config_personal.yml</code> 自定义配置。</p>
        </div>

        <div class="contributing-block reveal">
          <h3 class="contributing-block-title">
            <span class="contributing-block-num">02</span>
            创建新示例文章
          </h3>
          <p class="contributing-block-desc">在 <code>_posts/plotly_js</code> 目录下为新的图表类型创建文档。</p>
          <div class="contributing-steps-grid">
            <div class="contributing-step-card">
              <div class="install-step-num">1</div>
              <h4>创建索引页</h4>
              <p>如果是新的图表类型，先创建索引页：<code>yyyy-mm-dd-chart_type_plotly_js_index.html</code>，设置 <code>page_type: example_index</code> 和 <code>order: 5</code>。</p>
            </div>
            <div class="contributing-step-card">
              <div class="install-step-num">2</div>
              <h4>创建示例文件</h4>
              <p>在对应文件夹中创建 <code>yyyy-mm-dd-example-title.html</code>，复制模板并编写 JavaScript 代码演示功能。</p>
            </div>
            <div class="contributing-step-card">
              <div class="install-step-num">3</div>
              <h4>设置 display_as</h4>
              <p>使用 <code>display_as</code> 字段将教程分类：basic、statistical、scientific、financial、maps、3d_charts 等。</p>
            </div>
            <div class="contributing-step-card">
              <div class="install-step-num">4</div>
              <h4>添加缩略图</h4>
              <p>缩略图必须精确为 160×160 像素，命名 <code>your-tutorial-chart.jpg</code>。可附加到 PR 中由维护者上传。</p>
            </div>
          </div>
        </div>

        <div class="contributing-block reveal">
          <h3 class="contributing-block-title">
            <span class="contributing-block-num">03</span>
            display_as 分类对照表
          </h3>
          <p class="contributing-block-desc">官方文档将所有教程按以下分类组织，每篇教程通过 <code>display_as</code> 前端元数据指定所属分类。</p>
          <div class="display-as-table">
            <div class="display-as-row display-as-header-row">
              <span>display_as</span>
              <span>分类名称</span>
              <span>文档地址</span>
            </div>
            <div class="display-as-row">
              <span><code>file_settings</code></span>
              <span>Plotly 基础</span>
              <span><a href="https://plotly.com/javascript/plotly-fundamentals" target="_blank" rel="noopener">/javascript/plotly-fundamentals</a></span>
            </div>
            <div class="display-as-row">
              <span><code>basic</code></span>
              <span>基础图表</span>
              <span><a href="https://plotly.com/javascript/basic-charts" target="_blank" rel="noopener">/javascript/basic-charts</a></span>
            </div>
            <div class="display-as-row">
              <span><code>statistical</code></span>
              <span>统计图表</span>
              <span><a href="https://plotly.com/javascript/statistical-charts" target="_blank" rel="noopener">/javascript/statistical-charts</a></span>
            </div>
            <div class="display-as-row">
              <span><code>scientific</code></span>
              <span>科学图表</span>
              <span><a href="https://plotly.com/javascript/scientific-charts" target="_blank" rel="noopener">/javascript/scientific-charts</a></span>
            </div>
            <div class="display-as-row">
              <span><code>financial</code></span>
              <span>金融图表</span>
              <span><a href="https://plotly.com/javascript/financial-charts" target="_blank" rel="noopener">/javascript/financial-charts</a></span>
            </div>
            <div class="display-as-row">
              <span><code>maps</code></span>
              <span>地图</span>
              <span><a href="https://plotly.com/javascript/maps" target="_blank" rel="noopener">/javascript/maps</a></span>
            </div>
            <div class="display-as-row">
              <span><code>3d_charts</code></span>
              <span>3D 图表</span>
              <span><a href="https://plotly.com/javascript/3d-charts" target="_blank" rel="noopener">/javascript/3d-charts</a></span>
            </div>
          </div>
        </div>

        <div class="contributing-block reveal">
          <h3 class="contributing-block-title">
            <span class="contributing-block-num">04</span>
            持续集成与 CI
          </h3>
          <p class="contributing-block-desc">提交 Pull Request 后，GitHub Actions 工作流会自动运行以下检查：</p>
          <div class="ci-pipeline">
            <div class="ci-step">
              <div class="ci-step-icon" style="background:rgba(94,234,212,0.08);color:#5eead4">1</div>
              <div>
                <strong>YAML 前端元数据验证</strong>
                <p>运行 <code>front-matter-ci.py</code> 验证每篇文章的 YAML front-matter 格式。</p>
              </div>
            </div>
            <div class="ci-step">
              <div class="ci-step-icon" style="background:rgba(167,139,250,0.08);color:#a78bfa">2</div>
              <div>
                <strong>排序验证</strong>
                <p>运行 <code>check-or-enforce-order.py</code> 验证每个教程目录中 <code>order</code> 字段是否为连续整数。</p>
              </div>
            </div>
            <div class="ci-step">
              <div class="ci-step-icon" style="background:rgba(251,113,133,0.08);color:#fb7185">3</div>
              <div>
                <strong>Jekyll 构建</strong>
                <p>运行 <code>bundle exec jekyll build</code> 确保整个站点可以成功构建。</p>
              </div>
            </div>
            <div class="ci-step">
              <div class="ci-step-icon" style="background:rgba(134,239,172,0.08);color:#86efac">4</div>
              <div>
                <strong>Percy 视觉回归</strong>
                <p>捕获 Percy 快照进行视觉回归审查，确保 UI 变更符合预期。</p>
              </div>
            </div>
          </div>
        </div>

        <div class="contributing-block reveal">
          <h3 class="contributing-block-title">
            <span class="contributing-block-num">05</span>
            搜索索引（Algolia）
          </h3>
          <p class="contributing-block-desc">plotly.com 文档页面的搜索由 Algolia 索引驱动，独立于站点构建进行更新。共有四个索引：</p>
          <div class="search-index-grid">
            <div class="search-index-card">
              <h4>js_docs</h4>
              <p>JavaScript 文档搜索</p>
              <code>make update_js_search</code>
            </div>
            <div class="search-index-card">
              <h4>python_docs</h4>
              <p>Python 文档搜索</p>
              <code>make update_python_search</code>
            </div>
            <div class="search-index-card">
              <h4>r_docs</h4>
              <p>R 文档搜索</p>
              <code>make update_r_search</code>
            </div>
            <div class="search-index-card">
              <h4>schema</h4>
              <p>参考页面搜索</p>
              <code>make update_ref_search</code>
            </div>
          </div>
          <p style="font-size:13px;color:var(--text-mute);margin-top:16px">每当在对应的 <code>_posts/</code> 目录中添加新教程时，运行相应的 <code>update_*_search</code> 命令。发布新 plotly.js 版本时运行 <code>schema</code> 索引更新。更新索引需要私有的 Algolia API 密钥，可通过 issue 向 Plotly 维护者申请。</p>
        </div>

        <div class="contributing-block reveal">
          <h3 class="contributing-block-title">
            <span class="contributing-block-num">06</span>
            提交 Pull Request
          </h3>
          <p class="contributing-block-desc">准备好让你的更改被审查了吗？按以下步骤提交 PR：</p>
          <div class="install-code">
            <div class="install-code-header">
              <span class="install-code-label">Terminal</span>
            </div>
<pre><code><span class="com"># 创建功能分支</span>
<span class="kw">git</span> checkout -b your_feature_branch

<span class="com"># 查看已更改的文件</span>
<span class="kw">git</span> status

<span class="com"># 添加并提交更改</span>
<span class="kw">git</span> add file-a
<span class="kw">git</span> add file-b
<span class="kw">git</span> commit -m <span class="str">'描述你的更改'</span>

<span class="com"># 推送到远程仓库</span>
<span class="kw">git</span> push origin your_feature_branch

<span class="com"># 然后访问 github.com/plotly/graphing-library-docs
# 开启 Pull Request，等待 Plotly 维护者审查</span></code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>
  `
}

/* ============================================
   Router
   ============================================ */
type PageDef = {
  render: () => string
  mount?: () => void
}

const routes: Record<string, PageDef> = {
  '/': {
    render: homePage,
    mount: mountHome,
  },
  '/gallery': {
    render: galleryPage,
    mount: mountGallery,
  },
  '/install': {
    render: installPage,
    mount: mountInstall,
  },
  '/chart-types': {
    render: chartTypesPage,
  },
  '/contributing': {
    render: contributingPage,
  },
  '/community': {
    render: communityPage,
  },
}

/* ============================================
   Cleanup tracking
   ============================================ */
let heroCleanup: (() => void) | null = null
let bubbleCleanup: (() => void) | null = null
let linesCleanup: (() => void) | null = null

function cleanupAll() {
  if (heroCleanup) { heroCleanup(); heroCleanup = null }
  if (bubbleCleanup) { bubbleCleanup(); bubbleCleanup = null }
  if (linesCleanup) { linesCleanup(); linesCleanup = null }
  document.querySelectorAll('.js-plotly-plot').forEach((el) => {
    try {
      const Plotly = (window as any).Plotly
      if (Plotly && Plotly.purge) Plotly.purge(el as HTMLElement)
    } catch { /* noop */ }
  })
}

/* ============================================
   Mount functions
   ============================================ */
function mountHome() {
  const heroEl = document.getElementById('hero-chart')
  if (heroEl) {
    heroCleanup = renderHeroChart(heroEl)
  }
}

function mountGallery() {
  const chartRenderers: Record<string, () => void> = {
    'chart-animated-lines': () => { linesCleanup = renderAnimatedLines(document.getElementById('chart-animated-lines')!) },
    'chart-surface-3d': () => renderSurface3D(document.getElementById('chart-surface-3d')!),
    'chart-bubble': () => { bubbleCleanup = renderBubbleChart(document.getElementById('chart-bubble')!) },
    'chart-candlestick': () => renderCandlestick(document.getElementById('chart-candlestick')!),
    'chart-choropleth': () => renderChoropleth(document.getElementById('chart-choropleth')!),
    'chart-violin': () => renderViolin(document.getElementById('chart-violin')!),
    'chart-heatmap': () => renderHeatmap(document.getElementById('chart-heatmap')!),
    'chart-treemap': () => renderTreemap(document.getElementById('chart-treemap')!),
    'chart-sankey': () => renderSankey(document.getElementById('chart-sankey')!),
    'chart-contour': () => renderContour(document.getElementById('chart-contour')!),
    'chart-polar': () => renderPolar(document.getElementById('chart-polar')!),
    'chart-scatter3d': () => renderScatter3D(document.getElementById('chart-scatter3d')!),
    'chart-sunburst': () => renderSunburst(document.getElementById('chart-sunburst')!),
    'chart-waterfall': () => renderWaterfall(document.getElementById('chart-waterfall')!),
    'chart-density': () => renderDensityContour(document.getElementById('chart-density')!),
  }

  const renderedCharts = new Set<string>()

  const chartObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          if (chartRenderers[id] && !renderedCharts.has(id)) {
            renderedCharts.add(id)
            chartRenderers[id]()
          }
        }
      })
    },
    { rootMargin: '200px' }
  )

  Object.keys(chartRenderers).forEach((id) => {
    const el = document.getElementById(id)
    if (el) chartObserver.observe(el)
  })
}

function mountInstall() {
  const tabs = document.querySelectorAll('.install-tab')
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const tabName = (tab as HTMLElement).dataset.tab
      tabs.forEach((t) => t.classList.remove('active'))
      tab.classList.add('active')

      document.querySelectorAll('.install-code').forEach((code) => {
        ;(code as HTMLElement).style.display = 'none'
      })
      const target = document.getElementById(`install-code-${tabName}`)
      if (target) target.style.display = 'block'
    })
  })

  document.querySelectorAll('.copy-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = `install-code-${(btn as HTMLElement).dataset.copy}`
      const codeEl = document.querySelector(`#${targetId} code`)
      if (codeEl) {
        const text = codeEl.textContent || ''
        navigator.clipboard.writeText(text).then(() => {
          const original = btn.textContent
          btn.textContent = '已复制'
          setTimeout(() => { btn.textContent = original }, 2000)
        })
      }
    })
  })
}

/* ============================================
   Reveal animations + Spotlight tracking
   ============================================ */
function initRevealAnimations() {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          revealObserver.unobserve(entry.target)
        }
      })
    },
    { rootMargin: '50px' }
  )

  document.querySelectorAll('.reveal').forEach((el) => {
    revealObserver.observe(el)
  })

  // Spotlight cursor tracking for bento cards
  document.querySelectorAll<HTMLElement>('.bento-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`)
      card.style.setProperty('--my', `${e.clientY - rect.top}px`)
    })
  })
}

/* ============================================
   Page transition
   ============================================ */
function getPageFromHash(): string {
  const hash = window.location.hash.replace(/^#/, '') || '/'
  return hash
}

function renderPage() {
  const route = getPageFromHash()
  const page = routes[route] || routes['/']

  cleanupAll()

  window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })

  const app = document.querySelector<HTMLElement>('#app')!
  app.innerHTML = renderNav(route) + `<main id="page-content">${page.render()}</main>` + renderFooter()

  // Page enter animation
  const main = document.getElementById('page-content')
  if (main) {
    main.style.opacity = '0'
    main.style.transform = 'translateY(10px)'
    requestAnimationFrame(() => {
      main.style.transition = 'opacity 0.4s cubic-bezier(0.16,1,0.3,1), transform 0.4s cubic-bezier(0.16,1,0.3,1)'
      main.style.opacity = '1'
      main.style.transform = 'translateY(0)'
    })
  }

  if (page.mount) {
    requestAnimationFrame(() => {
      page.mount!()
    })
  }

  requestAnimationFrame(() => {
    initRevealAnimations()
  })
}

/* ============================================
   Init
   ============================================ */
window.addEventListener('hashchange', renderPage)
renderPage()
