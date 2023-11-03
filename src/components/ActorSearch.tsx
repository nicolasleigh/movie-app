import { useState, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
// import { ColourOption, colourOptions } from '../data';
import { searchActor } from '../api/actor';
import { Controller } from 'react-hook-form';
import Select from 'react-select';

let timeout: ReturnType<typeof setTimeout> | null;

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
    const [data, setData] = useState([]);
    // const [options, setOptions] = useState([{}]);

    const fetch = (e) => {
        const { value } = e.target;
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }

        const search = async () => {
            const arr = [{}];
            const { results } = await searchActor(value);
            const data = results.map((item: any) => {
                return arr.push({
                    value: item.avatar,
                    label: item.name,
                });
            });
            setOptions(arr);
            setData(data);
            console.log(arr);
            console.log('data:', data);
        };
        if (value) {
            timeout = setTimeout(search, 300);
        } else {
            setData([]);
        }
    };

    const options = [
        { value: '1', label: 'Apple' },
        { value: '2', label: 'Ball' },
        { value: '3', label: 'Cat' },
    ];

    return (
        <Controller
            name={name}
            defaultValue={options.map((c) => c.value)}
            control={control}
            render={({ field: { onChange, value, ref } }) => (
                <Select
                    classNamePrefix='select'
                    styles={{
                        input: (base) => ({
                            ...base,
                            color: 'black',
                            'input:focus': {
                                boxShadow: 'none',
                            },
                        }),
                    }}
                    // isMulti
                    // cacheOptions
                    // onChange={() => console.log('change')}
                    // options={options}
                    // defaultOptions
                    // loadOptions={promiseOptions}
                    inputRef={ref}
                    value={options.filter((c) => value.includes(c.value))}
                    onChange={(val) => onChange(val.map((c) => c.value))}
                    options={options}
                    isMulti
                />
            )}
        />
    );
}
