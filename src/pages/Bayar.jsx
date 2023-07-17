import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../elements/Footer";

const Bayar = () => {
    const navigate = useNavigate();

    const detailCourse = localStorage.getItem("data course");
    const data = JSON.parse(detailCourse);

    return ( 
        <div className="bg-slate-200">
            <div className="fixed top-0 w-full h-16 text-white bg-cyan-950">
                <Navbar/>
            </div>
            <div className="flex items-center pt-16 mx-3 text-xs">
                <span class="material-symbols-outlined mr-1 scale-75">keyboard_backspace</span>
                <p onClick={() => navigate('/checkout')} className="cursor-pointer hover:text-blue-500">Checkout</p>
                <div className="mt-1">
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                    <span class="material-symbols-outlined scale-75">chevron_right</span>
                </div>
                <p className="font-bold text-blue-500">Instruksi Bayar</p>
            </div>
            <div className="mx-3 mt-2">
                <h1 className="text-xl font-bold">Instruksi Bayar</h1>
                <div className="">
                    <div className="px-5 py-3 mt-3 bg-white rounded-lg shadow-md md:flex md:gap-64 md:pb-8">
                        <div className="">
                            <div className="flex gap-4 mt-3">
                                <div className="w-24 h-24 p-3 rounded-lg bg-cyan-950">
                                    <img src="/public/img/profilRingkasanPesanan.png" alt="Profil" className="w-12 mx-auto"/>
                                </div>
                                <div className="text-left ">
                                    <h2 className="text-lg font-bold">{data.title}</h2>
                                    <h3 className="font-bold text-md">{data.desc}</h3>
                                    <div className="flex gap-3 mt-2 text-sm">
                                        <p>Batch</p>
                                        <p>{data.batch}</p>
                                    </div>
                                    <div className="flex gap-3 mb-5 text-sm">
                                        <p>Mentor</p>
                                        <p>{data.mentor}</p>
                                    </div>
                                </div>
                            </div>
                            <h3 className="font-bold">Metode Pembayaran</h3>
                            <p className="mt-2 text-sm text-gray-700">Bank Transfer (verifikasi manual)-Mandiri</p>
                            <div className="flex justify-between mt-3">
                                <img src="/public/img/mandiri.png" alt="mandiri" className="w-auto"/>
                                <div className="">
                                    <div className="flex gap-2">
                                        <h4 className="font-bold">No Rek. 137000299089</h4>
                                        <div className="flex text-blue-500">
                                            <span class="material-symbols-outlined scale-75">content_copy</span>
                                            <p>Salin</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600">a.n. PT Widya Kreasi Bangsa</p>
                                </div>
                            </div>
                            <p className="mt-3 text-sm text-gray-700">Nominal yang harus dibayar senilai:</p>
                            <h3 className="mt-1 text-lg font-bold ">Rp. 99.000</h3>
                        </div>
                        <div className="">
                            <h2 className="mt-3 font-bold ">Instruksi Pembayaran</h2>
                            <div className="mt-3 ">
                                <ul className="flex justify-between pb-1 font-bold text-gray-700 border-b-2">
                                    <li>ATM</li>
                                    <li>Internet Banking</li>
                                    <li>M-Banking</li>
                                </ul>
                                <ol className="pl-3 mt-3 text-sm leading-6 list-decimal">
                                    <li>Masukkan kartu ke mesing ATM Mandiri.</li>
                                    <li>Pilih Bahasa.</li>
                                    <li>Masukkan PIN ATM.</li>
                                    <li>Pilih menu transaksi lainnya.</li>
                                    <li>Pilih menu “Transfer”, lalu pilih ke relk Mandiri.</li>
                                    <li>Masukkan no rekening yang dituju.</li>
                                    <li>Masukkan nominal jumlah uang yang akan di transfer.</li>
                                    <li>Layar ATM akan menampilkan data transaksi anda, jika data sudah benar pilih “YA”.</li>
                                    <li>Selesai, struk akan keluar dari mesin ATM.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full py-24 mt-5 text-center text-white md:py-40 bg-cyan-950">
                <h2 className="w-2/3 mx-auto font-bold">Sudah Transfer? Lakukan verifikasi pembayaran segera!</h2>
                <button className="px-5 py-2 m-5 font-bold text-gray-100 rounded-full text-md bg-amber-300 hover:bg-amber-400">Verifikasi Pembayaran</button>
            </div>
            <div className="mt-5 bg-white">
                <Footer/>
            </div>
        </div>
     );
}
 
export default Bayar;