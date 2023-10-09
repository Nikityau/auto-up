import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IDoc } from "./interface";
import { adapterDoc } from "../adapter/adapter-doc";
import { baseUrl } from "../../../../shared/api/base-url";
import { CookieStore } from "../../../../local-store/cookie/cookie-store";
import { loaderStore, LoaderStore } from "../../../../local-store/loader/loader-store";

export const useFetchDoc = (cookieStore: CookieStore, loader: LoaderStore) => {
  const [doc, setDoc] = useState<IDoc>(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      loaderStore.add(`${baseUrl}/api/v1/courses/${id}/`)
      const { data } = await axios.get(`${baseUrl}/api/v1/courses/${id}/`, {
        headers: {
          Authorization: `Token ${cookieStore.token}`
        }
      });

      const doc_adapted = await adapterDoc(data, cookieStore.token);
      setDoc(doc_adapted)
      loaderStore.remove(`${baseUrl}/api/v1/courses/${id}/`)
    })();
  }, []);

  return doc;
};