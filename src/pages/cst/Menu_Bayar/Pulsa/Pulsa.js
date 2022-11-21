import React, { useState } from 'react'
import tw from 'twin.macro'
import './index.css'
import { Link, NavLink } from 'react-router-dom'
import Header from '../../../../components/Header'
import Layout from '../../../../components/Layout'
import Container from '../../../../components/common/Container'
import Input from '../../../../components/common/Input'
import Data from './Data/data'
import MainButton from '../../../../components/common/Button/Main'

const CaseMenu = tw.div`flex justify-around items-center border-t-2 `
const MenuPulsa = tw.button`w-full text-[#AAAAAA] text-lg font-Medium border-b-2   py-5 `

const Case = tw.div`w-full flex flex-col items-center justify-center mt-4`
const CaseContent = tw.div`w-full flex flex-col items-start justify-center`
const Title = tw.h1`text-lg font-Medium`

const CaseNominal = tw.div`w-full gap-5 grid grid-cols-3 mt-4`
const Nominal = tw.button`border-2 p-2 border-green-1 rounded-lg sm:text-[14px] md:text-[16px] focus:bg-green-1 focus:text-white`
const Screen = tw.div`w-full h-screen`

function Pulsa() {

  const [nominal, setNominal] = useState();
  const [activeLink, setActiveLink] = useState();
  console.log(nominal)



  function handleClick(id, nominal) {
    setActiveLink(id)
    setNominal(nominal)
  };

  return (
    <div>
      <Layout>
        <Screen>
          <Header link={"/home"} title={"Pulsa"} />
          <CaseMenu>
            <NavLink className='menu' to="/pulsa" style={{ width: "240px" }} >
              <MenuPulsa>Pulsa</MenuPulsa>
            </NavLink>
            <NavLink className='menu' to="/paket-data" style={{ width: "240px" }}>
              <MenuPulsa>Paket Data</MenuPulsa>
            </NavLink>
          </CaseMenu>
          <Container>
            <Case>
              <CaseContent>
                <Title>Nomor Pelanggan </Title>
                <Input type='number' />
              </CaseContent>
            </Case>
            <Case>
              <CaseContent>
                <Title>Nominal </Title>
                <CaseNominal>
                  {Data.map(result => (
                    <Nominal className={result.className + (result.id === activeLink ? " active " : "")} onClick={() => handleClick(result.id, result.nominal)}>{result.name}</Nominal>
                  ))}
                </CaseNominal>
              </CaseContent>
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

export default Pulsa