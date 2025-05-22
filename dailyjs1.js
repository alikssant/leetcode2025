//7 kyu
//Return substring instance count

function solution(fullText, search) {
  let count = 0;
  let starterIndex = 0;
  let finalIndex = search.length;
  for (let i = 0; i < fullText.length; i++) {
    if (fullText.slice(starterIndex, finalIndex) === search) {
      count++;
      starterIndex = finalIndex;
      finalIndex += search.length;
    } else {
      starterIndex++;
      finalIndex++;
    }
  }

  return count;
}
const full_text = "ccddeeccddeecc";
const search_text = "cc";
console.log(solution(full_text, search_text));
