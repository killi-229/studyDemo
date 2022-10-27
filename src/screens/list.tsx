import {User} from "./search-panel";
import {Table} from "antd";

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
    const columns = [
        {
            title: '名称',
            dataIndex: 'name',
            key: 'name',
            sorter: (a:Project,b:Project) => a.name.localeCompare(b.name)
        },
        {
            title: '负责人',
            dataIndex: 'name',
            key: 'name',
            render: (value:string, project:Project) => {
              return <span>{users.find((u) => u.id === project.personId)?.name || '无'}</span>
            }
        }
    ];

    return <Table columns={columns} dataSource={list} />;
}

export default List