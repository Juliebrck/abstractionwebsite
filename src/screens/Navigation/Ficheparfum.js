import React, { useState, useEffect } from "react";
import "./Navigation.css";
import { connect } from "react-redux";
import { Container, Col, Row, Input, Button, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Link } from 'react-router-dom';
import Layout from "antd/lib/layout/layout";
import Header from "../Header";
import Footer from "../Footer.js";


const Ficheparfum = ({ name }) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropdown3, setDropdown3] = useState(false);

    const [format, setFormat] = useState();
    const [color, setColor] = useState();
    const [quantity, setQuantity] = useState();

    const carouselItems = [
        {
            src: './flaconcanard.jpg',
            altText: 'Bleu canard',
            caption: 'Bleu canard'
        },
        {
            src: './flaconrose.jpg',
            altText: 'Rose',
            caption: 'Rose'
        },
        {
            src: './flaconmastic.jpg',
            altText: 'Mastic',
            caption: 'Mastic'
        }
    ];

    // Items array length
    const itemLength = carouselItems.length - 1

    // Previous button for Carousel
    const previousButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ?
            itemLength : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    // Next button for Carousel
    const nextButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === itemLength ?
            0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    // Carousel Item Data
    const carouselItemData = carouselItems.map((item) => {
        return (
            <CarouselItem
                key={item.src}
                onExited={() => setAnimating(false)}
                onExiting={() => setAnimating(true)}
            >
                <img src={item.src} alt={item.altText} />
            </CarouselItem>
        );
    });

    const toggle1 = () => {
        setDropdown1(!dropdown1)
    };

    const toggle2 = () => {
        setDropdown2(!dropdown2)
    };

    const toggle3 = () => {
        setDropdown3(!dropdown3)
    };

    const chooseFormat = (format) => {
        setFormat(format)
    };

    const chooseColor = (color) => {
        setColor(color)
    };

    const chooseQuantity = (quantity) => {
        setQuantity(quantity)
    };


    return (
        <Layout fluid style={styles.container}>
            <div style={{ height: "30vh", width: "1px", backgroundColor: "#1b1a18", marginLeft: "30vw", marginTop: "315vh", position: "absolute" }}></div>
            <div style={{ height: "30vh", width: "1px", backgroundColor: "#1b1a18", marginLeft: "75vw", marginTop: "230vh", position: "absolute" }}></div>
            <div style={styles.greyTitle}>PARFUMEUR</div>
            <img style={styles.ginkoright} width="340px" src="./ginko.png" alt="ginko" />
            <img style={styles.ginkoleft} width="340px" src="./ginko.png" alt="ginko" />

            <Row style={{ width: "100vw" }}>
                <Header title={"PARFUM"} />
            </Row>
            <Row style={{ width: "100vw" }}>
                <div style={{ width: "100vw", height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img style={{ borderRadius: "40px", marginTop: "-15px", zIndex: 1 }} width="170px" src="./flaconcanard.jpg" alt="Flacon bleu canard" />
                    <div style={{ marginLeft: "25px" }}>
                        <h2 style={{ fontFamily: "beau", fontSize: "24px" }}>{name}</h2>
                        <div style={{ display: "flex" }}>
                            <h3 style={{ fontFamily: "beau", fontSize: "16px" }}>#524 - masculin</h3>
                            <div style={{ height: "3vh", width: "1px", backgroundColor: "#1b1a18", marginLeft: "1vw", marginRight: "1vw" }}></div>
                            <h3 style={{ fontFamily: "beau", fontSize: "16px" }}>#432 - féminin</h3>
                        </div>

                        <div style={{ ...styles.textContainer, height: "none", width: "50vw", marginLeft: "-30px" }}>
                            <p style={{ fontSize: 16 }}>Abstraction Paris est née d’une observation minutieuse de l’industrie de la parfumerie. La marque a pour vocation de proposer une gamme de parfums classiques et une gamme de parfums millésimés.</p>
                            <div style={{ height: "1px", width: "36vw", backgroundColor: "#1b1a18", marginRight: "1vw", zIndex: 2 }}></div>
                            <div style={{ display: "flex", marginTop: "2vh" }}>
                                <div style={{ display: "flex", flexDirection: "column", height: "10vh" }}>
                                    <span style={{ fontFamily: "beau", fontSize: "12px" }}>FORMAT</span>
                                    <Dropdown isOpen={dropdown1} toggle={toggle1} style={{ ...styles.input, width: "6vw", marginRight: "1vh" }}>
                                        <DropdownToggle style={{ background: "none", border: "none", padding: 0 }} caret>
                                            <Input style={{ ...styles.input, width: "6vw" }} placeholder={format ? `${format}ml` : ""} ></Input>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem onClick={() => chooseFormat(50)}><h2 style={{ fontSize: "12px" }}>Flacon 50ml</h2></DropdownItem>
                                            <DropdownItem onClick={() => chooseFormat(100)}><h2 style={{ fontSize: "12px" }}>Flacon 100ml</h2></DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", height: "10vh" }}>
                                    <span style={{ fontFamily: "beau", fontSize: "12px" }}>COLORIS FLACON</span>
                                    <Dropdown isOpen={dropdown2} toggle={toggle2} style={{ ...styles.input, width: "9vw", marginRight: "1vh" }}>
                                        <DropdownToggle style={{ background: "none", border: "none", padding: 0 }} caret>
                                            <Input style={{ ...styles.input, width: "9vw" }} placeholder={color ? color : ""} ></Input>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem onClick={() => chooseColor("Marine")}><h2 style={{ fontSize: "12px" }}>Marine</h2></DropdownItem>
                                            <DropdownItem onClick={() => chooseColor("Canard")}><h2 style={{ fontSize: "12px" }}>Canard</h2></DropdownItem>
                                            <DropdownItem onClick={() => chooseColor("Mastic")}><h2 style={{ fontSize: "12px" }}>Mastic</h2></DropdownItem>
                                            <DropdownItem onClick={() => chooseColor("Rose")}><h2 style={{ fontSize: "12px" }}>Rose</h2></DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", height: "10vh" }}>
                                    <span style={{ fontFamily: "beau", fontSize: "12px" }}>QUANTITÉ</span>
                                    <Dropdown isOpen={dropdown3} toggle={toggle3} style={{ ...styles.input, width: "5vw", marginRight: "1vh" }}>
                                        <DropdownToggle style={{ background: "none", border: "none", padding: 0 }} caret>
                                            <Input style={{ ...styles.input, width: "5vw" }} placeholder={quantity ? quantity : ""} ></Input>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem onClick={() => chooseQuantity(1)}><h2 style={{ fontSize: "12px" }}>1</h2></DropdownItem>
                                            <DropdownItem onClick={() => chooseQuantity(2)}><h2 style={{ fontSize: "12px" }}>2</h2></DropdownItem>
                                            <DropdownItem onClick={() => chooseQuantity(3)}><h2 style={{ fontSize: "12px" }}>3</h2></DropdownItem>
                                            <DropdownItem onClick={() => chooseQuantity(4)}><h2 style={{ fontSize: "12px" }}>4</h2></DropdownItem>
                                            <DropdownItem onClick={() => chooseQuantity(5)}><h2 style={{ fontSize: "12px" }}>5</h2></DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", height: "10vh" }}>
                                    <span style={{ fontFamily: "beau", fontSize: "12px", color: "#ffffff" }}>.</span>
                                    <Button style={styles.button}>AJOUTER AU PANIER</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
            <Row style={{ width: "100vw" }}>
                <div style={{ width: "70vw", height: "40vh", display: "flex", justifyContent: "space-around", alignItems: "center", marginTop: "-5vh", marginBottom: "5vh" }}>
                    <div className="perfumesquare" style={{ ...styles.mpbutton, backgroundImage: "url(./fleur.jpg)", backgroundSize: "contain" }}>AMBRE GRIS</div>
                    <div className="perfumesquare" style={{ ...styles.mpbutton, backgroundImage: "url(./fleur.jpg)", backgroundSize: "contain" }}>AMBRE GRIS</div>
                    <div className="perfumesquare" style={{ ...styles.mpbutton, backgroundImage: "url(./fleur.jpg)", backgroundSize: "contain" }}>AMBRE GRIS</div>
                    <div className="perfumesquare" style={{ ...styles.mpbutton, backgroundImage: "url(./fleur.jpg)", backgroundSize: "contain" }}>AMBRE GRIS</div>
                </div>
            </Row>
            <Row style={{ width: "100vw" }}>
                <div style={{ width: "100vw", height: "110vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <h2 style={{ fontFamily: "beau", fontStyle: "italic", fontSize: "28px" }}>Choisissez votre flacon<span style={{ fontWeight: 600 }}> réutilisable </span>selon vos <span style={{ fontWeight: 600 }}>goûts</span></h2>
                    <div style={{ width: "100vw", height: "80vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#ffffff", marginTop: "15vh", zIndex: 2 }}>
                        <Carousel previous={previousButton} next={nextButton}
                            activeIndex={activeIndex}>
                            <CarouselIndicators items={carouselItems}
                                activeIndex={activeIndex}
                                onClickHandler={(newIndex) => {
                                    if (animating) return;
                                    setActiveIndex(newIndex);
                                }} />
                            {carouselItemData}
                            <CarouselControl directionText="Prev"
                                direction="prev" onClickHandler={previousButton} />
                            <CarouselControl directionText="Next"
                                direction="next" onClickHandler={nextButton} />
                        </Carousel>
                    </div>
                </div>
            </Row>

            <Row style={{ width: "100vw" }}>
                <div style={{ width: "100vw", height: "88vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ ...styles.textContainer, height: "60vh", width: "80vw", zIndex: 1 }}>
                        <p >
                            <span style={{ textDecoration: "underline" }}>Conseil d’utilisation</span>
                            <br></br><br></br>
                            Abstraction Paris est née d’une observation minutieuse de l’industrie de la parfumerie. La marque a pour vocation de proposer une gamme de parfums classiques et une gamme de parfums millésimés, ainsi que des ateliers « matières premières » permettant à sa clientèle d’appréhender l’univers des parfums avec davantage de connaissances.
                            <br></br><br></br>
                            <span style={{ textDecoration: "underline" }}>Ingrédients</span>
                            <br></br><br></br>
                            La qualité et l’authenticité sont au coeur de nos valeurs. Elles se retrouvent tant dans le choix de nos parfumeurs et de nos partenaires que dans la sélection de nos matières premières. Nous travaillons en direct avec les meilleurs fournisseurs mondiaux et souhaitons faire la lumière sur les savoir-faire ancestraux de cette industrie auprès de notre clientèle.
                        </p>
                    </div>
                </div>
            </Row>
            <Row style={{ width: "100vw" }}>
                <div style={{ width: "100vw", height: "80vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#fffef2", marginTop: "10vh" }}>
                    <img style={{ borderRadius: "20px", marginTop: "-15px", zIndex: 1 }} width="320px" src="./amelie.jpg" alt="Amélie J." />
                    <div style={{ marginLeft: "25px" }}>
                        <h2 style={{ fontFamily: "beau", fontSize: "24px" }}>Amélie J.</h2>
                        <h2 style={{ fontFamily: "beau", fontStyle: "italic", fontSize: "22px" }}>Sombres Marguerites</h2>
                        <div style={{ ...styles.textContainer, height: "40vh", width: "40vw", marginLeft: "-30px" }}>
                            <p style={{ fontSize: 16 }}>Amélie est parfumeure chez Givaudan également, aux côtés de Mylène. Sa passion de la parfumerie lui vient de sa mère, dont la famille vient de  Grasse. Amélie a passé toutes ses vacances d’enfance dans l’arrière pays grassois où elle a été bercée par les odeurs emblématiques de la région, lavande, ciste, jasmin… C’est donc depuis de nombreuses années qu’elle nourrit cette passion à laquelle elle s’adonne aujourd’hui entièrement.</p>
                        </div>
                    </div>
                </div>
            </Row>


            <Footer />

        </Layout >
    );
}

export default connect(null, null)(Ficheparfum);

const styles = {
    container: {
        minHeight: "100vh",
        width: "100vw",
        paddingLeft: "0px",
        paddingRight: "0px",
        marginLeft: 0,
        marginRight: 0,
        backgroundColor: "#fffef2",
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: "white",
        borderRadius: "20px",
        padding: "30px",
        marginTop: "30px",
        fontFamily: "beau",
        fontSize: "18px",
        lineHeight: "30px",

    },
    button: {
        backgroundColor: "#1b1a18",
        fontFamily: "avenir",
        fontSize: "10px",
        fontWeight: 800,
        height: "4vh",
        width: "12vw",
        borderRadius: 5,
        justifyContent: "center",
        marginBottom: "20vh"
    },
    greyTitle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1b1a18",
        color: "#fff2ef",
        fontFamily: "beau",
        fontSize: "20px",
        height: "7vh",
        width: "12vw",
        borderRadius: 8,
        position: "absolute",
        marginLeft: "24vw",
        marginTop: "330vh",
        letterSpacing: 2,
    },
    input: {
        borderRadius: 4,
        marginBottom: "10px",
        height: "4vh",
        marginRight: "1vw",
        fontSize: "14px"
    },
    mpbutton: {
        height: "180px",
        width: "180px",
        backgroundColor: "rgba(27, 26, 24, 0.4)",
        borderRadius: 100,
        border: "0.5px black solid",
        margin: "8px 20px 8px 20px",
        color: "#1b1a18",
        fontFamily: "beau",
        fontWeight: 500,
        fontSize: "18px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    ginkoright: {
        marginLeft: "80vw",
        marginTop: "-8vh",
        position: "absolute",
        zIndex: 2,
        opacity: 0.6,
        transform: "rotate(-160deg)"
    },
    ginkoleft: {
        marginLeft: "-5vw",
        marginTop: "312vh",
        position: "absolute",
        zIndex: 2,
        opacity: 0.6,
        transform: "rotate(90deg)"
    }
}