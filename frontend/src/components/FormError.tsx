export default function FormError({errors,message}) {
    return (
        <div>
            {errors && (
                <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
                    <span className='font-medium'>Oops!</span> {message}
                </p>
            )}
        </div>
    );
}
