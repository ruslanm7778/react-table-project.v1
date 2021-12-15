import React from "react";
import Table_remote_inside from "./Table_remote_inside";



let filteredList=[];
let filteredList2 =[];

class Table_remote_outside extends React.Component {

    constructor(props){
        super(props);
        this.filterList = this.filterList.bind(this);
    }

    state = {
        first_name: undefined,
        last_name: undefined,
        id: undefined,
        email: undefined,
        reload: false
    }

    getDataApp = async (e) => {
        //   e.preventDefault();
        filteredList =[];
        for(let i=0; i<6; i++) {
            const api_call = await fetch(`https://reqres.in/api/users?page=1`);
            const data = await api_call.json();

            this.setState({
                first_name: data.data[i].first_name,
                last_name: data.data[i].last_name,
                id: data.data[i].id,
                email: data.data[i].email

            });
            console.log(data)
            console.log(this.state)
            filteredList.push(this.state);
        }



    }

    componentDidMount(){
        this.getDataApp().then(r => {});


    }


    filterList(e){

        filteredList2 = [];

        {filteredList.filter(data => data.first_name.toLowerCase().includes(`${e.target.value.toLowerCase()}`)).map(filteredName => (

            filteredList2.push(filteredName)


        ))}

    }


    refreshPage = () => {
        this.setState(
            {reload: true},
            () => this.setState({reload: false})
        )
    }

    onChange=(e)=>{

        this.filterList(e)
        this.refreshPage(e)

    }


    render(){
        return (
            <div className="text-left">
                <input placeholder="Search" onChange={this.onChange} />
                <Table_remote_inside data={filteredList2} />

            </div>
        )  }
};

export default Table_remote_outside;