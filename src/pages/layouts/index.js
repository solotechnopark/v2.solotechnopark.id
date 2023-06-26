import { NextSeo } from "next-seo";
import React from "react";

function DefaultLayout({ title, children }) {
  return (
    <>
      <NextSeo
        title={`${title} - Solo Technopark`}
        description="Sebagai Unit Pelaksana Teknis Daerah (UPTD) pada BALITBANGDA Kota Surakarta, berdasarkan Peraturan Walikota No. 15 Tahun 2022. Menerapkan Pola Tata Kelola Badan Layanan Umum Daerah (BLUD) berdasarkan Perwali Surakarta No. 38 Tahun 2022."
        canonical="https://solotechnopark.id/"
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://solotechnopark.id/",
          title: `${title} - solo technopark`,
          description: "Kawasan Inovatif dan Berdaya Saing International.",
          images: [
            {
              url: "https://api.solotechnopark.id/v1/uploads/stp/mitra/logo-solo-technopark.png",
              width: 800,
              height: 600,
              alt: `${title} Solo Technopark`,
            },
          ],
          site_name: `${title} - solotechnopark`,
        }}
        additionalMetaTags={[
          {
            property: "og:inkubator_solotechnopark",
            content: "Solo Technopark",
          },
        ]}
        additionalJsonLd={[
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://solotechnopark.id/",
                url: "https://solotechnopark.id/",
                name: "Beranda - Solo Technopark",
                isPartOf: {
                  "@id": "https://solotechnopark.id/#website",
                },
                about: {
                  "@id": "https://solotechnopark.id/#organization",
                },
                primaryImageOfPage: {
                  "@id": "https://solotechnopark.id/#primaryimage",
                },
                image: {
                  "@id": "https://solotechnopark.id/#primaryimage",
                },
                thumbnailUrl:
                  "https://api.solotechnopark.id/v1/uploads/stp/mitra/logo-solo-technopark.png",
                datePublished: "2021-08-18T01:38:36+00:00",
                dateModified: "2023-03-28T05:10:25+00:00",
                description: description,
                breadcrumb: {
                  "@id": "https://solotechnopark.id/#breadcrumb",
                },
                inLanguage: "en-US",
                potentialAction: [
                  {
                    "@type": "ReadAction",
                    target: [
                      "https://solotechnopark.id/",
                      "https://incubator.solotechnopark.id",
                    ],
                  },
                ],
              },
              {
                "@type": "ImageObject",
                inLanguage: "en-US",
                "@id": "https://solotechnopark.id/#primaryimage",
                url: "https://api.solotechnopark.id/v1/uploads/stp/mitra/logo-solo-technopark.png",
                contentUrl:
                  "https://api.solotechnopark.id/v1/uploads/stp/mitra/logo-solo-technopark.png",
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://solotechnopark.id/#breadcrumb",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Beranda",
                  },
                ],
              },
              {
                "@type": "WebSite",
                "@id": "https://solotechnopark.id/#website",
                url: "https://solotechnopark.id/",
                name: "Solo Technopark",
                description: description,
                publisher: {
                  "@id": "https://solotechnopark.id/#organization",
                },
                potentialAction: [
                  {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate:
                        "https://solotechnopark.id/?s={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                ],
                inLanguage: "en-US",
              },
              {
                "@type": "Organization",
                "@id": "https://solotechnopark.id/#organization",
                name: "Solo Technopark",
                url: "https://solotechnopark.id/",
                logo: {
                  "@type": "ImageObject",
                  inLanguage: "en-US",
                  "@id": "https://solotechnopark.id/#/schema/logo/image/",
                  url: "https://api.solotechnopark.id/v1/uploads/stp/mitra/logo-solo-technopark.png",
                  contentUrl:
                    "https://api.solotechnopark.id/v1/uploads/stp/mitra/logo-solo-technopark.png",
                  width: 1734,
                  height: 460,
                  caption: "Solo Technopark",
                },
                image: {
                  "@id": "https://solotechnopark.id/#/schema/logo/image/",
                },
              },
            ],
          },
        ]}
      />

      {children}
    </>
  );
}

export default DefaultLayout;
