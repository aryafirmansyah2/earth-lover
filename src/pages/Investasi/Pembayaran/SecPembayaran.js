import React from 'react'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'
import MainButton from '../../../components/common/Button/Main'
import Container from '../../../components/common/Container'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout'

const CaseTotalHarga = tw.div`w-full  flex flex-col items-center justify-center`
const TitleHarga = tw.p` text-[16px] text-[#989898]`
const NominalHarga = tw.p` text-[24px] text-[#454545] font-medium`
const CasePadding = tw.div`w-full flex items-center justify-between p-6`
const CaseLeft = tw.div`flex flex-col`
const CaseRight = tw.div`flex flex-col`
const TitleKode = tw.p`text-[12px] text-[#989898]`
const Kode = tw.p`text-green-1 text-[14px]`
const Title = tw.p`text-[16px]`
const CaseCaraMembayar = tw.div`w-full flex flex-col mb-96`
const CaraMembayar = tw.button`border-green-1 border-2 pr-72 py-3 rounded-2xl text-[#595959] text-[16px] focus:bg-green-1 focus:text-white`
function SecPembayaran() {
    return (
        <div>
            <Layout>
                <Header link={'/pembayaran'} title={'Pembayaran'} />
                <Container>
                    <CaseTotalHarga>
                        <CasePadding>
                            <CaseLeft>
                                <TitleHarga>Harga</TitleHarga>
                                <NominalHarga>Rp 5.000</NominalHarga>
                            </CaseLeft>
                            <CaseRight>
                                <TitleKode>Kode</TitleKode>
                                <Kode>AB123</Kode>
                            </CaseRight>
                        </CasePadding>
                    </CaseTotalHarga>
                    <Title>Cara Membayar</Title>
                    <CaseCaraMembayar>
                        <CaraMembayar style={{ marginTop: "25px" }}>Mesin ATM</CaraMembayar>
                        <CaraMembayar style={{ marginTop: "10px" }}>Mobile Banking</CaraMembayar>
                        <CaraMembayar style={{ marginTop: "10px" }}>Internet Banking</CaraMembayar>
                    </CaseCaraMembayar>
                    <Link to='/notif-selesai'>
                        <MainButton>selesai</MainButton>
                    </Link>
                </Container>
            </Layout>
        </div>
    )
}

export default SecPembayaran