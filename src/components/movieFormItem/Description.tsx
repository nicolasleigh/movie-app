import { Form } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { Controller } from 'react-hook-form';
export default function Description({ control }: any) {
    return (
        <Form.Item label='Description'>
            <Controller
                name='description'
                control={control}
                render={({ field }) => <TextArea rows={4} {...field} />}
            />
        </Form.Item>
    );
}
