import React, { Component } from 'react';
import NewsItem from './NewsItem.js';
import Spinner from './Spinner.js';

export default class News extends Component {

    articles = [
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": null,
            "title": "South Africa cricket great Procter dies aged 77",
            "description": "Former South Africa all-rounder Mike Procter dies aged 77, his family say.",
            "url": "http://www.bbc.co.uk/sport/cricket/68292770",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/120F5/production/_132637937_gettyimages-81733529.jpg",
            "publishedAt": "2024-02-17T19:52:23.7543254Z",
            "content": "Mike Procter (left) and Barry Richards both had limited international careers as South Africa were banned between 1970 and 1991\r\nFormer South Africa all-rounder Mike Procter has died aged 77, his fam… [+1557 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        },
        {
            "source": {
                "id": "news24",
                "name": "News24"
            },
            "author": null,
            "title": "News24 | Mike Procter, SA cricket legend and Proteas' first post-isolation coach, dies at 77",
            "description": "World cricketing great Mike Procter died in an Umhlanga private hospital on Saturday afternoon.",
            "url": "https://www.news24.com/sport/cricket/proteas/mike-procter-sa-cricket-legend-and-proteas-first-post-isolation-coach-dies-at-77-20240217",
            "urlToImage": null,
            "publishedAt": "2024-02-17T19:37:01",
            "content": "World cricketing great Mike Procter died in an Umhlanga private hospital on Saturday afternoon."
        }
    ]

    constructor() {
        super();
        console.log("Hello I am inside constructor!");
        this.state = {
            totalPages: this.totalPages,
            article: this.articles,
            loading: false,
            page: 1
        }
    }


    async updateNews() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ced4927a4a5047e882fa1b48a4204e5d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);

        this.setState({
            totalPages: parsedData.totalResults,
            article: parsedData.articles,
            loading: false
        })
    }

    async componentDidMount() {
        // console.log("cdm");
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ced4927a4a5047e882fa1b48a4204e5d&page=2&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);

        // this.setState({
        //     totalPages: parsedData.totalResults,
        //     article: parsedData.articles,
        //     loading: false
        // })
        this.updateNews();
    }

    handleNextClick = async () => {
        // console.log("Next");
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ced4927a4a5047e882fa1b48a4204e5d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // //console.log(parsedData);

        this.setState({
            page: this.state.page + 1,
        })
        this.updateNews();
    }
    handlePrevclick = async () => {
        // console.log("Previous");
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ced4927a4a5047e882fa1b48a4204e5d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // //console.log(parsedData);

        this.setState({
            page: this.state.page - 1,
        })
        this.updateNews();
    }



    render() {

        return (
            <div>
                <div className="container my-3">
                    <h2 className='text-center'>News - Top Headlines</h2>
                    {this.state.loading && <Spinner />}
                    <div className="row">
                        {!this.state.loading && this.state.article.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    <div className="container d-flex justify-content-between">

                        <button disabled={this.state.page > 1 ? false : true} type="button" className="btn btn-dark" onClick={this.handlePrevclick}>&larr; Prev</button>
                        <button disabled={Math.ceil(this.state.totalPages / this.props.pageSize + 1) === this.state.page ? true : false} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}
