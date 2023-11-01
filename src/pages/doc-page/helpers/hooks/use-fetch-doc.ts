import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { IDoc } from "./interface";
import { adapterDoc } from "../adapter/adapter-doc";
import { baseUrl } from "../../../../shared/api/base-url";
import { LoaderStore } from "../../../../local-store/loader/loader-store";
import { ErrorStore } from "../../../../local-store/error-store";
import { useErrorHandler } from "../../../../shared/helpers/hooks/use-error-handler";

export const useFetchDoc = (loader: LoaderStore) => {
    const [doc, setDoc] = useState<IDoc>(null);
    const { id } = useParams();
    const errHandler = useErrorHandler()

    useEffect(() => {
        (async () => {
            try {
                loader.add(`${baseUrl}/api/v1/courses/${id}/`)
                const { data } = await axios.get(`${baseUrl}/api/v1/courses/${id}/`);

                const doc_adapted = await adapterDoc(data);
                setDoc(doc_adapted)
            } catch (e) {
                errHandler(e)
            } finally {
                loader.remove(`${baseUrl}/api/v1/courses/${id}/`)
            }
        })();
    }, []);

    return doc;
};