import Footer from '@/components/footer/Footer';
import Nav from '@/components/nav/Nav';
import { ThemeProvider } from '@/components/theme/ThemeContext';

export default function NotFound() {
  return (
    <ThemeProvider>
      <div className={`flex flex-col justify-center items-center min-h-screen`}>
        <Nav />
        <div id='content' className='flex flex-col w-full items-center p-24'>
          <div className='w-5/6 md:w-4/5 lg:w-2/3 text-justify flex flex-col '>
            <h2>Page Not Found</h2>
            <p>Could not find requested resource</p>
          </div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
