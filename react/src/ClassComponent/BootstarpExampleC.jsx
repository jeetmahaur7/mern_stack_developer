import React, { Component } from "react";

export default class BootstrapExampleC extends Component {
  constructor() {
    super();
    let data = [
      { id: 1, name: "product1", pic: "/images/food4.jpg" },
      { id: 2, name: "product2", pic: "/images/food5.jpg" },
      { id: 3, name: "product3", pic: "/images/food6.jpg" },
      { id: 4, name: "product4", pic: "/images/food7.jpg" },
      { id: 5, name: "product5", pic: "/images/food8.jpg" },
      { id: 6, name: "product6", pic: "/images/food9.jpg" },
      { id: 7, name: "product7", pic: "/images/food10.jpg" },
      { id: 8, name: "product8", pic: "/images/food11.jpg" },
      { id: 9, name: "product9", pic: "/images/food12.jpg" },
    ];
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Foodie
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    HOME
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    MENU
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Vegitarian
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Non-Vegitarian
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ABOUT
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        OUR TEAM
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        TESTIMONIAL
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/images/food1.jpg"
                height={670}
                width="100%"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="/images/food2.jpg"
                height={670}
                width="100%"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="/images/food3.jpg"
                height={670}
                width="100%"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="/images/food4.jpg"
                height={670}
                width="100%"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="container-fluid">
          <h3 className="bg-primary text-center p-2 text-light">
            Latest Products
          </h3>
          <div className="row">
            {this.data.map((item, index) => {
              return (
                <div
                  className="col-xl-2 col-lg-3 col-md-4 col-sm-6"
                  key={index}
                >
                  <div className="card">
                    <img
                      src={item.pic}
                      style={{ height: 150, width: "100%" }}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">
                        <del className="text-danger">
                          &#8377;{this.item.basePrice}
                        </del>{" "}
                        &#8377;{item.finalPrice}{" "}
                        <sup className="text-success">{item.discount}% Off</sup>
                      </p>
                      <a href="#" className="btn btn-primary">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
