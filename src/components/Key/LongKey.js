import styled from "styled-components";
import { Icon } from "@iconify/react";

const LongKey = ({ icon, size, className }) => {
    return (
        <div className={className}>
            <Icon icon={icon} color="white" height={size} />
        </div>
    );
};

export default styled(LongKey)`
    padding: 5px 3px;
    background-color: #818384;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    margin: 5px;
    width: 80px;
    height: 63px;
    border-radius: 4px;
`;
