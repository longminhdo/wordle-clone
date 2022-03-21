import styled from "styled-components";

const Letter = ({ value, className }) => {
    return <div className={className}>{value}</div>;
};

export default styled(Letter)`
    height: 75px;
    width: 75px;
    border: 0.8px solid #3a3a3c;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 3em;
    font-weight: bold;
`;
