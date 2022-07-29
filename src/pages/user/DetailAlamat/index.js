import React from 'react'
import { NavLink } from 'react-router-dom'
import tw from 'twin.macro'
import map from '../../../assets/Foto/Frame 985.svg'
import MainButton from '../../../components/common/Button/Main'
import Container from '../../../components/common/Container'
import Input from '../../../components/common/Input'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout'

const Case = tw.div`w-full flex flex-col items-center justify-center mt-4`
const CaseContent = tw.div`w-full flex flex-col items-start justify-center`
const Title = tw.h1`text-lg font-Semibold `

// const CaseContent = tw.div`w-full flex flex-col items-start justify-center`
// const Title = tw.h1`text-[16px] font-Medium`
// const InputAlamat = tw.textarea`w-full border-2 border-[#d2d2d2] rounded-xl focus:border-[#16BF78]  focus:outline-none p-[8px] mt-3 overflow-hidden`
const Map = tw.img`mt-2 w-full`
const Deskripsi = tw.p`font-Light text-sm`
const Bg = tw.div`w-full bg-blue-100 h-full `
const Plate = tw.div`w-[480px] h-full bg-[#F9FFFA] m-auto`
const Screen = tw.div`w-full h-screen`

function DetailAlmat() {
    return (
        <div>
            {/* <Bg> */}
            <Layout>
                <Screen>
                    <Header link={'/alamat'} title={'Detail Alamat'} />
                    <Container>
                        <Case>
                            <CaseContent>
                                <Title>Nama Alamat </Title>
                                <Input type='number' />
                            </CaseContent>
                        </Case>
                        <Case>
                            <CaseContent>
                                <Title>Alamat </Title>
                                <Input type='number' />
                            </CaseContent>
                        </Case>
                        <Case>
                            <CaseContent>
                                <Title>Kelurahan </Title>
                                <Input type='number' />
                            </CaseContent>
                        </Case>
                        <Case>
                            <CaseContent>
                                <Title>Kecamatan </Title>
                                <Input type='number' />
                            </CaseContent>
                        </Case>
                        <Case>
                            <CaseContent>
                                <Title>Kode Pos </Title>
                                <Input type='number' />
                            </CaseContent>
                        </Case>
                        <Case>
                            <CaseContent>
                                <Title>Alamat :</Title>
                                <Map src={map} />
                            </CaseContent>
                            <Deskripsi>
                                *sesuaikan alamat dengan pin pada maps agar titik pengambilan lebih akurat
                            </Deskripsi>
                        </Case>
                        <NavLink to='/alamat' >
                            <MainButton>Simpan</MainButton>
                        </NavLink>
                    </Container>
                </Screen>
            </Layout>
            {/* </Bg> */}
        </div>
    )
}

export default DetailAlmat