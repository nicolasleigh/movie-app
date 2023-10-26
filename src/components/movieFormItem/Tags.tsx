import { useEffect, useState } from 'react';
import { Select, Form } from 'antd';
import type { SelectProps } from 'antd';
import { Controller } from 'react-hook-form';
import { useReset } from '../../hooks';
const options: SelectProps['options'] = [];

for (let i = 10; i < 36; i++) {
    options.push({
        value: i.toString(36) + i,
        label: i.toString(36) + i,
    });
}

export const Tags = ({ control, setValue, getValues }: any) => {
    // const [stateValue, setStateValue] = useState([]);
    // const form = Form.useFormInstance();

    // const formHookValue = getValues('tags');

    // const handleChange = (value: any) => {
    //     setStateValue(value);
    // };

    // const { clickedReset, setClickedReset } = useReset();
    // useEffect(() => {
    //     if (clickedReset) setStateValue(formHookValue);
    //     return () => setClickedReset(false);
    // }, [clickedReset]);

    // useEffect(() => {
    //     setValue('tags', stateValue);
    // }, [stateValue]);

    return (
        <Form.Item label='Tags'>
            <Controller
                name='tags'
                control={control}
                render={({ field }) => (
                    <Select
                        // value={stateValue}
                        mode='tags'
                        style={{ width: '100%' }}
                        // onChange={handleChange}
                        tokenSeparators={[',']}
                        options={options}
                        {...field}
                    />
                )}
            />
        </Form.Item>
    );
};
