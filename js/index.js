new Vue({
  el: '#app',
  data() {
    return {
      userInfo: { //用户信息
        name: '',
        gender: '',
        phoneNum: '',
        birthday: ''
      },
      tableData: [{ //用户数据
        name: '王小虎',
        gender: '男',
        phoneNum: '13344556677',
        birthday: '2020-01-01'
      }],
      dialogVisible: false, //弹窗的显示
      editObj: {
        name: '',
        gender: '',
        phoneNum: '',
        birthday: ''
      },
      userIndex: 0
    }
  },
  methods: {
    addUser() { //添加用户信息
      if (!this.userInfo.name) {
        this.$message({
          message: '请输入姓名!',
          type: 'warning'
        });
        return;
      }
      if (!this.userInfo.gender) {
        this.$message({
          message: '请输入性别!',
          type: 'warning'
        });
        return;
      }
      if (!this.userInfo.phoneNum) {
        this.$message({
          message: '请输入电话号码!',
          type: 'warning'
        });
        return;
      }
      if (!/^1[3456789]\d{9}$/.test(this.userInfo.phoneNum)) {
        this.$message({
          message: '请输入正确的电话号码！',
          type: 'warning'
        });
        return;
      }
      if (!this.userInfo.birthday) {
        this.$message({
          message: '请输入出身日期!',
          type: 'warning'
        });
        return;
      }
      this.tableData.push(this.userInfo);
      this.userInfo = {
        name: '',
        gender: '',
        phoneNum: '',
        birthday: ''
      }
    },
    delUser(idx) {
      this.$confirm('确认删除？')
        .then(_ => {
          this.tableData.splice(idx, 1);
        })
        .catch(_ => {});
    },
    handleClose() {
      this.dialogVisible = false;
    },
    editUser(item, idx) {
      this.userIndex = idx;
      this.editObj = {
        name: item.name,
        gender: item.gender,
        phoneNum: item.phoneNum,
        birthday: item.birthday
      };
      this.dialogVisible = true;
    },
    confirm() {
      this.dialogVisible = false;
      Vue.set(this.tableData, this.userIndex, this.editObj);
    }
  },
})