import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Container from '../../../components/common/Container'
import { Link } from 'react-router-dom'
import Layout from '../../../components/Layout'
import HeroLoading from '../../../assets/Foto/loading.svg'
import tw from 'twin.macro'
import DangerBtn from '../../../components/common/Button/DangerBtn'

const Case = tw.div`h-full w-full flex flex-col justify-center items-center `
const CaseHero = tw.div`h-full w-full flex flex-col justify-center items-center pb-52 pt-72`
const HrLoading = tw.img``
const TitleMain = tw.h2`text-green-1 text-[24px] font-Semibold `
const TitleSec = tw.p`text-[#052E1D] text-sm font-Reguler`

const BgCancel = tw.div`bg-black bg-opacity-50   w-full h-full absolute bottom-0 flex items-end justify-center drop-shadow-2xl`
const DivCancel = tw(motion.div)`bg-white w-full h-[60%] rounded-t-3xl flex flex-col items-center justify-start`
const CaseContentCancel = tw.div`w-full   flex flex-col items-center justify-start`
const TitleCancel = tw.h1`font-Bold text-[20px] mt-[40px]`
const ButtonSec = tw.button`w-full bg-transparent border-2 rounded-lg border-green-1 mt-[32px] py-2 text-[14px] text-green-1 font-Reguler`
const ButtonMain = tw.button`w-full bg-green-1 py-3 rounded-lg mt-2 text-white text-[14px] font-Reguler `
const CaseAlasan = tw.div`w-full flex flex-col items-start justify-center mt-10`
const Alasan = tw.h1`text-[16px] font-Medium`
const InputAlasan = tw.textarea`w-full h-32 rounded-2xl border-[2px] border-green-1 mt-4 px-4 py-2 text-[16px]`
const Screen =tw.div`w-full h-screen`

const SidebarAnime = {
  hidden: {
    opacity: 0,

    marginBottom: '0px',
    y: 300,
  },

  show: {
    opacity: 1,

    // marginBottom: '1px',
    y: 0,
    // transition: {
      // duration: 1,
      // type: 'spring',
      // stiffness: 5,
      // restDelta: 2,
      // The first child will appear AFTER the parrent has appeared on the screen

      // The next sibling will appear 0.5s after the previous one
    //   delayChildren: 0.3,
    //   staggerChildren: 0.4,
    // },
  },
  exit: {
    opacity: 0,

    marginBottom: '0px',
    y: -300,
    // transition: {
    //   duration: 1,
    //   type: 'spring',
    //   stiffness: 20,
    //   restDelta: 2,

    //   staggerChildren: 0.2,
    //   staggerDirection: -1,
    // },
  },
};

function NotifMenunggu() {
  const [showCancel, setShowCancel] = useState(false);
  return (
    <div>
      <Layout>
        <Screen>
        <Container>
          <Case >
            <Link to="/detail-order">
              <CaseHero>
                <HrLoading src={HeroLoading} />
                <TitleMain>Mencari Petugas Untukmu...</TitleMain>
                <TitleSec>Tunggu sebentar lagi ya, sampahmu akan segera diambil.</TitleSec>
              </CaseHero>
            </Link>
            <DangerBtn onClick={() => setShowCancel(!showCancel)}>Batalkan Pesanan</DangerBtn>
          </Case>
        </Container>
        <AnimatePresence exitBeforeEnter style={{ width: "100%" }}>
          {showCancel && (
            <BgCancel>
              <DivCancel variants={SidebarAnime} initial="hidden" animate="show" exit="exit">
                <Container>
                  <CaseContentCancel>
                    <TitleCancel>Alasan Pembatalan</TitleCancel>
                    <ButtonSec>Ingin Mengubah Detail</ButtonSec>
                    <ButtonMain>Berubah Pikiran</ButtonMain>
                    <CaseAlasan>
                      <Alasan>Alasan Lain : </Alasan>
                      <InputAlasan placeholder='Masukan alsan anda...'/>
                    </CaseAlasan>
                  </CaseContentCancel>
                  <ButtonMain style={{marginTop:"50px"}} onClick={() => setShowCancel(!showCancel)}>Lanjutkan</ButtonMain>
                </Container>
              </DivCancel>
            </BgCancel>
          )}
        </AnimatePresence>
        </Screen>
      </Layout>
    </div>
  )
}

export default NotifMenunggu