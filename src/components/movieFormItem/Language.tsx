import { Form, Radio } from 'antd';
import { Controller, useController } from 'react-hook-form';
export default function Language({ control, name, validateRules }: any) {
    const {
        fieldState: { invalid, isTouched, isDirty },
    } = useController({
        name,
        control,
        rules: validateRules,
    });
    return (
        <Form.Item
            label='Language'
            name={name}
            hasFeedback={true}
            validateStatus={invalid ? 'error' : undefined}
            required
        >
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
