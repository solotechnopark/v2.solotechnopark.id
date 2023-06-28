import React, { useEffect, useState } from "react";
import AdminLayout from "@/pages/layouts/AdminLayout";
import Button from "@/components/Button";
import Link from "next/link";
import ButtonEdit from "@/components/button/ButtonEdit";
import ButtonDelete from "@/components/button/ButtonDelete";
import Image from "next/image";
import axios from "@/pages/api/axios";
import { useAppContext } from "@/context/AppContext";

function Berita() {
  const [state, dispatch] = useAppContext();
  const [dataBerita, setDataBerita] = useState([]);

  useEffect(() => {
    getdataBerita();
  }, [state.isReload]);

  const getdataBerita = async () => {
    try {
      const response = await axios.get("berita/all");
      const dataBerita = response.data.data;

      setDataBerita(dataBerita);
    } catch (error) {
      console.log(error);
      setDataBerita([]);
    }
  };

  return (
    <AdminLayout>
      <section>
        <div className="border p-5 rounded-lg mb-5 flex justify-between items-center">
          <h2 className="head-4">Tambah Berita</h2>
          <Link href={`berita/tambah/`}>
            <Button className={"bg-primary-100 text-white"}>Tambah</Button>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="head-4">Daftar Berita</h2>

        <div className="relative overflow-x-auto mt-2">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3">
                  No.
                </th>
                <th scope="col" className="px-4 py-3">
                  Gambar Berita
                </th>
                <th scope="col" className="px-4 py-3">
                  Tanggal Upload
                </th>
                <th scope="col" className="px-4 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {dataBerita &&
                dataBerita.map((data, i) => (
                  <tr
                    key={i}
                    className="bg-white border-b hover:bg-gray-50"
                  >
                    <th>{i + 1}.</th>
                    <td
                      scope="row"
                      className="flex items-center px-4 py-4 text-gray-900 whitespace-nowrap"
                    >
                      <Image
                        className="w-10 h-10 rounded-sm"
                        src={data.image}
                        width={40}
                        height={40}
                        alt={data.slug}
                      />
                      <div className="pl-3">
                        <div className="text-base font-semibold capitalize">
                          <p>{data.title}</p>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-4">{data.createdAt}</td>
                    <td className="px-4 py-4 flex items-center gap-2">
                      <ButtonEdit />
                      <ButtonDelete endpoint={`berita/${data.slug}`} />
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

export default Berita;
