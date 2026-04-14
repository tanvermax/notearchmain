 
import Navber from './Navber';
// import { ThemeProvider } from 'next-themes';

export default function CommonLayout() {
  return (
//    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <>
      <Navber />
      <main className="p-8">
        <h1>Welcome to NoteArch</h1>
      </main></>
    //   </ThemeProvider>
  );
}