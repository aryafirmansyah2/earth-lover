import React from 'react'
import tw from 'twin.macro'

import Container from '../../../components/common/Container'
import BgCard from '../../../assets/Foto/LooperGroup.svg'
import Layout from '../../../components/Layout'
import Header from '../../../components/Header'
import ListReksadana from '../../../components/Investasi/ListReksadana'

import Bni from '../../../assets/Logo/bank bni logo (1).svg'
import Bca from '../../../assets/Logo/Vector (2).svg'
import Mandiri from '../../../assets/Logo/bank mandiri logo.svg'
import { Link } from 'react-router-dom'

const CaseCard = tw.div`w-full h-full bg-[#EBFEF2] relative rounded-2xl mt-5`
const CaseBg = tw.img`w-full`
const CaseContent = tw.div`w-full h-full top-0 absolute items-center justify-between flex px-5`
const CaseInfo = tw.div` flex flex-col w-full`
const TitleCard = tw.h1`text-sm font-Medium `
const Price = tw.h1`text-2xl text-[#16BF78] font-Bold`
const CaseButton = tw.div`w-1/2 h-full items-center justify-center flex`
const ButtonSell = tw.button`bg-[#16BF78] text-white text-sm font-Medium px-6 py-2 rounded-lg`
const Title = tw.h1`w-full text-xl font-Medium mt-7`
const Screen = tw.div`w-full h-screen`


function Investasi() {
    return (
        <>
            <Layout>
                <Screen>
                <Header link={"/home"} title={"Yuk Investasi"} />
                <Container>
                    <CaseCard>
                        <CaseBg src={BgCard} />
                        <CaseContent>
                            <CaseInfo>
                                <TitleCard>Total Investasi</TitleCard>
                                <Price>Rp. 12.000.000</Price>
                            </CaseInfo>
                            <CaseButton>
                                <ButtonSell>Jual</ButtonSell>
                            </CaseButton>
                        </CaseContent>
                    </CaseCard>
                    <Title>Produk Reksadana</Title>
                    <Link to='/detail-reksadana'>
                        <ListReksadana logo={Bni} logoname={"BNI Untuk Negeri"}/>
                    </Link>
                    <ListReksadana logo={Bca} logoname={"Bank Central Asia"}/>
                    <ListReksadana logo={Mandiri} logoname={"Mandiri Pasar Uang Syariah"}/>
                </Container>
                </Screen>
            </Layout>
        </>
    )
}

export default Investasi