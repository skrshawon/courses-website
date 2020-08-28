import React from 'react';
import './Header.css';

const   Header = () => {
    return (
        <div className="header">
        
            <nav>
                    <a href="/University">University</a>
                    <a href="/review">Order Review</a>
                    <a href="/inventory">Inventory</a>
            </nav>
            
        </div>
    );
};

export default  Header;