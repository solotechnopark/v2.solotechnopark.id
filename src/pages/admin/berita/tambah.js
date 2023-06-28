import React, { useState } from "react";
import AdminLayout from "@/pages/layouts/AdminLayout";
import Button from "@/components/Button";
import dataCategory from "../../../data/dataCategory.json";
import "react-quill/dist/quill.snow.css";
import quilModules from "@/config/quil";
import dynamic from "next/dynamic";
import Cookies from "js-cookie";
import axios from "@/pages/api/axios";
import { useRouter } from "next/router";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false, // pastikan ReactQuill hanya dijalankan pada sisi klien
});

function TambahBerita() {
  const router = useRouter();
  const kategoriBerita = dataCategory;
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [kategori, setKategori] = useState(""); 
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState({
    tempat: "",
  });

  const [textButton, setTextButton] = useState("Tambah");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTextButton("Loading ...");

    const token = Cookies.get("token");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("location", date.tempat);
    formData.append("category", kategori);
    formData.append("author", author);
    formData.append("tags", tags);
    formData.append("image", image);
    formData.append("encoded", text);

    try {
      if (title !== "") {
        const response = await axios.post("berita", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.status === 200) {
          setTextButton("Tambah");
          router.push("/admin/berita");
        }
      } else {
        window.alert("Judul wajib di isi");
      }
      setTextButton("Kirim Ulang");
    } catch (err) {
      console.log(err);
      setTextButton("Kirim Ulang");
      window.alert("Maaf terjadi kesalahan pada saat mengirim data");
    }
  };

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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Judul Berita"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <input
                type="text"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Tags (ex. solotechnopark, solo, inkubator)"
                required
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
              <input
                type="text"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Author"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center mb-2 gap-5">
              <input
                type="file"
                name="name"
                className="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Banner Berita"
                required
                onChange={handleFileChange}
              />
    
          
              <input
                type="text"
                name="tempat"
                className="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                placeholder="Tempat pelaksanaan"
                value={date.tempat}
                onChange={(e) => setDate({ ...date, tempat: e.target.value })}
              />
           
              <select
                className="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={kategori}
                onChange={(e) => setKategori(e.target.value)}
              >
                <option>-- Kategori Berita --</option>
                {kategoriBerita &&
                  kategoriBerita.map((data, i) => (
                    <option key={i} value={data.slug} className="capitalize">
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
          <div onClick={handleSubmit}>
            <Button className={"bg-primary-100 text-white"}>
              {textButton}
            </Button>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}

export default TambahBerita;
