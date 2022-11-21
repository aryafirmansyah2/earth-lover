import React, { useEffect, useRef, useState } from 'react'
import tw from 'twin.macro'
// import './index.css'
import { GrFormNext } from 'react-icons/gr'
import Container from '../../../components/common/Container'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout'
import avatar from '../../../assets/Avatar/Frame 6.svg'
import Input from '../../../components/common/Input'
import { NavLink, useNavigate } from 'react-router-dom'
import MainButton from '../../../components/common/Button/Main'
import axios from 'axios'

const CaseListReksadana = tw.div`w-full h-28 flex items-center  bg-[#EBFEF2] rounded-lg`
const Logo = tw.img`w-16 h-16 rounded-[100%] ml-5`
const CaseTitle = tw.div`pl-3 flex justify-between items-center w-full `
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

function EditPicker() {

    // const [picture, setPicture] = useState();
    const [nama, setNama] = useState();
    const [address, setAddress] = useState();
    const [phone, setPhone] = useState();
    const [licencePlate, setLicencePlate] = useState();

    
    const fileInputRef = useRef(HTMLInputElement);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState();
    // console.log(selectedImage)

    const token = localStorage.getItem("token");
    const navigate = useNavigate();


    const fetchData = () => {
        axios.get("https://earthlover.herokuapp.com/api/picker/profil", {
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then((result) => {
                setLicencePlate(result.data.data.licence_plate);
                setImageUrl(result.data.data.picture)
                if (selectedImage) {
                    setImageUrl(URL.createObjectURL(selectedImage));
                }
                setNama(result.data.data.name);
                setAddress(result.data.data.address)
                setPhone(result.data.data.phone_number)
            })
    }

    function submit(e) {
        e.preventDefault()

        let data = new FormData()
        data.append('name', nama)
        data.append('address', address)
        data.append('phone_number', phone)
        data.append('picture', selectedImage)
        data.append('licence_plate', licencePlate)

        axios.post(`https://earthlover.herokuapp.com/api/picker/profil/update`, data, {
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then(res => {
                console.log(res.data)
                if (res.data.status === true) {
                    navigate('/home-pckr/user-picker')
                }
            })

            .catch(error => {
                console.log(error)
            })
    }

    console.log(selectedImage)
    console.log(phone)
    console.log(address)
    console.log(nama)
    console.log(licencePlate)


    useEffect(() => {
        fetchData();
    }, [selectedImage]);

    return (
        <div>
            <Layout>
                <Screen>
                    <Header link={'/user'} title={'Ubah Profile'} />
                    <form onSubmit={submit}>
                        <Container>

                            <CaseListReksadana>
                                <Logo src={imageUrl} />
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
                                    <Input type='text' defaultValue={nama || ''} onChange={(e) => setNama(e.target.value)} />
                                </CaseContent>
                            </Case>
                            <Case>
                                <CaseContent>
                                    <Title>No Tlpn </Title>
                                    <Input type='text' defaultValue={phone || ''} onChange={(e) => setPhone(e.target.value)} />
                                </CaseContent>
                            </Case>
                            <Case>
                                <CaseContent>
                                    <Title>address </Title>
                                    <Input type='text' defaultValue={address || ''} onChange={(e) => setAddress(e.target.value)} />
                                </CaseContent>
                            </Case>
                            <Case>
                                <CaseContent>
                                    <Title>Licence Plate </Title>
                                    <Input type='text' defaultValue={licencePlate || ''} onChange={(e) => setLicencePlate(e.target.value)} />
                                </CaseContent>
                            </Case>
                        </Container>

                        <Container style={{ width: "100%", position: "absolute", bottom: '0' }}>
                            {/* <NavLink > */}
                            <MainButton type='submit'>Simpan</MainButton>
                            {/* </NavLink> */}
                        </Container>
                    </form>
                </Screen>
            </Layout>
        </div>
    )
}

export default EditPicker