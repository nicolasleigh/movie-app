import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';
import { AiOutlinePlus } from 'react-icons/ai';

export const HeaderDropDown = ({ addMovie, addActor }) => {
    const handleMenuClick: MenuProps['onClick'] = (e) => {
        if (e.key === '1') addMovie();
        if (e.key === '2') addActor();
    };

    const items: MenuProps['items'] = [
        {
            label: 'Add Movie',
            key: '1',
            icon: <AiOutlinePlus />,
        },
        {
            label: 'Add Actor',
            key: '2',
            icon: <AiOutlinePlus />,
        },
    ];

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    return (
        <Space wrap>
            <Dropdown menu={menuProps} trigger={['click']}>
                <Button>
                    <Space>
                        Create
                        <DownOutlined />
                    </Space>
                </Button>
            </Dropdown>
        </Space>
    );
};
