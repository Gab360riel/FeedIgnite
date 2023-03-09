import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/Gab360riel.png',
      name: 'Gabriel Martins',
      role: 'Fullstack Developer'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: '👉 jane.design/doctorcare',
      },
      {
        type: 'link',
        content: '#novoprojeto ',
      },
      {
        type: 'link',
        content: '#nlw ',
      },
      {
        type: 'link',
        content: '#rocketseat',
      }          
    ],
    publishedAt: new Date('2023-03-07 11:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/vfgi.png',
      name: 'Vitor Fernandes',
      role: 'Senior Fullstack Developer'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: '👉 jane.design/doctorcare',
      },
      {
        type: 'link',
        content: '#novoprojeto ',
      },
      {
        type: 'link',
        content: '#nlw ',
      },
      {
        type: 'link',
        content: '#rocketseat',
      }          
    ],
    publishedAt: new Date('2023-03-05 11:00:00')
  }
]

export function App() {
  return (
   <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {
          posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })
        }
      </main>
    </div>
   </div>
  )
}
