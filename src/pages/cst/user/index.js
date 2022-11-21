import React, { useEffect, useState } from 'react'
import tw from 'twin.macro'

import Layout from '../../../components/Layout'
import Navbar from '../../../components/Navbar'
import ImgHero from '../../../assets/Foto/unsplash_skinHyj_5cY.svg'
import BgUser from '../../../assets/Bg/Frame 27 (3).svg'
// import Avatar from '../../../assets/Avatar/unsplash_EZ4TYgXPNWk.svg'

import { BiEdit } from 'react-icons/bi'
import MenuSetting from '../../../components/User/MenuSetting'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

const ContentUser = tw.div`w-full h-screen relative sm:mb-24 md:mb-0`
const BgImgHero = tw.img`w-full`
const ContainerUser = tw.div`absolute p-5 top-0`

const CaseText = tw.div` w-full pt-28 pb-10`
const TextMain = tw.h2`text-white text-4xl`
const TextSecond = tw.h2`text-white text-sm mt-3`

const CaseInfoUser = tw.div`w-full relative pt-10 `
const CaseProfile = tw.div`absolute w-full h-full flex items-center justify-start top-0 pt-10`
const BgInfoUser = tw.img`w-full`
const CaseAvatar = tw.img`ml-7 w-16 h-16 rounded-[100%]`
const CaseTextUser = tw.div` ml-5 flex flex-col items-start justify-start `
const Name = tw.div`text-white font-Semibold sm:text-[18px] md:text-xl`
const NoHp = tw.div`text-white font-Light text-sm`
const CaseIcon = tw.div` sm:ml-16 md:ml-32 text-white text-3xl`
const IconEdit = tw.div``

const Title = tw.h1`w-full text-[20px] font-Semibold mt-3 mb-4`



function User() {

    const [customer, setCustomer] = useState({})

    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    console.log(customer)

    useEffect(() => {
        fetchData()
    }, [])

    // const LogoutHandler = (e) => {
    //     // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    //     axios.post('https://earthlover.inagata.com/api/customer/logout', {
    //         headers: { 'Authorization': 'Bearer ' + token }
    //     })
    //         .then(() => {
    //             localStorage.removeItem("token")
    //             navigate('/')
    //         })
    //         .catch((err) => {
    //             console.log(err.message)
    //         })
    // }

    function LogoutHandler() {
        localStorage.removeItem("token")
        localStorage.removeItem("role")
        navigate('/')
    }


    const fetchData = () => {
        axios.get("https://earthlover.inagata.com/api/customer/profil", {
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then(result => {
                setCustomer(result.data)
                console.log(result.data)
            })
    }

    // console.log(customer.data?.picture)


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
                                <CaseAvatar src={customer.data?.picture} />
                                <CaseTextUser >
                                    <Name> {customer.data?.name} </Name>
                                    <NoHp> {customer.data?.phone_number} </NoHp>
                                </CaseTextUser>
                                <CaseIcon>
                                    <NavLink to='/edit-user'>
                                        <IconEdit ><BiEdit /></IconEdit>
                                    </NavLink>
                                </CaseIcon>
                            </CaseProfile>
                        </CaseInfoUser>
                        <Title>Setting</Title>
                        <MenuSetting click={LogoutHandler} />
                    </ContainerUser>
                    <Navbar />
                </ContentUser>
            </Layout>
        </>
    )
}

export default User