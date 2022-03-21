import styled from "styled-components";
import { Icon } from "@iconify/react";

const NavBar = ({ className }) => {
    return (
        <div className={className}>
            <Icon icon="eva:menu-outline" color="white" height="2.1em" />
            <h1>Wordle Clone</h1>
            <Icon icon="ant-design:setting-filled" height="2em" color="white" />
        </div>
    );
};

export default styled(NavBar)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;

    padding: 10px 20px;

    border-bottom: 0.5px solid #8f8f8f;

    h1 {
        font-family: "Roboto Slab", serif;
        font-weight: 900;
        font-size: 2.5em;
        color: white;
    }
`;
