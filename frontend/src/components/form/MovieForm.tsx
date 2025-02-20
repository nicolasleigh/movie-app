import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { defaultValues } from '../movieFormItem/DefaultValues';
import { Checkbox } from 'antd';

import MovieFormItem from '../movieFormItem';
import { client } from '../../api/client';

export const MovieForm = ({ onClose }) => {
    const [componentDisabled, setComponentDisabled] = useState(false);

    const { control, handleSubmit, reset, setValue, register, getValues } =
        useForm({
            defaultValues,
        });
    const onSubmit: SubmitHandler<any> = async (data) => {
        const strData = JSON.stringify(data);
        console.log('onSubmit data', data);
        const response = await client.post('/movie/create-movie', strData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('onSubmit res', response);
    };

    return (
        <>
            <Checkbox
                checked={componentDisabled}
                onChange={(e) => setComponentDisabled(e.target.checked)}
            >
                Form disabled
            </Checkbox>
            <MovieFormItem
                control={control}
                componentDisabled={componentDisabled}
                handleSubmit={handleSubmit}
                reset={reset}
                onSubmit={onSubmit}
                setValue={setValue}
                register={register}
                getValues={getValues}
                onClose={onClose}
            />
        </>
    );
};
