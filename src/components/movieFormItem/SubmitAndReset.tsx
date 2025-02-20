import { Form, Space, Button } from 'antd';
import { useReset } from '../../hooks';
export default function SubmitAndReset({
    handleSubmit,
    reset,
    onSubmit,
    defaultValues,
    onClose,
}: any) {
    const { setClickedReset } = useReset();

    const handleResetClick = () => {
        reset(defaultValues);
        setClickedReset(true);
    };

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
                <Button htmlType='reset' onClick={handleResetClick}>
                    Reset
                </Button>
                <Button onClick={onClose}>Close</Button>
            </Space>
        </Form.Item>
    );
}
