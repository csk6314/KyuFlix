import DetailPresenter from "./DetailPresenter";
import React, { Component } from 'react';
import { moviesApi, tvApi } from "api";

export default class DetailContainer extends Component {
    constructor(props) {
        super(props);
        const {location:{pathname}} = props;
        this.state = {
            result: null,
            loading: true,
            error: null,
            isMovie:pathname.includes("/movie/"),
        };
    }
    async componentDidMount() {
        const { match: { params: { id } }, history: { push } } = this.props;
        const parseId = parseInt(id);
        const{isMovie} = this.state;
        if(isNaN(parseId)) {
            return push("/");
        }
        let result = null;
        try{
            if(isMovie) {
            ({data:result} = await moviesApi.movieDetail(parseId));
            } else {
                ({data:result} = await tvApi.tvDetail(parseId));
            }
        }catch{
            this.setState({error:"Can't Find anything."});
        }finally {
            this.setState({loading:false,result});
        }

    }
    render() {
        console.log(this.state.result);
        return <DetailPresenter
            {...this.state}
        />;

    }
}