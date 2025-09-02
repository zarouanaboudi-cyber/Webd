document.getElementById("startBtn").addEventListener("click", () => {
  const token = document.getElementById("token").value;
  if (!token) return alert("ضع توكن البوت أولاً!");

  document.getElementById("status").innerText = 
    "✅ التوكن محفوظ. لتشغيل البوت افتح Terminal في Acode واكتب: node bot.js";
});
