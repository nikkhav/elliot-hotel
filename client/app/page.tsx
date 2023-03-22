import vacation from "../public/main-vacation.jpg";
import Image from "next/image";
import InfoBlock from "@/components/InfoBlock";
import room from "../public/rooms-info.webp";
import food from "../public/food-info.webp";
import spa from "../public/spa-info.webp";
import pool from "../public/pool-info.webp";

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
              "text-7xl font-playfair text-white absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
            }
          >
            {" "}
            Добро пожаловать в <br /> Elliot Hotel!
          </h3>
        </div>
      </div>
      <div className={"flex flex-col items-center bg-[#2c2c24] my-5 p-8"}>
        <h2 className={"text-4xl mt-4 text-white font-montserrat"}>
          Незабываемый отдых в Elliot Hotel
        </h2>
        <p className={"text-xl mt-8 text-white text-center font-montserrat"}>
          Elliot Hotel один из лучших люкс отелей ультра все включено,
          находящийся на берегу Средиземного моря. Elliot Hotel расположен в
          самом сердце солнечного города Сиде Анталья, в чрезвычайно
          характерном, тихом и оживленном районе, в нескольких минутах ходьбы от
          всех достопримечательностей. Отель Elliot готов встретить вас и
          подарить вам незабываемые каникулы на протяжении всего года.
        </p>
      </div>
      <InfoBlock
        title={"Размещение"}
        subtitle={"Виды Наших Комфортных Номеров"}
        text={
          "В номерах и люксах Elliot Hotel царит ощущение домашнего уюта и комфорта. Элегантные и уютные, они ориентированы на обеспечение всех удобств, чтобы сделать ваше пребывание незабываемым. Elliot Hotel предлагает 4 вида комфортного размещения: номера Улучшенный Супериор, Делюкс, Люкс и Стандарт."
        }
        photoAlign={"left"}
        image={room}
        imageAlt={"Room"}
      />
      <InfoBlock
        title={"Вкусы"}
        subtitle={"Изысканные Кухни Мира"}
        text={
          "Насладитесь необыкновенным кулинарным опытом, подчеркнутым вкусами международной кухни, которые подают наши шеф-повара, чья страсть к еде проявляется в каждом поданом блюде."
        }
        photoAlign={"right"}
        image={food}
        imageAlt={"Food"}
      />
      <InfoBlock
        title={"Spa & Wellness"}
        subtitle={"Все Для Гармонии Души и Тела"}
        text={
          "Сауна, хаммам, различные виды массажа, аюрведические процедуры и косметические процедуры помогут вам в лучшем настроении в отеле Elliot Hotel."
        }
        photoAlign={"left"}
        image={spa}
        imageAlt={"Spa"}
      />
      <InfoBlock
        title={"Крытый бассейн"}
        subtitle={"ПОЧУВСТВУЙТЕ ЛЕТО ЗИМОЙ"}
        text={
          "Находящийся в Elliot Hotel, крытый бассейн придаст вашему зимнему отдыху иную атмосферу, полную умиротворения. Несмотря на невзгоды погоды, у нас есть прекрасная альтернатива - крытый бассейн с подогревом до 30-и градусов. "
        }
        photoAlign={"right"}
        image={pool}
        imageAlt={"Swimming pool"}
      />
    </main>
  );
}
