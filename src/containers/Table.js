import React, {useEffect, useState, Fragment} from 'react';
import {axios} from "axios";
import "./table.css";
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';
//import { setTable } from "../redux/actions/tableActions";
//import {useDispatch} from "react-redux";

function Table() {

    let result;
    const [contacts, setContacts] = useState();
    //const dispatch = useDispatch();
    const [editContactId, setEditContactId] =useState(null);

    const [editFormData , setEditFormData] = useState({
      "email" : "",
      "first_name" :"",
      "last_name" :  "",
    })

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1").then((resp) => {
      result = resp.json().then((result) => {
        setContacts(result.data);
      }); return result;
    });
  }, []);
  //dispatch(setTable(result.data));
  //console.log("Row :"  );
  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValue ={
      email : contact.email,
      first_name : contact.first_name,
      last_name :  contact.last_name,
    }

    setEditFormData(formValue);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = {...editFormData};
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact ={
      email : editFormData.email,
      first_name : editFormData.first_name,
      last_name : editFormData.last_name
    }

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) =>  contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
  };

  const handleCancelClick = () =>{
    setEditContactId(null);
  }

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index,1);

    setContacts(newContacts);

  }
  

     return (
      <div className='app-container'>
        <form onSubmit={handleEditFormSubmit}>
          <table>
          <thead>
            <tr>
              <th>Email Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts?.map((contact)=> (
              <Fragment>
                {editContactId === contact.id?
                 (<EditableRow 
                  contact ={contact} 
                  editFormData ={editFormData} 
                  handleEditFormChange ={handleEditFormChange}
                  handleCancelClick = {handleCancelClick}/>) : 
                ( <ReadOnlyRow contact ={contact} 
                  handleEditClick ={handleEditClick}
                  handleDeleteClick ={handleDeleteClick}/>)
                }                
              </Fragment>  
            ))}
          </tbody>
        </table>
      </form>
      </div>
    )
}

export default Table;
