import styled from "styled-components";
import { Icon } from "@iconify/react";
import Key from "../Key/Key";
import LongKey from "../Key/LongKey";

const dummyKeyboard1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const dummyKeyboard2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const dummyKeyboard3 = ["z", "x", "c", "v", "b", "n", "m"];

const Keyboard = ({ className }) => {
    const renderKeyboard = (keyboardRow) => {
        const renderedRow = keyboardRow.map((el) => {
            return <Key key={el} keyButton={el.toUpperCase()} />;
        });

        return renderedRow;
    };

    return (
        <div className={className}>
            <Row>{renderKeyboard(dummyKeyboard1)}</Row>
            <Row>{renderKeyboard(dummyKeyboard2)}</Row>
            <Row>
                <LongKey icon="fluent:arrow-enter-left-24-filled" size="2.2em"></LongKey>
                {renderKeyboard(dummyKeyboard3)}
                <LongKey icon="fluent:backspace-24-regular" size="2.8em" />
            </Row>
        </div>
    );
};

const Row = styled.div`
    display: flex;
    margin: 0.3em;
`;

export default styled(Keyboard)`
    display: flex;
    align-items: center;
    flex-direction: column;
    color: white;
`;
