import {useEffect} from 'react'
import {useRouter} from 'next/router'
import Aos from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


function Home() {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])

    const router = useRouter()
    

    return (
        <div>
            <div className=" grey-background " data-aos="flip-up" >
                <h1 className=" text-6xl text-center mt-10 " >iPhone 12</h1>
                <h2 className=' text-3xl text-center mt-5 ' >Blast fast past.</h2>
                <h4 className='text-lg text-gray-400 text-center mt-5 ' >From ₹69900 before trade-in</h4>
                <h4 className='text-lg text-gray-400 text-center ' >No cost EMI for 6 months.</h4>
                <div className='flex flex-row links-margin mt-5' >
                    <h1 className=' text-blue-600 cursor-pointer text-2xl mr-3 text-center blue-border hover:border-b-2 border-blue-600  ' >Learn More ></h1>
                    <h1 className=' text-blue-600 cursor-pointer text-2xl mr-3 text-center blue-border hover:border-b-2 border-blue-600  ' >Buy ></h1>
                </div>
                <img className=" ml-60 iphone-image " src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-og-202104?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1617339367000' ></img>
            </div>
            <div className=" bg-black text-white " data-aos="zoom-in-right">
                <br></br>
                <br></br>
                <h1 className=" text-6xl text-center ">iPhone 12 Pro</h1>
                <h2 className=' text-3xl text-center mt-5 ' >It's a leap year.</h2>
                <h4 className=' text-gray-400 text-center mt-5 ' >From ₹119900 before trade-in</h4>
                <h4 className='text-lg text-gray-400 text-center ' >No cost EMI for 6 months.</h4>
                <div className='flex flex-row links-margin mt-5' >
                    <h1 className=' text-blue-600 text-2xl cursor-pointer mr-3 text-center blue-border hover:border-b-2 border-blue-600  ' >Learn More ></h1>
                    <h1 className=' text-blue-600 text-2xl cursor-pointer mr-3 text-center blue-border hover:border-b-2 border-blue-600  ' >Buy ></h1>
                </div>
                <img className=" iphone-max-image " src='https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.landing-big_2x.jpg' ></img>
            </div>
            <br></br>
            <div className=" bg-black text-white  " data-aos="zoom-in">
                <br></br>
                <br></br>
                <h1 className=" text-6xl text-center ">iPad Pro</h1>
                <h2 className=' text-3xl text-center mt-5 ' >Supercharged with the Apple M1 chip.</h2>
                <div className='flex flex-row links-margin mt-5' >
                    <h1 className=' text-blue-600 text-2xl cursor-pointer mr-3 text-center blue-border hover:border-b-2 border-blue-600  ' >Learn More ></h1>
                    <h1 className=' text-blue-600 text-2xl cursor-pointer mr-3 text-center blue-border hover:border-b-2 border-blue-600  ' >Buy ></h1>
                </div>
                <img className=" iphone-max-image " src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-og-202104?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1618674417000' ></img>
            </div>
            <br></br>
            <div className=' flex flex-row' >
                <img className=" flex-image " data-aos="fade-up-right" src='https://img.gadgethacks.com/img/39/39/63758147276109/0/watch-apples-wwdc-2021-keynote-livestream-for-sneak-peeks-ios-15-ipados-15-macos-12-more.1280x600.jpg' ></img>
                <img className=" flex-image " data-aos="fade-up-left" src='https://9to5mac.com/wp-content/uploads/sites/6/2021/04/Screen-Shot-2021-04-20-at-5.58.01-PM.jpeg?quality=82&strip=all&w=1000'></img>
            </div>
            <br></br>
            <div className=' flex flex-row' >
                <br></br>
                <img className=" flex-image cursor-pointer " onClick={() => router.push('airtag')} data-aos="fade-up-left" src='https://www.gizchina.com/wp-content/uploads/images/2021/04/iphone-purple-airtag.png' ></img>
                <img className=" flex-image " data-aos="fade-up-right" src='https://www.gadgetbytenepal.com/wp-content/uploads/2020/09/Apple-Watch-Series-6-announced-696x364.jpg'></img>
            </div>
            <br></br>
        </div>
    )
}

export default Home
