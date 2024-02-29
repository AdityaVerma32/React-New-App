import React, { Component } from 'react';

export class Spinner extends Component {
    render() {

        const component = [];

        for (let i = 0; i < 6; i++) {
            component.push(

                <div className=" col-md-4" key={i}>
                    <div className="card my-3" aria-hidden="true">
                        <img src="..." className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title placeholder-glow">
                                <span className="placeholder col-6"></span>
                            </h5>
                            <p className="card-text placeholder-glow">
                                <span className="placeholder col-7"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-6"></span>
                                <span className="placeholder col-8"></span>
                            </p>
                            <a href="#" tabIndex="-1" className="btn btn-dark disabled placeholder col-6"></a>
                        </div>
                    </div>
                </div>


            )
        }




        return (
            <div className="container my-3">

                <div className="row">
                    {component}
                </div>
            </div>

        )
    }
}

export default Spinner
