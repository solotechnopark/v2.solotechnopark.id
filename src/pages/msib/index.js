import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextSeo } from "next-seo";
import dataProfilJSON from "@/data/dataProfil";
import Image from "next/image";
import ImageBanna from "@/images/banna.jpg";
import ImageInam from "@/images/inam.png";
import ProfilInstruktur from "@/components/swiper/ProfilInstruktur";

const dataDeskripsiProfil = {
  title: "MSIB #4 Solo",
  paragraph: [
    "The IT Strategic Team at Solo Technopark is a dedicated group of IT professionals who play a crucial role in shaping the technological landscape of the organization. Comprising experts in various domains of information technology, the team works tirelessly to drive innovation, enhance digital capabilities, and ensure the smooth functioning of IT systems and infrastructure within the technopark.",
  ],
};

const teamMembers = [
    {
        name: "Inam Fallahudin",
        photo: ImageInam,
    },
  {
    name: "Hasan Al Banna",
    photo: ImageBanna,
  },
  // Add more team members here...
];

export default function Profile() {
  const dataProfil = JSON.parse(dataProfilJSON);

  console.log(teamMembers);

  return (
    <>
      <NextSeo
        title="MSIB #4 - Solo Technopark"
        description="IT Strategic Team Solo Technopark"
        canonical="https://solotechnopark.id/"
        openGraph={{
          url: "https://solotechnopark.id/",
          title: "MSIB #4 - solo technopark",
          description: "Kawasan Inovatif dan Berdaya Saing International.",
          images: [
            {
              url: "https://solotechnopark.id/wp-content/uploads/2022/11/Template-Website-3-1536x827.jpg",
              width: 800,
              height: 600,
              alt: "Profile Solo Technopark",
            },
          ],
          site_name: "profil - solotechnopark",
        }}
      />

      <Head>
        <title>MSIB #4 Solo Technopark</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://solotechnopark.id/wp-content/uploads/2021/09/Solo-Tecno.png"
        />
      </Head>
      <Navbar />
      <header className="mt-20 pt-16 bg-flower-1">
        <div className="container lg:h-[85vh] pb-20 grid lg:grid-cols-12 gap-5 lg:gap-10 items-center">
          <div className="mx-auto flex flex-col justify-center items-start lg:col-span-5 text-white">
            <h1 className="capitalize head-1 my-5 leading-[3.5rem]">
              MSIB #4 <br /> IT Strategic Team Solo Technopark
            </h1>
            <ul>
              {dataDeskripsiProfil &&
                dataDeskripsiProfil.paragraph.map((data, i) => (
                  <li key={i} className="paragraph text-white">
                    {data}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </header>

      <section className={styles.teamSection}>
        <div className="container">
          <h2 className={styles.teamSectionTitle}>IT Strategic Team Members</h2>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.teamMember}>
                <Image
                  src={member.photo}
                  alt={member.name}
                  className={styles.teamMemberPhoto}
                  width={200}
                  height={200}
                />
                <h3 className={styles.teamMemberName}>{member.name}</h3>
              </div>
              
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}