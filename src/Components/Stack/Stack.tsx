import styles from './page.module.css';

const stacks = [
    {
        name: "Frontend",
        technologies: [
            "React",
            "NextJS",
            "TailwindCSS",
            "SASS",
            "Styled-Components"
        ]
    },
    {
        name: "Backend",
        technologies: [
            "Node",
            "C#",
            "Express",
            "C",
        ]
    },
    {
        name: "Database",
        technologies: [
            "MongoDB",
            "PostgreSQL",
            "MariaDB",
            "Amazon S3",
        ]
    },
    {
        name: "Technologies",
        technologies: [
            "TypeScript",
            "VScode",
            "Prisma",
            "Supabase",
        ]
    },
]
export default function Stack(){
    return(
        <div className={styles.animation + " flex items-center max-sm:pt-12 flex-col w-full h-max pb-8"}>
            <h1 className='my-8 text-5xl font-semibold'>Stack</h1>
            <div className="flex lg:flex-row sm:flex-col justify-center items-center max-sm:w-screen w-1/2 max-sm:border-0 border-2 border-blue-200 rounded-lg shadow-lg">
                {
                    stacks.map((stack)=>{
                        console.log(stack);
                        const { technologies } = stack;
                        return(
                            <div className="flex flex-col first:mb-0 lg:border-r-2 last:border-r-0 justify-center items-center w-full max-sm:w-screen h-full max-sm:border-t-2 p-8">
                                <h1 className="flex justify-center text-3xl font-sans mb-8">{stack.name}</h1>
                                <div>
                                    <ul className="flex flex-col ml-8">
                                        {technologies.map((technologie)=> {
                                            return <li>{technologie}</li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}