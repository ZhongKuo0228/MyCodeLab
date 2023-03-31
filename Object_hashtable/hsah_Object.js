function HashTable() {
    this.values = {};
    this.length = 0;

    this.set = function (key, value) {
        const t0 = performance.now();
        this.values[key] = value;
        this.length++;
        const t1 = performance.now();
        console.log("set() took " + (t1 - t0) + " milliseconds.");
    };

    this.get = function (key) {
        const t0 = performance.now();
        const value = this.values[key];
        const t1 = performance.now();
        console.log("get() took " + (t1 - t0) + " milliseconds.");
        return value;
    };

    this.keys = function () {
        const t0 = performance.now();
        const keysArr = Object.keys(this.values);
        const t1 = performance.now();
        console.log("keys() took " + (t1 - t0) + " milliseconds.");
        return keysArr;
    };

    this.values = function () {
        const t0 = performance.now();
        const valuesArr = [];
        for (const key in this.values) {
            if (this.values.hasOwnProperty(key)) {
                valuesArr.push(this.values[key]);
            }
        }
        const t1 = performance.now();
        console.log("values() took " + (t1 - t0) + " milliseconds.");
        return valuesArr;
    };
}

// 創建一個新的哈希表
let hashTable = new HashTable();

// 在哈希表中設置鍵值對
hashTable.set("apple", "red");
hashTable.set("banana", "yellow");
hashTable.set("orange", "orange");

// 從哈希表中獲取值
console.log(hashTable.get("apple")); // "red"
console.log(hashTable.get("banana")); // "yellow"
console.log(hashTable.get("orange")); // "orange"

// 列舉哈希表中的所有鍵
console.log(hashTable.keys()); // ["apple", "banana", "orange"]

// 列舉哈希表中的所有值
console.log(hashTable.values()); // ["red", "yellow", "orange"]
