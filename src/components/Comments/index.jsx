import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar'
import styles from './Comment.module.css'

export function Comment() {
    return(
        <div className={styles.comment} >
            <Avatar hasBorder={false} src="https://github.com/Gab360riel.png"/>

            <div className={styles.commentBox} >
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Martins</strong>
                            <time title='06 de março às 18:19h' dateTime='2023-03-06 18:19:00'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>
                        Muito bom Devon, parabens!
                    </p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}