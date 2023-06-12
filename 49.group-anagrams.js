/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = (strs) => {
  let map = new Map(),
    l = strs.length;
  for (let i = 0; i < l; i++) {
    anagram = strs[i].split``.sort().join``;
    map.set(anagram, [...(map.get(anagram) || []), strs[i]]);
  }

  return Array.from(map.values());
};

/* var groupAnagrams = function (strs) {
  const LENGTH = strs.length;
  let res = [];
  for (let k = 0; k < LENGTH; k++) {
    let anagrams = [];
    if (strs[k] == undefined) continue;
    let sortedPoint = strs[k].split``.sort().join``;
    for (let l = 0; l < LENGTH; l++) {
      if (strs[l] == undefined || sortedPoint.length != strs[l].length)
        continue;
      if (sortedPoint == strs[l].split``.sort().join``) {
        anagrams.push(strs[l]);
        strs.splice(l, 1, undefined);
      }
    }
    if (anagrams.length) res.push(anagrams);
  }
  return res;
}; */
// @lc code=end
