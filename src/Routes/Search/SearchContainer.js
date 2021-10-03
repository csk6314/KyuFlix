import SearchPresenter from "./SearchPresenter";
import React, { Component } from 'react';
import { moviesApi, tvApi } from "api";

export default class SearchContainer extends Component {
    state = {
        tvResult: null,
        movieResult: null,
        searchTerm: "",
        loading: false,
        error: null
    }

    handleSubmit = (event) => {
        
        const {0 :{
            value : searchTerm
        } } = event.target;
        this.setState({
            searchTerm
        },()=>{
            if(searchTerm!=="") {
                this.searchByTerm(searchTerm);
            }
        });
        event.preventDefault();
    };
    searchByTerm = async() => {
      const {searchTerm} = this.state;
      this.setState({loading:true});
      try{
        const { data: {results: movieResult}} = await moviesApi.search(searchTerm);
        const { data: {results: tvResult}} = await tvApi.search(searchTerm); 
        this.setState({tvResult,movieResult});
      } catch {
        this.setState({error: "Can't Find Results."});
      }finally {
          this.setState({loading:false});
      }
    };

    render() {
        return <SearchPresenter
            {...this.state}
            handleSubmit={this.handleSubmit}
        />;

    }
}