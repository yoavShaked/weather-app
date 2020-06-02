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
         .description,
         .time,
         .title {
           white-space: nowrap;
           width: 500px;
           overflow: hidden;
           text-overflow: ellipsis;
         }
         @media screen and (max-width: 1024px) {
           width: 800px;
           margin: 0 auto;
         }
         @media screen and (max-width: 900px) {
           width: 600px;
           margin: 0 auto;
           overflow-y: auto;
           &::-webkit-scrollbar {
             width: 15px;
             border-radius: 5px;
           }

           &::-webkit-scrollbar-track {
             box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
           }

           &::-webkit-scrollbar-thumb {
             background-color: darkgrey;
             outline: 1px solid slategrey;
           }
         }
         @media screen and (max-width: 646px) {
           width: 500px;
           .description,
           .time,
           .title {
             white-space: nowrap;
             width: 400px;
             overflow: hidden;
             text-overflow: ellipsis;
           }
         }
         @media screen and (max-width: 560px) {
           width: 360px;
           margin-top: 22px;
           .description,
           .time,
           .title {
             white-space: nowrap;
             width: 242px;
             overflow: hidden;
             text-overflow: ellipsis;
           }
         }
         @media screen and (max-width: 430px) {
           width: 300px;
           .description,
           .time,
           .title {
             white-space: nowrap;
             width: 200px;
             overflow: hidden;
             text-overflow: ellipsis;
           }
         }
         @media screen and (max-width: 375px) {
           width: 236px;
           .description,
           .time,
           .title {
             white-space: nowrap;
             width: 170px;
             overflow: hidden;
             text-overflow: ellipsis;
           }
         }
         @media screen and (max-width: 260px) {
           width: 215px;
           .description,
           .time,
           .title {
             white-space: nowrap;
             width: 120px;
             overflow: hidden;
             text-overflow: ellipsis;
           }
         }
       `;

export const ActionsContainer = styled(Flexbox)`
  justify-content: space-around;
  align-items: center;
  margin: 30px 0;
`;
