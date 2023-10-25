import { Form, Input } from 'antd';
import { Controller } from 'react-hook-form';

export default function Title({ control }: any) {
    return (
        <Form.Item label='Title'>
            <Controller
                name='title'
                control={control}
                render={({ field }) => <Input {...field} />}
            />
        </Form.Item>
    );
}
