import React, { useEffect, useState } from 'react';
import dataset from '../../dataset.json';
import style from './posts.module.css'
import Fade from 'react-reveal/Reveal'
import axios from 'axios';

function Posts() {
    const [loading,setLoading] = useState(true);
    const POSTS_API_URL = "https://63ae9764cb0f90e5145e659e.mockapi.io/posts?p=1&l=4";
    const [posts,setPosts] = useState([]);
    console.log(posts.length)



    useEffect(() => {
        axios.get(POSTS_API_URL).then((req,res) => {
            //console.log(req.data);
            setPosts(req.data)
            setLoading(false);
        }).catch(err => {
            console.log(err.message);
        })
    },[])

    if(!loading){
        return (
            <section>
            <h3 className='text-6xl font-montserrat my-4'>Latest Posts</h3>
            <hr />
            <ul>
                {posts.map(post => {

                    /*
                    {
                        "createdAt": "2022-12-29T15:18:47.840Z",
                        "author_name": "Ms. Brooke Rowe",
                        "author_avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1014.jpg",
                        "title": "Provident aut blanditiis vero.",
                        "content": "Veritatis suscipit ad cumque quasi blanditiis quibusdam animi totam. Corporis deserunt consequuntur alias officiis architecto ab laudantium ducimus. Libero consequuntur explicabo debitis eveniet optio.\nRepellat dicta ratione incidunt consequuntur ipsum velit nulla. Quod libero ullam recusandae expedita tempora. Nam earum fuga dolore officiis.\nIpsa occaecati quos iste molestias aliquam. Vitae similique eaque accusamus enim culpa. Id eligendi excepturi ex culpa porro quis. Voluptatum id voluptatem molestiae assumenda laborum.",
                        "id": "1"
                    },
                    */




                    return (
                        /* Post Card */
                        <Fade>
                        <div className={style.card} key={post.id}>
                            <img className={style.card_image} src={`${post.coverImage}/${post.id}`} alt="This is a "/>
                            <div className=''>
                                <h5 className={style.card_title}>{post.title}</h5>
                                <span className={style.post_createdAt}>{post.createdAt}</span>
                                <div className='flex items-center'>
                                    <img className={style.author_avatar} src={post.author_avatar} alt="Meaningful text"/>
                                    <span className={style.author_name}>{post.author_name}</span>
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
    else{
        return(
            <div>loading..</div>
        )
    }
}

export default Posts