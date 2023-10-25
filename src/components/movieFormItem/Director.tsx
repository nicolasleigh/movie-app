import { Form, Input } from 'antd';
import { Controller } from 'react-hook-form';
export default function Director({ control }: any) {
    return (
        <Form.Item label='Director'>
            <Controller
                name='director'
                control={control}
                render={({ field }) => <Input {...field} />}
            />
        </Form.Item>
    );
}
