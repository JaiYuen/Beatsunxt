<!--
 * @Author: your name
 * @Date: 2020-11-06 14:27:24
 * @LastEditTime: 2021-01-31 17:36:06
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Beats\pages\README.md
-->
# PAGES

This directory contains your Application Views and Routes.
The framework reads all the `*.vue` files inside this directory and creates the router of your application.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/routing).
//导入
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})