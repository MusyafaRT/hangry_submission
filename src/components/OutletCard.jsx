import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function OutletCard({outlet}) {
    return (
        <div>
          <div className='absolute rounded-full bg-white p-2 mt-2 ml-2 lg:mt-5 lg:ml-5'>
            <img src={outlet.logo} alt={`Logo ${outlet.name}`} width={28} height={28} className="lg:w-[52px] lg:h-[52px]"/>
          </div>
          <img src={outlet.image} alt={outlet.name} className='rounded-xl w-[156px] h-[167px] md:w-[200px] md:h-[200px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] ' style={{
            "box-shadow": "0px 0px 1px 0px rgba(0, 0, 0, 0.04), 0px 4px 8px 0px rgba(0, 0, 0, 0.04), 0px 16px 24px 0px rgba(0, 0, 0, 0.04), 0px 24px 32px 0px rgba(0, 0, 0, 0.04)",
          }}/>
          <h3 className='text-sm lg:text-2xl xl:text-3xl font-bold pt-3'>{outlet.name} <span><FontAwesomeIcon icon={faArrowRight} className='ml-3' size='md'/></span></h3>
          <h2 className='text-[10px] lg:text-xl xl:text-2xl text-gray'>
            {outlet.desc} &#8226; <span>{outlet.asal}</span>
          </h2>
        </div>
      );
}