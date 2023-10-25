import { PlusOutlined } from '@ant-design/icons';
import { Form, Upload } from 'antd';
import { Controller } from 'react-hook-form';

const normFile = (e: any) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

export default function UploadImage({ control, setValue }: any) {
    const handleChange = ({ file, fileList }) => {
        console.log('file: ', file);
        console.log('fileList: ', fileList.url);
        setValue('poster', file);
    };
    return (
        // <Form.Item
        //     label='Upload image'
        //     valuePropName='fileList'
        //     getValueFromEvent={normFile}
        // >
        //     <Controller
        //         name='poster'
        //         control={control}
        //         render={({ field }) => (
        //             <Upload
        //                 action={import.meta.env.VITE_UPLOAD_IMAGE_PATH}
        //                 listType='picture-card'
        //                 accept='image/*'
        //                 maxCount={1}
        //                 {...field}
        //             >
        //                 <div>
        //                     <PlusOutlined />
        //                     <div style={{ marginTop: 8 }}>Select poster</div>
        //                 </div>
        //             </Upload>
        //         )}
        //     />
        // </Form.Item>
        <Form.Item
            label='Upload image'
            valuePropName='fileList'
            getValueFromEvent={normFile}
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
