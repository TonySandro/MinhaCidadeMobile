import styled from "styled-components/native";

export const Container = styled.View`
  font-family: Roboto;
  flex: 1;
  background-color: #fff;
  padding-left: 5%;
  /* padding-right: 5%; */
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #7c73e6;
  font-weight: bold;
  padding: 2% 0 2% 0;
`;

export const Header = styled.View`
  flex: 1;
  padding-top: 10%;
  padding-right: 7%;

  height: 20%;
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
  flex: 1;
  height: 40%;
  width: 100%;
`;

export const Popular = styled.View`
  flex: 1;
  height: 40%;
  width: 100%;
`;
