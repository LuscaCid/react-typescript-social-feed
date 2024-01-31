import 'styled-components'

import {defaultTheme} from '../styles/defaultTheme/'
import { OnlyInputProperties } from '../@types/Input-Label-ContainerTypes'

type DefaultThemeType = typeof OnlyInputProperties

declare module 'styled-components' {
    export interface DefaultTheme extends DefaultThemeType {}
}