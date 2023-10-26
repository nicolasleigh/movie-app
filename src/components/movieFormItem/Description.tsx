import { Form } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { Controller } from 'react-hook-form';
export default function Description({ control, name }: any) {
    return (
        <Form.Item label='Description' name={name}>
            <Controller
                name={name}
                control={control}
                render={({ field }) => <TextArea rows={4} {...field} />}
            />
        </Form.Item>
    );
}
