  import React, { useEffect, useState } from "react";
import AdminLayout from "@/pages/layouts/AdminLayout";
import Button from "@/components/Button";
import Link from "next/link";
import axios from "@/pages/api/axios";
import Image from "next/image";
import ButtonEdit from "@/components/button/ButtonEdit";
import ButtonDelete from "@/components/button/ButtonDelete";
import { useAppContext } from "@/context/AppContext";

function Event() {
  const [state, dispatch] = useAppContext();
  const [dataEvent, setDataEvent] = useState([]);

  useEffect(() => {
    getDataEvent();
  }, [state.isReload]);

  const getDataEvent = async () => {
    try {
      const response = await axios.get("event/all");
      const dataEvent = response.data.data;

      setDataEvent(dataEvent);
    } catch (error) {
      console.log(error);
      setDataEvent([]);
    }
  };

  return (
    <AdminLayout>
      <section>
        <div className="border p-5 rounded-lg mb-5 flex justify-between items-center">
          <h2 className="head-4">Tambah Event</h2>
          <Link href={`event/tambah/`}>
            <Button className={"bg-primary-100 text-white"}>Tambah</Button>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="head-4">Daftar Event</h2>

        <div className="relative overflow-x-auto mt-2">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3">
                  No.
                </th>
                <th scope="col" className="px-4 py-3">
                  Event
                </th>
                <th scope="col" className="px-4 py-3">
                  Kategori
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
              {dataEvent &&
                dataEvent.map((data, i) => (
                  <tr
                    key={i}
                    className="bg-white border-bhover:bg-gray-50"
                  >
                    <th>{i + 1}.</th>
                    <td
                      scope="row"
                      className="flex items-center px-4 py-4 text-gray-900 whitespace-nowrap"
                    >
                      <Image
                        className="w-10 h-10 rounded-sm"
                        src={data.foto}
                        width={40}
                        height={40}
                        alt={data.slug}
                      />
                      <div className="pl-3">
                        <div className="text-base font-semibold capitalize">
                          {data.title}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      {data.kategori ? data.kategori : "Tidak ada kategori"}
                    </td>
                    <td className="px-4 py-4">{data.startDate}</td>
                    <td className="px-4 py-4 flex items-center gap-2">
                      <ButtonEdit />
                      <ButtonDelete endpoint={`event/${data.slug}`} />
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

export default Event;
