import {User} from "./search-panel";

interface Project {
    id: string;
    name: string;
    personId: string;
    pin: boolean;
    organization: string;
}

interface ListProps {
    list: Project[];
    users: User[];
}

const List = ({list,users}:ListProps) => {
    return <table>
        <thead>
            <tr>
                <td>名称</td>
                <td>负责人</td>
            </tr>
        </thead>
        <tbody>
            {
                list.map(it =>
                    <tr key={it.id}>
                        <td>{it.name}</td>
                        <td>{users.find((u) => u.id === it.personId)?.name || '无'}</td>
                    </tr>
                )
            }
        </tbody>
    </table>
}

export default List