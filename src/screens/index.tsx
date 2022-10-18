import List from './list'
import SearchPanel from './search-panel'
import {useEffect, useState} from "react";
import * as qs from "qs";

import {cleanObject, useDebounce, useMount} from "../utils";
import {useHttp} from "../utils/http";
const BaseUrl = process.env.REACT_APP_API_URL
const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name:'',
        personId: ''
    })

    const [users,setUsers] = useState([])
    const [list, setList] = useState([])
    const debouncedParam = useDebounce(param, 1000)
    const http = useHttp()

    useEffect(() => {
        http('projects', {data: cleanObject(debouncedParam)}).then(setList)
    }, [debouncedParam])

    useMount(() => {
        http('users', {data: cleanObject(debouncedParam)}).then(setUsers)
    })


    return <div className="ProjectListScreen">
        <SearchPanel param={param} setParam={setParam} users={users}/>
        <List list={list} users={users}/>
    </div>
}

export default ProjectListScreen