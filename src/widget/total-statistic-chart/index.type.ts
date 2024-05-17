export type TTotalChartType = 'total-activity' | 'spent-traffic' | 'app-download' | 'download-gb'

export type TCharData = {
    name: string,
    pv: number,
    uv?: number,
    amt?: number
}

/*
*  {
        name: 'Page A', // title
        uv: 4000, // xz
        pv: 2400, // value
        amt: 2400, // xz
    },
*
*
* */

export type TTotalChartStat = Record<TTotalChartType, Array<TCharData>>