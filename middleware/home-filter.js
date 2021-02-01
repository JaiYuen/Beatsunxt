/*
 * @Author: your name
 * @Date: 2020-11-06 14:48:09
 * @LastEditTime: 2021-01-31 16:16:04
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Beats\middleware\home-filter.js
 */
export default function (context) {
    console.log('[home-filter]',context);
    context.userAgent = process.server
      ? context.req.headers['user-agent']
      : navigator.userAgent
}