import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from "react-router-dom";
import PlacesRenderer from "./PlacesRenderer";
import Alert from '@material-ui/lab/Alert';
export class Places extends Component {
    constructor(props) {
        super(props);
        this.state = { page: 1,
            places:[],
            isLoading: false,
            isError: false,
            loadedAll: false,
            limit: 10
        };
    }

    componentDidMount() {
        this.getPlaces();
    }

    incrementPage() {
        this.setState({page: this.state.page+1})
    }

    async getPlaces() {
        const {page, limit} =this.state;
        const lastIndex= page*limit;
        const firstIndex = lastIndex-limit;


        if (!this.state.loadedAll && !this.state.isLoading) {
            this.setState({isLoading: true, isError: false})
            try {
                const res = await axios.get('http://localhost:8080/api/v1/places', {
                    params: {
                        page: page,
                        limit: limit
                    }
                });
                const places = res.data.data;
                const currentPlaces= places.slice(firstIndex,lastIndex);

                this.setState({ places: this.state.places.concat(currentPlaces), isLoading: false });
                if(currentPlaces.length >= 10) {
                    this.incrementPage()
                } else {
                    this.setState({loadedAll: true})
                }
            } catch (err) {
                this.setState({isLoading: false, isError: true})
            }
        }
    }

    displayErrorBanner() {
        return (
            <Alert severity="error" onClose={() => {this.setState({isError: false})}}>Something is wrong, please try again!</Alert>
        )
    }

    render() {

        return (
            <Router>
                {this.state.isError && this.displayErrorBanner()}
                <PlacesRenderer places={this.state.places} isLoading={this.state.isLoading} loadedAll={this.state.loadedAll} loadMore={()=>this.getPlaces()}/>
            </Router>
        );
    }
}

export default Places;