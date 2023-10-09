import { CookieStore } from "../../../../local-store/cookie/cookie-store";
import { useParams } from "react-router-dom";


// do later
export const useFetchStInfo = (cookie: CookieStore) => {
  const {groupId, studentId} = useParams()
}