import React, { useState } from 'react'
import tw from 'twin.macro'
import { Link, NavLink } from 'react-router-dom'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout'
import Container from '../../../components/common/Container'
import Input from '../../../components/common/Input'
import { GrFormNext } from 'react-icons/gr'
import MainButton from '../../../components/common/Button/Main'


const CaseMenu = tw.div`flex justify-around items-center border-t-2 `
const MenuPln = tw.button`w-[240px] text-[#AAAAAA] text-lg font-Medium border-b-2 active:border-b-4  py-5 active:rounded-sm active:border-green-1  active:text-green-1`

const Case = tw.div`w-full flex flex-col items-center justify-center mt-4`
const CaseContent = tw.div`w-full flex flex-col items-start justify-center`
const Title = tw.h1`text-lg font-Medium`

const InputTahun = tw.button`border-2 rounded-xl mt-2 w-full`
const InputWilayah = tw.button`border-2 rounded-xl mt-2 w-full`
const Caseinput = tw.div`px-4 py-2 flex items-center justify-between`
const Nama = tw.p``
const Icon = tw.div``

function Pbb() {

  let [nomorPelanggan, setNomorPelanggan] = useState()  

  return (
    <div>
      <Layout>
        <Header link={"/home"} title={"PBB"} />
        <Container >
          <Case>
            <CaseContent>
              <Title>Nomor Pelanggan </Title>
              <Input type='number' onChange={(e)=>setNomorPelanggan(e.target.value)} value={nomorPelanggan} />
            </CaseContent>
          </Case>
          <Case>
            <CaseContent>
              <Title>Tahun </Title>
              <InputTahun>
                <NavLink to='/pilih-tahun-pbb'>
                  <Caseinput>
                    <Nama>2021</Nama>
                    <Icon><GrFormNext /></Icon>
                  </Caseinput>
                </NavLink>
              </InputTahun>
            </CaseContent>
          </Case>
          <Case>
            <CaseContent>
              <Title>wilayah </Title>
              <InputWilayah>
                <NavLink to='/pilih-wilayah-pbb'>
                  <Caseinput>
                    <Nama>Surabaya</Nama>
                    <Icon><GrFormNext /></Icon>
                  </Caseinput>
                </NavLink>
              </InputWilayah>
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

export default Pbb