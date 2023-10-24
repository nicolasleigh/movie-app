import { FormEvent, useState, useEffect } from 'react';
import { modalStyle } from '../../utils/theme';
import Container from '../Container';
import FormContainer from '../form/FormContainer';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import Title from '../form/Title';
import { useToast } from '../../hooks';
import { resetPassword, verifyPassRestToken } from '../../api/auth';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

const passwordLength = import.meta.env.VITE_PASS_LENGTH;

export default function ResetPass() {
    const [password, setPassword] = useState({
        passOne: '',
        passTwo: '',
    });
    const [isVerifying, setIsVerifying] = useState(true);
    const [isValid, setIsValid] = useState(false);
    const { notify } = useToast();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const token = searchParams.get('token');
    const id = searchParams.get('id');

    useEffect(() => {
        isValidToken();
    }, []);

    const isValidToken = async () => {
        if (!token || !id) return;
        const { error, valid } = await verifyPassRestToken(token, id);
        setIsVerifying(false);
        if (error) {
            navigate('/auth/reset-password', { replace: true });
            return notify('error', error);
        }
        if (!valid) {
            navigate('/auth/reset-password', { replace: true });
            setIsValid(false);
            return notify('error', 'Invalid token!');
        }
        setIsValid(true);
    };

    const validResetPass = () => {
        if (!password.passOne.trim())
            return notify('error', 'Password is missing!');

        if (password.passOne < passwordLength)
            return notify(
                'error',
                `Password must be at least ${passwordLength} characters!`
            );
        if (password.passOne !== password.passTwo)
            return notify('error', 'Password does not match!');
    };

    const handleChange = (e: FormEvent) => {
        const { value, name } = e.target as HTMLInputElement;
        setPassword({ ...password, [name]: value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        validResetPass();
        const response = await resetPassword({
            newPassword: password.passOne,
            userId: id,
        });
        if (response.error) return notify('error', response.error);
    };

    return (
        <div>
            <FormContainer>
                <Container className=''>
                    {isVerifying ? (
                        <Verifying />
                    ) : isValid ? (
                        <ResetPassForm
                            handleSubmit={handleSubmit}
                            password={password}
                            handleChange={handleChange}
                        />
                    ) : (
                        <NotValid />
                    )}
                </Container>
            </FormContainer>
        </div>
    );
}

const Verifying = () => {
    return (
        <div className='flex flex-col space-y-4 justify-center items-center text-4xl '>
            <h1>Please wait, we are verifying your account.</h1>
            <FaSpinner className='animate-spin' />
        </div>
    );
};

const ResetPassForm = ({ handleSubmit, password, handleChange }: any) => {
    return (
        <form onSubmit={handleSubmit} className={' ' + modalStyle}>
            <Title>Enter New Password</Title>
            <FormInput
                name='passOne'
                label='New password'
                placeholder='******'
                value={password.passOne}
                onChange={handleChange}
            />
            <FormInput
                name='passTwo'
                label='Confirm password'
                placeholder='******'
                value={password.passTwo}
                onChange={handleChange}
            />
            <Submit value='Confirm' />
        </form>
    );
};

const NotValid = () => {
    return (
        <h1 className='text-xl font-semibold'>
            Sorry, the token is not valid!
        </h1>
    );
};
