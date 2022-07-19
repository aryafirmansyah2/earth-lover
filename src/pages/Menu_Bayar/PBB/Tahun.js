import React from 'react'
import { NavLink } from 'react-router-dom'
import tw from 'twin.macro'
import Container from '../../../components/common/Container'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout'

const Case = tw.div`w-full flex flex-col  `
const Tahun = tw.button`py-4 border-b-2 w-full flex justify-start pl-6`

function InputTahun() {
    return (
        <div>
            <Layout>
                <Header link={'/pbb'} title={'PBB'} />
                <Container>
                    <Case>
                        <NavLink to='/pbb'>
                            <Tahun>2021</Tahun>
                        </NavLink>
                        <NavLink to='/pbb'>
                            <Tahun>2022</Tahun>
                        </NavLink>
                    </Case>
                </Container>
            </Layout>
        </div>
    )
}

export default InputTahun