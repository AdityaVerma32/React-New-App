import React, { Component } from 'react';
import NewsItem from './NewsItem.js';
import Spinner from './Spinner.js';


export default class News extends Component {

    constructor() {
        super();
        this.state = {
            totalPages: this.totalPages,
            article: [],
            loading: false,
            page: 1,
            apiKey: process.env.REACT_APP_API_KEY
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();

        console.log(parsedData);
        this.setState({
            totalPages: parsedData.totalResults,
            article: parsedData.articles,
            loading: false,
        })
    }

    handleNextClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            totalPages: parsedData.totalResults,
            article: parsedData.articles,
            page: this.state.page + 1,
            loading: false,
        })
    }
    handlePrevclick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            totalPages: parsedData.totalResults,
            article: parsedData.articles,
            page: this.state.page - 1,
            loading: false,
        })
    }

    render() {

        return (

            <>
                <h2 className='text-center'>News - Top Headlines</h2>
                {this.state.loading && <Spinner />}
                <div className="container my-3">
                    <div className="row">
                        {this.state.article?.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>

                    <div className="container d-flex justify-content-between">

                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevclick}>&larr; Prev</button>
                        <button disabled={Math.ceil(this.state.totalPages / this.props.pageSize) === this.state.page ? true : false} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
                </div>

            </>

        )
    }
}
