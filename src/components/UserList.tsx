import React, {useEffect} from 'react';
import {useTypedSelector} from "../utils/hooks/useTypeSelector";
import {fetchUsers} from "../store/actions/userAction";
import {useActions} from "../utils/hooks/useActions";
import { Container, Spinner} from "react-bootstrap";

const UserList: React.FC = () => {
    const {users,error,loading} = useTypedSelector(state => state.users)
    const {fetchUsers} = useActions()
    useEffect(()=>{
        (fetchUsers())
    },[])

    if(loading){
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{
                height:"100vh"
            }}>
            <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
            </Container>
        )
    }

    if(error){
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{
                height:"100vh"
            }}>
            <h1 className="bg-danger text-white p-3">{error}</h1>
            </Container>
        )
    }
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center">
            <ul>
            {
                users.map(user => {
                    return(
                        <div key={user.id} className="mt-3 p-3 mb-2 bg-warning text-dark">
                            {user.name}
                        </div>
                    )
                })
            }
            </ul>
        </Container>
    );
};

export default UserList;