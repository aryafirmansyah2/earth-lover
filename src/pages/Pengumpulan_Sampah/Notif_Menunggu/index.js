import React from 'react'
import Container from '../../../components/common/Container'
import {Link}  from 'react-router-dom'
import Layout from '../../../components/Layout'
import HeroLoading from '../../../assets/Foto/loading.svg'
import tw from 'twin.macro'
import DangerBtn from '../../../components/common/Button/DangerBtn'

const Case = tw.div`h-full w-full flex flex-col justify-center items-center `
const CaseHero = tw.div`h-full w-full flex flex-col justify-center items-center pb-52 pt-72`
const HrLoading = tw.img``
const TitleMain = tw.h2`text-green-1 text-[24px] font-Semibold `
const TitleSec = tw.p`text-[#052E1D] text-sm font-Reguler`

function NotifMenunggu() {
  return (
    <div>
      <Layout>
        <Container>
          <Case >
            <Link to="/detail-order">
            <CaseHero>
              <HrLoading src={HeroLoading} />
              <TitleMain>Mencari Petugas Untukmu...</TitleMain>
              <TitleSec>Tunggu sebentar lagi ya, sampahmu akan segera diambil.</TitleSec>
            </CaseHero>
            </Link>
            <Link to="batal-pickup" style={{width: "100%"}}>
              <DangerBtn>Batalkan Pesanan</DangerBtn>
            </Link>
          </Case>
        </Container>
      </Layout>
    </div>
  )
}

export default NotifMenunggu