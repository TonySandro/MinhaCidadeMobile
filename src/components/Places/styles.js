import styled from "styled-components/native";

export const Container = styled.View`
  font-family: Roboto;
  flex: 1;
  background-color: #fff;
  padding-left: 7%;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #7c73e6;
  font-weight: bold;
  padding: 20px 0 20px 0;
`;

export const Header = styled.View`
  padding-top: 10%;
  padding-right: 7%;

  height: 18%;
  width: 100%;
`;

export const Icons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SeachInput = styled.TextInput`
  margin-top: 6%;

  border-width: 1;
  border-radius: 5px;
  border-color: #7c73e6;

  width: 100%;
  height: 32px;
`;

export const Next = styled.View`
  height: 40%;
  width: 100%;
`;

export const Popular = styled.View`
  height: 40%;
  width: 100%;
`;

export const Mold = styled.View`
  display: flex;
  /* background -color: red; */
  height: 70%;
  width: 50%;
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
