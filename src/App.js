import styled from "styled-components";
import Keyboard from "./components/Keyboard/Keyboard";
import NavBar from "./components/NavBar/NavBar";
import WordleBoard from "./components/WordleBoard/WordleBoard";

const App = ({ className }) => {
    return (
        <div className={className}>
            <NavBar />
            <WordleBoard />
            <Keyboard />
        </div>
    );
};

export default styled(App)`
    min-height: 100vh;
    background-color: #121213;
    min-width: 100vw;
`;
