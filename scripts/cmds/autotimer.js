const axios = require("axios");
const fs = require("fs");

const PAGE_TOKEN = "PASTE_YOUR_PAGE_ACCESS_TOKEN";
const GROUP_ID = "PASTE_YOUR_GROUP_ID";

// 24 different videos
const videos = [
 "https://files.catbox.moe/v1.mp4",
 "https://files.catbox.moe/v2.mp4",
 "https://files.catbox.moe/v3.mp4",
 "https://files.catbox.moe/v4.mp4",
 "https://files.catbox.moe/v5.mp4",
 "https://files.catbox.moe/v6.mp4",
 "https://files.catbox.moe/v7.mp4",
 "https://files.catbox.moe/v8.mp4",
 "https://files.catbox.moe/v9.mp4",
 "https://files.catbox.moe/v10.mp4",
 "https://files.catbox.moe/v11.mp4",
 "https://files.catbox.moe/v12.mp4",
 "https://files.catbox.moe/v13.mp4",
 "https://files.catbox.moe/v14.mp4",
 "https://files.catbox.moe/v15.mp4",
 "https://files.catbox.moe/v16.mp4",
 "https://files.catbox.moe/v17.mp4",
 "https://files.catbox.moe/v18.mp4",
 "https://files.catbox.moe/v19.mp4",
 "https://files.catbox.moe/v20.mp4",
 "https://files.catbox.moe/v21.mp4",
 "https://files.catbox.moe/v22.mp4",
 "https://files.catbox.moe/v23.mp4",
 "https://files.catbox.moe/v24.mp4"
];

const captions = [
 "🌙 রাত ১২টা – আল্লাহকে স্মরণ করার সেরা সময়",
 "🌙 রাত ১টা – ঘুমের আগে একবার দোয়া করুন",
 "🌙 রাত ২টা – এই নীরব রাতে ক্ষমা চান",
 "🌙 রাত ৩টা – তাহাজ্জুদের বরকতের সময়",
 "🌅 ভোর ৪টা – ফজরের প্রস্তুতি নিন",
 "🌅 ভোর ৫টা – ফজরের নামাজ পড়ুন",
 "🌅 ভোর ৬টা – শীতের সকালের রহমত",
 "☀️ সকাল ৭টা – নতুন দিনের শুরু",
 "☀️ সকাল ৮টা – পড়াশোনা শুরু করুন",
 "☀️ সকাল ৯টা – সময় নষ্ট করবেন না",
 "☀️ সকাল ১০টা – কুরআন পড়ুন",
 "☀️ সকাল ১১টা – নিজেকে ঠিক রাখুন",
 "🕌 দুপুর ১২টা – যোহরের নামাজ",
 "🍽️ দুপুর ১টা – খাবারের সময়",
 "😴 দুপুর ২টা – একটু বিশ্রাম নিন",
 "🕰️ দুপুর ৩টা – আসরের প্রস্তুতি",
 "🕌 বিকাল ৪টা – আসরের নামাজ",
 "🌇 বিকাল ৫টা – সন্ধ্যার প্রস্তুতি",
 "🕌 সন্ধ্যা ৬টা – মাগরিবের নামাজ",
 "💞 সন্ধ্যা ৭টা – পরিবারকে সময় দিন",
 "🍛 রাত ৮টা – রাতের খাবার",
 "🕌 রাত ৯টা – ইশার নামাজ",
 "🤲 রাত ১০টা – দোয়া করে ঘুমান",
 "🌙 রাত ১১টা – আল্লাহ আপনার পাহারা"
];

if (!fs.existsSync("sent.json")) {
  fs.writeFileSync("sent.json", JSON.stringify([]));
}

function getNewVideo() {
  let sent = JSON.parse(fs.readFileSync("sent.json"));
  let available = videos.filter(v => !sent.includes(v));

  if (available.length === 0) {
    sent = [];
    available = videos;
  }

  const video = available[Math.floor(Math.random() * available.length)];
  sent.push(video);
  fs.writeFileSync("sent.json", JSON.stringify(sent));
  return video;
}

async function send() {
  const hour = new Date().getHours();
  const caption = captions[hour];
  const video = getNewVideo();

  try {
    await axios.post(
      `https://graph.facebook.com/v18.0/me/messages?access_token=${PAGE_TOKEN}`,
      {
        recipient: { thread_key: GROUP_ID },
        message: {
          text: caption + "\n🎥 নিচের ভিডিও দেখুন 👇",
          attachment: {
            type: "video",
            payload: { url: video }
          }
        }
      }
    );
    console.log("Sent:", caption);
  } catch (e) {
    console.log("Error:", e.message);
  }
}

setInterval(send, 60 * 60 * 1000);
send();
