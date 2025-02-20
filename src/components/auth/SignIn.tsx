import { useState, FormEvent } from 'react';
import Container from '../Container';
import CustomLink from '../form/CustomLink';
import FormContainer from '../form/FormContainer';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import Title from '../form/Title';
import { useAuth, useToast } from '../../hooks';
import { modalStyle } from '../../utils/theme';
import { validateUserInfo } from '../../utils/helper';

export default function SignIn() {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    });

    const { authInfo, login } = useAuth();
    const { notify } = useToast();

    const handleChange = (e: FormEvent) => {
        const { value, name } = e.target as HTMLInputElement;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const { ok, error } = validateUserInfo(userInfo);
        if (!ok) return notify('error', error);
        login(userInfo.email, userInfo.password);
    };
    return (
        <div>
            <FormContainer>
                <Container className=''>
                    <form
                        onSubmit={handleSubmit}
                        className={'w-72 ' + modalStyle}
                    >
                        <Title>Sign in</Title>
                        <FormInput
                            name='email'
                            value={userInfo.email}
                            onChange={handleChange}
                            placeholder='tom@email.com'
                            label='Email'
                        />
                        <FormInput
                            name='password'
                            value={userInfo.password}
                            onChange={handleChange}
                            placeholder='******'
                            label='Password'
                            type='password'
                        />
                        <Submit value='Sign in' busy={authInfo.isPending} />
                        <div className='flex justify-between'>
                            <CustomLink to='/auth/forget-password'>
                                Forget password
                            </CustomLink>
                            <CustomLink to='/auth/sign-up'>Sign up</CustomLink>
                        </div>
                    </form>
                </Container>
            </FormContainer>
        </div>
    );
}
