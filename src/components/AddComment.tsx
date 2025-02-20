export default function AddComment({ content, handleChange }) {
  return (
    <textarea
      value={content}
      onChange={handleChange}
      className='w-full h-24   p-2 text-white rounded  bg-transparent resize-none'
    ></textarea>
  );
}
