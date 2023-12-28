import ayam_koplo from '../public/ayam_koplo.png';
import sangyu from '../public/sangyu.png';
import bude_sari from '../public/bude_sari.png';
import akLogo from '../public/akLogo.svg';
import sgLogo from '../public/sgLogo.svg';
import bsLogo from '../public/bsLogo.svg';
import OutletCard from './OutletCard';



const outlets = [
    {
        id: 1,
        name: "Ayam Koplo",
        desc: "Ayam Geprek",
        image: ayam_koplo,
        logo: akLogo,
        asal: "Indonesia", 
    },
    {
        id: 2,
        name: "San Gyu",
        desc: "Beef Bowl",
        image: sangyu,
        logo: sgLogo,
        asal: "Jepang",
    },
    {
        id: 3,
        name: "Bude Sari",
        desc: "Nasi Ayam",
        image: bude_sari,
        logo: bsLogo,
        asal: "Indonesia",
    }
]


export default function Outlet() {
    return (
        <section className='flex flex-col gap-2 px-4 md:px-12 xl:px-0 bg-white text-start pt-14 pb-14 lg:pb-[120px] w-full'>
            <h1 className='text-2xl lg:text-3xl xl:text-4xl text-darkGray font-bold'>Hangry! adalah restoran dengan beragam brand </h1>
            <p className='text-base lg:text-xl xl:text-2xl text-gray'>Kami menyajikan beragam brand untuk menemani setiap waktu santapmu</p>
            <div className='flex flex-wrap justify-center gap-2 md:justify-between py-6'>
            {outlets.map((outlet) => (
                <OutletCard key={outlet.id} outlet={outlet} />
            ))}
            </div>
        </section>
    )
}