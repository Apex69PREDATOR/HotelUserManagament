import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { AdminContext } from "../../context/AdminContext";
import { useContext, useState, useEffect } from "react";
import pic from "../../assets/DefStudent.jpg";
import { CancelOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import Role from "./Utils/Role";
import Designation from "./Utils/Designation";
import Status from "./Utils/Status";
import BasicInfo from "./Utils/BasicInfo";

function EditUser() {
  const { setEditUser, editField, currentEdit,setTotalUsers } = useContext(AdminContext);
  const [img, setImg] = useState(currentEdit?.Image || pic);
  const [formData, setFormData] = useState({
    Name: currentEdit?.Name || "",
    Number: currentEdit?.Number || "",
    Email: currentEdit?.Email || "",
    Address: currentEdit?.Address || "",
    Designation: currentEdit?.Designation || "",
    Role: currentEdit?.Role || "",
    Features: currentEdit?.Features || [],
    id: currentEdit?._id || "",
    Note: currentEdit?.Note || "",
  });

  const token = localStorage.getItem("hotelToken");

  const { quill, quillRef } = useQuill({
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

  // Sync Quill content with formData.Note
  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        setFormData((prev) => ({ ...prev, Note: quill.root.innerHTML }));
      });
      // Set initial note content
      if (currentEdit?.Note) {
        quill.root.innerHTML = currentEdit.Note;
      }
    }
  }, [quill, currentEdit?.Note]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    formDataObj.append("Name", formData.Name);
    formDataObj.append("Number", formData.Number);
    formDataObj.append("Email", formData.Email);
    formDataObj.append("Address", formData.Address);
    formDataObj.append("Designation", formData.Designation);
    formDataObj.append("Role", formData.Role);
    formDataObj.append("Features", JSON.stringify(formData.Features));
    formDataObj.append("id", formData.id);
    formDataObj.append("Note", formData.Note);
    if (img && img !== pic) {
      formDataObj.append("profilePic", img);
    }

    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/editUser`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formDataObj,
    });
    const txt =await res.text()
    console.log(txt);
    
    try{
    const result = await res.json();
    alert(result.message);
    if (res.ok) {
      setEditUser(false);
      setTotalUsers(prev=>(prev.filter(val=>(val._id!==currentEdit?._id))))
      setTotalUsers(prev=>([...prev,result?.user]))
    }
  }
  catch(err){
     console.log(err);
     
  }
  };

  return (
    <div className="space-y-3">
      <div>
        <span
          onClick={() => setEditUser(false)}
          className="inline-block p-5 py-2 md:text-[1.6em] text-[1.2em] text-orange-300 bg-orange-50 cursor-pointer mr-3 hover:shadow-md"
          style={{ borderRadius: "2vh" }}
        >
          {"<"}
        </span>
        <span className="font-semibold font-sans text-xl">Edit User</span>
      </div>

      {editField === "Role" && <BasicInfo/>}

      <form
        id="editForm"
        onSubmit={onSubmit}
        className="md:w-[35vw] w-[100vw] mx-auto p-4 bg-white rounded-2xl shadow-md space-y-6"
      >
        {(editField === "all" || editField === "BasicInfo") && (
          <div>
            <h2 className="text-lg font-semibold mb-4">User Details</h2>
            <div className="space-y-3">
              <input
                type="text"
                name="Name"
                placeholder="Enter User Name"
                value={formData.Name}
                onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                name="Number"
                placeholder="Enter Mobile Number"
                value={formData.Number}
                onChange={(e) => setFormData({ ...formData, Number: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
              />
              <div className="border-2 border-dashed border-gray-300 rounded-lg py-4 flex items-center justify-center relative">
                <div className="w-24 h-24 relative">
                  {img && (
                    <>
                      <img
                        src={typeof img === "string" ? img : URL.createObjectURL(img)}
                        alt="profile"
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <CancelOutlined
                        onClick={() => setImg(null)}
                        className="absolute top-0 right-0 cursor-pointer text-red-500 bg-white rounded-full"
                      />
                    </>
                  )}
                </div>
                {!img && (
                  <p className="font-medium">
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("pImgEdit").click();
                      }}
                      className="cursor-pointer text-orange-400"
                    >
                      Click
                    </span>{" "}
                    to select image
                  </p>
                )}
              </div>
              <input
                type="email"
                name="Email"
                placeholder="Enter Email Address"
                value={formData.Email}
                onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                name="Address"
                placeholder="Enter Address"
                value={formData.Address}
                onChange={(e) => setFormData({ ...formData, Address: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
              />
              <select
                name="Designation"
                value={formData.Designation}
                onChange={(e) => setFormData({ ...formData, Designation: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 text-gray-500"
              >
                <option value="">Choose Designation</option>
                <option value="AI ML">AI ML</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Electrical">Electrical</option>
              </select>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Note
                </label>
                <div
                  ref={quillRef}
                  className="bg-white rounded-lg"
                  style={{ height: "180px" }}
                />
              </div>
            </div>
          </div>
        )}

        {(editField === "all" || editField === "Role") && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Role Details</h2>
            <div className="space-y-3">
              <select
                name="Role"
                value={formData.Role}
                onChange={(e) => setFormData({ ...formData, Role: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 text-gray-500"
              >
                <option value="">Choose Role</option>
                <option value="Administrator">Administrator</option>
                <option value="Manager">Manager</option>
                <option value="Viewer">Viewer</option>
                <option value="Worker">Worker</option>
              </select>
              <select
                name="Features"
                value={formData.Features[0] || ""}
                onChange={(e) => setFormData({ ...formData, Features: [e.target.value] })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 text-gray-500"
              >
                <option value="">Choose Feature</option>
                <option value="Room Booking">Room Booking</option>
                <option value="Utilities">Utilities</option>
                <option value="Manage users">Manage Users</option>
              </select>
            </div>
          </div>
        )}

        <div className="flex gap-3">
          <button
            type="button"
            className="flex-1 bg-white hover:bg-orange-50 text-orange-500 font-medium py-2 rounded-lg transition border border-orange-200"
            onClick={() => setEditUser(false)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-lg transition"
          >
            Save Changes
          </button>
        </div>
      </form>

      {editField === "BasicInfo" && <Role />}
      {(editField === "Role" || editField === "BasicInfo") && (
        <>
          <Designation currentEdit={currentEdit} />
          <Status />
          <Button
            id="delete"
            variant="outlined"
            sx={{ backgroundColor: "white", width: "100%" }}
            color="error"
          >
            Delete this User Profile
          </Button>
        </>
      )}

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImg(e.target.files[0])}
        name="profileImage"
        id="pImgEdit"
        style={{ display: "none" }}
      />
    </div>
  );
}

export default EditUser;