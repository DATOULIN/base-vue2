// "off" 或 0 - 关闭规则
// "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
// "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'no-else-return': 1, // 如果if语句里面有return,后面不能跟else语句
    'no-multi-spaces': 1, // 不能用多余的空格
    'key-spacing': [1, { // 对象字面量中冒号的前后空格
      'beforeColon': false,
      'afterColon': true
    }],
    'semi': 2,//语句强制分号结尾
    'comma-dangle': [2, 'never'], // 对象字面量项尾不能有逗号
    'no-var': 0,//禁用var，用let和const代替
    'camelcase': 2,//强制驼峰法命名
    // 'indent': [2, 4]//缩进风格
    // quotes: ['error', 'double']//引号规则为：“双引号”，否则一律按照 “error” 处理（你也可以改成warn试一下）
  }
}
