import React, { useEffect } from "react";
import ImageHolder from "./components/imageHolder";
import AnimatedBox from "./components/animatedBox";

import { useSelector, useDispatch } from "react-redux";
import { faUserCircle, faBookOpen, faNewspaper } from "@fortawesome/free-solid-svg-icons";

import { getStats } from "../../state/appState/appStateActions";
import { Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

const Home = () => {
    const stats = useSelector((state) => state.appStateReducer);
    const dispatch = useDispatch();

    const infoBoxes = [
        { id: 1, name: "Autorů", value: stats.writers, icon: faUserCircle },
        { id: 2, name: "Knih", value: stats.books, icon: faBookOpen },
        { id: 3, name: "Rozborů", value: stats.abstracts, icon: faNewspaper },
    ]

    useEffect(() => {
        dispatch(getStats());
    }, []);


    return (
        <div>
            <ImageHolder />
            <Row>
                {infoBoxes.map(item => <AnimatedBox data={item} key={item.id} />)}
            </Row>
            <Helmet>
                <title>Vyhledávej rozbory k maturitě snadno a pohodlně | LínýČtenář.cz</title>
                <meta name="description" content={"Vyhledávej rozbory z celého českého internetu a usnadni si práci při tvorbě čtenářských deníků a výtahů knih k maturitě."} />
            </Helmet>
        </div>

    );
}

export default Home;