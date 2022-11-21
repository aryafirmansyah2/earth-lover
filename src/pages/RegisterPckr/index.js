import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
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
const Screen = tw.div`w-full h-screen`
const Validation = tw.p`text-red-500 mt-2`



const iconStyles =
{
    fontSize: "3rem",
};
const iconEye =
{
    fontSize: "1.5rem",
};

const RegisterPckr = () => {

    const [typePassword, setTypePassword] = useState()
    const [passwordInput, setPasswordInput] = useState("");
    const [usernameInput, setUsernameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [licencePlate, setLicencePlate] = useState("")
    const [address, setAddress] = useState("")
    const [pinInput, setPinInput] = useState("");
    const [phoneInput, setPhoneInput] = useState("");
    const [validation, setValidation] = useState()
    const navigate = useNavigate()

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
            'address': address,
            'licence_plate' : licencePlate
        }

        axios.post("https://earthlover.herokuapp.com/api/picker/register", Data)
            .then((res) => {
                console.log(res.data)
                navigate("/picker")
            })
            .catch((error) => {
                console.log(error.response.data)
                setValidation(error.response.data)
            })
    }

    // useEffect(() => {
    //     if (localStorage.getItem("token") && localStorage.getItem('role') === 'picker' ) {
    //         navigate('/home-pckr')
    //     }else{
    //         navigate('/home')
    //     }
    // }, []);

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
                            <Title>Password</Title>
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
                        <TitleInput>
                            <Title>Phone Number</Title>
                            <Input placeholder='enter your phone number' type="text" onChange={(e) => setPhoneInput(e.target.value)} value={phoneInput} />
                            {
                                validation && (
                                    <Validation>{validation.error.phone_number}</Validation>
                                )
                            }
                            {
                                validation && (
                                    <Validation>{validation.error}</Validation>
                                )
                            }
                        </TitleInput>
                        <TitleInput>
                            <Title>Address</Title>
                            <Input placeholder='enter your address' type="text" onChange={(e) => setAddress(e.target.value)} value={address} />
                            {
                                validation && (
                                    <Validation>{validation.error.address}</Validation>
                                )
                            }
                            {
                                validation && (
                                    <Validation>{validation.error}</Validation>
                                )
                            }
                        </TitleInput>
                        <TitleInput>
                            <Title>Licence Plate</Title>
                            <Input placeholder='enter your licence plate' type="text" onChange={(e) => setLicencePlate(e.target.value)} value={licencePlate} />
                            {
                                validation && (
                                    <Validation>{validation.error.licence_plate}</Validation>
                                )
                            }
                            {
                                validation && (
                                    <Validation>{validation.error}</Validation>
                                )
                            }
                        </TitleInput>
                        <TitleInput>
                            <Title>Pin</Title>
                            <Input placeholder='enter your pin' type="text" onChange={(e) => setPinInput(e.target.value)} value={pinInput} />
                            {
                                validation && (
                                    <Validation>{validation.error.pin}</Validation>
                                )
                            }
                            {
                                validation && (
                                    <Validation>{validation.error}</Validation>
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
                        <TextRegister>Sudah memiliki akun? <LinkRegiter href='/picker'>klik disini</LinkRegiter></TextRegister>
                    </ButtonLink>
                </Container>
            </Layout>

            
        </>
    )
}

export default RegisterPckr