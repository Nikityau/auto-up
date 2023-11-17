import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { IDoc } from "./interface";
import { adapterDoc } from "../adapter/adapter-doc";
import { baseUrl } from "../../../../shared/api/base-url";
import { useErrorHandler } from "../../../../shared/helpers/hooks/use-error-handler";
import {useLoader} from "../../../../shared/helpers/hooks/use-loader";

export const useFetchDoc = () => {
    const [doc, setDoc] = useState<IDoc>(null);
    const { id } = useParams();
    const errHandler = useErrorHandler()
    const {off, on} = useLoader()

    useEffect(() => {
        (async () => {
            try {
                on()
                const { data } = await axios.get(`${baseUrl}/api/v1/courses/${id}/`);

                const doc_adapted = await adapterDoc(data);
                setDoc(doc_adapted)
            } catch (e) {
                errHandler(e)
            } finally {
                off()
            }
        })();
    }, []);

    return doc;
};