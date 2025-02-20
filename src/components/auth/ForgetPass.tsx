import { FormEvent, useState } from 'react';
import { modalStyle } from '../../utils/theme';
import Container from '../Container';
import CustomLink from '../form/CustomLink';
import FormContainer from '../form/FormContainer';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import Title from '../form/Title';
import { isValidEmail } from '../../utils/helper';
import { useToast } from '../../hooks';
import { forgetPassword } from '../../api/auth';

export default function ForgetPass() {
    const [email, setEmail] = useState('');
    const { notify } = useToast();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!isValidEmail) return notify('error', 'Invalid Email!');
        const response = await forgetPassword(email);
        console.log('forgetPassword response: ', response);
        if (response.error) return notify('error', response.error);
    };

    const handleChange = (e: FormEvent) => {
        const { value } = e.target as HTMLInputElement;
        setEmail(value);
    };

    return (
        <div>
            <FormContainer>
                <Container className=''>
                    <form onSubmit={handleSubmit} className={' ' + modalStyle}>
                        <Title>Please enter your email</Title>
                        <FormInput
                            name='email'
                            label='Email'
                            placeholder='tom@email.com'
                            value={email}
                            onChange={handleChange}
                        />
                        <Submit value='Send Link' />
                        <div className='flex justify-between items-center'>
                            <CustomLink to='/auth/sign-in'>Sign in</CustomLink>
                            <CustomLink to='/auth/sign-up'>Sign up</CustomLink>
                        </div>
                    </form>
                </Container>
            </FormContainer>
        </div>
    );
}
