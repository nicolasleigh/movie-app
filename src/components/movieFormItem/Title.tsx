import { Form, Input } from 'antd';
import { Controller, useController } from 'react-hook-form';

export default function Title({ control,name }: any) {
    const {
        field,
        fieldState: { invalid, isTouched, isDirty },
        formState: { touchedFields, dirtyFields },
    } = useController({
        name,
        control,
        rules: { required: true },
    });
    return (
        <Form.Item label='Title' required name={name}>
            <Controller
                name={name}
                control={control}
                render={({ field }) => <Input {...field} />}
            />
        </Form.Item>
    );
}
