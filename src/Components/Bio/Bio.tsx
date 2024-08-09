import heart from "../../../public/Heart.png";
import githubIcon from '@/assets/github-mark.png';
import Image from "next/image";
import Link from "next/link"

export default function Bio() {
    return (
        <div className="flex flex-col items-center justify-center bg-black h-screen">
            <div className='flex flex-col justify-center text-white items-center ml-8 mr-8 w-full'>
                <p className=" font-mono"> Hello! My name is</p>
                <br />
                <span className="font-extrabold sm:text-8xl font-mono text-4xl">Gabriel</span>
                <br />
                <p className=" font-mono">and here you will discover my <br /></p>
                <p className="font-extrabold font-mono text-9xl"><span className="flex text-4xl">passion<Image className="bg-transparent hover:scale-x-[-1] transition-transform duration-1000" src={heart} width={50} height={50} alt="Heart" /></span></p>
            </div>
            <div className="flex justify-center mt-12">
                <Link
                    href={'https://x.com/Gabrieelrocha'}
                    className="mx-4 p-2 text-white hover:scale-150 transition-all duration-700 hover:*:text-black  hover:bg-white rounded-lg border-2 border-white"
                >
                    <svg className="w-6 h-6 text-5xl" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                    </svg>
                </Link>
                <Link
                    href={'https://www.github.com/gabrielol113'}
                    className="flex items-center justify-center mx-4 p-2 text-white hover:scale-150 transition-all duration-700 hover:*:text-black  hover:bg-white rounded-lg border-2 border-white"
                >   
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="-20 -10 300 300"
                        className="hover:text-black flex scale-125">

                        <g fill="#ffffff hover:text-black" textAnchor="none" className="mix-blend-mode: normal"><g transform="scale(4,4)"><path d="M32,6c-14.359,0 -26,11.641 -26,26c0,12.277 8.512,22.56 19.955,25.286c-0.592,-0.141 -1.179,-0.299 -1.755,-0.479v-5.957c0,0 -0.975,0.325 -2.275,0.325c-3.637,0 -5.148,-3.245 -5.525,-4.875c-0.229,-0.993 -0.827,-1.934 -1.469,-2.509c-0.767,-0.684 -1.126,-0.686 -1.131,-0.92c-0.01,-0.491 0.658,-0.471 0.975,-0.471c1.625,0 2.857,1.729 3.429,2.623c1.417,2.207 2.938,2.577 3.721,2.577c0.975,0 1.817,-0.146 2.397,-0.426c0.268,-1.888 1.108,-3.57 2.478,-4.774c-6.097,-1.219 -10.4,-4.716 -10.4,-10.4c0,-2.928 1.175,-5.619 3.133,-7.792c-0.2,-0.567 -0.533,-1.714 -0.533,-3.583c0,-1.235 0.086,-2.751 0.65,-4.225c0,0 3.708,0.026 7.205,3.338c1.614,-0.47 3.341,-0.738 5.145,-0.738c1.804,0 3.531,0.268 5.145,0.738c3.497,-3.312 7.205,-3.338 7.205,-3.338c0.567,1.474 0.65,2.99 0.65,4.225c0,2.015 -0.268,3.19 -0.432,3.697c1.898,2.153 3.032,4.802 3.032,7.678c0,5.684 -4.303,9.181 -10.4,10.4c1.628,1.43 2.6,3.513 2.6,5.85v8.557c-0.576,0.181 -1.162,0.338 -1.755,0.479c11.443,-2.726 19.955,-13.009 19.955,-25.286c0,-14.359 -11.641,-26 -26,-26zM33.813,57.93c-0.599,0.042 -1.203,0.07 -1.813,0.07c0.61,0 1.213,-0.029 1.813,-0.07zM37.786,57.346c-1.164,0.265 -2.357,0.451 -3.575,0.554c1.218,-0.103 2.411,-0.29 3.575,-0.554zM32,58c-0.61,0 -1.214,-0.028 -1.813,-0.07c0.6,0.041 1.203,0.07 1.813,0.07zM29.788,57.9c-1.217,-0.103 -2.411,-0.289 -3.574,-0.554c1.164,0.264 2.357,0.451 3.574,0.554z"></path></g></g>
                    </svg>
                </Link>
                <Link
                    href={'https://www.linkedin.com/in/gabrielteixeira113/'}
                    className="mx-4 p-2 text-white hover:scale-150 transition-all duration-700 hover:*:text-black  hover:bg-white rounded-lg border-2 border-white"
                >
                    <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd" />
                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}