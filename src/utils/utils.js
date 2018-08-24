/**
 * 该名字是否存在本地存储
 * @param {Stirng} name: 
 * @return {Boolean} true: 本地存储有值
 */
export const isExistLocalStorage = function(name) {
    const local = localStorage.getItem(name);
    return JSON.stringify(local) !== 'null';
}

