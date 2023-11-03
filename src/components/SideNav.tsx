export default function SideNav() {
    const navItemStyle =
        'cursor-pointer hover:bg-slate-400 w-10/12 px-4 py-2 rounded transition';
    return (
        <nav className=' bg-stone-950  w-1/5  text-white flex flex-col items-center space-y-4 py-20  '>
            <div className={navItemStyle}>Home</div>
            <div className={navItemStyle}>Movie</div>
            <div className={navItemStyle}>Actor</div>
            <div className={navItemStyle}>User</div>
            <div className={navItemStyle}>Setting</div>
        </nav>
    );
}
