import AppleIcon from '@material-ui/icons/Apple';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useRouter} from 'next/router'

function Nav() {

    const router = useRouter()

    return (
        <div className=" sm:flex-grow-0 flex flex-row nav-color h-12 space-x-20 font-size sticky  " >
            <AppleIcon onClick={ () => router.push('/') }  className=" text-gray-300 hover:text-white width-margin mt-3 cursor-pointer " />
            <p className=" text-gray-300 hover:text-white width-margin mt-3 cursor-pointer " >Mac</p>
            <p className=" text-gray-300 hover:text-white mt-3  cursor-pointer"  >iPad</p>
            <p className=" text-gray-300 hover:text-white mt-3 cursor-pointer"  >iPhone</p>
            <p className=" text-gray-300 hover:text-white mt-3 cursor-pointer"  >Watch</p>
            <p className=" text-gray-300 hover:text-white mt-3 cursor-pointer"  >TV</p>
            <p className=" text-gray-300 hover:text-white mt-3 cursor-pointer"  >Music</p>
            <p onClick={ () => router.push('airtag') } className=" text-gray-300 hover:text-white mt-3 cursor-pointer"  >AirTag</p>
            <SearchIcon className=" text-gray-300 hover:text-white width-margin mt-3 cursor-pointer " />
            <ShoppingBasketIcon className=" text-gray-300 hover:text-white width-margin mt-3 cursor-pointer " />
        </div>
    )
}

export default Nav
