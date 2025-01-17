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
            count: 0,
            pointX: 0, pointY: 0,
            inputText: "預設文字",
            toDoList: [], addToDo: ""
        }
    },
    // 方法區（函式區）
    methods: {
        // 方法名稱() {}
        test() {
            console.log("我是測試方法");
        },
        methodEvent(e) {
            console.log(e);
            console.log(e.target);
            console.log(e.x, e.y);
        },
        getPoint(e) {
            this.pointX = e.x;
            this.pointY = e.y;
        },
        addToDoList() {
            // 將addToDo 添加到 ToDoList 陣列內
            this.toDoList.push(this.addToDo);
        }
    }
});

// 將 app 變數安裝到 #app 元素
app.mount("#app");