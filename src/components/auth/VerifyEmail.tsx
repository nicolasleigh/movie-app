import { useState, FormEvent, useRef, useEffect, KeyboardEvent } from 'react';
import { modalStyle } from '../../utils/theme';
import Container from '../Container';
import FormContainer from '../form/FormContainer';
import Submit from '../form/Submit';
import Title from '../form/Title';

let currentIndex = 0;

export default function VerifyEmail() {
    const [otp, setOtp] = useState(new Array(4).fill(''));
    const [activeIndex, setActiveIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const focusPrev = (currentIndex: number) => {
        setActiveIndex(currentIndex - 1);
    };

    const focusNext = (currentIndex: number) => {
        setActiveIndex(currentIndex + 1);
    };

    const handleKeyDown = (
        e: KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        currentIndex = index;
        if (e.key === 'Backspace') focusPrev(currentIndex);
    };

    const handleOtpChange = (e: FormEvent) => {
        const { value } = e.target as HTMLInputElement;
        const newOtp = [...otp];
        newOtp[currentIndex] = value.substring(value.length - 1, value.length);

        if (value) {
            focusNext(currentIndex);
        } else focusPrev(currentIndex);

        setOtp(newOtp);
    };
    const handleSubmit = async () => {};
    const handleResendOTP = async () => {};

    useEffect(() => {
        inputRef.current?.focus();
    }, [activeIndex]);

    return (
        <div>
            <FormContainer>
                <Container className=''>
                    <form onSubmit={handleSubmit} className={' ' + modalStyle}>
                        <Title>
                            Please enter the OTP to verify your account
                        </Title>
                        <div className='flex space-x-2 justify-center items-center'>
                            {otp.map((_, index) => (
                                <input
                                    key={index}
                                    ref={
                                        activeIndex === index ? inputRef : null
                                    }
                                    value={otp[index]}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    onChange={handleOtpChange}
                                    type='number'
                                    className='w-12 h-12 border-2 rounded bg-transparent outline-none text-xl font-semibold text-center'
                                />
                            ))}
                        </div>
                        <div>
                            <Submit value='Verify Email' />
                            <button
                                type='button'
                                onClick={handleResendOTP}
                            >{`I don't have OTP`}</button>
                        </div>
                    </form>
                </Container>
            </FormContainer>
        </div>
    );
}
