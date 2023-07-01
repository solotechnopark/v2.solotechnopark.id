// import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import ThumbProfile from "@/components/ThumbProfile";
import Card from "@/components/cards/Card";
import CardSektor from "@/components/cards/CardSektor";
import KawasanSTP from "@/images/Kawsan-STP-6.png";
import FungsiDanPeran from "@/images/fungsi-dan-peran.png";
import Image from "next/image";
import Mitra from "@/components/Mitra";
import CardLayanan from "@/components/cards/CardLayanan";
import Testimonial from "@/components/Testimonial";
import Event from "@/components/Event";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import ImagePeopleManufactur from "@/images/image-manufactur-people.png";
import ImageBannerPeopleManufactur from "@/images/diklat-manufaktur-solotechnopark.png";
import axios from "./api/axios";
import Link from "next/link";
import CardSkeleton from "@/components/cards/CardSkeleton";
import { NextSeo } from "next-seo";
import Aos from "aos";
import dataCluster from "@/data/dataCluster";
import ModalLayanan from "@/components/modal/ModalLayanan";

export async function getServerSideProps() {
  try {
    const eventResponse = await axios.get("event/all?limit=4");
    const beritaResponse = await axios.get("berita/all?limit=4");
    const mitraResponse = await axios.get("mitra");
    const testimoniResponse = await axios.get("testimonial");
    const layananResponse = await axios.get("layanan");

    const events = eventResponse.data.data;
    const berita = beritaResponse.data.data;
    const mitra = mitraResponse.data.data;
    const testimonials = testimoniResponse.data.data;
    const layanan = layananResponse.data.data;

    return {
      props: {
        events,
        berita,
        mitra,
        testimonials,
        layanan,
      },
    };
  } catch (err) {
    console.warn(err);
    return {
      props: {
        events: [],
        berita: [],
        mitra: [],
        testimonials: [],
        layanan: [],
      },
    };
  }
}

