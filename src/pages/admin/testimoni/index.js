import React, { useEffect, useState } from "react";
import AdminLayout from "@/pages/layouts/AdminLayout";
import Button from "@/components/Button";
import ButtonEdit from "@/components/button/ButtonEdit";
import ButtonDelete from "@/components/button/ButtonDelete";
import axios from "@/pages/api/axios";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import Cookies from "js-cookie";

function Testimoni() {
  const [state, dispatch] = useAppContext();
  const [dataTestimoni, setDataTestimoni] = useState([]);
  const [image, setImage] = useState("");

  const [nama, setNama] = useState("");
  const [divisi, setDivisi] = useState("");
  const [kerja, setKerja] = useState("");
  const [pesan, setPesan] = useState("");

  useEffect(() => {
    getDataTestimoni();
  }, [state.isReload]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = Cookies.get("token");

    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("divisi", divisi);
    formData.append("kerja", kerja);
    formData.append("pesan", pesan);
    formData.append("foto", image);

    try {
      const response = await axios.post("testimonial", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        dispatch({ type: "SET_RELOAD", payload: !state.isReload });
        setNama("");
        setDivisi("");
        setKerja("");
        setPesan("");
        setImage("");
      }

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const getDataTestimoni = async () => {
    try {
      const response = await axios.get("testimonial");
      // const dataLayanan = response.data.data;

      setDataTestimoni(response.data.data);
    } catch (error) {
      console.log(error);
      setDataTestimoni([]);
    }
  };

  return (
    <AdminLayout>
      <section>
        <div className="border p-5 rounded-lg mb-5">
          <h2 className="head-4">Tambah Testimoni</h2>
          <form className="mt-2">
            <div className="flex justify-between items-center gap-5">
              <input
                type="file"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Gambar/Foto"
                required
                onChange={handleFileChange}
              />
              <input
                type="text"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Nama"
                required
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
              <input
                type="text"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Divis/Jabatan"
                required
                value={divisi}
                onChange={(e) => setDivisi(e.target.value)}
              />
              <input
                type="text"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Tempat Bekerja/pekerjaan"
                required
                value={kerja}
                onChange={(e) => setKerja(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center gap-5 mt-2">
              <input
                type="text"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Pesan"
                required
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
              />

              <div onClick={handleSubmit}>
                <Button className={"bg-primary-100 text-white"}>Tambah</Button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section>
        <h2 className="head-4">Daftar Layanan</h2>

        <div className="relative overflow-x-auto mt-2">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3">
                  No.
                </th>
                <th scope="col" className="px-4 py-3">
                  Nama
                </th>
                <th scope="col" className="px-4 py-3">
                  Jabatan / Divisi / Posisi
                </th>
                <th scope="col" className="px-4 py-3">
                  Tempat Bekerja / Pekerjaan
                </th>
                <th scope="col" className="px-4 py-3">
                  Pesan
                </th>
                <th scope="col" className="px-4 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {dataTestimoni &&
                dataTestimoni.map((data, i) => (
                  <tr
                    key={i}
                    className="bg-white border-b  hover:bg-gray-50"
                  >
                    <th className="px-4">{i + 1}.</th>
                    <td
                      scope="row"
                      className="flex items-center px-4 py-4 text-gray-900 whitespace-nowrap"
                    >
                      <Image
                        className="w-10 h-10 rounded-full"
                        src={data.image}
                        width={40}
                        height={40}
                        alt={data.name}
                      />
                      <div className="pl-3">
                        <div className="text-base font-semibold capitalize">
                          {data.nama}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">{data.divisi}</td>
                    <td className="px-4 py-4">{data.posisi}</td>
                    <td className="px-4 py-4">{data.pesan}</td>
                    <td className="px-4 py-4 flex items-center gap-2">
                      <ButtonEdit />
                      <ButtonDelete endpoint={`testimonial/${data.uuid}`} />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </AdminLayout>
  );
}

export default Testimoni;
