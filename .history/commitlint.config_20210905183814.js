/*
 * @Author: 常培
 * @Date: 2021-09-05 17:55:53
 * @LastEditors: 常培
 * @LastEditTime: 2021-09-05 18:38:14
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['aaa', 'feat', 'fix', 'refactor', 'docs', 'test', 'style'],
    ]
  }
}