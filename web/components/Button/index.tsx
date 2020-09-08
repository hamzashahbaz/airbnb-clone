import * as React from 'react';
import styled from 'styled-components';

type Props = {
	color: 'B400';
	variant?: false;
};

const StyledButton = styled('button')<Props>`
	background-color: ${({ color, variant, theme }) => (!variant ? theme.colors.B400 : theme.colors[color])};
	border: ${(p) => (!p.variant ? 'none' : `1px solid ${p.theme.colors[p.color]}`)};
	border-radius: 4px;
	width: auto;
	height: auto;
	align-items: center;
	justify-content: center;
	margin-top: 24px;
	color: ${({ theme, variant, color }) => (!variant ? theme.colors.N0 : theme.colors[color])};
	font-size: ${(p) => p.theme.typography.button.size};
	line-height: ${(p) => p.theme.typography.button.lineHeight};
	font-weight: ${(p) => p.theme.typography.button.weight};
	padding: 12px 24px;
` as React.FC;

export const Button: React.FC<Props> = (p) => {
	const { ...props } = p;
	return <StyledButton {...props}>{p.children}</StyledButton>;
};
