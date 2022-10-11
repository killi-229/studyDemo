export interface User {
    id: string,
    name: string,
    eamil: string,
    title: string,
    organization: string
}

interface SearchPanelProps {
    users: User[],
    param: {
        name:string,
        personId: string
    },
    setParam: (param: SearchPanelProps['param']) => void
}


const SearchPanel = ({param, users, setParam}:SearchPanelProps) => {
    return <form className="SearchPanel">
        <div>
            <input
                type="text"
                value={param.name}
                onChange={(e) => setParam({
                    ...param,
                    name:e.target.value
                })}/>

            <select value={param.personId} onChange={(e) =>
                setParam({
                ...param,
                personId:e.target.value
            })}>
                <option value="">负责人</option>
                {
                    users.map(it => <option value={it.id} key={it.id}>{it.name}</option>)
                }
            </select>
        </div>
    </form>
}

export default SearchPanel