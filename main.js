// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */

import Vue from 'vue'
import App from './App'
import { METHODS } from 'http';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#container',
  data: {
    tags: [
      { status: 1, name: "処置" },
      { status: 2, name: "S2" },
      { status: 2, name: "加工・部品待ち"},
      { status: 2, name: "定期メンテナンス"},
      { status: 2, name: "S4"},
      { status: 2, name: "部品交換"},
      { status: 2, name: "品確・動作確認"},
      { status: 2, name: "原因追究"},
      { status: 2, name: "S6"},
      { status: 2, name: "冷却部"},
      { status: 2, name: "昼勤"},
      { status: 2, name: "ドレン抜き"},
      { status: 2, name: "夜勤"},
      { status: 2, name: "段取り"},
      { status: 2, name: "改良・予防安全"},
      { status: 2, name: "イベント"},
      { status: 2, name: "緊急速報"},
      { status: 2, name: "さらに表示"}
    ],
    sortbuttons: [
      { name: "人気順", url: "https://www.yahoo.co.jp/"},
      { name: "新着順" },
      { name: "タイトル順" },
      { name: "注目タグ順" }
    ]
  }
})
