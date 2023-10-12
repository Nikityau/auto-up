import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios, {AxiosError} from "axios";
import {IDoc} from "./interface";
import {adapterDoc} from "../adapter/adapter-doc";
import {baseUrl} from "../../../../shared/api/base-url";
import {CookieStore} from "../../../../local-store/cookie/cookie-store";
import {loaderStore, LoaderStore} from "../../../../local-store/loader/loader-store";
import {ErrorStore} from "../../../../local-store/error-store";
import {nanoid} from "nanoid";

export const useFetchDoc = (cookieStore: CookieStore, loader: LoaderStore, error: ErrorStore) => {
    const [doc, setDoc] = useState<IDoc>(null);
    const {id} = useParams();

    useEffect(() => {
        (async () => {
            try {
                loaderStore.add(`${baseUrl}/api/v1/courses/${id}/`)
                const {data} = await axios.get(`${baseUrl}/api/v1/courses/${id}/`, {
                    headers: {
                        Authorization: `Token ${cookieStore.token}`
                    }
                });

                console.log('course', data)

                const doc_adapted = await adapterDoc(data, cookieStore.token);
                console.log('adapted', doc_adapted)
                setDoc(doc_adapted)
            } catch (e) {
                const err = e as AxiosError
                error.addError({
                    id: nanoid(),
                    title: err['code'],
                    description: err.message + '\n' + err.config.url
                })
            } finally {
                loaderStore.remove(`${baseUrl}/api/v1/courses/${id}/`)
            }
        })();
    }, []);

    return doc;
};