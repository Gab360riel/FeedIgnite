import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
   <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post 
          author="Gabriel Martins" 
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nihil suscipit doloremque facilis in enim quibusdam consectetur perferendis qui unde totam animi neque harum officia iste expedita numquam, sapiente facere!" 
        />

        <Post 
          author="Pedro Galuzzi" 
          content="Um novo marco para a aprendizagem" 
        />
      </main>
    </div>
   </div>
  )
}
