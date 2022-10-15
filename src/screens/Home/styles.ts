import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #454545;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 32px;
`;