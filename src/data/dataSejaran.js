import ImageTeknis from "../images/layanan teknis.png";
import Icon1 from "../images/icon/sejarah/struktur kompetensi.png";
import Icon2 from "../images/icon/sejarah/sejarah solo technopark.png";
import Icon3 from "../images/icon/sejarah/badan layanan umum.png";
import Icon4 from "../images/icon/sejarah/perwali surakarta.png";
import Icon5 from "../images/icon/sejarah/kawasan st.png";
import Icon6 from "../images/icon/sejarah/target stp.png";

const dataSejarah = [
  {
    id: 2345784320,
    icon: Icon1,
    tahun: 2002,
    title: "Surakarta Competency and Technology Center (SCTC)",
    desc: "Menjadi pusat pengembangan sumber daya manusia berstandar internasional dan mampu menjadi motor penggerak ekonomi kegiatan-kegiatan inovatif.",
  },
  {
    id: 2345784321,
    icon: Icon2,
    tahun: 2009,
    title: "Solo Technopark (STP)",
    desc: "Launching STP yang diresmikan menjadi Unit Pelaksana Teknis oleh walikota saat itu Ir. Joko Widodo.",
  },
  {
    id: 2345784322,
    icon: Icon3,
    tahun: 2010,
    title: "Badan Layanan Umum Daerah (BLUD)",
    desc: "Reposisi kelembagaan STP sebagai UPT pada BAPPEDA dan menerapkan pola pengelolaan kuangan Badan Layanan Umum Daerah (BLUD).",
  },
  {
    id: 2345784323,
    icon: Icon4,
    tahun: 2014,
    title: "Perwali Surakarta tentang Pola Tata Kelola STP ",
    desc: "Penetapan peraturan walikota Surakarta tentang Pola Tata kelola BBLUD UPT Solo Technopark pada BAPPEDA.",
  },
  {
    id: 2345784324,
    icon: Icon5,
    tahun: 2019,
    title: "Kawasan Sains dan Teknologi (KST)",
    desc: "Solo Technopark sebagai KST yang mendapat Predikat Madya.",
  },
  {
    id: 2345784325,
    icon: Icon6,
    tahun: 2025,
    title: "Terget Solo Technopark (STP) ",
    desc: "Target menjadi KST kategori utama yang berdaya saing internasional",
  },
];

const dataSejarahJSON = JSON.stringify(dataSejarah);

export default dataSejarahJSON;
