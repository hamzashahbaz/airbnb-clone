import 'styled-components';
import { theme } from '../utils/theme';

type Theme = typeof theme;

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
