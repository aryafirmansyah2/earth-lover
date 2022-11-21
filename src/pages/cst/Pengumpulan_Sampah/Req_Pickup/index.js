import React, { useEffect, useRef, useState } from "react";
import tw from 'twin.macro'
import {  useNavigate } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, useMapEvents, Popup } from 'react-leaflet';
import Container from '../../../../components/common/Container'
import Header from '../../../../components/Header'
import Input from '../../../../components/common/Input'
import BtnSeconds from '../../../../components/common/Button/Second'
import MainButton from '../../../../components/common/Button/Main'
import './index.css'
// import Waktu from "./Data/Waktu";
// import DaurUlang from "./Data/DaurUlang";
// import Sampah from "./Data/Sampah";
import Layout from "../../../../components/Layout";
import axios from "axios";
import moment from 'moment'


const Case = tw.div`w-full flex flex-col items-center justify-center mt-4`
const CaseContent = tw.div`w-full flex flex-col items-start justify-center`
const Title = tw.h1`text-[16px] font-Medium`
const InputAlamat = tw.textarea`w-full border-2 border-[#d2d2d2] rounded-xl focus:border-[#16BF78]  focus:outline-none p-[8px] mt-3 overflow-hidden`
const Map = tw.div`mt-3 w-full`
const Deskripsi = tw.p`font-Light text-sm`
const Tgl = tw.input`w-full border-2 border-green-1 p-2 items-center bg-green-1 rounded-lg text-white mt-3 focus:border-green-1`
const ChoiceContainer = tw.button`w-full flex items-center justify-center border-2 border-green-1 rounded-xl mt-4 text-[16px] font-Reguler text-green-1 py-3  focus:bg-green-1 focus:text-white`
const CaseInputPw = tw.div`w-full relative items-center justify-end flex`
const ToggleEye = tw.p`absolute mt-2 mr-5 text-green-1 font-Semibold`
const BtnPhoto = tw.button`bg-green-1 sm:text-sm md:text-[16px] text-white font-Medium p-2 rounded-lg mr-5`


function AddMarkerToClick({ setLat, setLng }) {

    const [markers, setMarkers] = useState([]);

    const map = useMapEvents({
        click(e) {
            const newMarker = e.latlng
            // console.log(newMarker)
            // console.log(newMarker.lat)
            // console.log(newMarker.lng)
            setLat(newMarker.lat)
            setLng(newMarker.lng)
            setMarkers([newMarker]);
            console.log(markers)
            if (markers.length === 1) {
                setMarkers([])
                setLat("")
                setLng("")
            }
        },
    })

    return (
        <>
            {markers.map(marker =>
                <Marker key={marker.id} position={marker} />
            )}
        </>
    )
}

