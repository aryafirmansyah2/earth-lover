import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'
import Container from '../../components/common/Container'
import Input from '../../components/common/Input'

import { FcGoogle } from 'react-icons/fc'
import MainButton from '../../components/common/Button/Main'
import Layout from '../../components/Layout'

const CaseHeader = tw.div`w-full h-24 bg-[#16BF78] flex items-center justify-center text-4xl font-bold text-white`
const FormInput = tw.div`flex flex-col justify-items-start `
const TitleInput = tw.div`my-3`
const Title = tw.p`text-lg font-Light`
const ButtonLink = tw.div`w-full flex items-center justify-center flex-col `
const ForgetPassword = tw.a`text-[#16BF78] text-lg font-Reguler`
const CaseOr = tw.h3`w-full text-center border-b-2 border-[#D0D0D0] leading-[0.1em] mt-8`
const LineRL = tw.span`bg-[#FAFAFA] px-3 text-[#D0D0D0]`
const CircleIcon = tw.span` p-2 rounded-lg border-4 border-[#16BF78] mt-10`
const TextRegister = tw.h2`mt-7`
const LinkRegiter = tw.a`text-[#16BF78] ml-2 border-b-[1px] border-[#16BF78] cursor-pointer`
const Screen = tw.div`w-full h-screen`

const iconStyles =
{
    fontSize: "3rem",
};

const Login = () => {
    // const navigate = useNavigate()
    const [passwordInput, setPasswordInput] = useState("");
    const [usernameInput, setUsernameInput] = useState("");

    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value)
    }
    const handleUsernameChange = (e) => {
        setUsernameInput(e.target.value)
    }

    return (
        <>
            <Layout>
                <Screen>
                    <CaseHeader>
                        Login
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
                                    Password
                                </Title>
                                <Input placeholder='enter your password' type={"password"} onChange={handlePasswordChange} value={passwordInput} name="password" />
                            </TitleInput>
                        </FormInput>
                        <Link to="/home">
                            <MainButton>
                                Login
                            </MainButton>
                        </Link>
                        <ButtonLink>
                            <ForgetPassword>
                                Lupa Password ?
                            </ForgetPassword>
                            <CaseOr>
                                <LineRL >
                                    Or
                                </LineRL>
                            </CaseOr>
                            <CircleIcon>
                                <FcGoogle style={iconStyles} />
                            </CircleIcon>
                            <TextRegister>
                                belum memiliki akun?
                                <LinkRegiter >
                                    <Link to="/register">
                                        klik disini
                                    </Link>
                                </LinkRegiter>
                            </TextRegister>
                        </ButtonLink>
                    </Container>
                </Screen>
            </Layout>
                 </>
    )
}

export default Login