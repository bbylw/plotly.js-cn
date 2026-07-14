import Plotly from 'plotly.js-dist-min'

/* ============================================
   Shared dark theme layout
   ============================================ */
const COLORS = ['#3b82f6', '#06b6d4', '#8b5cf6', '#f472b6', '#22d3ee', '#34d399', '#fbbf24', '#f87171']

function baseLayout(overrides: Record<string, any> = {}) {
  return {
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    font: {
      color: '#8b92a5',
      family: 'DM Sans, sans-serif',
      size: 12,
    },
    margin: { l: 50, r: 30, t: 30, b: 40 },
    showlegend: false,
    ...overrides,
  }
}

const baseConfig = {
  displayModeBar: true,
  displaylogo: false,
  responsive: true,
  modeBarButtonsToRemove: ['lasso2d', 'select2d'],
  scrollZoom: true,
}

/* ============================================
   1. Hero Chart — Animated 3D Surface
   ============================================ */
export function renderHeroChart(el: HTMLElement) {
  const size = 40
  const x: number[] = []
  const y: number[] = []

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      x.push(i)
      y.push(j)
    }
  }

  function computeZ(t: number) {
    const result: number[][] = []
    for (let i = 0; i < size; i++) {
      const row: number[] = []
      for (let j = 0; j < size; j++) {
        const xi = (i / size) * 4 - 2
        const yj = (j / size) * 4 - 2
        const r = Math.sqrt(xi * xi + yj * yj)
        row.push(
          Math.sin(r * 2 + t) * Math.exp(-r * 0.3) * 3 +
            Math.cos(xi * 3 + t * 0.7) * 0.5 +
            Math.sin(yj * 4 + t * 1.3) * 0.3
        )
      }
      result.push(row)
    }
    return result
  }

  const data = [
    {
      type: 'surface',
      z: computeZ(0),
      colorscale: [
        [0, '#0a0c12'],
        [0.2, '#1e3a5f'],
        [0.4, '#3b82f6'],
        [0.6, '#06b6d4'],
        [0.8, '#22d3ee'],
        [1, '#f472b6'],
      ],
      showscale: false,
      opacity: 0.9,
      hoverinfo: 'skip',
      contours: {
        z: {
          show: true,
          usecolormap: true,
          highlightcolor: '#22d3ee',
          project: { z: true },
        },
      },
    },
  ]

  const layout = baseLayout({
    scene: {
      xaxis: { showgrid: false, showbackground: false, showticklabels: false, zeroline: false, title: '' },
      yaxis: { showgrid: false, showbackground: false, showticklabels: false, zeroline: false, title: '' },
      zaxis: { showgrid: false, showbackground: false, showticklabels: false, zeroline: false, title: '' },
      camera: { eye: { x: 1.6, y: -1.6, z: 0.9 } },
      aspectratio: { x: 1, y: 1, z: 0.6 },
    },
    margin: { l: 0, r: 0, t: 0, b: 0 },
  })

  Plotly.newPlot(el, data, layout, { ...baseConfig, displayModeBar: false })

  let t = 0
  const interval = setInterval(() => {
    t += 0.05
    Plotly.restyle(el, { z: [computeZ(t)] }, [0])
  }, 50)

  return () => clearInterval(interval)
}

/* ============================================
   2. 3D Surface — Ripple Wave
   ============================================ */
