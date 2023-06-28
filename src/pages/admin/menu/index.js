import React from "react";
import Button from "@/components/Button";
import AdminLayout from "@/pages/layouts/AdminLayout";
import ButtonEdit from "@/components/button/ButtonEdit";
import ButtonDelete from "@/components/button/ButtonDelete";

function menu() {
  return (
    <AdminLayout>
      <section>
        <div className="border p-5 rounded-lg mb-5">
          <h2 className="head-4">Tambah Menu</h2>
          <form className="mt-2">
            <div className="flex justify-between items-center gap-5">
              <input
                type="text"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Nama Menu"
                required
              />
              <input
                type="text"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Alamat Menu"
                required
              />
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option>-- Ingin diletakan dimana ? --</option>
                <option>Utama</option>
                <option>Layanan</option>
              </select>

              <Button className={"bg-primary-100 text-white"}>Tambah</Button>
            </div>
          </form>
        </div>
      </section>

      <section>
        <h2 className="head-4">Daftar Menu</h2>

        <div className="relative overflow-x-auto mt-2">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3">
                  No.
                </th>
                <th scope="col" className="px-4 py-3">
                  Logo Menu
                </th>
                <th scope="col" className="px-4 py-3">
                  Nama Menu
                </th>
                <th scope="col" className="px-4 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td>1.</td>
                <th
                  scope="row"
                  className="flex items-center px-4 py-4 text-gray-900 whitespace-nowrap"
                >
                  {/* <Image
                      className="w-10 h-10 rounded-full"
                      src={data.logo}
                      width={40}
                      height={40}
                      alt={data.name}
                    /> */}
                  <div className="pl-3">
                    <div className="text-base font-semibold capitalize">
                      {/* {data.name} */}gas
                    </div>
                  </div>
                </th>
                <th>gaes</th>
                {/* <td className="px-4 py-4">{data.logo}</td> */}

                <td></td>
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

export default menu;
