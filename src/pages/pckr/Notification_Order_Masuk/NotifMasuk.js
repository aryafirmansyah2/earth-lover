import React from 'react'
import tw from 'twin.macro'

import BgAvatar from "../../../assets_pckr/bg/amico.svg"
import Cst from '../../../assets_pckr/foto/Frame 6 (1).png'
import DangerBtn from '../../../components/common/Button/DangerBtn'
import MainButton from '../../../components/common/Button/Main'
import Container from '../../../components/common/Container'
import Layout from '../../../components/Layout'

const CaseNotifOrder = tw.div` flex flex-col items-center justify-center py-16`
const AvatarNotif = tw.img``
const MainTitleNotif = tw.h1`font-Semibold text-2xl text-green-1 mt-4`
const DeskripsiTitle = tw.p`font-Reguler text-[14px] mt-2`

const BgCaseInfo = tw.div`rounded-t-3xl bg-[#EBFEF2] w-full `
const CaseDataUser = tw.div`w-full flex items-center`
const ImgUser = tw.img` rounded-lg`
const CaseInfoUser = tw.div`ml-5`
const Name = tw.h1`font-Medium text-2xl text-green-1`
const DeskripsiUser = tw.p`font-Medium text-[16px]`
const Case = tw.div`w-full flex flex-col items-center justify-center mt-4`
const CaseContent = tw.div`w-full flex flex-col items-start justify-center`
const Title = tw.h1`text-lg font-Medium`
const CaseAlamat = tw.div`flex flex-col justify-center items-start `
const NamaBangunan = tw.h2`text-lg font-Semibold `
const Alamat = tw.h2`text-[16px] font-Light`

function NotifMasuk() {
    return (
        <Layout>
            <CaseNotifOrder>
                <AvatarNotif src={BgAvatar} />
                <MainTitleNotif>Pesanan Baru Utukmu...</MainTitleNotif>
                <DeskripsiTitle>Anda mendapatkan pesanan baru</DeskripsiTitle>
            </CaseNotifOrder>
            <BgCaseInfo>
                <Container>
                    <Container>
                        <CaseDataUser>
                            <ImgUser src={Cst} />
                            <CaseInfoUser>
                                <Name>Arya Firmansyah</Name>
                                <DeskripsiUser>2Kg - Sampah Organik</DeskripsiUser>
                            </CaseInfoUser>
                        </CaseDataUser>
                        <Case>
                            <CaseContent>
                                <Title>Alamat : </Title>
                                <CaseAlamat>
                                    <NamaBangunan>Inagata Technosmith</NamaBangunan>
                                    <Alamat>jalan haji ismail no 5 jombang jawa ttimur</Alamat>
                                </CaseAlamat>
                            </CaseContent>
                        </Case>
                        <Case>
                            <CaseContent>
                                <Title>Tanggal Pengambilan :</Title>
                                <Alamat>09.00 Am - 10.00 AM</Alamat>
                            </CaseContent>
                        </Case>
                        <DangerBtn style={{ margin: 0, marginTop: "50px" }}>Batalkan Pesanan</DangerBtn>
                        {/* <Link to="" style={{ width: "100%" }}> */}
                        <MainButton style={{ width: "100%" }}>Pesanan Selesai</MainButton>
                        {/* </Link> */}
                    </Container>
                </Container>
            </BgCaseInfo>
        </Layout>
    )
}

export default NotifMasuk