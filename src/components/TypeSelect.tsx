import { Controller } from 'react-hook-form';
import Select from 'react-select';

const options = [
    {
        value: 'tv',
        label: 'TV Series',
    },
    {
        value: 'movie',
        label: 'Movie',
    },
    {
        value: 'other',
        label: 'Other',
    },
];

export default function TypeSelect({ name, control }: any) {
    return (
        <Controller
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <Select {...field} classNamePrefix='select' options={options} />
            )}
        />
    );
}
