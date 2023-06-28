import CardSkeleton from "@/components/cards/CardSkeleton";
import Event from "@/components/Event";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Pagination from "@/components/Pagination";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import { NextSeo } from "next-seo";

function Berita() {
  const [berita, setBerita] = useState([]);
  const [state, dispatch] = useAppContext();
  const [pagination, setPagination] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch({ type: "SET_CURRENT_PAGE", payload: 1 });
  }, []);

  useEffect(() => {
    getBerita(state.isCurrentPage || 1);
  }, [state.isCurrentPage]);

  const getBerita = async (page) => {
    try {
      const response = await axios.get(`berita/all?page=${page}`);
      const { data, meta } = response.data;

      setBerita(data);
      setPagination({ totalPages: meta.totalPages, currentPage: 1 });
      setLoading(false);
    } catch (err) {
      console.warn(err);
    }
  };

  const convertDate = (dateStr) => {
    const date = new Date(dateStr);

    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = date.toLocaleDateString("id-ID", options);

    return formattedDate;
  };

  return (
    <>
      <NextSeo
        title="Berita - Solo Technopark"
        description="Kawasan Inovatif dan Berdaya Saing International. Pusat Inovasi dan Vokasi yang Memadukan Unsur Pengembangan Iptek, Kebutuhan Pasar, Industri dan Bisnis Untuk Penguatan Daya Saing Daerah."
        canonical="https://solotechnopark.id/"
        openGraph={{
          url: "https://solotechnopark.id/",
          title: "Berita - Solo Technopark",
          description: "Kawasan Inovatif dan Berdaya Saing International.",
          images: [
            {
              url: "/favicon.png",
              width: 800,
              height: 600,
              alt: "Berita Solo Technopark",
            },
          ],
          site_name: "Solo Technopark",
        }}
      />

      <main>
        <Navbar />
        <section className="mt-10 lg:mt-32">
          <div className="container pt-10 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-stretch gap-5">
              {berita.length > 0
                ? berita.map((data, i) => (
                    <Link href={`berita/${data.slug}`} target="_blank" key={i}>
                      <Event
                        key={i}
                        type={"berita"}
                        slug={data.slug}
                        title={data.title}
                        date={convertDate(data.createdAt)}
                        image={data.image}
                      />
                    </Link>
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

export default Berita;
