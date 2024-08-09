import Link from 'next/link';
import Image from 'next/image';
import githubIcon from '@/assets/github-mark.png';

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className="flex flex-col h-min justify-center bg-slate-400">
            <div className="flex w-full mb-8 mt-8 justify-center">
                <div className="flex justify-center w-80">
                    <Link
                        href={'https://x.com/Gabrieelrocha'}
                        className="mx-4 p-2 hover:text-white hover:bg-black rounded-full transition-all duration-500"
                    >
                        <svg className="w-6 h-6  text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                        </svg>
                    </Link>
                    <Link
                        href={'https://www.github.com/gabrielol113'}
                        className="mx-4 p-2 hover:text-white hover:bg-black rounded-full transition-all duration-500"
                    >
                        <Image
                            src={githubIcon}
                            alt='GitHubLogo'
                            width={24}
                            height={24}
                        />
                    </Link>
                    <Link
                        href={'https://www.linkedin.com/in/gabrielteixeira113/'}
                        className="mx-4 p-2 hover:text-white hover:bg-black rounded-full transition-all duration-500"
                    >
                        <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd" />
                            <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                        </svg>
                    </Link>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-80">
                    <ul className="flex">
                        <li className="mx-4 hover:text-white hover:mx-8 transition-all duration-500"><Link href={'/'}>Portifólio</Link></li>
                        <li className="mx-4 hover:text-white hover:mx-8 transition-all duration-500"><Link href={'/about'}>About</Link></li>
                        <li className="mx-4 hover:text-white hover:mx-8 transition-all duration-500"><Link href={'/contact'}>Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                {`@${year} Gabriel Teixeira | All rights reserved`}
            </div>
        </footer>
    )
}