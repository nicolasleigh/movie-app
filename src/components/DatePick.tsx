import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { Controller, UseControllerProps, useController } from 'react-hook-form';

// const renderYearContent = (year) => {
//     const tooltipText = `Tooltip for year: ${year}`;
//     return <span title={tooltipText}>{year}</span>;
// };

export const DatePick = ({ control, name, className }) => {
    const [startDate, setStartDate] = useState(new Date());

    // const { field } = useController(props);
    // const { field } = useController({
    //     name,
    //     control,
    // });
    return (
        <Controller
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <DatePicker
                    autoComplete='off'
                    id='releaseYear'
                    selected={field.value}
                    // selected={startDate}
                    onChange={(date) => field.onChange(date)}
                    // onChange={(date) => setStartDate(date)}
                    showYearPicker
                    dateFormat='yyyy'
                    yearItemNumber={4}
                    wrapperClassName='datePicker'
                    // className='rounded w-full text-black'
                    className={className}
                />
            )}
        />
    );
};
