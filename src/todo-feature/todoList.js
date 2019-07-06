import React from 'react'
import {Link} from 'react-router-dom';

export default function todoList() {
    return (
        <div>
            <div style={{textAlign : 'right',marginTop:'20px'}}>
                    <Link to='/new' className='ui button primary'>
                        Create Todo
                    </Link>
                </div>
        </div>
    )
}
