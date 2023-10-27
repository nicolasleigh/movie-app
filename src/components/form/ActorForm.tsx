import { useState } from 'react';
import { Button, Checkbox, Form, Input, Radio, Space, Upload } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import TextArea from 'antd/es/input/TextArea';
import { PlusOutlined } from '@ant-design/icons';

export default function ActorForm({ onClose }) {
    const [componentDisabled, setComponentDisabled] = useState(false);
    const [form] = Form.useForm();

    const handleSubmit = () => {
        console.log(form.getFieldsValue(['avatar', 'name', 'about', 'gender']));
    };

    const handleChange = ({ file, fileList }: any) => {
        if (file.status === 'done') console.log(file);
    };

    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    return (
        <>
            <Checkbox
                checked={componentDisabled}
                onChange={(e) => setComponentDisabled(e.target.checked)}
            >
                Form disabled
            </Checkbox>

            <Form
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 16, offset: 2 }}
                disabled={componentDisabled}
                style={{ width: ' 130% ', translate: '-30px' }}
                name='actor-form'
                form={form}
                onFinish={handleSubmit}
            >
                <FormItem
                    label='Avatar'
                    required
                    name='avatar'
                    valuePropName='fileList'
                    getValueFromEvent={normFile}
                    rules={[
                        { required: true, message: 'Please upload an image!' },
                    ]}
                >
                    <Upload
                        action={import.meta.env.VITE_UPLOAD_IMAGE_PATH}
                        listType='picture-card'
                        accept='image/jpg, image/jpeg, image/png'
                        maxCount={1}
                        onChange={handleChange}
                    >
                        <div>
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Select poster</div>
                        </div>
                    </Upload>
                </FormItem>

                <FormItem
                    label='Name'
                    required
                    name='name'
                    rules={[
                        { required: true, message: 'Please enter a name!' },
                    ]}
                >
                    <Input />
                </FormItem>

                <FormItem label='About' name='about'>
                    <TextArea rows={4} />
                </FormItem>

                <FormItem
                    label='Gender'
                    required
                    name='gender'
                    rules={[
                        { required: true, message: 'Please select gender!' },
                    ]}
                >
                    <Radio.Group>
                        <Radio value='male'> Male </Radio>
                        <Radio value='female'> Female </Radio>
                    </Radio.Group>
                </FormItem>

                <FormItem label=' ' colon={false}>
                    <Space>
                        <Button
                            type='primary'
                            className='bg-blue-600'
                            htmlType='submit'
                        >
                            Create
                        </Button>
                        <Button htmlType='reset'>Reset</Button>
                        <Button onClick={onClose}>Back</Button>
                    </Space>
                </FormItem>
            </Form>
        </>
    );
}
