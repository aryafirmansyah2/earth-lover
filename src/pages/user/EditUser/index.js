import React, { useEffect, useRef, useState } from 'react'
import tw from 'twin.macro'
// import './index.css'
import { GrFormNext } from 'react-icons/gr'
import Container from '../../../components/common/Container'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout'
import avatar from '../../../assets/Avatar/Frame 6.svg'
import Input from '../../../components/common/Input'
import { NavLink } from 'react-router-dom'
import MainButton from '../../../components/common/Button/Main'

const CaseListReksadana = tw.div`w-full h-28 flex items-center  bg-[#EBFEF2] rounded-lg`
const Profile = tw.div` flex items-center justify-center rounded-2xl ml-5`
const Logo = tw.img`w-24`
const CaseTitle = tw.div`pl-3 flex justify-between items-center w-full`
const Name = tw.h2`sm:text-sm md:text-[16px] font-Semibold  pl-3 text-black `
const BtnPhoto = tw.button`bg-green-1 sm:text-sm md:text-[16px] text-white font-Medium p-2 rounded-lg mr-5`

const Case = tw.div`w-full flex flex-col items-center justify-center mt-4`
const CaseContent = tw.div`w-full flex flex-col items-start justify-center`
const Title = tw.h1`text-lg font-Semibold `
const InputTahun = tw.button`border-2 rounded-xl mt-2 w-full border-green-1`
const Caseinput = tw.div`px-4 py-4 flex items-center justify-between `
const Nama = tw.p`text-green-1`
const Icon = tw.div` text-green-1`

const Screen = tw.div`w-full h-screen`

function EditUser() {
    const fileInputRef = useRef(HTMLInputElement);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);


    return (
        <div>
            <Layout>
                <Screen>
                    <Header link={'/user'} title={'Ubah Profile'} />
                    <Container>
                        <CaseListReksadana>
                            {imageUrl && selectedImage && (
                                <Profile >
                                    <Logo src={imageUrl} alt={selectedImage.name} />
                                </Profile>
                            )}
                            {/* <Profile>
                            <Logo src={avatar} />
                        </Profile> */}
                            <CaseTitle>
                                <Name>
                                    ProfileFoto.jpg
                                </Name>
                                <input type='file' id='file' accept='image/*' ref={fileInputRef} style={{ display: "none" }} onChange={e => setSelectedImage(e.target.files[0])} />
                                <BtnPhoto onClick={(event) => {
                                    event.preventDefault();
                                    fileInputRef.current.click();
                                }}>Choise Image</BtnPhoto>


                            </CaseTitle>
                        </CaseListReksadana>
                        <Case>
                            <CaseContent>
                                <Title>Nama </Title>
                                <Input type='number' />
                            </CaseContent>
                        </Case>
                        <Case>
                            <CaseContent>
                                <Title>Email </Title>
                                <Input type='number' />
                            </CaseContent>
                        </Case>
                        <Case>
                            <CaseContent>
                                <Title>No Tlpn </Title>
                                <Input type='number' />
                            </CaseContent>
                        </Case>
                        <Case>
                            <CaseContent>
                                <InputTahun>
                                    <NavLink to='/ubah-pin'>
                                        <Caseinput>
                                            <Nama>Ganti Pin</Nama>
                                            <Icon><GrFormNext /></Icon>
                                        </Caseinput>
                                    </NavLink>
                                </InputTahun>
                            </CaseContent>
                        </Case>
                    </Container>
                    <Container style={{ width: "100%", position: "absolute", bottom: '0' }}>
                        <NavLink to='/user' >
                            <MainButton>Simpan</MainButton>
                        </NavLink>
                    </Container>
                </Screen>
            </Layout>
        </div>
    )
}

export default EditUser