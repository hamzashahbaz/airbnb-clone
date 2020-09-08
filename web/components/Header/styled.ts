import styled from 'styled-components';

export const Section = styled.section`
	z-index: 9999;
	width: 100%;
	height: 96px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0px 32px;
	background-color: ${(p) => p.theme.colors.B500};
	box-sizing: border-box;
	@media screen and (min-width: 768px) {
		padding: 0px 0px;
	}
`;
export const Container = styled.div`
	padding: 0;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	@media screen and (min-width: 768px) {
		width: 100%;
		padding: 0 48px;
		justify-content: space-between;
	}
`;
export const Logo = styled.img`
	width: 32px;
	height: 32px;
	margin: 0px 0px 0px 0px;
`;
export const Menu = styled.div`
	width: 24px;
	height: 24px;
	display: block;
	@media screen and (min-width: 768px) {
		display: none;
	}
`;
export const Nav = styled.div`
	display: none;
	@media screen and (min-width: 768px) {
		display: flex;
	}
`;
export const NavItem = styled.a`
	color: ${(p) => p.theme.colors.N0};
	background-color: transparent;
	font-weight: 300;
	font-size: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	margin: 0 36px 0 0;
	padding: 0;
	cursor: pointer;
	text-decoration: none;
	&:last-child {
		margin: 0;
	}
`;
export const Button = styled.div`
	padding: 12px 24px;
	background-color: #4fcdcf;
	color: #1f2443;
	border-radius: 4px;
	font-weight: 400;
	font-size: 16px;
`;
