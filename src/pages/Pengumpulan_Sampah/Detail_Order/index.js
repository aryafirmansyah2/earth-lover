import React from 'react'
import tw from 'twin.macro'
import Container from '../../../components/common/Container'
import Header from '../../../components/Header'
import { Link } from 'react-router-dom'
import Avatar1 from '../../../assets/Avatar/Frame 6.svg'
import { FaTruck } from 'react-icons/fa'
import Navbar from '../../../components/Navbar'
// import BtnSeconds from '../../../components/common/Button/Second'
import MainButton from '../../../components/common/Button/Main'
import DangerBtn from '../../../components/common/Button/DangerBtn'

const Bg = tw.div`w-full bg-blue-100 h-full `
const Plate = tw.div`w-[480px] h-full bg-[#F9FFFA] m-auto`

const Case = tw.div`w-full flex flex-col items-center justify-center mt-4`
const CaseContent = tw.div`w-full flex flex-col items-start justify-center`
const Title = tw.h1`text-lg font-Medium`
const ProfilePetugas = tw.div` w-full flex items-center justify-between py-4`
const FotoPtgs = tw.img``
const CaseInfo = tw.div`flex flex-col justify-center items-start  `
const NamaPtgs = tw.h2`text-lg font-Reguler `
const Id = tw.h2`text-[16px] font-Bold`
const CaseStatus = tw.div`flex items-center w-40`
const IconStatus = tw.div`mr-3 text-[#979797]`
const TitleStatus = tw.p`text-sm text-[#979797] font-Reguler`

const CaseAlamat = tw.div`flex flex-col justify-center items-start py-4`
const NamaBangunan = tw.h2`text-lg font-Semibold `
const Alamat = tw.h2`text-[16px] font-Light`

const InputDisabled = tw.input`w-full bg-[#EBFEF2] text-green-1 text-sm font-Semibold  rounded-lg py-3 px-2 my-4  `

const InputNumber = tw.input`w-full bg-transparent border-[1.5px] border-green-1 text-green-1 text-sm font-Semibold rounded-lg py-3 px-2 my-4  `
const CaseInputPw = tw.div`w-full relative items-center justify-end flex`
const ToggleEye = tw.p`absolute mt-2 mr-5 text-green-1 font-Semibold`


function DetailOrder() {
    return (
        <div>
            <Bg>
                <Plate>
                    <Header link={"/"} title={"Detail Order"} />
                    <Container>
                        <Case>
                            <Link to="/map" style={{ width: "100%" }}>
                                <CaseContent>
                                    <Title>Petugas : </Title>
                                    <ProfilePetugas>
                                        <FotoPtgs src={Avatar1} />
                                        <CaseInfo>
                                            <NamaPtgs>Agus Purnomo</NamaPtgs>
                                            <Id>N 8829 LG</Id>
                                        </CaseInfo>
                                        <div>-</div>
                                        <CaseStatus>
                                            <IconStatus><FaTruck /></IconStatus>
                                            <TitleStatus>Sedang menuju ke lokasi</TitleStatus>
                                        </CaseStatus>
                                    </ProfilePetugas>
                                </CaseContent>
                            </Link>
                        </Case>
                        <Case>
                            <CaseContent>
                                <Title>Alamat : </Title>
                                <CaseAlamat>
                                    <NamaBangunan>Inagata Technosmith</NamaBangunan>
                                    <Alamat>Perumahan Griyashanta Blok L.110, Mojolangu, Kota Malang</Alamat>
                                </CaseAlamat>
                            </CaseContent>
                        </Case>
                        <Case>
                            <CaseContent>
                                <Title>Tanggal Pengambilan :</Title>
                                <InputDisabled type="text" disabled value="24 November 20021" />
                            </CaseContent>
                        </Case>
                        <Case>
                            <CaseContent>
                                <Title>Waktu Pengambilan :</Title>
                                <InputDisabled type="text" disabled value="09.00 AM - 10.00 AM" />
                            </CaseContent>
                        </Case>
                        <Case>
                            <CaseContent>
                                <Title>Jenis Daur ulang :</Title>
                                <InputDisabled type="text" disabled value="Organik" />
                            </CaseContent>
                        </Case>
                        <Case>
                            <CaseContent>
                                <Title>Jenis Sampah :</Title>
                                <InputDisabled type="text" disabled value="Tanaman" />
                            </CaseContent>
                        </Case>
                        <Case>
                            <CaseContent>
                                <Title>Berat Sampah :</Title>
                                <CaseInputPw >
                                    <InputNumber type="number" value="2" disabled />
                                    <ToggleEye>Kg</ToggleEye>
                                </CaseInputPw>
                            </CaseContent>
                        </Case>
                        <DangerBtn style={{ margin: 0, marginTop: "50px" }}>Batalkan Pesanan</DangerBtn>
                        <Link to="/riwayat-order" style={{ width: "100%" }}>
                            <MainButton style={{ marginBottom: "100px" }}>Pesanan Selesai</MainButton>
                        </Link>
                    </Container>
                    <Navbar />
                </Plate>
            </Bg>
        </div>
    )
}

export default DetailOrder