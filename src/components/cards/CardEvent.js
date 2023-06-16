import Image from "next/image";
import React from "react";
import Button from "../Button";
import Card from "./Card";
import dateIcon from "../../images/date.svg";
import locationIcon from "../../images/location.svg";
import timeIcon from "../../images/time.svg";
import Link from "next/link";
import SkeletonInnerImage from "../skeleton/SkeletonInnerImage";

function CardEvent({ slug, title, category, date, image, location, time }) {
  return (
    <Card
      className={
        "border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-5 shadow-lg my-2 hover:shadow-sm transition-all overflow-hidden mx-5"
      }
    >
      <div className="col-span-7 lg:col-span-3 overflow-hidden h-72">
        {image ? (
          <Image
            className="object-cover object-top w-[100%] h-[100%]"
            src={image}
            alt="My Image"
            width={265}
            height={325}
          />
        ) : (
          <SkeletonInnerImage />
        )}
      </div>
      <div className="col-span-7 lg:col-span-4 p-5">
        <h4 className="font-medium capitalize text-primary-100 mb-2 text-sm">
          {category}
        </h4>
        <h2 className="head-4 text-gray-800">{title}</h2>

        {time && (
          <span className="flex items-center h-5 gap-2 mt-4">
            <Image width={20} className="mb-1" src={timeIcon} alt={"date"} />
            <p className="text-gray-600 my-4 text-sm p-0">{time}</p>
          </span>
        )}

        {date && (
          <span className="flex items-center gap-2 h-5 mt-4">
            <Image width={20} className="mb-1" src={dateIcon} alt={"date"} />
            <p className="text-gray-600 my-4 text-sm">{date}</p>
          </span>
        )}

        {location && (
          <span className="flex items-center gap-2 h-5 mt-4">
            <Image className="mb-0" src={locationIcon} alt={"date"} />
            <p className="text-gray-600 my-4 text-sm">{location}</p>
          </span>
        )}

        <Link href={`/event/${slug}`} target="_blank">
          <Button
            className={
              "border py-3 lg:py-2 w-full lg:w-auto hover:bg-primary-100 hover:text-white mt-5"
            }
          >
            Info Detail
          </Button>
        </Link>
      </div>
    </Card>
  );
}

export default CardEvent;
