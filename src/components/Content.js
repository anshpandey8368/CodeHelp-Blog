import React, { useContext } from 'react';
import './Content.css';
import Spinner from './Spinner';
import { AppContext } from '../context/AppContext';

const Content = () => {
    const { loading, posts } = useContext(AppContext);
    
    if (loading || !posts || posts.length === undefined) {
        return <Spinner />;
    }

    if (posts.length === 0) {
        return (
            <div className='content-wrapper'>
                <div className='main-page'>
                    <p>No Post Found</p>
                </div>
            </div>
        );
    }

    return (
        <div className='content-wrapper'>
            <div className='main-page'>
                {posts.map((post) => (
                    <div key={post.id} className="card">
                        <div className="card-content">
                            <p>{post.title}</p>
                            <p>
                                By <span>{post.author}</span> on <span>{post.category}</span>
                            </p>
                            <p>{post.content}</p>
                        </div>
                        <div className="tags">
                            {post.tags.map((tag, index) => (
                                <span key={index} className="tag">#{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Content;
