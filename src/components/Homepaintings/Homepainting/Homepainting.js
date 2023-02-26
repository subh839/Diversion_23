import React from "react";
import { Link } from "react-router-dom";

export default function Homepaintings({ HomepaintingsObj }) {
  return (
    <>
      {HomepaintingsObj.length === 0 ? (
        <>
          <h1>Loading.......</h1>
        </>
      ) : (
        <>
          <div className="container eleccontainer">
          <div className="banner">
            <h1>Homepaintings</h1>
          </div>          
            <div className="row">
                {HomepaintingsObj.map((Homepainting, key) => (
                  <>
                    <div className="col-lg-4 mb-4">
                      <div className="card">
                        <img
                          src="https://images.app.goo.gl/C6kwDGHbfjWhaQRH6"
                          alt=""
                          className="card_image"
                        />
                        <div className="card-body">
                          <h2 className="card-title">
                            <b>{Homepainting.shopType}</b>
                          </h2>
                          <p className="card-text">{Homepainting.description}</p>
                          <p>
                            City : <b>{Homepainting.city}</b>
                          </p>
                          <p>
                            Address : <b>{Homepainting.address}</b>
                          </p>
                          <br /> <br /> <br />
                          <i className="fas fa-user"></i> Name :{" "}
                          {Homepainting.ownerName} <br />
                          <i className="fas fa-phone-square"></i>  Phone :{"     "}
                          {Homepainting.phoneNo} <br />
                          <i className="fas fa-envelope-square"></i>Mail Id:{" "}
                          {Homepainting.email} <br /> <br />
                       
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
        </>
      )}
    </>
  );
}
