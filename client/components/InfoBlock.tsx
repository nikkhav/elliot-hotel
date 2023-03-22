import React, { Fragment } from "react";
import Image from "next/image";

import { InfoBlockProps } from "@/types/types";
import { NextPage } from "next";

const InfoBlock: NextPage<InfoBlockProps> = ({
  photoAlign,
  title,
  subtitle,
  text,
  image,
  imageAlt,
}) => {
  return (
    <div className={"flex flex-row justify-evenly w-full mt-5 p-5"}>
      {photoAlign === "left" ? (
        <Fragment>
          <div className={"w-1/2"}>
            <Image src={image} alt={imageAlt} />
          </div>
          <div
            className={
              "w-1/2 p-2 flex flex-col justify-center border-r-2 border-r-[#2c2c24]"
            }
          >
            <h3 className={"text-right text-4xl font-montserrat mt-4 mr-8"}>
              {title}
            </h3>
            <h4 className={"text-right text-xl font-montserrat mt-4 mr-8"}>
              {subtitle}
            </h4>
            <p className={"text-right text-lg font-montserrat mt-4 mr-8"}>
              {text}
            </p>
          </div>{" "}
        </Fragment>
      ) : (
        <Fragment>
          <div
            className={
              "w-1/2 p-2 flex flex-col justify-center border-l-2 border-l-[#2c2c24]"
            }
          >
            {" "}
            <h3 className={"text-left text-4xl font-montserrat mt-4 ml-8"}>
              {title}
            </h3>{" "}
            <h4 className={"text-left text-xl font-montserrat mt-4 ml-8"}>
              {subtitle}
            </h4>
            <p className={"text-left text-lg font-montserrat mt-4 ml-8"}>
              {text}
            </p>
          </div>{" "}
          <div className={"w-1/2"}>
            <Image src={image} alt={imageAlt} />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default InfoBlock;
