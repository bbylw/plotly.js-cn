declare module 'plotly.js-dist-min' {
  interface PlotlyData {
    type?: string
    mode?: string
    x?: any[]
    y?: any[]
    z?: any[]
    text?: any[]
    name?: string
    marker?: any
    line?: any
    fill?: string
    fillcolor?: string
    opacity?: number
    showscale?: boolean
    colorscale?: any
    reversescale?: boolean
    hoverinfo?: string
    hovertemplate?: string
    textinfo?: string
    textfont?: any
    branchvalues?: string
    labels?: any[]
    parents?: any[]
    values?: any[]
    source?: any[]
    target?: any[]
    value?: any[]
    node?: any
    link?: any
    domain?: any
    transform?: any
    frame?: any
    frames?: any
    r?: any[]
    t?: any[]
    a?: any[]
    b?: any[]
    c?: any[]
    u?: any[]
    v?: any[]
    w?: any[]
    surfaceaxis?: number
    surfacecolor?: any
    lat?: any[]
    lon?: any[]
    locations?: any[]
    locationmode?: string
    zmin?: number
    zmax?: number
    colorbar?: any
    contours?: any
    transpose?: boolean
    box?: any
    boxmean?: any
    points?: any
    jitter?: number
    pointpos?: number
    span?: any[]
    bandwidth?: number
    side?: string
    orientation?: string
    width?: number
    whiskerwidth?: number
    line?: any
    open?: any[]
    high?: any[]
    low?: any[]
    close?: any[]
    increasing?: any
    decreasing?: any
    [key: string]: any
  }

  interface PlotlyLayout {
    title?: any
    width?: number
    height?: number
    margin?: any
    paper_bgcolor?: string
    plot_bgcolor?: string
    font?: any
    xaxis?: any
    yaxis?: any
    zaxis?: any
    scene?: any
    geo?: any
    polar?: any
    coloraxis?: any
    showlegend?: boolean
    legend?: any
    hovermode?: string
    annotations?: any[]
    barmode?: string
    bargap?: number
    grid?: any
    ternary?: any
    margin?: any
    [key: string]: any
  }

  interface PlotlyConfig {
    displayModeBar?: boolean
    displaylogo?: boolean
    responsive?: boolean
    modeBarButtonsToRemove?: string[]
    scrollZoom?: boolean
    [key: string]: any
  }

  interface PlotlyType {
    newPlot(
      gd: string | HTMLElement,
      data: PlotlyData[],
      layout?: PlotlyLayout,
      config?: PlotlyConfig
    ): Promise<any>
    plot(
      gd: string | HTMLElement,
      data: PlotlyData[],
      layout?: PlotlyLayout,
      config?: PlotlyConfig
    ): Promise<any>
    react(
      gd: string | HTMLElement,
      data: PlotlyData[],
      layout?: PlotlyLayout,
      config?: PlotlyConfig
    ): Promise<any>
    restyle(
      gd: string | HTMLElement,
      update: any,
      traces?: number | number[]
    ): Promise<any>
    relayout(
      gd: string | HTMLElement,
      update: any
    ): Promise<any>
    redraw(gd: string | HTMLElement): Promise<any>
    animate(
      gd: string | HTMLElement,
      frameOrFrames?: any,
      options?: any
    ): Promise<any>
    addFrames(gd: string | HTMLElement, frames: any[]): Promise<any>
    deleteTraces(
      gd: string | HTMLElement,
      traces: number | number[]
    ): Promise<any>
    addTraces(
      gd: string | HTMLElement,
      traces: any | any[],
      newIndices?: number | number[]
    ): Promise<any>
    purge(gd: string | HTMLElement): void
    Plots: any
    downloadImage(
      gd: string | HTMLElement,
      opts?: any
    ): Promise<any>
    toImage(
      gd: string | HTMLElement,
      opts?: any
    ): Promise<string>
    [key: string]: any
  }

  const Plotly: PlotlyType
  export default Plotly
}
