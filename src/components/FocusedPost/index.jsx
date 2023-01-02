import React from 'react';
import dataset from '../../dataset.json';

function FocusedPost() {
    let post_id = 1;
    let posts = dataset.posts;
    let authors = dataset.authors;


    let sel_post = posts.find(post => {
        return post.id === post_id;
    })
    let sel_author = authors.find(author => {
        return author.id === sel_post.id;
    })

  return (
    <div>
        <img src={sel_post.coverImage} alt="Post Cover"/>
        <h2>{sel_post.title}</h2>
        <div>
            <img src={sel_author.avatar} alt="Avatar"/>
            <h3>{sel_author.name}</h3>
            <hr />
            <p>{sel_post.content}</p>
        </div>

    </div>

  )
}

export default FocusedPost