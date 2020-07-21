import React from 'react'

import './blogpage.css'

import { Link, Route } from 'react-router-dom'
import blogData from './blogData'

const BlogPage = () => {
    return (
        <div className='main-contant wrap'>
            <aside className="col-md-3 sidebar">
                <div className="block-title"><h2>RECENT ARTICLES</h2></div>
                <div className="widget-content">
                    <ul>
                        { blogData.slice(0,3).map(post => (
                                <li key={post.id} className="blogpost-title">
                                    <Link to={`/blog/${post.id}`} >{post.name}</Link>
                                </li>
                        ))}
                    </ul>
                </div>
            </aside>
            <div className="col-md-9 post-list">
                <Route exact path='/blog' render={() =>
                    blogData.sort((a,b)=> b.id - a.id).map(post => (
                        <section key={post.id} className="blog-section">
                            <h2><Link to={`/blog/${post.id}`}>{post.name}</Link></h2>
                            <p className="post-meta">
                                Posted <time>{post.date}</time> | By {post.author}
                            </p>
                            <p className="post-image">
                                <img src={post.image} alt={post.date}/>
                            </p>
                            <p className="post-desc">
                                {post.description}
                            </p>
                            <p className="post-link">
                                <Link to={`/blog/${post.id}`}>Read More</Link>
                            </p>
                        </section>
                    ))
                }/>
                <Route path='/blog/:postId' render={({
                    match,
                    currentPostIndex = blogData.findIndex(post => post.id === Number(match.params.postId)),
                }) =>
                    blogData.filter(post => post.id === Number(match.params.postId)).map(post => (
                        <section key={post.id} className="blog-section">
                            <h1>{post.name}</h1>
                            <p className="post-meta">
                                Posted <time>{post.date}</time> | By {post.author}
                            </p>
                            <p className="post-image">
                                <img src={post.image} alt={post.date}/>
                            </p>
                            <div className="post-content" dangerouslySetInnerHTML={{
                                __html:post.content
                            }}></div>
                            <div className="post-nav">
                                { currentPostIndex === 0 ?
                                        <span className='wrap right'>
                                            <Link to={`/blog/${blogData[currentPostIndex + 1].id}`}>Next post →</Link>
                                        </span> :
                                    currentPostIndex === blogData.length - 1 ?
                                        <span className='prev'>
                                            <Link to={`/blog/${blogData[currentPostIndex - 1].id}`}>← Previous post</Link>
                                        </span> :
                                    <div className='wrap space-between'>
                                        <span className='prev'>
                                            <Link to={`/blog/${blogData[currentPostIndex - 1].id}`}>← Previous post</Link>
                                        </span>
                                        <span className='next'>
                                            <Link to={`/blog/${blogData[currentPostIndex + 1].id}`}>Next post →</Link>
                                        </span> 
                                    </div>
                                }
                            </div>         
                        </section>
                    ))
                }/>
            </div>
        </div>
    )
}

export default BlogPage
