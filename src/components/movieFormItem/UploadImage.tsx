import { useState, useEffect } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Form, Upload } from 'antd';
import { Controller, useController } from 'react-hook-form';
import { useReset } from '../../hooks';

const normFile = (e: any) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

export default function UploadImage({ setValue, name }: any) {
    const form = Form.useFormInstance();

    const handleChange = ({ file, fileList }: any) => {
        if (file.status === 'done') setValue(name, file);
    };

    const { clickedReset, setClickedReset } = useReset();

    useEffect(() => {
        if (clickedReset) form.resetFields([name]);
        return () => setClickedReset(false);
    }, [clickedReset]);

    return (
        <Form.Item
            label='Upload image'
            valuePropName='fileList'
            getValueFromEvent={normFile}
            name={name}
        >
            <Upload
                action={import.meta.env.VITE_UPLOAD_IMAGE_PATH}
                listType='picture-card'
                accept='image/*'
                maxCount={1}
                onChange={handleChange}
            >
                <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Select poster</div>
                </div>
            </Upload>
        </Form.Item>
    );
}
