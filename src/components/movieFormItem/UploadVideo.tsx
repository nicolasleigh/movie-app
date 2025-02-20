import { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Form, Upload } from 'antd';
import { useReset } from '../../hooks';
import { client } from '../../api/client';

const normFile = (e: any) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

let movieName = '';
export default function UploadVideo({ setValue, name }: any) {
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
        formData.append('video', file);
        // for (const pair of formData.entries()) {
        //     console.log('formData:');
        //     console.log(pair[0] + ', ' + pair[1]);
        // }

        try {
            const { data } = await client.post(
                import.meta.env.VITE_UPLOAD_VIDEO_PATH,
                formData,
                config
            );

            onSuccess('Ok');
            movieName = data.movieName;
            setValue('video', movieName);

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

    //*************** */

    // const handleChange = ({ file, fileList }: any) => {
    //     if (file.status === 'done') setValue(name, file);
    // };

    // const { clickedReset, setClickedReset } = useReset();

    // useEffect(() => {
    //     if (clickedReset) form.resetFields([name]);
    //     return () => setClickedReset(false);
    // }, [clickedReset]);

    return (
        <Form.Item
            label='Upload video'
            valuePropName='fileList'
            getValueFromEvent={normFile}
            name={name}
        >
            <Upload
                customRequest={customRequest}
                listType='picture-card'
                accept='.mp4,.avi,.mkv'
                maxCount={1}
                onChange={handleChange}
                defaultFileList={defaultFileList}
            >
               {defaultFileList.length >= 1 ? null : (
                        <div>
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Select video</div>
                        </div>
                    )}
            </Upload>
        </Form.Item>
    );
}
