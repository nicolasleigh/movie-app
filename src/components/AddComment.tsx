export default function AddComment({ content, handleChange }) {
    return (
        <textarea
            value={content}
            onChange={handleChange}
            className='w-full h-24 border-2 p-2 dark:text-white text-primary rounded outline-none bg-transparent resize-none'
        ></textarea>
    );
}
