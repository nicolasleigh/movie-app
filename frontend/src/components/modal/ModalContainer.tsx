import { Button } from 'antd';

// https://stackoverflow.com/questions/25874001/how-to-put-scroll-bar-only-for-modal-body
export default function ModalContainer({ children, visible, onClose }) {
    if (!visible) return null;
    return (
        <div className=' no-scrollbar fixed overflow-y-auto scroll-m-0   inset-0 flex items-center justify-center  bg-yellow-50 bg-opacity-50 backdrop-blur-sm z-0'>
            <div className='mt-10  !overflow-y-initial  z-50 top-0  fixed custom-scroll-bar '>
                {children}
            </div>
        </div>
    );
}
