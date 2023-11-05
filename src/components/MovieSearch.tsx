import AsyncSelect from 'react-select/async';
import { Controller } from 'react-hook-form';
import debounce from 'lodash.debounce';
import { searchMovieByTitle } from '../api/movie';

export default function MovieSearch({ name, control }: any) {
    const loadOptions = debounce((inputValue, callback) => {
        searchMovieByTitle(inputValue)
            .then(({ results }) =>
                callback(
                    results.map((e: any) => ({
                        id: e.id,
                        label: e.title,
                        value: e.id,
                    }))
                )
            )
            .catch((error) => console.log(error)); //TODO
    }, 500);

    return (
        <Controller
            name={name}
            control={control}
            // rules={{ required: true }}
            render={({ field }) => (
                <AsyncSelect
                    inputId={name}
                    {...field}
                    classNamePrefix='select'
                    loadOptions={loadOptions}
                    isMulti
                />
            )}
        />
    );
}
