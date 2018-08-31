
const NAMED_COLORS = {
    // grayscale (light to dark)
    white: "rgba(255, 255, 255, 1)",
    bianca: "rgba(251, 249, 240, 1)",
    timberwolf: "rgba(218, 216, 210, 1)",
    magnesium: "rgba(179, 179, 179, 1)",
    gray: "rgba(128, 128, 128, 1)",
    matterhorn: "rgba(83, 83, 83, 1)",
    nero: "rgba(33, 33, 33, 1)",
    black: "rgba(18, 18, 18, 1)",

    // the rest
    red: "rgba(255, 59, 48, 1)",
    orange: "rgba(255, 149, 0, 1)",
    yellow: "rgba(255, 204, 0, 1)",
    green: "rgba(76, 217, 100, 1)",
    tealBlue: "rgba(90, 200, 250, 1)",
    blue: "rgba(0, 122, 255, 1)",
    purple: "rgba(88, 86, 214, 1)",
    pink: "rgba(255, 45, 85, 1)",
    darkPink: "rgba(200, 40, 159, 1)",
    salmon: "rgba(243, 91, 89, 1)",
    ruby: "rgba(224, 17, 95, 1)",
};

export default THEME_COLORS = {
    ...NAMED_COLORS,

    darkBackground: NAMED_COLORS.black,
    lightBackground: NAMED_COLORS.nero,
    primaryText: NAMED_COLORS.white,
    lightText: NAMED_COLORS.magnesium,
    cellBorder: NAMED_COLORS.magnesium,

    header: {
        backgroundColor: NAMED_COLORS.nero,
        titleColor: NAMED_COLORS.white,
        tintColor: NAMED_COLORS.red,
        borderBottomColor: NAMED_COLORS.black,
    },

    tabBar: {
        backgroundColor: NAMED_COLORS.nero,
        activeTintColor: NAMED_COLORS.red,
        inactiveTintColor: NAMED_COLORS.gray,
        borderTopColor: NAMED_COLORS.black,
    },

};