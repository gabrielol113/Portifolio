import styles from './page.module.css';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

interface RepoInfo {
    name: string;
    url: string;
    language: string;
}

export default function RepoCard({name, url, language}:RepoInfo){
    let subtitle: any;
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal(){
        setIsOpen(true);
        console.log(url);
    }
    function afterOpenModal(){
        subtitle.style.color = '#f00';
    }
    function closeModal() {
        setIsOpen(false);
    }
    return(
        <>
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <div className={styles.cardTitle}>{name}</div>
                </div>
                <div className={styles.imageBox}>
                    <img src='https://lh3.googleusercontent.com/ur9pexNDn_VQ9rUFqtEs611Z4utS_q_vFxqopnC-zoIqTDraRCoFmSq3FvnJc12JHmrwwmRx8KZy1AMfAxmY0tucRg=w640-h400-e365-rj-sc0x00ffffff' width={165} height={130} alt='/picture' />
                </div>
                <div> 
                    {
                        language? <div><h6>Languages</h6><span>{language}</span></div> : null                    
                    }
                    
                </div>
                <div className={styles.cardBottom}>
                    <button className={styles.linkButton}>
                        <a href={url} target='_blank'>Repositório</a>
                    </button>
                    <Button className={styles.linkButton} onClick={() => openModal() } >
                        Details
                    </Button> 
                </div>
            </div> 

            <Modal
                open={modalIsOpen}
                onClose={closeModal}
                aria-labelledby=''
                aria-describedby=''
            >
                <Box className={styles.modalContainer}>
                    <div className={styles.modal}>
                        <div className={styles.modalHeader}>   
                            <button className={styles.closeButtonModal} onClick={ closeModal }>X</button>
                        </div>
                        <div className={styles.modalText}>                                                   
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                            {name}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                        </div>

                    </div>
                </Box>
            </Modal>
        </>
        
    )
}