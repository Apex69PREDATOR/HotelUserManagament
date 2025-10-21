
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { AdminContext } from "../../context/AdminContext";
import { useContext,useState } from "react";

function AddUser() {
    const {setAddUser,setTotalUsers} = useContext(AdminContext)
    const [profileImage,setProfileImage] = useState(null)
  const { quillRef } = useQuill({
    placeholder: "Add Note",
    theme: "snow",
    modules: {
      toolbar: [
        [{ font: [] }, { size: [] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image", "code-block"],
        [{ align: [] }],
      ],
    },
  });
  const token = localStorage.getItem('hotelToken')
  const onSubmit=async()=>{
    const formData = new FormData(document.getElementById('addForm'))
    formData.append('profilePic',profileImage)
    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/addUser`,{method:"POST",headers:{'Authorization':`Bearer ${token}`},body:formData})
    const result =await res.json()
    alert(result.message)
    if(res.ok){
    setTotalUsers(prev=>([...prev,result?.newUser]))
    }

  } 

  return (
    <div className="space-y-3">
        <div><span onClick={()=>{setAddUser(false)}} className="inline-block p-5 py-2 text-[1.6em] text-orange-300 bg-orange-50 cursor-pointer mr-3 hover:shadow-md" style={{borderRadius:'2vh'}}>{"<"}</span>  <span className="font-semibold font-sans text-xl">Add New User</span></div>
    <form id="addForm" onSubmit={(e)=>{
      e.preventDefault()
      onSubmit()}} className="w-[32vw] mx-auto p-4 bg-white rounded-2xl shadow-md space-y-6">
      {/* User Details */}
      <div>
        <h2 className="text-lg font-semibold mb-4">User Details</h2>

        <div className="space-y-3">
          <input
           name="Name"
            type="text"
            placeholder="Enter User Name"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
          />
          <input
           name="Number"
            type="text"
            placeholder="Enter Mobile Number"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
          />

          {/* Profile Image */}
          <div  className="border-2 border-dashed border-gray-300 rounded-lg py-8 flex flex-col items-center justify-center text-center" onDrop={(e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) setProfileImage(file);
  }} onDragOver={(e) => e.preventDefault()} >      
      {profileImage ? (<div className="flex flex-col items-center">
      <img
        src={URL.createObjectURL(profileImage)}
        alt="Profile Preview"
        className="h-24 w-24 object-cover rounded-full mb-3 border"
      />
      <p className="text-gray-600 text-sm">{profileImage.name}</p>
      <button
        type="button"
        onClick={() => setProfileImage(null)}
        className="mt-2 px-3 py-1 text-xs text-white bg-red-500 rounded hover:bg-red-600"
      >
        Remove
      </button>
    </div>):
         (<>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-400 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11l4-4m0 0l4 4m-4-4v12" />
            </svg>
            <p className="text-gray-500 text-sm">
              Drop your image here or{" "}
              <span onClick={()=>{document.getElementById('pImg').click()}}  className="text-orange-500 font-medium cursor-pointer">Browse</span>
            </p>
            </>)}
          </div>

          <input
            type="email"
           name="Email"
            placeholder="Enter Email Address"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
           name="Address"

            placeholder="Enter Address"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
          />

          {/* Designation Dropdown */}
          <select name="Designation" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 text-gray-500">
            <option>Choose Designation</option>
            <option value={'AI'}>AI</option>
            <option value={'Blockchain'}>Blockchain</option>
            <option value={'Mechanical'}>Mechanical</option>
          </select>

          {/* Note (ReactQuillJS) */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Note</label>
            <div ref={quillRef} className="bg-white rounded-lg" style={{ height: "180px" }} />
          </div>
        </div>
      </div>

      {/* Role Details */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Role Details</h2>
        <div className="space-y-3">
          <select  name="Role" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 text-gray-500">
            <option value="">Choose Role</option>
            <option value="Administrator">Administrator</option>
            <option value="Manager">Manager</option>
            <option value="Viewer">Viewer</option>
            <option value="Worker">Worker</option>
          </select>
          <select name="Feature" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 text-gray-500">
            <option value="">Choose Feature</option>
            <option value="Room Booking">Room Booking</option>
            <option value="Utilities">Utilities</option>
            <option value="Manage users">Manage Users</option>
          </select>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button type="button" className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-2 rounded-lg transition">
          Save to Draft
        </button>
        <button type="submit" className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-lg transition cursor-pointer">
          Publish this Service
        </button>
      </div>
    </form>
    <input type="file" accept="image/*" onChange={(e)=>{setProfileImage(e.target.files[0])}} name="profileImage" id="pImg" style={{display:'none'}} />
    </div>
  );
}

export default AddUser;
