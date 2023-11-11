import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import AsyncSelect from 'react-select/async';
import { components, type DropdownIndicatorProps } from 'react-select';
import { searchMovieByTitle } from '../api/movie';
import { Controller, useForm } from 'react-hook-form';
import MovieInfo from '../pages/MovieInfo';
import { AiOutlineCheck } from 'react-icons/ai';

export default function HeaderSearch() {
    const [showMovieInfo, setShowMovieInfo] = useState(false);
    const [movieId, setMovieId] = useState(false);
    const { handleSubmit, control } = useForm();
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

    const handleOnSubmit = ({ movie }: any) => {
        setMovieId(movie.id);
        setShowMovieInfo(true);
    };

    const DropdownIndicator: React.FC<DropdownIndicatorProps> = (props) => {
        return (
            <components.DropdownIndicator {...props}>
                <button type='submit'>
                    <AiOutlineCheck />
                </button>
            </components.DropdownIndicator>
        );
    };

    return (
        <>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <Controller
                    name='movie'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <AsyncSelect
                            inputId='movie'
                            {...field}
                            classNamePrefix='header-select'
                            loadOptions={loadOptions}
                            components={{ DropdownIndicator }}
                            placeholder={'Search Movie...'}
                        />
                    )}
                />
            </form>
            {showMovieInfo ? <MovieInfo movieId={movieId} /> : null}
        </>
    );
}
