import { useState, useEffect } from "react";
import { Octokit } from "octokit";
import styles from './page.module.css';
import RepoCard from '@/Components/RepoCard/RepoCard';


export default function RepoGrid(){

    const [repositorios, setRepositorios] = useState([]);    
    const octokit = new Octokit({auth:process.env.GITHUB_TOKEN,});

    async function GetRepos(){
        const repos = await octokit.request("GET /users/{username}/repos", {
            username: 'gabrielol113',
            headers: {
                'X-Github-Api-Version': '2022-11-28'
            }
        });
        console.log(repos)
        setRepositorios(repos.data);
    };

    useEffect(()=>{
    GetRepos();
  },[]);

    return(
        <div>
            <div className={styles.grid}>
                {
                    repositorios.map(
                        
                        (repo, index)=>{                        
                        async function getLanguage(){
                            const languages = await octokit.request(`GET /repos/{owner}/{repo}}/languages`, {
                            owner: 'gabrielol113',
                            repo: repo.html_url,
                            headers: {
                                'X-GitHub-Api-Version': '2022-11-28'
                            },})
                            console.log(languages);
                        }
                        
                        return(
                            <RepoCard name={repo.name} url={repo.html_url} language={repo.language} />
                        )})
                }
        </div>
        </div>
    )
}

/*

                    async function getLanguage(){
                        const octokit = new Octokit({
                        auth: process.env.GITHUB_TOKEN,
                        });
                        const languages = await octokit.request(`GET /repos/{owner}/{repo}}/languages`, {
                        owner: 'gabrielol113',
                        repo: repo.html_url,
                        headers: {
                            'X-GitHub-Api-Version': '2022-11-28'
                        }
                        })
                        console.log(languages);

*/