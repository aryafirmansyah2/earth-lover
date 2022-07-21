import React from 'react'
import tw from 'twin.macro'
import './index.css'
import { NavLink } from 'react-router-dom'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout'
import Container from '../../../components/common/Container'
import Input from '../../../components/common/Input'
import MainButton from '../../../components/common/Button/Main'

const CaseMenu = tw.div`flex justify-around items-center border-t-2 `
const MenuPln = tw.button`w-[240px] text-[#AAAAAA] text-lg font-Medium border-b-2 active:border-b-4  py-5 active:rounded-sm active:border-green-1  active:text-green-1`

const Case = tw.div`w-full flex flex-col items-center justify-center mt-4`
const CaseContent = tw.div`w-full flex flex-col items-start justify-center`
const Title = tw.h1`text-lg font-Medium`

// const CaseNominal = tw.div`w-full gap-5 grid grid-cols-3 mt-4`
// const Nominal =tw.button`border-2 p-2 border-green-1 rounded-lg focus:bg-green-1 focus:text-white`

function PascaBayar() {
  return (
    <div>
      <Layout>
        <Header link={"/home"} title={"PLN"} />
        <CaseMenu>
          <NavLink className='menu' to="/prabayar-pln">
            <MenuPln>Prabayar</MenuPln>
          </NavLink>
          <NavLink className='menu' to="/pascabayar-pln">
            <MenuPln>Pascabayar</MenuPln>
          </NavLink>
        </CaseMenu>
        <Container>
          <Case>
            <CaseContent>
              <Title>Nomor Pelanggan </Title>
              <Input type='number' />
            </CaseContent>
          </Case>
        </Container>
        <Container style={{ width: "100%", position: "absolute", bottom: '0' }}>
                    <NavLink to='/bayar' >
                        <MainButton>Lanjutkan</MainButton>
                    </NavLink>
                </Container>
      </Layout>
    </div>
  )
}

export default PascaBayar