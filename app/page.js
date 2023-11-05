import Image from 'next/image';
import NavBar from '../Components/NavBar';
import BoxLayout from '@/Components/BoxLayout';
import HomeFeatures from '@/Components/HomeFeartures';
import Footer from '@/Components/Footer';

export default function Home() {
  return (
    <div >
    <NavBar/>
    <BoxLayout/>
    <HomeFeatures/>
    <Footer/>
    </div>
  )
}
