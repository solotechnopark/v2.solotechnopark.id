import ImageTeknis from "../images/layanan teknis.png";
import ImageIptek from "../images/layanan pengembangan iptek.png";
import ImageInkubasi from "../images/layanan inkubasi.png";
import ImagePendukung from "../images/layanan pendukung.png";
import ImageOilAndGas from "../images/layanan oil and gas.png";

const dataLayanan = [
  {
    id: 2345784320,
    foto: ImageTeknis,
    layanan: "Layanan Teknis",
    deskripsi:
      " Pra Inkubasi Bisnis dan Teknologi, Inkubasi Bisnis dan Teknologi, Hilirisasi RIset Perguruan Tinggi, Co-Working Space. ",
  },
  {
    id: 2345784321,
    foto: ImageIptek,
    layanan: "Layanan Pengembangan Teknologi",
    deskripsi:
      "Diklat Mekanik Manufaktur, Diklat Desain Manufaktur, Diklat General Welding, Diklat Underwater Wet Welding, Diklat Otomasi, Diklat Mekanik Garmen, Diklat Basic Aircraft Structure. ",
  },
  {
    id: 2345784322,
    foto: ImageInkubasi,
    layanan: "Layanan Inkubasi Bisnis",
    deskripsi:
      " Diklat Mekanik Manufaktur, Diklat Desain Manufaktur, Diklat General Welding, Diklat Underwater Wet Welding, Diklat Otomasi, Diklat Mekanik Garmen, Diklat Basic Aircraft Structure. ",
  },
  {
    id: 2345784323,
    foto: ImagePendukung,
    layanan: "Layanan Pendukung",
    deskripsi:
      " Layanan Konsultasi Mitra Industri, Layanan Produksi, Spare Part Industri, Precision Part, Mold Maker, Fabrikasi, Prototype untuk UMKM/IKM. ",
  },
  {
    id: 2345784324,
    foto: ImageOilAndGas,
    layanan: "Layanan Oil and Gas",
    deskripsi:
      " Diklat Mekanik Manufaktur, Diklat Desain Manufaktur, Diklat General Welding, Diklat Underwater Wet Welding, Diklat Otomasi, Diklat Mekanik Garmen, Diklat Basic Aircraft Structure. ",
  },
];

const dataServicesJSON = JSON.stringify(dataLayanan);

export default dataServicesJSON;
