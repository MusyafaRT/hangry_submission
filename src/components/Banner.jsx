import phoneImg from "../public/phone.png";
import btnPlayStore from "../public/Button Playstore.svg";
import btnAppStore from "../public/Button Apps Store.svg";

export default function Banner() {
  return (
    <section className="relative px-4 lg:px-12 xl:px-0 flex lg:gap-64 py-28 overflow-hidden">
      <div className="text-start basis-7/12 lg:basis-2/5 gap-5">
        <h2 className="text-darkGray text-sm lg:text-lg">Kamu laper atau haus?</h2>
        <h1 className="text-2xl lg:text-4xl font-bold">
          Tenang... ada Hangry! yang siap mengatasi
        </h1>
        <div className="flex gap-6 pt-6">
          <button>
            <img src={btnPlayStore} alt="Button Play Store" />
          </button>
          <button>
            <img src={btnAppStore} alt="Button App Store" />
          </button>
        </div>
      </div>
      <div className="absolute z-[-9] -right-16 top-28 lg:top-0 lg:right-16 w-[178px] h-[355px] lg:w-[356px] lg:h-[710px] overflow-hidden">
        <img
          src={phoneImg}
          alt="Phone"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
