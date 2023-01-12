import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>l'ore</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://css.gg/play-button.css" rel="stylesheet"></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        <section id="Logo" className="d-flex align-items-center">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-3 pt-10 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <img src="logo.png" alt="" />
            </div>
          </div>
        </section>
        <div id="hero" className="d-flex align-items-center"></div>
        <section id="Section3" className="d-flex align-items-center">
          <div id="overlay"></div>
          <video
            className="fm-video video-js vjs-fill"
            id="fm-video"
            poster="1x/Artboard3.png"
          >
            <source src="Video.mp4" type="video/mp4" />
          </video>
        </section>
        <section id="Section4">
          <div className="row justify-content-around">
            <div className="col-md-5 col-lg-5 mb-5">
              <div className="Card text-center">
                <div className="d-block mb-0 thumbnail img-fenix">
                  <img
                    src="/1x/fenix.png"
                    alt="Image"
                    className="img-fenix"
                  ></img>
                </div>
                <div className="Card-body">
                  <h3 className="heading mb-0">LOREM IPSUM DOLOR SIT AMET</h3>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-lg-5 mb-5">
              <div className="Card text-center">
                <div className="d-block mb-0 thumbnail img-mafe">
                  <img
                    src="/1x/mafe.png"
                    alt="Image"
                    className="img-fluid"
                  ></img>
                </div>
                <div className="Card-body">
                  <h3 className="heading mb-0">LOREM IPSUM DOLOR SIT AMET</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="" className="modal2 ">
          <div className="row justify-content-around">
            <div className="modal_boton">x</div>
            <div className="col-md-5 col-lg-5 mb-5 d-flex align-items-center">
              <div className="Card text-center">
                <div className="row justify-content-around">
                  <h2>Lorem ipsum dolor sit amet</h2>
                  <hr></hr>
                </div>
                <div className="row justify-content-around">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam ornare felis urna, nec pharetra nisi lacinia eget.
                  </p>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-7 col-lg-7 mb-7">
                    <button id="buy" className="boton buy">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-lg-5 mb-5 align-items-center ">
              <div className="Card text-center ">
                <div className="row justify-content-around ">
                  <img
                    src="/1x/mafe.png"
                    alt="Image"
                    className="img-fluid  "
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="" className="modal1 ">
          <div className="row justify-content-center">
            <div className="modal_boton2">x</div>
            <div className="col-md-5 col-lg-5 mb-5 d-flex align-items-start">
              <div className="Card text-center ">
                <div className="img-fenix2 row justify-content-around ">
                  <img
                    src="/1x/Fenix2.png"
                    alt="Image"
                    className="img-fluid  "
                  ></img>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-lg-5 mb-5 d-flex align-items-center">
              <div className="Card text-center">
                <div className="row justify-content-around">
                  <h2>Lorem ipsum dolor sit amet</h2>
                  <hr></hr>
                </div>
                <div className="row justify-content-around">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam ornare felis urna, nec pharetra nisi lacinia eget.
                  </p>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-7 col-lg-7 mb-7">
                    <button id="buy" className="boton buy">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="Section5" className="d-flex align-items-center">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-3 pt-10 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                aliquet neque feugiat arcu interdum congue. Nam sit amet diam in
                ipsum placerat tristique.
              </p>
              <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-10 col-md-10 col-sm-3 pt-10 pt-lg-0 d-flex justify-content-center">
                  <a href="#Section6">
                    <img src="1x/arrow.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="Section6" className="d-flex align-items-center">
          <div className="row justify-content-start">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 pt-10 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-start">
              <h2>Lorem ipsum dolor sit amet</h2>
              <hr></hr>
              <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-6 pt-10 pt-lg-0 d-flex justify-content-center">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam ornare felis urna, nec pharetra nisi lacinia eget.
                  </p>
                </div>
              </div>
              <div className="row justify-content-start">
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 pt-5 pt-lg-0 d-flex justify-content-start">
                  <button id="buy" className="boton buy">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="Section7" className="d-flex align-items-start">
          <div className="row justify-content-center">
            <h2>IMMERSE YOURSELF IN THE ORIGIN</h2>
            <div className="row justify-content-around">
              <div className="col-md-5 col-lg-5 mb-5">
                <div className="Card text-center">
                  <div className="row justify-content-around">
                    <h3 className="">COLLECTORS</h3>
                    <h4 className="">OPPORTUNITY</h4>
                  </div>
                  <div className="Gema row justify-content-around">
                    <img
                      src="/1x/gema1.png"
                      alt="Image"
                      className="img-fluid"
                    ></img>
                  </div>
                  <div className="row justify-content-around">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam ornare felis urna, nec pharetra nisi lacinia eget.
                    </p>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-7 mb-7">
                      <button className="boton">I Want To Be Part</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-lg-5 mb-5">
                <div className="Card text-center">
                  <div className="row justify-content-around">
                    <h3 className="">TALENTS</h3>
                    <h4 className="">OPPORTUNITY</h4>
                  </div>
                  <div className="Gema row justify-content-around">
                    <img
                      src="/1x/gema2.png"
                      alt="Image"
                      className="img-fluid"
                    ></img>
                  </div>
                  <div className="row justify-content-around">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam ornare felis urna, nec pharetra nisi lacinia eget.
                    </p>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-7 mb-7">
                      <button className="boton">I Want To Be Part</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="payment" className="payment">
          <div className="modal_boton3">x</div>
          <div className="row justify-content-center">
            <h2>CHOOSE PAYMENT METHOD</h2>
            <div className="row justify-content-around">
              <div className="col-md-6 col-lg-6 mb-6">
                <div className="Card text-center">
                  <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-6 mb-6">
                      <button className="boton">Pay with Ether</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 mb-6">
                <div className="Card text-center">
                  <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-6 mb-6">
                      <button id="tarjeta" className="boton">Pay with Card</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="compra ">
        <div className="modal_boton4">x</div>
          <div className="container d-flex justify-content-center mt-10 mb-10">
            <div className="row g-3">
              <div className="col-md-12">
                <span>Payment Method</span>
                <div className="cardpay">
                  <div className="accordion" id="accordionExample">
                    <div className="cardpay">
                      <div className="card-header p-0" id="headingTwo">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-dark btn-block text-left collapsed p-3 rounded-0 border-bottom-custom"
                            type="button"
                            data-bs-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <div className="d-flex align-items-center justify-content-between">
                              <span>Paypal</span>
                              <img
                                src="https://i.imgur.com/7kQEsHU.png"
                                width="30"
                              />
                            </div>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="cardpay-body">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Paypal email"
                          />
                        </div>
                      </div>
                    </div>
                    <hr />

                    <div className="cardpay">
                      <div className="cardpay-header p-0">
                        <h2 className="mb-0" />
                        <button
                          className="btn-tarjeta btn btn-light btn-block text-left p-3 rounded-circle"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        />
                        <div className="d-flex align-items-center justify-content-center">
                          <span>Credit card</span>
                          <div className="icons">
                            <img
                              src="https://i.imgur.com/2ISgYja.png"
                              width="30"
                            />
                            <img
                              src="https://i.imgur.com/W1vtnOV.png"
                              width="30"
                            />
                            <img
                              src="https://i.imgur.com/35tC99g.png"
                              width="30"
                            />
                            <img
                              src="https://i.imgur.com/2ISgYja.png"
                              width="30"
                            />
                          </div>
                        </div>
                      </div>

                      <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="cardpay-body payment-card-body">
                          <span className="font-weight-normal card-text">
                            Card Number
                          </span>
                          <div className="input">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="0000 0000 0000 0000"
                            />
                          </div>
                          <span className="font-weight-normal card-text">
                            Name
                          </span>
                          <div className="input">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Name"
                            />
                          </div>
                          

                          <div className="row mt-3 mb-3">
                            <div className="col-md-6">
                              <span className="font-weight-normal card-text">
                                Expiry Date
                              </span>
                              <div className="input">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="MM/YY"
                                />
                              </div>
                            </div>

                            <div className="col-md-6">
                              <span className="font-weight-normal card-text">
                                CVC/CVV
                              </span>
                              <div className="input">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="000"
                                />
                              </div>
                            </div>
                          </div>

                          <span className="text-muted certificate-text">
                            <i className="fa fa-lock"></i> Your transaction is
                            secured with ssl certificate
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}