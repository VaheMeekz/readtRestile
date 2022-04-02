import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../utils/hooks/useTypeSelector";
import {fetchUsers} from "../store/actions/userAction";
import {useActions} from "../utils/hooks/useActions";
import {Button, Container, Spinner} from "react-bootstrap";
import {IAddress, IUser} from "../types/user";

const UserList: React.FC = () => {
    const [data, setData] = useState<any>()
    const [name,setName] = useState<string>()
    const [subject,setSubject] = useState<string>()
    const {users, error, loading} = useTypedSelector(state => state.users)

    const {fetchUsers} = useActions()
    useEffect(() => {
        (fetchUsers())
    }, [])

    useEffect(()=>{
        if(users){
            setData(users)
        }
    },[users])

    const handleAdd = () => {
        if((name !== "" && subject !== "")){
            data.push({id:Date.now(),name,
                email:subject,
                phone: subject,
                username: subject,
                website: subject,
                address:{
                    city: subject,
                    street: subject,
                    suite: subject,
                    zipcode: subject,
                }})
            setName("")
            setSubject("")
        }else {
            alert("nonono!")
        }
    }

    const handleDelete = (id:number) => {
        setData(data.filter((u:IUser) => {
           return  u.id !== id
        }))
    }

    if (loading) {
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{
                height: "100vh"
            }}>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>
        )
    }

    if (error) {
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{
                height: "100vh"
            }}>
                <h1 className="bg-danger text-white p-3">{error}</h1>
            </Container>
        )
    }
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center">
            <input value={name} onChange={e=>setName(e.target.value)}/><br/>
            <input value={subject} onChange={e=>setSubject(e.target.value)}/><br/>
            <Button  variant="danger" onClick={handleAdd}>Add</Button>
            <ul>
                {
                    data && data.map((user: IUser) => {
                        return (
                            <div key={user.id} className="mt-3 p-3 mb-2 bg-warning text-dark" style={{width: "500px"}}>
                                name - {user.name}<br/>
                                email - {user.email}<br/>
                                user name -{user.username}<br/>
                                phone -{user.phone}<br/>
                                website - {user.website}<br/>
                                Address Info
                                <ul>
                                    <li>{user.address.city}</li>
                                    <li>{user.address.street}</li>
                                    <li>{user.address.suite}</li>
                                    <li>{user.address.zipcode}</li>
                                </ul><br/>
                                <Button variant="danger" onClick={()=>handleDelete(user.id)}>Delete</Button>
                            </div>
                        )
                    })
                }
            </ul>
        </Container>
    );
};

export default UserList;