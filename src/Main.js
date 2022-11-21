import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css'
import Home from './pages/cst/Home';
import Investasi from './pages/cst/Investasi/investasi';
// import Login from './pages/cst/Login';
import NotifSelesai from './pages/cst/Pengumpulan_Sampah/Notif_Selesai';
import BatalPickup from './pages/cst/Pengumpulan_Sampah/Batal_Pickup';
import DetailOrder from './pages/cst/RiwayatOrder/Detail_Order';
import NotifMenunggu from './pages/cst/Pengumpulan_Sampah/Notif_Menunggu';
import Metode from './pages/cst/Pengumpulan_Sampah/Pilih_Metode';
import Request_Pickup from './pages/cst/Pengumpulan_Sampah/Req_Pickup';
// import Register from './pages/cst/Register';
import RiwayatOrder from './pages/cst/RiwayatOrder';
import User from './pages/cst/user';
import Map from './pages/cst/Pengumpulan_Sampah/Map';
import PrabayarPln from './pages/cst/Menu_Bayar/PLN/PrabayarPln';
import Pascabayar from './pages/cst/Menu_Bayar/PLN/Pascabayar';
import Pulsa from './pages/cst/Menu_Bayar/Pulsa/Pulsa';
import PaketData from './pages/cst/Menu_Bayar/Pulsa/PaketData';
import Pbb from './pages/cst/Menu_Bayar/PBB/Pbb';
import DetailReksadana from './pages/cst/Investasi/Detail_Reksadana/DetailReksadana';
import DetailPembelian from './pages/cst/Investasi/Detail_Pembelian/DetailPembelian';
import Pembayaran from './pages/cst/Investasi/Pembayaran/Pembayaran';
import MetodePembayaran from './pages/cst/Investasi/Metode_pembayaran/MetodePembayaran';
import SecPembayaran from './pages/cst/Investasi/Pembayaran/SecPembayaran';
import InputPdam from './pages/cst/Menu_Bayar/PDAM/InputPdam';
import Wilayah from './pages/cst/Menu_Bayar/PDAM/Wilayah';
import Bpjs from './pages/cst/Menu_Bayar/BPJS/Bpjs';
import InputNomerBpjs from './pages/cst/Menu_Bayar/BPJS/InputNomerBpjs';
import PembayaranMenu from './pages/cst/Menu_Bayar/Bayar';
import InputTahun from './pages/cst/Menu_Bayar/PBB/Tahun';
import WilayahPbb from './pages/cst/Menu_Bayar/PBB/WilayahPbb';
import EditUser from './pages/cst/user/EditUser';
import Alamat from './pages/cst/user/Alamat';
import TambahAlamat from './pages/cst/user/Alamat/TambahAlamat';
import DetailAlmat from './pages/cst/user/DetailAlamat';
import Bantuan from './pages/cst/user/Bantuan';
import VoucherPromo from './pages/cst/Menu_Bayar/Bayar/VoucherPromo';
import MetodePembayaranMenu from './pages/cst/Menu_Bayar/Bayar/MetodePembayaranMenu';
import UbahPin from './pages/cst/user/EditUser/UbahPin';
import Ulasan from './pages/cst/user/Ulasan';
import ScanBarcode from './pages/cst/Pengumpulan_Sampah/ScanBarcode/ScanBarcode';
import HomePicker from './pages/pckr/Home/home-picker';
import NotifMasuk from './pages/pckr/Notification_Order_Masuk/NotifMasuk';
import MapPicker from './pages/pckr/Map/MapPicker';
import DetailOrderPicker from './pages/pckr/Detail_Order';
import UserPicker from './pages/pckr/picker_info';
import EditPicker from './pages/pckr/EditPicker/editPicker';
import CancelPicker from './pages/pckr/CancelPicker/cancelPicker';
import DetailCancelPicker from './pages/pckr/CancelPicker/detailCancelPicker';
import UbahPinPicker from './pages/pckr/UbahSandiPicker/UbahPin';
import DetailOrderNew from './pages/cst/Pengumpulan_Sampah/Detail_Order';
import CancelCustomer from './pages/pckr/CancelCustomer/cancelCustomer';
import DetailCancelCustomer from './pages/pckr/CancelCustomer/detailCancelCustomer';
import UlasanPicker from './pages/pckr/Ulasan';



