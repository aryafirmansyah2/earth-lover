import React from 'react'
import Container from '../../../components/common/Container'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout'
import { AiFillStar } from "react-icons/ai"
import tw from 'twin.macro'
import Avatar from '../../../assets/Avatar/Frame 6.svg'

const CasePicker = tw.div`w-full flex items-start border-b-[1px] border-[#6A6A6A] py-5 `
const ImgPicker = tw.img`rounded-full`
const CaseDeskripsi = tw.div`ml-5`
const NamaPicker = tw.h1`text-[16px] font-Medium `
const CaseBintang = tw.div`w-full text-[#FDD350] flex items-center`
const Penilaian = tw.p`text-[#6A6A6A] text-[14px] font-Reguler`
const Screen = tw.div`w-full h-screen`


function Ulasan() {
  return (
    <div>
      <Layout>
        <Screen>
          <Header link={'/user'} title={'Penilaian'} />
          <Container>
            <CasePicker>
              <ImgPicker src={Avatar} />
              <CaseDeskripsi>
                <NamaPicker>Jhonas Thomson</NamaPicker>
                <CaseBintang>
                  <AiFillStar style={{ marginRight: "5px", color: "#6A6A6A" }} />
                  <AiFillStar style={{ marginRight: "5px", color: "#6A6A6A" }} />
                  <AiFillStar style={{ marginRight: "5px", color: "#6A6A6A" }} />
                  <AiFillStar style={{ marginRight: "5px", color: "#6A6A6A" }} />
                  <AiFillStar style={{ marginRight: "5px", color: "#6A6A6A" }} />
                  <p style={{ color: "#6A6A6A", fontSize: "14px", fontFamily: "SF Pro Rounded Reguler" }}>Belum Dinilai</p>
                </CaseBintang>
                <Penilaian>
                  -
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
        </Screen>
      </Layout>
    </div>
  )
}

export default Ulasan