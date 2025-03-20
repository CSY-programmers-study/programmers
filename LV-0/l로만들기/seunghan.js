// 알파벳 소문자로 이루어진 문자열 myString이 주어집니다. 알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 return 하는 solution 함수를 완성해 주세요.

function solution(myString) {
    var answer = '';
    // 모든 알파벳 저장
    let al = "abcdefghijklmnopqrstuvwxyz";

    // for of 문 작성
    for (let i of myString) {
        // indexOf 로 확인해 인덱스가 i 보다 작으면 l을 더하고 아닐 경우 al 에 담긴 값을 저장
        if (al.indexOf(i) < al.indexOf("l")) {
            answer += "l";
        }
        else {
            answer += i;
        }
    }

    return answer;
}