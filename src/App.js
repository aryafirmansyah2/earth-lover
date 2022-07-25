import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Investasi from './pages/Investasi/investasi';
import Login from './pages/Login';
import NotifSelesai from './pages/Pengumpulan_Sampah/Notif_Selesai';
import BatalPickup from './pages/Pengumpulan_Sampah/Batal_Pickup';
import DetailOrder from './pages/Pengumpulan_Sampah/Detail_Order';
import NotifMenunggu from './pages/Pengumpulan_Sampah/Notif_Menunggu';
import Metode from './pages/Pengumpulan_Sampah/Pilih_Metode';
import Request_Pickup from './pages/Pengumpulan_Sampah/Req_Pickup';
import Register from './pages/Register';
import RiwayatOrder from './pages/RiwayatOrder';
import User from './pages/user';
import Map from './pages/Pengumpulan_Sampah/Map';
import PrabayarPln from './pages/Menu_Bayar/PLN/PrabayarPln';
import Pascabayar from './pages/Menu_Bayar/PLN/Pascabayar';
import Pulsa from './pages/Menu_Bayar/Pulsa/Pulsa';
import PaketData from './pages/Menu_Bayar/Pulsa/PaketData';
import Pbb from './pages/Menu_Bayar/PBB/Pbb';
import DetailReksadana from './pages/Investasi/Detail_Reksadana/DetailReksadana';
import DetailPembelian from './pages/Investasi/Detail_Pembelian/DetailPembelian';
import Pembayaran from './pages/Investasi/Pembayaran/Pembayaran';
import MetodePembayaran from './pages/Investasi/Metode_pembayaran/MetodePembayaran';
import SecPembayaran from './pages/Investasi/Pembayaran/SecPembayaran';
import InputPdam from './pages/Menu_Bayar/PDAM/InputPdam';
import Wilayah from './pages/Menu_Bayar/PDAM/Wilayah';
import Bpjs from './pages/Menu_Bayar/BPJS/Bpjs';
import InputNomerBpjs from './pages/Menu_Bayar/BPJS/InputNomerBpjs';
import PembayaranMenu from './pages/Menu_Bayar/Bayar';
import InputTahun from './pages/Menu_Bayar/PBB/Tahun';
import WilayahPbb from './pages/Menu_Bayar/PBB/WilayahPbb';
import EditUser from './pages/user/EditUser';
import Alamat from './pages/user/Alamat';
import TambahAlamat from './pages/user/Alamat/TambahAlamat';
import DetailAlmat from './pages/user/DetailAlamat';
import Bantuan from './pages/user/Bantuan';
import VoucherPromo from './pages/Menu_Bayar/Bayar/VoucherPromo';
import MetodePembayaranMenu from './pages/Menu_Bayar/Bayar/MetodePembayaranMenu';
import UbahPin from './pages/user/EditUser/UbahPin';
import Ulasan from './pages/user/Ulasan';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>

          <Route path='/home' element={<Home />}></Route>

          <Route path='/riwayat-order' element={<RiwayatOrder/>}></Route>
          <Route path='/investasi' element={<Investasi/>}></Route>
          <Route path='/detail-reksadana' element={<DetailReksadana/>}></Route>
          <Route path='/detail-pembelian' element={<DetailPembelian/>}></Route>
          <Route path='/pembayaran' element={<Pembayaran/>}></Route>
          <Route path='/cara-pembayaran' element={<SecPembayaran/>}></Route>
          <Route path='/metode-pembayaran' element={<MetodePembayaran/>}></Route>
          <Route path='/metode-pembayaran-menu' element={<MetodePembayaranMenu/>}></Route>
          <Route path='/voucher-promo' element={<VoucherPromo/>}></Route>

          <Route path='/user' element={<User/>}></Route>
          <Route path='/edit-user' element={<EditUser/>}></Route>
          <Route path='/ubah-pin' element={<UbahPin/>}></Route>
          <Route path='/alamat' element={<Alamat/>}></Route>
          <Route path='/tambah-alamat' element={<TambahAlamat/>}></Route>
          <Route path='/detail-alamat' element={<DetailAlmat/>}></Route>
          <Route path='/bantuan' element={<Bantuan/>}></Route>
          <Route path='/ulasan' element={<Ulasan/>}></Route>


          <Route path='/metode-pengumpulan' element={<Metode/>}></Route>
          <Route path='/request-pickup' element={<Request_Pickup/>}></Route>
          <Route path='/request-pickup/notif-menunggu' element={<NotifMenunggu/>}></Route>
          <Route path='/request-pickup/notif-menunggu/batal-pickup' element={<BatalPickup/>}></Route>
          <Route path='/detail-order' element={<DetailOrder/>}></Route>
          <Route path='/notif-selesai' element={<NotifSelesai/>}></Route>
          <Route path='/map' element={<Map/>}></Route>

          <Route path='/prabayar-pln' element={<PrabayarPln/>}></Route>
          <Route path='/pascabayar-pln' element={<Pascabayar/>}></Route>

          <Route path='/pulsa' element={<Pulsa/>}></Route>

          <Route path='/paket-data' element={<PaketData/>}></Route>

          <Route path='/pbb' element={<Pbb/>}></Route>
          <Route path='/pilih-tahun-pbb' element={<InputTahun/>}></Route>
          <Route path='/pilih-wilayah-pbb' element={<WilayahPbb/>}></Route>

          <Route path='/pdam' element={<InputPdam/>}></Route>
          <Route path='/pilih-wilayah-pdam' element={<Wilayah/>}></Route>
          
          <Route path='/bpjs' element={<Bpjs/>}></Route>
          <Route path='/input-nomer-bpjs' element={<InputNomerBpjs/>}></Route>
          <Route path='/bayar' element={<PembayaranMenu/>}></Route>





        </Routes>
      </Router>
    </>
  );
}

export default App;
