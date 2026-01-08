module.exports = {
    config: {
        name: "enemy",
        aliases: ["enemyimage", "enemyimg", "foe"],
        version: "1.0",
        author: "YourName",
        countDown: 5,
        role: 0,
        shortDescription: "Sends a random enemy image",
        longDescription: "This module sends a random image of enemies or characters as per the provided links.",
        category: "media",
        guide: "{pn}"
    },

    onStart: async function ({ api, event }) {
        const links = [
            "https://files.catbox.moe/kbrmfi.jpg",
            "https://files.catbox.moe/0ausck.jpg",
            "https://files.catbox.moe/leh4xe.jpg",
            "https://files.catbox.moe/hj6wfb.jpg",
            "https://files.catbox.moe/rsy8l5.jpg",
            "https://files.catbox.moe/l741wk.jpg",
            "https://files.catbox.moe/e4c3d2.jpg",
            "https://files.catbox.moe/951zxb.jpg",
            "https://files.catbox.moe/vnwljf.jpg",
            "https://files.catbox.moe/4r6jgf.jpg",
            "https://files.catbox.moe/bwpywk.jpg",
            "https://files.catbox.moe/ejyezc.jpg",
            "https://files.catbox.moe/jkuzpc.jpg",
            "https://files.catbox.moe/1y2btg.jpg",
            "https://files.catbox.moe/rzvgwz.jpg",
            "https://files.catbox.moe/c5q2yu.jpg",
            "https://files.catbox.moe/99sg0d.jpg",
            "https://files.catbox.moe/7uikaa.jpg",
            "https://files.catbox.moe/ufe0e4.jpg",
            "https://files.catbox.moe/6sj1g6.jpg",
            "https://files.catbox.moe/svayzj.jpg",
            "https://files.catbox.moe/u2z43d.jpg",
            "https://files.catbox.moe/3y1j9r.jpg",
            "https://files.catbox.moe/b6qf4m.jpg",
            "https://files.catbox.moe/mw91i8.jpg",
            "https://files.catbox.moe/u7apy0.jpg",
            "https://files.catbox.moe/clkt3g.jpg",
            "https://files.catbox.moe/1md1us.jpg",
            "https://files.catbox.moe/2r0pjl.jpg",
            "https://files.catbox.moe/h3xmkm.jpg",
            "https://files.catbox.moe/gtnswo.jpg",
            "https://files.catbox.moe/3kfae0.jpg",
            "https://files.catbox.moe/tezyg8.jpg",
            "https://files.catbox.moe/hkkscj.jpg",
            "https://files.catbox.moe/kymxex.jpg",
            "https://files.catbox.moe/9jlylj.jpg",
            "https://files.catbox.moe/k1zgtc.jpg",
            "https://files.catbox.moe/9gw0cc.jpg",
            "https://files.catbox.moe/a8i37p.jpg",
            "https://files.catbox.moe/zv3g5t.jpg",
            "https://files.catbox.moe/o3nvd0.jpg",
            "https://files.catbox.moe/x5vx4f.jpg",
            "https://files.catbox.moe/3nqf4j.jpg",
            "https://files.catbox.moe/cscalb.jpg",
            "https://files.catbox.moe/yx4wr4.jpg",
            "https://files.catbox.moe/sbdcoz.jpg",
            "https://files.catbox.moe/1ojsuc.jpg",
            "https://files.catbox.moe/yzpoa9.jpg",
            "https://files.catbox.moe/57h95t.jpg",
            "https://files.catbox.moe/8ryi34.jpg",
            "https://files.catbox.moe/qvr8po.jpg",
            "https://files.catbox.moe/80mkwe.jpg",
            "https://files.catbox.moe/1ojsuc.jpg",
            "https://files.catbox.moe/m3lbld.jpg",
            "https://files.catbox.moe/c2e13n.jpg",
            "https://files.catbox.moe/si9l45.jpg",
            "https://files.catbox.moe/qvr8po.jpg",
            "https://files.catbox.moe/w4gzmp.jpg",
            "https://files.catbox.moe/wtz3bh.jpg",
            "https://files.catbox.moe/0d52jy.jpg",
            "https://files.catbox.moe/wtz3bh.jpg",
            "https://files.catbox.moe/4uxsi4.jpg",
            "https://files.catbox.moe/4uxsi4.jpg"
        ];

        const randomIndex = Math.floor(Math.random() * links.length);
        const selectedImage = links[randomIndex];

        try {
            return api.sendMessage({
                body: `Here’s a random enemy image for you!`,
                attachment: await global.utils.getStreamFromURL(selectedImage)
            }, event.threadID, event.messageID);
        } catch (error) {
            return api.sendMessage(`Error: ${error.message}`, event.threadID, event.messageID);
        }
    }
};
