import React from 'react'
import tw from 'twin.macro'
import { MapContainer, TileLayer } from 'react-leaflet';
import Layout from '../../../components/Layout'
import { Link } from 'react-router-dom'
import Avatar1 from '../../../assets/Avatar/Frame 6.svg'
// import { FaTruck } from 'react-icons/fa'
import './index.css'

import { BsArrowLeftShort } from 'react-icons/bs'
import Container from '../../../components/common/Container'
// import Navbar from '../../../components/Navbar'
import RoutingMachine from './route';
import { BiRightArrowAlt } from 'react-icons/bi';
// import MainButton from '../../../components/common/Button/Main'

const Case = tw.div`w-full h-screen flex justify-center relative `
const CaseMap = tw.div`h-screen w-full `

const CaseInfo = tw.div`absolute bottom-0 w-full pb-12 bg-white rounded-tl-[30px] rounded-tr-[30px] `

const IconArrow = tw.div`absolute text-5xl w-16 h-16 bg-white flex justify-center items-center left-5 top-5 rounded-[100%] shadow-xl`

const ProfilePetugas = tw.div` w-full flex items-center justify-start mt-7 `
const FotoPtgs = tw.img`rounded-[100%] w-32`
const CaseInfoKurir = tw.div`flex flex-col justify-center items-start ml-5  `
const Deskripsi = tw.h2`text-[16px] font-Medium  `
const Name = tw.h2`text-[24px] font-Medium text-green-1`
const ButtonPtgs = tw.button`bg-green-1 text-white text-[16px] p-2 rounded-lg mt-5`

const BtnDetail = tw.button`w-full bg-[#D9FDE5] px-3 py-3 rounded-lg mt-8`
const CaseContent = tw.div`w-full flex items-center justify-between` 
const Title = tw.h1`text-green-1 text-[16px] font-Medium`
const CaseIcon = tw.div`text-[25px] text-green-1`
function MapPicker() {
    return (
        <div>
            <Layout>
                <Case>
                    <CaseMap>
                        <MapContainer center={[-7.57026839783718, 112.23677066814048]} zoom={16} zoomControl={false} scrollWheelZoom={true} className='con'>
                            <TileLayer
                                url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
                                attribution="Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri"
                            />
                            <RoutingMachine />
                        </MapContainer>
                    </CaseMap>
                    <IconArrow>
                        <Link to='/notif-selesai'>
                            <BsArrowLeftShort />
                        </Link>
                    </IconArrow>
                    <CaseInfo>
                        <Container>
                            {/* <CaseStatus>
                                <IconStatus><FaTruck /></IconStatus>
                                <div style={{ fontWeight: "700" }}>-</div>
                                <TitleStatus>Petugas Dalam Perjalanan</TitleStatus>
                            </CaseStatus> */}
                            <ProfilePetugas>
                                <FotoPtgs src={Avatar1} />
                                <CaseInfoKurir>
                                    <Name>Jordan Salim</Name>
                                    <Deskripsi>2Kg - Sampah Organik</Deskripsi>
                                    <ButtonPtgs>Hubungi Pelanggan</ButtonPtgs>
                                </CaseInfoKurir>
                            </ProfilePetugas>
                            <BtnDetail>
                                <CaseContent>
                                    <Title>Cek Detail</Title>
                                    <CaseIcon><BiRightArrowAlt/></CaseIcon>
                                </CaseContent>
                            </BtnDetail>
                        </Container>
                    </CaseInfo>
                </Case>
                {/* <Navbar /> */}
            </Layout>

        </div>
    )
}

export default MapPicker