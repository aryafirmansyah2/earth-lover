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

const CaseInfoPembayaran = tw.div` w-full flex flex-col bottom-0 absolute `
const CaseInfo = tw.div``
const CaseContent = tw.div`flex justify-between items-center mt-2`
const Content = tw.p`text-[#989898]`
const Line = tw.div`border-b-[1px] w-full border-b-[#E1E1E1] mt-2`
const MainContent = tw.p`text-green-1 text-[18px]  font-Semibold `
const Screen = tw.div`w-full h-screen`

function PembayaranMenu() {
  return (
    <div>
      <Layout>
        <Screen>
          <Header link={'/bayar'} title={"Pembayaran"} />
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
                <Link to="/metode-pembayaran-menu">
                  <ButtonUbah>Ubah</ButtonUbah>
                </Link>
              </CasePadding2>
            </CaseMetodePembayaran>
            <Title>Voucher Promo</Title>
            <CaseMetodePembayaran>
              <CasePadding2>
                <NamaMetode style={{ color: "#16BF78" }}>Potongan 10%</NamaMetode>
                <Link to="/voucher-promo">
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
              <Link to="/notif-selesai">
                <MainButton>Bayar</MainButton>
              </Link>
            </Container>
          </CaseInfoPembayaran>
        </Screen>
      </Layout>
    </div>
  )
}

export default PembayaranMenu