import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class  Test2 extends React.Component {
    render() { 
        return ( 
            <div>
            <div className='navbar'>
                <h1>welcom to my test2</h1>
                </div>
                <p>this website is created for testig.</p>
                <h2>thank you for visiting my site</h2>
            </div>
         );
    }
}
 ReactDOM.render(<Test2/>,document.getElementById('root'));
