import React from 'react'

function EditableRow({ editFormData , handleEditFormChange, handleCancelClick}) {
    return (
        <tr>
            <td>
                <input type = "email"
                    required ="required"
                    placeholder = "Enter email.."
                    name = "email"
                    value = {editFormData.email}
                    onChange ={handleEditFormChange}>
                </input>
            </td>
            <td>
                <input type = "text"
                    required ="required"
                    placeholder = "Enter a name"
                    name = "first_name"
                    value = {editFormData.first_name}
                    onChange = {handleEditFormChange}>  
                </input>
            </td>
            <td>
            <input type = "text"
                    required ="required"
                    placeholder = "Enter a last_name"
                    name = "last_name"
                    value = {editFormData.last_name}
                    onChange ={handleEditFormChange}>
                    
                </input>
            </td>
            <td>
                <button type = "submit">
                    Save
                </button>
                <button type = "button" onClick={handleCancelClick}>
                    Cancel
                </button>
            </td>
        </tr>
    )
}

export default EditableRow
