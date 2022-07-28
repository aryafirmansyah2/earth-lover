import React from 'react'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

import BgHeroo from '../../assets/Foto/unsplash_7rQUllaIE1k (1).png'
import Poin from "../../assets/Foto/Frame 976.png"
import Buy from '../../assets/Foto/Frame 1003.png'
import HeroBuy from '../../assets/Foto/unsplash_AndE50aaHn4.png'
import { BiRightArrowAlt } from 'react-icons/bi'
import ItemsMenu from '../../components/Home/ItemsMenu'

import Pln from '../../assets/Icon/amico.svg'
import Pdam from '../../assets/Icon/PDAM.svg'
import Pulsa from '../../assets/Icon/Pulsa.svg'
import Bpjs from '../../assets/Icon/BPJS.svg'
import Pbb from '../../assets/Icon/amic.svg'
import Navbar from '../../components/Navbar';
import Layout from '../../components/Layout';


const Bg = tw.div`w-full h-full  bg-blue-100 `
const Plate = tw.div`max-w-[480px] h-full bg-[#fefefe] mx-auto z-10 relative `
const ContentHome = tw.div`relative h-[102vh] `
const BgHero = tw.img`w-full `
const ContainerHero = tw.div`w-full h-full top-0 px-5 absolute `
const CaseText = tw.div`sm:pt-28 md:pt-44 pb-14 `
const TextHeroMain = tw.h2`text-white sm:text-[28px] md:text-[32px] font-Bold sm:pr-10 md:pr-16 sm:leading-8 md:leading-10`
const TextHeroSecond = tw.h2`text-white text-[16px] font-Reguler sm:pr-0 md:pr-24 mt-3`

const ContentPoin = tw.div`relative w-full  `
const BgPoin = tw.img`w-full`
const ContainerPoin = tw.div`w-full sm:py-0 md:py-4 px-6 absolute top-0`
const CasePoin = tw.div`flex flex-col`
const TitlePoin = tw.h2`text-white text-lg font-Reguler mt-2`
const ScorePoin = tw.h2`text-4xl font-Bold text-white `
const LinkRiwayat = tw.div`text-[#FFE080] sm:mt-5 md:mt-9 flex items-center`
const TextLink = tw.a`text-[#FFE080] text-[16px] font-Medium`
const IconArrow = tw.div`text-xl ml-2`

const ContentBuy = tw.div`relative w-full mt-5 flex justify-center `
const BgBuy = tw.img`w-full`
const ContainerBuy = tw.div`w-full h-full md:px-4 absolute top-0`
const CaseBuy = tw.div`flex flex-col items-center`
const TextBuyMain = tw.h2` sm:text-[16px] md:text-lg font-Bold text-white tracking-wide pt-2`
const TextBuySecond = tw.h2`text-sm font-Reguler text-white`
const IconHeroBuy = tw.img`absolute bottom-0 sm:w-28 md:w-44`
const ButtonEnd = tw.div`flex justify-end`
const ButtonBuy = tw.button`bg-[#FBDB35] sm:mt-3 md:mt-7 px-3 py-[2px] sm:mr-2 rounded-2xl flex items-center`
const TextButton = tw.p`sm:text-[12px] md:text-sm font-Medium`

const TextBayar = tw.h2`text-lg font-Medium mt-3 mb-2 `

function Home() {
  return (
    <>
      {/* <Bg> */}
      <Layout>
        <ContentHome>
          <BgHero src={BgHeroo} />
          <ContainerHero>
            <CaseText>
              <TextHeroMain>
                Peduli Lingkungan Dapatkan Cuan
              </TextHeroMain>
              <TextHeroSecond>
                Mari Lindungi Bumi Kita Tercinta, Terus Kumpulkan Sampah Di Sekitar Kita
              </TextHeroSecond>
            </CaseText>

            <ContentPoin >
              <BgPoin src={Poin} />
              <ContainerPoin>
                <CasePoin>
                  <TitlePoin>
                    Poin
                  </TitlePoin>
                  <ScorePoin>
                    282
                  </ScorePoin>
                  <Link to='/riwayat-order'>
                    <LinkRiwayat>
                      <TextLink>
                        Lihat Riwayat
                      </TextLink>
                      <IconArrow>
                        <BiRightArrowAlt />
                      </IconArrow>
                    </LinkRiwayat>
                  </Link>
                </CasePoin>
              </ContainerPoin>
            </ContentPoin>

            <ContentBuy>
              <BgBuy src={Buy} />
              <ContainerBuy>
                <CaseBuy>
                  <TextBuyMain>
                    Bumi Sehat, Ekonomi Meningkat
                  </TextBuyMain>
                  <TextBuySecond>
                    Beli Reksadana Tanpa Dana pun Kini Bisa!
                  </TextBuySecond>
                </CaseBuy>
                <ButtonEnd>
                  <Link to="/investasi">
                    <ButtonBuy>
                      <TextButton>
                        Beli Yuk
                      </TextButton>
                      <BiRightArrowAlt />
                    </ButtonBuy>
                  </Link>
                </ButtonEnd>

              </ContainerBuy>
              <IconHeroBuy src={HeroBuy} />
            </ContentBuy>

            <TextBayar>
              Bayar Tagihan & Top Up
            </TextBayar>
            <Swiper slidesPerView={4.5} spaceBetween={10} style={{ marginBottom: "500px" }}>
              <SwiperSlide>
                <ItemsMenu
                  link={"/prabayar-pln"}
                  LogoMenu={Pln}
                  title={"PLN"} />
              </SwiperSlide>
              <SwiperSlide>
                <ItemsMenu
                  link={"/pdam"}
                  LogoMenu={Pdam}
                  title={"PDAM"} />
              </SwiperSlide>
              <SwiperSlide>
                <ItemsMenu
                  link={"/pulsa"}
                  LogoMenu={Pulsa}
                  title={"Pulsa"} />
              </SwiperSlide>
              <SwiperSlide>
                <ItemsMenu
                  link={"/bpjs"}
                  LogoMenu={Bpjs}
                  title={"BPJS"} />
              </SwiperSlide>
              <SwiperSlide>
                <ItemsMenu
                  link={"/pbb"}
                  LogoMenu={Pbb}
                  title={"PBB"} />
              </SwiperSlide>
            </Swiper>
          </ContainerHero>
        </ContentHome>
        <Navbar />
      </Layout>
      {/* </Bg> */}
    </>
  )
}

export default Home