'use client';
import styles from './page.module.css';
import Header from '@/Components/Header/Header';
import Footer from '@/Components/Footer/Footer';
import RepoGrid from '@/Components/RepoGrid/RepoGrid';
import Bio from '../Components/Bio/Bio';
import { useState } from 'react';
import FavoriteProjects from '@/Components/FavoriteProjects/FavoriteProjects';


export default function Home() {
  const [themeDark, setThemeDark] = useState(false);

  return (
    <main className={styles.main}>
      <Header />
      <Bio />
      <FavoriteProjects />
      <RepoGrid />
      <Footer/>
    </main>
  )
}

