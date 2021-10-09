import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Writer from '../writer/Writer';

const Body = () => {

    const [writers, setWriters] = useState([]);
    useEffect(() => {
        fetch('./writers.JSON')
            .then(res => res.json())
            .then(data => setWriters(data))
    },[])
    return (
        <div className="row ms-3">
            <div className="writers row col-md-9 g-4 ">
                {
                    writers.map(writer => <Writer
                        writer={writer}
                    ></Writer>)
                }
            </div>
            <div className="cart col-md-3 mt-5">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Body;