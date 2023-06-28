import React, { useEffect, useState } from "react";
import AdminLayout from "@/pages/layouts/AdminLayout";
import Button from "@/components/Button";
import ButtonEdit from "@/components/button/ButtonEdit";
import ButtonDelete from "@/components/button/ButtonDelete";
import axios from "@/pages/api/axios";
import Image from "next/image";
import Cookies from "js-cookie";
import { useAppContext } from "@/context/AppContext";

function Layanan() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [dataLayanan, setDataLayanan] = useState([]);
  const [state, dispatch] = useAppContext();

  useEffect(() => {
    getDataLayanan();
  }, []);

  useEffect(() => {
    getDataLayanan();
  }, [state.isReload]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // setFileName(file.name);
    // Lakukan proses upload file disini
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = Cookies.get("token");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    try {
      const response = await axios.post("layanan", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        setTitle("");
        setDescription("");
        dispatch({ type: "SET_RELOAD", payload: !state.isReload });
      }

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const getDataLayanan = async () => {
    try {
      const response = await axios.get("layanan");
      const dataLayanan = response.data.data;

      setDataLayanan(dataLayanan);
    } catch (error) {
      console.log(error);
      setDataLayanan([]);
    }
  };

  return (
    <AdminLayout>
      <section>
        <div className="border p-5 rounded-lg mb-5">
          <h2 className="head-4">Tambah Layanan</h2>
          <form className="mt-2">
            <div className="flex justify-between items-center gap-5">
              <input
                type="file"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Gambar/Foto Layanan"
                required
                onChange={handleFileChange}
              />
              <input
                type="text"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Judul Layanan (ex. Layanan Teknis)"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Deskripsi Layanan"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-4 py-3">
                  No.
                </th>
                <th scope="col" className="px-4 py-3">
                  Layanan
                </th>
                <th scope="col" className="px-4 py-3">
                  Deskripsi Layanan
                </th>
                <th scope="col" className="px-4 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {dataLayanan &&
                dataLayanan.map((data, i) => (
                  <tr
                    key={i}
                    className="bg-white border-b hover:bg-gray-50"
                  >
                    <th className="px-4">{i + 1}.</th>
                    <td
                      scope="row"
                      className="flex items-center px-4 py-4 text-gray-900 whitespace-nowrap "
                    >
                      <Image
                        className="w-10 h-10 rounded-md"
                        src={data.image}
                        width={40}
                        height={40}
                        alt={data.nama}
                      />
                      <div className="pl-3">
                        <div className="text-base font-semibold capitalize">
                          {data.nama}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">{data.deskripsi}</td>
                    <td className="px-4 py-4 flex items-center gap-2">
                      <ButtonEdit />
                      <ButtonDelete endpoint={`layanan/${data.uuid}`} />
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

export default Layanan;
