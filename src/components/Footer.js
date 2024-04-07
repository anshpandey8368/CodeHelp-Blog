import React from 'react';
import  { useContext } from 'react';
import './Footer.css';
import { AppContext } from '../context/AppContext';

const Footer = () => {
    const { page, totalPages, handlePageChange } = useContext(AppContext);


    return (
        <div className='footer-wrapper'>
            <div className='ftr'>
                <div className='btn'>
                    { page > 1 &&
                    (<button onClick={ () => handlePageChange(page-1)}>
                        Previous
                        </button>)
                    }
                    
                    {  page < totalPages && 
                    (<button className='next-btn' onClick={ () => handlePageChange(page+1)}>
                        Next
                        </button>)
                    }
                    </div>
                
                    <div>
                    <p>
                        Page {page} of {totalPages}
                    </p>
                    </div>
            </div>
        </div>
    )
}

export default Footer;
