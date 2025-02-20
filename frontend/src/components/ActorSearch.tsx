import AsyncSelect from 'react-select/async';
import { searchActor } from '../api/actor';
import { Controller } from 'react-hook-form';
import debounce from 'lodash.debounce';

export default function ActorSearch({ name, control }: any) {
    const loadOptions = debounce((inputValue, callback) => {
        searchActor(inputValue)
            .then(({ results }) =>
                callback(
                    results.map((e: any) => ({
                        id: e.id,
                        label: e.name,
                        value: e.avatar,
                    }))
                )
            )
            .catch((error) => console.log(error)); //TODO
    }, 500);

    return (
        <Controller
            name={name}
            control={control}
            rules={{ required: true }}
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
