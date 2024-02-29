import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countryName: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({ countryName: event.target.value });
    };

    // convertToCode=(ele)=>{
        
    // }

    handleClick = () => {
        console.log(this.state.countryName)
        //this.convertToCode(this.state.countryName)
        this.setState({
            countryName:''
        })
    }

    


    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="#">New App</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/business">Business</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/general">General</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/health">Health</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/science">Science</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/sports">Sports</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/technology">Technology</Link></li>
                            </ul>
                            <div className="d-flex">
                                <input className="form-control me-2" type="search" value={this.state.countryName} onChange={this.handleInputChange} placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" onClick={this.handleClick} type="submit">Search</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}


