import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import axios from "../api/axios";
import dateIcon from "../../images/date.svg";
import locationIcon from "../../images/location.svg";
import timeIcon from "../../images/time.svg";
import Image from "next/image";
import sanitizeHtml from "sanitize-html";
import SkeletonTitle from "@/components/skeleton/SkeletonTitle";
import SkeletonImage from "@/components/skeleton/SkeletonImage";
import { NextSeo } from "next-seo";

export async function getServerSideProps(context) {
  try {
    const { params } = context;
    const { slug } = params;

    const berita = await axios.get(`berita/${slug}`);
    const beritaData = berita.data.data[0];

    return {
      props: {
        berita: beritaData,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        berita: null,
      },
    };
  }
}

function BeritaDetail({ berita }) {
  return (
    <>
      <NextSeo
        title={berita.title}
        description={berita.encoded}
        canonical={`https://dev.solotechnopark.id/berita/${berita.slug}`}
        openGraph={{
          url: `https://dev.solotechnopark.id/berita/${berita.slug}`,
          title: `${berita.title} - solotechnopark`,
          description:
            "Pusat Inovasi dan Vokasi yang Memadukan Unsur Pengembangan Iptek, Kebutuhan Pasar, Industri dan Bisnis Untuk Penguatan Daya Saing Daerah.",
          images: [
            {
              url: berita.foto,
              width: 800,
              height: 600,
              alt: "Event Solo Technopark",
            },
          ],
          site_name: "solotechnopark",
        }}
      />

      <Navbar />

      <main>
        <section className="mt-36">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {berita.image ? (
                <div>
                  <div className="bg-primary-100 rounded-lg overflow-hidden">
                    <img
                      className="w-full"
                      src={berita.image}
                      alt="profile"
                    ></img>
                  </div>
                </div>
              ) : (
                <SkeletonImage />
              )}

              <div className="header">
                {/* <span className="bg-slate-50 px-4 py-2 inline-block text-gray-700 border">
                  Uncategories
                </span> */}
                {berita.category && (
                  <span className="gap-2 h-5 inline-block">
                    <p className="text-gray-600 my-4 text-sm bg-slate-50 border rounded-sm py-1 px-4">
                      {berita.category}
                    </p>
                  </span>
                )}

                {berita.title ? (
                  <h1 className="head-2 font-bold my-10">{berita.title}</h1>
                ) : (
                  <SkeletonTitle />
                )}

                {berita.time && (
                  <span className="flex items-center h-5 gap-2 mt-4">
                    <img
                      width={20}
                      className="mb-1"
                      src={timeIcon}
                      alt={"date"}
                    />
                    <p className="text-gray-600 my-4 text-sm p-0">
                      {berita.time}
                    </p>
                  </span>
                )}

                {berita.createdAt && (
                  <span className="flex items-center gap-2 h-5 mt-4">
                    <Image
                      width={20}
                      className="mb-1"
                      src={dateIcon}
                      alt={"date"}
                    />
                    <p className="text-gray-600 my-4 text-sm">
                      {berita.createdAt}
                    </p>
                  </span>
                )}

                {berita.location && (
                  <span className="flex items-center gap-2 h-5 mt-4">
                    <Image className="mb-0" src={locationIcon} alt={"date"} />
                    <p className="text-gray-600 my-4 text-sm">
                      {berita.location}
                    </p>
                  </span>
                )}
              </div>
            </div>

            <div className="content-article py-10">
              <div
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(berita.encoded),
                }}
              ></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default BeritaDetail;
