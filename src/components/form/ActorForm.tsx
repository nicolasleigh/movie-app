import { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input, Radio, Space, Upload } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import TextArea from 'antd/es/input/TextArea';
import { PlusOutlined } from '@ant-design/icons';
import { client } from '../../api/client';

// let avatarName = '';

export default function ActorForm({ onClose }) {
    const [avatarName, setAvatarName] = useState('');
    const [componentDisabled, setComponentDisabled] = useState(false);
    const [defaultFileList, setDefaultFileList] = useState([]);

    const [form] = Form.useForm();
    const formData = new FormData();

    const handleSubmit = async () => {
        // console.log(form.getFieldsValue(['avatar', 'name', 'about', 'gender']));
        const actorForm = form.getFieldsValue([
            'avatar',
            'name',
            'about',
            'gender',
        ]);
        const actorInfo = {
            name: actorForm.name,
            about: actorForm.about,
            gender: actorForm.gender,
        };
        console.log('actorInfo ', actorInfo);
        formData.append('avatar', actorForm.avatar[0].originFileObj);
        formData.append('actorInfo', JSON.stringify(actorInfo));

        const config = {
            headers: { 'content-type': 'multipart/form-data' },
            // onUploadProgress: (event) => {
            //     // const percent = Math.floor((event.loaded / event.total) * 100);
            //     onProgress({ percent: (event.loaded / event.total) * 100 });
            // },
        };

        try {
            const { data } = await client.post(
                import.meta.env.VITE_UPLOAD_AVATAR_PATH,
                formData,
                config
            );

            // onSuccess('Ok');
            // avatarName = data.avatarName;
            // setAvatarName(data.avatarName);
            // setValue('avatar', avatarName);

            console.log('server res: ', data);
        } catch (error) {
            console.log('error: ', error);
            // onError({ error });
        }

        // const strData = JSON.stringify(data);
        // console.log('onSubmit data', data);
        // const response = await client.post('/movie/create-movie', strData, {
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // });
        // console.log('onSubmit res', response);
    };

    const handleChange = ({ file, fileList }: any) => {
        setDefaultFileList(fileList);

        // if (file.status === 'done') form.setFieldValue('avatar', avatarName);
    };

    // useEffect(() => {
    //     // form.setFieldsValue({ avatar: avatarName });
    //     form.setFields([{ name: ['avatar'], value: avatarName }]);
    // }, [avatarName]);

    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    // const customRequest = async (value) => {
    //     const { onSuccess, onError, file, onProgress } = value;
    //     const config = {
    //         headers: { 'content-type': 'multipart/form-data' },
    //         onUploadProgress: (event) => {
    //             // const percent = Math.floor((event.loaded / event.total) * 100);
    //             onProgress({ percent: (event.loaded / event.total) * 100 });
    //         },
    //     };
    //     formData.append('avatar', file);
    //     // for (const pair of formData.entries()) {
    //     //     console.log('formData:');
    //     //     console.log(pair[0] + ', ' + pair[1]);
    //     // }

    //     try {
    //         const { data } = await client.post(
    //             import.meta.env.VITE_UPLOAD_AVATAR_PATH,
    //             formData,
    //             config
    //         );

    //         onSuccess('Ok');
    //         // avatarName = data.avatarName;
    //         // setAvatarName(data.avatarName);
    //         // setValue('avatar', avatarName);

    //         console.log('server res: ', data);
    //     } catch (error) {
    //         console.log('error: ', error);
    //         onError({ error });
    //     }
    // };

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
                <Form.Item
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
                        // customRequest={customRequest}
                        beforeUpload={() => false}
                        showUploadList={{ showPreviewIcon: false }}
                        listType='picture-card'
                        accept='image/jpg, image/jpeg, image/png'
                        maxCount={1}
                        onChange={handleChange}
                        defaultFileList={defaultFileList}
                    >
                        {defaultFileList.length >= 1 ? null : (
                            <div>
                                <PlusOutlined />
                                <div style={{ marginTop: 8 }}>
                                    Select avatar
                                </div>
                            </div>
                        )}
                    </Upload>
                </Form.Item>

                <Form.Item
                    label='Name'
                    required
                    name='name'
                    rules={[
                        { required: true, message: 'Please enter a name!' },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item label='About' name='about'>
                    <TextArea rows={4} />
                </Form.Item>

                <Form.Item
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
                </Form.Item>

                <Form.Item label=' ' colon={false}>
                    <Space>
                        <Button
                            type='primary'
                            className='bg-blue-600'
                            htmlType='submit'
                        >
                            Create
                        </Button>
                        <Button
                            htmlType='reset'
                            onClick={() => setDefaultFileList([])}
                        >
                            Reset
                        </Button>
                        <Button onClick={onClose}>Back</Button>
                    </Space>
                </Form.Item>
            </Form>
        </>
    );
}
