import React from 'react';
import dataset from '../dataset.json';

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
                <div className='flex my-4 p-2 hover:bg-gray-100 transition-colors flex-col sm:flex-row'>
                    <img className=' w-full mb-3 sm:w-48 md:w-96 object-cover mr-4' src={post.coverImage} alt="Post Title Image"/>
                    <div className=''>
                        <h5 className='text-2xl font-montserrat'>{post.title}</h5>
                        <div className='flex items-center my-2'>
                            <img className='rounded-full border-none w-12 mr-2 font-mono' src={getAuthorById(post.authorId).avatar}/>
                            <span className='text-sm'>{getAuthorById(post.authorId).name}</span>
                        </div>
                        <p className='text-md text-ellipsis overflow-hidden h-24'>{post.content}</p>
                        <button className='px-4 bg-indigo-600 hover:bg-indigo-800 transition-colors text-white rounded-sm mt-2'>Read More..</button>
                    </div>

                </div>
            )
        })}
    </ul>
  )
}

export default Posts