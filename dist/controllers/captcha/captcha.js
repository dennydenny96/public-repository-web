'use strict';
const opentype = require('opentype.js');
const chToPath = require('./ch-to-path');
const random = require('./random');


const defaultOption = {
	background: 'rgb(255,240,255)',
	backgroundrandom: 1,
	fontSize: 50,
	width: 600,
	height: 100,
	charPreset: '0123456789',
	//charPreset: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
	size: 5,
	noise: 4
};

let fonts = [];
let fontfiles = [
	'Chunkfive.otf',
	'Montserrat-SemiBold.otf',
	'MontserratAlternates-Bold.otf',
	'OpenSans-ExtraBold.ttf',
	'Roboto-Bold.ttf',
	'Roboto-Medium.ttf'
];
for (let i = 0; i < fontfiles.length; i++) {
	fonts.push(opentype.loadSync(__dirname + '/fonts/' + fontfiles[i]));
}

function loadFont(filepath) {
	fonts.push(opentype.loadSync(filepath));
}

function getLineNoise(options, isouter = false) {
	let width = options.width;
	let height = options.height;
	let noise = options.noise;
	let filteredColor = options.filteredColor;
	let bgRGB = options.background;
	let bgColor = `rgb(${bgRGB.r}, ${bgRGB.g}, ${bgRGB.b})`;
	let fontSize = options.fontSize;
	const noiseLines = [];
	let i = -1;
	let strokew = ((fontSize) / 10) - 2;
	while (++i < noise / 2) {
		const start = `${random.int(1, 21)} ${random.int(1, height - 1)}`;
		const end = `${random.int(width - 21, width - 1)} ${random.int(1, height - 1)}`;
		const mid1 = `${random.int((width / 2) - 21, (width / 2) + 21)} ${random.int(1, height - 1)}`;
		const mid2 = `${random.int((width / 2) - 21, (width / 2) + 21)} ${random.int(1, height - 1)}`;
		const color = isouter ? bgColor : random.randomFilteredColor(filteredColor);
		const strokewidth = `${random.int(strokew - 2, strokew)}`;
		noiseLines.push(`<path d="M${start} C${mid1},${mid2},${end}" stroke="${color}" stroke-width="${strokewidth}"  fill="none"/>`);
	}

	return noiseLines;
};

const getText = function (text, options) {
	const len = text.length;
	const spacing = (options.width - 2) / (len + 1);
	const min = options.inverse ? 10 : 0;
	const max = options.inverse ? 14 : 4;
	let i = -1;
	const out = [];

	while (++i < len) {
		let randomfont = random.int(0, fontfiles.length - 1);
		const x = spacing * (i + 1);
		const y = random.int(options.height / 4, options.height * 3 / 4);
		const charPath = chToPath(text[i], x, y, options.fontSize, fonts[randomfont]);

		const color = options.color || random.randomFilteredColor(options.filteredColor);
		out.push(`<path fill="${color}" d="${charPath}"/>`);
	}

	return out;
};

const createCaptcha = function (text, options) {
	let bgrandom = 'rgb(0,0,0)';
	if (options.backgroundrandom) {
		let bgRGB = random.randomColor();
		options.filteredColor = random.filteredColor(bgRGB);
		options.background = bgRGB;
		bgrandom = `rgb(${bgRGB.r}, ${bgRGB.g}, ${bgRGB.b})`;
	}
	const bgRect = options.background ?
		`<rect width="100%" height="100%" fill="${bgrandom}"/>` : '';
	const paths = [].concat(getLineNoise(options))
		.concat(getText(text, options))
		.concat(getLineNoise(options, true))
		.join('');
	const start = `<svg xmlns="http://www.w3.org/2000/svg" width="${options.width}" height="${options.height}">`;
	const xml = `${start}${bgRect}${paths}</svg>`;

	return xml;
};

function getOption(userOptions) {
	userOptions = userOptions || {};

	return Object.assign({}, defaultOption, userOptions);
}

function create(options) {
	const userOptions = getOption(options);
	const text = random.captchaText(userOptions);
	const data = createCaptcha(text, userOptions);

	return { text, data };
};

exports.create = create;
exports.loadFont = loadFont;
