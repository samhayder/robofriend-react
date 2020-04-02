import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBundary from '../Components/ErrorBundary';
import  './App.css'

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    };
    //Search input change
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    };
    //Fetch API User for Robot
    componentDidMount (){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(user => this.setState({robots: user}))
    };

    render(){
        //Filter Robots
        const {robots, searchfield} = this.state;
        const filterRobot = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });

        return !robots.length ?
             <h1>Loading...</h1> :
            (
                <div className="tc">
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBundary>
                            <CardList robots = {filterRobot} />
                        </ErrorBundary>
                    </Scroll>
                </div>
            )
    }
        
};

export default App;