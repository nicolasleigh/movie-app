import { Form, Radio } from 'antd';
import { Controller, useController } from 'react-hook-form';
export default function Type({ control, name, validateRules }: any) {
    const {
        fieldState: { invalid, isTouched, isDirty },
    } = useController({
        name,
        control,
        rules: validateRules,
    });
    return (
        <Form.Item
            label='Type'
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
                        <Radio value='film'> Film </Radio>
                        <Radio value='tv'> TV Series </Radio>
                        <Radio value='documentary'> Documentary </Radio>
                    </Radio.Group>
                )}
            />
        </Form.Item>
    );
}
