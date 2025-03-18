const solution = (numbers, num1, num2) => numbers.slice(num1,num2+1);

/**
 * 풀이
 * 배열의 자르기 메서드인 slice를 사용하여 배열을 자른다.
 * slice 메서드는 시작 인덱스와 끝 인덱스를 인자로 받아, 해당 인덱스 범위의 요소를 반환한다.
 * 끝 인덱스는 포함되지 않으므로, 끝 인덱스에 1을 더해준다.
 */