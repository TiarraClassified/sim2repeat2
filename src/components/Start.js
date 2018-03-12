import React, { Component } from 'react';
import axios from 'axios';

export default class Start extends Component{

    constructor(){
        super()
        this.state={
            houses: []
        }
    }

    componentWillMount(){
        axios.get('/api/getHouses').then(res=>{
            console.log(res.data)
            this.setState({
                houses: res.data
            })
        })
    }

    renderHouse(house){
        console.log(house.name)
        return (
            <div>{house.name}</div>
        )
    }

    render(){
        let things = this.state.houses.map(house=>{
// sim3: 83F
            return this.renderHouse(house);
            //  <div>house</div>
            
        })

        console.log(things)

        return(
            <div>Start

            {things}
            {/* {JSON.stringify(things)} this gets a circular structure error when it has to convert a div. figure out why */}

            </div>
        )
    }
}