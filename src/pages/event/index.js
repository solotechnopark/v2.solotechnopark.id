import CardEvent from "@/components/cards/CardEvent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Pagination from "@/components/Pagination";
import { useEffect, useState } from "react";
import axios from "../api/axios";
import CardSkeleton from "@/components/cards/CardSkeleton";
import { useAppContext } from "@/context/AppContext";
import { NextSeo } from "next-seo";

function Event() {
  const [event, setEvent] = useState([]);
  const [pagination, setPagination] = useState({});
  const [state, dispatch] = useAppContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch({ type: "SET_CURRENT_PAGE", payload: 1 });
  }, []);

  useEffect(() => {
    getEvent(state.isCurrentPage || 1);
  }, [state.isCurrentPage]);

  const getEvent = async (page) => {
    try {
      const response = await axios.get(`event/all?page=${page}`);
      const { data, meta } = response.data;

      setEvent(data);
      setPagination({ totalPages: meta.totalPages, currentPage: 1 });
      setLoading(false);
    } catch (err) {
      console.warn(err);
      setLoading(true);
    }
  };

  return (
    <>
      <NextSeo
        title="Event - Solo Technopark"
        description="Kawasan Inovatif dan Berdaya Saing International. Pusat Inovasi dan Vokasi yang Memadukan Unsur Pengembangan Iptek, Kebutuhan Pasar, Industri dan Bisnis Untuk Penguatan Daya Saing Daerah."
        canonical="https://solotechnopark.id/"
        openGraph={{
          url: "https://solotechnopark.id/",
          title: "Event - solo technopark",
          description: "Kawasan Inovatif dan Berdaya Saing International.",
          images: [
            {
              url: "/favicon.png",
              width: 800,
              height: 600,
              alt: "Profile Solo Technopark",
            },
          ],
          site_name: "Solo Technopark",
        }}
      />

      <main>
        <Navbar />

        {/* <section>
          <div className="container">
            <div
              className={
                "px-10 py-10 grid grid-cols-1 lg:grid-cols-4 gap-10 bg-red-50 rounded-lg"
              }
            >
              <div>
                <label className="font-bold">Tanggal Mulai</label>
                <input
                  className="block border py-3 px-10 w-full rounded-full mt-5"
                  type="date"
                />
              </div>
              <div>
                <label className="font-bold">Tanggal Akhir</label>
                <input
                  className="block border py-3 px-10 w-full rounded-full mt-5"
                  type="date"
                />
              </div>
              <div>
                <label className="font-bold">Kategori</label>
                <select className="block border py-4 px-10 w-full rounded-full mt-5">
                  <option>---Pilih Kategori----</option>
                  <option>---Pilih Kategori----</option>
                  <option>---Pilih Kategori----</option>
                </select>
              </div>
              <div className="flex items-end">
                <Button
                  className={
                    "bg-primary-100 text-white w-full hover:opacity-50"
                  }
                >
                  Cari Event
                </Button>
              </div>
            </div>
          </div>
        </section> */}

        <section>
          <div className="container my-20 mg-20 lg:mt-36">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {event.length > 0
                ? event.map((data, i) => (
                    <CardEvent
                      key={i}
                      slug={data.slug}
                      title={data.title}
                      category={data.kategori}
                      image={data.foto}
                      date={data.startDate}
                      time={data.waktu}
                      location={data.tempat}
                    />
                  ))
                : loading && (
                    <>
                      <CardSkeleton />
                      <CardSkeleton />
                      <CardSkeleton />
                      <CardSkeleton />
                    </>
                  )}
            </div>
            <div className="flex justify-center mt-10 lg:mt-20">
              <Pagination
                totalPage={pagination.totalPages}
                currentPage={pagination.currentPage}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Event;