export default function Home({ berita, mitra, events, testimonials, layanan }) {
  const clusters = JSON.parse(dataCluster);
  // const services = JSON.parse(dataLayanan);
  const services = layanan;

  useEffect(() => {
    Aos.init({
      offset: 0,
      duration: 300,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <NextSeo
        title="Home - Solo Technopark"
        description="Kawasan Inovatif dan Berdaya Saing International. Pusat Inovasi dan Vokasi yang Memadukan Unsur Pengembangan Iptek, Kebutuhan Pasar, Industri dan Bisnis Untuk Penguatan Daya Saing Daerah."
        canonical="https://solotechnopark.id/"
        openGraph={{
          url: "https://solotechnopark.id/",
          title: "Home - solo technopark",
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

      {/* <Head>
        <title>Home - Solotechnopark</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head> */}

      <header className="bg-header-1">
        <Navbar />
        <div className="container lg:h-[100vh] grid lg:grid-cols-12 lg:pt-32 pb-20">
          <div className="flex flex-col items-start justify-center py-5 lg:py-5 lg:col-span-5  order-2 lg:order-1">
            <h1 className="head-1" data-aos="fade-right">
              Kawasan Inovatif dan Berdaya Saing Internasional
            </h1>
            <p className="paragraph" data-aos="fade-left">
              Pusat Inovasi dan Vokasi yang Memadukan Unsur Pengembangan Iptek,
              Kebutuhan Pasar, Industri dan Bisnis Untuk Penguatan Daya Saing
              Daerah.
            </p>
            <Link href={"/layanan/pendukung"} target="_blank">
              <Button className="bg-gradient-to-b from-primary-100 to-primary-200 hover:from-primary-200 hover:to-primary-100 text-white hover:opacity-50">
                Layanan Kami
              </Button>
            </Link>
          </div>
          <div className="md:flex items-center justify-end py-5 lg:py-0 lg:col-span-7  order-1 lg:order-2 mt-20 lg:mt-0">
            <ThumbProfile />
          </div>
        </div>
      </header>

      <main>
        <section className="bg-gray-100 bg-header-2 lg:pb-24">
          <div className="container text-center py-20 lg:py-20">
            <h2 className="head-2 text-center mx-auto ">3 Cluster 9 Sektor</h2>
            <div className="lg:grid lg:grid-cols-3 gap-10 mb-20 lg:mb-56 mt-36">
              {clusters &&
                clusters.map((data, i) => {
                  return (
                    <Card
                      key={i}
                      index={i}
                      className="p-5 rounded-3xl  bg-white"
                    >
                      <CardSektor
                        src={data.foto.src}
                        title={data.nama_cluster}
                        desc={JSON.parse(data.divisi)}
                      />
                    </Card>
                  );
                })}
            </div>
          </div>
        </section>

        <section className="">
          <div className="container text-center py-20 lg:py-0">
            <aside className="flex justify-center">
              <div className="w-4/5 bg-primary-100 rounded-3xl -translate-y-32 lg:-translate-y-1/2 absolute">
                <div className="px-2 lg:px-20 flex flex-col justify-end items-start">
                  <Image
                    className="w-5/6 pt-10"
                    src={KawasanSTP}
                    alt="kawasan STP"
                  />

                  <span className="lg:absolute right-36 z-0 mb-10">
                    <h2
                      className="head-3 font-normal text-white italic text-center lg:max-w-sm transform lg:-translate-y-10"
                      // data-aos="zoom-in"
                    >
                      Where <strong>Competence Innovation, Technology,</strong>{" "}
                      and <strong>Bussines Grow</strong>
                    </h2>
                  </span>
                </div>
              </div>
            </aside>

            {/* mitra */}
            <aside className="pt-56">
              <div className="pt-5 lg:pt-40 pb-20">
                <h2 className="head-2 text-center mx-auto max-w-xl mb-20">
                  Mitra Kami Dalam Berkolaborasi & Bertumbuh Bersama
                </h2>

                <Mitra data={mitra} />
              </div>
            </aside>
          </div>
        </section>

        <section className="lg:mt-32">
          <div className="bg-body-primary-100 bg-no-repeat bg-cover pb-32">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-24">
                <Image
                  className="lg:-translate-y-20 lg:order-1 order-2"
                  src={ImagePeopleManufactur}
                  width={650}
                  height={456}
                  alt="manufactur people"
                />
                <h2 className="head-1 text-white order-1 lg:order-2 mt-20 md:mt-0">
                  Layanan Dasar <br /> Solo Technopark
                </h2>
              </div>
            </div>
          </div>

          <div className="bg-gray-100">
            <div className="container">
              <div className="bg-white rounded-3xl p-5 -translate-y-40 lg:-translate-y-1/2">
                <div
                  className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 px-4`}
                >
                  {services &&
                    services.map((data, i) => {
                      return (
                        <CardLayanan
                          key={i}
                          id={data.uuid}
                          src={data.image}
                          title={data.nama}
                          desc={data.deskripsi}
                          index={i}
                        />
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-header-gerigi-1 rounded-t-[3rem] -translate-y-8 py-20 pb-32">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <h2 className="head-2 text-white my-5">Fungsi dan Peran</h2>
                <p className="text-white">
                  Fungsi Sinergi fungsi dan peran <br />
                  <strong>
                    ABG + C (Akademisi + Bisnis + Goverment, dan Community)
                  </strong>{" "}
                  <br />
                  dalam rangka peningkatan daya saing daerah dan pertumbuhan
                  ekonomi
                </p>
              </div>
              <div className="">
                <Image
                  className="rounded-3xl"
                  src={FungsiDanPeran}
                  width={678}
                  height={450}
                  alt="fungsi dan peran"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100">
          <div className="h-96 lg:h-[672px] bg-purple-200 rounded-t-[3rem] -translate-y-20 overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={ImageBannerPeopleManufactur}
              width={1440}
              height={670}
              alt="manufaktur solotechnopark"
            />
          </div>
          <div className="absolute -translate-y-48">
            <div className="grid grid-cols-2 lg:grid-cols-12 items-end">
              <div className="bg-secondary-gradient-200 inline-block lg:col-span-7 p-5">
                <div className="container">
                  <h2 className="head-3 text-white italic">
                    &quot;Where Competence, Innovation, Technology, and Business
                    Grow&quot;
                  </h2>
                </div>
              </div>
              <div className="bg-primary-gradient-x-100 lg:col-span-3 p-10 rounded-t-3xl rounded-br-3xl">
                <h2 className="head-3 text-white mb-5">
                  Daftar Diklat yang Kami Sediakan!
                </h2>
                <Link href={"/event"}>
                  <Button className="bg-secondary-gradient-200 text-white hover:opacity-50">
                    Daftar
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* testimoni */}
        <section className="bg-gray-100 pt-10">
          <div className="container py-20">
            <div>
              <Testimonial data={testimonials} />
            </div>
          </div>
        </section>

        {/* event and news */}
        <section>
          <div className="container pt-20 pb-10">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="capitalize head-4 ">wawasan</h3>
                <h2 className="capitalize head-3">event terbaru</h2>
              </div>
              <Link href={"/event"}>
                <Button className="bg-primary-gradient-100 text-white hover:opacity-50 hover:bg-primary-gradient-200">
                  Event Lainnya
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:place-items-center lg:items-stretch">
              {events.length > 0 ? (
                events.map((data, i) => (
                  <Event
                    key={i}
                    slug={data.slug}
                    type={"event"}
                    title={data.title}
                    date={data.startDate}
                    image={data.foto}
                  />
                ))
              ) : (
                <>
                  <CardSkeleton />
                  <CardSkeleton />
                  <CardSkeleton />
                  <CardSkeleton />
                </>
              )}
            </div>
          </div>
          <div className="container pt-10 pb-20">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="capitalize head-4 ">wawasan</h3>
                <h2 className="capitalize head-3">berita terbaru</h2>
              </div>
              <Link href={"/berita"}>
                <Button className="bg-primary-gradient-100 text-white hover:opacity-50 hover:bg-primary-gradient-200">
                  Berita Lainnya
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5 lg:place-items-center lg:items-stretch">
              {berita.length > 0 ? (
                berita.map((data, i) => (
                  <Event
                    key={i}
                    type={"berita"}
                    slug={data.slug}
                    title={data.title}
                    date={data.createdAt}
                    image={data.image}
                  />
                ))
              ) : (
                <>
                  <CardSkeleton />
                  <CardSkeleton />
                  <CardSkeleton />
                  <CardSkeleton />
                </>
              )}
            </div>
          </div>
        </section>
        <ModalLayanan data={layanan} />
      </main>
      <Footer />
    </>
  );
}
