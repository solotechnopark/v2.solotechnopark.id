import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import AdminLayout from "@/pages/layouts/AdminLayout";
import ButtonEdit from "@/components/button/ButtonEdit";
import ButtonDelete from "@/components/button/ButtonDelete";
import axios from "@/pages/api/axios";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import Cookies from "js-cookie";
import EditMitra from "@/components/modal/EditMitra";

function Mitra() {
  const [state, dispatch] = useAppContext();
  const [dataMitra, setDataMitra] = useState([]);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getDataMitra();
  }, [state.isReload]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = Cookies.get("token");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    try {
      const response = await axios.post("mitra", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        setTitle("");
        dispatch({ type: "SET_RELOAD", payload: !state.isReload });
      }

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const getDataMitra = async () => {
    try {
      const response = await axios.get("mitra");
      // const dataLayanan = response.data.data;

      setDataMitra(response.data.data);
    } catch (error) {
      console.log(error);
      setDataMitra([]);
    }
  };

  return (
    <AdminLayout>

      <EditMitra/>

      <section>
        <div className="border p-5 rounded-lg mb-5">
          <h2 className="head-4">Tambah Mitra</h2>
          <form className="mt-2">
            <div className="flex justify-between items-center gap-5">
              <input
                type="file"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Gambar Mitra"
                required
                onChange={handleFileChange}
              />
              <input
                type="text"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Nama Mitra"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <div onClick={handleSubmit}>
                <Button className={"bg-primary-100 text-white"}>Tambah</Button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section>
        <h2 className="head-4">Daftar Mitra</h2>

        <div className="relative overflow-x-auto mt-2">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3">
                  No.
                </th>
                <th scope="col" className="px-4 py-3">
                  Logo Mitra
                </th>
                <th scope="col" className="px-4 py-3">
                  Nama Mitra
                </th>
                <th scope="col" className="px-4 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {dataMitra &&
                dataMitra.map((data, i) => (
                  <tr
                    key={i}
                    className="bg-white border-b hover:bg-gray-50 "
                  >
                    <td className="pl-4">{i + 1}.</td>
                    <th
                      scope="row"
                      className="flex items-center px-4 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <Image
                        className="w-10 h-10 rounded-full"
                        src={data.image}
                        width={40}
                        height={40}
                        alt={data.title}
                      />
                      <div className="px-4">
                        <div className="text-base font-semibold capitalize">
                          {data.title}
                        </div>
                      </div>
                    </th>
                    <th className="px-4">{data.title}</th>
                    {/* <td className="px-4 py-4">{data.logo}</td> */}

                    <td className="px-4 py-4 flex items-center gap-2">
                      <ButtonEdit id={data.uuid} />
                      <ButtonDelete endpoint={`mitra/${data.uuid}`} />
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

export default Mitra;
