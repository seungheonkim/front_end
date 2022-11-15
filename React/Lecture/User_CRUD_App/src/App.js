import React, {useState} from 'react';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";


function App() {
    const [usersList, setUsersList] = useState([]);

    const adduserHandler = (userName, userAge) => {
        setUsersList((prevUsersList) => {
            return [...prevUsersList, {
                id: Math.random().toString(),
                name: userName,
                age: userAge}];
        })
    }

    return (
        <React.Fragment>
            <AddUser onAddUser={adduserHandler}/>
            <UsersList users={usersList}/>
        </React.Fragment>
    );
}

export default App;
