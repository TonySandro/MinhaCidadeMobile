import styled from "styled-components/native";

export const Container = styled.View`
  font-family: Roboto;
  flex: 1;
  background-color: #fff;
  padding-left: 5%;
  padding-right: 5%;
`;

export const Header = styled.View`
  padding-top: 10%;
  padding-right: 7%;
  text-align: center;

  height: 18%;
  width: 100%;
`;

export const Icons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #7c73e6;
  font-weight: bold;
`;

export const Body = styled.View`
  flex: 1;
  align-items: center;
`;

export const Mold = styled.View`
  display: flex;
  /* background -color: red; */
  height: 25%;
  width: 100%;
  border: 1px solid #d1d1d1;
  border-radius: 10px;
  margin-bottom: 5px;
`;

export const PointImage = styled.Image`
  border-radius: 10px;
  max-height: 100%;
  max-width: 35%;
`;

export const TextFild = styled.View`
  position: absolute;
  margin-left: 37%;
`;

export const TitlePoint = styled.Text`
  font-size: 17px;
  color: #7c73e6;
  font-weight: bold;
`;

export const Location = styled.Text`
  font-size: 14px;
  margin-top: 40%;
  color: #ff1212;
`;

export const Exit = styled.View`
  position: absolute;
  height: 20px;
  width: 20px;
  right: 0;
  display: flex;
  align-items: center;

  /* background: #fd1515; */
`;
