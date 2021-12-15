import React from "react";

const sortTypes = {
    up: {
        class: '∨',
        fn: (a, b) => a.last_name.localeCompare(b.last_name)
    },
    down: {
        class: '∧',
        fn: (a, b) => b.last_name.localeCompare(a.last_name)
    },
    default: {
        class: '⬍',
        fn: (a, b) => a.last_name.localeCompare(b.last_name)
    }
}

const sortTypesByName = {
    up: {
        class: '∨',
        fn: (a, b) => a.first_name.localeCompare(b.first_name)
    },
    down: {
        class: '∧',
        fn: (a, b) => b.first_name.localeCompare(a.first_name)
    },
    default: {
        class: '⬍',
        fn: (a, b) => a.first_name.localeCompare(b.first_name)
    }
}
const sortTypesByHeight = {
    up: {
        class: '∨',
        fn: (a, b) => a.id - b.id
    },
    down: {
        class: '∧',
        fn: (a, b) => b.id - a.id
    },
    default: {
        class: '⬍',
        fn: (a, b) => a.id - b.id
    }
}
const sortTypesByMass = {
    up: {
        class: '∨',
        fn: (a, b) => a.email.localeCompare(b.email)
    },
    down: {
        class: '∧',
        fn: (a, b) => b.email.localeCompare(a.email)
    },
    default: {
        class: '⬍',
        fn: (a, b) => a.email.localeCompare(b.email)
    }
}
let pressed_button = undefined;

class Table_remote_inside extends React.Component {

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
        pressed_button = "first_name";

    };
    onClick_birth_year=(event)=>{
        this.onSortChange(event);
        pressed_button = "last_name";
    };
    onClick_height=(event)=>{
        this.onSortChange(event);
        pressed_button = "id";
    };
    onClick_mass=(event)=>{
        this.onSortChange(event);
        pressed_button = "email";
    };
    render() {
        const { data } = this.props;
        const { currentSort } = this.state;
        return (
            data.length > 0 && (
                <table className="table">

                    <thead>
                    <tr>
                        <th>first_name
                            <button onClick={this.onClick_name}>
                                {`${sortTypesByName[currentSort].class}`}
                            </button></th>
                        <th>
                            last_name
                            <button onClick={this.onClick_birth_year}>
                                {`${sortTypes[currentSort].class}`}
                            </button>
                        </th>
                        <th>
                            id
                            <button onClick={this.onClick_height}>
                                {`${sortTypes[currentSort].class}`}
                            </button>
                        </th>
                        <th>
                            email
                            <button onClick={this.onClick_mass}>
                                {`${sortTypes[currentSort].class}`}
                            </button>
                        </th>
                    </tr>
                    </thead>

                    { (pressed_button === "first_name")? (
                        <tbody>
                        {[...data].sort(sortTypesByName[currentSort].fn).map(p => (
                            <tr>
                                <td>{p.first_name}</td>
                                <td>{p.last_name}</td>
                                <td>{p.id}</td>
                                <td>{p.email}</td>
                            </tr>
                        ))}
                        </tbody>
                    ) : (
                        (pressed_button === "last_name")?
                            ( <tbody>
                            {[...data].sort(sortTypes[currentSort].fn).map(p => (
                                <tr>
                                    <td>{p.first_name}</td>
                                    <td>{p.last_name}</td>
                                    <td>{p.id}</td>
                                    <td>{p.email}</td>
                                </tr>
                            ))}
                            </tbody>):(
                                (pressed_button === "id")?
                                    (

                                        <tbody>
                                        {[...data].sort(sortTypesByHeight[currentSort].fn).map(p => (
                                            <tr>
                                                <td>{p.first_name}</td>
                                                <td>{p.last_name}</td>
                                                <td>{p.id}</td>
                                                <td>{p.email}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    ): (
                                        (pressed_button === "email")?
                                            (
                                                <tbody>
                                                {[...data].sort(sortTypesByMass[currentSort].fn).map(p => (
                                                    <tr>
                                                        <td>{p.first_name}</td>
                                                        <td>{p.last_name}</td>
                                                        <td>{p.id}</td>
                                                        <td>{p.email}</td>
                                                    </tr>
                                                ))}
                                                </tbody>) :(
                                                <tbody>
                                                {[...data].sort(sortTypes[currentSort].fn).map(p => (
                                                    <tr>
                                                        <td>{p.first_name}</td>
                                                        <td>{p.birth_data}</td>
                                                        <td>{p.id}</td>
                                                        <td>{p.email}</td>
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

export default Table_remote_inside;