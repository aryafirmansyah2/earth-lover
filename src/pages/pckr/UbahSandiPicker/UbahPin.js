import React, { useState } from 'react'
import { AiFillEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import tw from 'twin.macro'
import { useNavigate } from 'react-router-dom'
import { CgDanger } from 'react-icons/cg'
import axios from 'axios'
import Container from '../../../components/common/Container'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout'
import Input from '../../../components/common/Input'
import MainButton from '../../../components/common/Button/Main'



const CaseAlert = tw.div`w-full h-16 rounded-2xl bg-[#FDD9D9] flex flex-col justify-center items-center relative`
const TitleAlert = tw.h1`text-[#BF1616] text-[14px] font-Medium `
const CaseInput = tw.div`w-full flex flex-col items-start justify-center mt-3`
const Title = tw.h1`font-Medium text-[16px]`
const ToggleEye = tw.button`absolute mt-2 mr-5`
const CaseInputPw = tw.div`w-full relative items-center justify-end flex`
// const Screen = tw.div`w-full h-screen`


function UbahPinPicker() {

    const iconEye =
    {
        fontSize: "1.5rem",
    };

    const [typePassword, setTypePassword] = useState("password")
    const [typePassword2, setTypePassword2] = useState("password")
    const [typePassword3, setTypePassword3] = useState("password")
    const [pin, setPin] = useState()
    const [newPin, setNewPin] = useState()
    const [confirmPin, setConfirmPin] = useState()

    const token = localStorage.getItem("token")
    const navigate = useNavigate()

    const HandleTypePassword = () => {
        setTypePassword(!typePassword)
    }
    const HandleTypePassword2 = () => {
        setTypePassword2(!typePassword2)
    }
    const HandleTypePassword3 = () => {
        setTypePassword3(!typePassword3)
    }
    
    const changePin = (e) => {
        e.preventDefault()
        let data = {
            "pin_lama": pin,
            "pin_baru": newPin,
            "pin_baru_confirmation": confirmPin
        }
        axios.post("https://earthlover.herokuapp.com/api/picker/profil/updatePin", data, {
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then(res => {
                if (res.data.status === true) {
                    navigate("/home-pckr/user-picker/")
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    // console.log(pin)

    return (
        <div>
            <Layout>

                <Header link={'/home-pckr/user-picker/'} title={'Ganti Pin'} />
                <Container>
                    <form onSubmit={changePin}>
                        <CaseAlert>
                            <TitleAlert>Peringatan !</TitleAlert>
                            <TitleAlert>Jangan Berikan Pin Pada Siapapun</TitleAlert>
                            <CgDanger style={{ position: "absolute", left: "30", color: '#BF1616', fontSize: "25px" }} />
                        </CaseAlert>
                        <CaseInput style={{ marginTop: "30px" }}>
                            <Title>Pin Lama</Title>
                            <CaseInputPw>
                                <Input placeholder='enter your username' type={typePassword ? "password" : "text"} onChange={(e) => setPin(e.target.value)} value={pin} />
                                <ToggleEye onClick={HandleTypePassword}>{typePassword ? <AiOutlineEyeInvisible style={iconEye} /> : <AiFillEye style={iconEye} />}</ToggleEye>
                            </CaseInputPw>
                        </CaseInput>
                        <CaseInput>
                            <Title>Pin Baru</Title>
                            <CaseInputPw>
                                <Input placeholder='enter your username' type={typePassword2 ? "password" : "text"} onChange={(e) => setNewPin(e.target.value)} value={newPin} />
                                <ToggleEye onClick={HandleTypePassword2}>{typePassword2 ? <AiOutlineEyeInvisible style={iconEye} /> : <AiFillEye style={iconEye} />}</ToggleEye>
                            </CaseInputPw>
                        </CaseInput>
                        <CaseInput>
                            <Title>Autentifikasi Pin Baru</Title>
                            <CaseInputPw>
                                <Input placeholder='enter your username' type={typePassword3 ? "password" : "text"} onChange={(e) => setConfirmPin(e.target.value)} value={confirmPin} />
                                <ToggleEye onClick={HandleTypePassword3}>{typePassword3 ? <AiOutlineEyeInvisible style={iconEye} /> : <AiFillEye style={iconEye} />}</ToggleEye>
                            </CaseInputPw>
                        </CaseInput>
                        <MainButton type='submit'>Simpan</MainButton>
                    </form>
                </Container>

            </Layout>
        </div>
    )
}

export default UbahPinPicker