import Card from './card/Card.jsx'
import style from './Main.module.css'
import undefined from '../../assets/placeholder.webp'
import { initialPosts } from '../../posts.js'
import { useEffect, useState } from 'react'

const initialFormData = {
    title: '',
    image: undefined,
    content: '',
    tags: '',
    category: '',
    published: true,
}

export default function Main() {

    const [posts, setPosts] = useState(initialPosts)
    const [publishedPosts, setPublishedPosts] = useState([])
    // const [title, setTitle] = useState('')
    const [tags, setTags] = useState([])
    const [formData, setFormData] = useState(initialFormData)

    useEffect(() => {
        setPublishedPosts(posts.filter((post) => post.published === true))

        const tagsItems = []

        posts.forEach(post => {
            const postTags = post.tags
            console.log(postTags)

            postTags.forEach((tag) => {
                if (!tagsItems.includes(tag)) {
                    tagsItems.push(tag)
                }
            })
        })
        setTags(tagsItems)
    }, [posts])



    function addPost(e) {
        e.preventDefault()

        // const newTitle = title.trim()
        // if (newTitle === '') return

        const post = {
            id: Date.now(),
            ...formData,
            tags: formData.tags.split(',').map(tag => tag.trim())
        }

        setPosts([...posts, post])
        setFormData(initialFormData)
    }

    function deletePost(id) {
        setPublishedPosts(publishedPosts.filter(post => post.id !== id))
    }

    function handleFormData(e) {
        const { name, value, type, checked } = e.target

        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    return (
        <main>
            <section className={style.container}>
                <h1 className={style.title_blog}>Il mio blog</h1>
                <div className={style.container}>
                    <form onSubmit={addPost} className={style.form} action="">
                        <div>
                            {/* <label htmlFor="title">Titolo</label> */}
                            <input onChange={handleFormData} name="title" id="title" className={style.post_form} type="text" placeholder='Titolo del Post' value={formData.title} />
                        </div>
                        <div>
                            <label htmlFor="immagine">Immagine (src)</label>
                            <input onChange={handleFormData} name="immagine" id="immagine" className={style.post_form} type="text" placeholder='Immagine' value={formData.image} />
                        </div>
                        <div>
                            {/* <label htmlFor="title">Titolo</label> */}
                            <input onChange={handleFormData} name="content" id="content" className={style.post_form} type="text" placeholder='Contenuto del Post' value={formData.content} />
                        </div>
                        <div>
                            <label htmlFor="category">Categoria</label>
                            <select onChange={handleFormData} name="category" id="category">
                                <option selected={formData.category === ''} value="">Seleziona</option>
                                <option selected={formData.category === 'Luna'} value="Luna">Luna</option>
                                <option selected={formData.category === 'Mercurio'} value="Mercurio">Mercurio</option>
                                <option selected={formData.category === 'Marte'} value="Marte">Marte</option>
                                <option selected={formData.category === 'Giove'} value="Giove">Giove</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="tags">Tags</label>
                            <input onChange={handleFormData} name="tags" id="tags" className={style.post_form} type="text" placeholder='Tag del Post' value={formData.tags} />
                        </div>
                        <div>
                            <label htmlFor="pubblicato">Pubblicato</label>
                            <input onChange={handleFormData} name="pubblicato" id="pubblicato" className={style.post_form} type="checkbox" placeholder='Tag del Post' checked={formData.published} />
                        </div>
                        <input className={style.submit_form} type="submit" value='Aggiungi' />
                    </form>
                    <div>
                        <ul className={style.tag}>
                            {tags.map((tag) =>
                                <li className={style.tag_item} key={tag}>{tag}</li>
                            )}
                        </ul>
                    </div>
                    <div className={style.raw}>
                        {publishedPosts.map(el => <div key={el.id} className={style.col_4}>
                            <Card onDelete={() => deletePost(el.id)} post={el} />
                        </div>)}
                    </div>
                </div>
            </section>
        </main>
    )
}