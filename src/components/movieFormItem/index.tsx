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

const defaultRules = {
    required: true,
};

export default function MovieFormItem({
    control,
    componentDisabled,
    handleSubmit,
    reset,
    onSubmit,
    setValue,
    getValues,
    onClose
}: any) {
    const [form] = Form.useForm();

    return (
        <Form
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            labelAlign='left'
            layout='horizontal'
            size='small'
            disabled={componentDisabled}
            style={{}}
            form={form}
            name='movie-form'
        >
            <Title
                control={control}
                name='title'
                validateRules={defaultRules}
            />
            <Description
                control={control}
                name='description'
                validateRules={defaultRules}
            />
            <Tags control={control} name='tags' validateRules={defaultRules} />
            <Director
                control={control}
                name='director'
                validateRules={defaultRules}
            />
            <Actors
                control={control}
                setValue={setValue}
                getValues={getValues}
                name='actors'
                validateRules={defaultRules}
            />
            <ReleaseYear
                control={control}
                name='releaseYear'
                validateRules={defaultRules}
            />
            <Public
                control={control}
                setValue={setValue}
                name='public'
                validateRules={defaultRules}
            />
            <Language
                control={control}
                name='language'
                validateRules={defaultRules}
            />
            <Type control={control} name='type' validateRules={defaultRules} />
            <Genres
                control={control}
                name='genres'
                validateRules={defaultRules}
            />
            <UploadImage
                control={control}
                setValue={setValue}
                name='poster'
                validateRules={defaultRules}
            />
            <UploadVideo
                control={control}
                setValue={setValue}
                name='video'
                validateRules={defaultRules}
            />
            <SubmitAndReset
                handleSubmit={handleSubmit}
                reset={reset}
                onSubmit={onSubmit}
                defaultValues={defaultValues}
                onClose={onClose}
            />
        </Form>
    );
}
