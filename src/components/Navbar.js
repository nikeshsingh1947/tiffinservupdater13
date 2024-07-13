import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Logoutreq } from "../Redux/AuthRedux/action";
import Radhalogo from "../DTW-removebg-preview.png"

// import Banner from "./banner.gif"
import "./Navbar.css"
import { useNavigate } from "react-router-dom";

// import {
//   MDBContainer,
//   MDBNavbar,
//   MDBNavbarBrand
// } from 'mdb-react-ui-kit';

import NavigationBar from './letestnav';
const Navbar = () => {
    const status = useSelector((store) => store.userData.isAuth);
    // const user = useSelector((store) => store.userData.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const handlelogout = () => {
    //     if (status) {
    //       dispatch(Logoutreq());
    //       navigate("/", { replace: true });
    //     } else {
    //       navigate("/registration", { replace: true });
    //     }
    //   };
    return (
        < >
        {/* <MDBNavbar light bgColor='light' >
          <div id="main-navboot">
        <MDBContainer>
          <MDBNavbarBrand href='#'>
            <img
              src={Smallradha}
              id='DTWtext'
              alt='DTW'
              loading='lazy'
            />
          </MDBNavbarBrand>
        
        </MDBContainer>
        <div id="cont-ntm">
        <MDBContainer id="cart-btns-cont"><CartButton onClick={"/cart"}/></MDBContainer>
        <MDBContainer><button  id='loginbtn' onClick={handlelogout}>{status ? `Logout ${user.user.name}` : `login/signup`} </button></MDBContainer>
        </div>
        </div>
      </MDBNavbar> */}
      <NavigationBar/>
        <div id="main-nav-cont">
        
        
            <div  id='logoouter' className="flex max-w-[1240px] mx-auto items-center p-4 justify-between">
                
                   <img style={{"width":"100%","height":"100%"}} src={Radhalogo} alt="Logo" />
                    
            </div>
            </div>
        </>
    )
}

export default Navbar