export function renderSurface3D(el: HTMLElement) {
  const N = 30
  const z: number[][] = []
  for (let i = 0; i < N; i++) {
    const row: number[] = []
    for (let j = 0; j < N; j++) {
      const x = (i / N) * 6 - 3
      const y = (j / N) * 6 - 3
      const r = Math.sqrt(x * x + y * y)
      row.push(Math.sin(r * 2) * Math.exp(-r * 0.4) * 2)
    }
    z.push(row)
  }

  const data = [
    {
      type: 'surface',
      z,
      colorscale: [
        [0, '#0f1219'],
        [0.25, '#1e3a5f'],
        [0.5, '#3b82f6'],
        [0.75, '#22d3ee'],
        [1, '#f472b6'],
      ],
      colorbar: {
        thickness: 10,
        len: 0.6,
        tickfont: { color: '#5c6378', size: 10 },
        outlinewidth: 0,
      },
      contours: {
        z: {
          show: true,
          usecolormap: true,
          highlightcolor: '#22d3ee',
          project: { z: true },
        },
      },
    },
  ]

  const layout = baseLayout({
    scene: {
      xaxis: { gridcolor: '#232938', zerolinecolor: '#232938', title: { text: 'X', font: { size: 10 } } },
      yaxis: { gridcolor: '#232938', zerolinecolor: '#232938', title: { text: 'Y', font: { size: 10 } } },
      zaxis: { gridcolor: '#232938', zerolinecolor: '#232938', title: { text: 'Z', font: { size: 10 } } },
      camera: { eye: { x: 1.8, y: -1.8, z: 1 } },
      bgcolor: 'rgba(0,0,0,0)',
    },
    margin: { l: 0, r: 0, t: 0, b: 0 },
  })

  Plotly.newPlot(el, data, layout, baseConfig)
}

/* ============================================
   3. Animated Bubble Scatter
   ============================================ */
export function renderBubbleChart(el: HTMLElement) {
  const N = 50
  function genData() {
    const x: number[] = []
    const y: number[] = []
    const sizes: number[] = []
    const colors: number[] = []
    for (let i = 0; i < N; i++) {
      x.push(Math.random() * 100)
      y.push(Math.random() * 100)
      sizes.push(10 + Math.random() * 50)
      colors.push(Math.random())
    }
    return { x, y, sizes, colors }
  }

  const d = genData()
  const data = [
    {
      type: 'scatter',
      mode: 'markers',
      x: d.x,
      y: d.y,
      marker: {
        size: d.sizes,
        color: d.colors,
        colorscale: [
          [0, '#3b82f6'],
          [0.33, '#06b6d4'],
          [0.66, '#8b5cf6'],
          [1, '#f472b6'],
        ],
        opacity: 0.75,
        line: { color: 'rgba(255,255,255,0.15)', width: 1 },
      },
      text: d.x.map((_, i) => `点 ${i + 1}`),
      hovertemplate: '<b>%{text}</b><br>X: %{x:.1f}<br>Y: %{y:.1f}<extra></extra>',
    },
  ]

  const layout = baseLayout({
    xaxis: { gridcolor: '#232938', zerolinecolor: '#232938', title: '维度 A' },
    yaxis: { gridcolor: '#232938', zerolinecolor: '#232938', title: '维度 B' },
    hoverlabel: {
      bgcolor: '#141823',
      bordercolor: '#2d3548',
      font: { color: '#e8ecf4', family: 'DM Sans' },
    },
  })

  Plotly.newPlot(el, data, layout, baseConfig)

  let frame = 0
  const interval = setInterval(() => {
    frame++
    const nd = genData()
    Plotly.restyle(el, { x: [nd.x], y: [nd.y], 'marker.size': [nd.sizes], 'marker.color': [nd.colors] }, [0])
  }, 3000)

  return () => clearInterval(interval)
}

/* ============================================
   4. Candlestick Financial Chart
   ============================================ */
