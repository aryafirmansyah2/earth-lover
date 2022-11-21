import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import tw from 'twin.macro'
import Container from '../../components/common/Container'
import Input from '../../components/common/Input'

import { FcGoogle } from 'react-icons/fc'
import MainButton from '../../components/common/Button/Main'
import { AiFillEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import Layout from '../../components/Layout'

const CaseHeader = tw.div`w-full h-24 bg-[#16BF78] flex items-center justify-center text-4xl font-Bold text-white`
const FormInput = tw.form`flex flex-col justify-items-start `
const TitleInput = tw.div`my-3`
const Title = tw.p`text-lg font-Light`
const ButtonLink = tw.div`w-full flex items-center justify-center flex-col `
const CaseOr = tw.h3`w-full text-center border-b-2 border-[#D0D0D0] leading-[0.1em] mt-8`
const LineRL = tw.span`bg-[#FAFAFA] px-3 text-[#D0D0D0]`
const CircleIcon = tw.span` p-2 rounded-lg border-4 border-[#16BF78] mt-10`
const TextRegister = tw.h2`mt-7`
const LinkRegiter = tw.a`text-[#16BF78] ml-2 border-b-[1px] border-[#16BF78]`
const InputCheckBox = tw.input` w-10 h-10 mr-5`
const TitleInputCheck = tw.div`flex mt-5`
const CaseInputPw = tw.div`w-full relative items-center justify-end flex`
const ToggleEye = tw.button`absolute mt-2 mr-5`
const Validation = tw.p`text-red-500 mt-2`



// const iconStyles =
// {
//     fontSize: "3rem",
// };
const iconEye =
{
    fontSize: "1.5rem",
};

const Register = () => {

    const [typePassword, setTypePassword] = useState("password")
    const [passwordInput, setPasswordInput] = useState("");
    const [usernameInput, setUsernameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [pinInput] = useState("111111");
    const [phoneInput] = useState("000000000000");
    const [validation, setValidation] = useState()
    const navigate = useNavigate()

    // useEffect(() => {
    //     if (localStorage.getItem("token") && localStorage.getItem('role') === 'customer' ) {
    //         navigate('/home')
    //     }else{
    //         navigate('/home-pckr')
    //     }
    // }, []);

    const HandleTypePassword = () => {
        setTypePassword(!typePassword)
    }

    const handlerSubmit = (e) => {
        e.preventDefault();

        let Data = {
            'email': emailInput,
            'password': passwordInput,
            'name': usernameInput,
            'phone_number': phoneInput,
            'pin': pinInput,
        }

        axios.post("https://earthlover.inagata.com/api/customer/register", Data)
            .then((res) => {
                console.log(res.data)
                navigate("/")
            })
            .catch((error) => {
                console.log(error.response.data)
                setValidation(error.response.data)
            })
    }

    return (
        <>
            <Layout>
                <CaseHeader>
                    Reagister
                </CaseHeader>
                <Container>
                    <FormInput onSubmit={handlerSubmit}>
                        <TitleInput>
                            <Title>Username</Title>
                            <Input placeholder='enter your username' type="text" onChange={(e) => setUsernameInput(e.target.value)} value={usernameInput} />
                            {
                                validation && (
                                    <Validation>{validation.error.name}</Validation>
                                )
                            }
                        </TitleInput>
                        <TitleInput>
                            <Title>Email</Title>
                            <Input placeholder='enter your username' type="email" onChange={(e) => setEmailInput(e.target.value)} value={emailInput} />
                            {
                                validation && (
                                    <Validation>{validation.error.email}</Validation>
                                )
                            }
                            {
                                validation && (
                                    <Validation>{validation.error}</Validation>
                                )
                            }
                        </TitleInput>
                        <TitleInput>
                            <Title>Username</Title>
                            <CaseInputPw>
                                <Input placeholder='enter your username' type={typePassword ? "password" : "text"} onChange={(e) => setPasswordInput(e.target.value)} value={passwordInput} />
                                <ToggleEye onClick={HandleTypePassword}>{typePassword ? <AiOutlineEyeInvisible style={iconEye} /> : <AiFillEye style={iconEye} />}</ToggleEye>
                            </CaseInputPw>
                            {
                                validation && (
                                    <Validation>{validation.error.password}</Validation>
                                )
                            }
                        </TitleInput>
                        <TitleInputCheck >
                            <InputCheckBox tw='w-auto' type='checkbox' />
                            <p>Saya setuju dengan syarat & ketentuan dan kebijakan privasi & </p>
                        </TitleInputCheck>
                        <MainButton type='submit'>Reagister</MainButton>
                    </FormInput>
                    <ButtonLink>
                        <CaseOr>
                            <LineRL>Or</LineRL>
                        </CaseOr>
                        <CircleIcon><FcGoogle style={{fontSize:"30px"}}/></CircleIcon>
                        <TextRegister>Sudah memiliki akun? <LinkRegiter href='/'>klik disini</LinkRegiter></TextRegister>
                    </ButtonLink>
                </Container>
            </Layout>

            
        </>
    )
}

export default Register