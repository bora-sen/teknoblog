import React from 'react';
import dataset from '../../dataset.json';
import style from './posts.module.css'
import Fade from 'react-reveal/Reveal'

function Posts() {
    let posts = dataset.posts;
    let authors = dataset.authors;


    function getAuthorById(input_id){
        let sel_author = authors.find(author => {
            return author.id === input_id;
        })
        return sel_author;
    }

  return (
    <section>

    <h3 className='text-6xl font-montserrat my-4'>Latest Posts</h3>
    <hr />
    <ul>
        {posts.map(post => {
            return (
                /* Post Card */
                <Fade>
                <div className={style.card}>
                    <img className={style.card_image} src={post.coverImage} alt="This is a "/>
                    <div className=''>
                        <h5 className={style.card_title}>{post.title}</h5>
                        <span className={style.post_createdAt}>{post.createdAt}</span>
                        <div className='flex items-center'>

                            <img className={style.author_avatar} src={getAuthorById(post.authorId).avatar} alt="Meaningful text"/>
                            <span className={style.author_name}>{getAuthorById(post.authorId).name}</span>

                        </div>
                        <p className={style.card_content}>{post.content}</p>
                        <a className={style.read_more_btn} href={"/post/"+post.id}>Read More...</a>
                    </div>

                </div>
                </Fade>
            )
        })}
    </ul>
    </section>
  )
}

export default Posts