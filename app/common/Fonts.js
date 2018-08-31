"use strict";

import { Platform, Dimensions, PixelRatio } from "react-native";

const DEFAULT_FONT = "Helvetica";

function fontWithWeight(family = DEFAULT_FONT, weight = "regular") {
    return family;
}

// attempt to normalize x-platform line heights
function lineHeight(val = 1, scale = 1, normalized = true) {
    let adjusted = normalized ? normalize(val) : val;
    return Math.round(Platform.OS === "android" ? adjusted * scale : adjusted);
}

const pixelRatio = PixelRatio.get();
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const normalize = size => {
    if (pixelRatio >= 2 && pixelRatio < 3) {
        // iphone 5s and older Androids
        if (deviceWidth < 360) {
            return size * 0.95;
        }
        // iphone 5
        if (deviceHeight < 667) {
            return size;
            // iphone 6-6s
        } else if (deviceHeight >= 667 && deviceHeight <= 735) {
            return size * 1.15;
        }
        // older phablets
        return size * 1.25;
    } else if (pixelRatio >= 3 && pixelRatio < 3.5) {
        // catch Android font scaling on small machines
        // where pixel ratio / font scale ratio => 3:3
        if (deviceWidth <= 360) {
            return size;
        }
        // Catch other weird android width sizings
        if (deviceHeight < 667) {
            return size * 1.15;
            // catch in-between size Androids and scale font up
            // a tad but not too much
        }
        if (deviceHeight >= 667 && deviceHeight <= 735) {
            return size * 1.2;
        }
        // catch larger devices
        // ie iphone 6s plus / 7 plus / mi note 等等
        return size * 1.27;
    } else if (pixelRatio >= 3.5) {
        // catch Android font scaling on small machines
        // where pixel ratio / font scale ratio => 3:3
        if (deviceWidth <= 360) {
            return size;
            // Catch other smaller android height sizings
        }
        if (deviceHeight < 667) {
            return size * 1.2;
            // catch in-between size Androids and scale font up
            // a tad but not too much
        }
        if (deviceHeight >= 667 && deviceHeight <= 735) {
            return size * 1.25;
        }
        // catch larger phablet devices
        return size * 1.4;
    } else
    // if older device ie pixelRatio !== 2 || 3 || 3.5
        return size;
};


export default {
    default: DEFAULT_FONT,
    helvetica: DEFAULT_FONT,
    h1: DEFAULT_FONT,
    h2: DEFAULT_FONT,
    h3: DEFAULT_FONT,
    h4: DEFAULT_FONT,
    p: DEFAULT_FONT,
    button: DEFAULT_FONT,

    fontWithWeight,
    lineHeight,
    normalize
};
