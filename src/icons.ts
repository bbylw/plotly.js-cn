/* ============================================
   SVG Icon Library for Plotly.js 中文文档
   All icons use viewBox="0 0 24 24" and accept a color prop
   ============================================ */

/* ---------- Brand Logo ---------- */
export function logoMark(size = 32): string {
  return `<svg width="${size}" height="${size}" viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="logo-bg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#5eead4"/>
        <stop offset="0.5" stop-color="#38bdf8"/>
        <stop offset="1" stop-color="#a78bfa"/>
      </linearGradient>
      <linearGradient id="logo-bar" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#ffffff" stop-opacity="0.95"/>
        <stop offset="1" stop-color="#ffffff" stop-opacity="0.6"/>
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="16" fill="url(#logo-bg)"/>
    <rect x="14" y="36" width="7" height="14" rx="2" fill="url(#logo-bar)" opacity="0.55"/>
    <rect x="24" y="28" width="7" height="22" rx="2" fill="url(#logo-bar)" opacity="0.7"/>
    <rect x="34" y="20" width="7" height="30" rx="2" fill="url(#logo-bar)" opacity="0.85"/>
    <rect x="44" y="12" width="7" height="38" rx="2" fill="url(#logo-bar)"/>
    <path d="M17.5 36 L27.5 28 L37.5 20 L47.5 12" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.4"/>
    <circle cx="17.5" cy="36" r="2.5" fill="#ffffff"/>
    <circle cx="27.5" cy="28" r="2.5" fill="#ffffff"/>
    <circle cx="37.5" cy="20" r="2.5" fill="#ffffff"/>
    <circle cx="47.5" cy="12" r="3" fill="#ffffff"/>
    <circle cx="47.5" cy="12" r="5" fill="#ffffff" opacity="0.2"/>
  </svg>`
}

