import MovieSelector from '../MovieSelector';
import ModalContainer from './ModalContainer';

export default function MovieUpload({ visible, onClose }) {
    return (
        <ModalContainer>
            <MovieSelector />
        </ModalContainer>
    );
}
