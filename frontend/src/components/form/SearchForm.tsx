import { useState, FormEvent } from 'react';

export default function SearchForm({ placeholder, onSubmit }) {
    const [value, setValue] = useState('');
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(value);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                className='border-2 p-2 rounded bg-light-gray text-white bg-transparent'
                placeholder={placeholder}
                onChange={({ target }) => setValue(target.value)}
                value={value}
            />
        </form>
    );
}
