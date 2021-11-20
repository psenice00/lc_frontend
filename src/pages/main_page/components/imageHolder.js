import React from 'react';
import book from './book-dark.jpg'
import { Button, Container } from 'react-bootstrap';

var sectionStyle = {
    //TODO - zmena na aktualni foto
    // backgroundImage: "url(https://www.linyctenar.cz/static/frontend/eafe2b3585df0ca98f763f9e8301d7e8.jpg)"
    backgroundImage: "url(http://psenice00.pythonanywhere.com/static/frontend/eafe2b3585df0ca98f763f9e8301d7e8.jpg)"
};


const ImageHolder = () => {

    const focusInuput = () => {
        if (window.innerWidth <= 992) {
            document.querySelector(".animated-icon2").click();
            setTimeout(() => { document.querySelector('#inputBar > div:nth-child(1) > input').focus(); }, 600);
        } else {
            document.querySelector('#inputBar > div:nth-child(1) > input').focus();
            // document.getElementById("searchInput").focus();
        }

    };



    return (
        <div style={sectionStyle} className="bg-img text-center">
            <Container className="h-100 text-light  text-center d-flex align-items-center justify-content-center">
                <div className="container-fluid mr-2 mr-md-4">
                    <h1 className="display-4 dislay-ld-3 mb-5">Vyhledávač rozborů a výtahů knih</h1>
                    <div className="row justify-content-center">
                        <h3 className="px-4 m-0">Zde máte všechny rozbory knih pohodně na jednom místě!</h3>
                        <Button size="sm" onClick={() => focusInuput()} className="col-8 col-md-4 col-lg-3 col-xl-2 py-2 py-md-0 mx-2 web-color-bg border-0 rounded-0 mt-3 mt-md-0 "><h4 className="m-0">Začněte vyhledávat</h4></Button>
                    </div>

                </div>
            </Container>
        </div>
    );
}

export default ImageHolder;