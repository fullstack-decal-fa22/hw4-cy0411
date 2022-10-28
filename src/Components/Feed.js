import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!

    /* Use the map() function to render multiple Blocks! */
     // TODO: edit this variable
    const [allposts, pushPost] = useState([]);
    

    return (
        <div>
            <Menu handleClick = {click}></Menu>

            {/* Below is where all of your Blocks should render! */}
            {allposts.map((color, index) => <Block key = {index} text = {color}/>)}
        </div>
    );
    function click(color){
        pushPost(allposts => [color, ...allposts]);
    }
}

export default Feed;