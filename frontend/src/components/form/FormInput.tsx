interface Props {
    name: string;
    placeholder: string;
    label: string;
    [x: string]: any;
}

export default function FormInput({
    name,
    placeholder,
    label,
    ...rest
}: Props) {
    return (
        <div className='flex flex-col'>
            <label htmlFor={name} className='font-semibold'>
                {label}
            </label>
            <input
                placeholder={placeholder}
                id={name}
                name={name}
                {...rest}
                className='rounded bg-transparent border-2 text-lg outline-none focus:border-dark-gray transition p-1'
            />
        </div>
    );
}
