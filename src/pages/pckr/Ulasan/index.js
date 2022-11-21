import React from 'react'
import tw from 'twin.macro'
import { AiFillStar } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import Avatar from '../../../assets/Avatar/Frame 6.svg'
import Container from '../../../components/common/Container'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout'

const CasePenilaian = tw.div`w-full h-full bg-white  shadow-md rounded-2xl p-4 flex justify-center flex-col mb-11`
const CaseStar = tw.div`w-[100%] flex justify-around items-center text-xl font-Medium`
const JumlahPenilaian = tw.div`text-[16px] text-[#979797] font-Medium flex items-center justify-center mt-7`

const CasePicker = tw.div`w-full flex items-start border-b-[1px] border-[#E2E2E2] py-5 `
const ImgPicker = tw.img`rounded-full`
const CaseDeskripsi = tw.div`ml-5`
const NamaPicker = tw.h1`text-[16px] font-Medium `
const CaseBintang = tw.div`w-full text-[#FDD350] flex items-center`
const Penilaian = tw.p`text-[#6A6A6A] text-[14px] font-Reguler`
// const Screen = tw.div`w-full h-screen`

function UlasanPicker() {
  return (
    <div>
      <Layout>
        <Header link={'/home-pckr/user-picker'} title={"Ulasan"} />
        <Container>
          <CasePenilaian >
            <CaseStar>
              <AiFillStar style={{ fontSize: "40px", color: "#FDD350" }} />
              <AiFillStar style={{ fontSize: "40px", color: "#FDD350" }} />
              <AiFillStar style={{ fontSize: "40px", color: "#FDD350" }} />
              <AiFillStar style={{ fontSize: "40px", color: "#FDD350" }} />
              <AiFillStar style={{ fontSize: "40px", color: "#FDD350" }} />
              4,5
            </CaseStar>
            <JumlahPenilaian><FaUserAlt style={{ marginRight: "20px" }} /> 124 Penilaian</JumlahPenilaian>
          </CasePenilaian>
          <CasePicker>
              <ImgPicker src={Avatar} />
              <CaseDeskripsi>
                <NamaPicker>Jhonas Thomson</NamaPicker>
                <CaseBintang>
                  <AiFillStar style={{ marginRight: "5px" }} />
                  <AiFillStar style={{ marginRight: "5px" }} />
                  <AiFillStar style={{ marginRight: "5px" }} />
                  <AiFillStar style={{ marginRight: "5px" }} />
                  <AiFillStar style={{ marginRight: "5px", color: "#6A6A6A" }} />
                  <p style={{ color: "#6A6A6A" }}>4.5</p>
                </CaseBintang>
                <Penilaian>
                  saya sangat puas atas pelayanan anda. dengan cepat lingkungan rumah saya lebih bersih dan rapi terbebas sampah
                </Penilaian>
              </CaseDeskripsi>
            </CasePicker>
            <CasePicker>
              <ImgPicker src={Avatar} />
              <CaseDeskripsi>
                <NamaPicker>Jhonas Thomson</NamaPicker>
                <CaseBintang>
                  <AiFillStar style={{ marginRight: "5px" }} />
                  <AiFillStar style={{ marginRight: "5px" }} />
                  <AiFillStar style={{ marginRight: "5px" }} />
                  <AiFillStar style={{ marginRight: "5px" }} />
                  <AiFillStar style={{ marginRight: "5px", color: "#6A6A6A" }} />
                  <p style={{ color: "#6A6A6A" }}>4.5</p>
                </CaseBintang>
                <Penilaian>
                  saya sangat puas atas pelayanan anda. dengan cepat lingkungan rumah saya lebih bersih dan rapi terbebas sampah
                </Penilaian>
              </CaseDeskripsi>
            </CasePicker>
            <CasePicker>
              <ImgPicker src={Avatar} />
              <CaseDeskripsi>
                <NamaPicker>Jhonas Thomson</NamaPicker>
                <CaseBintang>
                  <AiFillStar style={{ marginRight: "5px" }} />
                  <AiFillStar style={{ marginRight: "5px" }} />
                  <AiFillStar style={{ marginRight: "5px" }} />
                  <AiFillStar style={{ marginRight: "5px" }} />
                  <AiFillStar style={{ marginRight: "5px", color: "#6A6A6A" }} />
                  <p style={{ color: "#6A6A6A" }}>4.5</p>
                </CaseBintang>
                <Penilaian>
                  saya sangat puas atas pelayanan anda. dengan cepat lingkungan rumah saya lebih bersih dan rapi terbebas sampah
                </Penilaian>
              </CaseDeskripsi>
            </CasePicker>
        </Container>
      </Layout>
    </div>
  )
}

export default UlasanPicker
