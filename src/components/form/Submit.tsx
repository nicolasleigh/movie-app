import { FaSpinner } from 'react-icons/fa';

interface Props {
    value: string;
    busy?: boolean;
}

export default function Submit({ value, busy = false }: Props) {
    return (
        <button className='w-full rounded bg-blue-400 hover:bg-opacity-80 flex items-center justify-center transition font-semibold text-lg p-2 '>
            {busy ? <FaSpinner className='animate-spin' /> : value}
        </button>
    );
}
