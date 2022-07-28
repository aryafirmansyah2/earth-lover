import React, { useState } from "react";
import tw from 'twin.macro'
import { Link } from 'react-router-dom'
import Container from '../../../components/common/Container'
import Header from '../../../components/Header'
import map from '../../../assets/Foto/Frame 985.svg'
import Input from '../../../components/common/Input'
import BtnSeconds from '../../../components/common/Button/Second'
import MainButton from '../../../components/common/Button/Main'
import './index.css'
import Waktu from "./Data/Waktu";
import DaurUlang from "./Data/DaurUlang";
import Sampah from "./Data/Sampah";
import Layout from "../../../components/Layout";


const Case = tw.div`w-full flex flex-col items-center justify-center mt-4`
const CaseContent = tw.div`w-full flex flex-col items-start justify-center`
const Title = tw.h1`text-[16px] font-Medium`
const InputAlamat = tw.textarea`w-full border-2 border-[#d2d2d2] rounded-xl focus:border-[#16BF78]  focus:outline-none p-[8px] mt-3 overflow-hidden`
const Map = tw.img`mt-2 w-full`
const Deskripsi = tw.p`font-Light text-sm`
const Tgl = tw.input`w-full border-2 border-green-1 p-2 items-center bg-green-1 rounded-lg text-white mt-3`
const ChoiceContainer = tw.button`w-full flex items-center justify-center border-2 border-green-1 rounded-xl mt-4 text-[16px] font-Reguler text-green-1 py-3  focus:bg-green-1 focus:text-white`
const CaseInputPw = tw.div`w-full relative items-center justify-end flex`
const ToggleEye = tw.p`absolute mt-2 mr-5 text-green-1 font-Semibold`
const Bg = tw.div`w-full bg-blue-100 h-full `
const Plate = tw.div`w-[480px] h-full bg-[#F9FFFA] m-auto`



function Request_Pickup() {

    const [activeLinkWaktu, setActiveLinkWaktu] = useState();
    const [activeLinkDaurUlang, setActiveLinkDaurUlang] = useState();
    const [activeLinkSampah, setActiveLinkSampah] = useState();

    function handleWaktu(id) {
        setActiveLinkWaktu(id)
    }
    function handleDaurUlang(id) {
        setActiveLinkDaurUlang(id)
    }
    function handleSampah(id) {
        setActiveLinkSampah(id)
    }

    return (
        <div>
            {/* <Bg> */}
                <Layout>
                    <Header link={"/metode-pengumpulan"} title={"Request Pick Up"} />
                    <Container>
                        <Case>
                            <CaseContent>
                                <Title>Alamat :</Title>
                                <InputAlamat />
                                <Map src={map} />
                            </CaseContent>
                            <Deskripsi>
                                sesuaikan alamat dengan pin pada maps agar titik pengambilan lebih akurat
                            </Deskripsi>
                        </Case>
                        <Case>
                            <CaseContent>
                                <Title>Tanggal Pengambilan :</Title>
                                <Tgl type="date" />
                            </CaseContent>
                        </Case>
                        <Case>
                            <CaseContent>
                                <Title>Waktu Pengambilan :</Title>
                                {Waktu.map(result => (
                                    <ChoiceContainer className={result.className + (result.id === activeLinkWaktu ? " active " : "")} onClick={() => handleWaktu(result.id)}>{result.name}</ChoiceContainer>
                                ))}
                            </CaseContent>
                        </Case>
                        <Case>
                            <CaseContent>
                                <Title>Jenis Daur Ulang :</Title>
                                {DaurUlang.map(result => (
                                    <ChoiceContainer className={result.className + (result.id === activeLinkDaurUlang ? " active " : "")} onClick={() => handleDaurUlang(result.id)}>{result.name}</ChoiceContainer>
                                ))}
                            </CaseContent>
                        </Case>
                        <Case>
                            <CaseContent>
                                <Title>Jenis Sampah :</Title>
                                {Sampah.map(result => (
                                    <ChoiceContainer className={result.className + (result.id === activeLinkSampah ? " active " : "")} onClick={() => handleSampah(result.id)}>{result.name}</ChoiceContainer>
                                ))}
                            </CaseContent>
                        </Case>
                        <Case>
                            <CaseContent>
                                <Title>Bearat Sampah :</Title>
                                <CaseInputPw >
                                    <Input type="text" />
                                    <ToggleEye>Kg</ToggleEye>
                                </CaseInputPw>
                            </CaseContent>
                        </Case>
                        <BtnSeconds>Tambah Item</BtnSeconds>
                        <Link to="notif-menunggu" style={{ width: "100%" }}>
                            <MainButton>Lanjutkan</MainButton>
                        </Link>
                    </Container>
                </Layout>
            {/* </Bg> */}
        </div>
    )
}

export default Request_Pickup