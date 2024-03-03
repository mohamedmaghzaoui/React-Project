import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import React from 'react';
import MonImage from '../src/imageheader.png';
import ImageService from '../src/rectanglegris.png';

class App extends React.Component {
render() {
  return (
    <div>
 <div>
<img src={MonImage} className="poursite" alt="Description de l'image" />

 </div>
    {/* <!-- Fin de la Navbar -->
    <!--  Début du site--> */}
    <div className="container-fluid fruite py-5">
        <div className="container py-5">
            <h1 className="mb-4">Découvrir </h1>
            <div className="row g-4">
                <div className="col-lg-12">
                    <div className="row g-4">
                        <div className="col-xl-3">
                            <div className="input-group w-100 mx-auto d-flex">
                                <input type="search" className="form-control p-3" placeholder="Recherchez Ici " aria-describedby="search-icon-1"/>
                                <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3">
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="mt-3">
                                        <h4>Catégories</h4>
                                        <ul className="list-unstyled fruite-categorie">
                                            <li>
                                                <div className="d-flex justify-content-between fruite-name">
                                                    <a href="#">Montage Vidéo</a>
                                                    <span>(3)</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex justify-content-between fruite-name">
                                                    <a href="#">
                                                        WebDesign</a>
                                                    <span>(5)</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex justify-content-between fruite-name">
                                                    <a href="#">Photographie</a>
                                                    <span>(2)</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex justify-content-between fruite-name">
                                                    <a href="#">
                                                      Musique  </a>
                                                    <span>(8)</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex justify-content-between fruite-name">
                                                    <a href="#">
                                                        Rédaction</a>
                                                    <span>(5)</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                <div className="mb-3">
                                <h4 className="mb-2">Prix</h4>
                                <input
                                    type="range"
                                    className="form-range w-100"
                                    id="rangeInput"
                                    name="rangeInput"
                                    min="0"
                                    max="500"
                                    value="0"
                                    onChange={(e) => {
                                    document.getElementById('amount').value = e.target.value + '€';
                                    }}
                                />
                                <output id="amount" name="amount">0€</output>
                                </div>
                                </div>
                                <div className="col-lg-12">
                                   
                                </div>
                                <div className="col-lg-12">
                                   
                                   
                                </div>
                                <div className="col-lg-12">
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="row g-4 justify-content-center">
                                <div className="col-md-6 col-lg-6 col-xl-4">
                                    <div className="rounded position-relative fruite-item">
                                        <div className="fruite-img">
                                            <img src={ImageService} className="img-fluid w-100 rounded-top" alt="Description de l'image" />
                                        </div>
                                       
                                        <div className="p-4 border border-top-0 rounded-bottom">
                                            <h4>Service 1</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                <p className="text-dark fs-5 fw-bold mb-0">10€ </p>
                                                <a href="#" className="btn border rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> En savoir plus</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-4">
                                    <div className="rounded position-relative fruite-item">
                                        <div className="fruite-img">
                                        <img src={ImageService} className="img-fluid w-100 rounded-top" alt="Description de l'image" />
                                        </div>
                                       
                                        <div className="p-4 border  border-top-0 rounded-bottom">
                                            <h4>Service 2</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                <p className="text-dark fs-5 fw-bold mb-0">45€ </p>
                                                <a href="#" className="btn border rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> En savoir plus</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-4">
                                    <div className="rounded position-relative fruite-item">
                                        <div className="fruite-img">
                                        <img src={ImageService} className="img-fluid w-100 rounded-top" alt="Description de l'image" />
                                        </div>
                                       
                                        <div className="p-4 border  border-top-0 rounded-bottom">
                                            <h4>Service 3</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                <p className="text-dark fs-5 fw-bold mb-0">20€ </p>
                                                <a href="#" className="btn border  rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> En savoir plus</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-4">
                                    <div className="rounded position-relative fruite-item">
                                        <div className="fruite-img">
                                        <img src={ImageService} className="img-fluid w-100 rounded-top" alt="Description de l'image" />
                                        </div>
                                       
                                        <div className="p-4 border  border-top-0 rounded-bottom">
                                            <h4>Service 4</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                <p className="text-dark fs-5 fw-bold mb-0">30€ </p>
                                                <a href="#" className="btn border  rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> En savoir plus</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-4">
                                    <div className="rounded position-relative fruite-item">
                                        <div className="fruite-img">
                                        <img src={ImageService} className="img-fluid w-100 rounded-top" alt="Description de l'image" />
                                        </div>
                                        
                                        <div className="p-4 border  border-top-0 rounded-bottom">
                                            <h4>Service 5</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                <p className="text-dark fs-5 fw-bold mb-0">25€ </p>
                                                <a href="#" className="btn border  rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> En savoir plus</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-4">
                                    <div className="rounded position-relative fruite-item">
                                        <div className="fruite-img">
                                        <img src={ImageService} className="img-fluid w-100 rounded-top" alt="Description de l'image" />
                                        </div>
                                       
                                        <div className="p-4 border  border-top-0 rounded-bottom">
                                            <h4>Service 6</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                <p className="text-dark fs-5 fw-bold mb-0">50€ </p>
                                                <a href="#" className="btn border  rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> En savoir plus</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-4">
                                    <div className="rounded position-relative fruite-item">
                                        <div className="fruite-img">
                                        <img src={ImageService} className="img-fluid w-100 rounded-top" alt="Description de l'image" />
                                        </div>
                                        
                                        <div className="p-4 border  border-top-0 rounded-bottom">
                                            <h4>Service 7</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                <p className="text-dark fs-5 fw-bold mb-0">40€ </p>
                                                <a href="#" className="btn border  rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> En savoir plus</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-4">
                                    <div className="rounded position-relative fruite-item">
                                        <div className="fruite-img">
                                        <img src={ImageService} className="img-fluid w-100 rounded-top" alt="Description de l'image" />
                                        </div>
                                       
                                        <div className="p-4 border  border-top-0 rounded-bottom">
                                            <h4>Service 8</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                <p className="text-dark fs-5 fw-bold mb-0">10€ </p>
                                                <a href="#" className="btn border  rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> En savoir plus</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-4">
                                    <div className="rounded position-relative fruite-item">
                                        <div className="fruite-img">
                                        <img src={ImageService} className="img-fluid w-100 rounded-top" alt="Description de l'image" />
                                        </div>
                                        
                                        <div className="p-4 border  border-top-0 rounded-bottom">
                                            <h4>Service 9</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                <p className="text-dark fs-5 fw-bold mb-0">15€ </p>
                                                <a href="#" className="btn border  rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> En savoir plus</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="pagination d-flex justify-content-center mt-5">
                                        <a href="#" className="rounded">&laquo;</a>
                                        <a href="#" className="active rounded">1</a>
                                        <a href="#" className="rounded">2</a>
                                        <a href="#" className="rounded">3</a>
                                        <a href="#" className="rounded">4</a>
                                        <a href="#" className="rounded">5</a>
                                        <a href="#" className="rounded">6</a>
                                        <a href="#" className="rounded">&raquo;</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Fin du haut du site-->


    <!-- Début du footer --> */}
    <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
        <div className="container py-5">
        <div className="pb-4 mb-4" style={{ borderBottom: '1px solid rgba(226, 175, 24, 0.5)' }}>

                <div className="row g-4">
                    <div className="col-lg-3">
                       
                    </div>
                    <div className="col-lg-6">
                        <div className="position-relative mx-auto">
                            <input className="form-control border-0 w-100 py-3 px-4 rounded-pill" type="number" placeholder="Votre adresse mail"/>
                            <button type="submit" className="btn btn-primary border-0  py-3 px-4 position-absolute rounded-pill text-white" style={{insetBlockStart: 0, insetInlineEnd: 0}}> Souscrivez à la newsletter</button>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="d-flex justify-content-end pt-3">
                            <a className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-secondary btn-md-square rounded-circle" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <div className="d-flex flex-column text-start footer-item">
                        <h4 className="text-light mb-3">Informations sur le site</h4>
                        <a className="btn-link" href="">À Propos de nous</a>
                        <a className="btn-link" href="">Contactez nous</a>
                        <a className="btn-link" href="">Politique de confidentialité</a>
                        <a className="btn-link" href="">Termes et conditions d'utilisation</a>
                        <a className="btn-link" href="">Aide </a>
                    </div>
                </div>
            
                
            </div>
        </div>
    </div>
    {/* <!-- Fin du footer -->

    <!-- Copyright début --> */}
    <div className="container-fluid copyright bg-dark py-4">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    <span className="text-light"><a href="#"><i className="fas fa-copyright text-light me-2"></i>Site JavaScript</a></span>
                </div>
        
            </div>
        </div>
    </div>
    {/* <!-- Copyright fin -->



    <!-- Bouton pour revenir en haut --> */}
    <a href="#" className="btn btn-primary border-3 border-primary rounded-circle back-to-top"><i className="fa fa-arrow-up"></i></a>   

    
{/* <!-- Lien JS -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
<script src="lib/easing/easing.min.js"></script>
<script src="lib/waypoints/waypoints.min.js"></script>
<script src="lib/lightbox/js/lightbox.min.js"></script>
<script src="lib/owlcarousel/owl.carousel.min.js"></script>

<!-- Template Javascript -->
<script src="js/main.js"></script> */}
</div>

  );
}
}

export default App;
