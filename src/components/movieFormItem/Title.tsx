import { Form, Input } from 'antd';
import { Controller, useController } from 'react-hook-form';

export default function Title({ control }: any) {
    const {
        field,
        fieldState: { invalid, isTouched, isDirty },
        formState: { touchedFields, dirtyFields },
    } = useController({
        name: 'title',
        control,
        rules: { required: true },
    });
    return (
        <Form.Item label='Title' required>
            <Controller
                name='title'
                control={control}
                render={({ field }) => <Input {...field} />}
            />
        </Form.Item>
    );
}
