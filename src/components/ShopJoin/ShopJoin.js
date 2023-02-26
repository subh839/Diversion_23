import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./ShopJoin.css";
import { useDispatch } from "react-redux";
import { createShop } from "../../actions/shop";

import shp1 from "../../assets/shp1.svg";

export default function ShopJoin() {
  const dispatch = useDispatch();
  const [shop, setShop] = useState({
    ownerName: "",
    phoneNo: "",
    email: "",
    userName: "",
    passWord: "",
    city: "",
    workexperience: "",
    address: "",
   
    description: "",
    shopType: "plumbing",
  
  });
 

  

  



 


 
  // console.log(shop);
  var submitHandler = (e) => {
    e.preventDefault();
    console.log(shop);
    dispatch(createShop(shop));
    alert("Joined Successfully!!!");
  };

  return (
    <>
      <Navbar />
      <form onSubmit={submitHandler}>
        <div className="shopjoin_container container" style={{width:900}}>
          <div className="shopjoin_container_inner">
            <h2 className="shopjoin_header">Register your self</h2>
            <div className="shopjoin_form1 row">
              <div className="col-lg-8 col-md-16">
                <img src="https://png.pngtree.com/png-vector/20210329/ourlarge/pngtree-cartoon-shop-sign-png-image_3140515.jpg" alt="" className="shp_img1" />
              </div>


                {/* ---------------------------------------------name, phone, email--------------------------------------------- */}

                  <div className="col-lg-8 col-md-14 form_col">
                    <form>
                      <label htmlFor="inputName">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        required
                        value={shop.ownerName}
                        onChange={(e) =>
                          setShop({
                            ...shop,
                            ownerName: e.target.value,
                          })
                        }
                      />
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="inputEmail">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="inputEmail"
                          required
                          value={shop.email}
                          onChange={(e) =>
                            setShop({
                              ...shop,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>    
                    </div>             
                  
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="inputPhone">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputPhone"
                        required
                        value={shop.phoneNo}
                        onChange={(e) =>
                          setShop({
                            ...shop,
                            phoneNo: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  

                {/* --------------------------------------------------city, shop name, ------------------------------------------------------- */}
                
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="workexperience">Work Experience</label>
                      <input
                        type="text"
                        className="form-control"
                        id="workexperience"
                        required
                        value={shop.workexperience}
                        onChange={(e) =>
                          setShop({
                            ...shop,
                            workexperience: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        required
                        value={shop.city}
                        onChange={(e) =>
                          setShop({
                            ...shop,
                            city: e.target.value,
                          })
                        }
                      />
                    </div>
                    <a
                    href="https://www.latlong.net/convert-address-to-lat-long.html"
                    className="col-sm-8 btn btn-primary buttionSize"
                    target="_blank"
                    rel="noopener noreferrer"
                    height="10px"
                  >
                    Get Location
                  </a>
                  </div>
                  
                {/* ------------------------------------------------userName, password-------------------------------------------------------- */}
                
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="userName">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="userName"
                        required
                        value={shop.userName}
                        onChange={(e) =>
                          setShop({
                            ...shop,
                            userName: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="passWord">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        required
                        value={shop.passWord}
                        onChange={(e) =>
                          setShop({
                            ...shop,
                            passWord: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  
                {/* ------------------------------------------------Lat, Long----------------------------------------------------------------- */}

                
                <div className="form-group" style={{width:400}}>
                  <label htmlFor="exampleFormControlTextarea1">
                    Address
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    value={shop.address}
                    onChange={(e) =>
                      setShop({
                        ...shop,
                        address: e.target.value,
                      })
                    }
                  />
                </div>
                <br />
          

                  </form>
                  </div>
                </div>
                {/* ------------------------------------------------Shop type, address ------------------------------------------------------- */}

                {/* <div className="col-sm-4"> */}
               
                {/* ------------------------------------------------shop type------------------------------------------------------ */}
                <div>
                  <label htmlFor="ShopType">ShopType:</label>
                  <select
                    name="ShopType"
                    id="ShopType"
                    onChange={(e) =>
                      setShop({
                        ...shop,
                        shopType: e.target.value,
                      })
                    }
                  >
                    <option value="plumbing">Plumber</option>
                    <option value="electric">Electric</option>
                   
                    <option value="mechanic">Mechanic</option>
                    <option value="gardener">Gardener</option>
                    <option value="househelp">House Help</option>
                    <option value="carpenter">carpenter</option>
                    <option value="homepainting">Home Painting</option>
                    <option value="appliancerepair">Appliance Repair</option>
                  </select>
                </div>
                <br />
                {/* -------------------------------------------------Items ----------------------------------------------------- */}
                <div>
                  <p>
                    <a
                      className="btn btn-primary"
                      data-bs-toggle="collapse"
                      href="#pemitems"
                      role="button"
                      aria-expanded="false"
                      aria-controls="pemitems"
                    >
                      
                    </a>
                  </p>

                  <div className="row" id="pemitems" height="">
                    
                  
                  </div>
                </div>
                <br />
                {/* ------------------------------------------------description------------------------------------------------------- */}

                <div className="form-group" style={{width:400}}>
                  <label htmlFor="exampleFormControlTextarea1">
                    Description About Yourself
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    value={shop.description}
                    onChange={(e) =>
                      setShop({
                        ...shop,
                        description: e.target.value,
                      })
                    }
                  />
                </div>

                {/* ----------------------------------------------------submit------------------------------------------------------------ */}
                <br />
                <button type="submit" className="btn btn-primary">
                  <i className="fa fa-paper-plane" /> Send
                </button>
            </div>
        </div>
      </form>
    </>
  );
}
