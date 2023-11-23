/// <reference path="./global.d.ts" />
// @ts-check

import { notify } from './notifier';
import { order } from './grocer';

/**
 * @return void
 */
export const onSuccess = () => notify({ message: 'SUCCESS' });

/**
 * @return void
 */
export const onError = () => notify({ message: 'ERROR' });

/**
 * @param {GrocerQuery} query
 * @param {FruitPickerSuccessCallback} onSuccess
 * @param {FruitPickerErrorCallback} onError
 * @return void
 */
export const orderFromGrocer = (query, onSuccess, onError) => order(query, onSuccess, onError);

/**
 * @param {string} variety
 * @param {number} quantity
 * @return void
 */
export const postOrder = (variety, quantity) => orderFromGrocer({ variety, quantity }, onSuccess, onError);
