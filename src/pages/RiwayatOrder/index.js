import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Container from '../../components/common/Container'
import Navbar from '../../components/Navbar'
import ListOrder from '../../components/Order/Riwayat_Order'



function RiwayatOrder() {
    return (
        <>
            <Layout>
                    <Header link={"/home"} title={"Riwayat Order"}/>
                    <Container>
                        <ListOrder/>
                        <ListOrder/>
                        <ListOrder/>
                    </Container>
                    <Navbar />
            </Layout>
        </>
    )
}

export default RiwayatOrder