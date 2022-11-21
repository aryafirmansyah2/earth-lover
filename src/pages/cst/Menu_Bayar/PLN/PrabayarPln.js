import React, { useState } from 'react'
import tw from 'twin.macro'
import './index.css'
import data from './data'
import { NavLink } from 'react-router-dom'
import Header from '../../../../components/Header'
import Layout from '../../../../components/Layout'
import Container from '../../../../components/common/Container'
import Input from '../../../../components/common/Input'
import MainButton from '../../../../components/common/Button/Main'

const CaseMenu = tw.div`flex justify-around items-center border-t-2 `
// const CaseNav = tw.div`flex justify-around items-center border-t-2 `
const MenuPln = tw.button`w-full text-[#AAAAAA] text-lg font-Medium border-b-2 focus:border-b-4  py-5 focus:rounded-sm focus:border-green-1  focus:text-green-1`


const Case = tw.div`w-full flex flex-col items-center justify-center mt-4`
const CaseContent = tw.div`w-full flex flex-col items-start justify-center`
const Title = tw.h1`text-lg font-Medium`

const CaseNominal = tw.div`w-full gap-5 grid grid-cols-3 mt-4`
const Nominal = tw.button`border-2 p-2 border-green-1 rounded-lg focus:bg-green-1 focus:text-white sm:text-sm md:text-[16px]`
const Screen = tw.div`w-full h-screen`

function PrabayarPln() {

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
          <Header link={"/home"} title={"PLN"} />
          <CaseMenu>
            {/* <CaseNav> */}
            <NavLink className='menu' to="/prabayar-pln" style={{ width: "240px" }}>
              <MenuPln >Prabayar</MenuPln>
            </NavLink>
            {/* </CaseNav> */}
            <NavLink className='menu' to="/pascabayar-pln" style={{ width: "240px" }}>
              <MenuPln >Pascabayar</MenuPln>
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
                  {data.map(result => (
                    <Nominal className={result.className + (result.id === activeLink ? " active " : "")} key={result.id} onClick={() => handleClick(result.id, result.nominal)}>{result.name}</Nominal>
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

export default PrabayarPln