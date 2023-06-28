import React, { useEffect, useState } from "react";
import AdminLayout from "@/pages/layouts/AdminLayout";
import ButtonDelete from "@/components/button/ButtonDelete";
import axios from "@/pages/api/axios";
import { useAppContext } from "@/context/AppContext";

function Pesan() {
  const [dataPesan, setDataPesan] = useState([]);
  const [state, dispatch] = useAppContext();

  useEffect(() => {
    getDataPesan();
  }, []);

  useEffect(() => {
    getDataPesan();
  }, [state.isReload]);

  const getDataPesan = async () => {
    try {
      const responseDataPesan = await axios.get("pesan");
      const dataPesan = responseDataPesan.data.data;

      setDataPesan(dataPesan);
    } catch (error) {
      console.log(error);
      setDataPesan([]);
    }
  };

  return (
    <AdminLayout>
      <section>
        <div className="border p-5 rounded-lg mb-5">
          <span>Total Pesan</span>
          <h2>180</h2>
        </div>
      </section>

      <section>
        <h2 className="head-4">Daftar Pesan</h2>

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
                  Email
                </th>
                <th scope="col" className="px-4 py-3">
                  Perihal
                </th>
                <th scope="col" className="px-4 py-3">
                  Pesan
                </th>
                <th scope="col" className="px-4 py-3">
                  Tanggal
                </th>
                <th scope="col" className="px-4 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {dataPesan &&
                dataPesan.map((data, i) => (
                  <tr
                    key={i}
                    className="bg-white border-b hover:bg-gray-50 "
                  >
                    <td className="px-4 py-4">
                      {data.tanggal} <br />
                    </td>
                    <td className="px-4">
                      <small className="bg-gray-50 py-1 px-2">
                        {data.waktu}
                      </small>
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-4 text-gray-900 whitespace-nowrap"
                    >
                      <div className="pl-3">
                        <div className="text-base font-semibold capitalize">
                          {data.nama}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">{data.email}</td>
                    <td className="px-4 py-4">{data.judul}</td>
                    <td className="px-4 py-4">{data.pesan}</td>
                    <td className="px-4 py-4 flex items-center gap-2">
                      <ButtonDelete endpoint={`pesan/${data.uuid}`} />
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

export default Pesan;
