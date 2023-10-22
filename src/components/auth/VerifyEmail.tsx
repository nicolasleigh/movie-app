import Container from '../Container';
import FormContainer from '../form/FormContainer';
import Submit from '../form/Submit';
import Title from '../form/Title';

export default function VerifyEmail() {
    return (
        <div>
            <FormContainer>
                <Container>
                    <form action=''>
                        <Title></Title>
                        <div></div>
                        <Submit />
                    </form>
                </Container>
            </FormContainer>
        </div>
    );
}
