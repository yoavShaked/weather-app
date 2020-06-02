import styled from "styled-components";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Toast from "../../components/Toast";

export const StyledAutocomplete = styled(Autocomplete)`
         width: fit-content;
         margin: 0 auto;
         .MuiFormControl-fullWidth {
           width: 800px;
           @media screen and (max-width: 1024px) {
             width: 800px;
           }
           @media screen and (max-width: 900px) {
             width: 600px;
           }

           @media screen and (max-width: 646px) {
             width: 500px;
           }
           @media screen and (max-width: 560px) {
             width: 363px;
             margin: 0 auto;
             margin-top: 20px;
           }
           @media screen and (max-width: 430px) {
             width: 300px;
             margin: 0 auto;
             margin-top: 20px;
           }
           @media screen and (max-width: 375px) {
             width: 236px;
             margin: 0 auto;
             margin-top: 20px;
           }
           @media screen and (max-width: 260px) {
             width: 215px;
    
           }
         }
       `;

export const ToastContainer = styled.div`
  .MuiAlert-standardError {
    width: 306px;
    margin-left: 277px;
  }
`;
