module.exports = {
isSubsequence: function (str1, str2) {
  var i = 0
  var j = 0
  if (!str1) return true // here we check if str1 is empty, and return true - any  value in str2 would make str1 a subsequence.
  while (j < str2.length) {
    // here we start  iterating on str2 using a while loop. the stop condition for the while loop is when j pointer reaches the end of str2, if we didn't return true by then, we return false.
    if (str2[j] === str1[i]) i++ // only advance str1[i] if we we found a match on str2, order matters!
    if (i === str1.length) return true // if i reached the length of str1 it means a match was found on str2 for all characters on string1, we good!
    j++
  }
  return false
}
}