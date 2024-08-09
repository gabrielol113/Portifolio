"use client";
"use client";
import styles from './page.module.css';
import Image from 'next/image';
import Image from 'next/image';

const favorite = [
    'ecommerce-frontend',
    'siteFilmes',
    'Tic-Tac-Toe',
    'ecommerce-frontend',
    'siteFilmes',
    'Tic-Tac-Toe',
]





export default function FavoriteProjects(){

    

    
    return(
        <div className='flex w-screen h-max flex-col max-sm:mt-96 mt-8 items-center justify-center pb-8'> 
            <h1 className='mb-32 font-semibold'>Favourite Projects</h1>
            <div className={" flex max-sm:gap-0  gap-8 lg:flex-row max-md:flex-col justify-center items-center"}>
                <div key={Math.random()} className={styles.animation + ' w-96 h-96 animate-show-slide max-sm:border-0 hover:scale-110 rounded-lg border-2 transition-all'}>
                    <div className='flex justify-center my-8'>
                        <h1>Ecommerce</h1>
                    </div>
                    <Image
                        src="https://www.ntaskmanager.com/wp-content/uploads/2020/10/project-design-in-project-management.png"
                        alt='Project Photo'
                        width={400}
                        height={400}
                    />
                    <div className='flex justify-center' >
                        <span>Tecnologies</span>

                    </div>
                </div>
                <div key={Math.random()}  className={styles.animation + ' w-96 h-96 hover:scale-110 rounded-lg border-2 max-sm:border-0 transition-transform'}>
                    <div className='flex justify-center my-8'>
                        <h1>Ecommerce</h1>
                    </div>
                    <Image
                        src="https://www.ntaskmanager.com/wp-content/uploads/2020/10/project-design-in-project-management.png"
                        alt='Project Photo'
                        width={400}
                        height={400}
                    />
                    <div className='flex justify-center' >
                        <span>Tecnologies</span>

                    </div>
                </div>
                <div key={Math.random()}  className={styles.animation + ' w-96 h-96 hover:scale-110 rounded-lg border-2 max-sm:border-0 transition-transform'}>
                    <div className='flex justify-center my-8'>
                        <h1>Ecommerce</h1>
                    </div>
                    <Image
                        src="https://www.ntaskmanager.com/wp-content/uploads/2020/10/project-design-in-project-management.png"
                        alt='Project Photo'
                        width={400}
                        height={400}
                    />
                    <div className='flex justify-center' >
                        <span>Tecnologies</span>

                    </div>
                </div>
            </div>       
        </div>
        </div>
    )
}