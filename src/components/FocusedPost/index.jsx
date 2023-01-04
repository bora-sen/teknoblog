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
        <img className="w-full h-96 object-cover" src={sel_post.coverImage} alt="Blog Post Cover" />

        <div className='flex mx-1 items-center mt-1'>
          <img className='w-8 h-8 rounded-full mr-1' src={sel_author.avatar} alt={sel_author.name}/>
          <span>{sel_author.name}</span>
          <span className='ml-2 text-xs text-gray-400'>{sel_post.createdAt}</span>
        </div>


        <h2 className='text-4xl font-montserrat mb-1'>{sel_post.title}</h2>
        <p>{sel_post.content}</p>

    </div>
  )
}

export default FocusedPost