import React from 'react'
import tw from 'twin.macro'
import {Link} from 'react-router-dom'
import Container from '../../../components/common/Container'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout'
import Bni from '../../../assets/Logo/bank bni logo (1).svg'
import Chart from '../../../assets/Foto/Frame 1011.svg'
import MainButton from '../../../components/common/Button/Main'

const CaseListReksadana = tw.div`w-full h-28 flex items-center  bg-[#EBFEF2] rounded-lg`
const CaseLogo = tw.div`bg-[#16BF78]  flex items-center justify-center rounded-2xl ml-5`
const Logo = tw.img`px-5 py-8`
const CaseTitle = tw.div`pl-3 flex flex-col justify-center items-start`
const NameLogo = tw.h2`text-[16px] font-Medium text-black `
const Deskripsi = tw.h2`text-[16px] font-Reguler text-[#535353]`

const CaseInfoA = tw.div`w-full flex flex-col  mt-5 `
const Case = tw.div`w-full flex flex-col `
const FlexCase = tw.div`flex mt-5`
const TitleInfo = tw.p``
const Data = tw.p`text-[#989898] text-sm`

const CaseInfoB = tw.div`w-full flex mt-10 `
const Case2 = tw.div`w-full flex flex-col justify-center items-center`
const TitleInfo2 = tw.p`text-[#989898] `
const Data2 = tw.p`text-[16px]`

const ImgChart = tw.img`w-full mt-12`

const CaseWaktu = tw.div`w-full flex flex-col justify-center items-center mb-5`
const TitleWaktu = tw.p`text-[#989898] mt-5`
const CaseButton = tw.div`flex justify-around mt-5 `
const ButtonWaktu = tw.button`mx-5 text-green-1 border-[1px] px-3 py-2 rounded-3xl border-green-1 bg-[#EBFEF2] focus:bg-green-1 focus:text-white`

function DetailReksadana() {
    return (
        <div>
            <Layout>
                <Header link={"/investasi"} title={"Detail Reksadana"} />
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
                    <CaseInfoA>
                        <Case>
                            <TitleInfo>JumLah Investasi</TitleInfo>
                            <Data>(0 Unit)</Data>
                        </Case>
                        <FlexCase>
                            <Case>
                                <TitleInfo>Keuntungan Harian</TitleInfo>
                                <Data>Rp 0</Data>
                            </Case>
                            <Case>
                                <TitleInfo>Total Keuntungan</TitleInfo>
                                <Data>Rp 0</Data>
                            </Case>
                        </FlexCase>
                    </CaseInfoA>
                    <CaseInfoB>
                        <Case2>
                            <TitleInfo2>Nilai Aktiva Bersih/Unit</TitleInfo2>
                            <Data2>1111.28</Data2>
                        </Case2>
                        <Case2>
                            <TitleInfo2>Keutungan/Tahun</TitleInfo2>
                            <Data2>2.08%</Data2>
                        </Case2>
                    </CaseInfoB>
                    <ImgChart src={Chart} />
                    <CaseWaktu>
                        <TitleWaktu>Jumlah Waktu</TitleWaktu>
                        <CaseButton>
                            <ButtonWaktu>3 Bulan</ButtonWaktu>
                            <ButtonWaktu>6 Bulan</ButtonWaktu>
                            <ButtonWaktu>1 Tahun</ButtonWaktu>
                        </CaseButton>
                    </CaseWaktu>
                    <Link to='/detail-pembelian'>
                        <MainButton>Beli</MainButton>
                    </Link>
                </Container>
            </Layout>
        </div>
    )
}

export default DetailReksadana