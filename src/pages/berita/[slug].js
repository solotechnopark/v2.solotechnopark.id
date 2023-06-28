import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import axios from "../api/axios";
import dateIcon from "../../images/date.svg";
import locationIcon from "../../images/location.svg";
import timeIcon from "../../images/time.svg";
import Image from "next/image";
import SkeletonTitle from "@/components/skeleton/SkeletonTitle";
import SkeletonImage from "@/components/skeleton/SkeletonImage";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { FaUserEdit } from "react-icons/fa";

export async function getServerSideProps(context) {
  try {
    const { params, req } = context;
    const { slug } = params;

    const berita = await axios.get(`berita/${slug}`);
    const beritaData = berita.data.data[0];

    return {
      props: {
        berita: beritaData,
        url: req.url,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        berita: null,
        url: null,
      },
    };
  }
}

function BeritaDetail({ berita, url }) {
  return (
    <>
      <Head>
        <meta name="keywords" content={berita.tags || "solo technopark"} />
        <meta name="author" content={berita.author || "In'am"} />
      </Head>

      <NextSeo
        title={berita.title}
        description={berita.encoded}
        canonical={`https://solotechnopark.id/berita/${berita.slug}`}
        openGraph={{
          url: `https://solotechnopark.id/berita/${berita.slug}`,
          title: `${berita.title} - Solo Technopark`,
          description: berita.encoded,
          keywords: berita.tags,
          author: berita.author,
          images: [
            {
              url: berita.image,
              width: 800,
              height: 600,
              alt: "Event Solo Technopark",
            },
          ],
          site_name: "Berita Solo Technopark",
        }}
      />

      <Navbar />

      <main>
        <section className="mt-24 lg:mt-36">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10 border-b pb-16">
              {berita.image ? (
                <div>
                  <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <img className="w-full" src={berita.image} alt="profile" />
                  </div>
                </div>
              ) : (
                <SkeletonImage />
              )}

              <div className="header">
                {berita.category && (
                  <span className="gap-2 h-5 inline-block">
                    <p className="text-gray-600 my-4 text-sm bg-slate-50 border rounded-sm py-1 px-4">
                      {berita.category}
                    </p>
                  </span>
                )}

                {berita.title ? (
                  <h1 className="head-2 font-bold mt-10 mb-3">
                    {berita.title}z
                  </h1>
                ) : (
                  <SkeletonTitle />
                )}

                <span className="gap-2 flex items-center">
                  <p className="text-gray-600 my-4 text-sm bg-slate-50 border rounded-sm py-1 px-4 hover:bg-gray-200 cursor-pointer">
                    solotechnopark.id{url}
                  </p>
                </span>
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

                {berita.location && (
                  <span className="flex items-center gap-2 h-5 mt-4">
                    <Image
                      className="mb-0 mr-1"
                      src={locationIcon}
                      alt={"date"}
                    />
                    <p className="text-gray-600 my-4 text-sm">
                      {berita.location}
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
              </div>
            </div>

            <div className="content-article py-10 lg:px-36">
              <div dangerouslySetInnerHTML={{ __html: berita.encoded }}></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default BeritaDetail;
