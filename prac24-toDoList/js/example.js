// const app = new Vue({
//   el: "#todoapp",
//   data: {
//     //  总数据
//     todoList: ["吃饭饭", "睡觉觉", "写代码"],
//     //  输入的内容
//     inputValue: "",
//   },
//   // 方法
//   methods: {
//     // 增加任务
//     addTodo() {
//       this.todoList.push(this.inputValue);
//     },
//     // 删除任务
//     delTodo(index) {
//       this.todoList.splice(index, 1);
//     },
//     clearTodo() {
//       this.todoList = [];
//     }
//   }
// });

let app = new Vue({
  el: "#todoapp",
  data: {
    list: ['exercise', 'drink water'],
    // 获取表单数据
    inputValue: "",
  },
  methods: {
    add() {
      this.list.push(this.inputValue);//新增task
      this.inputValue = ""; //回车后清空input
    },
    deleteItem(index) {
      this.list.splice(index, 1);
    },
    clearAll() {
      this.list = [];
    }
  }
})