import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../assets/firebaseConfig';

function DataKeluarga() {




    const [dataKeluarga, setDataKeluarga] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        db.collection('keluarga').onSnapshot((res) => {
            setDataKeluarga(res.docs);
        });

    }, [])


    const hapusData = (id) => {
        db.collection("keluarga").doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    return (
        <div>
            <Link to="/tambahdata"> <button className='btn_tambah'>Tambah</button></Link>
            <table cellSpacing={0} border={1} cellPadding={10}>
                <thead>
                    <tr>
                        <td>No KTAM</td>
                        <td>Nama Kepala Keluarga</td>
                        <td>jumlah amggota keluarga</td>
                        <td>alamat</td>
                        <td>rt</td>
                        <td>rw</td>
                        <td>keterangan kartu</td>

                        <td>Aksi</td>

                    </tr>
                </thead>

                <tbody>




                    {
                        dataKeluarga?.map((res, i) => {
                            return (
                                <tr>
                                    <td>{res.data().no_ktam}</td>
                                    <td>{res.data().nama_kepala_keluarga}</td>
                                    <td>{res.data().jumlah_anggota_keluarga}</td>
                                    <td>{res.data().alamat}</td>
                                    <td>{res.data().rt}</td>
                                    <td>{res.data().rw}</td>
                                    <td>{res.data().keterangan_kartu}</td>

                                    <td>
                                        <button onClick={() => navigate('/cetak/' + res.id)}>Cetak</button>
                                        <button onClick={() => navigate('/editdata/' + res.id)}>Edit</button>
                                        <button onClick={() => hapusData(res.id)}>Hapus</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>



            </table>










        </div>
    )
}

export default DataKeluarga