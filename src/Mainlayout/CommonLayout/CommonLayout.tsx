 
import { Outlet } from 'react-router';
import Footer from './Footer';
import Navber from './Navber';


export default function CommonLayout() {
  return (
      <>
      <Navber />
      {/* <div className='flex-grow'> */}
       <Outlet/>

      {/* </div> */}
      <Footer/>
      </>

  );
}