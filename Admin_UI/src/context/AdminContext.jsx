import { createContext,useState,useEffect } from "react";
import { useLocation } from "react-router-dom";

export const AdminContext = createContext()

export default function AdminRootContext({children}){
const location = useLocation()

const [currentNav,setCurrentNav] = useState('Dashboard')
const [seeProfile,setSeeProfile] = useState(false)
const [addUser,setAddUser] = useState(false)
const [editUser,setEditUser] = useState(false)
const [editField,setEditField] = useState('all')
const [totalUsers,setTotalUsers] = useState(null)
const [currentUser,setCurrentUser] = useState(null)
const [currentEdit,setCurrentEdit] = useState(null)
useEffect(()=>{
   if(location.pathname==='/')
    setCurrentNav('Dashboard')
   else if(location.pathname==='/management')
    setCurrentNav('Management')
},[location.pathname])

    return<AdminContext.Provider value={{currentNav,setCurrentNav,seeProfile,setSeeProfile,addUser,setAddUser,editUser,setEditUser,editField,setEditField,totalUsers,setTotalUsers,currentUser,setCurrentUser,currentEdit,setCurrentEdit}}>
    {children}
    </AdminContext.Provider>
}