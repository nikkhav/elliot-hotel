import vacation from "../public/main-vacation.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <title>Welcome to Elliot Hotel</title>
      <div className={"relative text-center p-10"}>
        <div className={"bg-black"}>
          <Image
            priority={true}
            className={"opacity-50 transition-opacity duration-300"}
            src={vacation}
            alt={"Vacation"}
          />
          <h4
            className={
              "text-2xl text-white font-playfair tracking-wide absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
            }
          >
            Meet the Luxury
          </h4>
          <h3
            className={
              "text-6xl font-playfair text-white absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
            }
          >
            {" "}
            Добро пожаловать в <br /> Elliot Hotel!
          </h3>
        </div>
      </div>
    </main>
  );
}
