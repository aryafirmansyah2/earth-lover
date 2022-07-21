import React from 'react'
import { NavLink } from 'react-router-dom'
import tw from 'twin.macro'
import MainButton from '../../../components/common/Button/Main'
import Container from '../../../components/common/Container'
import Input from '../../../components/common/Input'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout'

const CaseNomer = tw.div`w-full flex flex-col mb-[650px] `
const Title = tw.p`font-Medium`

function InputNomerBpjs() {
    return (
        <div>
            <Layout>
                <Header link={'/bpjs'} title={'BPJS'} />
                <Container>
                    <CaseNomer>
                        <Title>
                            Nomer Pelanggan
                        </Title>
                        <Input type='text' />
                    </CaseNomer>
                    <NavLink to='/bayar'>
                        <MainButton>Lanjutkan</MainButton>
                    </NavLink>
                </Container>
            </Layout>
        </div>
    )
}

export default InputNomerBpjs