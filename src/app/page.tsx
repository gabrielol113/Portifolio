import Footer from '@/Components/Footer/Footer';
import Bio from '../Components/Bio/Bio';
import FavoriteProjects from '@/Components/FavoriteProjects/FavoriteProjects';
import Stack from '@/Components/Stack/Stack';

const bestProjects = [];

export default function Home() {

  return (
    <main className='flex flex-col gap-2 w-screen h-screen'>
      <Bio />
      <Stack />
      <FavoriteProjects />
      <Footer />
    </main>
  )
}