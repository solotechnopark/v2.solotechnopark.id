import ImageManufaktur from "../images/cluster-manufaktur.svg";
import ImageTechno from "../images/cluster--technopreneurship.svg";
import ImageKreatif from "../images/cluster-industri-kreatif.svg";

const dataCluster = [
  {
    id_cluster: 416252,
    foto: ImageManufaktur,
    nama_cluster: "Cluster Manufaktur",
    divisi:
      '["Sektor Mekanik dan Desain Manufaktur" ,"Sektor Pengelasan (General dan Underwater)","Sektor Otomasi"]',
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

const dataClusterJSON = JSON.stringify(dataCluster);

export default dataClusterJSON;
