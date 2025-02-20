import { FileUploader } from 'react-drag-drop-files';

export default function MovieSelector({ visible, handleChange, onTypeError }) {
    if (!visible) return null;
    return (
        <div>
            <FileUploader
                handleChange={handleChange}
                onTypeError={onTypeError}
                type={['mp4', 'avi', 'mkv']}
            ></FileUploader>
        </div>
    );
}
