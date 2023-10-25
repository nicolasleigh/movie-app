import { useState } from 'react';
import { useToast } from '../../hooks';
import MovieSelector from '../MovieSelector';
import ModalContainer from './ModalContainer';
import { uploadMovie } from '../../api/movie';
import { MovieForm } from '../form/MovieForm';

export default function MovieUpload({ visible, onClose }) {
    const [videoSelected, setVideoSelected] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploaded, setUploaded] = useState(false);
    const { notify } = useToast();

    const handleTypeError = (error: any) => {
        notify('error', error);
    };

    const handleUploadVideo = async (formData: any) => {
        const response = await uploadMovie(formData, setUploadProgress);
        setUploaded(true);
    };

    const handleChange = (file: any) => {
        const formData = new FormData();
        formData.append('video', file);
        setVideoSelected(true);
        handleUploadVideo(formData);
    };
    return (
        <ModalContainer>
            <MovieSelector
                visible={true}
                handleChange={handleChange}
                onTypeError={handleTypeError}
            />
            <MovieForm />
        </ModalContainer>
    );
}
