import React from 'react'
import tw from 'twin.macro'
import Container from '../../../components/common/Container'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout'
import { GrFormNext } from 'react-icons/gr'
import Input from '../../../components/common/Input'
import { Link, NavLink } from 'react-router-dom'
import MainButton from '../../../components/common/Button/Main'

const Case = tw.div`w-full flex flex-col `
const CaseWilayah = tw.div`w-full flex flex-col`
const CaseNomer = tw.div`w-full flex flex-col mt-7`
const Title = tw.p`font-Medium`
const InputWilayah = tw.div`border-2 rounded-xl mt-2`
const Caseinput = tw.div`px-4 py-2 flex items-center justify-between`
const Nama = tw.p``
const Icon = tw.div``
const Screen = tw.div`w-full h-screen`

function InputPdam() {
    return (
        <div>
            <Layout>
                <Screen>
                    <Header link={'/home'} title={'PDAM'} />
                    <Container>
                        <Case>
                            <CaseWilayah>
                                <Title>
                                    Wilayah
                                </Title>
                                <InputWilayah>
                                    <Link to='/pilih-wilayah-pdam' >
                                        <Caseinput>
                                            <Nama>{localStorage.getItem("wilayah")}</Nama>
                                            <Icon><GrFormNext /></Icon>
                                        </Caseinput>
                                    </Link>
                                </InputWilayah>
                            </CaseWilayah>
                            <CaseNomer>
                                <Title>
                                    Nomer Pelanggan
                                </Title>
                                <Input type='text' />
                            </CaseNomer>
                        </Case>
                    </Container>
                    <Container style={{ width: "100%", position: "absolute", bottom: '0' }}>
                        <NavLink to='/bayar' >
                            <MainButton>Lanjutkan</MainButton>
                        </NavLink>
                    </Container>
                </Screen>
            </Layout>
        </div>
    )
}

export default InputPdam