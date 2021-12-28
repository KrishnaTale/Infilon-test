import React from 'react'

function ReadOnlyRow({contact, handleEditClick, handleDeleteClick}) {
    return (
        <tr>
            <td>{contact.email}</td>
            <td>{contact.first_name}</td>
            <td>{contact.last_name}</td>
            <td>
                <button onClick={(event) => 
                    handleEditClick(event, contact)}>
                Edit
                </button>
                <button type = "button" onClick={() => 
                    handleDeleteClick(contact.id)}>
                Delete
                </button>
            </td>
        </tr>
    )
}

export default ReadOnlyRow
