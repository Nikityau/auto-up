import { useEffect, useState } from "react"
import axios from 'axios'
import { FType } from "../types/f-types"

type Props = {
    url: string,
    onDownloadProgress?: FType<any, void>
    onUploadProgress?: FType<any, void>
    onResponse: FType<any, void>
    onError: FType<any, void>
}

export const useFetch = ({
    url,
    onResponse,
    onDownloadProgress,
    onUploadProgress,
    onError
}:Props) => {

    useEffect(() => {        
        axios({
            method: 'get',
            url: url,

            onDownloadProgress: (progress) => {
                onDownloadProgress?.(progress)
            },
            onUploadProgress: (progress) => {
                onUploadProgress?.(progress)
            },
        }).then(({data}) => {
            onResponse(data)
        }).catch((err) => {
            onError(err)
        })
    }, [])
}