function Request_Pickup() {

    const fileInputRef = useRef(HTMLInputElement);

    const [activeLinkWaktu, setActiveLinkWaktu] = useState();
    const [activeLinkDaurUlang, setActiveLinkDaurUlang] = useState();
    const [activeLinkSampah, setActiveLinkSampah] = useState();

    const token = localStorage.getItem("token");
    const [kategori, setKategori] = useState()
    const [trash, setTrash] = useState()
    const [time, setTime] = useState()

    const [idKategori, setIdKategori] = useState()
    const [namaKategori, setNamaKategori] = useState()
    const [weight, setWight] = useState()
    const [alamat, setAlamat] = useState()
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();
    const [selectedImage, setSelectedImage] = useState();
    const [typeTrash, setTypeTrash] = useState();
    const [pickupTime, setPickupTime] = useState();
    const [date, setDate] = useState(moment().format('YYYY-MM-DD'))

    // console.log(alamat)
    // console.log(weight)

    const navigate = useNavigate()

    function handleWaktu(id) {
        setActiveLinkWaktu(id)
        setPickupTime(id)
    }
    function handleDaurUlang(id, name) {
        setActiveLinkDaurUlang(id)
        setIdKategori(id)
        setNamaKategori(name)
    }
    function handleSampah(id) {
        setActiveLinkSampah(id)
        setTypeTrash(id)
    }

    const onChangeDate = e => {
        const newDate = moment(new Date(e.target.value)).format('YYYY-MM-DD');
        setDate(newDate);
        // console.log(newDate); //value picked from date picker
    };

    const fetchDataKategori = () => {
        axios.get("https://earthlover.inagata.com/api/v2/category", {
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then((result) => {
                setKategori(result.data.data)
            })
    }
    const fetchDataTypeTrash = () => {
        axios.get("https://earthlover.inagata.com/api/trash/type", {
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then((result) => {
                setTrash(result.data.data)
            })
    }
    const fetchDataPickupTime = () => {
        axios.get("https://earthlover.inagata.com/api/pickup/time", {
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then((result) => {
                setTime(result.data.data)
            })
    }
    // console.log(time)
    // console.log(trash)
    // console.log(kategori)

    // console.log(pickupTime)
    // console.log(idKategori)
    // console.log((typeTrash))

    function submit(e) {

        e.preventDefault()

        let data = new FormData()
        data.append('category_id', idKategori)
        data.append('weight', weight)
        data.append('location', alamat)
        data.append('latitude', lat)
        data.append('longitude', lng)
        data.append('picture', selectedImage)
        data.append('date', date)
        data.append('type_trash_id', typeTrash)
        data.append('pickup_time_id', pickupTime)

        axios.post(`https://earthlover.inagata.com/api/customer/order/add`, data, {
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then(res => {
                console.log(res.data)
                if (res.data.status === true) {
                    navigate('/request-pickup/notif-menunggu')
                }
            })

            .catch(error => {
                console.log(error)
            })
    }


    useEffect(() => {
        fetchDataKategori()
        fetchDataPickupTime()
        fetchDataTypeTrash()
    }, []);

    return (
        <div>
            <Layout>

                <Header link={"/metode-pengumpulan"} title={"Request Pick Up"} />
                <Container>
                    <form onSubmit={submit}>
                        <Case>
                            <CaseContent>
                                <Title>Alamat :</Title>
                                <InputAlamat type="text" value={alamat} onChange={(e) => setAlamat(e.target.value)} />
                                <Map>
                                    <MapContainer center={[-7.57026839783718, 112.23677066814048]} zoom={15} zoomControl={false} scrollWheelZoom={true}  >
                                        <TileLayer
                                            url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
                                            attribution="Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri" />
                                        <AddMarkerToClick setLat={setLat} setLng={setLng} />
                                    </MapContainer>
                                </Map>
                            </CaseContent>
                            <Deskripsi>
                                sesuaikan alamat dengan pin pada maps agar titik pengambilan lebih akurat
                            </Deskripsi>
                        </Case>

                        <Case>
                            <CaseContent>
                                <Title>Tanggal Pengambilan :</Title>
                                <Tgl type="date" onChange={onChangeDate} />
                            </CaseContent>
                        </Case>
                        <Case>
                            <CaseContent>
                                {/* <Title>{lat}</Title> */}
                                <Title>Waktu Pengambilan :</Title>
                                {time?.map(result => (
                                    <ChoiceContainer key={result.id} className={"waktu" + (result.id === activeLinkWaktu ? " active " : "")} onClick={() => handleWaktu(result.id)}>{result.start}-{result.end}</ChoiceContainer>
                                ))}
                            </CaseContent>
                        </Case>
                        <Case>
                            <CaseContent>
                                <Title>Jenis Daur Ulang :</Title>
                                {kategori?.map((result) => (
                                    <ChoiceContainer key={result.id} className={"daur-ulang" + (result.id === activeLinkDaurUlang ? " active " : "")} onClick={() => handleDaurUlang (result.id, result.name)}>{result.name}</ChoiceContainer>
                                ))}
                            </CaseContent>
                        </Case>
                        <Case>
                            <CaseContent>
                                <Title>Jenis Sampah :</Title>
                                {trash?.map(result => (
                                    <ChoiceContainer key={result.id} className={"sampah" + (result.id === activeLinkSampah ? " active " : "")} value={idKategori} onClick={() => handleSampah(result.id)}>{result.type_name}</ChoiceContainer>
                                ))}
                            </CaseContent>
                        </Case>
                        <Case style={{marginBottom:"30px"}}>
                            <CaseContent>
                                <Title>Bearat Sampah :</Title>
                                <CaseInputPw >
                                    <Input type="text" value={weight} onChange={(e) => setWight(e.target.value)} />
                                    <ToggleEye>Kg</ToggleEye>
                                </CaseInputPw>
                            </CaseContent>
                        </Case>
                        <Input value={lat} style={{ display: "none" }} />
                        <Input value={lng} style={{ display: "none" }} />
                        <input type='file' id='file' accept='image/*' ref={fileInputRef} style={{ display: "none" }} onChange={e => setSelectedImage(e.target.files[0])} />
                        <BtnPhoto onClick={(event) => {
                            event.preventDefault();
                            fileInputRef.current.click();
                        }}>Choise Image</BtnPhoto>
                        <BtnSeconds>Tambah Item</BtnSeconds>
                        {/* <Link to="notif-menunggu" style={{ width: "100%" }}> */}
                        <MainButton type="submit">Lanjutkan</MainButton>
                        {/* </Link> */}
                    </form>
                </Container>
            </Layout>
        </div>
    )
}

export default Request_Pickup