import React, { useState } from 'react'
import { Link } from "react-router-dom"
import tw from 'twin.macro'
import Container from '../../components/common/Container'
import Input from '../../components/common/Input'

import { FcGoogle } from 'react-icons/fc'
import MainButton from '../../components/common/Button/Main'
import { AiFillEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import Layout from '../../components/Layout'

const CaseHeader = tw.div`w-full h-24 bg-[#16BF78] flex items-center justify-center text-4xl font-Bold text-white`
const FormInput = tw.div`flex flex-col justify-items-start `
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

const iconStyles =
{
    fontSize: "3rem",
};
const iconEye =
{
    fontSize: "1.5rem",
};

const Register = () => {

    const [typePassword, setTypePassword] = useState("password")
    const [passwordInput, setPasswordInput] = useState("");
    const [usernameInput, setUsernameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");

    const HandleTypePassword = () => {
        setTypePassword(!typePassword)
    }
    const handleUsernameChange = (e) => {
        setUsernameInput(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmailInput(e.target.value)
    }

    return (
        <>
            <Layout>
                <CaseHeader>
                    Register
                </CaseHeader>
                <Container>
                    <FormInput>
                        <TitleInput>
                            <Title>
                                Username
                            </Title>
                            <Input placeholder='enter your username' onChange={handleUsernameChange} value={usernameInput} name="username" />
                        </TitleInput>
                        <TitleInput>
                            <Title>
                                Email
                            </Title>
                            <Input placeholder='enter your email' onChange={handleEmailChange} value={emailInput} name="email" />
                        </TitleInput>
                        <TitleInput>
                            <Title>
                                Password
                            </Title>
                            <CaseInputPw >
                                <Input placeholder='enter your password' type={typePassword ? "password" : "text"} onChange={handlePasswordChange} value={passwordInput} name="password" />
                                <ToggleEye onClick={HandleTypePassword}>{typePassword ? <AiOutlineEyeInvisible style={iconEye} /> : <AiFillEye style={iconEye} />}</ToggleEye>
                            </CaseInputPw>
                        </TitleInput>
                        <TitleInputCheck >
                            <InputCheckBox tw='w-auto' type='checkbox' />
                            <p>Saya setuju dengan syarat & ketentuan dan kebijakan privasi & </p>
                        </TitleInputCheck>
                    </FormInput>
                    <Link to="/">
                        <MainButton>
                            Reagister
                        </MainButton>
                    </Link>
                    <ButtonLink>
                        <CaseOr>
                            <LineRL>
                                Or
                            </LineRL>
                        </CaseOr>
                        <CircleIcon>
                            <FcGoogle style={iconStyles} />
                        </CircleIcon>
                        <TextRegister>
                            sudah memiliki akun?
                            <LinkRegiter>
                                <Link to="/">
                                    klik disini
                                </Link>
                            </LinkRegiter>
                        </TextRegister>
                    </ButtonLink>
                </Container>
            </Layout>
        </>
    )
}

export default Register