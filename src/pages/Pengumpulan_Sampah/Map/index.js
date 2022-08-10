import React from 'react'
import tw from 'twin.macro'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import Layout from '../../../components/Layout'
import { Link } from 'react-router-dom'
import Avatar1 from '../../../assets/Avatar/Frame 6.svg'
import { FaTruck } from 'react-icons/fa'
import './index.css'

import { BsArrowLeftShort } from 'react-icons/bs'
import Container from '../../../components/common/Container'
import Navbar from '../../../components/Navbar'
import RoutingMachine from './route';
// import MainButton from '../../../components/common/Button/Main'

const Case = tw.div`w-full h-screen flex justify-center relative `
const CaseMap = tw.div`h-screen w-full `

const CaseInfo = tw.div`absolute bottom-0 w-full h-96 bg-white rounded-tl-[30px] rounded-tr-[30px] `

const IconArrow = tw.div`absolute text-5xl w-16 h-16 bg-white flex justify-center items-center left-5 top-5 rounded-[100%] shadow-xl`

const ProfilePetugas = tw.div` w-full flex items-center justify-start `
const FotoPtgs = tw.img`rounded-[100%] w-32`
const CaseInfoKurir = tw.div`flex flex-col justify-center items-start ml-5  `
const NamaPtgs = tw.h2`text-[16px] font-Reguler text-[#737373] `
const Id = tw.h2`text-[24px] font-Bold`
const ButtonPtgs = tw.button`bg-green-1 text-white text-[16px] p-2 rounded-lg mt-5`

const CaseStatus = tw.div`w-full flex items-center justify-center mb-10 mt-5`
const IconStatus = tw.div`mr-3 text-green-1 text-3xl`
const TitleStatus = tw.p`text-xl font-Bold ml-3`
function Map() {
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
                            <CaseStatus>
                                <IconStatus><FaTruck /></IconStatus>
                                <div style={{ fontWeight: "700" }}>-</div>
                                <TitleStatus>Petugas Dalam Perjalanan</TitleStatus>
                            </CaseStatus>
                            <ProfilePetugas>
                                <FotoPtgs src={Avatar1} />
                                <CaseInfoKurir>
                                    <Id>N 8829 LG</Id>
                                    <NamaPtgs>Agus Purnomo</NamaPtgs>
                                    <ButtonPtgs>Hubungi petugas</ButtonPtgs>
                                </CaseInfoKurir>
                            </ProfilePetugas>
                        </Container>
                    </CaseInfo>
                </Case>
                <Navbar />
            </Layout>

        </div>
    )
}

export default Map