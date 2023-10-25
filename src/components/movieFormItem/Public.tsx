import { Form, Switch } from 'antd';
import { Controller } from 'react-hook-form';
export default function Public({ control, setValue }: any) {
    const handleChange = (checked: boolean) => {
        setValue('public', checked);
    };
    return (
        // <Form.Item label='Public' valuePropName='checked'>
        //     <Controller
        //         name='public'
        //         control={control}
        //         render={({ field }) => <Switch defaultChecked {...field} />}
        //     />
        // </Form.Item>
        <Form.Item label='Public' valuePropName='checked'>
            <Switch defaultChecked onChange={handleChange} />
        </Form.Item>
    );
}
