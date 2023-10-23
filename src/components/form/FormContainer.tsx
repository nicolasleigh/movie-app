export default function FormContainer({ children }) {
    return (
        <div className='bg-blue-500 flex justify-center items-center fixed inset-0 '>
            {children}
        </div>
    );
}
