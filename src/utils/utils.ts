export const titleCase = (str: string) => {
    return str.split(' ').map((w: string) => w[0].toUpperCase() + w.slice(1).toLowerCase()).join(' ');
}