let tags = ['php', 'javascript', 'vue', 'javascript'];

let set = new Set(tags);

console.log(set);
let newSet = new Set([...set].filter(tag => tag.length < 4));
console.log(newSet);