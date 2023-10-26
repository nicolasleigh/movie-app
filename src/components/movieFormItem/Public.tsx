import { Form, Switch } from 'antd';

export default function Public({ setValue, name }: any) {
    const handleChange = (checked: boolean) => {
        setValue('public', checked);
    };
    return (
        <Form.Item label='Public' valuePropName='checked' name={name}>
            <Switch defaultChecked onChange={handleChange} />
        </Form.Item>
    );
}
