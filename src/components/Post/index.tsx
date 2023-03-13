import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar';
import {Comment} from '../Comments';

import styles from './Post.module.css';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
   post: PostType;
}

export function Post({ post } : PostProps) {
    const { author, publishedAt, content } = post

    const [comments, setComments] = useState(['Post muito bacana mano, parabens!']);
    const [newComment, setNewComment] = useState('');

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(e: FormEvent) {
        e.preventDefault()

        setComments([...comments, newComment])
        setNewComment('')
    }

    function handleNewCommentChange (e: ChangeEvent<HTMLTextAreaElement>) {
        e.target.setCustomValidity("")
        setNewComment(e.target.value)
    }

    function handleNewCommentInvalid(e: InvalidEvent<HTMLTextAreaElement>) {
        e.target.setCustomValidity("Este campo é obrigatório")
    }

    function deleteComment (commentToDelete:  string) {
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

            <form onSubmit={handleCreateNewComment} className={styles.commentForm} >
                <strong> Deixe seu feedback </strong>

                <textarea
                    placeholder="Deixe seu comentário" 
                    name='comment'
                    value={newComment}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
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