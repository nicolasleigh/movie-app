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
}: any) {
    return (
        <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout='horizontal'
            disabled={componentDisabled}
            style={{ maxWidth: 600 }}
        >
            <Title control={control} />
            <Description control={control} />
            <Tags control={control} setValue={setValue}  />
            <Director control={control} />
            <Actors control={control} />
            <ReleaseYear control={control} />
            <Public control={control} setValue={setValue} />
            <Language control={control} />
            <Type control={control} />
            <Genres control={control} />
            <UploadImage control={control} setValue={setValue} />
            <UploadVideo control={control} setValue={setValue} />
            <SubmitAndReset
                handleSubmit={handleSubmit}
                reset={reset}
                onSubmit={onSubmit}
                defaultValues={defaultValues}
            />
        </Form>
    );
}
