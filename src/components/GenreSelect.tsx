import { Controller } from 'react-hook-form';
import Select from 'react-select';

const options = [
    {
        value: 'adventure',
        label: 'Adventure',
    },
    {
        value: 'animation',
        label: 'Animation',
    },
    {
        value: 'comedy',
        label: 'Comedy',
    },
    {
        value: 'crime',
        label: 'Crime',
    },
    {
        value: 'fiction',
        label: 'Fiction',
    },
    {
        value: 'sci-fi',
        label: 'Sci-Fi',
    },
    {
        value: 'thriller',
        label: 'Thriller',
    },
    {
        value: 'horror',
        label: 'Horror',
    },
    {
        value: 'other',
        label: 'Other',
    },
];

export default function GenreSelect({ name, control }: any) {
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
