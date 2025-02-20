import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { Controller } from 'react-hook-form';

export const DatePick = ({ control, name, className }) => {
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
                    onChange={(date) => field.onChange(date)}
                    showYearPicker
                    dateFormat='yyyy'
                    yearItemNumber={4}
                    wrapperClassName='datePicker'
                    className={className}
                />
            )}
        />
    );
};
