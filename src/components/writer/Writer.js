import React from 'react';
import './Writer.css'

const Writer = (props) => {
    console.log(props.writer);
    const { name, famous, age, books, img, salary } = props.writer;
    return (
        <div className="col-md-4">
            <div className="card h-100  text-center">
                <img src={img} className="card-img-top rounded-circle w-50 mx-auto" alt="Not found" />
                <div className="card-body">
                    <h5>Name:{name}</h5>
                    <h5>Famous for:{famous}</h5>
                    <h5>Age:{age}</h5>
                    <h5>Books:{books}</h5>
                    <h5>Salary:{salary}</h5>
                </div>
                <div class="card-footer">
                    <button type="button" class="btn btn-primary "><i class="fas fa-shopping-cart"></i>Add to Cart</button>
                </div>
            </div>
            
        </div>
    );
};

export default Writer;