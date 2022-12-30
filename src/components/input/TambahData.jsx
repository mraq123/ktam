import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import "./TambahData.css"
import { db } from "../../assets/firebaseConfig";



export default function TambahData() {
    const wadah = useRef('')
    const [formValues, setFormValues] = useState([{
        nama: "",
        jenis_kelamin: "L",
        tahun_lahir: "",
        hubungan_keluarga: "",
        keterangan: ""
    }])


    const navigate = useNavigate()

    const [no_ktam, setNoKtam] = useState('')
    const [nama_kepala_keluarga, set_nama_kepala_keluarga] = useState('')
    const [jumlah_anggota_keluarga, set_jumlah_anggota_keluarga] = useState('')
    const [alamat, set_alamat] = useState('')
    const [rt, set_rt] = useState('')
    const [rw, set_rw] = useState('')
    const [keterangan_kartu, set_keterangan_kartu] = useState('')

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    let addFormFields = () => {
        setFormValues([...formValues, { name: "", email: "" }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        db.collection('keluarga').add({
            no_ktam,
            nama_kepala_keluarga,
            jumlah_anggota_keluarga,
            alamat,
            rt,
            rw,
            keterangan_kartu,
            anggota_keluarga: formValues
        }).then(res => {
            console.log(res.id)
            navigate("/cetak/" + res.id)
        })
    }

    return (
        <div className="tambahdata">

            <form onSubmit={(e) => handleSubmit(e)}>
                <h1 className="title_input">Input Data</h1>

                <label>No.KTAM :</label>
                <input type="number" name="ktam" id="ktam" value={no_ktam} onChange={(e) => setNoKtam(e.currentTarget.value)} /> <br />

                <label>Nama Kepala Keluarga :</label>
                <input type="text" name="nama_keluarga" id="nama_keluarga" value={nama_kepala_keluarga} onChange={(e) => set_nama_kepala_keluarga(e.currentTarget.value)} /> <br />

                <label>Jumlah Anggota Keluarga : </label>
                <input type="number" name="jumlah_anggota" id="jumlah_anggota" value={jumlah_anggota_keluarga} onChange={(e) => set_jumlah_anggota_keluarga(e.currentTarget.value)} /> <br />

                <label>Alamat :</label>
                <input type="text" name="alamat" id="alamat" value={alamat} onChange={(e) => set_alamat(e.currentTarget.value)} /> <br />

                <label>RT :</label>
                <input type="number" name="rt" id="rt" value={rt} onChange={(e) => set_rt(e.currentTarget.value)} /> <br />

                <label>RW :</label>
                <input type="number" name="rw" id="rw" value={rw} onChange={(e) => set_rw(e.currentTarget.value)} /> <br />

                <label>Keterangan Kartu :</label>
                <input type="text" name="kartu_keterangan" id="kartu_keterangan" value={keterangan_kartu} onChange={(e) => set_keterangan_kartu(e.currentTarget.value)} /> <br />

                <h4>Daftar Nama-Nama Anggota Keluarga</h4>

                {formValues.map((element, index) => (
                    <div className="form-inline" key={index}>
                        <div >
                            <label>Nama : </label>
                            <input type="text" name="nama" value={element.nama || ""} onChange={e => handleChange(index, e)} />
                        </div>
                        <div >
                            <label>Jenis Kelamin : </label>
                            <select name="jenis_kelamin" value={element.jenis_kelamin || ""} onChange={e => handleChange(index, e)}>
                                <option value="L">L</option>
                                <option value="P">P</option>
                            </select>
                        </div>
                        <div >
                            <label>Tahun Lahir : </label>
                            <input type="number" name="tahun_lahir" value={element.tahun_lahir || ""} onChange={e => handleChange(index, e)} />
                        </div>
                        <div >
                            <label>Hubungan Keluarga : </label>
                            <input type="text" name="hubungan_keluarga" value={element.hubungan_keluarga || ""} onChange={e => handleChange(index, e)} />
                        </div>
                        <div >
                            <label>Keterangan : </label>
                            <input type="text" name="keterangan" value={element.keterangan || ""} onChange={e => handleChange(index, e)} />
                        </div>
                        {
                            index ?
                                <button type="button" className="button remove" onClick={() => removeFormFields(index)}>Remove</button>
                                : null
                        }
                        <hr />
                    </div>
                ))}
                {/* <div id="wadah" ref={wadah}>
                    <div>
                        <div >
                            <label>Nama : </label>
                            <input type="text" name="nama" />
                        </div>
                        <div >
                            <label>Jenis Kelamin : </label>
                            <select name="jenis_kelamin">
                                <option value="L">L</option>
                                <option value="P">P</option>
                            </select>
                        </div>
                        <div >
                            <label>Tahun Lahir : </label>
                            <input type="number" name="tahun_lahir" />
                        </div>
                        <div >
                            <label>Hubungan Keluarga : </label>
                            <input type="text" name="hubungan_keluarga" />
                        </div>
                        <div >
                            <label>Keterangan : </label>
                            <input type="text" name="keterangan" />
                        </div>
                        <hr />
                    </div>
                </div> */}










                <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
                <button className="btn_form" type="submit">Simpan</button>
                <Link to="/"> <button type="button" className="btn_form">Kembali</button></Link>







            </form>














        </div>
    )
}
