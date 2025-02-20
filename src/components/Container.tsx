export default function Container({ children, className }) {
    return (
        <div className={className + ' max-w-screen-xl mx-auto'}>{children}</div>
    );
}
