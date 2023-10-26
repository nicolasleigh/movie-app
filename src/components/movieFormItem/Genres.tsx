import { Form, Select } from 'antd';
import { Controller, useController } from 'react-hook-form';
export default function Genres({ control, name, validateRules }: any) {
    const {
        fieldState: { invalid, isTouched, isDirty },
    } = useController({
        name,
        control,
        rules: validateRules,
    });
    return (
        <Form.Item
            label='Genres'
            name={name}
            hasFeedback={true}
            validateStatus={invalid ? 'error' : undefined}
            required
        >
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Select
                        mode='multiple'
                        style={{ width: '100%' }}
                        {...field}
                    >
                        <Select.Option value='action'>Action</Select.Option>
                        <Select.Option value='adventure'>
                            Adventure
                        </Select.Option>
                        <Select.Option value='animation'>
                            Animation
                        </Select.Option>
                        <Select.Option value='comedy'>Comedy</Select.Option>
                        <Select.Option value='crime'>Crime</Select.Option>
                        <Select.Option value='fiction'>Fiction</Select.Option>
                        <Select.Option value='sci-fi'>Sci-Fi</Select.Option>
                        <Select.Option value='thriller'>Thriller</Select.Option>
                        <Select.Option value='other'>Other</Select.Option>
                    </Select>
                )}
            />
        </Form.Item>
    );
}
