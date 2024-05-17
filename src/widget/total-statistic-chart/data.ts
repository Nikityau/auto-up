import {TCharData, TTotalChartStat, TTotalChartType} from "./index.type";

const totalActivity = '4945 2649 806 1782 1897 3964 4688 4133 676 2665 4166 1881 3966 1924 4296 4933 3371 4792 3000 3944 3004 1380 3569 3369 2714 1102 2481 1143 1647 4057'.split(' ')
const appDownload = '27 2 3 30 18 16 16 2 2 11 24 4 27 16 1 23 21 8 27 21 19 10 19 14 18 22 10 2 6 24'.split(' ')
const downloadGb = '58 11 74 3 48 78 19 35 100 36 71 23 58 9 64 48 6 71 6 64 45 40 59 31 38 98 91 86 63 92'.split(' ')
const spentTraffic = '93 12 118 87 49 67 121 80 71 116 24 119 58 127 66 139 19 103 137 19 75 57 129 117 85 85 94 69 124 100'.split(' ')

const getData = (nums: Array<string>): Array<TCharData> => {
    return nums.map(n => {
        const d: TCharData = {
            name: 'ok',
            pv: Number(n),
        }

        return d
    })
}

export const chartsData: TTotalChartStat = {
    "app-download": getData(appDownload),
    "download-gb": getData(downloadGb),
    "spent-traffic": getData(spentTraffic),
    "total-activity": getData(totalActivity)
}

export const trafficTypes: Array<{
    title: string,
    type: TTotalChartType
}> = [
    {
        title: 'Общая активность',
        type: 'total-activity'
    },
    {
        title: 'Израсходовано трафика',
        type: 'spent-traffic'
    },
    {
        title: 'Cкачано программ',
        type: 'app-download'
    },
    {
        title: 'Скачанные гб',
        type: 'download-gb'
    },
]