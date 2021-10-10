import React from 'react';

const Writer = (props) => {
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
                <div className="card-footer">
                    <button
                        onClick={()=>props.handleAddToCart(props.writer)}
                        type="button" className="btn btn-primary ">
                        <i className="fas fa-plus-circle"
                        ></i>Hire Writer</button>
                </div>
            </div>
            
        </div>
    );
};

export default Writer;