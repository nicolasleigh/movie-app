import { Form, Radio } from 'antd';
import { Controller } from 'react-hook-form';
export default function Language({ control, name }: any) {
    return (
        <Form.Item label='Language' name={name}>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Radio.Group {...field}>
                        <Radio value='chinese'> Chinese </Radio>
                        <Radio value='english'> English </Radio>
                        <Radio value='french'> French </Radio>
                        <Radio value='other'> Other </Radio>
                    </Radio.Group>
                )}
            />
        </Form.Item>
    );
}
