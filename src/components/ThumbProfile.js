import Image from "next/image";
import React, { useState } from "react";
import thumb from "@/images/profil-solotechnopark.png";
import Loading from "./Loading";
import YouTube from "react-youtube";

function ThumbProfile() {
  const [isOpenVideo, setIsOpenVideo] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const videoOptions = {
    playerVars: {
      autoplay: 1,
      controls: 1,
      rel: 0,
      showinfo: 0,
      mute: 0,
      loop: 1,
    },
    width: "960",
    height: "630",
  };

  return (
    <>
      <div
        className={`rounded-md overflow-hidden cursor-pointer transition-all w-full ${
          isOpenVideo ? "scale-95" : ""
        }`}
        onClick={() => setIsOpenVideo(!isOpenVideo)}
      >
        <Image className="w-full h-full" src={thumb} alt="thumbnail" />
      </div>

      {isOpenVideo ? (
        <div
          className="bg-dark-transparent-100 fixed z-20 left-0 top-0 right-0 bottom-0 flex justify-center items-center animate-fadeIn"
          onClick={() => setIsOpenVideo(false)}
        >
          <YouTube
            // videoId="nNVarAp0Ebo"
            videoId="Psa9J6wWn3Y"
            opts={videoOptions}
            onReady={() => setIsLoading(false)}
          />
          {isLoading ? <Loading /> : ""}
        </div>
      ) : null}

      {/* <Loading /> */}
    </>
  );
}

export default ThumbProfile;
