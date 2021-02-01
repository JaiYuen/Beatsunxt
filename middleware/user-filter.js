/*
 * @Author: your name
 * @Date: 2021-01-31 16:19:03
 * @LastEditTime: 2021-01-31 16:19:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Beats\middleware\user-filter.js
 */
export default function (context) {
    console.log('[user-filter]',context);
    context.userAgent = process.server
      ? context.req.headers['user-agent']
      : navigator.userAgent
}