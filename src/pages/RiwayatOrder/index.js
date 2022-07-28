import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Container from '../../components/common/Container'
import Navbar from '../../components/Navbar'
import ListOrder from '../../components/Order/Riwayat_Order'

const BgProse1 = tw.div`w-full font-Medium h-8 sm:text-sm md:text-[16px] bg-[#FDFDE3] text-[#DDBA02] px-10 rounded-2xl flex items-center justify-center content-['proses']`;
const BgProse2 = tw.div`w-full font-Medium h-8 sm:text-sm md:text-[16px] bg-[#D9FDE5] text-green-1 px-10 rounded-2xl flex items-center justify-center content-['selesai']`;
const BgProse3 = tw.div`w-full font-Medium h-8 sm:text-sm md:text-[16px] bg-[#FDD9D9] text-[#BF1616] px-12  rounded-2xl flex items-center justify-center content-['dibatalkan']`;
const Screen = tw.div`w-full h-screen`

function RiwayatOrder() {
    return (
        <>
            <Layout>
                <Screen>
                    <Header link={"/home"} title={"Riwayat Order"} />
                    <Container>
                        <ListOrder status={<BgProse1>Proses</BgProse1>} />
                        <ListOrder status={<BgProse2>Selesai</BgProse2>} />
                        <ListOrder status={<BgProse3>Dibatalkan</BgProse3>} />
                    </Container>
                    <Navbar />
                </Screen>
            </Layout>
        </>
    )
}

export default RiwayatOrder