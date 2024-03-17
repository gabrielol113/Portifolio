import styles from './page.module.css';
const ProfilePhoto = 'https://pbs.twimg.com/profile_images/1694806827261698048/mpcB2rYL_400x400.jpg'

export default function Bio(){
    return(
        <>
            <div className={styles.container}>
                <div>
                    <img src={ProfilePhoto} />
                </div>
                <div className={styles.bioText}>
                    <div>
                        <p> Olá! Meu nome é Gabriel, sou um Front-End Developer apaixonado por Javascript. Cursando atualmente Engenharia Informática, estou em constante busca pelo equilíbrio entre criatividade e funcionalidade em meus projetos.</p>
                    </div>
                </div>
            </div>
        </>
    )
}