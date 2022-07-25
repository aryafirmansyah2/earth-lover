import React from 'react'
import { NavLink } from 'react-router-dom'
import tw from 'twin.macro'
import Container from '../../../components/common/Container'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout'

const CaseContent = tw.div`w-full flex flex-col items-start justify-center`
const Content = tw.h1`w-full py-5 pl-5 border-b-2 border-[#EAEAEA] text-[16px] font-Reguler `

function Bantuan() {
    return (
        <div>
            <Layout>
                <Header link={'/user'} title={'Bantuan'} />
                <Container>
                    <CaseContent>
                        <NavLink to="/hubunngi-kami"  style={{width:"100%"}}>
                            <Content>Hubungi kami</Content>
                        </NavLink>
                        <NavLink to="/hubunngi-kami" style={{width:"100%"}}>
                            <Content>Ketentuan Layanan</Content>
                        </NavLink>
                        <NavLink to="/hubunngi-kami" style={{width:"100%"}}>
                            <Content>Kebijakan Privasi</Content>
                        </NavLink>
                    </CaseContent>
                </Container>
            </Layout>
        </div>
    )
}

export default Bantuan