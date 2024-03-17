import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import githubIcon from '@/assets/github-mark.png';

export default function Footer() {
        const date = new Date();
        const year = date.getFullYear();

    return (
        <footer className={styles.footerContainer}>
            <div className={styles.description}>
                <h2>Contato</h2>
                <div className={styles.contactContainer}>
                    <div className={styles.footerDiv}>
                        {`@${year} Gabriel Teixeira`}
                    </div>
                    <div className={styles.footerDiv}>
                        <a>
                            twitter
                        </a>
                        <Link href={'https://www.github.com/gabrielol113'}>
                            <Image 
                                src={githubIcon} 
                                alt='GitHubLogo'
                                width={30}
                                height={30}
                            />
                        </Link>
                    </div>
                    <div className={styles.footerDiv}>
                        <div className={styles.list}>
                            <ul className={styles.linksList}>
                                <li className={styles.li}><Link href={'/'}>Portifólio</Link></li>
                                <li className={styles.li}><Link href={'/about'}>About</Link></li>
                                <li className={styles.li}><Link href={'/contact'}>Contact</Link></li>         
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}