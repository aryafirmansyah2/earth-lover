import React from 'react'
import { NavLink } from 'react-router-dom'
import tw from 'twin.macro'
import MainButton from '../../../components/common/Button/Main'
import Container from '../../../components/common/Container'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout'

const CaseListReksadana = tw.div`w-full  flex items-center  border-2 border-green-1 rounded-lg mb-5`
const CaseTitle = tw.div`pl-3 flex flex-col justify-center items-start py-3`
const NameLogo = tw.h2`text-[16px] text-green-1 font-Semibold   `
const Deskripsi = tw.h2`text-[16px] font-Reguler text-[#535353]`

function Alamat() {
    return (
        <div>
            <Layout>
                <Header link={"/user"} title={"Alamat"} />
                <Container>
                    <NavLink to='/detail-alamat'>
                        <CaseListReksadana>
                            <CaseTitle>
                                <NameLogo>
                                    Rumah
                                </NameLogo>
                                <Deskripsi>
                                    Keuntungan investasi dengan mudah
                                </Deskripsi>
                            </CaseTitle>
                        </CaseListReksadana>
                    </NavLink>
                    <CaseListReksadana>
                        <CaseTitle>
                            <NameLogo>
                                Rumah
                            </NameLogo>
                            <Deskripsi>
                                Keuntungan investasi dengan mudah
                            </Deskripsi>
                        </CaseTitle>
                    </CaseListReksadana>
                    <CaseListReksadana>
                        <CaseTitle>
                            <NameLogo>
                                Rumah
                            </NameLogo>
                            <Deskripsi>
                                Keuntungan investasi dengan mudah
                            </Deskripsi>
                        </CaseTitle>
                    </CaseListReksadana>
                </Container>
                <Container style={{ width: "100%", position: "absolute", bottom: '0' }}>
                    <NavLink to='/tambah-alamat' >
                        <MainButton>Tambah Alamat</MainButton>
                    </NavLink>
                </Container>
            </Layout>
        </div>
    )
}

export default Alamat