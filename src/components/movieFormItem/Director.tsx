import { Form, Input } from 'antd';
import { Controller } from 'react-hook-form';
export default function Director({ control, name }: any) {
    return (
        <Form.Item label='Director' name={name}>
            <Controller
                name={name}
                control={control}
                render={({ field }) => <Input {...field} />}
            />
        </Form.Item>
    );
}
