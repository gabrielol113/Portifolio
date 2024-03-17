import Link from 'next/link';
import styles from './page.module.css';

export default function Header(){
    return(
        <header className={styles.container}>

            <div className={styles.list}>
                <ul className={styles.linksList}>
                    <li className={styles.li}><Link href={'/'}>Home</Link></li>
                    <li className={styles.li}><Link href={'/about'}>Top Projects</Link></li>
                    <li className={styles.li}><Link href={'/contact'}>Contact</Link></li>        
                </ul>
            </div>


        </header>
    )
}

/*

                        <div>
                            <Link href={'https://www.github.com/gabrielol113'}>
                                <Image 
                                    src={githubIcon} 
                                    alt='GitHubLogo'
                                    width={30}
                                    height={30}
                                />
                            </Link>
                        </div>

*/