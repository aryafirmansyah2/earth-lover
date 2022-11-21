import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'
import tw from 'twin.macro'
import Swal from 'sweetalert2';
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
const Validation = tw.p`text-red-500 mt-2`

const iconStyles =
{
    fontSize: "3rem",
};

const LoginPckr = () => {
    // const navigate = useNavigate()
    const [passwordInput, setPasswordInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    // const [data, setData] = useState()

    const navigate = useNavigate();

    const [validation, setValidation] = useState()
    // const [info, setInfo] = useState()

    useEffect(() => {
        if (localStorage.getItem("token")){
            if(localStorage.getItem('role') === 'picker' ) {
                navigate('/home-pckr')
            }else if( localStorage.getItem('role') === 'customer' ){
                navigate('/home')
            }
        }
    });

    const LoginHandler = (e) => {
        e.preventDefault();

        let Data = {
            "email": emailInput,
            "password": passwordInput,
        }

        axios.post("https://earthlover.herokuapp.com/api/picker/login", Data)
            .then((responese) => {
                console.log(responese.data)
                if (responese.data.status === true) {
                    navigate('/home-pckr')
                    localStorage.setItem("token", responese.data.token)
                    localStorage.setItem("role", "picker")
                }
            })
            .catch((error) => {
                // console.log(error.response.data);
                setValidation(error.response.data.error);
                // setInfo(error.response.data.message)
                if(error.response.data.message === "login gagal"){
                    Swal.fire({
                        icon: 'error',
                        title: 'Login Gagal',
                        showConfirmButton: false,
                        timer: 2500
                      })
            }
            })
    }
    // console.log(validation)
    // console.log(info)
    return (
        <>
            <Layout>
                <Screen>
                    <CaseHeader>
                        Login
                    </CaseHeader>
                    <Container>
                        <FormInput >
                            <form onSubmit={LoginHandler}>
                                <TitleInput>
                                    <Title>
                                        Username
                                    </Title>
                                    <Input type='email' placeholder='enter your username' onChange={(e) => setEmailInput(e.target.value)} value={emailInput} name="username" />
                                    {
                                        validation && (
                                            <Validation>{validation.email}</Validation>
                                        )
                                    }
                                    {/* {
                                        info && (
                                            <Validation>{info.message}</Validation>
                                        )
                                    } */}
                                </TitleInput>
                                <TitleInput>
                                    <Title>
                                        Password
                                    </Title>
                                    <Input placeholder='enter your password' type={"password"} onChange={(e) => setPasswordInput(e.target.value)} value={passwordInput} name="password" />
                                    {
                                        validation && (
                                            <Validation>{validation.password}</Validation>
                                        )
                                    }
                                </TitleInput>
                                {/* <Link to="/home"> */}
                                <MainButton type='submit'>
                                    Login
                                </MainButton>
                                {/* </Link> */}
                            </form>
                        </FormInput>
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
                                    <Link to="/register-picker">
                                        klik disini
                                    </Link>
                                </LinkRegiter>
                            </TextRegister>
                            <TextRegister>
                               Login sebagai
                                <LinkRegiter >
                                    <Link to="/">
                                        Customer
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

export default LoginPckr