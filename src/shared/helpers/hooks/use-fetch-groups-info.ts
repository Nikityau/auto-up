import axios from "axios"
import { useContext, useEffect } from "react"
import { NotifsContext } from "../../../app/provider/with-notification"
import { accessRoutes } from "../../../shared/data/access-routes"
import { baseUrl } from "../../../shared/api/base-url"
import { useErrorHandler } from "./use-error-handler"
import { nanoid } from "nanoid"

interface IGroup {
    id: string
    name: string
}

export const useFetchGroupsInfo = () => {
    const {addNotif} = useContext(NotifsContext)
    const errHandler = useErrorHandler()

    useEffect(() => {
        const userRole = localStorage.getItem('user-role')

        if(!userRole) return
        if(!accessRoutes.lecturer.find(r => r == userRole)) return

        fetchGroupData()
    }, [])

    const fetchGroupData =  async () => {
        try {
            const groupsRes = await axios.get(`${baseUrl}/api/v1/study_groups/`)
            const groupsData = groupsRes.data as IGroup[]
            
            let strDesct = "Посмотрите задания в группе/группах: "

            for(let group of groupsData) {
                const groupSolutions = await axios.get(`${baseUrl}/api/v1/study_groups/${group.id}/solutions/`, {
                    params: {
                        solution_status: 'done'
                    }
                })
                const data = groupSolutions.data
                
                if(length in data && data.length > 0) {
                    strDesct += `${group.name}|`
                }
               
            }

            addNotif({
                id: nanoid(),
                description: strDesct,
                type: 'success',
                title: 'Проверьте задания'
            })
            
        } catch(e) {
            errHandler(e)
        }
    }
}