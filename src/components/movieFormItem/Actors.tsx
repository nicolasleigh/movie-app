import { Form, Input } from 'antd';
import { Controller } from 'react-hook-form';
export default function Actors({ control }: any) {
    return (
        <Form.Item label='Actors'>
            <Controller
                name='actors'
                control={control}
                render={({ field }) => (
                    <Input placeholder='use comma as delimiter' {...field} />
                )}
            />
        </Form.Item>
    );
}
