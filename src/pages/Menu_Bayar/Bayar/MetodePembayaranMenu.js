import React from 'react'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'
import Container from '../../../components/common/Container'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout'

const CaseMetode = tw.div`flex items-center justify-center w-full`
const Case = tw.div`flex items-center justify-between p-6 w-full`
const CasePoin = tw.div`flex flex-col items-start`
const Metode = tw.p`text-lg text-[#454545] font-Medium`
const JumlahPoin = tw.p`text-[#989898] text-[12px]`
const Check = tw.input``
const Screen = tw.div`w-full h-screen`


function MetodePembayaranMenu() {
    return (
        <div>
            <Layout>
                <Screen>
                <Header link={"/bayar"} title={"Metode Pembayaran"} />
                <Container>
                    <CaseMetode>
                        <Link to='/bayar' style={{width:"100%"}}>
                            <Case>
                                <Metode>Mandiri Virtual Account</Metode>
                                <Check type="radio" />
                            </Case>
                        </Link>
                    </CaseMetode>
                    <CaseMetode>
                        <Link to='/bayar' style={{width:"100%"}}>
                            <Case>
                                <CasePoin>
                                    <Metode>Poin</Metode>
                                    <JumlahPoin>865</JumlahPoin>
                                </CasePoin>
                                <Check type="radio" />
                            </Case>
                        </Link>
                    </CaseMetode>
                </Container>
                </Screen>
            </Layout>
        </div>
    )
}

export default MetodePembayaranMenu