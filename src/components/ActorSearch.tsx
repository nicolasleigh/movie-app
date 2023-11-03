import { useState, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
// import { ColourOption, colourOptions } from '../data';
import { searchActor } from '../api/actor';
import { Controller } from 'react-hook-form';
import Select from 'react-select';

let timeout: ReturnType<typeof setTimeout> | null;
const arr = [];
// const filterColors = (inputValue: string) => {
//     return colourOptions.filter((i) =>
//         i.label.toLowerCase().includes(inputValue.toLowerCase())
//     );
// };

// const promiseOptions = (inputValue: string) =>
//     new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(filterColors(inputValue));
//         }, 1000);
//     });

export default function ActorSearch({ name, control }) {
    const [inputValue, setValue] = useState('');
    // const [data, setData] = useState([]);
    const [options, setOptions] = useState([]);

    const fetch = (value) => {
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }

        const search = async () => {
            const { results } = await searchActor(value);
            results.map((item: any) => {
                return arr.push({
                    value: item.avatar,
                    label: item.name,
                });
            });
            // setData(data);
            setOptions(arr);

            // console.log('data:', data);
        };
        if (value) {
            timeout = setTimeout(search, 300);
        } else {
            // setData([]);
        }
    };

    // const options = [
    //     { value: 'http://fake1.com', label: 'Jim Smith' },
    //     { value: 'http://fake2.com', label: 'Ball Andy' },
    //     { value: 'http://fake3.com', label: 'Cat Green' },
    // ];

    const loadOptions = async (inputValue, callback) => {
        // fetch(inputValue);
        // await searchActor(inputValue).then(({ results }) =>
        //     results.map((e) => {
        //         return arr.push({
        //             value: e.avatar,
        //             label: e.name,
        //         });
        //     })
        // );
        // setOptions(arr);
        const { results } = await searchActor(inputValue);
        callback(
            results.map((e) => ({
                label: e.name,
                value: e.avatar,
            }))
        );
    };

    useEffect(() => {
        console.log('arr:', arr);
        console.log('options:', options);
    }, [options]);

    const handleInputChange = (value) => {
        console.log('handleInputChange', value);
        setValue(value);
    };

    return (
        <Controller
            name={name}
            // defaultValue={options.map((c) => c.value)}
            control={control}
            render={({ field }) => (
                <AsyncSelect
                    {...field}
                    classNamePrefix='select'
                    // isMulti
                    // cacheOptions
                    // onChange={() => console.log('change')}
                    // options={options}
                    // defaultOptions
                    // loadOptions={promiseOptions}
                    loadOptions={loadOptions}
                    // onInputChange={handleInputChange}
                    // inputRef={ref}
                    // value={options.filter((c) => value.includes(c.value))}
                    // onChange={(val) => onChange(val.map((c) => c.value))}
                    options={options}
                    isMulti
                />
            )}
        />
    );
}
