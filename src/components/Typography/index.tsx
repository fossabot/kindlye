import styled, { css } from "styled-components";
import React from "react";

const Typography = styled.article`
    padding: 15px;
`;

export default ({ children }: any) => {
    return <Typography>{children}</Typography>;
};
