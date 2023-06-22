import Image from "next/image";
import React from "react";
import LogoSTP from "@/images/Logo-Technopark-Remake-Solo-1.webp";
import Link from "next/link";
import KawasanSTP from "@/images/site-room.png";
import Barcode from "@/images/barcode-150x150.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const dataSocialMedia = [
  {
    title: "instagram",
    url: "https://www.facebook.com/solotechnopark",
    icon: faInstagram,
  },
  {
    title: "facebook",
    url: "https://www.facebook.com/solotechnopark.id",
    icon: faFacebook,
  },
  {
    title: "tiktok",
    url: "https://www.tiktok.com/@solotechnopark?lang=id-ID",
    icon: faTiktok,
  },
  {
    title: "linkedin",
    url: "https://www.linkedin.com/company/solo-technopark/",
    icon: faLinkedin,
  },
  {
    title: "youtube",
    url: "https://www.youtube.com/channel/UCqtTWpV2tExmQ1pQQLILd2Q",
    icon: faYoutube,
  },
  {
    title: "twitter",
    url: "https://www.youtube.com/channel/UCqtTWpV2tExmQ1pQQLILd2Q",
    icon: faYoutube,
  },
];

function Footer() {
  return (
    <footer className="bg-primary-gradient-100">
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 text-white">
          <div>
            <Image src={LogoSTP} alt="logo STP" />
            <p className="my-5">
              Menuju kawasan Solo Technopark yang inovatif dan berdaya saing
              internasional.
            </p>
            <div className="grid grid-cols-3 mt-20">
              <div>
                <ul className="list-inline">
                  <li className="list-inline-item">
<<<<<<< HEAD
                    <Link target="_blank" href="https://www.instagram.com/solotechnopark_official/">
=======
                    <Link
                      target="_blank"
                      href="https://www.facebook.com/solotechnopark"
                    >
>>>>>>> 4d5b950 (footer)
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="footer-icon smaller-icon"
                        style={{ width: "30px", height: "30px" }}
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item">
<<<<<<< HEAD
                    <Link target="_blank" href="https://twitter.com/solotechnopark_">
=======
                    <Link
                      target="_blank"
                      href="https://www.instagram.com/solotechnopark/"
                    >
>>>>>>> 4d5b950 (footer)
                      <FontAwesomeIcon
                        icon={faTwitter}
                        className="footer-icon smaller-icon"
                        style={{ width: "30px", height: "30px" }}
                      />
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <Link
                      target="_blank"
                      href="https://www.facebook.com/solotechnopark.id"
                    >
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className="footer-icon smaller-icon"
                        style={{ width: "30px", height: "30px" }}
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      target="_blank"
                      href="https://www.tiktok.com/@solotechnopark?lang=id-ID"
                    >
                      <FontAwesomeIcon
                        icon={faTiktok}
                        className="footer-icon smaller-icon"
                        style={{ width: "30px", height: "30px" }}
                      />
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/company/solo-technopark/"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="footer-icon smaller-icon"
                        style={{ width: "30px", height: "30px" }}
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      target="_blank"
                      href="https://www.youtube.com/channel/UCqtTWpV2tExmQ1pQQLILd2Q"
                    >
                      <FontAwesomeIcon
                        icon={faYoutube}
                        className="footer-icon smaller-icon"
                        style={{ width: "30px", height: "30px" }}
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="head-4">Kontak</h4>
            <div className="mb-5">
              <h5 className="font-bold">Alamat:</h5>
              <Link
                target="_blank"
                href="https://www.google.co.id/maps/place/Solo+Techno+Park/@-7.5555128,110.8536264,18z/data=!4m6!3m5!1s0x2e7a16e2b5ffa643:0xa0bf36ec85b94dfb!8m2!3d-7.5560692!4d110.8538665!16s%2Fg%2F1pp2tkfp9?hl=en"
              >
                Jl. Ki Hajar Dewantara No. 19 Jebres, Kec. Jebres, Kota
                Surakarta
              </Link>
            </div>
            <div className="mb-5">
              <h5 className="font-bold">Telepon:</h5>
              <Link target="_blank" href="">
                (+62)271666628
              </Link>
            </div>
            <div className="mb-5">
              <h5 className="font-bold">Email:</h5>
              <Link
                target="_blank"
                href="info@solotechnopark.id/?subject=Tanya%20Produk&body=Saya%20Tertarik%20dengan%20Layanan%20Anda"
              >
                info@solotechnopark.id
              </Link>
            </div>
            <div>
              <h5 className="font-bold">Marketing:</h5>
              <Link
                target="_blank"
                href="https://api.whatsapp.com/send/?phone=%2B6285743110623&text&type=phone_number&app_absent=0"
              >
                085743110623
              </Link>
            </div>
          </div>
          <div className="mt-5">
            <Image src={KawasanSTP} alt="kawasan STP" />
            <Link
              href="https://s.id/contactsolotechnopark?sid-qr=1"
              target="_blank"
            >
              <Image
                className="w-24 mr-0 ml-auto mt-5"
                src={Barcode}
                alt="kawasan STP"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white text-slate-600 text-center pt-5">
        <p>Copyright © 2023 Solo Technopark, All rights reserved.</p>
        <p className="text-sm mt-2">Designed and Developed by MSIB Batch 4.</p>
      </div>
    </footer>
  );
}

export default Footer;
