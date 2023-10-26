import { useState, useEffect } from 'react';
import jsonp from 'fetch-jsonp';
import qs from 'qs';
import { Form, Select } from 'antd';
import type { SelectProps } from 'antd';
import { useReset } from '../../hooks';

let timeout: ReturnType<typeof setTimeout> | null;
let currentValue: string;

const fetch = (value: string, callback: Function) => {
    if (timeout) {
        clearTimeout(timeout);
        timeout = null;
    }
    currentValue = value;

    const fake = () => {
        const str = qs.stringify({
            code: 'utf-8',
            q: value,
        });
        jsonp(`https://suggest.taobao.com/sug?${str}`)
            .then((response: any) => response.json())
            .then((d: any) => {
                if (currentValue === value) {
                    const { result } = d;
                    const data = result.map((item: any) => ({
                        value: item[0],
                        text: item[0],
                    }));
                    callback(data);
                }
            });
    };
    if (value) {
        timeout = setTimeout(fake, 300);
    } else {
        callback([]);
    }
};

export default function Actors({ setValue, getValues }: any) {
    const [data, setData] = useState<SelectProps['options']>([]);
    const [stateValue, setStateValue] = useState<string>([]);

    const formHookValue = getValues('actors');

    const handleSearch = (newValue: string) => {
        fetch(newValue, setData);
    };

    const { clickedReset, setClickedReset } = useReset();
    useEffect(() => {
        if (clickedReset) setStateValue(formHookValue);
        return () => setClickedReset(false);
    }, [clickedReset]);

    // const handleChange = (newValue: string) => {
    //     setStateValue(newValue);
    // };

    useEffect(() => {
        setValue('actors', stateValue);
    }, [stateValue]);

    // useEffect(() => {
    //     setStateValue(getValues('actors'));
    // }, [stateValue]);

    // console.log(getValues('actors'));

    const handleChange = (newValue: string) => {
        setStateValue(newValue);
    };

    return (
        <Form.Item label='Actors'>
            <Select
                showSearch
                value={stateValue}
                placeholder='search actor'
                defaultActiveFirstOption={false}
                suffixIcon={null}
                filterOption={false}
                onSearch={handleSearch}
                onChange={handleChange}
                notFoundContent={null}
                mode='tags'
                options={(data || []).map((d) => ({
                    value: d.value,
                    label: d.text,
                }))}
            />
        </Form.Item>
    );
}
