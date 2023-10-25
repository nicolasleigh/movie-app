import { PlusOutlined } from '@ant-design/icons';
import { Form, Upload } from 'antd';
import { Controller } from 'react-hook-form';

const normFile = (e: any) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
export default function UploadVideo({ control }: any) {
    return (
        <Form.Item
            label='Upload video'
            valuePropName='fileList'
            getValueFromEvent={normFile}
        >
            <Controller
                name='video'
                control={control}
                render={({ field }) => (
                    <Upload
                        action={import.meta.env.VITE_UPLOAD_VIDEO_PATH}
                        listType='picture-card'
                        accept='.mp4,.avi,.mkv'
                        maxCount={1}
                        {...field}
                    >
                        <div>
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Select video</div>
                        </div>
                    </Upload>
                )}
            />
        </Form.Item>
    );
}
