import React from 'react';

const Cart = (props) => {
    const { cart} = props;
    let totalCost = 0;
    
    for (const writer of cart) {
        totalCost = totalCost + writer.salary;
        
    }
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h3>Hired Writers :{cart.length}</h3>
                    <h3>Writer's Cost :{totalCost}</h3>
                    {
                        cart.map(writer => <li className="bg-primary text-white fw-bold text-center mb-2">
                            {writer.name}
                        </li>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Cart;