import React from "react";

const sortTypes = {
    up: {
        class: '∨',
        fn: (a, b) => a.birth_data - b.birth_data
    },
    down: {
        class: '∧',
        fn: (a, b) => b.birth_data - a.birth_data
    },
    default: {
        class: '⬍',
        fn: (a, b) => a.birth_data - b.birth_data
    }
}

const sortTypesByName = {
    up: {
        class: '∨',
        fn: (a, b) => a.name.localeCompare(b.name)
    },
    down: {
        class: '∧',
        fn: (a, b) => b.name.localeCompare(a.name)
    },
    default: {
        class: '⬍',
        fn: (a, b) => a.name.localeCompare(b.name)
    }
}
const sortTypesByHeight = {
    up: {
        class: '∨',
        fn: (a, b) => a.height - b.height
    },
    down: {
        class: '∧',
        fn: (a, b) => b.height - a.height
    },
    default: {
        class: '⬍',
        fn: (a, b) => a.height - b.height
    }
}
const sortTypesByMass = {
    up: {
        class: '∨',
        fn: (a, b) => a.mass - b.mass
    },
    down: {
        class: '∧',
        fn: (a, b) => b.mass - a.mass
    },
    default: {
        class: '⬍',
        fn: (a, b) => a.mass - b.mass
    }
}
let pressed_button = undefined;

class Table_inside extends React.Component {

    state = {
        currentSort: 'default'
    }

    onSortChange = () => {
        const { currentSort } = this.state;
        let nextSort;

        if(currentSort === 'down') nextSort = 'up';
        else if(currentSort === 'up') nextSort = 'default';
        else if(currentSort === 'default') nextSort = 'down';

        this.setState({
            currentSort: nextSort
        })
    };

    onClick_name=(event)=>{
        this.onSortChange(event)
        pressed_button = "name";

    };
    onClick_birth_year=(event)=>{
        this.onSortChange(event);
        pressed_button = "birth_data";
    };
    onClick_height=(event)=>{
        this.onSortChange(event);
        pressed_button = "height";
    };
    onClick_mass=(event)=>{
        this.onSortChange(event);
        pressed_button = "mass";
    };
    render() {
        const { data } = this.props;
        const { currentSort } = this.state;
        return (
            data.length > 0 && (
            <table className="table">

                <thead>
                <tr>
                    <th>Name
                        <button onClick={this.onClick_name}>
                            {`${sortTypesByName[currentSort].class}`}
                        </button></th>
                    <th>
                        Birth year
                        <button onClick={this.onClick_birth_year}>
                            {`${sortTypes[currentSort].class}`}
                        </button>
                    </th>
                    <th>
                        Height
                        <button onClick={this.onClick_height}>
                            {`${sortTypes[currentSort].class}`}
                        </button>
                    </th>
                    <th>
                        Mass
                        <button onClick={this.onClick_mass}>
                            {`${sortTypes[currentSort].class}`}
                        </button>
                    </th>
                </tr>
                </thead>

                { (pressed_button === "name")? (
                <tbody>
                {[...data].sort(sortTypesByName[currentSort].fn).map(p => (
                    <tr>
                        <td>{p.name}</td>
                        <td>{p.birth_data}</td>
                        <td>{p.height}</td>
                        <td>{p.mass}</td>
                    </tr>
                ))}
                </tbody>
                ) : (
                    (pressed_button === "birth_data")?
                        ( <tbody>
                    {[...data].sort(sortTypes[currentSort].fn).map(p => (
                        <tr>
                            <td>{p.name}</td>
                            <td>{p.birth_data}</td>
                            <td>{p.height}</td>
                            <td>{p.mass}</td>
                        </tr>
                    ))}
                    </tbody>):(
                            (pressed_button === "height")?
                                (

                        <tbody>
                        {[...data].sort(sortTypesByHeight[currentSort].fn).map(p => (
                            <tr>
                                <td>{p.name}</td>
                                <td>{p.birth_data}</td>
                                <td>{p.height}</td>
                                <td>{p.mass}</td>
                            </tr>
                        ))}
                        </tbody>
                        ): (
                                    (pressed_button === "mass")?
                                        (
                                    <tbody>
                                    {[...data].sort(sortTypesByMass[currentSort].fn).map(p => (
                                        <tr>
                                            <td>{p.name}</td>
                                            <td>{p.birth_data}</td>
                                            <td>{p.height}</td>
                                            <td>{p.mass}</td>
                                        </tr>
                                    ))}
                                    </tbody>) :(
                                            <tbody>
                                            {[...data].sort(sortTypes[currentSort].fn).map(p => (
                                                <tr>
                                                    <td>{p.name}</td>
                                                    <td>{p.birth_data}</td>
                                                    <td>{p.height}</td>
                                                    <td>{p.mass}</td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        )

                                )


                        )
                )


                }



            </table>
        )


        )
    }
}

export default Table_inside;