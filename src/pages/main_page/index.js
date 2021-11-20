import React, { useEffect } from "react";
import ImageHolder from "./components/imageHolder";
import AnimatedBox from "./components/animatedBox";

import { useSelector, useDispatch } from "react-redux";
import { faUserCircle, faBookOpen, faNewspaper } from "@fortawesome/free-solid-svg-icons";

import { getStats } from "../../state/appState/appStateActions";
import { Row } from "react-bootstrap";

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
        </div>

    );
}

export default Home;