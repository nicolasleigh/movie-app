import { DatePicker, Form } from 'antd';
import { Controller, useController } from 'react-hook-form';
import dayjs from 'dayjs';
export default function ReleaseYear({ control, name, validateRules }: any) {
    const {
        fieldState: { invalid, isTouched, isDirty },
    } = useController({
        name,
        control,
        rules: validateRules,
    });
    return (
        <Form.Item
            label='Release Year'
            name={name}
            hasFeedback={true}
            validateStatus={invalid ? 'error' : undefined}
            required
        >
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <DatePicker
                        picker='year'
                        placeholder={dayjs().year().toString()}
                        {...field}
                    />
                )}
            />
        </Form.Item>
    );
}
