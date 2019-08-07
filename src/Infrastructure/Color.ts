/**
 * thanks to Pimp Trizkit (function for darken color)
 * @param color: color you want to shadow, hex form
 * @param percent: percentage you want to shadow, in range [-100, 100]
 * @see https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
 */
export function shadeColor(color: string, percent: number): string {
    const f = parseInt(color.slice(1), 16), t = percent < 0 ? 0 : 255, p = percent < 0 ? percent * -1 : percent,
        R = f >> 16, G = f >> 8 & 0x00FF, B = f & 0x0000FF;
    return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
}

export function addAlpha(color: string, alpha: number): string {
    const f = parseInt(color.slice(1), 16);
    const R = f >> 16, G = f >> 8 & 0x00FF, B = f & 0x0000FF;
    return `rgba(${R},${G},${B},${alpha}%)`;
}