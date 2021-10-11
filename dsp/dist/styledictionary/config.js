const StyleDictionary = require('style-dictionary');

module.exports = {
  "source": [
    "properties/colors.json",
    "properties/fonts.json",
    "properties/custom.json",
    "properties/sizes.json"
  ],
  "platforms": {
    "css": {
      "files": [
        {
          "destination": "variables.css",
          "format": "css/variables"
        }
      ],
      "transformGroup": "css",
      "buildPath": "css/"
    },
    "flutter": {
      "files": [
        {
          "destination": "style_dictionary.dart",
          "format": "flutter/class.dart",
          "className": "StyleDictionary"
        }
      ],
      "transformGroup": "flutter",
      "buildPath": "flutter/"
    },
    "android": {
      "files": [
        {
          "destination": "font_dimens.xml",
          "format": "android/fontDimens"
        },
        {
          "destination": "colors.xml",
          "format": "android/colors"
        }
      ],
      "transformGroup": "android",
      "buildPath": "android/"
    },
    "js": {
      "files": [
        {
          "destination": "tokens.js",
          "format": "javascript/es6"
        }
      ],
      "transformGroup": "js",
      "buildPath": "js/"
    },
    "scss": {
      "files": [
        {
          "destination": "variables.scss",
          "format": "scss/variables"
        }
      ],
      "transformGroup": "scss",
      "buildPath": "scss/"
    },
    "ios-swift": {
      "files": [
        {
          "destination": "StyleDictionary.swift",
          "format": "ios-swift/class.swift",
          "className": "StyleDictionary",
          "filter": {}
        }
      ],
      "transformGroup": "ios-swift",
      "buildPath": "ios-swift/"
    }
  }
};

//Lodash code inlined so we don't have to import another library

//getTag.js
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function getTag(value) {
    if (value == null) {
        return value === undefined ? '[object Undefined]' : '[object Null]'
    }
    return toString.call(value)
}

//isSymbol.js
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * isSymbol(Symbol.iterator)
 * // => true
 *
 * isSymbol('abc')
 * // => false
 */
function isSymbol(value) {
    const type = typeof value
    return type == 'symbol' || (type === 'object' && value != null && getTag(value) == '[object Symbol]')
}

//toString.js
/** Used as references for various `Number` constants. */
const INFINITY = 1 / 0

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * toString(null)
 * // => ''
 *
 * toString(-0)
 * // => '-0'
 *
 * toString([1, 2, 3])
 * // => '1,2,3'
 */
function toString2(value) {
    if (value == null) {
        return ''
    }
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value === 'string') {
        return value
    }
    if (Array.isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return `${value.map((other) => other == null ? other : toString2(other))}`
    }
    if (isSymbol(value)) {
        return value.toString()
    }
    const result = `${value}`
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result
}

//unicodeWords.js
/** Used to compose unicode character classes. */
const rsAstralRange = '\\ud800-\\udfff'
const rsComboMarksRange = '\\u0300-\\u036f'
const reComboHalfMarksRange = '\\ufe20-\\ufe2f'
const rsComboSymbolsRange = '\\u20d0-\\u20ff'
const rsComboMarksExtendedRange = '\\u1ab0-\\u1aff'
const rsComboMarksSupplementRange = '\\u1dc0-\\u1dff'
const rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange + rsComboMarksExtendedRange + rsComboMarksSupplementRange
const rsDingbatRange = '\\u2700-\\u27bf'
const rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff'
const rsMathOpRange = '\\xac\\xb1\\xd7\\xf7'
const rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf'
const rsPunctuationRange = '\\u2000-\\u206f'
const rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000'
const rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde'
const rsVarRange = '\\ufe0e\\ufe0f'
const rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange

/** Used to compose unicode capture groups. */
const rsApos = "['\u2019]"
const rsBreak = `[${rsBreakRange}]`
const rsCombo = `[${rsComboRange}]`
const rsDigit = '\\d'
const rsDingbat = `[${rsDingbatRange}]`
const rsLower = `[${rsLowerRange}]`
const rsMisc = `[^${rsAstralRange}${rsBreakRange + rsDigit + rsDingbatRange + rsLowerRange + rsUpperRange}]`
const rsFitz = '\\ud83c[\\udffb-\\udfff]'
const rsModifier = `(?:${rsCombo}|${rsFitz})`
const rsNonAstral = `[^${rsAstralRange}]`
const rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}'
const rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]'
const rsUpper = `[${rsUpperRange}]`
const rsZWJ = '\\u200d'

/** Used to compose unicode regexes. */
const rsMiscLower = `(?:${rsLower}|${rsMisc})`
const rsMiscUpper = `(?:${rsUpper}|${rsMisc})`
const rsOptContrLower = `(?:${rsApos}(?:d|ll|m|re|s|t|ve))?`
const rsOptContrUpper = `(?:${rsApos}(?:D|LL|M|RE|S|T|VE))?`
const reOptMod = `${rsModifier}?`
const rsOptVar = `[${rsVarRange}]?`
const rsOptJoin = `(?:${rsZWJ}(?:${[rsNonAstral, rsRegional, rsSurrPair].join('|')})${rsOptVar + reOptMod})*`
const rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])'
const rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])'
const rsSeq = rsOptVar + reOptMod + rsOptJoin
const rsEmoji = `(?:${[rsDingbat, rsRegional, rsSurrPair].join('|')})${rsSeq}`

