import React from "react";
import AdminLayout from "@/pages/layouts/AdminLayout";
import Button from "@/components/Button";
import Link from "next/link";
import axios from "@/pages/api/axios";
import Image from "next/image";
import ButtonEdit from "@/components/button/ButtonEdit";
import ButtonDelete from "@/components/button/ButtonDelete";

export async function getServerSideProps() {
  try {
    const responseDataEvent = await axios.get("event/all");
    const dataEvent = responseDataEvent.data.data;

    return {
      props: {
        dataEvent,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        dataEvent: [],
      },
    };
  }
}

function event({ dataEvent }) {
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
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th>{i + 1}.</th>
                    <td
                      scope="row"
                      className="flex items-center px-4 py-4 text-gray-900 whitespace-nowrap dark:text-white"
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
                      <ButtonDelete />
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

export default event;
