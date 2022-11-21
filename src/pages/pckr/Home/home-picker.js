import React, { useEffect, useState } from 'react'
import tw from 'twin.macro'
import { Link} from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'

import Container from '../../../components/common/Container'
import Layout from '../../../components/Layout'
import BgCover from '../../../assets_pckr/bg/Frame 27 (5).svg'
import axios from 'axios'


const CaseUser = tw.div`w-full relative`
const BgCoverInfo = tw.img` w-full`
const CaseInfoUser = tw.div`absolute w-full h-full flex items-center justify-start top-0 px-5`
const CaseAvatar = tw.img` md:w-16 sm:w-14 md:h-16 rounded-[100%]`
const CaseTextUser = tw.div`w-full ml-5 flex flex-col items-start justify-start `
const Name = tw.div`text-white font-Semibold sm:text-[18px] md:text-xl`
const NoHp = tw.div`text-white font-Light text-sm`
const CaseIcon = tw.div` sm:ml-16 md:ml-20 text-white text-xl `
const IconEdit = tw.div`flex items-center`

const CaseBreakOption = tw.div`w-full py-10   flex items-center justify-around `
const ButtonBreak = tw.button`w-48 border-2 border-green-1 bg-green-1 text-white font-Reguler rounded-xl px-4 py-2`
const ButtonWork = tw.button`w-48 border-2 border-green-1 font-Reguler rounded-xl px-4 py-2`

const CaseListOrder = tw.div`w-full h-28 flex items-center  border-b-[#D9EEFD] border-b-[1px]`;
const CaseTanggal = tw.div`sm:w-20 md:w-24 sm:h-20 md:h-24 bg-[#E7FEF3]  flex flex-col items-center justify-center rounded-2xl `;
const Tanggal = tw.h2`sm:text-2xl md:text-4xl font-Medium`;
const Bulan = tw.h2`sm:text-[16px] md:text-lg font-Medium`;
const CaseTitle = tw.div`w-3/5 h-full  pl-3 flex flex-col justify-center items-start`;
const Industri = tw.h2`sm:text-[16px] md:text-lg font-Bold`;
const Time = tw.h2`text-sm font-Light`;
const Berat = tw.h2`sm:text-[16px] md:text-lg text-[#16BF78] font-Medium`;
const Poin = tw.span`sm:text-[16px] md:text-lg text-[#16BF78] font-Bold`;

function HomePicker() {

  const token = localStorage.getItem('token')

  const [nama, setNama] = useState()
  const [phone, setPhone] = useState()
  const [picture, setPicture] = useState()

  const fetchDataPicker = () => {
    axios.get('https://earthlover.herokuapp.com/api/picker/profil', {
      headers: { 'Authorization': 'Bearer ' + token }
    })
      .then(res => {
        // console.log(res.data.data.name)
        setNama(res.data.data.name)
        setPhone(res.data.data.phone_number)
        setPicture(res.data.data.picture)
      })
  }

  useEffect(() => {
    fetchDataPicker()
  }, )


  return (
    <Layout>
      <Container>
        <Link to='/home-pckr/user-picker'>
          <CaseUser>
            <BgCoverInfo src={BgCover} />
            <CaseInfoUser>
              <CaseAvatar src={picture} />
              <CaseTextUser >
                <Name> {nama}  </Name>
                <NoHp> {phone} </NoHp>
              </CaseTextUser>
              <CaseIcon>
                <IconEdit ><AiFillStar style={{ color: "#FFFF00" }} />4,5 </IconEdit>
              </CaseIcon>
            </CaseInfoUser>
          </CaseUser>
        </Link>
        <CaseBreakOption>
          <ButtonBreak>Sedang Berlangsung</ButtonBreak>
          <ButtonWork>Selesai</ButtonWork>
        </CaseBreakOption>

        <CaseListOrder  >
          <CaseTanggal>
            <Tanggal>23</Tanggal>
            <Bulan>Agustus</Bulan>
          </CaseTanggal>
          <CaseTitle>
            <Industri>Inagata Technomist</Industri>
            <Time>01.00 AM</Time>
            <Berat>
              2kg - <Poin> 20 Poin</Poin>
            </Berat>
          </CaseTitle>
        </CaseListOrder>

        <CaseListOrder  >
          <CaseTanggal>
            <Tanggal>23</Tanggal>
            <Bulan>Agustus</Bulan>
          </CaseTanggal>
          <CaseTitle>
            <Industri>Inagata Technomist</Industri>
            <Time>01.00 AM</Time>
            <Berat>
              2kg - <Poin> 20 Poin</Poin>
            </Berat>
          </CaseTitle>
        </CaseListOrder>

        <CaseListOrder  >
          <CaseTanggal>
            <Tanggal>23</Tanggal>
            <Bulan>Agustus</Bulan>
          </CaseTanggal>
          <CaseTitle>
            <Industri>Inagata Technomist</Industri>
            <Time>01.00 AM</Time>
            <Berat>
              2kg - <Poin> 20 Poin</Poin>
            </Berat>
          </CaseTitle>
        </CaseListOrder>

      </Container>
    </Layout>
  )
}

export default HomePicker