import React from "react";
import AdminLayout from "@/pages/layouts/AdminLayout";
import Button from "@/components/Button";
import Link from "next/link";
import ButtonEdit from "@/components/button/ButtonEdit";
import ButtonDelete from "@/components/button/ButtonDelete";

function event() {
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
                  Gambar Event
                </th>
                <th scope="col" className="px-4 py-3">
                  Nama Event
                </th>
                <th scope="col" className="px-4 py-3">
                  Deskripsi Event
                </th>
                <th scope="col" className="px-4 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th>1.</th>
                <td
                  scope="row"
                  className="flex items-center px-4 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  oke
                  {/* <Image
                      className="w-10 h-10 rounded-full"
                      src={data.logo}
                      width={40}
                      height={40}
                      alt={data.name}
                    /> */}
                  <div className="pl-3">
                    <div className="text-base font-semibold capitalize">
                      {/* {data.name} */}nama event
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">deskripsi</td>
                <td className="px-4 py-4">deskripsi</td>
                <td className="px-4 py-4 flex items-center gap-2">
                  <ButtonEdit />
                  <ButtonDelete />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </AdminLayout>
  );
}

export default event;