export function renderCandlestick(el: HTMLElement) {
  const dates: string[] = []
  const open: number[] = []
  const high: number[] = []
  const low: number[] = []
  const close: number[] = []

  let price = 150
  const startDate = new Date(2024, 0, 1)
  for (let i = 0; i < 90; i++) {
    const d = new Date(startDate)
    d.setDate(d.getDate() + i)
    dates.push(d.toISOString().slice(0, 10))

    const change = (Math.random() - 0.48) * 8
    const o = price
    const c = price + change
    const h = Math.max(o, c) + Math.random() * 3
    const l = Math.min(o, c) - Math.random() * 3
    open.push(o)
    high.push(h)
    low.push(l)
    close.push(c)
    price = c
  }

  const data = [
    {
      type: 'candlestick',
      x: dates,
      open,
      high,
      low,
      close,
      increasing: { line: { color: '#22d3ee', width: 2 }, fillcolor: 'rgba(34, 211, 238, 0.3)' },
      decreasing: { line: { color: '#f472b6', width: 2 }, fillcolor: 'rgba(244, 114, 182, 0.3)' },
      whiskerwidth: 0.5,
    },
    {
      type: 'scatter',
      mode: 'lines',
      x: dates,
      y: close.map((_c, i) => {
        const slice = close.slice(0, i + 1)
        return slice.reduce((a, b) => a + b, 0) / slice.length
      }),
      line: { color: '#fbbf24', width: 1.5, dash: 'dot' },
      name: 'MA',
      hoverinfo: 'skip',
    },
  ]

  const layout = baseLayout({
    xaxis: {
      gridcolor: '#232938',
      rangeslider: { visible: false },
      tickfont: { size: 10 },
    },
    yaxis: { gridcolor: '#232938', title: '价格 ($)', tickfont: { size: 10 } },
    showlegend: false,
    hoverlabel: {
      bgcolor: '#141823',
      bordercolor: '#2d3548',
      font: { color: '#e8ecf4', family: 'DM Sans' },
    },
  })

  Plotly.newPlot(el, data, layout, baseConfig)
}

/* ============================================
   5. Choropleth Map
   ============================================ */
export function renderChoropleth(el: HTMLElement) {
  const countries = [
    'CHN', 'USA', 'IND', 'BRA', 'RUS', 'JPN', 'DEU', 'GBR', 'FRA', 'CAN',
    'AUS', 'KOR', 'ITA', 'ESP', 'MEX', 'IDN', 'NLD', 'SAU', 'TUR', 'CHE',
    'ARG', 'ZAF', 'EGY', 'NGA', 'SGP', 'SWE', 'NOR', 'FIN', 'POL', 'BEL',
  ]

  const values = countries.map(() => Math.random() * 100)
  const labels = [
    '中国', '美国', '印度', '巴西', '俄罗斯', '日本', '德国', '英国', '法国', '加拿大',
    '澳大利亚', '韩国', '意大利', '西班牙', '墨西哥', '印度尼西亚', '荷兰', '沙特', '土耳其', '瑞士',
    '阿根廷', '南非', '埃及', '尼日利亚', '新加坡', '瑞典', '挪威', '芬兰', '波兰', '比利时',
  ]

  const data = [
    {
      type: 'choropleth',
      locations: countries,
      locationmode: 'ISO-3',
      z: values,
      text: labels,
      colorscale: [
        [0, '#0f1219'],
        [0.2, '#1e3a5f'],
        [0.4, '#3b82f6'],
        [0.6, '#06b6d4'],
        [0.8, '#22d3ee'],
        [1, '#f472b6'],
      ],
      colorbar: {
        thickness: 10,
        len: 0.6,
        tickfont: { color: '#5c6378', size: 10 },
        outlinewidth: 0,
      },
      hovertemplate: '<b>%{text}</b><br>指数: %{z:.1f}<extra></extra>',
    },
  ]

  const layout = baseLayout({
    geo: {
      showframe: false,
      showcoastlines: true,
      coastlinecolor: '#2d3548',
      showland: true,
      landcolor: '#141823',
      showocean: true,
      oceancolor: '#0a0c12',
      showlakes: false,
      showcountries: true,
      countrycolor: '#232938',
      projection: { type: 'natural earth' },
      bgcolor: 'rgba(0,0,0,0)',
    },
    margin: { l: 0, r: 0, t: 0, b: 0 },
    hoverlabel: {
      bgcolor: '#141823',
      bordercolor: '#2d3548',
      font: { color: '#e8ecf4', family: 'DM Sans' },
    },
  })

  Plotly.newPlot(el, data, layout, baseConfig)
}

/* ============================================
   6. Violin Plot
   ============================================ */
