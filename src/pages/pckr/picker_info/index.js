import React, { useEffect, useState } from 'react'
import tw from 'twin.macro'

import Layout from '../../../components/Layout'

import { BiEdit } from 'react-icons/bi'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AiFillStar } from 'react-icons/ai'

const ContentUser = tw.div`w-full h-screen  sm:mb-24 md:mb-0`
const BgUSerPicker = tw.div`w-full pb-20 bg-green-1 z-10`
const ContainerUser = tw.div` px-5 `
const CaseInfoUser = tw.div`w-full  pt-5 `
const CaseInfoUserr = tw.div`w-full bg-black z-20 relative top-[-55px]`
const CaseProfile = tw.div` w-full h-full flex items-center justify-start top-0 pt-10`
const BgInfoUser = tw.div`w-full shadow-md  absolute top-1 bg-white rounded-xl flex items-center justify-around py-7`
const CaseAvatar = tw.img`ml-7 w-16 h-16 rounded-[100%]`
const CaseTextUser = tw.div`w-full ml-5 flex flex-col items-start justify-start `
const Name = tw.div`text-white font-Semibold sm:text-[18px] md:text-xl`
const CaseIcon = tw.div` sm:ml-16 md:ml-32 text-white text-3xl`
const IconEdit = tw.div`pr-8`
const IconEditt = tw.div`flex items-center text-white`
const Title = tw.h1`w-full text-[20px] font-Semibold mt-20 mb-4`
const CaseBatal = tw.div`flex flex-col items-center justify-center`
const TitleBatal = tw.h1`text-green-1 font-Reguler text-[14px]`
const JumlahDibatalkan = tw.h1`text-green-1 font-Medium text-[24px]`
const Vertikal = tw.div`w-0 h-[50px] border-l-[3px] border-green-1 rounded-xl`

const Casemenu = tw.div`w-full py-4 border-b-2 border-[#e6e6e6] flex items-center `
const TitleMenu = tw.button`w-full text-lg font-Reguler flex justify-items-start`
const CaseMainMenu = tw.div`shadow-md px-5 rounded-xl`

function UserPicker() {

    const token = localStorage.getItem('token')
    const navigate = useNavigate();

    const [nama, setNama] = useState()
    const [picture, setPicture] = useState()

    const fetchDataPicker = () => {
        axios.get('https://earthlover.herokuapp.com/api/picker/profil', {
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then(res => {
                console.log(res.data)

                setNama(res.data.data.name)
                setPicture(res.data.data.picture)
            })
    }

    function LogoutHandler() {
        localStorage.removeItem("token")
        localStorage.removeItem("role")
        navigate('/picker')
    }

    useEffect(() => {
        fetchDataPicker()
    })


    return (
        <>
            <Layout>
                <ContentUser>
                    <BgUSerPicker>
                        <CaseInfoUser>
                            <CaseProfile>
                                <CaseAvatar src={picture} />
                                <CaseTextUser >
                                    <Name> {nama} </Name>
                                    <IconEditt to='/home'><AiFillStar style={{ color: "#FFFF00" }} />4,5 </IconEditt>
                                </CaseTextUser>
                                <CaseIcon>
                                    <NavLink to='/home-pckr/user-picker/edit-picker'>
                                        <IconEdit><BiEdit /></IconEdit>
                                    </NavLink>
                                </CaseIcon>
                            </CaseProfile>
                        </CaseInfoUser>
                    </BgUSerPicker>

                    <ContainerUser>
                        <CaseInfoUserr>
                            <BgInfoUser>
                                <Link to='/home-pckr/user-picker/cancel-picker'>
                                    <CaseBatal>
                                        <TitleBatal>Diabatalkan Anda</TitleBatal>
                                        <JumlahDibatalkan>1</JumlahDibatalkan>
                                    </CaseBatal>
                                </Link>
                                <Vertikal />
                                <Link to='/home-pckr/user-picker/cancel-customer'>
                                    <CaseBatal>
                                        <TitleBatal>Diabatalkan Pelanggan</TitleBatal>
                                        <JumlahDibatalkan>1</JumlahDibatalkan>
                                    </CaseBatal>
                                </Link>
                            </BgInfoUser>
                        </CaseInfoUserr>
                    </ContainerUser>

                    <ContainerUser>
                        <Title>Setting</Title>
                        <CaseMainMenu>
                            <Casemenu>
                                <Link to={"/home-pckr/user-picker/ubah-sandi-picker"}>
                                    <TitleMenu>Ubah Sandi</TitleMenu>
                                </Link>
                            </Casemenu>
                            <Casemenu style={{ border: "none" }}>
                                <Link to={"/home-pckr/user-picker/ulasan"}>
                                    <TitleMenu>Penilaian</TitleMenu>
                                </Link>
                            </Casemenu>
                        </CaseMainMenu>
                        <CaseMainMenu style={{ marginTop: '20px' }}>
                            <Casemenu style={{ border: "none" }}>
                                <TitleMenu onClick={LogoutHandler}>Logout</TitleMenu>
                            </Casemenu>
                        </CaseMainMenu>
                    </ContainerUser>
                    {/* <Navbar /> */}
                </ContentUser>
            </Layout>
        </>
    )
}

export default UserPicker