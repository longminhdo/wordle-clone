import styled from "styled-components";

const Key = ({ keyButton, className }) => {
    return <div className={className}>{keyButton}</div>;
};

export default styled(Key)`
    padding: 5px 3px;
    background-color: #818384;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    margin: 5px;
    width: 50px;
    height: 63px;
    border-radius: 4px;
`;
