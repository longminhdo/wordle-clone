import styled from "styled-components";
import Letter from "../Letter/Letter";
import { Row } from "../Row/Row";

const initialBoard = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["d", "c", "a", "b", "e"],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];

//vi sao export default row lai loi ma export lai ok?

const WordleBoard = ({ className }) => {
    const renderBoard = (board) => {
        const renderedBoard = board.map((row) => {
            const lettersRow = row.map((col) => {
                return <Letter value={col.toUpperCase()} />;
            });
            return <Row>{lettersRow}</Row>;
        });
        return renderedBoard;
    };
    return <div className={className}>{renderBoard(initialBoard)}</div>;
};

export default styled(WordleBoard)`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 35px auto;
`;
