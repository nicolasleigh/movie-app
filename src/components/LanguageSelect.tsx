import { Controller } from 'react-hook-form';
import Select from 'react-select';

const options = [
    {
        value: 'chinese',
        label: 'Chinese',
    },
    {
        value: 'english',
        label: 'English',
    },
    {
        value: 'french',
        label: 'French',
    },
    {
        value: 'other',
        label: 'Other',
    },
];

export default function LanguageSelect({ name, control }: any) {
    return (
        <Controller
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <Select
                    {...field}
                    inputId={name}
                    classNamePrefix='select'
                    options={options}
                />
            )}
        />
    );
}
