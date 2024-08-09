import Image from "next/image";

export default function ProjectSection(){
    return(
        <section className="flex flex-col h-fit border-2 bg-slate-500 border-red-700 pb-8">
            <div className="flex justify-end mb-8">
                <h1 className="text-3xl mr-8">Title</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col justify-center items-center">
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzEPra5Cd-WhEYmf6djT5hLtKodlugJHuo3Q&s" alt="Photo" width={500} height={500}/>
                    <span >Preview</span>
                </div>
            </div>

            <div className="mb-8">
                <p>Description</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div>
                <span>Technologies</span>
            </div>
            <div>
                <button className=" border-2 border-gray-700 rounded-xl p-2 hover:bg-gray-700 hover:text-white transition-colors">See more</button>
            </div>
        </section>
    )
}
import Image from "next/image";

export default function ProjectSection(){
    return(
        <section className="flex flex-col h-fit border-2 bg-slate-500 border-red-700 pb-8">
            <div className="flex justify-end mb-8">
                <h1 className="text-3xl mr-8">Title</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col justify-center items-center">
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzEPra5Cd-WhEYmf6djT5hLtKodlugJHuo3Q&s" alt="Photo" width={500} height={500}/>
                    <span >Preview</span>
                </div>
            </div>

            <div className="mb-8">
                <p>Description</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div>
                <span>Technologies</span>
            </div>
            <div>
                <button className=" border-2 border-gray-700 rounded-xl p-2 hover:bg-gray-700 hover:text-white transition-colors">See more</button>
            </div>
        </section>
    )
}