export function renderViolin(el: HTMLElement) {
  const groups = ['A 组', 'B 组', 'C 组', 'D 组']
  const data = groups.map((g, i) => {
    const n = 80
    const y: number[] = []
    const center = 20 + i * 10
    for (let j = 0; j < n; j++) {
      const val = center + (Math.random() - 0.5) * 30 + (Math.random() - 0.5) * 10
      y.push(val)
    }
    return {
      type: 'violin',
      y,
      name: g,
      box: { visible: true, width: 0.3, fillcolor: COLORS[i] + '40', line: { color: COLORS[i] } },
      line: { color: COLORS[i], width: 2 },
      fillcolor: COLORS[i] + '20',
      opacity: 0.8,
      meanline: { visible: true, color: '#e8ecf4', width: 1.5 },
      points: ' outliers',
      pointpos: 0,
      jitter: 0.05,
      marker: { size: 4, color: COLORS[i], opacity: 0.5 },
    }
  })

  const layout = baseLayout({
    xaxis: { gridcolor: '#232938', zerolinecolor: '#232938' },
    yaxis: { gridcolor: '#232938', zerolinecolor: '#232938', title: '测量值' },
    violinmode: 'group',
    hoverlabel: {
      bgcolor: '#141823',
      bordercolor: '#2d3548',
      font: { color: '#e8ecf4', family: 'DM Sans' },
    },
  })

  Plotly.newPlot(el, data, layout, baseConfig)
}

/* ============================================
   7. Heatmap
   ============================================ */
export function renderHeatmap(el: HTMLElement) {
  const N = 20
  const z: number[][] = []
  const x: string[] = []
  const y: string[] = []

  for (let i = 0; i < N; i++) {
    const row: number[] = []
    for (let j = 0; j < N; j++) {
      const xi = (i / N) * 4 - 2
      const yj = (j / N) * 4 - 2
      const r = Math.sqrt(xi * xi + yj * yj)
      row.push(Math.sin(r * 3) * Math.cos(yj * 2) * 5 + Math.cos(xi * 4) * 2)
    }
    z.push(row)
    x.push(`t${i}`)
    y.push(`v${i}`)
  }

  const data = [
    {
      type: 'heatmap',
      z,
      x,
      y,
      colorscale: [
        [0, '#0f1219'],
        [0.2, '#1e3a5f'],
        [0.4, '#3b82f6'],
        [0.6, '#06b6d4'],
        [0.8, '#22d3ee'],
        [1, '#f472b6'],
      ],
      colorbar: {
        thickness: 10,
        len: 0.7,
        tickfont: { color: '#5c6378', size: 10 },
        outlinewidth: 0,
      },
      hovertemplate: 'X: %{x}<br>Y: %{y}<br>值: %{z:.2f}<extra></extra>',
    },
  ]

  const layout = baseLayout({
    xaxis: { gridcolor: '#232938', showticklabels: false },
    yaxis: { gridcolor: '#232938', showticklabels: false },
    margin: { l: 40, r: 20, t: 10, b: 30 },
    hoverlabel: {
      bgcolor: '#141823',
      bordercolor: '#2d3548',
      font: { color: '#e8ecf4', family: 'DM Sans' },
    },
  })

  Plotly.newPlot(el, data, layout, baseConfig)
}

/* ============================================
   8. Treemap
   ============================================ */
