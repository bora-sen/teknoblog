import React from 'react';
import { useParams } from 'react-router-dom';
import dataset from '../../dataset.json';

function FocusedPost() {
    let param = useParams();
    let local_id = param.id;
    let sel_post = dataset.posts.find(post => post.id === parseInt(local_id));
    let sel_author = dataset.authors.find(author => author.id === sel_post.authorId);
    console.log("Displaying Post: "+sel_post.title);
    console.log("By:  "+sel_author.name);

  return (
    <div>

    </div>
  )
}

export default FocusedPost