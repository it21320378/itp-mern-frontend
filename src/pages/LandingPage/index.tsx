import ManageTicket from "../ManageTicket";
import { createStyles } from '@mantine/styles';
import { Group } from '@mantine/core';
import {
    Container,
    Title,
    Text,
    Button,
    rem,
} from "@mantine/core";
// import LoginPage from "../Login";
import { RefObject, useRef } from "react";
import Footer from "../../components/footer";

const LandingPage = () => {

    //ref the login
    const login: RefObject<HTMLInputElement> = useRef(null);

    //handle scroll
    const handleScroll = (elmRef: any) => {
        window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
    };

    return (
        <>
            {/* <LoginPage ref={login}/> */}
            <ManageTicket ref={login}/>
            {/* <Footer /> */}
        </>
    );
};

export default LandingPage;
