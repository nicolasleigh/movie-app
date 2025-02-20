import { useState, useEffect } from 'react';
import jsonp from 'fetch-jsonp';
import qs from 'qs';
import { ConfigProvider, Form, Select } from 'antd';
import type { SelectProps } from 'antd';
import { useReset } from '../../hooks';
import { searchActor } from '../../api/actor';
// import { Option } from 'antd/es/mentions';
const { Option } = Select;

let timeout: ReturnType<typeof setTimeout> | null;
let currentValue: string;

const fetch = (value: string, callback: Function) => {
    if (timeout) {
        clearTimeout(timeout);
        timeout = null;
    }
    currentValue = value;

    const search = async () => {
        const { results } = await searchActor(value);
        const data = results.map((item: any) => ({
            id: item.id,
            value: item.name,
            text: item.name,
            url: item.avatar,
        }));
        callback(data);
    };
    if (value) {
        timeout = setTimeout(search, 300);
    } else {
        callback([]);
    }
};

export default function Actors({ setValue, getValues, name }: any) {
    const [data, setData] = useState<SelectProps['options']>([]);
    const [stateValue, setStateValue] = useState<string>([]);

    // const formHookValue = getValues(name);

    const onSearch = (newValue: string) => {
        fetch(newValue, setData);
    };

    const { clickedReset, setClickedReset } = useReset();
    useEffect(() => {
        if (clickedReset) setStateValue([]);
        // if (clickedReset) setStateValue(formHookValue);
        return () => setClickedReset(false);
    }, [clickedReset]);

    useEffect(() => {
        setValue(name, stateValue);
    }, [stateValue]);

    const handleChange = (newValue: string) => {
        setStateValue(newValue);
    };

    return (
        <Form.Item label='Actors' name={name}>
            <Select
                showSearch
                maxTagCount={3}
                value={stateValue}
                // placeholder='search actor'
                defaultActiveFirstOption={false}
                suffixIcon={null}
                filterOption={false}
                onSearch={onSearch}
                onChange={handleChange}
                notFoundContent={null}
                mode='multiple'
                // options={(data || []).map((d) => ({
                //     value: d.value,
                //     label: d.text,
                // }))}
            >
                {data?.map((item) => (
                    <Option key={item.id} value={item.id}>
                        <img
                            src={item.url}
                            alt=''
                            className='w-10 inline-flex mr-2'
                        />
                        <span>{item.value}</span>
                    </Option>
                ))}
            </Select>
        </Form.Item>
    );
}
