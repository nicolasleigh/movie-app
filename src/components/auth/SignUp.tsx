import { FormEvent, useState } from 'react';
import Container from '../Container';
import CustomLink from '../form/CustomLink';
import FormContainer from '../form/FormContainer';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import Title from '../form/Title';
import { createUser } from '../../api/auth';
import { useToast } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { modalStyle } from '../../utils/theme';
import { validateUserInfo } from '../../utils/helper';

export default function SignUp() {
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
    });

    const { notify } = useToast();
    const navigate = useNavigate();

    const handleChange = (e: FormEvent) => {
        const { value, name } = e.target as HTMLInputElement;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const { ok, error } = validateUserInfo(userInfo);
        if (!ok) return notify('error', error);

        const response = await createUser(userInfo);
        if (response.error) return notify('error', response.error);

        navigate('/auth/verify-email', {
            replace: true,
            state: { user: response.user },
        });
    };
    return (
        <div>
            <FormContainer>
                <Container className=''>
                    <form
                        onSubmit={handleSubmit}
                        className={'w-72 ' + modalStyle}
                    >
                        <Title>Sign up</Title>
                        <FormInput
                            name='name'
                            placeholder='User name'
                            label='Name'
                            value={userInfo.name}
                            onChange={handleChange}
                        />
                        <FormInput
                            name='email'
                            placeholder='tom@email.com'
                            label='Email'
                            value={userInfo.email}
                            onChange={handleChange}
                        />
                        <FormInput
                            name='password'
                            placeholder='******'
                            label='Password'
                            value={userInfo.password}
                            onChange={handleChange}
                        />
                        <Submit value='Sign up' />
                        <div className='flex justify-between'>
                            <CustomLink to='/auth/forget-password'>
                                Forget password
                            </CustomLink>
                            <CustomLink to='/auth/sign-in'>Sign in</CustomLink>
                        </div>
                    </form>
                </Container>
            </FormContainer>
        </div>
    );
}
