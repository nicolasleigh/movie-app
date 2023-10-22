import Container from '../Container';
import CustomLink from '../form/CustomLink';
import FormContainer from '../form/FormContainer';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import Title from '../form/Title';

export default function SignIn() {
    return (
        <div>
            <FormContainer>
                <Container>
                    <form action=''>
                        <Title>Sign in</Title>
                        <FormInput />
                        <FormInput />
                        <Submit />
                        <div>
                            <CustomLink></CustomLink>
                            <CustomLink></CustomLink>
                        </div>
                    </form>
                </Container>
            </FormContainer>
        </div>
    );
}
