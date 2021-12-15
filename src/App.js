import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Home from "./component/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table_outside from "./component/Table_outside";
import Table_remote_outside from "./component/Table_remote_outside";

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Home />
    },
    {
        path: "/table_outside",
        main: () => <Table_outside />
    },
    {
        path: "/table1",
        main: () => <Table_remote_outside />
    }
];

class App extends React.Component {
    state = {
        name: undefined,
        birth_year: undefined,
        height: undefined,
        mass: undefined
    }

    render(){
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div style={{ display: "flex" }}>
                <div
                    style={{
                        padding: "10px",
                        width: "10%",
                        background: "#f0f0f0"
                    }}
                >
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/table_outside" >Table_local</Link>
                        </li>
                        <li>
                            <Link to="/table1" >Table_remote</Link>
                        </li>

                    </ul>
                </div>

                <div style={{ flex: 1, padding: "10px" }}>
                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.main />}
                            />
                        ))}
                    </Switch>
                </div>
            </div>

        </BrowserRouter>
    );
};
}

export default App;