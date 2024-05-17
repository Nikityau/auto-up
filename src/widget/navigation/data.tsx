import React from "react";
import {nanoid} from "nanoid";
import {TAppLink} from "../../features/app-link/index.type";

export const navData: Array<TAppLink> = [
    {
        id: nanoid(),
        title: 'Статистика',
        icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="20" height="20" rx="5" strokeWidth="1.5"/>
            <path d="M7 16L7 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 16L11 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 16L15 9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        ,
        link: '/auto-up/inside/statistic'
    },
    {
        id: nanoid(),
        title: 'Пользователи',
        icon: <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3.40426" cy="3.40426" r="3.40426" transform="matrix(-1 0 0 1 14.6172 0.999939)"
                    strokeWidth="1.5"/>
            <path
                d="M5.25537 12.8594C5.25537 12.1272 5.71567 11.474 6.40524 11.2277V11.2277C9.51413 10.1174 12.9115 10.1174 16.0204 11.2277V11.2277C16.71 11.474 17.1703 12.1272 17.1703 12.8594V13.979C17.1703 14.9896 16.2752 15.7659 15.2748 15.6229L14.9412 15.5753C12.4682 15.222 9.95746 15.222 7.48442 15.5753L7.15087 15.6229C6.15044 15.7659 5.25537 14.9896 5.25537 13.979V12.8594Z"
                strokeWidth="1.5"/>
            <path
                d="M16.3194 7.90271C17.7966 7.90271 18.9941 6.70517 18.9941 5.22793C18.9941 3.7507 17.7966 2.55316 16.3194 2.55316"
                strokeWidth="1.5" strokeLinecap="round"/>
            <path
                d="M19.2486 14.005L19.5106 14.0424C20.2967 14.1547 21 13.5448 21 12.7508V11.8711C21 11.2958 20.6383 10.7826 20.0965 10.5891C19.5561 10.396 19.0045 10.2457 18.4468 10.1381"
                strokeWidth="1.5" strokeLinecap="round"/>
            <path
                d="M5.68063 7.90271C4.2034 7.90271 3.00586 6.70517 3.00586 5.22793C3.00586 3.7507 4.2034 2.55316 5.68063 2.55316"
                strokeWidth="1.5" strokeLinecap="round"/>
            <path
                d="M2.75143 14.005L2.48935 14.0424C1.7033 14.1547 1.00003 13.5448 1.00003 12.7508V11.8711C1.00003 11.2958 1.3617 10.7826 1.9035 10.5891C2.44395 10.396 2.99549 10.2457 3.55322 10.1381"
                strokeWidth="1.5" strokeLinecap="round"/>
        </svg>,
        link: '/auto-up/inside/users'
    },
    {
        id: nanoid(),
        title: 'Загрузить файлы',
        icon: <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7 6L5 6C2.79086 6 1 7.79086 1 10L1 15C1 17.2091 2.79086 19 5 19L17 19C19.2091 19 21 17.2091 21 15L21 10C21 7.79086 19.2091 6 17 6L15 6"
                strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M8 11L10.2929 13.2929C10.6834 13.6834 11.3166 13.6834 11.7071 13.2929L14 11"
                  strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M11 13L11 1" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        ,
        link: '/auto-up/inside/upload-files'
    },
    {
        id: nanoid(),
        title: 'Все файлы',
        icon: <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10 2H15.5C17.9853 2 20 4.01472 20 6.5M11.1027 3.24371L10.3973 2.25629C9.83421 1.4679 8.925 1 7.95615 1H6C3.23858 1 1 3.23858 1 6V14C1 16.7614 3.23858 19 6 19H16C18.7614 19 21 16.7614 21 14V9.5C21 6.73858 18.7614 4.5 16 4.5H13.5439C12.575 4.5 11.6658 4.0321 11.1027 3.24371Z"
                stroke="#9E9E9E" strokeWidth="1.5"/>
            <path d="M11 14.5H17" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        ,
        link: '/auto-up/inside/all-files'
    },
]