export function renderTreemap(el: HTMLElement) {
  const data = [
    {
      type: 'treemap',
      labels: ['全部', '基础图表', '统计图表', '科学图表', '金融图表', '地图', '3D 图表',
        '折线图', '柱状图', '饼图', '散点图',
        '箱线图', '小提琴图', '直方图',
        '等高线', '热力图', '平行坐标',
        'K 线图', '瀑布图', '指标卡',
        '等值线地图', '散点地图', '地理散点',
        '3D 曲面', '3D 散点', '3D 柱体'],
      parents: ['', '全部', '全部', '全部', '全部', '全部', '全部',
        '基础图表', '基础图表', '基础图表', '基础图表',
        '统计图表', '统计图表', '统计图表',
        '科学图表', '科学图表', '科学图表',
        '金融图表', '金融图表', '金融图表',
        '地图', '地图', '地图',
        '3D 图表', '3D 图表', '3D 图表'],
      values: [274, 75, 36, 36, 31, 37, 35, 20, 18, 15, 22, 12, 10, 14, 11, 16, 9, 13, 8, 10, 17, 12, 8, 15, 11, 9],
      textfont: { color: 'white', family: 'DM Sans', size: 13 },
      marker: {
        colorscale: [
          [0, '#1a1f2e'],
          [0.2, '#1e3a5f'],
          [0.4, '#3b82f6'],
          [0.6, '#06b6d4'],
          [0.8, '#22d3ee'],
          [1, '#f472b6'],
        ],
        line: { width: 2, color: '#0a0c12' },
      },
      branchvalues: 'total',
      hovertemplate: '<b>%{label}</b><br>子项: %{value}<extra></extra>',
    },
  ]

  const layout = baseLayout({
    margin: { l: 0, r: 0, t: 0, b: 0 },
    hoverlabel: {
      bgcolor: '#141823',
      bordercolor: '#2d3548',
      font: { color: '#e8ecf4', family: 'DM Sans' },
    },
  })

  Plotly.newPlot(el, data, layout, baseConfig)
}

/* ============================================
   9. Sankey Diagram
   ============================================ */
export function renderSankey(el: HTMLElement) {
  const data = [
    {
      type: 'sankey',
      node: {
        pad: 16,
        thickness: 22,
        line: { color: '#0a0c12', width: 1 },
        label: ['用户访问', '首页', '文档页', '图表展示', '安装指南',
          '注册用户', '匿名浏览', '代码复制', '直接离开'],
        color: ['#3b82f6', '#06b6d4', '#8b5cf6', '#22d3ee', '#fbbf24',
          '#34d399', '#5c6378', '#f472b6', '#f87171'],
      },
      link: {
        source: [0, 0, 1, 1, 2, 2, 3, 4, 6, 6],
        target: [1, 2, 3, 4, 5, 7, 5, 7, 8, 5],
        value: [80, 60, 50, 30, 35, 25, 30, 20, 40, 15],
        color: [
          'rgba(59, 130, 246, 0.2)',
          'rgba(139, 92, 246, 0.2)',
          'rgba(6, 182, 212, 0.2)',
          'rgba(34, 211, 238, 0.2)',
          'rgba(139, 92, 246, 0.2)',
          'rgba(244, 114, 182, 0.2)',
          'rgba(34, 211, 238, 0.2)',
          'rgba(251, 191, 36, 0.2)',
          'rgba(92, 99, 120, 0.2)',
          'rgba(52, 211, 153, 0.2)',
        ],
      },
    },
  ]

  const layout = baseLayout({
    font: { color: '#8b92a5', family: 'DM Sans', size: 12 },
    margin: { l: 10, r: 10, t: 10, b: 10 },
    hoverlabel: {
      bgcolor: '#141823',
      bordercolor: '#2d3548',
      font: { color: '#e8ecf4', family: 'DM Sans' },
    },
  })

  Plotly.newPlot(el, data, layout, baseConfig)
}

/* ============================================
   10. Contour Plot
   ============================================ */
