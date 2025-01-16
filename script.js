console.log("測試");

//  建立 Vue 應用程式
const app = Vue.createApp({
    // 資料區塊
    data() {
        // 資料物件
        return {
            // 第一個文字：值
            firstText: "嗨，這是 Vue！",
            textColor: "red",
            fontSize: 30,
            canBuy: true,
            web: [
                "HTML", "CSS", "Javascript", "jQuery", "Vue", "React", "Angular", "Git"
            ],
            count: 0
        }
    }
});

// 將 app 變數安裝到 #app 元素
app.mount("#app");