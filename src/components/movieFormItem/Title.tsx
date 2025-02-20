import { Form, Input } from 'antd';
import { Controller, useController } from 'react-hook-form';

export default function Title({ control, name, validateRules }: any) {
    const {
        fieldState: { invalid, isTouched, isDirty },
    } = useController({
        name,
        control,
        rules: validateRules,
        // rules: { maxLength: 4 },
    });
    return (
        <Form.Item
            label='Title'
            required
            name={name}
            hasFeedback={true}
            validateStatus={invalid ? 'error' : undefined}
        >
            <Controller
                name={name}
                control={control}
                // rules={{
                //     maxLength: {
                //         value: 2,
                //         message: 'error message',
                //     },
                // }}
                render={({ field }) => <Input {...field} />}
            />
        </Form.Item>
    );
}
