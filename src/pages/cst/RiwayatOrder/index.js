import React, { useEffect, useState } from 'react'
import tw from 'twin.macro'
import Layout from '../../../components/Layout'
import Header from '../../../components/Header'
import Container from '../../../components/common/Container'
import Navbar from '../../../components/Navbar'
// import ListOrder from '../../../components/Order/Riwayat_Order'
import axios from 'axios'
import { Link } from 'react-router-dom'

const CaseListOrder = tw.div`w-full h-28 flex items-center  border-b-[#D9EEFD
] border-b-[1px]`;
const CaseTanggal = tw.div`sm:w-20 md:w-24 sm:h-20 md:h-24 bg-[#E7FEF3]  flex flex-col items-center justify-center rounded-2xl `;
const Tanggal = tw.h2`sm:text-2xl md:text-4xl font-Medium`;
const Bulan = tw.h2`sm:text-[16px] md:text-lg font-Medium`;
const CaseTitle = tw.div`w-3/5 h-full  pl-3 flex flex-col justify-center items-start`;
const Industri = tw.h2`sm:text-[16px] md:text-lg font-Bold`;
const Time = tw.h2`text-sm font-Light`;
const Berat = tw.h2`sm:text-[16px] md:text-lg text-[#16BF78] font-Medium`;
const Poin = tw.span`sm:text-[16px] md:text-lg text-[#16BF78] font-Bold`;
const CaseProses = tw.div`w-1/5 h-full  flex items-center justify-center`;

// const BgProse1 = tw.div`w-full font-Medium h-8 sm:text-sm md:text-[16px] bg-[#FDFDE3] text-[#DDBA02] px-10 rounded-2xl flex items-center justify-center content-['proses']`;
// const BgProse2 = tw.div`w-full font-Medium h-8 sm:text-sm md:text-[16px] bg-[#D9FDE5] text-green-1 px-10 rounded-2xl flex items-center justify-center content-['selesai']`;
// const BgProse3 = tw.div`w-full font-Medium h-8 sm:text-sm md:text-[16px] bg-[#FDD9D9] text-[#BF1616] px-12  rounded-2xl flex items-center justify-center content-['dibatalkan']`;




function RiwayatOrder() {

    const [orders, setOrders] = useState()
    const [total, setTotal] = useState()
    // const [day, setDay] = useState()

    useEffect(() => {
        fetchProduct();
    }, [])

    const fetchProduct = (e) => {
        axios.get("https://earthlover.inagata.com/api/customer/order", {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        })
            .then((res) => {
                
                setOrders(res.data.orders)
                // setTotal(orders.length)
                // console.log(res.data.orders)
                // const date = res.data.orders.date
                // setOrders(res.data)

            })
    }

    // function totaldata () {
    //     setTotal(orders.lenght)
    //     console.log(total)
    // }

    var jml_data = orders?.length ;
    console.log(jml_data)


    function ubahTanggal(tgl) {
        const day = tgl.split("-")
        return day[2]
    }

    function daftar_bulan(bulan) {
        if (bulan === '01') {
            return "Januari"
        } else if (bulan === '02') {
            return "Februari"
        } else if (bulan === '03') {
            return "Maret"
        } else if (bulan === '04') {
            return "April"
        } else if (bulan === '05') {
            return "Mei"
        } else if (bulan === '06') {
            return "Juni"
        } else if (bulan === '07') {
            return "Juli"
        } else if (bulan === '08') {
            return "Agustus"
        } else if (bulan === '09') {
            return "September"
        } else if (bulan === '10') {
            return "Oktober"
        } else if (bulan === '11') {
            return "November"
        } else if (bulan === '12') {
            return "Desember"
        }
    }

    function ubahBulan(tgl) {
        const bulan = tgl.split("-")
        return daftar_bulan(bulan[1])
    }

    function ubahWaktu(waktu) {
        const ubah = new Date(waktu)

        var hours = ubah.getHours();
        var minutes = ubah.getMinutes();

        var ampm = hours >= 12 ? 'PM' : 'AM';
        // console.log(ampm)
        hours = hours % 12;
        hours = hours ? hours : 12;

        return `${hours}:${minutes} ${ampm}`
    }
    // const ubah = new Date('const ubah = new Date(waktu)')

    // ubah.getMinu
    // 
    // ubahTanggal("2022-07-04")
    return (
        <>
            <Layout>
                <Header link={"/home"} title={"Riwayat Order"} />
                <Container>
                    {orders?.map((order) => (
                        <Link key={order.id} to={`/riwayat-order/detail-order/${order.id}`}>
                            <CaseListOrder >
                                <CaseTanggal>
                                    <Tanggal>{ubahTanggal(order.date)}</Tanggal>
                                    <Bulan>{ubahBulan(order.date)}</Bulan>
                                </CaseTanggal>
                                <CaseTitle>
                                    <Industri>Inagata Technomist</Industri>
                                    <Time>{ubahWaktu(order.updated_at)}</Time>
                                    <Berat>
                                        {order.weight}kg - <Poin> 20 Poin</Poin>
                                    </Berat>
                                </CaseTitle>
                                <CaseProses>
                                    {/* {$} */}
                                </CaseProses>
                            </CaseListOrder>
                        </Link>
                    ))}
                </Container>
                <Navbar />
                {/* </Screen> */}
            </Layout>
        </>
    )
}

export default RiwayatOrder