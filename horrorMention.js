// horrorMention.js
module.exports = (bot) => {
    if (!bot) return;

    bot.on('message', async (message) => {
        if (message.body.includes('@')) {
            let mentionedName = message.body.match(/@(\w+)/);
            if (mentionedName) {
                mentionedName = mentionedName[1];

                const scaryReplies = [
                    `⚠️ ${mentionedName}… তোমাকে ডাকা হয়েছে… ফিরে তাকিও না… 👻`,
                    `☠️ ${mentionedName}… আমি তোমাকে দেখছি… তোমার ছায়া তোমার সাথে থাকবে…`,
                    `💀 ${mentionedName}, রাতের ঘুম এখন শান্ত হবে না…`,
                    `👁️ ${mentionedName}, তুমি যা করছ… সেটা কেউ দেখছে…`,
                    `🕷️ ${mentionedName}, তুমি এখন লক্ষ্যবস্তু… সাবধান!`
                ];

                const randomReply = scaryReplies[Math.floor(Math.random() * scaryReplies.length)];

                await message.reply(randomReply);
            }
        }
    });
};
