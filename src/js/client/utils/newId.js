let lastId = 0;

export default function(prefix='PreviewStar') {
    lastId++;
    return `${prefix}${lastId}`;
}