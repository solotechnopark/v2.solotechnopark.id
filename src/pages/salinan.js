// import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import ThumbProfile from "@/components/ThumbProfile";
import Card from "@/components/cards/Card";
import CardSektor from "@/components/cards/CardSektor";
import KawasanSTP from "@/images/Kawsan-STP-6.png";
import FungsiDanPeran from "@/images/Fungsi-dan-Peran.png";
import Image from "next/image";
import Mitra from "@/components/Mitra";
import CardLayanan from "@/components/cards/CardLayanan";
import Testimonial from "@/components/Testimonial";
import Event from "@/components/Event";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import ImageManufaktur from "@/images/manufaktur.svg";
import ImageTechno from "@/images/technoprenership.svg";
import ImageKreatif from "@/images/kreatif.svg";
import axios from "./api/axios";
import Link from "next/link";
import CardSkeleton from "@/components/cards/CardSkeleton";
import { NextSeo } from "next-seo";
import Aos from "aos";

const dataLayanan = [
  {
    foto: "https://solotechnopark.id/wp-content/uploads/2022/12/Layanan-Inkubasi.png",
    layanan: "Layanan Inkubasi",
    deskripsi:
      " Pra Inkubasi Bisnis dan Teknologi, Inkubasi Bisnis dan Teknologi, Hilirisasi RIset Perguruan Tinggi, Co-Working Space. ",
  },
  {
    foto: "https://solotechnopark.id/wp-content/uploads/2022/12/Layanan-Teknis.png",
    layanan: "Layanan Teknis",
    deskripsi:
      "Diklat Mekanik Manufaktur, Diklat Desain Manufaktur, Diklat General Welding, Diklat Underwater Wet Welding, Diklat Otomasi, Diklat Mekanik Garmen, Diklat Basic Aircraft Structure. ",
  },
  {
    foto: "https://solotechnopark.id/wp-content/uploads/2022/12/Pendukunga.png",
    layanan: "Layanan Pendukung",
    deskripsi:
      " Diklat Mekanik Manufaktur, Diklat Desain Manufaktur, Diklat General Welding, Diklat Underwater Wet Welding, Diklat Otomasi, Diklat Mekanik Garmen, Diklat Basic Aircraft Structure. ",
  },
  {
    foto: "https://solotechnopark.id/wp-content/uploads/2022/12/Pengembangan-Teknoologi.png",
    layanan: "Pengembangan Teknologi",
    deskripsi:
      " Layanan Konsultasi Mitra Industri, Layanan Produksi, Spare Part Industri, Precision Part, Mold Maker, Fabrikasi, Prototype untuk UMKM/IKM. ",
  },
  {
    foto: "https://solotechnopark.id/wp-content/uploads/2023/03/IMG_20220906_090249-e1679376455474-945x1024.jpg",
    layanan: "Layanan Oil and Gas",
    deskripsi:
      " Diklat Mekanik Manufaktur, Diklat Desain Manufaktur, Diklat General Welding, Diklat Underwater Wet Welding, Diklat Otomasi, Diklat Mekanik Garmen, Diklat Basic Aircraft Structure. ",
  },
];

const dataCluster = [
  {
    id_cluster: 416252,
    foto: ImageManufaktur,
    nama_cluster: "Cluster Manufaktur",
    divisi:
      '["Sektor Mekanik dan Desain Manufaktur","Sektor Pengelasan (Genaral dan Underwater)","Sektor Otomasi"]',
  },
  {
    id_cluster: 553975,
    foto: ImageTechno,
    nama_cluster: "Cluster Technopreneurship",
    divisi:
      '["Sektor Teknologi Informasi (ICT)","Sektor Kewirausahaan (UMKM dan StartUp)","Sektor Gaming dan e-Sport"]',
  },
  {
    id_cluster: 645611,
    foto: ImageKreatif,
    nama_cluster: "Cluster Industri Kreatif",
    divisi:
      '["Sektor Seni Pertunjukan–Penyiaran","Sektor Batik – Handicraft","Sektor Kuliner"]',
  },
];

