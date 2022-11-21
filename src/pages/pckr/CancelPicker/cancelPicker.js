import React from 'react'
import tw from 'twin.macro'
import avatar from '../../../assets_pckr/foto/unsplash_EZ4TYgXPNWk.png'
import Container from '../../../components/common/Container'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout'

const CardInfo = tw.div`w-full rounded-3xl bg-[#EBFEF2]`
const CaseProfileUser = tw.div`w-full flex items-center justify-between py-2 pb-7`
const ImageUser = tw.img``
const CaseText = tw.div`ml-5`
const Name = tw.h1`text-[24px] text-green-1 font-Medium`
const Point = tw.h1`text-[16px] font-Medium`
const TimeOrder = tw.h1`text-[#979797] text-[12px] font-Medium`
const Line = tw.div`w-full h-0 border-[1px] rounded-xl border-[#BEBEBE]`

const Case = tw.div`w-full flex flex-col items-center justify-center mt-4`
const CaseContent = tw.div`w-full flex flex-col items-start justify-center`
const Title = tw.h1`text-lg font-Medium`
const CaseAlamat = tw.div`flex flex-col justify-center items-start `
const NamaBangunan = tw.h2`text-lg font-Semibold `
const Alamat = tw.h2`text-[16px] font-Light`

function CancelPicker() {
  return (
    <Layout>
      <Header link={'/home-pckr/user-picker'} title={'Dibatalkan Anda'} />
      <Container>
        <CardInfo>
          <Container>
            <CaseProfileUser>
              <div style={{display: "flex"}}>
              <ImageUser src={avatar} />
              <CaseText>
                <Name>Jordan Salim</Name>
                <Point>210 Point</Point>
              </CaseText>
              </div>
              <TimeOrder>12.30</TimeOrder>
            </CaseProfileUser>
            <Line />
            <Case>
              <CaseContent>
                <Title>Alamat : </Title>
                <CaseAlamat>
                  <NamaBangunan>Inagata Technosmith</NamaBangunan>
                  <Alamat>jalan haji ismail no 5 jombang jawa ttimur</Alamat>
                </CaseAlamat>
              </CaseContent>
            </Case>
          </Container>
        </CardInfo>
      </Container>
    </Layout>
  )
}

export default CancelPicker