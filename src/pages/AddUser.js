// import React from "react";
// import axios from "axios";
// import { Breadcrumbs, Typography, Avatar, Button } from "@mui/material";
// import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import AddStationForm from "../components/Forms/AddStationForm";
// import { AiOutlinePlusCircle } from "react-icons/ai";
// import { MdOutlineCancel } from "react-icons/md";
// // import ProfileModal from "../components/Modals/ProfileModal";
// import { useEffect, useState } from "react";
// import { config } from '../assets/config/config'


// const apiUrl = config.api.url

// export default function Profilescreen() {
//   const [userData, setUserData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [image, setImage] = useState();
//   const [userImage, setUserImage] = useState({
//     path: "",
//     bufferData: "",
//   });

//   const userId = sessionStorage.getItem("userId");
//   const stationId = sessionStorage.getItem("stationId");

//   const history = useHistory();
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   function closeModal() {
//     setIsModalOpen(false);
//   }

//   useEffect(() => {
//     axios
//       .get(`${apiUrl}station/getStation/${stationId}`)
//       .then((res) => {
//         console.log("res..", res);
//         if (res.status === 200) {
//           setUserData(res.data);
//           setUserImage({
//             path: res.data.Pofile_Picture,
//             bufferData: "",
//           });
//           setLoading(false);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

// //   function updateUser(items) {
// //     console.log("Items : ", items);
// //     axios
// //       .put(
// //         `http://172.174.202.43/findgreen/v1/profile/edit-profile/${userId}`,
// //         items
// //       )
// //       .then((res) => {
// //         console.log("res..", res);
// //         if (res.status === 200) {
// //           setUserData(res.data);
// //           setLoading(false);
// //           setIsModalOpen(true);
// //         }
// //       })
// //       .catch((err) => {
// //         console.log(err);
// //       });
// //     if (userImage === false || userImage === undefined) {
// //       deleteProfileFun();
// //     } else if (userImage.bufferData) {
// //       uploadProfile();
// //     }
// //   }

// //   function handleImage(e) {
// //     console.log(e.target.file);
// //     // setImage(e.target.files[0]);
// //     setUserImage({ bufferData: e.target.files[0] });
// //   }
// //   console.log("User", userImage);
// //   console.log("image", image);

// //   function uploadProfile() {
// //     const formData = new FormData();
// //     formData.append("profile_pic", userImage.bufferData);
// //     axios
// //       .post(
// //         `http://172.174.202.43/findgreen/v1/profile/profile-pic/${userId}`,
// //         formData,
// //         {
// //           headers: {
// //             "Content-type": "multipart/form-data",
// //           },
// //         }
// //       )
// //       .then((res) => {
// //         console.log(res);
// //       })
// //       .catch((err) => {
// //         console.log(err);
// //       });
// //   }
// //   function deleteProfileFun() {
// //     axios
// //       .delete(`http://172.174.202.43/findgreen/v1/profile/delete-pic/${userId}`)
// //       .then((res) => {
// //         console.log(res);
// //       })
// //       .catch((err) => {
// //         console.log(err);
// //       });
// //   }

//   if (loading) return <h2> Loading </h2>;

//   return (
//     <main>
//       <div className=" mt-16 ml-16">
//         <div className="mb-4">
//           <Breadcrumbs separator="›" aria-label="breadcrumb">
//             <Link underline="hover" color="inherit" to={"app/Homescreen"}>
//               Home
//             </Link>
//             <Typography color="text.primary">My Profile</Typography>
//           </Breadcrumbs>
//         </div>
//         <div className="relative">
//           <Avatar
//             style={{
//               width: "80px",
//               height: "80px",
//               color: "red",
//             }}
//           >
//             {/* {image ? (
//               <img src={window.URL.createObjectURL(image)} alt="" />
//             ) : userData.Pofile_Picture ? (
//               <img src={userData.Pofile_Picture} alt="" />
//             ) : (
//               "A"
//             )} */}

//             {userImage?.bufferData ? (
//               <img
//                 src={window.URL.createObjectURL(userImage?.bufferData)}
//                 alt=""
//               />
//             ) : userImage?.path ? (
//               <img src={userImage.path} alt="" />
//             ) : (
//               "A"
//             )}
//           </Avatar>

//           {userImage?.path || userImage?.bufferData ? (
//             <MdOutlineCancel
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 marginLeft: "3.5rem",
//                 height: "30px",
//                 width: "30px",
//                 color: "red",
//               }}
//               onClick={() => setUserImage()}
//             />
//           ) : (
//             <>
//               <AiOutlinePlusCircle
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   marginLeft: "3.5rem",
//                   height: "30px",
//                   width: "30px",
//                   color: "red",
//                 }}
//               />
//               <input
//                 className="bg-transparent absolute  ml-16 mt-1.5  "
//                 style={{
//                   top: 0,
//                   height: "20px",
//                   width: "20px",
//                   opacity: 0,
//                 }}
//                 accept="image/*"
//                 type="file"
//               />
//             </>
//           )}
//         </div>
//         <AddStationForm />
//         {/* <ProfileModal isModalOpen={isModalOpen} closeModal={closeModal} /> */}
//       </div>
//     </main>
//   );
// }

import React from "react";
import { Breadcrumbs, Typography, Box,Tab,TabPanel,value } from "@mui/material";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AddUserForm from "../components/Forms/AddUserForm";
export default function AddUser() {
  const history = useHistory();
  return (
    <main className="flex items-center sm:p-12 md:w-11/14">
      <div className="w-full" style={{ marginRight: "0px", marginLeft: "100px" }}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/app/dashboard">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/app/userManagemnt">
          <Typography color="text.primary">User Management</Typography>
          </Link>
          <Typography color="text.primary">Add User</Typography>
        </Breadcrumbs>
       <AddUserForm/>
      </div>
    </main>
  );
}
