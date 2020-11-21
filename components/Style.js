import React from 'react';
import {Link} from 'react-router-dom';

function Style({song}) {
    return (
        
        <Link to={`styles/${song.style}`}>
            <div>
                {/* <i className="ri-customer-service-fill"></i> */}
                <p>🎧  {song.style}</p>
            </div>
        </Link>
    )
}

export default Style
