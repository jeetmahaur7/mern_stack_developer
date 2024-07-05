import React from 'react'

export default function BoostrapExample() {
  let data = [
    { id: 1, name: "Product1", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p1.jpg" },
    { id: 2, name: "Product2", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p2.jpg" },
    { id: 3, name: "Product3", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p3.jpg" },
    { id: 4, name: "Product4", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p4.jpg" },
    { id: 5, name: "Product5", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p5.jpg" },
    { id: 6, name: "Product6", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p6.jpg" },
    { id: 7, name: "Product7", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p7.jpg" },
    { id: 8, name: "Product8", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p8.jpg" },
    { id: 9, name: "Product9", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p9.jpg" },
    { id: 10, name: "Product10", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p10.jpg" },
    { id: 11, name: "Product11", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p11.jpg" },
    { id: 12, name: "Product12", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p12.jpg" },
    { id: 13, name: "Product13", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p13.jpg" },
    { id: 14, name: "Product14", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p14.jpg" },
    { id: 15, name: "Product15", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p15.jpg" },
    { id: 16, name: "Product16", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p16.jpg" },
    { id: 17, name: "Product17", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p17.jpg" },
    { id: 18, name: "Product18", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p18.jpg" },
    { id: 19, name: "Product19", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p19.jpg" },
    { id: 20, name: "Product20", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p20.jpg" },
  ]
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-light active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/banner1.jpg" height={600} width="100%" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/banner2.jpg" height={600} width="100%" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/banner3.jpg" height={600} width="100%" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/banner4.jpg" height={600} width="100%" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/banner5.jpg" height={600} width="100%" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/banner6.jpg" height={600} width="100%" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/banner7.jpg" height={600} width="100%" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/banner8.jpg" height={600} width="100%" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/banner9.jpg" height={600} width="100%" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/banner10.jpg" height={600} width="100%" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container-fluid">
        <h3 className='bg-primary text-center p-2 text-light'>Latest Products</h3>
        <div className="row">
          {
            data.map((item, index) => {
              return <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6' key={index}>
                <div className="card">
                  <img src={item.pic} style={{ height: 150, width: "100%" }} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text"><del className='text-danger'>&#8377;{item.basePrice}</del> &#8377;{item.finalPrice} <sup className='text-success'>{item.discount}% Off</sup></p>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                  </div>
                </div>
              </div>
            })
          }
        </div>

        <div className="row">
          <div className="col-md-6">
            <img src="/images/banner4.jpg" height={410} width="100%" alt="" />
          </div>
          <div className="col-md-6">
            <h5 className='bg-primary text-light text-center p-2'>Have any Query? Contact Us</h5>
            <form>
              <div className="mb-3">
                <input type="text" name="name" placeholder='Full Name' className='form-control border-primary border-2' />
              </div>
              <div className="mb-3">
                <input type="email" name="email" placeholder='Email Address' className='form-control border-primary border-2' />
              </div>
              <div className="mb-3">
                <input type="text" name="phone" placeholder='Phone Number' className='form-control border-primary border-2' />
              </div>
              <div className="mb-3">
                <input type="text" name="subject" placeholder='Subject' className='form-control border-primary border-2' />
              </div>
              <div className="mb-3">
                <textarea name="message" rows={3} className='form-control border-primary border-2' placeholder='Message'></textarea>
              </div>
              <div className="mb-3">
                <button type="submit" className='btn btn-primary w-100'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

/*
CSS Property                                        Bootstrap Class
background-color:red                                bg-primary bg-secondary etc
color:white                                         text-light text-dark text-primary etc

text-align:left                                     text-left
text-align:right                                    text-right
text-align:center                                   text-center
text-align:justify                                  text-justify

text-transform:lowercase                            text-lowercase
text-transform:uppercase                            text-uppercase
text-transform:capitalize                           text-capitalize

display:none                                        d-none
display:inline                                      d-inline
display:block                                       d-block
display:inline-block                                d-inline-block

padding-top:10px                                    pt-1 pt-2 pt-3 pt-4 pt-5
padding-bottom:10px                                 pb-1 pb-2 pb-3 pb-4 pb-5
padding-left:10px                                   ps-1 ps-2 ps-3 ps-4 ps-5
padding-right:10px                                  pe-1 pe-2 pe-3 pe-4 pe-5
padding:10px 0                                      py-1 py-2 py-3 py-4 py-5
padding:0 10px                                      px-1 px-2 px-3 px-4 px-5
padding:10px                                        p-1 p-2 p-3 p-4 p-5


margin-top:10px                                    mt-1 mt-2 mt-3 mt-4 mt-5
margin-bottom:10px                                 mb-1 mb-2 mb-3 mb-4 mb-5
margin-left:10px                                   ms-1 ms-2 ms-3 ms-4 ms-5
margin-right:10px                                  me-1 me-2 me-3 me-4 me-5
margin:10px 0                                      my-1 my-2 my-3 my-4 my-5
margin:0 10px                                      mx-1 mx-2 mx-3 mx-4 mx-5
margin:10px                                        m-1 m-2 m-3 m-4 m-5
margin:auto                                         m-auto

float:left                                         float-start
float:right                                        float-end

width:25%                                          w-25 w-50 w-75 w-100

display:flex                                       d-flex
flex-direction:row                                 flex-row
flex-direction:row-reverse                         flex-row-reverse
flex-direction:column                              flex-column
flex-direction:column-reverse                      flex-column-reverse

flex-wrap:wrap                                     flax-wrap

justify-content:space-evenly                       justify-content-evenly 
justify-content:space-around                       justify-content-around 
justify-content:space-between                      justify-content-between

                                                  border-primary border-secondary
                                                  border-1 border-2 ... border-5

                                                  btn btn-primary btn-secondary etc
                                                  btn-group

                                                  form-control form-select



Grid System:
1 Row has 12 Columns
breakpoints:

Breakpoint	      Class   infix	Dimensions
X-Small	          None	  <576px
Small	            sm	    ≥576px
Medium	          md	    ≥768px
Large	            lg	    ≥992px
Extra large	      xl	    ≥1200px
Extra extra large	xxl	    ≥1400px

col-xxl-1     i.e 12 items in a row
col-xl-2      i.e 6 items in a row
col-lg-3      i.e 4 items in a row
col-md-4      i.e 3 items in a row
col-sm-6      i.e 2 items in a row
col-12        i.e 1 item in a row

col-lg-3              i.e col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12
col-xl-2 col-sm-6     i.e col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-sm-6 col-12


<div className="row">
  <div className="col-xl-2 col-sm-6">
    items....
  </div>
</div>                                                  
*/