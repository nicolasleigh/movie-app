import { Form, Radio } from 'antd';
import { Controller } from 'react-hook-form';
export default function Type({ control, name }: any) {
    return (
        <Form.Item label='Type' name={name}>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Radio.Group {...field}>
                        <Radio value='film'> Film </Radio>
                        <Radio value='tv'> TV Series </Radio>
                        <Radio value='documentary'> Documentary </Radio>
                    </Radio.Group>
                )}
            />
        </Form.Item>
    );
}
