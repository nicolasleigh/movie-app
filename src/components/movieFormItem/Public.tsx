import { Form, Switch } from 'antd';
import { useController } from 'react-hook-form';

export default function Public({
    setValue,
    name,
    validateRules,
    control,
}: any) {
    const handleChange = (checked: boolean) => {
        setValue('public', checked);
    };
    const {
        fieldState: { invalid, isTouched, isDirty },
    } = useController({
        name,
        control,
        rules: validateRules,
    });
    return (
        <Form.Item
            label='Public'
            valuePropName='checked'
            name={name}
            hasFeedback={true}
            validateStatus={invalid ? 'error' : undefined}
            required
        >
            <Switch defaultChecked onChange={handleChange} />
        </Form.Item>
    );
}
