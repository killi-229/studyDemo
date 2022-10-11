import List from './list'
import SearchPanel from './search-panel'
import {useEffect, useState} from "react";
import * as qs from "qs";

import {cleanObject, useDebounce, useMount} from "../utils";
const BaseUrl = process.env.REACT_APP_API_URL
const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name:'',
        personId: ''
    })

    const [users,setUsers] = useState([])
    const [list, setList] = useState([])
    const debouncedParam = useDebounce(param, 3000)

    useEffect(() => {
        fetch(`${BaseUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async (res) => {
            setList(await res.json())
        })
    }, [debouncedParam])

    useMount(() => {
        fetch(`${BaseUrl}/users`).then(async (res) => {
            setUsers(await res.json())
        })
    })


    return <div className="ProjectListScreen">
        <SearchPanel param={param} setParam={setParam} users={users}/>
        <List list={list} users={users}/>
    </div>
}

export default ProjectListScreen