function Main() {
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  useEffect(() => {
    if (!token) {
      navigate("/")
    }
  })

  return (
    <>
      <Routes>

        <Route path='/home' element={<Home />}></Route>
        <Route path='/riwayat-order' element={<RiwayatOrder />}></Route>
        <Route path='/riwayat-order/detail-order/:id' element={<DetailOrder />}></Route>
        <Route path='/riwayat-order/detail-order/map/:id' element={<Map />}></Route>
        <Route path='/investasi' element={<Investasi />}></Route>
        <Route path='/detail-reksadana' element={<DetailReksadana />}></Route>
        <Route path='/detail-pembelian' element={<DetailPembelian />}></Route>
        <Route path='/pembayaran' element={<Pembayaran />}></Route>
        <Route path='/cara-pembayaran' element={<SecPembayaran />}></Route>
        <Route path='/metode-pembayaran' element={<MetodePembayaran />}></Route>
        <Route path='/metode-pembayaran-menu' element={<MetodePembayaranMenu />}></Route>
        <Route path='/voucher-promo' element={<VoucherPromo />}></Route>
        <Route path='/user' element={<User />}></Route>
        <Route path='/edit-user' element={<EditUser />}></Route>
        <Route path='/ubah-pin' element={<UbahPin />}></Route>
        <Route path='/alamat' element={<Alamat />}></Route>
        <Route path='/tambah-alamat' element={<TambahAlamat />}></Route>
        <Route path='/detail-alamat' element={<DetailAlmat />}></Route>
        <Route path='/bantuan' element={<Bantuan />}></Route>
        <Route path='/ulasan' element={<Ulasan />}></Route>
        <Route path='/metode-pengumpulan' element={<Metode />}></Route>
        <Route path='/scan-barcode' element={<ScanBarcode />}></Route>
        <Route path='/request-pickup' element={<Request_Pickup />}></Route>
        <Route path='/request-pickup/notif-menunggu' element={<NotifMenunggu />}></Route>
        <Route path='/request-pickup/notif-menunggu/batal-pickup' element={<BatalPickup />}></Route>
        <Route path='/request-pickup/notif-menunggu/detail-order/:id' element={<DetailOrderNew />}></Route>
        <Route path='/notif-selesai' element={<NotifSelesai />}></Route>
        <Route path='/map' element={<Map />}></Route>
        <Route path='/prabayar-pln' element={<PrabayarPln />}></Route>
        <Route path='/pascabayar-pln' element={<Pascabayar />}></Route>
        <Route path='/pulsa' element={<Pulsa />}></Route>
        <Route path='/paket-data' element={<PaketData />}></Route>
        <Route path='/pbb' element={<Pbb />}></Route>
        <Route path='/pilih-tahun-pbb' element={<InputTahun />}></Route>
        <Route path='/pilih-wilayah-pbb' element={<WilayahPbb />}></Route>
        <Route path='/pdam' element={<InputPdam />}></Route>
        <Route path='/pilih-wilayah-pdam' element={<Wilayah />}></Route>
        <Route path='/bpjs' element={<Bpjs />}></Route>
        <Route path='/input-nomer-bpjs' element={<InputNomerBpjs />}></Route>
        <Route path='/bayar' element={<PembayaranMenu />}></Route>

        <Route path='/home-pckr' element={<HomePicker />}></Route>
        <Route path="/notif-order" element={<NotifMasuk />}></Route>
        <Route path='/map-picker' element={<MapPicker />}></Route>
        <Route path='/detail-order-picker' element={<DetailOrderPicker />}></Route>
        <Route path='/home-pckr/user-picker' element={<UserPicker />}></Route>
        <Route path='/home-pckr/user-picker/edit-picker' element={<EditPicker />}></Route>
        <Route path='/home-pckr/user-picker/cancel-picker' element={<CancelPicker />}></Route>
        <Route path='/home-pckr/user-picker/cancel-customer' element={<CancelCustomer />}></Route>
        <Route path='/home-pckr/user-picker/cancel-picker/detail-cancel-picker' element={<DetailCancelPicker />}></Route>
        <Route path='/home-pckr/user-picker/cancel-customer/detail-cancel-customer' element={<DetailCancelCustomer />}></Route>
        <Route path='/home-pckr/user-picker/ubah-sandi-picker' element={<UbahPinPicker />}></Route>
        <Route path='/home-pckr/user-picker/ulasan' element={<UlasanPicker />}></Route>
      </Routes>
    </>
  );
}

export default Main;