export async function getServerSideProps() {
  try {
    const eventResponse = await axios.get("event/all?limit=3");
    const beritaResponse = await axios.get("berita/all?limit=3");
    const mitraResponse = await axios.get("mitra/");

    const catalog = eventResponse.data.data;
    const berita = beritaResponse.data.data;
    const mitra = mitraResponse.data.data;

    return {
      props: {
        catalog,
        berita,
        mitra,
      },
    };
  } catch (err) {
    console.warn(err);
    return {
      props: {
        catalog: [],
        berita: [],
        mitra: [],
      },
    };
  }
}

export default function Home({ catalog, berita, mitra }) {
  useEffect(() => {
    Aos.init({
      // konfigurasi AOS
      offset: 20,
      duration: 600,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <NextSeo
        title="Solo Technopark"
        description="Kawasan Inovatif dan Berdaya Saing International. Pusat Inovasi dan Vokasi yang Memadukan Unsur Pengembangan Iptek, Kebutuhan Pasar, Industri dan Bisnis Untuk Penguatan Daya Saing Daerah."
        canonical="https://solotechnopark.id/"
        openGraph={{
          url: "https://solotechnopark.id/",
          title: "home | solo technopark",
          description: "Kawasan Inovatif dan Berdaya Saing International.",
          images: [
            {
              url: "https://solotechnopark.id/wp-content/uploads/2022/11/Template-Website-3-1536x827.jpg",
              width: 800,
              height: 600,
              alt: "Profile Solo Technopark",
            },
          ],
          site_name: "solotechnopark",
        }}
      />

      <Head>
        <title>Home | Solotechnopark</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://solotechnopark.id/wp-content/uploads/2021/09/Solo-Tecno.png"
        />
      </Head>

      <main>
        <header className="bg-header-1 bg-set">
          <Navbar />
          <div className="container lg:h-[88vh] pb-20 grid lg:grid-cols-2 md:gap-20">
            <div className="flex flex-col items-start justify-center py-5 lg:py-5">
              <h1 className="head-1" data-aos="fade-right">
                Kawasan <strong className="text-primary-100">Inovatif</strong>{" "}
                dan Berdaya Saing International
              </h1>
              <p className="paragraph" data-aos="fade-left">
                Pusat Inovasi dan Vokasi yang Memadukan Unsur Pengembangan
                Iptek, Kebutuhan Pasar, Industri dan Bisnis Untuk Penguatan Daya
                Saing Daerah.
              </p>
              <Button className="bg-primary-100 text-white hover:opacity-50">
                Layanan Kami
              </Button>
            </div>
            <div className="md:flex items-center justify-end py-5 lg:py-0">
              <ThumbProfile />
            </div>
          </div>
        </header>

        <section className="bg-primary-100 bg-header-2 bg-no-repeat bg-cover bg-center">
          <div className="container text-center py-20 lg:py-20">
            <h2 className="head-3 uppercase text-center mx-auto">
              3 Cluster 9 Sektor
            </h2>

            <div className="lg:grid lg:grid-cols-3 gap-10 my-20">
              {dataCluster &&
                dataCluster.map((data, i) => {
                  return (
                    <Card key={data.id_cluster} index={i} className="p-5">
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

        <section className=" bg-no-repeat bg-cover bg-center bg-body-1">
          <div className="container py-20 flex flex-col justify-end items-center">
            <Image className="pt-10" src={KawasanSTP} alt="kawasan STP" />

            <span className="lg:absolute right-96 z-0">
              <h2
                className="head-3 font-normal text-primary-100 italic text-center lg:max-w-sm"
                data-aos="zoom-in"
              >
                Where <strong>Competence Innovation, Technology,</strong> and{" "}
                <strong>Bussines Grow</strong>
              </h2>
            </span>
          </div>
        </section>

        <section className="bg-no-repeat">
          <div className="container py-20">
            <h2 className="capitalize head-3 mx-auto text-center">
              Mitra kami dalam berkolaborasi dan bertumbuh bersama
            </h2>
            <div className="flex flex-wrap justify-center text-center py-5 lg:py-10 lg:px-10 mt-20 gap-5  rounded-md">
              {mitra &&
                mitra.map((data, i) => (
                  <Mitra key={i} title={data.title} image={data.image} />
                ))}
            </div>
          </div>
        </section>

        <section className="bg-body-4 bg-no-repeat bg-top bg-cover">
          <div className="container py-20">
            <h2 className="capitalize head-3 mx-auto text-center text-white">
              Layanan dasar solo technopark
            </h2>
            <div
              className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 py-10 gap-5 lg:px-20`}
            >
              {dataLayanan &&
                dataLayanan.map((data, i) => {
                  return (
                    <CardLayanan
                      key={i}
                      src={data.foto}
                      title={data.layanan}
                      desc={data.deskripsi}
                      index={i}
                    />
                  );
                })}
            </div>
          </div>
        </section>

        <section className="bg-body-5 bg-no-repeat bg-cover">
          <div className="container py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <Image className="w-full" src={FungsiDanPeran} alt="flow" />
              <div className="mx-auto flex flex-col justify-center items-start">
                <h4 className="uppercase text-lg font-medium text-gray-600">
                  fungsi dan peran
                </h4>
                <h2 className="capitalize head-2 my-5">
                  <strong className="text-primary-100">Sinergi </strong> Antara
                  Akademisi, Bisnis, Goverment, Community, dan Media
                </h2>
                <p className="paragraph">
                  Menjadi kawasan terpadu dunia industri, perguruan tinggi,
                  riset dan teknologi serta kewirausahaan berbasis teknologi dan
                  inovasi bagi industri kecil menengah dalam rangka peningkatan
                  daya saing dan pertumbuhan ekonomi daerah. Peran media
                  mensupport semua aktivitas di Solo Technopark tersebut.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary-100 bg-body-6 bg-no-repeat bg-cover py-40">
          <div className="container md:py-20">
            <div className="max-w-4xl mx-auto py-10 px-5 md:p-20 text-center bg-dark-transparent-100 backdrop-blur-sm rounded-xl text-white">
              <h2 className="head-2 text-center mx-auto lg:max-w-2xl">
                Where Competence, Innovation, Technology and Business Grow
              </h2>
              <p className="text-xl py-5">
                Daftar ke diklat yang kami sediakan.
              </p>
              <Link
                href={
                  "https://docs.google.com/forms/d/e/1FAIpQLSe5n7zk-RG2-tESLGzcDKKwLimXKU5HAkLkphECLkqXhD4adw/viewform"
                }
              >
                <Button
                  className={"bg-primary-100 text-white hover:opacity-50"}
                >
                  Daftar
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-body-7 bg-no-repeat bg-right-bottom">
          <div className="container py-20">
            <h2 className="capitalize head-3 mx-auto text-center">
              Kesan Untuk Solo Technopark
            </h2>
            <div className="max-w-4xl mx-auto mt-20 -z-10">
              <Testimonial />
            </div>
          </div>
        </section>

        <section className="bg-body-8 bg-no-repeat bg-center bg-cover">
          <div className="container pt-20 pb-10">
            <div className="flex items-center justify-between lg:mx-24">
              <div>
                <h3 className="capitalize head-4 text-primary-100">wawasan</h3>
                <h2 className="capitalize head-3">event terbaru</h2>
              </div>
              <Link href={"/event"}>
                <Button className="bg-primary-100 text-white hover:opacity-50">
                  Event Lainnya
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:place-items-center lg:items-stretch lg:mx-20 gap-10">
              {catalog.event ? (
                catalog.event.map((data, i) => (
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
                </>
              )}
            </div>
          </div>
          <div className="container pt-10 pb-20">
            <div className="flex items-center justify-between lg:mx-24">
              <div>
                <h3 className="capitalize head-4 text-primary-100">wawasan</h3>
                <h2 className="capitalize head-3">berita terbaru</h2>
              </div>
              <Link href={"/berita"}>
                <Button className="bg-primary-100 text-white hover:opacity-50">
                  Berita Lainnya
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:place-items-center lg:items-stretch lg:mx-20 gap-10">
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
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
