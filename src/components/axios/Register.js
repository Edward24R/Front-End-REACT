import axios from "axios"
import { Component } from "react"
import "../../api/db"



export default class registration extends Component{

    constructor(){
        super();
        this.state = {
            user_id: [],
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            submitted: false
        }
        this.handleChange = this.handleChange.blid(this)
    }
    createNewUser = async () => {
        var user = []
        await api.post('/instinct-studio/users', {
        first_name:this.state.first_name,
        last_name:this.state.last_name,
        email:this.state.email,
        password:this.state.password
        })
        .then(response =>{
            if(response.status === 200){
                this.setState({user_id:user})
                this.setState({submitted: true})
                console.log(response.data)
            }
            else if(response.status === 500){alert("User Already Exists")}})
         .then(data => user.push(data[0]));   
    }


    handleChange = name => {event =>{
        this.setState({error:""});
        this.setState({[name]:event.target.value});
    };
    }

    submit_new_user = event =>{
        event.preventDefault();
        const {user_id, first_name, last_name,email, password, submitted} = this.state;
        this.createNewUser();
    };

    render(){
        if(this.state.submitted == true){
            return window.location.href = 'http://localhost:3000/';
        }
    }

    return;

}