export function renderContour(el: HTMLElement) {
  const N = 50
  const z: number[][] = []
  for (let i = 0; i < N; i++) {
    const row: number[] = []
    for (let j = 0; j < N; j++) {
      const x = (i / N) * 5 - 2.5
      const y = (j / N) * 5 - 2.5
      const r = Math.sqrt(x * x + y * y)
      row.push(Math.sin(r * 3) * Math.exp(-r * 0.3) * 5 + Math.cos(x * 5) * 2)
    }
    z.push(row)
  }

  const data = [
    {
      type: 'contour',
      z,
      colorscale: [
        [0, '#0f1219'],
        [0.2, '#1e3a5f'],
        [0.4, '#3b82f6'],
        [0.6, '#06b6d4'],
        [0.8, '#22d3ee'],
        [1, '#f472b6'],
      ],
      contours: {
        coloring: 'heatmap',
        showlines: true,
        line: { color: 'rgba(255,255,255,0.1)', width: 0.5 },
      },
      colorbar: {
        thickness: 10,
        len: 0.7,
        tickfont: { color: '#5c6378', size: 10 },
        outlinewidth: 0,
      },
      hovertemplate: '值: %{z:.2f}<extra></extra>',
    },
  ]

  const layout = baseLayout({
    xaxis: { showticklabels: false, gridcolor: '#232938' },
    yaxis: { showticklabels: false, gridcolor: '#232938' },
    margin: { l: 40, r: 20, t: 10, b: 30 },
    hoverlabel: {
      bgcolor: '#141823',
      bordercolor: '#2d3548',
      font: { color: '#e8ecf4', family: 'DM Sans' },
    },
  })

  Plotly.newPlot(el, data, layout, baseConfig)
}

/* ============================================
   11. Polar / Radar Chart
   ============================================ */
export function renderPolar(el: HTMLElement) {
  const categories = ['性能', '灵活性', '易用性', '文档', '社区', '3D 支持', '地图支持', '动画']
  const data = [
    {
      type: 'scatterpolar',
      r: [90, 85, 75, 80, 88, 95, 82, 78],
      theta: categories,
      fill: 'toself',
      fillcolor: 'rgba(59, 130, 246, 0.15)',
      line: { color: '#3b82f6', width: 2 },
      name: 'Plotly.js',
    },
    {
      type: 'scatterpolar',
      r: [70, 60, 85, 75, 65, 40, 50, 55],
      theta: categories,
      fill: 'toself',
      fillcolor: 'rgba(244, 114, 182, 0.1)',
      line: { color: '#f472b6', width: 2, dash: 'dot' },
      name: '其他库',
    },
  ]

  const layout = baseLayout({
    polar: {
      bgcolor: 'rgba(0,0,0,0)',
      radialaxis: { visible: true, range: [0, 100], gridcolor: '#232938', tickfont: { color: '#5c6378', size: 9 } },
      angularaxis: { gridcolor: '#232938', tickfont: { color: '#8b92a5', size: 11 } },
    },
    showlegend: true,
    legend: { x: 0.7, y: 1.15, font: { color: '#8b92a5', size: 12 } },
    margin: { l: 40, r: 40, t: 40, b: 40 },
  })

  Plotly.newPlot(el, data, layout, baseConfig)
}

/* ============================================
   12. 3D Scatter — Glowing Particles
   ============================================ */
export function renderScatter3D(el: HTMLElement) {
  const N = 200
  const x: number[] = []
  const y: number[] = []
  const z: number[] = []
  const colors: number[] = []

  for (let i = 0; i < N; i++) {
    const t = (i / N) * Math.PI * 4
    const r = 3 + (i / N) * 5
    x.push(Math.cos(t) * r + (Math.random() - 0.5))
    y.push(Math.sin(t) * r + (Math.random() - 0.5))
    z.push((i / N) * 8 + (Math.random() - 0.5))
    colors.push(i / N)
  }

  const data = [
    {
      type: 'scatter3d',
      mode: 'markers',
      x,
      y,
      z,
      marker: {
        size: 5,
        color: colors,
        colorscale: [
          [0, '#3b82f6'],
          [0.25, '#06b6d4'],
          [0.5, '#22d3ee'],
          [0.75, '#8b5cf6'],
          [1, '#f472b6'],
        ],
        opacity: 0.8,
        line: { color: 'rgba(255,255,255,0.2)', width: 0.5 },
      },
      hovertemplate: 'X: %{x:.1f}<br>Y: %{y:.1f}<br>Z: %{z:.1f}<extra></extra>',
    },
  ]

  const layout = baseLayout({
    scene: {
      xaxis: { showgrid: true, gridcolor: '#1a1f2e', showbackground: false, showticklabels: false, title: '' },
      yaxis: { showgrid: true, gridcolor: '#1a1f2e', showbackground: false, showticklabels: false, title: '' },
      zaxis: { showgrid: true, gridcolor: '#1a1f2e', showbackground: false, showticklabels: false, title: '' },
      camera: { eye: { x: 1.5, y: -1.5, z: 1 } },
      bgcolor: 'rgba(0,0,0,0)',
    },
    margin: { l: 0, r: 0, t: 0, b: 0 },
    hoverlabel: {
      bgcolor: '#141823',
      bordercolor: '#2d3548',
      font: { color: '#e8ecf4', family: 'DM Sans' },
    },
  })

  Plotly.newPlot(el, data, layout, baseConfig)
}

