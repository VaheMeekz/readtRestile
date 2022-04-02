import React from 'react';
import UserList from "./components/UserList";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card, {CardVariant} from "./components/Card";
import {Button} from "react-bootstrap";

function App() {
  return (
    <div className="App mt-3">
        {/*<Card width={"200px"} height={"200px"}*/}
        {/*      variant={CardVariant.succsess}*/}
        {/*    // onClick={(num)=>console.log("click",num)}*/}
        {/*>*/}
        {/*    <Button variant="danger">pashd</Button>*/}
        {/*    </Card>*/}
        <UserList/>
    </div>
  );
}

export default App;
