import { Form } from 'antd';
import Title from '../movieFormItem/Title';
import Description from '../movieFormItem/Description';
import Director from '../movieFormItem/Director';
import Actors from '../movieFormItem/Actors';
import SubmitAndReset from '../movieFormItem/SubmitAndReset';
import UploadVideo from '../movieFormItem/UploadVideo';
import UploadImage from '../movieFormItem/UploadImage';
import Genres from '../movieFormItem/Genres';
import Type from '../movieFormItem/Type';
import Language from '../movieFormItem/Language';
import Public from '../movieFormItem/Public';
import ReleaseYear from '../movieFormItem/ReleaseYear';
import { defaultValues } from './DefaultValues';
import { Tags } from './Tags';

export default function MovieFormItem({
    control,
    componentDisabled,
    handleSubmit,
    reset,
    onSubmit,
    setValue,
    getValues,
}: any) {
    const [form] = Form.useForm();

    return (
        <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout='horizontal'
            disabled={componentDisabled}
            style={{ maxWidth: 600 }}
            form={form}
            name='movie-form'
        >
            <Title control={control} name='title' />
            <Description control={control} name='description' />
            <Tags control={control} name='tags' />
            <Director control={control} name='director' />
            <Actors setValue={setValue} getValues={getValues} name='actors' />
            <ReleaseYear control={control} name='releaseYear' />
            <Public control={control} setValue={setValue} name='public' />
            <Language control={control} name='language' />
            <Type control={control} name='type' />
            <Genres control={control} name='genres' />
            <UploadImage setValue={setValue} name='poster' />
            <UploadVideo setValue={setValue} name='video' />
            <SubmitAndReset
                handleSubmit={handleSubmit}
                reset={reset}
                onSubmit={onSubmit}
                defaultValues={defaultValues}
            />
        </Form>
    );
}
