import React, { useState,useEffect } from 'react'
import tw from 'twin.macro'
import Container from '../../../components/common/Container'
import Header from '../../../components/Header'
import { Link, useParams } from 'react-router-dom'
// import Avatar1 from '../../../assets/Avatar/Frame 6.svg'
// import { FaTruck } from 'react-icons/fa'
// import Navbar from '../../../components/Navbar'
// import BtnSeconds from '../../../components/common/Button/Second'
// import MainButton from '../../../components/common/Button/Main'
// import DangerBtn from '../../../components/common/Button/DangerBtn'
import Layout from '../../../components/Layout'
import axios from 'axios'


const Case = tw.div`w-full flex flex-col items-center justify-center mt-4`
const CaseContent = tw.div`w-full flex flex-col items-start justify-center`
const Title = tw.h1`text-lg font-Medium`
// const ProfilePetugas = tw.div` w-full flex items-center justify-between py-4`
// const FotoPtgs = tw.img``
// const CaseInfo = tw.div`flex flex-col justify-center items-start `
// const NamaPtgs = tw.h2`sm:text-[14px] md:text-lg  font-Reguler `
// const Id = tw.h2`sm:text-sm md:text-[16px] font-Bold`
// const CaseStatus = tw.div`flex items-center sm:w-32 md:w-40 `
// const IconStatus = tw.div`mr-3 text-[#979797]`
// const TitleStatus = tw.p`text-sm text-[#979797] font-Reguler`

const CaseAlamat = tw.div`flex flex-col justify-center items-start py-4`
const NamaBangunan = tw.h2`text-lg font-Semibold `
const Alamat = tw.h2`text-[16px] font-Light`

const InputDisabled = tw.input`w-full bg-[#EBFEF2] text-green-1 text-sm font-Semibold  rounded-lg py-3 px-2 my-4  `

// const InputNumber = tw.input`w-full bg-transparent border-[1.5px] border-green-1 text-green-1 text-sm font-Semibold rounded-lg py-3 px-2 my-4  `
// const CaseInputPw = tw.div`w-full relative items-center justify-end flex`
// const ToggleEye = tw.p`absolute mt-2 mr-5 text-green-1 font-Semibold`
// const CasePoint = tw.div`flex items-center justify-between bg-green-1 p-4 rounded-xl`
// const CaseInfoPoint = tw.div``
// const TitlePoint = tw.p`font-Reguler text-[14px] text-white`
// const Point = tw.h1`text-[24px] font-Semibold text-white`
// const BtnTopUpPoint = tw.button`bg-white text-green-1 text-[12px] font-Semibold p-[10px] rounded-lg`


function DetailCancelCustomer() {
    const params = useParams()
    const Token = localStorage.getItem("token")
    const [date, setDate] = useState('')
    const [alamat, setAlamat] = useState()
    const [time, setTime] = useState()
    const [id, setId] = useState()
    const [berat, setberat] = useState()
    const [status, setStatus] = useState()
    const [trash, setTrash] = useState()
    

    const fetchOrder = (e) => {
        axios.get(`https://earthlover.inagata.com/api/customer/order/show/${params.id}`, {
            headers: { 'Authorization': 'Bearer ' + Token }
        })
            .then((res) => {
                console.log(res.data)
                setId(res.data.orders.id)
                setDate(res.data.orders.date)
                setAlamat(res.data.orders.location)
                setberat(res.data.orders.weight)
                setStatus(res.data.orders.status)
                setTrash(res.data.orders.type_trash.type_name)
                setTime(`${res.data.orders.pickup_time.start} - ${res.data.orders.pickup_time.end}`)

            })
            .catch(err => {
                console.log(err.response)
            })
    }
    console.log(date)

    function daftar_bulan(bulan) {
        if (bulan === '01') {
            return " Januari "
        } else if (bulan === '02') {
            return " Februari "
        } else if (bulan === '03') {
            return " Maret "
        } else if (bulan === '04') {
            return " April "
        } else if (bulan === '05') {
            return " Mei "
        } else if (bulan === '06') {
            return " Juni "
        } else if (bulan === '07') {
            return " Juli "
        } else if (bulan === '08') {
            return " Agustus "
        } else if (bulan === '09') {
            return " September "
        } else if (bulan === '10') {
            return " Oktober "
        } else if (bulan === '11') {
            return " November "
        } else if (bulan === '12') {
            return " Desember"
        }
    }

    function dateorder() {
        const day = date.split("-")
        const bulan = date.split("-");
        const tahun = date.split("-");

        return `${day[2]} ${daftar_bulan(bulan[1])} ${tahun[0]}`
    }

    useEffect(() => {
        fetchOrder();
        // ubahTanggal()
        // ubahTanggal()
    }, [])
    return (
        <div>
            {/* <Bg> */}
            <Layout>
                {/* <Screen> */}
                <Header link={"/home-pckr/user-picker/cancel-customer"} title={"Detail Order"} />
                <Container>
                    <Case>
                        <CaseContent>
                            <Title>Nama :</Title>
                            <InputDisabled type="text" disabled value={dateorder(date) || ''}/>
                        </CaseContent>
                    </Case>
                    <Case>
                        <CaseContent>
                            <Title>Alamat : </Title>
                            <CaseAlamat>
                                <NamaBangunan>Inagata Technosmith</NamaBangunan>
                                <Alamat>{alamat || ''}</Alamat>
                            </CaseAlamat>
                        </CaseContent>
                    </Case>
                    <Case>
                        <CaseContent>
                            <Title>Tanggal Pengambilan :</Title>
                            <InputDisabled type="text" disabled value={dateorder(date) || ''}/>
                        </CaseContent>
                    </Case>
                    <Case>
                        <CaseContent>
                            <Title>Waktu Pengambilan :</Title>
                            <InputDisabled type="text" disabled value={time || ''} />
                        </CaseContent>
                    </Case>
                    <Case>
                        <CaseContent>
                            <Title>Alasan Dibatalkan :</Title>
                            <InputDisabled type="text" disabled value="Organik" />
                        </CaseContent>
                    </Case>
                </Container>
                {/* <Navbar /> */}
                {/* </Screen> */}
            </Layout>
            {/* </Bg> */}
        </div>
    )
}

export default DetailCancelCustomer