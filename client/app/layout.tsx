import "./globals.css";
import logo from "../public/logo.png";
import logoFooter from "../public/logo-white.png";
import googleplay from "../public/google-play.svg";
import appstore from "../public/appstore.svg";
import instagram from "../public/instagram.svg";
import facebook from "../public/facebook.svg";
import telegram from "../public/telegram.svg";
import whatsapp from "../public/whatsapp.svg";
import Image from "next/image";

export const metadata = {
  title: "Elliot Hotel",
  description: "Elliot Hotel pet project using Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={""}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&family=Playfair+Display:wght@600&family=Raleway:wght@300&display=swap"
          rel="stylesheet"
        />

        <title>{metadata.title}</title>
      </head>
      <body>
        <header
          className={"flex flex-row justify-around items-center w-full mt-3"}
        >
          <a
            className={
              "text-lg font-raleway border-b-2 border-b-white transition-colors ease-in-out delay-150 hover:border-b-black"
            }
            href={"/rooms"}
          >
            Номера
          </a>
          <a
            className={
              "text-lg font-raleway border-b-2 border-b-white transition-colors ease-in-out delay-150 hover:border-b-black"
            }
            href={"/"}
          >
            Бронирование
          </a>
          <a href={"/"}>
            <Image height={90} width={90} src={logo} alt={"logo"} />
          </a>
          <a
            className={
              "text-lg font-raleway border-b-2 border-b-white transition-colors ease-in-out delay-150 hover:border-b-black"
            }
            href={"/"}
          >
            Контакты
          </a>
          <a
            className={
              "text-lg font-raleway border-b-2 border-b-white transition-colors ease-in-out delay-150 hover:border-b-black"
            }
            href={"/"}
          >
            Отзывы
          </a>
        </header>
        {children}
        <footer
          className={
            "flex flex-col justify-center items-center w-full mt-20 p-10 bg-[#2c2c24]"
          }
        >
          <div
            className={
              "flex flex-row justify-center items-center w-10/12 border-b-2"
            }
          >
            <Image src={logoFooter} alt={"logo"} height={230} width={230} />
          </div>
          <div
            className={
              "flex flex-row justify-between items-center mt-10 w-10/12"
            }
          >
            <a
              className={
                "flex flex-col items-center justify-center text-lg text-white font-montserrat transition-transform ease-in-out hover:scale-110"
              }
              href={"https://www.instagram.com"}
            >
              <Image src={instagram} alt={"instagram"} />
              <p className={"mt-2"}>Instagram</p>
            </a>
            <a
              className={
                "flex flex-col items-center justify-center text-lg text-white font-montserrat transition-transform ease-in-out hover:scale-110"
              }
              href={"https://www.facebook.com/"}
            >
              <Image src={facebook} alt={"facebook"} />
              <p className={"mt-2"}>Facebook</p>
            </a>
            <a
              className={
                "flex flex-col items-center justify-center text-lg text-white font-montserrat transition-transform ease-in-out hover:scale-110"
              }
              href={"https://web.telegram.org/k/"}
            >
              <Image src={telegram} alt={"Telegram"} />
              <p className={"mt-2"}>Telegram</p>
            </a>
            <a
              className={
                "flex flex-col items-center justify-center text-lg text-white font-montserrat transition-transform ease-in-out hover:scale-110"
              }
              href={"https://www.whatsapp.com/?lang=ru"}
            >
              <Image src={whatsapp} alt={"WhatsApp"} />
              <p className={"mt-2"}>WhatsApp</p>
            </a>
          </div>
          <div className={"flex flex-row justify-center mt-16 w-1/2"}>
            <a href={"https://play.google.com/store/games?hl=ru"}>
              <Image
                src={googleplay}
                alt={"Google play"}
                height={50}
                width={138}
                className={"mx-4"}
              />
            </a>
            <a href={"https://www.apple.com/de/app-store/"}>
              <Image
                src={appstore}
                alt={"App store"}
                height={50}
                width={150}
                className={"mx-4"}
              />
            </a>
          </div>
          <div className={"flex flex-col justify-center items-center mt-10"}>
            <p className={"text-sm font-montserrat"}>Made by Khavkin Nikita</p>
            <p className={"text-sm font-montserrat"}> 2023</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
