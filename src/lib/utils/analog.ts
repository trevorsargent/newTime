export const hourHandFraction = (h: number, m: number, s: number) => {
	return ((h % 12) + m / 60 + s / 60 / 60) / 12;
};

export const minHandFraction = (m: number, s: number) => {
	return m / 60 + s / 60 / 60;
};

export const secHandFraction = (s: number, m: number) => {
	return s / 60 + m / 1000 / 60;
};

export const secHandFractionRough = (s: number) => {
	return s / 60;
};
