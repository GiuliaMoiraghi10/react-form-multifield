import Card from './card/Card.jsx'
import style from './Main.module.css'
import undefined from '../../assets/placeholder.webp'

import { posts } from '../../posts.js'

import { useState } from 'react'

const initialFormData = {
    title: '',
    image: undefined,
    content: '',
    category: '',
    tags: '',
    published: true
}


export default function Main() {

    const [pubPosts, setPubPosts] = useState(posts.filter((post) => post.published === true))

    const [title, setTitle] = useState('')

    const [formData, setFormData] = useState(initialFormData)

    function handleFormData(event) {
        console.log(event.target.title, e.target.value)
    }

    function deletePost() {
        setPubPosts(pubPosts.filter(post => post.id !== id))
    }

    function addPost(e) {
        e.preventDefault()

        const newTitle = title.trim()
        if (newTitle === '') return

        const post = {
            id: Date.now(),
            title,
            image: undefined,
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
            tags: ['html', 'css'],
            published: true,
        }

        setPubPosts([...pubPosts, post])
        setTitle('')
    }

    return (
        <main>
            <section className={style.container}>
                <h1 className={style.title_blog}>Il mio blog</h1>
                <div className={style.container}>
                    <form onSubmit={addPost} className={style.form} action="">
                        <input name="title" type="text" placeholder='Titolo' value={title} onChange={handleFormData} />

                        <input name="content" type="text" placeholder='Contenuto Post' value={formData.content} onChange={handleFormData} />

                        <label for="Sailor">Immagine:</label>
                        <input type="file" placeholder='Seleziona immagine' />

                        <label for="Sailor">Seleziona:</label>
                        <select name="category" id="" value={formData.category} onChange={handleFormData}>
                            <option value="Sailor">Sailor Moon</option>
                            <option value="Sailor">Sailor Mercury</option>
                            <option value="Sailor">Sailor Mars</option>
                            <option value="Sailor">Sailor Jupiter</option>
                            <option value="Sailor">Sailor Venus</option>
                        </select>

                        <input type="checkbox" value={formData.tags} onChange={handleFormData} />html
                        <input type="checkbox" value={formData.tags} onChange={handleFormData} />css
                        <input type="checkbox" value={formData.tags} onChange={handleFormData} />php
                        <input type="checkbox" value={formData.tags} onChange={handleFormData} />js

                        <input className={style.submit_form} type="submit" value='Aggiungi' />
                    </form>

                    <div className={style.raw}>
                        {pubPosts.map(post => <div key={post.id} className={style.col_4}>
                            <Card onDelete={() => deletePost(post.id)} post={post} />
                        </div>)}
                    </div>
                </div>
            </section>
        </main>
    )
}