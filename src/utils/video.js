/**
 * Helpers for hosted video embeds (YouTube, Vimeo) vs direct video (Cloudinary, local).
 */
export const isEmbedType = (t) => t === "youtube" || t === "vimeo";

/**
 * @param {string} url - Embed URL (e.g. youtube.com/embed/ID or vimeo.com/video/ID)
 * @param {object} opts - { autoplay?: boolean }
 */
export function embedSrc(url, { autoplay = false } = {}) {
    if (!url || !autoplay) return url;
    try {
        const u = new URL(url);
        if (url.includes("youtube.com") || url.includes("youtu.be")) {
            u.searchParams.set("autoplay", "1");
            u.searchParams.set("mute", "1");
            u.searchParams.set("loop", "1");
            const id = u.pathname.split("/").pop()?.replace("embed/", "") || u.searchParams.get("v");
            if (id) u.searchParams.set("playlist", id);
        } else if (url.includes("vimeo.com")) {
            u.searchParams.set("autoplay", "1");
            u.searchParams.set("muted", "1");
        }
        return u.toString();
    } catch {
        return url;
    }
}
