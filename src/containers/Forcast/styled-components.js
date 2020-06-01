import styled from "styled-components";
import Flexbox from "../../components/Flexbox";

export const Container = styled(Flexbox)`
         width: 800px;
         margin: 40px auto auto auto;

         border-radius: 10px;

         box-shadow: -3px 6px 41px 8px rgba(28, 30, 30, 0.49);
         background-color: white;
         .MuiTypography-body1 {
           margin: 0 auto;
           color: #0c0505;
         }
         .title {
           font-size: larger;
           font-weight: 600;
           height: 28px;
           margin-top: 24px;
         }
         @media only screen and (min-width: 768px) {
           width: 650px;
           margin-left: 44px;
         }
         @media screen and (min-width: 1024px) {
           width: 800px;
           margin-left: 88px;
         }
       `;

export const ActionsContainer = styled(Flexbox)`
  justify-content: space-around;
  align-items: center;
  margin: 30px 0;
`;
