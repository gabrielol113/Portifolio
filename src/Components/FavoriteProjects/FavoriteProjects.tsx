
import { useState } from 'react';
import styles from './page.module.css';
import { Octokit } from "octokit";




const favorite = [
    ''
]

export default function FavoriteProjects(){
    const [favProjects, setFavProjects] = useState([]);
    const octokit = new Octokit({auth:process.env.GITHUB_TOKEN,});
    return(
        <> 
            <div className={styles.container}>

            </div>       
        </>
    )
}