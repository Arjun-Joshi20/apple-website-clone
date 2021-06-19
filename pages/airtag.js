import Head from 'next/head'
import Aos from 'aos';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {useEffect} from 'react'
import Nav from '../components/Nav'
import MessageIcon from '@material-ui/icons/Message';

function Airtag() {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <div className="h-screen " >
            <Head>
                <title>AirTag - Apple</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/8/84/Apple_Computer_Logo_rainbow.svg" />
            </Head>
            <Nav />
            <div className="bg-gray-100 " data-aos="flip-left" >
                <img className='airtag-image' src="https://res.cloudinary.com/codegowdacloud/image/upload/v1624034287/Screenshot_2021-06-18_at_10.07.49_PM_ukj8gz.png" ></img>
                <h1 className='text-5xl font-normal mt-5 text-center' >AirTag</h1>
                <h1 className='text-7xl font-semibold mt-5 text-center' > Lose your knack <br></br> for losing things. </h1>
                <br></br>
                <br></br>
            </div>
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1 className=' text-center ml-80 mr-80 text-2xl ' >AirTag is a super-easy way to keep track of your stuff. Attach one to your keys, slip another in your backpack. And just like that, they’re on your radar in the Find My app, where you can also track down your Apple devices and keep up with friends and family.</h1>
                <h1 className='mt-3 text-center text-gray-500 text-xl '>Starting from ₹3190</h1>
                <h1 className=' button-margin text-center cursor-pointer text-white rounded-full bg-blue-600 text-xl w-20 '>Buy</h1>
                <br></br>
                <br></br>
                <img className='airtag-images' src='https://res.cloudinary.com/codegowdacloud/image/upload/v1624035414/Screenshot_2021-06-18_at_10.26.42_PM_pqtjqs.png' ></img>
                <br></br>
                <img className='airtag-images' src='https://res.cloudinary.com/codegowdacloud/image/upload/v1624035622/Screenshot_2021-06-18_at_10.30.09_PM_lrekmg.png'></img>
                <br></br>
                <img className='airtag-images' src='https://res.cloudinary.com/codegowdacloud/image/upload/v1624035832/Screenshot_2021-06-18_at_10.33.36_PM_llfqh4.png'></img>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className=' flex items-center ' data-aos="fade-up-right" >
                    <div >
                        <h1 className='text-6xl font-normal mt-5 text-center ml-32' >Ping It. Find It.</h1>
                        <br></br>
                        <h1 className='mt-3 text-justify text-gray-500 text-xl ml-60 ' >Misplacing something like your wallet<br></br>doesn’t have to be a big deal when it has<br></br>AirTag attached. You can play a sound on<br></br> the built-in speaker by going to the new Items tab<br></br>in the Find My app, or say “Hey Siri, find my wallet”. If it’s hiding nearby — like under the couch or in the next room just follow the sound and your search is over.</h1>
                    </div>
                    <img className=' flex-image ml-5 ' src='https://res.cloudinary.com/codegowdacloud/image/upload/v1624036005/Screenshot_2021-06-18_at_10.36.36_PM_c2gc9m.png' ></img>
                </div>
            </div>
            <div className=' flex items-center ' data-aos="fade-up-left" >
                    <img className=' flex-image-2 ml-5 ' src='https://res.cloudinary.com/codegowdacloud/image/upload/v1624036984/Screenshot_2021-06-18_at_10.52.46_PM_ey7d5d.png' ></img>
                    <div className='ml-52' >
                        <h1 className='text-6xl font-normal mt-5 text-center mr-32' >Cold. Warm.<br></br>Warmer. Hot.</h1>
                        <br></br>
                        <h1 className='mt-3 text-justify text-gray-500 text-xl mr-32 ' >If your AirTag is nearby, your iPhone can<br></br> lead you straight to it with<br></br>Precision Finding.1 You’ll see the distance<br></br>to your AirTag and the direction to head in -<br></br> all thanks to Ultra Wideband technology.</h1>
                    </div>
                </div>
                <footer className=' bg-gray-200 flex flex-row py-2 ' data-aos="flip-right" >
                    <div className=' ml-60 ' >
                        <img className=' w-10 ' src='https://www.apple.com/ac/globalfooter/6/en_US/assets/ac-buystrip/shipping/icon_large.svg' ></img>
                        <h1 className='text-lg' >Free Delivery</h1>
                        <h1 className='text-sm mt-2' >By online and get free<br></br>no-contact delivery</h1>
                        <span className='mr-5 text-blue-600 hover:border-b-2 border-blue-600 text-xs ' >Learn More</span>
                    </div>
                    <div className=' ml-60 ' >
                        <img className=' w-10 ' src='https://www.apple.com/ac/globalfooter/6/en_US/assets/ac-buystrip/engraving/icon_large.svg' ></img>
                        <h1 className='text-lg' >Free Laser Engraving</h1>
                        <h1 className='text-sm mt-2' >Add a personal message<br></br>to select Apple products</h1>
                        <span className='mr-5 text-blue-600 hover:border-b-2 border-blue-600 text-xs ' >Learn More</span>
                    </div>
                    <div className=' ml-60 ' >
                        <img className=' w-10 ' src='https://www.apple.com/ac/globalfooter/6/en_US/assets/ac-buystrip/help/icon_large.svg' ></img>
                        <h1 className='text-lg' >Get help buying</h1>
                        <h1 className='text-sm mt-2' >Have a question? Call a<br></br>specialist or chat online.<br></br>Call 42424242424 </h1>
                        <span className='mr-5 text-blue-600 hover:border-b-2 border-blue-600 text-xs ' >Learn More</span>
                    </div>
                </footer>
            </div>
    )
}

export default Airtag
