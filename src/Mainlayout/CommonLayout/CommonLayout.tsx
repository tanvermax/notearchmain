 
import { Outlet } from 'react-router';
import Footer from './Footer';
import Navber from './Navber';
// import { ThemeProvider } from 'next-themes';

export default function CommonLayout() {
  return (
//    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <>
      <Navber />
     <div className='mt-20'>
       <Outlet/>
     </div>
      <Footer/>
      </>
    //   </ThemeProvider>
  );
}