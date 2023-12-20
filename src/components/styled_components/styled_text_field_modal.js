import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export const StyledTextField = styled(TextField)({
    width: '30rem',
    "label.Mui-focused": {
        color: 'white'
      },
    ".MuiInput-underline:after": {
    borderBottomColor: 'white'
    },
    '.MuiInput-root.Mui-focused': {
        color:'white'
      },
});

export const StyledEmailTextField = styled(TextField)({
    "label.Mui-focused": {
        color: 'white'
      },
    ".MuiInput-underline:after": {
    borderBottomColor: 'white'
    },
    '.MuiInput-root.Mui-focused': {
        color:'white'
      },
});

export const StyledTimePicker = styled(TimePicker)({
    '.Mui-focused': {
        color: 'white'
    },
    '.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white'
    },
    width: '9.5rem'
});

export const StyledPhoneNumberInput = styled(MuiTelInput)({
    '.Mui-focused': {
        color:'white'
    },
    '.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white'
    },
});