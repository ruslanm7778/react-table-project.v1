import React from "react";
import Table_inside from './Table_inside'



let tableData = [
    {
        name: 'Amancio Ortega',
        birth_data: 1990,
        height: 177,
        mass: 65,
    }, {
        name: 'Bernard Arnault',
        birth_data: 1991,
        height: 178,
        mass: 67,
    }, {
        name: 'Bill Gates',
        birth_data: 1992,
        height: 178,
        mass: 68,
    }, {
        name: 'Carlos Sim Helu',
        birth_data: 1993,
        height: 188,
        mass: 69,
    }, {
        name: 'Jeff Bezos',
        birth_data: 1994,
        height: 184,
        mass: 70,
    }, {
        name: 'Larry Ellison',
        birth_data: 1995,
        height: 177,
        mass: 71,
    }, {
        name: 'Larry Page',
        birth_data: 1996,
        height: 173,
        mass: 72,
    }, {
        name: 'Mark Zuckerberg',
        birth_data: 1997,
        height: 171,
        mass: 73,
    }, {
        name: 'Michael Bloomberg',
        birth_data: 1998,
        height: 170,
        mass: 74,
    }, {
        name: 'Warren Buffet',
        birth_data: 1999,
        height: 190,
        mass: 75,
    }
];
let filteredList=tableData;
// noinspection JSAnnotator


class Table_outside extends React.Component {

    constructor(props){
        super(props);
        this.filterList = this.filterList.bind(this);
    }
    // фильтрация списка

    filterList(e){

        filteredList =[];

          {tableData.filter(data => data.name.toLowerCase().includes(`${e.target.value.toLowerCase()}`)).map(filteredName => (

              filteredList.push(filteredName)


          ))}

        console.log(filteredList)

    }


    state = {
        name: undefined,
        birth_data: undefined,
        height: undefined,
        mass: undefined,
        reload: false
    }
    refreshPage = () => {
        this.setState(
            {reload: true},
            () => this.setState({reload: false})
        )
    }
    /*

       getDataApp = async (e) => {
         //   e.preventDefault();

            for(let i=1; i<5; i++) {
                const people_number = i;

                const api_call = await fetch(`https://swapi.dev/api/people/${people_number}`);
                const data = await api_call.json();
                if (people_number) {
                    this.setState({
                        name: data.name,
                        birth_year: data.birth_year,
                        height: data.height,
                        mass: data.mass
                    });

                    console.log(this.state);
                    tableData.push(this.state);
                }

            }

}


     componentDidMount(){
        this.getDataApp().then(r => {});


     }
*/
    onChange=(e)=>{
        this.filterList(e)
        this.refreshPage(e)
    }





    render(){
        return (
    <div className="text-left">
        <input placeholder="Search" onChange={this.onChange} />
        <Table_inside data={filteredList} />

    </div>
        )  }
};

export default Table_outside;