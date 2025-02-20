import ActorForm from '../form/ActorForm';
import ModalContainer from './ModalContainer';

export default function ActorUpload({ visible, onClose }) {
    return (
        <ModalContainer visible={visible} onClose={onClose}>
            <ActorForm onClose={onClose} />
        </ModalContainer>
    );
}
