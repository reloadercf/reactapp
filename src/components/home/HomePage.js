import React, {Component} from 'react';
import MainComponent from "./MainComponent";
import MainForm from "./MainForm";
import Slide from "./Slide";

class HomePage extends Component {

    state = {
        user:{
            name:'Oswaldo',
            age:21,
            available:true,
            hobbies:['Videogames', 'soccer', 'food']
        },
        newHobbie:'',
        obj:{},
    };

    addHobbie = (event) => {
        event.preventDefault();
        let {user, newHobbie} = this.state;
        user.hobbies.push(newHobbie);
        this.setState({user});
        console.log(user);
    };

    handleHobbieText = (event) =>{
        let {newHobbie} = this.state;
        newHobbie = event.target.value;
        this.setState({newHobbie});
        console.log(newHobbie);
    };

    handleText = (e) => {
        let {user} = this.state;
        let field = e.target.name;
        user[field] = e.target.value;
        console.log(user);
        this.setState({user});
    };


    render() {
        let {user, obj, newHobbie} = this.state;
        return (
            <div>
                <Slide />
                <MainForm
                    handleText={this.handleText}
                    newHobbie={newHobbie}
                    handleHobbieText={this.handleHobbieText}
                    addHobbie={this.addHobbie}
                />
                <MainComponent
                    {...user}
                    />
            </div>
        )
    }
}

export default HomePage;