import { useForm } from 'react-hook-form';

interface Props {
    name: string;
    placeholder: string;
    label: string;
}

export default function FormInput({ name, placeholder, label }: Props) {
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input
                {...register(name, { required: true })}
                placeholder={placeholder}
            />
        </>
    );
}
