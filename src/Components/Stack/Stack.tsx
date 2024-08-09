import styles from './page.module.css';

export default function Stack(){
    return(
        <div className={styles.animation + " flex max-sm:pt-12 flex-col w-screen h-max justify-center items-center sm:flex-col pb-8"}>
            <h1 className='my-8 text-xl font-semibold'>Stack</h1>
            <div className={" flex max-sm:flex-col max-sm:w-screen w-1/2 items-center max-sm:border-0 border-2 border-blue-200 rounded-lg shadow-lg"}>
                <div className="w-1/3 max-sm:w-screen h-full border-r-2 p-8">
                    <h1 className="flex justify-center text-3xl font-sans mb-8">Frontend</h1>
                    <div>
                        <ul className="flex flex-col ml-8">
                            <li>React</li>
                            <li>NextJS</li>
                            <li>TailwindCSS</li>
                            <li>SASS</li>
                            <li>Styled-Components</li>
                        </ul>
                    </div>
                </div>                
                <div className="w-1/3 max-sm:w-screen h-full max-sm:border-t-2 border-r-2 p-8">
                    <h1 className="flex justify-center text-3xl font-sans mb-8">Backend</h1>
                    <div>
                        <ul className="flex flex-col ml-8">
                            <li>Node</li>
                            <li>C#</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>PostgreSQL</li>
                            <li>MariaDB</li>
                            <li>Amazon S3</li>
                            <li>C</li>
                        </ul>
                    </div>
                </div>
                <div className="w-1/3 max-sm:w-screen h-full max-sm:border-t-2 p-8">
                    <h1 className="flex justify-center text-3xl font-sans mb-8">Technologies</h1>
                    <div>
                        <ul className="flex flex-col ml-8">
                            <li>TypeScript</li>
                            <li>VScode</li>
                            <li>PrismaORM</li>
                            <li>Supabase</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}