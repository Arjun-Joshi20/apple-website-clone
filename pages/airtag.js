import Head from 'next/head'
import Nav from '../components/Nav'
import {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

function Airtag() {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])

    return (
        <div className="  " >
            <Head>
                <title>AirTag</title>
                <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/8/84/Apple_Computer_Logo_rainbow.svg" />
            </Head>
            <Nav />
            <div className=" bg-gray-100 " >
                <img data-aos="zoom-in-up" className=" airtag-margin w-80 " src="https://res.cloudinary.com/codegowdacloud/image/upload/v1624009471/Screenshot_2021-06-18_at_3.12.17_PM_njhbcv.png"></img>
                <h1 className="text-5xl text-center " >AirTag</h1>
                <h1 className="text-7xl text-center " ><b>Lose your knack<br></br>for losing things.</b></h1>
                <br></br>
            </div>
            <br></br>
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1 className=" text-center text-2xl ml-80 mr-80 " >AirTag is a super-easy way to keep track of your stuff. Attach one to your keys, slip another in your backpack. And just like that, they’re on your radar in the Find My app, where you can also track down your Apple devices and keep up with friends and family.</h1>
                <h4 className='text-2xl text-gray-400 text-center mt-5 ' >Starting from ₹3190</h4>
                <button className=' button-buy mt-5 text-white '>Buy</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <div>
                <img className='airtag-image ml-16' src="https://res.cloudinary.com/codegowdacloud/image/upload/v1624011396/Screenshot_2021-06-18_at_3.46.16_PM_hdjjwm.png" ></img>
                <br></br>
                <img className='airtag-image ml-16' src='https://res.cloudinary.com/codegowdacloud/image/upload/v1624011806/Screenshot_2021-06-18_at_3.53.12_PM_dyo3of.png' ></img>
                <br></br>
                <img className='airtag-image ml-16' src='https://res.cloudinary.com/codegowdacloud/image/upload/v1624012183/Screenshot_2021-06-18_at_3.59.28_PM_hvs2vp.png'></img>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            <div className='flex flex-row' >
                <div>
                    <h1 className=' ml-28 text-6xl ' >Ping it. Find it.</h1>
                    <h4 className=' ml-28 mr-60 text-justify text-2xl text-gray-400 mt-5 ' >Misplacing something like your wallet doesn’t have to be a big deal when it has AirTag attached. You can play a sound on the built-in speaker by going to the new Items tab in the Find My app, or say “Hey Siri, find my wallet”. If it’s hiding nearby — like under the couch or in the next room — just follow the sound and your search is over.</h4>
                </div>
                <div>
                    <img data-aos="zoom-in-down" class=" -mt-8 " src="https://res.cloudinary.com/codegowdacloud/image/upload/v1624012839/Screenshot_2021-06-18_at_4.10.19_PM_k8m961.png" ></img>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className='flex flex-row' >
                <div>
                    <img data-aos="zoom-in-right" class=" -mt-8 ml-8 " src="https://res.cloudinary.com/codegowdacloud/image/upload/v1624013927/Screenshot_2021-06-18_at_4.28.31_PM_dw9awc.png" ></img>
                </div>
                <div>
                    <h1 className=' mr-28 ml-60 text-6xl ' >Cold. Warm.</h1>
                    <h1  className=' mr-28 ml-60  text-6xl ' >Warmer. Hot.</h1>
                    <h4 className=' mr-28 ml-60 text-justify text-2xl text-gray-400 mt-5 ' >Misplacing something like your wallet doesn’t have to be a big deal when it has AirTag attached. You can play a sound on the built-in speaker by going to the new Items tab in the Find My app, or say “Hey Siri, find my wallet”. If it’s hiding nearby — like under the couch or in the next room — just follow the sound and your search is over.</h4>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <br></br>
                <img className='airtag-image ml-16'src='https://cdn.vox-cdn.com/thumbor/iQCXTYXF-thDUQqQFR0kp4niziM=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22457960/airtag_accessories_header_202104.jpg'></img>
                <h1 className=" text-on-image ml-14 text-6xl" ><b>More Color. More Fun. More You.</b></h1>
                <h1 className=" message-on-image  text-gray-800 text-center mt-16 ' ">It’s easy to attach AirTag to just about anything with colourful key rings and<br></br>loops from Apple. AirTag comes individually or in a pack of four.<br></br> Happy tagging.</h1>
                <h1 className=' text-blue-600 link-on-image cursor-pointer' >Shop Apple AirTag Accesories ></h1>
            </div>
            <div className=' mt-10 h-80 bg-gray-200 ' ></div>
        </div>
    )
}

export default Airtag
