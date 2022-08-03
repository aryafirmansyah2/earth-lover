import React from 'react'
import Container from '../../../components/common/Container'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout'
import { CgDanger } from 'react-icons/cg'
import tw from 'twin.macro'
import Input from '../../../components/common/Input'
import MainButton from '../../../components/common/Button/Main'

const CaseAlert = tw.div`w-full h-16 rounded-2xl bg-[#FDD9D9] flex flex-col justify-center items-center relative`
const TitleAlert = tw.h1`text-[#BF1616] text-[14px] font-Medium `
const CaseInput = tw.div`w-full flex flex-col items-start justify-center mt-3`
const Title = tw.h1`font-Medium text-[16px]`
const Screen = tw.div`w-full h-screen`


function UbahPin() {
    return (
        <div>
            <Layout>

                    <Header link={'/edit-user'} title={'Ganti Pin'} />
                    <Container>
                        <CaseAlert>
                            <TitleAlert>Peringatan !</TitleAlert>
                            <TitleAlert>Jangan Berikan Pin Pada Siapapun</TitleAlert>
                            <CgDanger style={{ position: "absolute", left: "30", color: '#BF1616', fontSize: "25px" }} />
                        </CaseAlert>
                        <CaseInput style={{ marginTop: "30px" }}>
                            <Title>Pin Lama</Title>
                            <Input placeholder='Masukan pin lama' />
                        </CaseInput>
                        <CaseInput>
                            <Title>Pin Baru</Title>
                            <Input placeholder='Masukan pin baru' />
                        </CaseInput>
                        <CaseInput>
                            <Title>Autentifikasi Pin Baru</Title>
                            <Input placeholder='Masukan kode autentifikasi' />
                        </CaseInput>
                        <MainButton>Simpan</MainButton>
                    </Container>

            </Layout>
        </div>
    )
}

export default UbahPin