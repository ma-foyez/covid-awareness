import { colors } from "../../theme/colors";
import { typography } from './../../theme/typography';

const BASE = {
    fontFamily: typography.regular,
    fontSize  : 16,
    color     : colors.white,
}

const BASE_BOLD = {
    fontFamily: typography.medium,
    fontSize  : 16,
    color     : colors.white,
}

const BOLD = {
    fontFamily: typography.bold,
    color     : colors.white,
}

export const presets = {
    default: BASE,
    bold   : BOLD,
    h1: {
        ...BOLD,
        fontSize: 32,
    },
    h2: {
        ...BOLD,
        fontSize: 28,
    },
    h3: {
        ...BASE_BOLD,
        fontSize: 24,
    },
    h4: {
        ...BASE_BOLD,
        fontSize: 14,
    },
    small: {
        ...BASE,
        fontSize: 12,
    },

}