const reUnicodeWords = RegExp([
    `${rsUpper}?${rsLower}+${rsOptContrLower}(?=${[rsBreak, rsUpper, '$'].join('|')})`,
    `${rsMiscUpper}+${rsOptContrUpper}(?=${[rsBreak, rsUpper + rsMiscLower, '$'].join('|')})`,
    `${rsUpper}?${rsMiscLower}+${rsOptContrLower}`,
    `${rsUpper}+${rsOptContrUpper}`,
    rsOrdUpper,
    rsOrdLower,
    `${rsDigit}+`,
    rsEmoji
].join('|'), 'g')

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
    return string.match(reUnicodeWords)
}

//words.js
const hasUnicodeWord = RegExp.prototype.test.bind(
    /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/
)

/** Used to match words composed of alphanumeric characters. */
const reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g

function asciiWords(string) {
    return string.match(reAsciiWord)
}

/**
 * Splits `string` into an array of its words.
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * words('fred, barney, & pebbles')
 * // => ['fred', 'barney', 'pebbles']
 *
 * words('fred, barney, & pebbles', /[^, ]+/g)
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern) {
    if (pattern === undefined) {
        const result = hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string)
        return result || []
    }
    return string.match(pattern) || []
}

//kebabCase.js, snakeCase.js, and camelCase.js
const kebabCase = (string) => (
    words(toString2(string).replace(/['\u2019]/g, '')).reduce((result, word, index) => (
        result + (index ? '-' : '') + word.toLowerCase()
    ), '')
)

const snakeCase = (string) => (
    words(toString2(string).replace(/['\u2019]/g, '')).reduce((result, word, index) => (
        result + (index ? '_' : '') + word.toLowerCase()
    ), '')
)

const camelCase = (string) => (
    words(toString2(string).replace(/['\u2019]/g, '')).reduce((result, word, index) => {
        word = word.toLowerCase()
        return result + (index ? upperFirst(word) : word)
    }, '')
)

// custom utils
const upperFirst = function (string) {
    if (string) {
        return string.substr(0, 1).toUpperCase().concat(string.slice(1));
    } else {
        return '';
    }
}

const getTokenNameFromProperty = function (prop) {
    if (prop.attributes.category === 'size' && prop.attributes.type === 'font') {
        return prop.path.slice(2, prop.path.length).join(' ').concat(' size');
    } else {
        return prop.path.slice(1, prop.path.length).join(' ');
    }
}

// Custom name transforms to remove category
StyleDictionary.registerTransform({
    name: 'name/dsp/kebab',
    type: 'name',
    matcher: function (prop) {
        return true;
    },
    transformer: function (prop) {
        return kebabCase(getTokenNameFromProperty(prop));
    }
});

StyleDictionary.registerTransform({
    name: 'name/dsp/camel',
    type: 'name',
    matcher: function (prop) {
        return true;
    },
    transformer: function (prop) {
        return camelCase(getTokenNameFromProperty(prop));
    }
});

StyleDictionary.registerTransform({
    name: 'name/dsp/snake',
    type: 'name',
    matcher: function (prop) {
        return true;
    },
    transformer: function (prop) {
        return snakeCase(getTokenNameFromProperty(prop));
    }
});

StyleDictionary.registerTransform({
    name: 'name/dsp/pascal',
    type: 'name',
    matcher: function (prop) {
        return true;
    },
    transformer: function (prop) {
        return upperFirst(camelCase(getTokenNameFromProperty(prop)));
    }
});

// Override default transform groups with custom name transform
StyleDictionary.registerTransformGroup({
    name: 'css',
    transforms: [
        'attribute/cti',
        'name/dsp/kebab', //replaces 'name/cti/kebab',
        'time/seconds',
        'content/icon',
        'size/rem',
        'color/css'
    ]
});

StyleDictionary.registerTransformGroup({
    name: 'scss',
    transforms: [
        'attribute/cti',
        'name/dsp/kebab', //replaces 'name/cti/kebab',
        'time/seconds',
        'content/icon',
        'size/rem',
        'color/css',
    ]
});

StyleDictionary.registerTransformGroup({
    name: 'android',
    transforms: [
        'attribute/cti',
        'name/dsp/snake', //replaces 'name/cti/snake',
        'color/hex8android',
        'size/remToSp',
        'size/remToDp',
    ]
});

StyleDictionary.registerTransformGroup({
    name: 'ios',
    transforms: [
        'attribute/cti',
        'name/dsp/pascal', //replaces 'name/cti/pascal',
        'color/UIColor',
        'content/objC/literal',
        'asset/objC/literal',
        'size/remToPt',
        'font/objC/literal',
    ]
});

StyleDictionary.registerTransformGroup({
    name: 'ios-swift',
    transforms: [
        'attribute/cti',
        'name/dsp/camel', //replaces 'name/cti/camel',
        'color/UIColorSwift',
        'content/swift/literal',
        'asset/swift/literal',
        'size/swift/remToCGFloat',
        'font/swift/literal',
    ]
});

StyleDictionary.registerTransformGroup({
    name: 'js',
    transforms: [
        'attribute/cti',
        'name/dsp/pascal', //replaces 'name/cti/pascal',
        'size/rem',
        'color/hex',
    ]
});

StyleDictionary.registerTransformGroup({
    name: 'flutter',
    transforms: [
        'attribute/cti',
        'name/dsp/camel', //replaces 'name/cti/camel',
        'color/hex8flutter',
        'size/flutter/remToDouble',
        'content/flutter/literal',
        'asset/flutter/literal',
        'font/flutter/literal',
    ]
});