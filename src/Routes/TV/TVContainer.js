import TVPresenter from "./TVPresenter";
import React,{Component} from 'react';
import { tvApi } from "api";

export default class TVContainer extends Component {
    state={
        topRated:null,
            popular:null,
            airingToday:null,
            loading:true,
            error:null
    }
    async componentDidMount() {
        try{
            const {data:{results:airingToday}} = await tvApi.airingToday();
            const {data:{results:popular}} = await tvApi.popular();
            const {data:{results:topRated}} = await tvApi.topRated();
            
            this.setState({popular,topRated,airingToday});
            
        }catch{
            this.setState({error: "Can't Find TV Information."});
        }finally {
            this.setState({loading:false});
        }
    }
    render() {
        const {
            topRated,
            popular,
            airingToday,
            loading,
            error
        } = this.state;
        return <TVPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loading={loading}
        error={error}
        />;

    }
}