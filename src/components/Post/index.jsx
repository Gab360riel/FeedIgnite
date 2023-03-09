import { useState } from 'react'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar';
import {Comment} from '../Comments'
import styles from './Post.module.css';


export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState(['Post muito bacana mano, parabens!']);
    const [newComment, setNewComment] = useState('');

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(e) {
        e.preventDefault()

        setComments([...comments, newComment])
        setNewComment('')
    }

    function handleNewCommentChange (e) {
        e.target.setCustomValidity("")
        setNewComment(e.target.value)
    }

    function handleNewCommentInvalid(e) {
        e.target.setCustomValidity("Este campo é obrigatório")
    }

    function deleteComment (commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        }) 
        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newComment.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time 
                    title={publishedDateFormatted} 
                    dateTime={publishedAt.toISOString()}
                >
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type === 'paragraph') {
                        return <p key={line.content} >{line.content}</p>
                    } else if (line.type === 'link'){
                        return <p key={line.content} ><a href='#'>{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={(e) => handleCreateNewComment(e)} className={styles.commentForm} >
                <strong> Deixe seu feedback </strong>

                <textarea
                    placeholder="Deixe seu comentário" 
                    name='comment'
                    value={newComment}
                    onChange={(e) => handleNewCommentChange(e)}
                    onInvalid={(e) => handleNewCommentInvalid(e)}
                    required
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}