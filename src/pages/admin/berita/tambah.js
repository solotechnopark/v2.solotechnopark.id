import React, { useState } from "react";
import AdminLayout from "@/pages/layouts/AdminLayout";
import Button from "@/components/Button";
import dataCategory from "../../../data/dataCategory.json";
import "react-quill/dist/quill.snow.css";
import quilModules from "@/config/quil";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false, // pastikan ReactQuill hanya dijalankan pada sisi klien
});

function TambahBerita() {
  const [text, setText] = useState("");
  const kategoriBerita = dataCategory;

  return (
    <AdminLayout>
      <section>
        <div className="p-5 rounded-lg mb-5">
          <h2 className="head-4 mb-5">Tambah Berita Baru</h2>

          <form>
            <div className="flex justify-between items-center mb-2 gap-5">
              <input
                type="text"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Judul Berita"
                required
              />
              <input
                type="text"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Deskripsi Singkat Berita"
                required
              />
            </div>
            <div className="flex justify-between items-center mb-2 gap-5">
              <input
                type="file"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Banner Berita"
                required
              />
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                <option>-- Kategori Berita --</option>
                {kategoriBerita &&
                  kategoriBerita.map((data, i) => (
                    <option key={i} value={data.slug}>
                      {data.kategori}
                    </option>
                  ))}
              </select>
            </div>
            <div className="flex justify-between items-center mb-2 gap-5 mt-5">
              <ReactQuill
                value={text}
                onChange={setText}
                modules={quilModules.modules}
                formats={quilModules.formats}
                style={{
                  width: "100%",
                  height: "28rem",
                  marginBottom: "4.5rem",
                }}
                theme="snow"
              />
            </div>
          </form>
          <Button className={"bg-primary-100 text-white"}>Tambah</Button>
        </div>
      </section>
    </AdminLayout>
  );
}

export default TambahBerita;
