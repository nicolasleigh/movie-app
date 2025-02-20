import { useState, useEffect } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Form, Modal, Progress, Upload } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import { Controller, useController } from 'react-hook-form';
import { useReset } from '../../hooks';
import { client } from '../../api/client';

const normFile = (e: any) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

let posterName = '';

export default function UploadImage({ setValue, name }: any) {
    const [defaultFileList, setDefaultFileList] = useState([]);
    const [progress, setProgress] = useState(0);

    const form = Form.useFormInstance();
    const formData = new FormData();

    const handleChange = ({ file, fileList }: any) => {
        setDefaultFileList(fileList);
        // setValue(name, file);
        // console.log('fileList: ', fileList);
        // console.log('handleChange-file: ', file);

        // if (file.status === 'uploading') {
        //     setFileValue(file);
        // }
        // if (file.status === 'done') {
        //     // setFileValue(file);
        //     setValue(name, file);
        // }
        // setValue(name, file);
    };

    const customRequest = async (value) => {
        const { onSuccess, onError, file, onProgress } = value;
        const config = {
            headers: { 'content-type': 'multipart/form-data' },
            onUploadProgress: (event) => {
                const percent = Math.floor((event.loaded / event.total) * 100);
                setProgress(percent);
                if (percent === 100) {
                    setTimeout(() => setProgress(0), 1000);
                }
                onProgress({ percent: (event.loaded / event.total) * 100 });
            },
        };
        formData.append('poster', file);
        // for (const pair of formData.entries()) {
        //     console.log('formData:');
        //     console.log(pair[0] + ', ' + pair[1]);
        // }

        try {
            const { data } = await client.post(
                import.meta.env.VITE_UPLOAD_IMAGE_PATH,
                formData,
                config
            );

            onSuccess('Ok');
            posterName = data.posterName;
            setValue('poster', posterName);

            console.log('server res: ', data);
        } catch (error) {
            console.log('error: ', error);
            onError({ error });
        }
    };

    const { clickedReset, setClickedReset } = useReset();

    useEffect(() => {
        form.resetFields([name]);
        setDefaultFileList([]);
        return () => setClickedReset(false);
    }, [clickedReset]);

    // onPreview
    const getBase64 = (file: RcFile): Promise<string> =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        });

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as RcFile);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
        setPreviewTitle(
            file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1)
        );
    };
    const handleCancel = () => setPreviewOpen(false);

    return (
        <Form.Item label='Upload image'>
            <Form.Item
                noStyle
                valuePropName='fileList'
                getValueFromEvent={normFile}
                name={name}
            >
                <Upload
                    customRequest={customRequest}
                    listType='picture-card'
                    accept='image/jpg, image/jpeg, image/png'
                    maxCount={1}
                    onChange={handleChange}
                    defaultFileList={defaultFileList}
                    onPreview={handlePreview}
                >
                    {defaultFileList.length >= 1 ? null : (
                        <div>
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Select poster</div>
                        </div>
                    )}
                </Upload>
            </Form.Item>

            <Form.Item noStyle>
                <Modal
                    open={previewOpen}
                    title={previewTitle}
                    footer={null}
                    onCancel={handleCancel}
                >
                    <img
                        alt='example'
                        style={{ width: '100%' }}
                        src={previewImage}
                    />
                </Modal>
            </Form.Item>
        </Form.Item>
    );
}
