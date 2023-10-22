import Container from '../Container';
import FormContainer from '../form/FormContainer';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import Title from '../form/Title';

export default function ResetPass() {
    return (
        <div>
            <FormContainer>
                <Container>
                    <form action=''>
                        <Title></Title>
                        <FormInput />
                        <FormInput />
                        <Submit />
                    </form>
                </Container>
            </FormContainer>
        </div>
    );
}
