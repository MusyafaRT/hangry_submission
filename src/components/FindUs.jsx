import gofood from "../public/gofood.svg";
import grabfood from "../public/grabfood.svg";
import zomato from "../public/zomato.svg";
import traveloka from "../public/traveloka.svg";

export default function FindUs() {
  return (
    <section className="flex flex-col items-center pb-16 lg:pb-32">
      <h2 className="text-gray text-[10px] lg:text-xl">Hangry! dapat kamu temukan di</h2>
      <div className="flex items-center flex-shrink-0 gap-2 lg:gap-16 pt-2 lg:pt-14">
        <img src={gofood} alt="Gofood" className="w-[78px] h-[20px] lg:w-[100px] lg:h-[40px]"/>
        <img src={grabfood} alt="Grabfood" className="w-[62px] h-[12.5px] lg:w-[100px] lg:h-[40px]" />
        <img src={zomato} alt="Zomato" className="w-[58.943px] h-[11.875px] lg:w-[100px] lg:h-[40px]" />
        <img src={traveloka} alt="Eats by Traveloka" className="w-[68.25px] h-[17.5px] lg:w-[100px] lg:h-[40px]"/>
      </div>
    </section>
  );
}
