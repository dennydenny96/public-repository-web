'use strict';

const randomInt = function (min, max) {
	return Math.round(min + (Math.random() * (max - min)));
};

exports.int = randomInt;

exports.captchaText = function (options) {
	const size = options.size;
	const chars = options.charPreset;
	let i = -1;
	let out = '';
	const len = chars.length - 1;

	while (++i < size) {
		out += chars[randomInt(0, len)];
	}

	return out;
};

/**
 * Returns an object that has the following props:
 * text, equation
 */
exports.mathExpr = function () {
	const left = randomInt(1, 9);
	const right = randomInt(1, 9);
	const text = (left + right).toString();
	const equation = left + '+' + right;

	return { text, equation };
};

exports.randomColor = function () {
	let color = allColors[Math.floor(Math.random() * allColors.length)];
	return colorToRGB(color);
};


var allColors = [
	{ "colorParent": "green", "hex": "#c8f7c5", "rgb": "200,247,197", "name": "" },
	{ "colorParent": "green", "hex": "#7fffd4", "rgb": "127,255,212", "name": "aquamarine" },
	{ "colorParent": "green", "hex": "#baf73c", "rgb": "186,247,60", "name": "" },
	{ "colorParent": "green", "hex": "#98fb98", "rgb": "152,251,152", "name": "palegreen" },
	{ "colorParent": "green", "hex": "#00ff7f", "rgb": "0,255,127", "name": "springgreen" },
	{ "colorParent": "green", "hex": "#90ee90", "rgb": "144,238,144", "name": "lightgreen" },
	{ "colorParent": "green", "hex": "#00ff00", "rgb": "0,255,0", "name": "lime" },
	{ "colorParent": "green", "hex": "#00fa9a", "rgb": "0,250,154", "name": "mediumspringgreen" },
	{ "colorParent": "green", "hex": "#38f689", "rgb": "56,246,137", "name": "" },
	{ "colorParent": "green", "hex": "#a2ded0", "rgb": "162,222,208", "name": "" },
	{ "colorParent": "green", "hex": "#3cf73c", "rgb": "60,247,60", "name": "" },
	{ "colorParent": "green", "hex": "#abe338", "rgb": "171,227,56", "name": "" },
	{ "colorParent": "green", "hex": "#86e2d5", "rgb": "134,226,213", "name": "" },
	{ "colorParent": "green", "hex": "#4ae08c", "rgb": "74,224,140", "name": "" },
	{ "colorParent": "green", "hex": "#4add8c", "rgb": "74,221,140", "name": "" },
	{ "colorParent": "green", "hex": "#87d37c", "rgb": "135,211,124", "name": "" },
	{ "colorParent": "green", "hex": "#6ad4b1", "rgb": "106,212,177", "name": "" },
	{ "colorParent": "green", "hex": "#9acd32", "rgb": "154,205,50", "name": "yellowgreen" },
	{ "colorParent": "green", "hex": "#36d7b7", "rgb": "54,215,183", "name": "" },
	{ "colorParent": "green", "hex": "#7ed07e", "rgb": "126,208,126", "name": "" },
	{ "colorParent": "green", "hex": "#90c695", "rgb": "144,198,149", "name": "" },
	{ "colorParent": "green", "hex": "#4ecdc4", "rgb": "78,205,196", "name": "" },
	{ "colorParent": "green", "hex": "#66cc99", "rgb": "102,204,153", "name": "" },
	{ "colorParent": "green", "hex": "#65c6bb", "rgb": "101,198,187", "name": "" },
	{ "colorParent": "green", "hex": "#00d46a", "rgb": "0,212,106", "name": "" },
	{ "colorParent": "green", "hex": "#2eccb0", "rgb": "46,204,176", "name": "" },
	{ "colorParent": "green", "hex": "#00d400", "rgb": "0,212,0", "name": "" },
	{ "colorParent": "green", "hex": "#00cf80", "rgb": "0,207,128", "name": "" },
	{ "colorParent": "green", "hex": "#2ecc91", "rgb": "46,204,145", "name": "" },
	{ "colorParent": "green", "hex": "#68c3a3", "rgb": "104,195,163", "name": "" },
	{ "colorParent": "green", "hex": "#76c376", "rgb": "118,195,118", "name": "" },
	{ "colorParent": "green", "hex": "#2ecc71", "rgb": "46,204,113", "name": "" },
	{ "colorParent": "green", "hex": "#03c9a9", "rgb": "3,201,169", "name": "" },
	{ "colorParent": "green", "hex": "#32cd32", "rgb": "50,205,50", "name": "limegreen" },
	{ "colorParent": "green", "hex": "#2ecc51", "rgb": "46,204,81", "name": "" },
	{ "colorParent": "green", "hex": "#2ecc32", "rgb": "46,204,50", "name": "" },
	{ "colorParent": "green", "hex": "#3fc380", "rgb": "63,195,128", "name": "" },
	{ "colorParent": "green", "hex": "#8bb82d", "rgb": "139,184,45", "name": "" },
	{ "colorParent": "green", "hex": "#26c281", "rgb": "38,194,129", "name": "" },
	{ "colorParent": "green", "hex": "#1bbc9b", "rgb": "27,188,155", "name": "" },
	{ "colorParent": "green", "hex": "#2abb9b", "rgb": "42,187,155", "name": "" },
	{ "colorParent": "green", "hex": "#3cb572", "rgb": "60,181,114", "name": "" },
	{ "colorParent": "green", "hex": "#3cb371", "rgb": "60,179,113", "name": "mediumseagreen" },
	{ "colorParent": "green", "hex": "#4daf7c", "rgb": "77,175,124", "name": "" },
	{ "colorParent": "green", "hex": "#55aa8d", "rgb": "85,170,141", "name": "" },
	{ "colorParent": "green", "hex": "#00b16a", "rgb": "0,177,106", "name": "" },
	{ "colorParent": "green", "hex": "#65a665", "rgb": "101,166,101", "name": "" },
	{ "colorParent": "green", "hex": "#7aa228", "rgb": "122,162,40", "name": "" },
	{ "colorParent": "green", "hex": "#00aa55", "rgb": "0,170,85", "name": "" },
	{ "colorParent": "green", "hex": "#1ba39c", "rgb": "27,163,156", "name": "" },
	{ "colorParent": "green", "hex": "#03a678", "rgb": "3,166,120", "name": "" },
	{ "colorParent": "green", "hex": "#00aa00", "rgb": "0,170,0", "name": "" },
	{ "colorParent": "green", "hex": "#26a65b", "rgb": "38,166,91", "name": "" },
	{ "colorParent": "green", "hex": "#00a566", "rgb": "0,165,102", "name": "" },
	{ "colorParent": "green", "hex": "#16a085", "rgb": "22,160,133", "name": "" },
	{ "colorParent": "green", "hex": "#5d995d", "rgb": "93,153,93", "name": "" },
	{ "colorParent": "green", "hex": "#24a159", "rgb": "36,161,89", "name": "" },
	{ "colorParent": "green", "hex": "#28a228", "rgb": "40,162,40", "name": "" },
	{ "colorParent": "green", "hex": "#019875", "rgb": "1,152,117", "name": "" },
	{ "colorParent": "green", "hex": "#6b8e23", "rgb": "107,142,35", "name": "olivedrab" },
	{ "colorParent": "green", "hex": "#049372", "rgb": "4,147,114", "name": "" },
	{ "colorParent": "green", "hex": "#008b8b", "rgb": "0,139,139", "name": "darkcyan" },
	{ "colorParent": "green", "hex": "#2e8b57", "rgb": "46,139,87", "name": "seagreen" },
	{ "colorParent": "green", "hex": "#2e8856", "rgb": "46,136,86", "name": "" },
	{ "colorParent": "green", "hex": "#40806a", "rgb": "64,128,106", "name": "" },
	{ "colorParent": "green", "hex": "#1e824c", "rgb": "30,130,76", "name": "" },
	{ "colorParent": "green", "hex": "#4b7b4b", "rgb": "75,123,75", "name": "" },
	{ "colorParent": "green", "hex": "#5a781d", "rgb": "90,120,29", "name": "" },
	{ "colorParent": "green", "hex": "#008040", "rgb": "0,128,64", "name": "" },
	{ "colorParent": "green", "hex": "#007a7c", "rgb": "0,122,124", "name": "" },
	{ "colorParent": "green", "hex": "#008000", "rgb": "0,128,0", "name": "" },
	{ "colorParent": "green", "hex": "#007a4b", "rgb": "0,122,75", "name": "" },
	{ "colorParent": "green", "hex": "#1b7742", "rgb": "27,119,66", "name": "" },
	{ "colorParent": "green", "hex": "#1d781d", "rgb": "29,120,29", "name": "" },
	{ "colorParent": "green", "hex": "#436e43", "rgb": "67,110,67", "name": "" },
	{ "colorParent": "green", "hex": "#4b6319", "rgb": "75,99,25", "name": "" },
	{ "colorParent": "green", "hex": "#006060", "rgb": "0,96,96", "name": "" },
	{ "colorParent": "green", "hex": "#20603c", "rgb": "32,96,60", "name": "" },
	{ "colorParent": "green", "hex": "#345a5e", "rgb": "52,90,94", "name": "" },
	{ "colorParent": "green", "hex": "#205e3b", "rgb": "32,94,59", "name": "" },
	{ "colorParent": "green", "hex": "#2a5547", "rgb": "42,85,71", "name": "" },
	{ "colorParent": "green", "hex": "#005555", "rgb": "0,85,85", "name": "" },
	{ "colorParent": "green", "hex": "#315131", "rgb": "49,81,49", "name": "" },
	{ "colorParent": "green", "hex": "#00552a", "rgb": "0,85,42", "name": "" },
	{ "colorParent": "green", "hex": "#005500", "rgb": "0,85,0", "name": "" },
	{ "colorParent": "green", "hex": "#3a4d13", "rgb": "58,77,19", "name": "" },
	{ "colorParent": "green", "hex": "#005031", "rgb": "0,80,49", "name": "" },
	{ "colorParent": "green", "hex": "#134d13", "rgb": "19,77,19", "name": "" },
	{ "colorParent": "green", "hex": "#114c2a", "rgb": "17,76,42", "name": "" },
	{ "colorParent": "green", "hex": "#294429", "rgb": "41,68,41", "name": "" },
	{ "colorParent": "green", "hex": "#2b390e", "rgb": "43,57,14", "name": "" },
	{ "colorParent": "green", "hex": "#003636", "rgb": "0,54,54", "name": "" },
	{ "colorParent": "green", "hex": "#123622", "rgb": "18,54,34", "name": "" },
	{ "colorParent": "green", "hex": "#113321", "rgb": "17,51,33", "name": "" },
	{ "colorParent": "green", "hex": "#152a23", "rgb": "21,42,35", "name": "" },
	{ "colorParent": "green", "hex": "#002a15", "rgb": "0,42,21", "name": "" },
	{ "colorParent": "green", "hex": "#002a00", "rgb": "0,42,0", "name": "" },
	{ "colorParent": "green", "hex": "#172617", "rgb": "23,38,23", "name": "" },
	{ "colorParent": "green", "hex": "#002627", "rgb": "0,38,39", "name": "" },
	{ "colorParent": "green", "hex": "#1a2309", "rgb": "26,35,9", "name": "" },
	{ "colorParent": "green", "hex": "#002517", "rgb": "0,37,23", "name": "" },
	{ "colorParent": "green", "hex": "#082213", "rgb": "8,34,19", "name": "" },
	{ "colorParent": "blue", "hex": "#e0ffff", "rgb": "224,255,255", "name": "lightcyan" },
	{ "colorParent": "blue", "hex": "#e4f1fe", "rgb": "228,241,254", "name": "" },
	{ "colorParent": "blue", "hex": "#c5eff7", "rgb": "197,239,247", "name": "" },
	{ "colorParent": "blue", "hex": "#00ffff", "rgb": "0,255,255", "name": "aqua" },
	{ "colorParent": "blue", "hex": "#00f8fb", "rgb": "0,248,251", "name": "" },
	{ "colorParent": "blue", "hex": "#add8e6", "rgb": "173,216,230", "name": "lightblue" },
	{ "colorParent": "blue", "hex": "#bbd4d4", "rgb": "187,212,212", "name": "" },
	{ "colorParent": "blue", "hex": "#00e0e0", "rgb": "0,224,224", "name": "" },
	{ "colorParent": "blue", "hex": "#34dbdb", "rgb": "52,219,219", "name": "" },
	{ "colorParent": "blue", "hex": "#81cfe0", "rgb": "129,207,224", "name": "" },
	{ "colorParent": "blue", "hex": "#89c4f4", "rgb": "137,196,244", "name": "" },
	{ "colorParent": "blue", "hex": "#00d4d4", "rgb": "0,212,212", "name": "" },
	{ "colorParent": "blue", "hex": "#00ced1", "rgb": "0,206,209", "name": "darkturquoise" },
	{ "colorParent": "blue", "hex": "#6bb9f0", "rgb": "107,185,240", "name": "" },
	{ "colorParent": "blue", "hex": "#00bfff", "rgb": "0,191,255", "name": "deepskyblue" },
	{ "colorParent": "blue", "hex": "#8db0bb", "rgb": "141,176,187", "name": "" },
	{ "colorParent": "blue", "hex": "#34b9db", "rgb": "52,185,219", "name": "" },
	{ "colorParent": "blue", "hex": "#95aaaa", "rgb": "149,170,170", "name": "" },
	{ "colorParent": "blue", "hex": "#19b5fe", "rgb": "25,181,254", "name": "" },
	{ "colorParent": "blue", "hex": "#52b3d9", "rgb": "82,179,217", "name": "" },
	{ "colorParent": "blue", "hex": "#59abe3", "rgb": "89,171,227", "name": "" },
	{ "colorParent": "blue", "hex": "#00b5b5", "rgb": "0,181,181", "name": "" },
	{ "colorParent": "blue", "hex": "#22a7f0", "rgb": "34,167,240", "name": "" },
	{ "colorParent": "blue", "hex": "#00aaaa", "rgb": "0,170,170", "name": "" },
	{ "colorParent": "blue", "hex": "#6495ed", "rgb": "100,149,237", "name": "cornflowerblue" },
	{ "colorParent": "blue", "hex": "#009fd4", "rgb": "0,159,212", "name": "" },
	{ "colorParent": "blue", "hex": "#00a4a6", "rgb": "0,164,166", "name": "" },
	{ "colorParent": "blue", "hex": "#5c97bf", "rgb": "92,151,191", "name": "" },
	{ "colorParent": "blue", "hex": "#3498db", "rgb": "52,152,219", "name": "" },
	{ "colorParent": "blue", "hex": "#1e90ff", "rgb": "30,144,255", "name": "dodgerblue" },
	{ "colorParent": "blue", "hex": "#638bb3", "rgb": "99,139,179", "name": "" },
	{ "colorParent": "blue", "hex": "#6d8891", "rgb": "109,136,145", "name": "" },
	{ "colorParent": "blue", "hex": "#1e8bc3", "rgb": "30,139,195", "name": "" },
	{ "colorParent": "blue", "hex": "#4183d7", "rgb": "65,131,215", "name": "" },
	{ "colorParent": "blue", "hex": "#67809f", "rgb": "103,128,159", "name": "" },
	{ "colorParent": "blue", "hex": "#527ac2", "rgb": "82,122,194", "name": "" },
	{ "colorParent": "blue", "hex": "#3477db", "rgb": "52,119,219", "name": "" },
	{ "colorParent": "blue", "hex": "#4b77be", "rgb": "75,119,190", "name": "" },
	{ "colorParent": "blue", "hex": "#1978d4", "rgb": "25,120,212", "name": "" },
	{ "colorParent": "blue", "hex": "#007faa", "rgb": "0,127,170", "name": "" },
	{ "colorParent": "blue", "hex": "#2a7ab0", "rgb": "42,122,176", "name": "" },
	{ "colorParent": "blue", "hex": "#008080", "rgb": "0,128,128", "name": "" },
	{ "colorParent": "blue", "hex": "#2574a9", "rgb": "37,116,169", "name": "" },
	{ "colorParent": "blue", "hex": "#336e7b", "rgb": "51,110,123", "name": "" },
	{ "colorParent": "blue", "hex": "#406098", "rgb": "64,96,152", "name": "" },
	{ "colorParent": "blue", "hex": "#3455db", "rgb": "52,85,219", "name": "" },
	{ "colorParent": "blue", "hex": "#1460aa", "rgb": "20,96,170", "name": "" },
	{ "colorParent": "blue", "hex": "#006080", "rgb": "0,96,128", "name": "" },
	{ "colorParent": "blue", "hex": "#205d86", "rgb": "32,93,134", "name": "" },
	{ "colorParent": "blue", "hex": "#3a539b", "rgb": "58,83,155", "name": "" },
	{ "colorParent": "blue", "hex": "#34495e", "rgb": "52,73,94", "name": "" },
	{ "colorParent": "blue", "hex": "#005051", "rgb": "0,80,81", "name": "" },
	{ "colorParent": "blue", "hex": "#0f4880", "rgb": "15,72,128", "name": "" },
	{ "colorParent": "blue", "hex": "#2e456d", "rgb": "46,69,109", "name": "" },
	{ "colorParent": "blue", "hex": "#34415e", "rgb": "52,65,94", "name": "" },
	{ "colorParent": "blue", "hex": "#1f3a93", "rgb": "31,58,147", "name": "" },
	{ "colorParent": "blue", "hex": "#2c3e50", "rgb": "44,62,80", "name": "" },
	{ "colorParent": "blue", "hex": "#16405b", "rgb": "22,64,91", "name": "" },
	{ "colorParent": "blue", "hex": "#34385e", "rgb": "52,56,94", "name": "" },
	{ "colorParent": "blue", "hex": "#0000e0", "rgb": "0,0,224", "name": "" },
	{ "colorParent": "blue", "hex": "#004055", "rgb": "0,64,85", "name": "" },
	{ "colorParent": "blue", "hex": "#2d383c", "rgb": "45,56,60", "name": "" },
	{ "colorParent": "blue", "hex": "#0000b5", "rgb": "0,0,181", "name": "" },
	{ "colorParent": "blue", "hex": "#22313f", "rgb": "34,49,63", "name": "" },
	{ "colorParent": "blue", "hex": "#0a3055", "rgb": "10,48,85", "name": "" },
	{ "colorParent": "blue", "hex": "#1c2a43", "rgb": "28,42,67", "name": "" },
	{ "colorParent": "blue", "hex": "#252a2a", "rgb": "37,42,42", "name": "" },
	{ "colorParent": "blue", "hex": "#002a2a", "rgb": "0,42,42", "name": "" },
	{ "colorParent": "blue", "hex": "#00008b", "rgb": "0,0,139", "name": "darkblue" },
	{ "colorParent": "blue", "hex": "#0c2231", "rgb": "12,34,49", "name": "" },
	{ "colorParent": "blue", "hex": "#00202a", "rgb": "0,32,42", "name": "" },
	{ "colorParent": "blue", "hex": "#000060", "rgb": "0,0,96", "name": "" },
	{ "colorParent": "blue", "hex": "#05182a", "rgb": "5,24,42", "name": "" },
	{ "colorParent": "blue", "hex": "#000036", "rgb": "0,0,54", "name": "" },
	{ "colorParent": "purple", "hex": "#ffecdb", "rgb": "255,236,219", "name": "" },
	{ "colorParent": "purple", "hex": "#dcc6e0", "rgb": "220,198,224", "name": "" },
	{ "colorParent": "purple", "hex": "#f1a9a0", "rgb": "241,169,160", "name": "" },
	{ "colorParent": "purple", "hex": "#dda0dd", "rgb": "221,160,221", "name": "plum" },
	{ "colorParent": "purple", "hex": "#aea8d3", "rgb": "174,168,211", "name": "" },
	{ "colorParent": "purple", "hex": "#be90d4", "rgb": "190,144,212", "name": "" },
	{ "colorParent": "purple", "hex": "#e08283", "rgb": "224,130,131", "name": "" },
	{ "colorParent": "purple", "hex": "#fc6399", "rgb": "252,99,153", "name": "" },
	{ "colorParent": "purple", "hex": "#b381b3", "rgb": "179,129,179", "name": "" },
	{ "colorParent": "purple", "hex": "#e26a6a", "rgb": "226,106,106", "name": "" },
	{ "colorParent": "purple", "hex": "#bf6ee0", "rgb": "191,110,224", "name": "" },
	{ "colorParent": "purple", "hex": "#ff00ff", "rgb": "255,0,255", "name": "fuchsia" },
	{ "colorParent": "purple", "hex": "#bf55ec", "rgb": "191,85,236", "name": "" },
	{ "colorParent": "purple", "hex": "#d252b2", "rgb": "210,82,178", "name": "" },
	{ "colorParent": "purple", "hex": "#9370db", "rgb": "147,112,219", "name": "mediumpurple" },
	{ "colorParent": "purple", "hex": "#d25299", "rgb": "210,82,153", "name": "" },
	{ "colorParent": "purple", "hex": "#d25852", "rgb": "210,88,82", "name": "" },
	{ "colorParent": "purple", "hex": "#d2527f", "rgb": "210,82,127", "name": "" },
	{ "colorParent": "purple", "hex": "#e73c70", "rgb": "231,60,112", "name": "" },
	{ "colorParent": "purple", "hex": "#f62459", "rgb": "246,36,89", "name": "" },
	{ "colorParent": "purple", "hex": "#d25265", "rgb": "210,82,101", "name": "" },
	{ "colorParent": "purple", "hex": "#e000e0", "rgb": "224,0,224", "name": "" },
	{ "colorParent": "purple", "hex": "#b659ac", "rgb": "182,89,172", "name": "" },
	{ "colorParent": "purple", "hex": "#ae59b6", "rgb": "174,89,182", "name": "" },
	{ "colorParent": "purple", "hex": "#b93cf6", "rgb": "185,60,246", "name": "" },
	{ "colorParent": "purple", "hex": "#d400d4", "rgb": "212,0,212", "name": "" },
	{ "colorParent": "purple", "hex": "#9b59b6", "rgb": "155,89,182", "name": "" },
	{ "colorParent": "purple", "hex": "#7462e0", "rgb": "116,98,224", "name": "" },
	{ "colorParent": "purple", "hex": "#886288", "rgb": "136,98,136", "name": "" },
	{ "colorParent": "purple", "hex": "#db0a5b", "rgb": "219,10,91", "name": "" },
	{ "colorParent": "purple", "hex": "#8859b6", "rgb": "136,89,182", "name": "" },
	{ "colorParent": "purple", "hex": "#b200fd", "rgb": "178,0,253", "name": "" },
	{ "colorParent": "purple", "hex": "#7659b6", "rgb": "118,89,182", "name": "" },
	{ "colorParent": "purple", "hex": "#765ab0", "rgb": "118,90,176", "name": "" },
	{ "colorParent": "purple", "hex": "#a74165", "rgb": "167,65,101", "name": "" },
	{ "colorParent": "purple", "hex": "#9932cc", "rgb": "153,50,204", "name": "darkorchid" },
	{ "colorParent": "purple", "hex": "#b500b5", "rgb": "181,0,181", "name": "" },
	{ "colorParent": "purple", "hex": "#8e44ad", "rgb": "142,68,173", "name": "" },
	{ "colorParent": "purple", "hex": "#8a2be2", "rgb": "138,43,226", "name": "blueviolet" },
	{ "colorParent": "purple", "hex": "#aa00aa", "rgb": "170,0,170", "name": "" },
	{ "colorParent": "purple", "hex": "#913d88", "rgb": "145,61,136", "name": "" },
	{ "colorParent": "purple", "hex": "#5e50b5", "rgb": "94,80,181", "name": "" },
	{ "colorParent": "purple", "hex": "#9400d3", "rgb": "148,0,211", "name": "darkviolet" },
	{ "colorParent": "purple", "hex": "#9a12b3", "rgb": "154,18,179", "name": "" },
	{ "colorParent": "purple", "hex": "#77448b", "rgb": "119,68,139", "name": "" },
	{ "colorParent": "purple", "hex": "#5a4586", "rgb": "90,69,134", "name": "" },
	{ "colorParent": "purple", "hex": "#7928a1", "rgb": "121,40,161", "name": "" },
	{ "colorParent": "purple", "hex": "#674172", "rgb": "103,65,114", "name": "" },
	{ "colorParent": "purple", "hex": "#7023b7", "rgb": "112,35,183", "name": "" },
	{ "colorParent": "purple", "hex": "#8b008b", "rgb": "139,0,139", "name": "darkmagenta" },
	{ "colorParent": "purple", "hex": "#663399", "rgb": "102,51,153", "name": "" },
	{ "colorParent": "purple", "hex": "#5d445d", "rgb": "93,68,93", "name": "" },
	{ "colorParent": "purple", "hex": "#7d314c", "rgb": "125,49,76", "name": "" },
	{ "colorParent": "purple", "hex": "#7600a8", "rgb": "118,0,168", "name": "" },
	{ "colorParent": "purple", "hex": "#483d8b", "rgb": "72,61,139", "name": "darkslateblue" },
	{ "colorParent": "purple", "hex": "#800080", "rgb": "128,0,128", "name": "" },
	{ "colorParent": "purple", "hex": "#532f61", "rgb": "83,47,97", "name": "" },
	{ "colorParent": "purple", "hex": "#561b8d", "rgb": "86,27,141", "name": "" },
	{ "colorParent": "purple", "hex": "#591d77", "rgb": "89,29,119", "name": "" },
	{ "colorParent": "purple", "hex": "#3d2f5b", "rgb": "61,47,91", "name": "" },
	{ "colorParent": "purple", "hex": "#58007e", "rgb": "88,0,126", "name": "" },
	{ "colorParent": "purple", "hex": "#600060", "rgb": "96,0,96", "name": "" },
	{ "colorParent": "purple", "hex": "#522032", "rgb": "82,32,50", "name": "" },
	{ "colorParent": "purple", "hex": "#322a60", "rgb": "50,42,96", "name": "" },
	{ "colorParent": "purple", "hex": "#550055", "rgb": "85,0,85", "name": "" },
	{ "colorParent": "purple", "hex": "#3c1362", "rgb": "60,19,98", "name": "" },
	{ "colorParent": "purple", "hex": "#332533", "rgb": "51,37,51", "name": "" },
	{ "colorParent": "purple", "hex": "#39134c", "rgb": "57,19,76", "name": "" },
	{ "colorParent": "purple", "hex": "#3b0053", "rgb": "59,0,83", "name": "" },
	{ "colorParent": "purple", "hex": "#2e1b36", "rgb": "46,27,54", "name": "" },
	{ "colorParent": "purple", "hex": "#360036", "rgb": "54,0,54", "name": "" },
	{ "colorParent": "purple", "hex": "#211931", "rgb": "33,25,49", "name": "" },
	{ "colorParent": "purple", "hex": "#1c1836", "rgb": "28,24,54", "name": "" },
	{ "colorParent": "purple", "hex": "#220b38", "rgb": "34,11,56", "name": "" },
	{ "colorParent": "purple", "hex": "#2a002a", "rgb": "42,0,42", "name": "" },
	{ "colorParent": "purple", "hex": "#1d0029", "rgb": "29,0,41", "name": "" },
	{ "colorParent": "gray", "hex": "#ffffff", "rgb": "255,255,255", "name": "" },
	{ "colorParent": "gray", "hex": "#fefefe", "rgb": "254,254,254", "name": "" },
	{ "colorParent": "gray", "hex": "#f2f1ef", "rgb": "242,241,239", "name": "" },
	{ "colorParent": "gray", "hex": "#ecf0f1", "rgb": "236,240,241", "name": "" },
	{ "colorParent": "gray", "hex": "#eeeeee", "rgb": "238,238,238", "name": "" },
	{ "colorParent": "gray", "hex": "#ececec", "rgb": "236,236,236", "name": "" },
	{ "colorParent": "gray", "hex": "#e8e8e8", "rgb": "232,232,232", "name": "" },
	{ "colorParent": "gray", "hex": "#dadfe1", "rgb": "218,223,225", "name": "" },
	{ "colorParent": "gray", "hex": "#d2d7d3", "rgb": "210,215,211", "name": "" },
	{ "colorParent": "gray", "hex": "#d5d5d5", "rgb": "213,213,213", "name": "" },
	{ "colorParent": "gray", "hex": "#d4d4d4", "rgb": "212,212,212", "name": "" },
	{ "colorParent": "gray", "hex": "#d3d3d3", "rgb": "211,211,211", "name": "" },
	{ "colorParent": "gray", "hex": "#b2cce5", "rgb": "178,204,229", "name": "" },
	{ "colorParent": "gray", "hex": "#bdc3c7", "rgb": "189,195,199", "name": "" },
	{ "colorParent": "gray", "hex": "#bfbfbf", "rgb": "191,191,191", "name": "" },
	{ "colorParent": "gray", "hex": "#bebebe", "rgb": "190,190,190", "name": "" },
	{ "colorParent": "gray", "hex": "#abb7b7", "rgb": "171,183,183", "name": "" },
	{ "colorParent": "gray", "hex": "#aaaaaa", "rgb": "170,170,170", "name": "" },
	{ "colorParent": "gray", "hex": "#a9a9a9", "rgb": "169,169,169", "name": "darkgray" },
	{ "colorParent": "gray", "hex": "#7bacdd", "rgb": "123,172,221", "name": "" },
	{ "colorParent": "gray", "hex": "#91a6ba", "rgb": "145,166,186", "name": "" },
	{ "colorParent": "gray", "hex": "#95a5a6", "rgb": "149,165,166", "name": "" },
	{ "colorParent": "gray", "hex": "#939393", "rgb": "147,147,147", "name": "" },
	{ "colorParent": "gray", "hex": "#808080", "rgb": "128,128,128", "name": "gray" },
	{ "colorParent": "gray", "hex": "#7e7e7e", "rgb": "126,126,126", "name": "" },
	{ "colorParent": "gray", "hex": "#708090", "rgb": "112,128,144", "name": "slategray" },
	{ "colorParent": "gray", "hex": "#708080", "rgb": "112,128,128", "name": "" },
	{ "colorParent": "gray", "hex": "#6c7a89", "rgb": "108,122,137", "name": "" },
	{ "colorParent": "gray", "hex": "#696969", "rgb": "105,105,105", "name": "dimgray" },
	{ "colorParent": "gray", "hex": "#4b6a88", "rgb": "75,106,136", "name": "" },
	{ "colorParent": "gray", "hex": "#4d6066", "rgb": "77,96,102", "name": "" },
	{ "colorParent": "gray", "hex": "#4f5a65", "rgb": "79,90,101", "name": "" },
	{ "colorParent": "gray", "hex": "#555555", "rgb": "85,85,85", "name": "" },
	{ "colorParent": "gray", "hex": "#545454", "rgb": "84,84,84", "name": "" },
	{ "colorParent": "gray", "hex": "#4b5555", "rgb": "75,85,85", "name": "" },
	{ "colorParent": "gray", "hex": "#34515e", "rgb": "52,81,94", "name": "" },
	{ "colorParent": "gray", "hex": "#3e3e3e", "rgb": "62,62,62", "name": "" },
	{ "colorParent": "gray", "hex": "#2e343b", "rgb": "46,52,59", "name": "" },
	{ "colorParent": "gray", "hex": "#2b2b2b", "rgb": "43,43,43", "name": "" },
	{ "colorParent": "gray", "hex": "#2a2a2a", "rgb": "42,42,42", "name": "" },
	{ "colorParent": "gray", "hex": "#292929", "rgb": "41,41,41", "name": "" },
	{ "colorParent": "gray", "hex": "#1c2833", "rgb": "28,40,51", "name": "" },
	{ "colorParent": "gray", "hex": "#050709", "rgb": "5,7,9", "name": "" },
	{ "colorParent": "gray", "hex": "#000000", "rgb": "0,0,0", "name": "" },
	{ "colorParent": "yellow", "hex": "#fffacd", "rgb": "255,250,205", "name": "lemonchiffon" },
	{ "colorParent": "yellow", "hex": "#f1f227", "rgb": "241,242,39", "name": "" },
	{ "colorParent": "yellow", "hex": "#c9f227", "rgb": "201,242,39", "name": "" },
	{ "colorParent": "yellow", "hex": "#ffd700", "rgb": "255,215,0", "name": "gold" },
	{ "colorParent": "yellow", "hex": "#f5d76e", "rgb": "245,215,110", "name": "" },
	{ "colorParent": "yellow", "hex": "#f4d03f", "rgb": "244,208,63", "name": "" },
	{ "colorParent": "yellow", "hex": "#f7ca18", "rgb": "247,202,24", "name": "" },
	{ "colorParent": "yellow", "hex": "#d4d0ab", "rgb": "212,208,171", "name": "" },
	{ "colorParent": "yellow", "hex": "#f2ca27", "rgb": "242,202,39", "name": "" },
	{ "colorParent": "yellow", "hex": "#d4b300", "rgb": "212,179,0", "name": "" },
	{ "colorParent": "yellow", "hex": "#f2a127", "rgb": "242,161,39", "name": "" },
	{ "colorParent": "yellow", "hex": "#e2a50e", "rgb": "226,165,14", "name": "" },
	{ "colorParent": "yellow", "hex": "#daa520", "rgb": "218,165,32", "name": "goldenrod" },
	{ "colorParent": "yellow", "hex": "#c7a720", "rgb": "199,167,32", "name": "" },
	{ "colorParent": "yellow", "hex": "#aaa789", "rgb": "170,167,137", "name": "" },
	{ "colorParent": "yellow", "hex": "#f27927", "rgb": "242,121,39", "name": "" },
	{ "colorParent": "yellow", "hex": "#aa8f00", "rgb": "170,143,0", "name": "" },
	{ "colorParent": "yellow", "hex": "#b8860b", "rgb": "184,134,11", "name": "darkgoldenrod" },
	{ "colorParent": "yellow", "hex": "#af851a", "rgb": "175,133,26", "name": "" },
	{ "colorParent": "yellow", "hex": "#9d8319", "rgb": "157,131,25", "name": "" },
	{ "colorParent": "yellow", "hex": "#807d67", "rgb": "128,125,103", "name": "" },
	{ "colorParent": "yellow", "hex": "#8d6708", "rgb": "141,103,8", "name": "" },
	{ "colorParent": "yellow", "hex": "#806c00", "rgb": "128,108,0", "name": "" },
	{ "colorParent": "yellow", "hex": "#856514", "rgb": "133,101,20", "name": "" },
	{ "colorParent": "yellow", "hex": "#726012", "rgb": "114,96,18", "name": "" },
	{ "colorParent": "yellow", "hex": "#555344", "rgb": "85,83,68", "name": "" },
	{ "colorParent": "yellow", "hex": "#634806", "rgb": "99,72,6", "name": "" },
	{ "colorParent": "yellow", "hex": "#554800", "rgb": "85,72,0", "name": "" },
	{ "colorParent": "yellow", "hex": "#5a440d", "rgb": "90,68,13", "name": "" },
	{ "colorParent": "yellow", "hex": "#483c0c", "rgb": "72,60,12", "name": "" },
	{ "colorParent": "yellow", "hex": "#382903", "rgb": "56,41,3", "name": "" },
	{ "colorParent": "yellow", "hex": "#2a2a22", "rgb": "42,42,34", "name": "" },
	{ "colorParent": "yellow", "hex": "#302407", "rgb": "48,36,7", "name": "" },
	{ "colorParent": "yellow", "hex": "#2a2400", "rgb": "42,36,0", "name": "" },
	{ "colorParent": "yellow", "hex": "#1d1905", "rgb": "29,25,5", "name": "" },
	{ "colorParent": "orange", "hex": "#fde3a7", "rgb": "253,227,167", "name": "" },
	{ "colorParent": "orange", "hex": "#e6cc22", "rgb": "230,204,34", "name": "" },
	{ "colorParent": "orange", "hex": "#f9bf3b", "rgb": "249,191,59", "name": "" },
	{ "colorParent": "orange", "hex": "#f4b350", "rgb": "244,179,80", "name": "" },
	{ "colorParent": "orange", "hex": "#f5ab35", "rgb": "245,171,53", "name": "" },
	{ "colorParent": "orange", "hex": "#ffa07a", "rgb": "255,160,122", "name": "lightsalmon" },
	{ "colorParent": "orange", "hex": "#f4a460", "rgb": "244,164,96", "name": "sandybrown" },
	{ "colorParent": "orange", "hex": "#e6a522", "rgb": "230,165,34", "name": "" },
	{ "colorParent": "orange", "hex": "#f39c12", "rgb": "243,156,18", "name": "" },
	{ "colorParent": "orange", "hex": "#f89406", "rgb": "248,148,6", "name": "" },
	{ "colorParent": "orange", "hex": "#eb974e", "rgb": "235,151,78", "name": "" },
	{ "colorParent": "orange", "hex": "#ff8c00", "rgb": "255,140,0", "name": "darkorange" },
	{ "colorParent": "orange", "hex": "#eb9532", "rgb": "235,149,50", "name": "" },
	{ "colorParent": "orange", "hex": "#ff7f50", "rgb": "255,127,80", "name": "coral" },
	{ "colorParent": "orange", "hex": "#f2784b", "rgb": "242,120,75", "name": "" },
	{ "colorParent": "orange", "hex": "#f27935", "rgb": "242,121,53", "name": "" },
	{ "colorParent": "orange", "hex": "#e87e04", "rgb": "232,126,4", "name": "" },
	{ "colorParent": "orange", "hex": "#e67e22", "rgb": "230,126,34", "name": "" },
	{ "colorParent": "orange", "hex": "#d48566", "rgb": "212,133,102", "name": "" },
	{ "colorParent": "orange", "hex": "#c9874f", "rgb": "201,135,79", "name": "" },
	{ "colorParent": "orange", "hex": "#f9690e", "rgb": "249,105,14", "name": "" },
	{ "colorParent": "orange", "hex": "#d47500", "rgb": "212,117,0", "name": "" },
	{ "colorParent": "orange", "hex": "#ff4500", "rgb": "255,69,0", "name": "orangered" },
	{ "colorParent": "orange", "hex": "#d46a43", "rgb": "212,106,67", "name": "" },
	{ "colorParent": "orange", "hex": "#e65722", "rgb": "230,87,34", "name": "" },
	{ "colorParent": "orange", "hex": "#bb671c", "rgb": "187,103,28", "name": "" },
	{ "colorParent": "orange", "hex": "#d35400", "rgb": "211,84,0", "name": "" },
	{ "colorParent": "orange", "hex": "#aa6b51", "rgb": "170,107,81", "name": "" },
	{ "colorParent": "orange", "hex": "#e63022", "rgb": "230,48,34", "name": "" },
	{ "colorParent": "orange", "hex": "#9f6b3f", "rgb": "159,107,63", "name": "" },
	{ "colorParent": "orange", "hex": "#d43900", "rgb": "212,57,0", "name": "" },
	{ "colorParent": "orange", "hex": "#aa5d00", "rgb": "170,93,0", "name": "" },
	{ "colorParent": "orange", "hex": "#aa5535", "rgb": "170,85,53", "name": "" },
	{ "colorParent": "orange", "hex": "#914f15", "rgb": "145,79,21", "name": "" },
	{ "colorParent": "orange", "hex": "#80503d", "rgb": "128,80,61", "name": "" },
	{ "colorParent": "orange", "hex": "#aa2e00", "rgb": "170,46,0", "name": "" },
	{ "colorParent": "orange", "hex": "#744e2e", "rgb": "116,78,46", "name": "" },
	{ "colorParent": "orange", "hex": "#804600", "rgb": "128,70,0", "name": "" },
	{ "colorParent": "orange", "hex": "#804028", "rgb": "128,64,40", "name": "" },
	{ "colorParent": "orange", "hex": "#802200", "rgb": "128,34,0", "name": "" },
	{ "colorParent": "orange", "hex": "#66380f", "rgb": "102,56,15", "name": "" },
	{ "colorParent": "orange", "hex": "#553529", "rgb": "85,53,41", "name": "" },
	{ "colorParent": "orange", "hex": "#552f00", "rgb": "85,47,0", "name": "" },
	{ "colorParent": "orange", "hex": "#4a321d", "rgb": "74,50,29", "name": "" },
	{ "colorParent": "orange", "hex": "#552a1b", "rgb": "85,42,27", "name": "" },
	{ "colorParent": "orange", "hex": "#551700", "rgb": "85,23,0", "name": "" },
	{ "colorParent": "orange", "hex": "#3c2109", "rgb": "60,33,9", "name": "" },
	{ "colorParent": "orange", "hex": "#2a150d", "rgb": "42,21,13", "name": "" },
	{ "colorParent": "red", "hex": "#e7903c", "rgb": "231,144,60", "name": "" },
	{ "colorParent": "red", "hex": "#ff6347", "rgb": "255,99,71", "name": "tomato" },
	{ "colorParent": "red", "hex": "#e76e3c", "rgb": "231,110,60", "name": "" },
	{ "colorParent": "red", "hex": "#f64747", "rgb": "246,71,71", "name": "" },
	{ "colorParent": "red", "hex": "#ef4836", "rgb": "239,72,54", "name": "" },
	{ "colorParent": "red", "hex": "#e74c3c", "rgb": "231,76,60", "name": "" },
	{ "colorParent": "red", "hex": "#d4533b", "rgb": "212,83,59", "name": "" },
	{ "colorParent": "red", "hex": "#e73c4e", "rgb": "231,60,78", "name": "" },
	{ "colorParent": "red", "hex": "#ff0000", "rgb": "255,0,0", "name": "" },
	{ "colorParent": "red", "hex": "#d24d57", "rgb": "210,77,87", "name": "" },
	{ "colorParent": "red", "hex": "#f22613", "rgb": "242,38,19", "name": "" },
	{ "colorParent": "red", "hex": "#d64541", "rgb": "214,69,65", "name": "" },
	{ "colorParent": "red", "hex": "#dc2a2a", "rgb": "220,42,42", "name": "" },
	{ "colorParent": "red", "hex": "#dc143c", "rgb": "220,20,60", "name": "crimson" },
	{ "colorParent": "red", "hex": "#e00000", "rgb": "224,0,0", "name": "" },
	{ "colorParent": "red", "hex": "#d91e18", "rgb": "217,30,24", "name": "" },
	{ "colorParent": "red", "hex": "#bc3e31", "rgb": "188,62,49", "name": "" },
	{ "colorParent": "red", "hex": "#c0392b", "rgb": "192,57,43", "name": "" },
	{ "colorParent": "red", "hex": "#d50000", "rgb": "213,0,0", "name": "" },
	{ "colorParent": "red", "hex": "#cf000f", "rgb": "207,0,15", "name": "" },
	{ "colorParent": "red", "hex": "#aa422f", "rgb": "170,66,47", "name": "" },
	{ "colorParent": "red", "hex": "#b22222", "rgb": "178,34,34", "name": "firebrick" },
	{ "colorParent": "red", "hex": "#b50000", "rgb": "181,0,0", "name": "" },
	{ "colorParent": "red", "hex": "#b11030", "rgb": "177,16,48", "name": "" },
	{ "colorParent": "red", "hex": "#aa0000", "rgb": "170,0,0", "name": "" },
	{ "colorParent": "red", "hex": "#923026", "rgb": "146,48,38", "name": "" },
	{ "colorParent": "red", "hex": "#96281b", "rgb": "150,40,27", "name": "" },
	{ "colorParent": "red", "hex": "#803224", "rgb": "128,50,36", "name": "" },
	{ "colorParent": "red", "hex": "#871a1a", "rgb": "135,26,26", "name": "" },
	{ "colorParent": "red", "hex": "#8b0000", "rgb": "139,0,0", "name": "darkred" },
	{ "colorParent": "red", "hex": "#870c25", "rgb": "135,12,37", "name": "" },
	{ "colorParent": "red", "hex": "#800000", "rgb": "128,0,0", "name": "maroon" },
	{ "colorParent": "red", "hex": "#67221b", "rgb": "103,34,27", "name": "" },
	{ "colorParent": "red", "hex": "#552118", "rgb": "85,33,24", "name": "" },
	{ "colorParent": "red", "hex": "#5d1212", "rgb": "93,18,18", "name": "" },
	{ "colorParent": "red", "hex": "#600000", "rgb": "96,0,0", "name": "" },
	{ "colorParent": "red", "hex": "#5c0819", "rgb": "92,8,25", "name": "" },
	{ "colorParent": "red", "hex": "#550000", "rgb": "85,0,0", "name": "" },
	{ "colorParent": "red", "hex": "#3d1410", "rgb": "61,20,16", "name": "" },
	{ "colorParent": "red", "hex": "#360000", "rgb": "54,0,0", "name": "" },
	{ "colorParent": "red", "hex": "#320a0a", "rgb": "50,10,10", "name": "" },
	{ "colorParent": "red", "hex": "#32050e", "rgb": "50,5,14", "name": "" },
	{ "colorParent": "red", "hex": "#2b0000", "rgb": "43,0,0", "name": "" },
];

function colorToRGB(color) {
	let aryColor = color.rgb.split(',');
	return {
		r: aryColor[0],
		g: aryColor[1],
		b: aryColor[2]
	}
}

function contrastRatio(txtRGB, bgRGB) {
	var L1 = luminance(txtRGB);
	var L2 = luminance(bgRGB);
	return (Math.round(((Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05)) * 100) / 100);
}

function luminance(rgb) {
	// convert RGB to sRGB
	var sRGB = [rgb.r, rgb.g, rgb.b].map(function (value) {
		value /= 255;
		return (value <= 0.03928) ? (value / 12.92) : Math.pow(((value + 0.055) / 1.055), 2.4);
	});
	// calculate luminance
	return (sRGB[0] * 0.2126) + (sRGB[1] * 0.7152) + (sRGB[2] * 0.0722);
}

exports.filteredColor = function (bgColor) {
	return allColors.filter(color => contrastRatio(colorToRGB(color), bgColor) > 4.5);
};

exports.randomFilteredColor = function (filterColors) {
	let randColor = filterColors[Math.floor(Math.random() * filterColors.length)];
	return randColor.hex;
};