/* ============================================
   13. Animated Line Chart (Multi-series)
   ============================================ */
export function renderAnimatedLines(el: HTMLElement) {
  const N = 60
  const x = Array.from({ length: N }, (_, i) => i)
  const series = [
    { name: '系列 A', color: '#3b82f6', offset: 0, amp: 20, freq: 0.15 },
    { name: '系列 B', color: '#06b6d4', offset: 2, amp: 15, freq: 0.2 },
    { name: '系列 C', color: '#8b5cf6', offset: 4, amp: 25, freq: 0.1 },
    { name: '系列 D', color: '#f472b6', offset: 6, amp: 18, freq: 0.25 },
  ]

  function genY(s: typeof series[0], phase: number) {
    return x.map((xi) => 50 + s.offset * 5 + Math.sin(xi * s.freq + phase) * s.amp + (Math.random() - 0.5) * 3)
  }

  const data = series.map((s) => ({
    type: 'scatter',
    mode: 'lines',
    x,
    y: genY(s, 0),
    line: { color: s.color, width: 2.5, smoothing: 1 },
    name: s.name,
    hovertemplate: `<b>${s.name}</b><br>X: %{x}<br>Y: %{y:.1f}<extra></extra>`,
  }))

  const layout = baseLayout({
    xaxis: { gridcolor: '#232938', zerolinecolor: '#232938', title: '时间' },
    yaxis: { gridcolor: '#232938', zerolinecolor: '#232938', title: '数值' },
    showlegend: true,
    legend: { x: 0.02, y: 0.98, font: { color: '#8b92a5', size: 11 }, bgcolor: 'rgba(20, 24, 35, 0.8)' },
    hoverlabel: {
      bgcolor: '#141823',
      bordercolor: '#2d3548',
      font: { color: '#e8ecf4', family: 'DM Sans' },
    },
  })

  Plotly.newPlot(el, data, layout, baseConfig)

  let phase = 0
  const interval = setInterval(() => {
    phase += 0.1
    const updates = series.map((s) => genY(s, phase))
    Plotly.restyle(el, { y: updates }, series.map((_, i) => i))
  }, 100)

  return () => clearInterval(interval)
}

/* ============================================
   14. Sunburst Chart
   ============================================ */
export function renderSunburst(el: HTMLElement) {
  const data = [
    {
      type: 'sunburst',
      labels: ['核心', '基础图表', '统计图表', '科学图表', '3D 图表', '地图',
        '折线', '柱状', '饼图', '散点',
        '箱线图', '小提琴', '直方图',
        '热力图', '等高线', '平行坐标',
        '3D 曲面', '3D 散点',
        '等值线图', '散点地图'],
      parents: ['', '核心', '核心', '核心', '核心', '核心',
        '基础图表', '基础图表', '基础图表', '基础图表',
        '统计图表', '统计图表', '统计图表',
        '科学图表', '科学图表', '科学图表',
        '3D 图表', '3D 图表',
        '地图', '地图'],
      values: [225, 75, 36, 36, 26, 29, 20, 18, 15, 22, 12, 10, 14, 16, 11, 9, 15, 11, 17, 12],
      textfont: { color: 'white', family: 'DM Sans', size: 12 },
      marker: {
        colorscale: [
          [0, '#1a1f2e'],
          [0.2, '#1e3a5f'],
          [0.4, '#3b82f6'],
          [0.6, '#06b6d4'],
          [0.8, '#22d3ee'],
          [1, '#f472b6'],
        ],
        line: { width: 2, color: '#0a0c12' },
      },
      branchvalues: 'total',
      hovertemplate: '<b>%{label}</b><br>子项: %{value}<extra></extra>',
    },
  ]

  const layout = baseLayout({
    margin: { l: 0, r: 0, t: 0, b: 0 },
    hoverlabel: {
      bgcolor: '#141823',
      bordercolor: '#2d3548',
      font: { color: '#e8ecf4', family: 'DM Sans' },
    },
  })

  Plotly.newPlot(el, data, layout, baseConfig)
}

