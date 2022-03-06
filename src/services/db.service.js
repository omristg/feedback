'use strict';

import { utils } from './utils.service.js';

export const dbService = {
    query,
    getById,
    getByUsername,
    remove,
    post,
    put,
    insert
};

const ID_FIELD = '_id';

function query(collectionName) {
    var collection = utils.loadFromStorage(collectionName);
    if (!collection) collection = [];
    return Promise.resolve(collection);
}

async function getById(collectionName, id) {
    var collection = await query(collectionName);
    return collection.find(curr => curr[ID_FIELD] === id);
}

async function getByUsername(collectionName, username) {
    var collection = await query(collectionName);
    return collection.find(curr => curr.username === username);
}



async function remove(collectionName, id) {
    var collection = await query(collectionName);
    var idx = collection.findIndex(curr => curr[ID_FIELD] === id);
    if (idx === -1) throw new Error('something went wrong');
    collection.splice(idx, 1);

    utils.storeToStorage(collectionName, collection);
    return Promise.resolve();
}

async function post(collectionName, item) {
    var collection = await query(collectionName);

    item[ID_FIELD] = utils.getRandomId();
    collection.push(item);

    utils.storeToStorage(collectionName, collection);
    return Promise.resolve(item);
}

async function put(collectionName, item) {
    var collection = await query(collectionName);

    let idx = collection.findIndex(curr => curr[ID_FIELD] === item[ID_FIELD]);
    if (idx === -1) throw new Error('something went wrong');
    collection[idx] = item;

    utils.storeToStorage(collectionName, collection);
    return Promise.resolve(item);
}

async function insert(collectionName, items) {
    var collection = await query(collectionName);
    items.forEach(curr => curr[ID_FIELD] = utils.getRandomId());
    collection.push(...items);
    utils.storeToStorage(collectionName, collection);
    return Promise.resolve();
}
