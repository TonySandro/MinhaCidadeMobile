import styled from "styled-components/native";

export const Mold = styled.View`
  display: flex;
  /* background -color: red; */
  margin-right: 10px;
  height: 200px;
  width: 200px;
  align-items: center;
  border: 1px solid #d1d1d1;
  border-radius: 10px;
`;

export const TitlePoint = styled.Text`
  font-size: 14px;
  color: #7c73e6;
  font-weight: bold;
  margin-left: 11px;
`;

export const Location = styled.Text`
  font-size: 10px;
  color: #c05c5c;
  font-weight: bold;
  margin-left: 11px;
`;

export const PointImage = styled.Image`
  margin-top: 1%;
  border-radius: 10px;
  max-height: 60%;
  max-width: 98%;
`;

export const Favorite = styled.View`
  position: absolute;
  right: 11px;
  bottom: 15px;
  display: flex;
  align-items: flex-end;
  padding: 3px;

  border-radius: 50px;
  background: #7c73e6;
  border: 2px solid #ffffff;
`;

export const TextFild = styled.View`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;