/* ============================================
   15. Waterfall Chart
   ============================================ */
export function renderWaterfall(el: HTMLElement) {
  const data = [
    {
      type: 'waterfall',
      orientation: 'v',
      measure: ['absolute', 'relative', 'relative', 'relative', 'relative', 'relative', 'relative', 'total'],
      x: ['初始营收', '产品 A', '产品 B', '订阅服务', '广告收入', '运营成本', '税费', '净利润'],
      y: [1000, 320, 280, 150, 120, -400, -180, 0],
      connector: {
        line: { color: '#2d3548', width: 1 },
      },
      increasing: { marker: { color: '#22d3ee' } },
      decreasing: { marker: { color: '#f472b6' } },
      totals: { marker: { color: '#3b82f6' } },
      hovertemplate: '<b>%{x}</b><br>金额: %{y} 万元<extra></extra>',
    },
  ]

  const layout = baseLayout({
    xaxis: { gridcolor: '#232938', zerolinecolor: '#232938', tickfont: { size: 11 } },
    yaxis: { gridcolor: '#232938', zerolinecolor: '#232938', title: '金额 (万元)', tickfont: { size: 10 } },
    margin: { l: 50, r: 20, t: 10, b: 40 },
    hoverlabel: {
      bgcolor: '#141823',
      bordercolor: '#2d3548',
      font: { color: '#e8ecf4', family: 'DM Sans' },
    },
  })

  Plotly.newPlot(el, data, layout, baseConfig)
}

/* ============================================
   16. Density Contour (2D Histogram)
   ============================================ */
export function renderDensityContour(el: HTMLElement) {
  const N = 500
  const x: number[] = []
  const y: number[] = []
  for (let i = 0; i < N; i++) {
    const r = Math.random()
    x.push(15 + Math.cos(r * Math.PI * 4) * 10 + (Math.random() - 0.5) * 5)
    y.push(25 + Math.sin(r * Math.PI * 4) * 15 + (Math.random() - 0.5) * 8)
  }

  const data = [
    {
      type: 'histogram2dcontour',
      x,
      y,
      colorscale: [
        [0, '#0f1219'],
        [0.2, '#1e3a5f'],
        [0.4, '#3b82f6'],
        [0.6, '#06b6d4'],
        [0.8, '#22d3ee'],
        [1, '#f472b6'],
      ],
      contours: { showlines: false },
      colorbar: {
        thickness: 10,
        len: 0.7,
        tickfont: { color: '#5c6378', size: 10 },
        outlinewidth: 0,
      },
      hovertemplate: 'X: %{x:.1f}<br>Y: %{y:.1f}<br>密度: %{z}<extra></extra>',
    },
    {
      type: 'scatter',
      mode: 'markers',
      x,
      y,
      marker: { size: 3, color: 'rgba(232, 236, 244, 0.3)' },
      hoverinfo: 'skip',
    },
  ]

  const layout = baseLayout({
    xaxis: { gridcolor: '#232938', zerolinecolor: '#232938', title: '变量 X' },
    yaxis: { gridcolor: '#232938', zerolinecolor: '#232938', title: '变量 Y' },
    margin: { l: 50, r: 20, t: 10, b: 40 },
    hoverlabel: {
      bgcolor: '#141823',
      bordercolor: '#2d3548',
      font: { color: '#e8ecf4', family: 'DM Sans' },
    },
  })

  Plotly.newPlot(el, data, layout, baseConfig)
}
