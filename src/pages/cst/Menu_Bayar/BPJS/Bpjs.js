import React from 'react'
import { NavLink } from 'react-router-dom'
import tw from 'twin.macro'
import Container from '../../../../components/common/Container'
import Header from '../../../../components/Header'
import Layout from '../../../../components/Layout'

const Case = tw.div`w-full flex flex-col  `
const Bulan = tw.button`py-4 border-b-2 w-full flex justify-start`
const Screen = tw.div`w-full h-screen`

function Bpjs() {
    return (
        <div>
            <Layout>
                <Screen>
                    <Header link={'/home'} title={"Pilih Bulan"} />
                    <Container>
                        <Case>
                            <NavLink to='/input-nomer-bpjs'>
                                <Bulan>Januari</Bulan>
                            </NavLink>
                            <NavLink to='/input-nomer-bpjs'>
                                <Bulan>Febuari</Bulan>
                            </NavLink>
                            <NavLink to='/input-nomer-bpjs'>
                                <Bulan>Maret</Bulan>
                            </NavLink>
                            <NavLink to='/input-nomer-bpjs'>
                                <Bulan>April</Bulan>
                            </NavLink>
                            <NavLink to='/input-nomer-bpjs'>
                                <Bulan>Mei</Bulan>
                            </NavLink>
                            <NavLink to='/input-nomer-bpjs'>
                                <Bulan>Juni</Bulan>
                            </NavLink>
                            <NavLink to='/input-nomer-bpjs'>
                                <Bulan>Juli</Bulan>
                            </NavLink>
                            <NavLink to='/input-nomer-bpjs'>
                                <Bulan>Agustus</Bulan>
                            </NavLink>
                            <NavLink to='/input-nomer-bpjs'>
                                <Bulan>September</Bulan>
                            </NavLink>
                            <NavLink to='/input-nomer-bpjs'>
                                <Bulan>Oktober</Bulan>
                            </NavLink>
                            <NavLink to='/input-nomer-bpjs'>
                                <Bulan>November</Bulan>
                            </NavLink>
                            <NavLink to='/input-nomer-bpjs'>
                                <Bulan>Desember</Bulan>
                            </NavLink>
                        </Case>
                    </Container>
                </Screen>
            </Layout>
        </div>
    )
}

export default Bpjs