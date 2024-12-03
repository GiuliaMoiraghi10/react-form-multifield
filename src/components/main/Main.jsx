import Card from './card/Card.jsx'
import style from './Main.module.css'
import undefined from '../../assets/placeholder.webp'

import { posts } from '../../posts.js'

import { useState } from 'react'


export default function Main() {

    const [pubPosts, setPubPosts] = useState(posts.filter((post) => post.published === true))

    const [title, setTitle] = useState('')

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
                        <input value={title} onChange={(e) => setTitle(e.target.value)} className={style.post_form} type="text" placeholder='Nuovo Post' />
                        <input className={style.submit_form} type="submit" value='Aggiungi' />
                    </form>
                    <div className={style.raw}>
                        {pubPosts.map(post => <div key={post.id} className={style.col_4}>
                            <Card onDelete={() => deletePost(el.id)} post={post} />
                        </div>)}
                    </div>
                </div>
            </section>
        </main>
    )
}