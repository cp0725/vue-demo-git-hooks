/*
 * @Author: 常培
 * @Date: 2021-09-05 17:55:53
 * @LastEditors: 常培
 * @LastEditTime: 2021-09-05 17:59:51
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['aaa', 'WIP', 'feat', 'fix', 'refactor', 'docs', 'test', 'style', 'chore', 'revert'],
    ]
  }
}