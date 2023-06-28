import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import React from "react";
import axios from "../api/axios";
import dateIcon from "../../images/date.svg";
import locationIcon from "../../images/location.svg";
import timeIcon from "../../images/time.svg";
import Image from "next/image";
import sanitizeHtml from "sanitize-html";
import SkeletonImage from "@/components/skeleton/SkeletonImage";
import SkeletonTitle from "@/components/skeleton/SkeletonTitle";
import { NextSeo } from "next-seo";

export async function getServerSideProps(context) {
  try {
    const { params } = context;
    const { slug } = params;

    const event = await axios.get(`event/${slug}`);
    const eventData = event.data.data[0];

    return {
      props: {
        event: eventData,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        event: null,
      },
    };
  }
}

function EventDetail({ event }) {
  return (
    <>
      <NextSeo
        title={event.title}
        description={event.paragraph}
        canonical={`https://dev.solotechnopark.id/event/${event.slug}`}
        openGraph={{
          url: `https://dev.solotechnopark.id/event/${event.slug}`,
          title: `${event.title} - solotechnopark`,
          description:
            "Pusat Inovasi dan Vokasi yang Memadukan Unsur Pengembangan Iptek, Kebutuhan Pasar, Industri dan Bisnis Untuk Penguatan Daya Saing Daerah.",
          images: [
            {
              url: event.foto,
              width: 800,
              height: 600,
              alt: "Event Solo Technopark",
            },
          ],
          site_name: "Solo Technopark",
        }}
      />

      <Navbar />

      <main>
        <section className="mt-20 lg:mt-36">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {event.foto ? (
                <div>
                  <div className="bg-primary-100 rounded-lg overflow-hidden">
                    <img
                      className="w-full"
                      src={event.foto}
                      alt="profile"
                      width={728}
                      height={728}
                    />
                  </div>
                </div>
              ) : (
                <SkeletonImage />
              )}

              <div className="content-article">
                {/* <span className="bg-slate-50 px-4 py-2 inline-block text-gray-700 border">
                  Uncategories
                </span> */}

                {event.kategori && (
                  <span className="flex items-center gap-2 h-5">
                    <p className="text-gray-600 text-sm bg-slate-50 border rounded-sm  px-4 capitalize mt-5">
                      {event.kategori}
                    </p>
                  </span>
                )}

                {event.title ? (
                  <h1 className="head-2 font-bold my-10">{event.title}</h1>
                ) : (
                  <SkeletonTitle />
                )}

                {event.waktu && (
                  <span className="flex items-center h-5 gap-2 mb-4">
                    <Image
                      width={20}
                      className="mb-1"
                      src={timeIcon}
                      alt={"date"}
                    />
                    <p className="text-gray-600 my-4 text-sm p-0">
                      {event.waktu}
                    </p>
                  </span>
                )}

                {event.startDate && (
                  <span className="flex items-center gap-2 h-5 mb-4">
                    <Image
                      width={20}
                      className="mb-1"
                      src={dateIcon}
                      alt={"date"}
                    />
                    <p className="text-gray-600 my-4 text-sm">
                      {event.startDate === event.endDate
                        ? event.endDate
                        : event.endDate
                        ? `${event.startDate} - ${event.endDate}`
                        : event.startDate}
                    </p>
                  </span>
                )}

                {event.tempat && (
                  <span className="flex items-center gap-2 h-5 mb-4">
                    <Image className="mb-0" src={locationIcon} alt={"date"} />
                    <p className="text-gray-600 my-4 text-sm capitalize">
                      {event.tempat}
                    </p>
                  </span>
                )}
              </div>
            </div>

            <div className="content-article py-10">
              <div
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(event.paragraph),
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

export default EventDetail;
