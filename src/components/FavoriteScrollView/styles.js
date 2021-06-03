import styled from "styled-components/native";



export const Scroll = styled.ScrollView`
  font-family: Roboto;
  flex: 1;
  justify-content: center;
  align-self: center;
`;

export const Mold = styled.View`
  display: flex;
  /* background -color: red; */
  height: 100px;
  width: 100%;
  border: 1px solid #d1d1d1;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const PointImage = styled.Image`
  max-height: 100%;
  max-width: 35%;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;

export const TextFild = styled.View`
  position: absolute;
  margin-left: 38%;
`;

export const TitlePoint = styled.Text`
  font-size: 17px;
  color: #7c73e6;
  font-weight: bold;
`;

export const Location = styled.Text`
  font-size: 14px;
  margin-top: 30%;
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
