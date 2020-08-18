import { useHistory } from "react-router-dom";
import React from 'react';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

export const BackButton = () => {
    let history = useHistory();
    return (
        <>
            <button onClick={() => history.goBack()}>
                <KeyboardReturnIcon />
            </button>
        </>
    );
};