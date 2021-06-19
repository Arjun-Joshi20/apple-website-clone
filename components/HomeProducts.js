import Aos from 'aos';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import {useEffect} from 'react'
import {useRouter} from 'next/router'

function HomeProducts(props) {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    const router = useRouter()

    //₹

    return (
        <div>
            {/* iPhone Landing Page */}
            <div className=" grey-background " data-aos="flip-down" >
                <h1 className='text-6xl font-semibold text-center mt-12 ' >iPhone 12</h1>
                <h1 className='text-3xl font-normal mt-5 text-center' >Blast Past Fast.</h1>
                <h1 className='mt-3 text-center text-gray-500'>From ₹69900 before trade-in<br></br>No cost EMI for 6 months</h1>
                <div className=' text-center mt-5 text-xl ' >
                    <span className='mr-5 text-blue-600 hover:border-b-2 border-blue-600  ' >Learn More</span>
                    <span className='text-blue-600 hover:border-b-2 border-blue-600 '>Buy</span>
                </div>
                <img loading='lazy' className='iPhone-image' src='https://res.cloudinary.com/codegowdacloud/image/upload/v1624030915/Screenshot_2021-06-18_at_9.11.30_PM_pc719z.png' ></img>
            </div>
            <div className='bg-black text-white ' data-aos="zoom-in-down" >
                <br></br>
                <br></br>
                <h1 className='text-6xl font-semibold text-center mt-12 ' >iPhone 12 Pro </h1>
                <h1 className='text-3xl font-normal mt-5 text-center' >It's a leap year.</h1>
                <h1 className='mt-3 text-center text-gray-500'>From ₹119900 before trade-in<br></br>No cost EMI for 6 months</h1>
                <div className=' text-center mt-5 text-xl ' >
                    <span className='mr-5 text-blue-600 hover:border-b-2 border-blue-600  ' >Learn More</span>
                    <span className='text-blue-600 hover:border-b-2 border-blue-600 '>Buy</span>
                </div>
                <img loading='lazy' className='iPhone-max-image' src='https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.landing-big_2x.jpg' ></img>
            </div>
            <br></br>
            <div className='bg-black text-white ' data-aos="zoom-in-up" >
                <br></br>
                <br></br>
                <h1 className='text-6xl font-semibold text-center mt-12 ' >iPad Pro </h1>
                <h1 className='text-3xl font-normal mt-5 text-center' >Supercharged with the M1 Chip</h1>
                <div className=' text-center mt-5 text-xl ' >
                    <span className='mr-5 text-blue-600 hover:border-b-2 border-blue-600  ' >Learn More</span>
                    <span className='text-blue-600 hover:border-b-2 border-blue-600 '>Buy</span>
                </div>
                <img loading='lazy' className='iPhone-max-image' src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-og-202104?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1618674417000' ></img>
            </div>
            <br></br>
            <div className='flex' data-aos="fade-right" >
                <img loading='lazy' className='grid-image' src='https://res.cloudinary.com/codegowdacloud/image/upload/v1624032988/Screenshot_2021-06-18_at_9.46.12_PM_beufgn.png'></img>
                <img loading='lazy' className='grid-image' src='https://res.cloudinary.com/codegowdacloud/image/upload/v1624033236/Screenshot_2021-06-18_at_9.50.21_PM_fe47ed.png'></img>   
            </div>
            <br></br>
            <div className='flex' data-aos="fade-left" >
                <img loading='lazy' onClick={ () => router.push('airtag') } className='grid-image cursor-pointer' src='https://res.cloudinary.com/codegowdacloud/image/upload/v1624033501/Screenshot_2021-06-18_at_9.54.46_PM_ytshxf.png'></img>
                <img loading='lazy' className='grid-image' src='https://res.cloudinary.com/codegowdacloud/image/upload/v1624033541/Screenshot_2021-06-18_at_9.55.30_PM_aq21up.png'></img>   
            </div>
            <br></br>
            <div className='flex' data-aos="fade-right" >
                <img loading='lazy' className='grid-image' src='https://res.cloudinary.com/codegowdacloud/image/upload/v1624033641/Screenshot_2021-06-18_at_9.57.03_PM_mt7hxm.png'></img>
                <img loading='lazy' className='grid-image' src='https://res.cloudinary.com/codegowdacloud/image/upload/v1624033749/Screenshot_2021-06-18_at_9.58.40_PM_wviqju.png'></img>   
            </div>
        </div>
    )
}

export default HomeProducts
