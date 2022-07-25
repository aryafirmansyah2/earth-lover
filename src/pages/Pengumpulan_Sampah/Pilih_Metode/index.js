import React from 'react'
import tw from 'twin.macro'
import './index.css'

import Layout from '../../../components/Layout'
import Header from '../../../components/Header'
import Container from '../../../components/common/Container'

import img1 from '../../../assets/Foto/amico.svg'
import img2 from '../../../assets/Foto/amico2.svg'
import { Link } from 'react-router-dom'


const CaseContent = tw.div`w-full flex flex-col justify-center items-center`
const CaseMenu = tw.div` flex flex-col justify-center items-center w-full h-80 rounded-2xl`
const CaseMenu2 = tw.div` flex flex-col justify-center items-center w-full h-80 rounded-2xl bg-[#16BF78]  mt-5`
const ImgMenu = tw.img``
const TitleMetode = tw.h1`text-lg font-Medium text-white mt-10`
const TitleMetode2 = tw.h1`text-lg font-Medium text-[#16BF78] mt-10`
const ButtonRiwayat = tw.button`border-2 border-green-1 rounded-3xl w-full mt-24 py-3 text-green-1 text-lg font-Semibold `

const styled={
    width:"100%",
    
}

function Metode() {
    return (
        <div>
            <Layout>
                <Header link={"/home"} title={"Pilih Metode Pengumpulan"} />
                <Container>
                    <CaseContent>
                        <Link to='/kamera' style={styled}  >
                            <CaseMenu tw='bg-white' className="link" >
                                <ImgMenu src={img1} />
                                <TitleMetode2>
                                    Antar ke Titik Pengumpulan
                                </TitleMetode2>
                            </CaseMenu>
                        </Link>
                        <Link to='/request-pickup' style={styled} >
                            <CaseMenu2 className="link">
                                <ImgMenu src={img2} />
                                <TitleMetode>
                                    Request Penjemputan
                                </TitleMetode>
                            </CaseMenu2>
                        </Link>
                    </CaseContent>
                    <Link to='/riwayat-order'>
                        <ButtonRiwayat to='/home'>
                            Lihat Riwayat
                        </ButtonRiwayat>
                    </Link>
                </Container>
            </Layout>
        </div>
    )
}

export default Metode