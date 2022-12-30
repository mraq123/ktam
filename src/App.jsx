import { useEffect } from 'react';
import { db } from './assets/firebaseConfig';
import DataKeluarga from './components/DataKeluarga';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TambahData from './components/input/TambahData';
import EditData from './components/edit/EditData';
import Cetak from './components/cetak/Cetak';

function App() {

  // useEffect(() => {
  //   db.collection('keluarga').add({
  //     no_ktam: 1,
  //     nama_kepala_keluarga: 'aaa',
  //     jumlah_anggota_keluarga: 3,
  //     alamat: 'dsfklsdjf',
  //     rt: 4,
  //     rw: 5,
  //     keterangan_kartu: 'ksdfjlsdfsdfksf',
  //     anggota_keluarga: [
  //       {
  //         nama: 'Amut',
  //         jenis_kelamin: 'L',
  //         tahun_lahir: 2000,
  //         hubungan_keluarga: 'sdklfjsdlf',
  //         keterangan: 'kdjkljklj'
  //       }
  //     ]
  //   });

  // }, [])

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<DataKeluarga />}></Route>
          <Route exact path='/tambahdata' element={<TambahData />}></Route>
          <Route exact path='/editdata/:keluarga_id' element={<EditData />}></Route>
          <Route exact path='/cetak/:keluarga_id' element={<Cetak />}></Route>

        </Routes>

      </Router>

    </div>
  )
}

export default App
