export const CreateOptions = ({ options, visible, onClose }) => {
    const handleClick = (fn: any) => {
        fn();
        onClose();
    };
    if (!visible) return null;
    return (
        <div className='flex flex-col space-y-2 border p-2 rounded'>
            {options.map(({ title, onClick }: any) => (
                <Option
                    key={title}
                    title={title}
                    onClick={() => handleClick(onClick)}
                />
            ))}
        </div>
    );
};

const Option = ({ title, onClick }: any) => {
    return <button onClick={onClick}>{title}</button>;
};