/* ---------- Chart Type Icons (24 types) ---------- */
export function chartTypeIcon(icon: string, color: string): string {
  const icons: Record<string, string> = {
    // 折线图 — Line chart with data points
    line: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3 17l5-5 4 3 5-7 4 4" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="3" cy="17" r="1.8" fill="${color}"/>
      <circle cx="8" cy="12" r="1.8" fill="${color}"/>
      <circle cx="12" cy="15" r="1.8" fill="${color}"/>
      <circle cx="17" cy="8" r="1.8" fill="${color}"/>
      <circle cx="21" cy="12" r="1.8" fill="${color}"/>
    </svg>`,

    // 柱状图 — Bar chart with varying heights
    bar: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="13" width="4" height="8" rx="1" fill="${color}" opacity="0.5"/>
      <rect x="10" y="8" width="4" height="13" rx="1" fill="${color}" opacity="0.75"/>
      <rect x="17" y="4" width="4" height="17" rx="1" fill="${color}"/>
    </svg>`,

    // 散点图 — Scatter dots
    scatter: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="5" cy="17" r="2.2" fill="${color}" opacity="0.6"/>
      <circle cx="10" cy="11" r="2.2" fill="${color}" opacity="0.8"/>
      <circle cx="15" cy="14" r="2.2" fill="${color}"/>
      <circle cx="19" cy="6" r="2.2" fill="${color}" opacity="0.7"/>
      <circle cx="8" cy="5" r="1.6" fill="${color}" opacity="0.5"/>
      <circle cx="17" cy="19" r="1.6" fill="${color}" opacity="0.5"/>
    </svg>`,

    // 饼图 — Pie chart with slices
    pie: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 2A10 10 0 1 0 22 12H12V2z" fill="${color}" opacity="0.3"/>
      <path d="M12 2A10 10 0 0 1 22 12H12V2z" fill="${color}"/>
      <path d="M12 2v10l8-4" fill="${color}" opacity="0.5"/>
      <circle cx="12" cy="12" r="10" stroke="${color}" stroke-width="1.5" fill="none"/>
    </svg>`,

    // 3D 曲面 — 3D surface mesh
    surface3d: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3 18c2-3 4-4 6-3s4 3 6 0 4-5 6-4" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
      <path d="M3 13c2-3 4-4 6-3s4 3 6 0 4-5 6-4" stroke="${color}" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
      <path d="M3 8c2-3 4-4 6-3s4 3 6 0 4-5 6-4" stroke="${color}" stroke-width="2" stroke-linecap="round" opacity="0.3"/>
      <line x1="3" y1="18" x2="3" y2="8" stroke="${color}" stroke-width="1" opacity="0.4"/>
      <line x1="21" y1="11" x2="21" y2="21" stroke="${color}" stroke-width="1" opacity="0.4"/>
    </svg>`,

    // 3D 散点 — 3D cube with points
    cube3d: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L21 7v10l-9 5-9-5V7l9-5z" stroke="${color}" stroke-width="1.5" stroke-linejoin="round"/>
      <path d="M3 7l9 5 9-5M12 12v10" stroke="${color}" stroke-width="1.5" stroke-linejoin="round"/>
      <circle cx="15" cy="9" r="1.5" fill="${color}"/>
      <circle cx="9" cy="14" r="1.5" fill="${color}" opacity="0.6"/>
      <circle cx="16" cy="16" r="1.5" fill="${color}" opacity="0.8"/>
    </svg>`,

    // 等高线 — Contour rings
    contour: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="9" ry="5" stroke="${color}" stroke-width="1.8" opacity="0.3"/>
      <ellipse cx="12" cy="12" rx="6" ry="3.5" stroke="${color}" stroke-width="1.8" opacity="0.55"/>
      <ellipse cx="12" cy="12" rx="3" ry="2" stroke="${color}" stroke-width="1.8" opacity="0.8"/>
      <ellipse cx="12" cy="12" rx="1" ry="0.6" fill="${color}"/>
    </svg>`,

    // 热力图 — Heatmap grid
    heatmap: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="5" height="5" rx="1" fill="${color}" opacity="0.3"/>
      <rect x="9" y="3" width="5" height="5" rx="1" fill="${color}" opacity="0.6"/>
      <rect x="15" y="3" width="5" height="5" rx="1" fill="${color}"/>
      <rect x="3" y="9" width="5" height="5" rx="1" fill="${color}" opacity="0.5"/>
      <rect x="9" y="9" width="5" height="5" rx="1" fill="${color}" opacity="0.9"/>
      <rect x="15" y="9" width="5" height="5" rx="1" fill="${color}" opacity="0.4"/>
      <rect x="3" y="15" width="5" height="5" rx="1" fill="${color}" opacity="0.8"/>
      <rect x="9" y="15" width="5" height="5" rx="1" fill="${color}" opacity="0.35"/>
      <rect x="15" y="15" width="5" height="5" rx="1" fill="${color}" opacity="0.55"/>
    </svg>`,

    // 小提琴图 — Violin shape
    violin: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 2c-3 0-5 3-5 7s2 5 2 9-1 4 3 4 3 0 3-4 2-5 2-9-3-7-5-7z" fill="${color}" opacity="0.25" stroke="${color}" stroke-width="1.8"/>
      <line x1="12" y1="4" x2="12" y2="20" stroke="${color}" stroke-width="1.5" stroke-dasharray="2 2" opacity="0.6"/>
      <circle cx="12" cy="11" r="1.5" fill="${color}"/>
    </svg>`,

    // 箱线图 — Box plot with whiskers
    box: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="6" y="8" width="12" height="8" rx="1.5" fill="${color}" opacity="0.2" stroke="${color}" stroke-width="1.8"/>
      <line x1="12" y1="8" x2="12" y2="16" stroke="${color}" stroke-width="1.5"/>
      <line x1="2" y1="12" x2="6" y2="12" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="18" y1="12" x2="22" y2="12" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="2" y1="9" x2="2" y2="15" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="22" y1="9" x2="22" y2="15" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
    </svg>`,

    // 直方图 — Histogram bars
    histogram: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="14" width="4" height="7" fill="${color}" opacity="0.4" rx="0.5"/>
      <rect x="6.5" y="9" width="4" height="12" fill="${color}" opacity="0.6" rx="0.5"/>
      <rect x="11" y="4" width="4" height="17" fill="${color}" rx="0.5"/>
      <rect x="15.5" y="7" width="4" height="14" fill="${color}" opacity="0.7" rx="0.5"/>
      <rect x="20" y="12" width="2.5" height="9" fill="${color}" opacity="0.5" rx="0.5"/>
    </svg>`,

    // K 线图 — Candlestick
    candlestick: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <line x1="6" y1="3" x2="6" y2="8" stroke="${color}" stroke-width="1.5"/>
      <rect x="4.5" y="8" width="3" height="7" fill="${color}" opacity="0.3" stroke="${color}" stroke-width="1.5" rx="0.5"/>
      <line x1="6" y1="15" x2="6" y2="20" stroke="${color}" stroke-width="1.5"/>
      <line x1="16" y1="5" x2="16" y2="10" stroke="${color}" stroke-width="1.5"/>
      <rect x="14.5" y="10" width="3" height="6" fill="${color}" rx="0.5"/>
      <line x1="16" y1="16" x2="16" y2="21" stroke="${color}" stroke-width="1.5"/>
    </svg>`,

    // 瀑布图 — Waterfall steps
    waterfall: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="14" width="4" height="6" fill="${color}" opacity="0.5" rx="0.5"/>
      <rect x="8" y="9" width="4" height="5" fill="${color}" opacity="0.65" rx="0.5"/>
      <rect x="13" y="5" width="4" height="4" fill="${color}" opacity="0.8" rx="0.5"/>
      <rect x="18" y="2" width="3" height="3" fill="${color}" rx="0.5"/>
      <path d="M5 14 L10 9 L15 5 L19.5 2" stroke="${color}" stroke-width="1.5" stroke-dasharray="2 2" fill="none" opacity="0.5"/>
    </svg>`,

    // 漏斗图 — Funnel shape
    funnel: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3 3h18l-6 7v10l-6-2V10z" fill="${color}" opacity="0.2" stroke="${color}" stroke-width="1.8" stroke-linejoin="round"/>
      <line x1="5" y1="6" x2="19" y2="6" stroke="${color}" stroke-width="1.2" opacity="0.4"/>
      <line x1="7" y1="9" x2="17" y2="9" stroke="${color}" stroke-width="1.2" opacity="0.4"/>
    </svg>`,

    // 桑基图 — Sankey flow
    sankey: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3 5C8 5 8 12 13 12S18 19 21 19" stroke="${color}" stroke-width="4" fill="none" opacity="0.3" stroke-linecap="round"/>
      <path d="M3 6C8 6 8 11 13 11S18 16 21 16" stroke="${color}" stroke-width="3" fill="none" opacity="0.5" stroke-linecap="round"/>
      <path d="M3 7C8 7 8 10 13 10S18 13 21 13" stroke="${color}" stroke-width="2" fill="none" opacity="0.7" stroke-linecap="round"/>
      <rect x="2" y="4" width="2" height="6" rx="1" fill="${color}"/>
      <rect x="20" y="13" width="2" height="6" rx="1" fill="${color}"/>
    </svg>`,

    // 旭日图 — Sunburst rings
    sunburst: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="${color}" opacity="0.1"/>
      <path d="M12 2A10 10 0 0 1 22 12H17A5 5 0 0 0 12 7z" fill="${color}" opacity="0.4"/>
      <path d="M12 2v5A5 5 0 0 0 7 12H2A10 10 0 0 1 12 2z" fill="${color}" opacity="0.6"/>
      <path d="M22 12A10 10 0 0 1 12 22v-5A5 5 0 0 0 17 12z" fill="${color}" opacity="0.25"/>
      <circle cx="12" cy="12" r="3" fill="${color}"/>
    </svg>`,

    // 矩形树图 — Treemap
    treemap: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="11" height="11" rx="1.5" fill="${color}" opacity="0.7"/>
      <rect x="15" y="3" width="6" height="6" rx="1" fill="${color}" opacity="0.5"/>
      <rect x="15" y="10" width="6" height="4" rx="1" fill="${color}" opacity="0.3"/>
      <rect x="3" y="15" width="5" height="6" rx="1" fill="${color}" opacity="0.85"/>
      <rect x="9" y="15" width="5" height="6" rx="1" fill="${color}" opacity="0.6"/>
      <rect x="15" y="15" width="6" height="6" rx="1" fill="${color}" opacity="0.4"/>
    </svg>`,

    // 雷达图 — Radar/spider chart
    radar: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <polygon points="12,2 22,9 18,21 6,21 2,9" stroke="${color}" stroke-width="1.2" fill="none" opacity="0.3"/>
      <polygon points="12,5 19,10 16.5,19 7.5,19 4,10" stroke="${color}" stroke-width="1.2" fill="none" opacity="0.5"/>
      <polygon points="12,8 16,11 14.5,17 9.5,17 7,11" fill="${color}" opacity="0.2" stroke="${color}" stroke-width="1.5"/>
      <circle cx="12" cy="12" r="1.5" fill="${color}"/>
    </svg>`,

    // 等值线地图 — Choropleth map
    map: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3 7l5-2 4 2 4-2 5 2v10l-5 2-4-2-4 2-5-2z" stroke="${color}" stroke-width="1.5" fill="${color}" opacity="0.1" stroke-linejoin="round"/>
      <line x1="8" y1="5" x2="8" y2="19" stroke="${color}" stroke-width="1" opacity="0.3"/>
      <line x1="12" y1="7" x2="12" y2="19" stroke="${color}" stroke-width="1" opacity="0.3"/>
      <line x1="16" y1="5" x2="16" y2="19" stroke="${color}" stroke-width="1" opacity="0.3"/>
      <circle cx="10" cy="10" r="1.5" fill="${color}"/>
      <circle cx="15" cy="14" r="1.5" fill="${color}" opacity="0.6"/>
    </svg>`,

    // 散点地图 — Geo scatter
    geo: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="${color}" stroke-width="1.5" fill="${color}" opacity="0.08"/>
      <path d="M2 12h20" stroke="${color}" stroke-width="1" opacity="0.3"/>
      <path d="M12 2c3 3 3 17 0 20M12 2c-3 3-3 17 0 20" stroke="${color}" stroke-width="1" opacity="0.3"/>
      <circle cx="8" cy="8" r="2" fill="${color}" opacity="0.7"/>
      <circle cx="15" cy="11" r="2.5" fill="${color}"/>
      <circle cx="10" cy="16" r="1.8" fill="${color}" opacity="0.6"/>
    </svg>`,

    // 平行坐标 — Parallel coordinates
    parallel: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <line x1="5" y1="3" x2="5" y2="21" stroke="${color}" stroke-width="1.5" opacity="0.4"/>
      <line x1="12" y1="3" x2="12" y2="21" stroke="${color}" stroke-width="1.5" opacity="0.4"/>
      <line x1="19" y1="3" x2="19" y2="21" stroke="${color}" stroke-width="1.5" opacity="0.4"/>
      <path d="M5 8L12 14L19 6" stroke="${color}" stroke-width="1.5" fill="none" opacity="0.7"/>
      <path d="M5 12L12 7L19 16" stroke="${color}" stroke-width="1.5" fill="none" opacity="0.5"/>
      <path d="M5 17L12 11L19 10" stroke="${color}" stroke-width="1.5" fill="none" opacity="0.8"/>
      <circle cx="5" cy="8" r="1.5" fill="${color}"/>
      <circle cx="12" cy="14" r="1.5" fill="${color}"/>
      <circle cx="19" cy="6" r="1.5" fill="${color}"/>
    </svg>`,

    // 指标卡 — Gauge indicator
    gauge: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3 18a9 9 0 0 1 18 0" stroke="${color}" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.3"/>
      <path d="M3 18a9 9 0 0 1 6-8.5" stroke="${color}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <line x1="12" y1="18" x2="16" y2="11" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
      <circle cx="12" cy="18" r="2" fill="${color}"/>
    </svg>`,

    // 3D 柱体 — 3D bar
    bar3d: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 10l4-2v10l-4 2z" fill="${color}" opacity="0.4"/>
      <path d="M8 8l4 2v10l-4-2z" fill="${color}" opacity="0.7"/>
      <path d="M12 8l4-2v10l-4 2z" fill="${color}" opacity="0.5"/>
      <path d="M16 6l4 2v10l-4-2z" fill="${color}"/>
      <path d="M4 10l4-2 4 2 4-2 4 2" stroke="${color}" stroke-width="1" fill="none" opacity="0.3"/>
    </svg>`,

    // 密度图 — Density curve
    density: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M2 21c3 0 3-12 6-12s3 6 6 6 3-9 6-9" stroke="${color}" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2 21c3 0 3-12 6-12s3 6 6 6 3-9 6-9v15z" fill="${color}" opacity="0.15"/>
    </svg>`,
  }

  return icons[icon] || icons.scatter
}

