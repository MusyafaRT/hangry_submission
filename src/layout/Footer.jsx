import footerImg from "../public/banner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { bold } from "fontawesome";

export default function Footer() {
  return (
    <footer className="lg:flex lg:gap-8 pb-12 lg:pb-32 px-4 lg:px-12 xl:px-0">
      <div className="flex flex-col text-start basis-3/5 gap-3">
      <img
        src={footerImg}
        alt="Footer"
        width={328}
        height={172}
        className="lg:hidden flex-shrink-0 w-full"
      />
        <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold">
          Makin rame, makin hemat!
        </h1>
        <p className="text-sm lg:text-xl xl:text-2xl text-gray">
          Nikmati keuntungan dengan minimum pembelian 20 porsi menu apa aja.
          Cocok untuk hidangan segala acara!
        </p>
        <ul className="flex flex-col gap-5 lg:text-xl xl:text-2xl ">
          <li className="flex items-center space-x-3 rtl:space-x-reverse">
            <FontAwesomeIcon
              icon={faCheck}
              color="#A30926"
              size="md"
              fontWeight={bold}
            />
            <span>Beragam pilihan menu</span>
          </li>
          <li className="flex items-center space-x-3 rtl:space-x-reverse">
            <FontAwesomeIcon
              icon={faCheck}
              color="#A30926"
              size="md"
              fontWeight={bold}
            />
            <span>Semua menu diskon 20%</span>
          </li>
          <li className="flex items-start space-x-3 rtl:space-x-reverse">
            <FontAwesomeIcon
              icon={faCheck}
              color="#A30926"
              size="md"
              fontWeight={bold}
            />
            <div className="flex flex-col">
              <span>
                Gratis biaya kirim <br />
              </span>
              <p className="text-xs lg:text-sm xl:text-base text-gray">
                *Syarat & ketentuan berlaku
              </p>
            </div>
          </li>
        </ul>
        <button className="w-full lg:w-fit py-3 px-8 bg-red rounded-[10px] text-white">
          Pesan Sekarang
        </button>
      </div>
      <div>
        <img
          src={footerImg}
          alt="Footer"
          width={540}
          height={400}
          className="hidden lg:block"
        />
      </div>
    </footer>
  );
}
