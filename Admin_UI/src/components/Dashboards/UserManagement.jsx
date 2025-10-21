import UsersList from "../UserManagement/UsersList"
import UserProfile from "../UserManagement/UserProfile"
import { AdminContext } from "../../context/AdminContext"
import EditUser from "../UserManagement/EditUser"
import { useContext } from "react"
import AddUser from "../UserManagement/AddUser"
const UserManagement = () => {
  const {seeProfile,addUser, editUser,currentUser} = useContext(AdminContext)
  return (
     <section className="flex md:flex-row flex-col gap-4">
      <UsersList/>
      {seeProfile && <UserProfile currentUser={currentUser}/>}
      {addUser && <AddUser/>}
      {editUser && <EditUser/>}
      </section>
  )
}

export default UserManagement
