import { Form, Space, Button } from 'antd';
export default function SubmitAndReset({
    handleSubmit,
    reset,
    onSubmit,
    defaultValues,
}: any) {
    return (
        <Form.Item label=' ' colon={false}>
            <Space size='large'>
                <Button
                    type='primary'
                    className='bg-blue-600'
                    htmlType='submit'
                    onClick={handleSubmit(onSubmit)}
                >
                    Submit
                </Button>
                <Button
                    htmlType='reset'
                    onClick={() => {
                        reset(defaultValues);
                    }}
                >
                    reset
                </Button>
            </Space>
        </Form.Item>
    );
}
