import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  min-height: 173px;
  max-height: 173px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Title = styled.Text`
  margin: auto;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;