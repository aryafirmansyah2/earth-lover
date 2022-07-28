import React from 'react'
import tw from 'twin.macro'

import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import ImgHero from '../../assets/Foto/unsplash_skinHyj_5cY.svg'
import BgUser from '../../assets/Bg/Frame 27 (3).svg'
import Avatar from '../../assets/Avatar/unsplash_EZ4TYgXPNWk.svg'

import { BiEdit } from 'react-icons/bi'
import MenuSetting from '../../components/User/MenuSetting'
import { NavLink } from 'react-router-dom'

const ContentUser = tw.div`w-full h-screen relative `
const BgImgHero = tw.img`w-full`
const ContainerUser = tw.div`absolute p-5 top-0`

const CaseText = tw.div` w-full pt-28 pb-10`
const TextMain = tw.h2`text-white text-4xl`
const TextSecond = tw.h2`text-white text-sm mt-3`

const CaseInfoUser = tw.div`w-full relative pt-10 `
const CaseProfile = tw.div`absolute w-full h-full flex items-center justify-start top-0 pt-10`
const BgInfoUser = tw.img`w-full`
const CaseAvatar = tw.img`ml-7`
const CaseTextUser = tw.div` ml-5 flex flex-col items-start justify-start `
const Name = tw.div`text-white font-Semibold sm:text-[18px] md:text-xl`
const NoHp = tw.div`text-white font-Light text-sm`
const CaseIcon = tw.div` sm:ml-16 md:ml-32 text-white text-3xl`
const IconEdit = tw.a``

const Title = tw.h1`w-full text-[20px] font-Semibold mt-3 mb-4`

function User() {
    return (
        <>
            <Layout>
                <ContentUser>
                    <BgImgHero src={ImgHero} />
                    <ContainerUser >
                        <CaseText>
                            <TextMain>
                                Profil Saya
                            </TextMain>
                            <TextSecond>
                                Terima kasih telah berkontribusi melindungi bumi,
                                Terus Kumpulkan Sampah Di Sekitar Kita
                            </TextSecond>
                        </CaseText>
                        <CaseInfoUser>
                            <BgInfoUser src={BgUser} />
                            <CaseProfile>
                                <CaseAvatar src={Avatar} />
                                <CaseTextUser>
                                    <Name>Jordan Salim</Name>
                                    <NoHp>082132092648</NoHp>
                                </CaseTextUser>
                                <CaseIcon>
                                    <NavLink to='/edit-user'>
                                        <IconEdit to='/home'><BiEdit /></IconEdit>
                                    </NavLink>
                                </CaseIcon>
                            </CaseProfile>
                        </CaseInfoUser>
                        <Title>Setting</Title>
                        <MenuSetting menu={"Alamat"} link={'/alamat'} />
                        <MenuSetting menu={"Bantuan"} link={'/bantuan'} />
                        <MenuSetting menu={"Ulasan"} link={'/ulasan'} />
                        <MenuSetting menu={"Logout"} link={'/'} />
                    </ContainerUser>
                    <Navbar />
                </ContentUser>
            </Layout>
        </>
    )
}

export default User