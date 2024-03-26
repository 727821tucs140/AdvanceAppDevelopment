import React, { useState } from 'react';
import './Userprofile.css';

const Userprofile = () => {
  // Define initial state for user profile data
  const [profileData, setProfileData] = useState({
    name: 'Muthumari',
    email: 'muthu@gmail.com',
    Password: 123,
    PhoneNumber: '1234567890',
    // job: 'Web Developer',
    // skills: 'PHP, HTML, CSS, Java'
  });

  // Function to handle edits to the profile data
  const handleEdit = (field, newValue) => {
    setProfileData(prevProfileData => ({
      ...prevProfileData,
      [field]: newValue
    }));
  };

  return (
    <div className="main">
      <h2>IDENTITY</h2>
      <div className="card">
        <div className="card-body">
          <i className="fa fa-pen fa-xs edit"></i>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>:</td>
                <td>{profileData.name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>:</td>
                <td>{profileData.email}</td>
              </tr>
              <tr>
                <td>Password</td>
                <td>:</td>
                <td>{profileData.Password}</td>
              </tr>
              <tr>
                <td>Phone Number</td>
                <td>:</td>
                <td>{profileData.PhoneNumber}</td>
              </tr>
              {/* <tr>
                <td>Job</td>
                <td>:</td>
                <td>{profileData.job}</td>
              </tr>
              <tr>
                <td>Skill</td>
                <td>:</td>
                <td>{profileData.skills}</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Userprofile;







// import React from 'react'
// import '../components/Userprofile.css'
// const Userprofile = () => {
//   return (
//     <div class="main">
//         <h2>IDENTITY</h2>
//         <div class="card">
//             <div class="card-body">
//                 <i class="fa fa-pen fa-xs edit"></i>
//                 <table>
//                     <tbody>
//                         <tr>
//                             <td>Name</td>
//                             <td>:</td>
//                             <td>ImDezCode</td>
//                         </tr>
//                         <tr>
//                             <td>Email</td>
//                             <td>:</td>
//                             <td>imdezcode@gmail.com</td>
//                         </tr>
//                         <tr>
//                             <td>Address</td>
//                             <td>:</td>
//                             <td>Bali, Indonesia</td>
//                         </tr>
//                         <tr>
//                             <td>Hobbies</td>
//                             <td>:</td>
//                             <td>Diving, Reading Book</td>
//                         </tr>
//                         <tr>
//                             <td>Job</td>
//                             <td>:</td>
//                             <td>Web Developer</td>
//                         </tr>
//                         <tr>
//                             <td>Skill</td>
//                             <td>:</td>
//                             <td>PHP, HTML, CSS, Java</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     </div>
//   )
// }
// export default Userprofile;



// import React from 'react'
// import '../components/Userprofile.css'
// export const Userprofile = () => {
//   return (
//     <div>
//         <div>
//         {/* Bootstrap CSS */}
//         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
//         <title>Profile</title>
//         <link rel="stylesheet" href="assets/css/profile.css" />
//         <style dangerouslySetInnerHTML={{__html: "\n        .list-group-item.active {\n    background: #06C167 !important;\n}\n.bg-warning {\n    background: #06C167 !important;\n}\n.modal-content {\n        background-color: #fefefe;\n        margin: 4% auto;\n        padding: 20px;\n        border: 1px solid #888;\n        width: 70%;\n        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n        transition: transform 0.3s ease-in-out;\n        \n    }\n    .close {\n        float: right;\n        text-align: right;\n        font-size: 30px;\n    }\n    .modal-content h2 {\n        text-align: center;\n        margin-top: -35px;\n    }\n    .button_div {\n        justify-content: center;\n        text-align: center;\n    }\n    .button_div button {\n        margin-right: 10px;\n        background: #06C167;\n        border: 1px solid #06C167;\n        padding: 5px 15px;\n        color: #FFFFFF;\n        border-radius: 2px;\n    }\n    #addAddressForm input {\n        padding: 5px;\n    }\n    .nice-select {\n        padding: 0px !important;\n        height: 38px !important;\n        line-height: 38px !important;\n    }\n    \n    .add_address_button {\n        background: #06C167;\n        border: 1px solid #06C167;\n        padding: 5px 15px;\n        color: #FFFFFF;\n        border-radius: 2px;\n    }\n    \n    @media (max-width: 768px) {\n        .main_flex_div {\n            display: flex;\n            flex-direction: column;\n        }\n        .inner_flex_div {\n            min-width: 100% !important;\n        }\n        .modal-content {\n            padding: 10px 0px !important;\n            min-width: 95% !important;\n            height: 700px;\n            overflow: scroll;\n        }\n        .close {\n            margin-right: 10px;\n        }\n    }\n    \n    \n    \n    " }} />
//         <section className="my-5">
//           <div className="container">
//             <div className="main-body">
//               <div className="row">
//                 <div className="col-lg-4">
//                   <div className="card">
//                     <div className="card-body">
//                       <div className="d-flex flex-column align-items-center text-center">
//                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbEsykx-0fhTred6UwHDYtMFd2UgTJCG4gaklT1dx4suRO4_n5LJr4Gg28kquSX5fpNo&usqp=CAU" alt="Admin" className="rounded-circle p-1 bg-warning" width={110} />
//                         <div className="mt-3">
//                           <h4>Jyoti</h4>
//                           <p className="text-secondary mb-1">+91 7493658737</p>
//                           <p className="text-muted font-size-sm">Delhi, NCR</p>
//                         </div>
//                       </div>
//                       <div className="list-group list-group-flush text-center mt-4" id="profileDetails">
//                         <a href="#" className="list-group-item list-group-item-action border-0 " onclick="showProfileDetails()">
//                           Profile Informaton
//                         </a>
//                         <a href="#" className="list-group-item list-group-item-action border-0" onclick="showOrderDetails()">Orders</a>
//                         <a href="#" className="list-group-item list-group-item-action border-0 active" onclick="showAddressBook()">
//                           Address Book
//                         </a>
//                         <a href="#" className="list-group-item list-group-item-action border-0">Logout</a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-8">
//                   <div id="orderDetails" className="order_card">
//                     <div className="card">
//                       <div className="card-body">
//                         <div className="top-status">
//                           <h5>ORDER# 00000</h5>
//                           <ul>
//                             <li className="active">
//                               <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 512 512" width={50} height={50}>
//                                 <title> Clock Delivery package </title>
//                                 <path d="M316.96,424.4A96,96,0,1,1,400,472.22,95.391,95.391,0,0,1,316.96,424.4Z" style={{fill: '#6fe3ff'}} />
//                                 <path d="M400,135.55V280.22A96.008,96.008,0,0,0,316.96,424.4L208,487.3V246.38L399.98,135.54Z" style={{fill: '#c16752'}} />
//                                 <polygon points="208 246.38 141.14 207.78 333.13 96.94 399.98 135.54 208 246.38" style={{fill: '#e48e66'}} />
//                                 <polygon points="333.13 96.94 141.14 207.78 92.21 179.53 284.19 68.69 333.13 96.94" style={{fill: '#e5d45a'}} />
//                                 <polygon points="208 24.7 284.19 68.69 92.21 179.53 92.2 179.53 16.02 135.54 208 24.7" style={{fill: '#af593c'}} />
//                                 <polygon points="208 246.38 208 487.3 16 376.45 16 135.55 16.02 135.54 92.2 179.53 92.2 339.28 115.45 329.68 140.8 358.48 140.8 207.98 141.14 207.78 208 246.38" style={{fill: '#e48e66'}} />
//                                 <polygon points="141.14 207.78 140.8 207.98 140.8 358.48 115.45 329.68 92.2 339.28 92.2 179.53 92.21 179.53 141.14 207.78" style={{fill: '#f8ec7d'}} />
//                                 <path d="M284.75,269.594l-17.9-18.959a7,7,0,0,0-11.256,1.49l-16.9,31.44a7,7,0,0,0,6.16,10.316,7.185,7.185,0,0,0,6.292-3.687L255,283.247V343.42a7,7,0,1,0,14,0V273.051l5.69,6.154a6.927,6.927,0,0,0,9.835.285A7,7,0,0,0,284.75,269.594Z" style={{fill: '#6fe3ff'}} />
//                                 <path d="M40.83,378.37a7,7,0,0,1-7-7V345.45a7,7,0,0,1,14,0v25.92A7,7,0,0,1,40.83,378.37Z" style={{fill: '#f8ec7d'}} />
//                                 <path d="M69.25,395a7,7,0,0,1-7-7V364.65a7,7,0,0,1,14,0V388A7,7,0,0,1,69.25,395Z" style={{fill: '#f8ec7d'}} />
//                                 <path d="M97.68,411.41a7,7,0,0,1-7-7V383.85a7,7,0,0,1,14,0v20.56A7,7,0,0,1,97.68,411.41Z" style={{fill: '#f8ec7d'}} />
//                                 <path d="M126.1,427.82a7,7,0,0,1-7-7V403.05a7,7,0,0,1,14,0v17.77A7,7,0,0,1,126.1,427.82Z" style={{fill: '#f8ec7d'}} />
//                                 <path d="M154.52,444.61a7,7,0,0,1-7-7V422.25a7,7,0,0,1,14,0v15.36A7,7,0,0,1,154.52,444.61Z" style={{fill: '#f8ec7d'}} />
//                                 <path d="M247.777,384.941a7,7,0,0,1-3.507-13.064l31.89-18.41a7,7,0,0,1,7,12.125L251.27,384A6.964,6.964,0,0,1,247.777,384.941Z" style={{fill: '#f8ec7d'}} />
//                                 <path d="M432.039,413.22a6.975,6.975,0,0,1-4.783-1.89l-32.04-30A7,7,0,0,1,393,376.22V313.97a7,7,0,0,1,14,0v59.215l29.824,27.925a7,7,0,0,1-4.785,12.11Z" style={{fill: '#2561a1'}} />
//                               </svg>
//                               <span>Pending</span>
//                             </li>
//                             <li>
//                               <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 512 512" width={50} height={50}>
//                                 <title> Clock Delivery package </title>
//                                 <path d="M316.96,424.4A96,96,0,1,1,400,472.22,95.391,95.391,0,0,1,316.96,424.4Z" style={{fill: '#6fe3ff'}} />
//                                 <path d="M400,135.55V280.22A96.008,96.008,0,0,0,316.96,424.4L208,487.3V246.38L399.98,135.54Z" style={{fill: '#c16752'}} />
//                                 <polygon points="208 246.38 141.14 207.78 333.13 96.94 399.98 135.54 208 246.38" style={{fill: '#e48e66'}} />
//                                 <polygon points="333.13 96.94 141.14 207.78 92.21 179.53 284.19 68.69 333.13 96.94" style={{fill: '#e5d45a'}} />
//                                 <polygon points="208 24.7 284.19 68.69 92.21 179.53 92.2 179.53 16.02 135.54 208 24.7" style={{fill: '#af593c'}} />
//                                 <polygon points="208 246.38 208 487.3 16 376.45 16 135.55 16.02 135.54 92.2 179.53 92.2 339.28 115.45 329.68 140.8 358.48 140.8 207.98 141.14 207.78 208 246.38" style={{fill: '#e48e66'}} />
//                                 <polygon points="141.14 207.78 140.8 207.98 140.8 358.48 115.45 329.68 92.2 339.28 92.2 179.53 92.21 179.53 141.14 207.78" style={{fill: '#f8ec7d'}} />
//                                 <path d="M284.75,269.594l-17.9-18.959a7,7,0,0,0-11.256,1.49l-16.9,31.44a7,7,0,0,0,6.16,10.316,7.185,7.185,0,0,0,6.292-3.687L255,283.247V343.42a7,7,0,1,0,14,0V273.051l5.69,6.154a6.927,6.927,0,0,0,9.835.285A7,7,0,0,0,284.75,269.594Z" style={{fill: '#6fe3ff'}} />
//                                 <path d="M40.83,378.37a7,7,0,0,1-7-7V345.45a7,7,0,0,1,14,0v25.92A7,7,0,0,1,40.83,378.37Z" style={{fill: '#f8ec7d'}} />
//                                 <path d="M69.25,395a7,7,0,0,1-7-7V364.65a7,7,0,0,1,14,0V388A7,7,0,0,1,69.25,395Z" style={{fill: '#f8ec7d'}} />
//                                 <path d="M97.68,411.41a7,7,0,0,1-7-7V383.85a7,7,0,0,1,14,0v20.56A7,7,0,0,1,97.68,411.41Z" style={{fill: '#f8ec7d'}} />
//                                 <path d="M126.1,427.82a7,7,0,0,1-7-7V403.05a7,7,0,0,1,14,0v17.77A7,7,0,0,1,126.1,427.82Z" style={{fill: '#f8ec7d'}} />
//                                 <path d="M154.52,444.61a7,7,0,0,1-7-7V422.25a7,7,0,0,1,14,0v15.36A7,7,0,0,1,154.52,444.61Z" style={{fill: '#f8ec7d'}} />
//                                 <path d="M247.777,384.941a7,7,0,0,1-3.507-13.064l31.89-18.41a7,7,0,0,1,7,12.125L251.27,384A6.964,6.964,0,0,1,247.777,384.941Z" style={{fill: '#f8ec7d'}} />
//                                 <path d="M432.039,413.22a6.975,6.975,0,0,1-4.783-1.89l-32.04-30A7,7,0,0,1,393,376.22V313.97a7,7,0,0,1,14,0v59.215l29.824,27.925a7,7,0,0,1-4.785,12.11Z" style={{fill: '#2561a1'}} />
//                               </svg>
//                               <span>Pending</span>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="card mt-4">
//                       <div className="card-body p-0 table-responsive">
//                         <h4 className="p-3 mb-0">Product Description</h4>
//                         <table className="table mb-0">
//                           <thead>
//                             <tr>
//                               <th scope="col">Description</th>
//                               <th scope="col" />
//                               <th scope="col">Quantity</th>
//                               <th scope="col">Amount</th>
//                               <th scope="col">Status</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             <tr>
//                               <th>
//                                 <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="product" className width={80} />
//                               </th>
//                               <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem,
//                                 facilis.</td>
//                               <td>₹100 X 2</td>
//                               <td><strong>₹200</strong></td>
//                               <td><span className="badge badge-warning">PENDING</span></td>
//                             </tr>
//                             <tr>
//                               <th colSpan={3}>
//                                 <span>Status:</span>
//                                 <span className="badge badge-success">PAID</span>
//                               </th>
//                               <td>
//                                 <span className="text-muted">Total Price</span>
//                                 <strong>₹200</strong>
//                               </td>
//                               <td>
//                                 <span className="text-muted">Total Paid</span>
//                                 <strong>₹200</strong>
//                               </td>
//                             </tr>
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>
//                     <div className="card mt-4">
//                       <div className="card-body">
//                         <h4>Timeline</h4>
//                         <ul className="timeline">
//                           <li className="active">
//                             <h6>PICKED</h6>
//                             <p className="mb-0 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque Lorem ipsum dolor</p>
//                             <o className="text-muted">21 March, 2014</o><p />
//                           </li>
//                           <li>
//                             <h6>PICKED</h6>
//                             <p className="mb-0 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque</p>
//                             <o className="text-muted">21 March, 2014</o><p />
//                           </li>
//                           <li>
//                             <h6>PICKED</h6>
//                             <p className="mb-0 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque</p>
//                             <o className="text-muted">21 March, 2014</o><p />
//                           </li>
//                           <li>
//                             <h6>PICKED</h6>
//                             <p className="mb-0 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque</p>
//                             <o className="text-muted">21 March, 2014</o><p />
//                           </li>
//                           <li>
//                             <h6>PICKED</h6>
//                             <p className="mb-0 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque</p>
//                             <o className="text-muted">21 March, 2014</o><p />
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                   <div id="profileDetails" className="card" style={{display: 'none'}}>
//                     <div className="card-body">
//                       <div className="profile-info">
//                         <h5>Profile Information</h5>
//                         <p><strong>Name:</strong> Jyoti</p>
//                         <p><strong>Email Address:</strong> jyoti@gmail.com</p>
//                         <p><strong>Contact:</strong> +91 7493658737</p>
//                         <p><strong>Date of Birth:</strong> 02-03-1999</p>
//                         <p><strong>Gender:</strong> Female</p>
//                         <p><strong>City:</strong> Delhi, NCR</p>
//                         <p><strong>Height:</strong> 5.4</p>
//                         <p><strong>Weight:</strong> 50</p>
//                         <p><strong>Goal:</strong> Hair &amp; Skin</p>
//                         <p><strong>Preference:</strong> Pure Vegitarian</p>
//                         <p><strong>Role:</strong> User</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div id="addressBook" className="card" style={{display: 'none'}}>
//                     <div className="card-body">
//                       <h5>Address Book</h5>
//                       <button className="add_address_button" onclick="showAddAddressModal()">Add Address</button>
//                       <div id="addressList">
//                       </div>
//                     </div>
//                   </div>
//                   <div id="addAddressModal" className="modal">
//                     <div className="modal-content">
//                       <span className="close" onclick="closeAddAddressModal()">×</span>
//                       <h2>Add Address</h2>
//                       <form id="addAddressForm" onsubmit="saveAddress(event)">
//                         <div className="col-12 d-flex main_flex_div">
//                           <div className="col-4 d-flex flex-column inner_flex_div">
//                             <label htmlFor="name">Name:</label>
//                             <input type="text" id="name" required /><br />
//                           </div>
//                           <div className="col-4 d-flex flex-column inner_flex_div">
//                             <label htmlFor="mobile">Mobile No.:</label>
//                             <input type="tel" id="mobile" required pattern="[0-9]{10}" />
//                           </div>
//                           <div className="col-4 d-flex flex-column inner_flex_div">
//                             <label htmlFor="pincode">Pin code:</label>
//                             <input type="text" id="pincode" required /><br />
//                           </div>
//                         </div>
//                         <div className="col-12 d-flex main_flex_div">
//                           <div className="col-4 d-flex flex-column inner_flex_div">
//                             <label htmlFor="locality">Locality:</label>
//                             <input type="text" id="locality" required /><br />
//                           </div>
//                           <div className="col-4 d-flex flex-column inner_flex_div">
//                             <label htmlFor="city">City/District/Town:</label>
//                             <input type="text" id="city" required /><br />
//                           </div>
//                           <div className="col-4 d-flex flex-column inner_flex_div">
//                             <label htmlFor="state">State:</label>
//                             <select id="state" required>
//                               <option value>Select a state</option>
//                               <option value="State 1">State 1</option>
//                               <option value="State 2">State 2</option>
//                               <option value="State 3">State 3</option>
//                             </select><br />
//                           </div>
//                         </div>
//                         <div className="col-12 d-flex main_flex_div">
//                           <div className="col-12 d-flex flex-column inner_flex_div">
//                             <label htmlFor="address">Address:</label>
//                             <textarea id="address" required defaultValue={""} /><br />
//                           </div>
//                         </div>
//                         <div className="col-12 d-flex main_flex_div">
//                           <div className="col-6 d-flex flex-column inner_flex_div">
//                             <label htmlFor="landmark">Landmark (Optional):</label>
//                             <input type="text" id="landmark" /><br />
//                           </div>
//                           <div className="col-6 d-flex flex-column inner_flex_div">
//                             <label htmlFor="alternatePhone">Alternate Phone (Optional):</label>
//                             <input type="tel" id="alternatePhone" pattern="[0-9]{10}" /><br />
//                           </div>
//                         </div>
//                         <div className="col-12 d-flex button_div">
//                           <button type="submit">Save</button>
//                           <button type="button" onclick="closeAddAddressModal()">Cancel</button>
//                         </div>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   )
// }
