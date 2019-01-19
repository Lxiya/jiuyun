let RegJudge = {
  judgeNull(value, type, _this) {
    return value ? true : (_this.$toast('请输入用户' + type + ''), false)
  },
  judgePhone(phone, type, _this) {
    return /^1[34578]\d{9}$/.test(phone) ? true : (_this.$toast('请输入正确的' + type + ''), false)
  },
  judgePassword(password, repeatPassWord, type, _this) {
    return password.trim() === repeatPassWord.trim() ? true : (_this.$toast('两次输入的' + type + '不一致'), false)
  }
}

export { RegJudge }
