import Image from "next/image";
import React from "react";
import LogoSTP from "@/images/Logo-Technopark-Remake-Solo-1.webp";
import Link from "next/link";
import KawasanSTP from "@/images/site-room.png";
import Barcode from "@/images/barcode-150x150.png";

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
          </div>
          <div>
            <h4 className="head-4">Kontak</h4>
            <div className="mb-5">
              <h5 className="font-bold">Alamat : </h5>
              <Link
                target={"_blank"}
                href={
                  "https://www.google.co.id/maps/place/Solo+Techno+Park/@-7.5555128,110.8536264,18z/data=!4m6!3m5!1s0x2e7a16e2b5ffa643:0xa0bf36ec85b94dfb!8m2!3d-7.5560692!4d110.8538665!16s%2Fg%2F1pp2tkfp9?hl=en"
                }
              >
                Jl. Ki Hajar Dewantara No. 19 Jebres, Kec. Jebres, Kota
                Surakarta
              </Link>
            </div>
            <div className="mb-5">
              <h5 className="font-bold">Telepon : </h5>
              <Link target={"_blank"} href={""}>
                (+62)271666628
              </Link>
            </div>
            <div className="mb-5">
              <h5 className="font-bold">Email : </h5>
              <Link
                target={"_blank"}
                href={
                  "info@solotechnopark.id/?subject=Tanya%20Produk&body=Saya%20Tertarik%20dengan%20Layanan%20Anda"
                }
              >
                info@solotechnopark.id
              </Link>
            </div>
            <div>
              <h5 className="font-bold">Marketing : </h5>
              <Link
                target={"_blank"}
                href={
                  "https://api.whatsapp.com/send/?phone=%2B6285743110623&text&type=phone_number&app_absent=0"
                }
              >
                085743110623
              </Link>
            </div>
          </div>
          <div className="mt-5">
            <Image src={KawasanSTP} alt="kawasan STP" />
            <Link
              href={"https://s.id/contactsolotechnopark?sid-qr=1"}
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
        <p> Copyright © 2023 Solo Technopark, All rights reserved.</p>
        <p className="text-sm mt-2">
          Designed by MSIB Batch 2 | Developed by MISB Batch 3.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
