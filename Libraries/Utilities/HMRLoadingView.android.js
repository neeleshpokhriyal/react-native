/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

'use strict';

var ToastAndroid = require('ToastAndroid');

const TOAST_SHORT_DELAY = 2000;

class HMRLoadingView {
  static _showing: boolean;

  static showMessage(message: string) {
    if (HMRLoadingView._showing) {
      return;
    }
    ToastAndroid.show(message, ToastAndroid.SHORT);
    HMRLoadingView._showing = true;
    setTimeout(() => {
      HMRLoadingView._showing = false;
    }, TOAST_SHORT_DELAY);
  }

  static hide() {
    // noop
  }
}

module.exports = HMRLoadingView;
