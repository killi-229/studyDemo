import {Input, Select} from "antd";

export interface User {
    id: string;
    name: string;
    eamil: string;
    title: string;
    organization: string;
    token: string
}

interface SearchPanelProps {
    users: User[];
    param: {
        name:string,
        personId: string
    };
    setParam: (param: SearchPanelProps['param']) => void
}


const SearchPanel = ({param, users, setParam}:SearchPanelProps) => {
    return <form className="SearchPanel">
        <div>
            <Input
                value={param.name}
                onChange={(e) => setParam({
                    ...param,
                    name:e.target.value
                })}/>

            <Select value={param.personId} onChange={value =>
                setParam({
                ...param,
                personId:value
            })}>
                <Select.Option value={""}>负责人</Select.Option>
                {
                    users.map(it => <Select.Option value={it.id} key={it.id}>{it.name}</Select.Option>)
                }
            </Select>
        </div>
    </form>
}

export default SearchPanel