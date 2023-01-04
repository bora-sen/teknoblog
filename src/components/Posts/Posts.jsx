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
    <ul>
        {posts.map(post => {
            return (
                /* Post Card */
                <Fade>
                <div className={style.card}>
                    <img className={style.card_image} src={post.coverImage} alt="This is a "/>
                    <div className=''>
                        <h5 className={style.card_title}>{post.title}</h5>
                        <div className={style.author_section}>
                            <img className={style.author_avatar} src={getAuthorById(post.authorId).avatar} alt="Meaningful text"/>
                            <span className={style.author_name}>{getAuthorById(post.authorId).name}</span>
                        </div>
                        <p className={style.card_content}>{post.content}</p>
                        <button className={style.read_more_btn}>Read More..</button>
                    </div>

                </div>
                </Fade>
            )
        })}
    </ul>
  )
}

export default Posts