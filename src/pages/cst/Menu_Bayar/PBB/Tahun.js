import React from 'react'
import { NavLink } from 'react-router-dom'
import tw from 'twin.macro'
import Container from '../../../../components/common/Container'
import Header from '../../../../components/Header'
import Layout from '../../../../components/Layout'


const Case = tw.div`w-full flex flex-col  `
const Tahun = tw.button`py-4 border-b-2 w-full flex justify-start pl-6`
const Screen = tw.div`w-full h-screen`

function InputTahun() {

    function SelectTahun(tahun) {
        localStorage.setItem("tahun", tahun)
        console.log(tahun)
    }

    return (
        <div>
            <Layout>
                <Screen>
                    <Header link={'/pbb'} title={'PBB'} />
                    <Container>
                        <Case>
                            <NavLink to='/pbb'>
                                <Tahun onClick={()=>SelectTahun("2021")}>2021</Tahun>
                            </NavLink>
                            <NavLink to='/pbb'>
                                <Tahun onClick={()=>SelectTahun("2022")}>2022</Tahun>
                            </NavLink>
                        </Case>
                    </Container>
                </Screen>
            </Layout>
        </div>
    )
}

export default InputTahun