import styled from "styled-components";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Toast from "../../components/Toast";

export const StyledAutocomplete = styled(Autocomplete)`
  width: fit-content;
  margin: 0 auto;
  .MuiFormControl-fullWidth {
    width: 800px;
  }
`;

export const ToastContainer = styled.div`
         .MuiAlert-standardError {
           width: 306px;
           margin-left: 277px;
         }
       `;
