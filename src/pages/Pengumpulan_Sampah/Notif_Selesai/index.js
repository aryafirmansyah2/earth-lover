import React from 'react'
import Container from '../../../components/common/Container'
import { Link } from 'react-router-dom'
import Layout from '../../../components/Layout'
import HeroLoading from '../../../assets/Avatar/selesai.svg'
import tw from 'twin.macro'
import MainButton from '../../../components/common/Button/Main'

const Case = tw.div`h-full w-full flex flex-col justify-center items-center `
const CaseHero = tw.div`h-full w-full flex flex-col justify-center items-center pb-52 pt-72`
const HrLoading = tw.img``
const TitleMain = tw.h2`text-green-1 text-[24px] font-Semibold `
const TitleSec = tw.p`text-[#052E1D] text-sm font-Reguler`
const Screen = tw.div`w-full h-screen`


function NotifSelesai() {
  return (
    <div>
      <Layout>
        <Screen>
          <Container>
            <Case>
              <CaseHero>
                <HrLoading src={HeroLoading} />
                <TitleMain>Terima Kasih</TitleMain>
                <TitleSec>Bantuanmu untuk bumi akan sangat berarti, mari cintai lingkungan kita.</TitleSec>
              </CaseHero>
              <Link to="/home" style={{ width: "100%" }}>
                <MainButton>Kembali Ke Beranda</MainButton>
              </Link>
            </Case>
          </Container>
        </Screen>
      </Layout>
    </div>
  )
}

export default NotifSelesai