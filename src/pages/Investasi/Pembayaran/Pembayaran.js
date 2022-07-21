import React from 'react'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'
import MainButton from '../../../components/common/Button/Main'
import Container from '../../../components/common/Container'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout'

const CaseTotalHarga = tw.div`w-full  flex flex-col items-center justify-center`
const TitleHarga = tw.p` text-[16px] text-[#989898]`
const NominalHarga = tw.p` text-[24px] text-[#454545] font-Medium`
const CasePadding1 = tw.div`w-full flex flex-col items-start p-6`
const Title = tw.h2`text-[18px] font-Medium`
const CaseMetodePembayaran = tw.div`w-full flex items-center justify-center `
const CasePadding2 = tw.div`w-full flex items-center justify-between  p-6`
const NamaMetode = tw.p` text-[16px] text-[#454545] font-Medium`
const ButtonUbah = tw.button`bg-[#D9FDE5] text-green-1 px-4 py-2 rounded-2xl`

const CaseInfoPembayaran = tw.div` w-full flex flex-col bottom-0 mt-96`
const CaseInfo = tw.div``
const CaseContent = tw.div`flex justify-between items-center`
const Content = tw.p``
const Line = tw.div`border-b-[1px] w-full border-b-[#E1E1E1]`
const MainContent = tw.p`text-green-1 text-[18px] font-Semibold `



function Pembayaran() {
  return (
    <div>
      <Layout>
        <Header link={'/detail-pembelian'} title={"Pembayaran"} />
        <Container>
          <CaseTotalHarga>
            <CasePadding1>
              <TitleHarga>Harga</TitleHarga>
              <NominalHarga>Rp 15.000</NominalHarga>
            </CasePadding1>
          </CaseTotalHarga>
          <Title>Metode pembayaran</Title>
          <CaseMetodePembayaran>
            <CasePadding2>
              <NamaMetode>Mandiri Virtual Account</NamaMetode>
              <Link to="/metode-pembayaran">
                <ButtonUbah>Ubah</ButtonUbah>
              </Link>
            </CasePadding2>
          </CaseMetodePembayaran>
        </Container>
        <CaseInfoPembayaran>
          <Container>
            <CaseInfo>
              <CaseContent>
                <Content>Harga</Content>
                <Content>Rp 15.000</Content>
              </CaseContent>
              <CaseContent>
                <Content>Biaya Admin</Content>
                <Content>Rp 0</Content>
              </CaseContent>
              <Line />
              <CaseContent>
                <MainContent>Harga</MainContent>
                <MainContent>Rp 15.000</MainContent>
              </CaseContent>
            </CaseInfo>
            <Link to="/cara-pembayaran">
              <MainButton>Bayar</MainButton>
            </Link>
          </Container>
        </CaseInfoPembayaran>
      </Layout>
    </div>
  )
}

export default Pembayaran