import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Spinner from "../../shared_components/spinner";
import { sendMail } from "../../state/writers/writersActions";

const Questionare = () => {
    const [name, setName] = useState('');
    const [email, setEmal] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const appState = useSelector((state) => state.appStateReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = "Kontaktní formulář | LinyCtenar.cz"
    }, []);

    const sendForm = () => {
        setSuccess('');
        setError('');
        if (name.length < 1) {
            setError('Vyplňte jméno.');
        } else if (!isEmailValid(email)) {
            setError('Vyplňte existující email.');
        } else if (message.length < 1) {
            setError('Vyplňte zprávu.')
        } else {
            dispatch(sendMail(name, email, message));
            setSuccess('Zpráva byla odeslána.');
        }
    }

    const isEmailValid = (email) => {
        return /\S+@\S+\.\S+/.test(email)
    }



    return (
        <Container className="container-content shadow normalFont py-5 px-0">
            {(appState.loading) ? (<Spinner height={250} width={250} />) : (

                <div>
                    <div className="col-11 col-md-8 col-lg-6 mx-auto pt-5 px-0 text-center mt-0 mt-lg-5">
                        <h2 className="questionareH pt-5 pt-lg-0" >Chybí zde rozbor nebo máte dataz?</h2>
                        <h2 className="questionareH">Neváhejte nás kontaktovat!</h2>
                        <div className="text-danger rounded-0"><p>{error}</p></div>
                        <div className="text-success rounded-0"><p>{success}</p></div>
                        <Form className="mt-5 pt-5">
                            <Form.Group controlId="formBasicName">
                                <Form.Control value={name} onChange={event => setName(event.target.value)} className="rounded-0" type="name" placeholder="jméno*" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Control value={email} onChange={event => setEmal(event.target.value)} className="rounded-0" type="email" placeholder="email*" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control value={message} onChange={event => setMessage(event.target.value)} className="rounded-0" placeholder="zpráva*" as="textarea" rows={5} />
                            </Form.Group>
                            <Button onClick={() => sendForm()} className="col-12 web-color-button rounded-0 align-middle">
                                Odeslat
                            </Button>
                        </Form>
                    </div>
                </div>

            )}
        </Container>
    );

}

export default Questionare;