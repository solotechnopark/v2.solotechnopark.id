import ImageYudit from "../images/profil/Pak-Yudit.png";
import ImageRoni from "../images/profil/Pak-Rony.png";
import ImageUntung from "../images/profil/Pak-Untung-1-240x300.png";
import ImageWahyu from "../images/profil/Pak-Wahyu-8x10-1.png";
import ImageCristian from "../images/profil/Pak-Kris-1-1-240x300.png";
import ImageSusilo from "../images/profil/Pak-Susilo-8x10-1.png";

const dataProfil = [
  [
    {
      id_cluster: 416252,
      image: ImageYudit,
      nama: "Yudit Cahyantoro, NS, ST, MT",
      jabatan: "Pemimpin BLUD Kawasan Sains dan Teknologi Solo Technopark",
    },
    {
      id_cluster: 416252,
      image: ImageRoni,
      nama: "Rony Widjanarko, SH ",
      jabatan: "Kepala UPTD Kawasan Sains dan Teknologi",
    },
  ],
  [
    {
      id_cluster: 416252,
      image: ImageWahyu,
      nama: "Wahyu Hermawan, S.Si, MT",
      jabatan: "Kepala Sub Bagian Tata Usaha UPTD  Kawasan Sains dan Teknologi",
    },
    {
      id_cluster: 416252,
      image: ImageCristian,
      nama: "Christian Ardinto, ST",
      jabatan: "Pejabat Teknis Pelayanan & Pengembangan",
    },
    {
      id_cluster: 416252,
      image: ImageSusilo,
      nama: "Susilo Budi Arianto, ST",
      jabatan: "Manager Kerjasama dan Akselerasi Bisnis",
    },
    {
      id_cluster: 416252,
      image: ImageUntung,
      nama: "Untung Priyohananto, SE",
      jabatan: "Pejabat Teknis Umum",
    },
  ],
];

const dataProfilJSON = JSON.stringify(dataProfil);

export default dataProfilJSON;