/* ---------- Feature/Bento Card Icons (8 types) ---------- */
export function featureIcon(icon: string, color: string): string {
  const icons: Record<string, string> = {
    // 40+ 图表类型 — Grid of mini charts
    chartTypes: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="14" width="3.5" height="7" rx="1" fill="${color}" opacity="0.5"/>
      <rect x="8" y="9" width="3.5" height="12" rx="1" fill="${color}" opacity="0.7"/>
      <rect x="13" y="5" width="3.5" height="16" rx="1" fill="${color}"/>
      <path d="M4 14l4-4 4 2 4-5 4 3" stroke="${color}" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>
      <circle cx="4" cy="14" r="1.3" fill="${color}"/>
      <circle cx="8" cy="10" r="1.3" fill="${color}"/>
      <circle cx="12" cy="12" r="1.3" fill="${color}"/>
      <circle cx="16" cy="7" r="1.3" fill="${color}"/>
      <circle cx="20" cy="10" r="1.3" fill="${color}"/>
    </svg>`,

    // 3D 可视化 — Stacked layers
    layers3d: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 3L21 8L12 13L3 8z" stroke="${color}" stroke-width="1.8" stroke-linejoin="round" fill="${color}" fill-opacity="0.15"/>
      <path d="M3 12L12 17L21 12" stroke="${color}" stroke-width="1.8" stroke-linejoin="round" opacity="0.6"/>
      <path d="M3 16L12 21L21 16" stroke="${color}" stroke-width="1.8" stroke-linejoin="round" opacity="0.35"/>
    </svg>`,

    // 地图支持 — Globe with marker
    globe: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="${color}" stroke-width="1.8" fill="${color}" fill-opacity="0.08"/>
      <path d="M2 12h20M12 2c3 3 3 17 0 20M12 2c-3 3-3 17 0 20" stroke="${color}" stroke-width="1.2" opacity="0.4"/>
      <circle cx="15" cy="9" r="2.5" fill="${color}"/>
      <circle cx="15" cy="9" r="4.5" fill="${color}" opacity="0.2"/>
    </svg>`,

    // 动画与过渡 — Play/pulse
    animation: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3 12h4l2-6 4 12 2-6h6" stroke="${color}" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="9" cy="6" r="1.5" fill="${color}"/>
      <circle cx="13" cy="18" r="1.5" fill="${color}"/>
      <circle cx="17" cy="12" r="1.5" fill="${color}"/>
      <path d="M3 12a2 2 0 1 0 0.1 0.1" stroke="${color}" stroke-width="1" fill="none" opacity="0.3"/>
    </svg>`,

    // 完全交互 — Cursor/touch
    interactive: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M5 3l5 15 2.5-6L19 10z" stroke="${color}" stroke-width="1.8" fill="${color}" fill-opacity="0.15" stroke-linejoin="round"/>
      <circle cx="16" cy="17" r="3" stroke="${color}" stroke-width="1.5" fill="none" opacity="0.5"/>
      <path d="M14.5 15.5l3 3M17.5 15.5l-3 3" stroke="${color}" stroke-width="1.2" opacity="0.5"/>
    </svg>`,

    // 多框架生态 — Connected nodes
    ecosystem: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="5" cy="6" r="3" fill="${color}" opacity="0.3" stroke="${color}" stroke-width="1.5"/>
      <circle cx="19" cy="6" r="3" fill="${color}" opacity="0.3" stroke="${color}" stroke-width="1.5"/>
      <circle cx="12" cy="18" r="3" fill="${color}" stroke="${color}" stroke-width="1.5"/>
      <line x1="7" y1="7" x2="10" y2="16" stroke="${color}" stroke-width="1.5" opacity="0.5"/>
      <line x1="17" y1="7" x2="14" y2="16" stroke="${color}" stroke-width="1.5" opacity="0.5"/>
      <line x1="8" y1="6" x2="16" y2="6" stroke="${color}" stroke-width="1.5" opacity="0.5" stroke-dasharray="2 2"/>
    </svg>`,

    // 零依赖 — Standalone badge
    independent: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6z" stroke="${color}" stroke-width="1.8" fill="${color}" fill-opacity="0.1" stroke-linejoin="round"/>
      <path d="M9 12l2 2 4-4" stroke="${color}" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,

    // 导出与分享 — Download/export
    export: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 3v10M8 9l4 4 4-4" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4 13v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
      <rect x="9" y="3" width="6" height="2" rx="0.5" fill="${color}" opacity="0.3"/>
    </svg>`,
  }

  return icons[icon] || icons.chartTypes
}

/* ---------- Community Card Icons (3 types) ---------- */
export function communityIcon(icon: string, color: string): string {
  const icons: Record<string, string> = {
    forum: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8l-4 4z" stroke="${color}" stroke-width="1.8" fill="${color}" fill-opacity="0.08" stroke-linejoin="round"/>
      <circle cx="9" cy="9" r="1.3" fill="${color}"/>
      <circle cx="13" cy="9" r="1.3" fill="${color}"/>
      <circle cx="17" cy="9" r="1.3" fill="${color}"/>
    </svg>`,

    stackoverflow: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M7 22h10v-6H7z" fill="${color}" opacity="0.2"/>
      <path d="M7 22h10v-6H7" stroke="${color}" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M8 17l8-2M9 13l7-3M11 9l6-4M14 5l4-2" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
    </svg>`,

    github: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" fill="${color}"/>
    </svg>`,
  }

  return icons[icon] || icons.forum
}

/* ---------- UI Action Icons ---------- */
export function arrowRight(size = 16): string {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg>`
}

export function plusIcon(size = 16): string {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14" stroke-linecap="round"/></svg>`
}

export function externalLink(size = 16): string {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10" stroke-linecap="round" stroke-linejoin="round"/></svg>`
}

export function githubIcon(size = 16): string {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>`
}
