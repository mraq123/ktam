import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../assets/firebaseConfig'
import './Cetak.css'

export default function Cetak() {

    let { keluarga_id } = useParams()

    const [dataCetak, setDataCetak] = useState()
    const date = new Date();
    const bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];


    useEffect(() => {
        const getData = async () => {
            const keluarga = await db.collection('keluarga').doc(keluarga_id).get()
            setDataCetak(keluarga.data())
            // console.log(keluarga.data())

        }

        getData()

    }, [])


    return (
        <div className='cetak'>



            <h3 className='title_cetak'>KARTU TANDA ANGGOTA MAKAM (KTAM) <br /> TPUI "CARINGIN DAN CARINGIN BARU" KP.KEKUPU <br /> KEL.RANGKEPAN JAYA PANCORAN MAS-DEPOK</h3>

            <table cellPadding={5}>
                <tr>
                    <td>No.KTAM</td>
                    <td className='garis_kotak'>{dataCetak?.no_ktam}</td>
                </tr>

                <tr>
                    <td>Nama Kepala Keluarga</td>
                    <td className='garis_kotak'>{dataCetak?.nama_kepala_keluarga}</td>
                </tr>

                <tr>
                    <td>Jumlah Anggota Keluarga</td>
                    <td className='garis_kotak'>{dataCetak?.jumlah_anggota_keluarga}</td>
                </tr>

                <tr>
                    <td>Alamat</td>
                    <td className='garis_kotak'>{dataCetak?.alamat}</td>
                </tr>

                <tr>
                    <td>RT</td>
                    <td className='garis_kotak'>{dataCetak?.rt}</td>
                </tr>

                <tr>
                    <td>RW</td>
                    <td className='garis_kotak'>{dataCetak?.rw}</td>
                </tr>

                <tr>
                    <td>Keterangan Kartu</td>
                    <td className='garis_kotak'>{dataCetak?.keterangan_kartu}</td>
                </tr>




            </table>



            <h3 className='title_cetak_bot'>DAFTAR NAMA-NAMA ANGGOTA KELUARGA</h3>

            <table width={"100%"} cellPadding={4}>
                <tr>
                    <td>Nomor</td>
                    <td>Nama</td>
                    <td>Jenis Kelamin</td>
                    <td>Tahun Lahir</td>
                    <td>Hubungan Keluarga</td>
                    <td>Keterangan</td>
                </tr>

                {
                    dataCetak?.anggota_keluarga.map((value, i) => {
                        return (
                            <tr>
                                <td className='garis_kotak'>{i + 1}</td>
                                <td className='garis_kotak'>{value.nama}</td>
                                <td className='garis_kotak'>{value.jenis_kelamin}</td>
                                <td className='garis_kotak'>{value.tahun_lahir}</td>
                                <td className='garis_kotak'>{value.hubungan_keluarga}</td>
                                <td className='garis_kotak'>{value.keterangan}</td>
                            </tr>
                        )
                    })
                }





            </table>


            <div className="tangal">Kp.Kekupu, {`${date.getDate()} ${bulan[date.getMonth()]} ${date.getFullYear()}`}</div>


            <div className='ttd-container'>
                <div className='ttd'>
                    <p>
                        Ketua P3SM
                        <br /> Urusan KTAM
                    </p>
                    <p>Ust. Bonghari</p>
                </div>
                <div className='ttd'>
                    <p>
                        Sekretaris
                    </p>
                    <p>Suhari, S.Kom</p>
                </div>
                <div className='ttd'>
                    <p>
                        Ketua Rt 03 RW 04
                    </p>
                    <p>( ............................. )</p>
                </div>
            </div>




        </div>
    )
}
