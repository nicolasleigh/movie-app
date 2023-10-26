import { useEffect } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Form, Upload } from 'antd';
import { useReset } from '../../hooks';

const normFile = (e: any) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
export default function UploadVideo({ setValue }: any) {
    const form = Form.useFormInstance();

    const handleChange = ({ file, fileList }: any) => {
        if (file.status === 'done') setValue('video', file);
    };

    const { clickedReset, setClickedReset } = useReset();

    useEffect(() => {
        if (clickedReset) form.resetFields(['upload-video']);
        return () => setClickedReset(false);
    }, [clickedReset]);

    return (
        <Form.Item
            label='Upload video'
            valuePropName='fileList'
            getValueFromEvent={normFile}
            name='upload-video'
        >
            <Upload
                action={import.meta.env.VITE_UPLOAD_VIDEO_PATH}
                listType='picture-card'
                accept='.mp4,.avi,.mkv'
                maxCount={1}
                onChange={handleChange}
            >
                <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Select video</div>
                </div>
            </Upload>
        </Form.Item>
    );
}
