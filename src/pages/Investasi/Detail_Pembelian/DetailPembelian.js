import React from 'react'
import tw from 'twin.macro'
import Container from '../../../components/common/Container'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout'
import Bni from '../../../assets/Logo/bank bni logo (1).svg'
import { MdOutlineCancel } from 'react-icons/md'
import MainButton from '../../../components/common/Button/Main'
import { Link } from 'react-router-dom'


const CaseListReksadana = tw.div`w-full h-28 flex items-center  bg-[#EBFEF2] rounded-lg`
const CaseLogo = tw.div`bg-[#16BF78]  flex items-center justify-center rounded-2xl ml-5`
const Logo = tw.img`px-5 py-8`
const CaseTitle = tw.div`pl-3 flex flex-col justify-center items-start`
const NameLogo = tw.h2`text-[16px] font-Medium text-black `
const Deskripsi = tw.h2`text-[16px] font-Reguler text-[#535353]`

const CaseNominal = tw.div`w-full flex items-center mt-5`
const CaseRight = tw.div`flex flex-col items-start justify-between w-full `
const TitleNominal = tw.p`text-[#989898] text-[16px] font-Reguler`
const Harga = tw.h2`font-Medium sm:text-xl md:text-[26px]`
const LembarSaham = tw.p`text-green-1 text-sm font-Light`
const CaseLeft = tw.div``
const IconCancel = tw.div`text-red-500 text-3xl`
const Screen = tw.div`w-full h-screen`


function DetailPembelian() {
  return (
    <div>
      <Layout style={{ position: "relative" }}>
        <Screen>
          <Header link={"/detail-reksadana"} title={"Detail Pembelian"} />
          <Container>
            <CaseListReksadana>
              <CaseLogo>
                <Logo src={Bni} />
              </CaseLogo>
              <CaseTitle>
                <NameLogo>
                  Bank Nasional Indonesia
                </NameLogo>
                <Deskripsi>
                  Keuntungan investasi dengan mudah
                </Deskripsi>
              </CaseTitle>
            </CaseListReksadana>
            <Container>
              <CaseNominal>
                <CaseRight>
                  <TitleNominal>Nominal Investasi</TitleNominal>
                  <Harga>Rp 15.000</Harga>
                  <LembarSaham>2 lembar saham</LembarSaham>
                </CaseRight>
                <CaseLeft>
                  <IconCancel>
                    <MdOutlineCancel />
                  </IconCancel>
                </CaseLeft>
              </CaseNominal>
            </Container>
            <Link to='/pembayaran'>
              <MainButton style={{ marginTop: "480px" }}>Bayar</MainButton>
            </Link>
          </Container>
        </Screen>
      </Layout>
    </div>
  )
}

export default DetailPembelian