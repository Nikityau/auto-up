import {nanoid} from "nanoid";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios, {AxiosError} from "axios";

import {IDoc} from "./interface";
import {adapterDoc} from "../adapter/adapter-doc";
import {baseUrl} from "../../../../shared/api/base-url";
import {LoaderStore} from "../../../../local-store/loader/loader-store";
import {ErrorStore} from "../../../../local-store/error-store";

export const useFetchDoc = (loader: LoaderStore, error: ErrorStore) => {
    const [doc, setDoc] = useState<IDoc>(null);
    const {id} = useParams();

    useEffect(() => {
        (async () => {
            try {
                loader.add(`${baseUrl}/api/v1/courses/${id}/`)
                const {data} = await axios.get(`${baseUrl}/api/v1/courses/${id}/`);

                const doc_adapted = await adapterDoc(data);
                setDoc(doc_adapted)
            } catch (e) {
                const err = e as AxiosError
                error.addError({
                    id: nanoid(),
                    title: err['code'],
                    description: err.message + '\n' + err.config.url
                })
            } finally {
                loader.remove(`${baseUrl}/api/v1/courses/${id}/`)
            }
        })();
    }, []);

    return doc;
};