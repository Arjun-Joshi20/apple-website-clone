import AppleIcon from '@material-ui/icons/Apple';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useRouter } from 'next/router'

function Nav() {

    const router = useRouter();

    return (
        <div className="nav-color text-white h-14 flex flex-row space-x-16 mx-auto text-base " >
            <AppleIcon onClick={ () => router.push('/') } className=' nav-margin  h-5 mt-3 text-gray-300 hover:text-white cursor-pointer ' />
            <h1 className='mt-3 text-gray-300 hover:text-white cursor-pointer' >Mac</h1>
            <h1 className='mt-3 text-gray-300 hover:text-white cursor-pointer' >iPad</h1>
            <h1 className='mt-3 text-gray-300 hover:text-white cursor-pointer' >iPhone</h1>
            <h1 className='mt-3 text-gray-300 hover:text-white cursor-pointer' >Watch</h1>
            <h1 className='mt-3 text-gray-300 hover:text-white cursor-pointer' >TV</h1>
            <h1 className='mt-3 text-gray-300 hover:text-white cursor-pointer' >Music</h1>
            <h1 onClick={ () => router.push('airtag') } className='mt-3 text-gray-300 hover:text-white cursor-pointer' >AirTag</h1>
            <SearchIcon className=' h-5 mt-3 text-gray-300 hover:text-white cursor-pointer ' />
            <ShoppingBasketIcon className=' h-5 mt-3 text-gray-300 hover:text-white cursor-pointer '  />
        </div>
    )
}

export default Nav
