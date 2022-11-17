// 문제
// 개발자가 되고 싶은 김코딩은 자료구조를 공부하고 있습니다. 인터넷 브라우저를 통해 스택에 대해 검색을 하면서 다양한 페이지에 접속하게 되었는데 "뒤로 가기", "앞으로 가기"를 반복하면서 여러 페이지를 참고하고 있었습니다.
//
//     그런데 새로운 페이지를 접속하게 되면 "앞으로 가기" 버튼이 비활성화돼서 다시 보고 싶던 페이지로 갈 수 없었습니다. 이러기를 반복하다가 김코딩은 스택 자료구조를 떠올리게 되었습니다.
//
//     브라우저에서 "뒤로 가기", "앞으로 가기" 기능이 어떻게 구현되는지 궁금해진 김코딩은 몇 가지 조건을 아래와 같이 작성하였지만, 막상 코드를 작성하지 못하고 있습니다.
const browserStack = (actions, start) => {
    let prevStack = [], nextStack = [];

    if (typeof start !== 'string') return false;

    let currentPage = start;

    for (let page of actions) {
        //1. page 가 알파벳인 경우
        if (typeof page === 'string') {
            //현재 위치한 페이지를 prevStack 에 넣기
            prevStack.push(currentPage);
            //위치한 페이지를 page 로 할당
            currentPage = page;
            //nextStack 초기화
            nextStack = [];
        }
        //2. page 가 뒤로 가기 버튼일 경우
        else if (page === -1 && prevStack.length > 0) {
            //현재 위치한 페이지는 nextStack 에 넣고
            nextStack.push(currentPage);
            //뒤로 가기 후 나타나는 페이지는 prevStack 에서 꺼내오기
            currentPage = prevStack.pop();
        }
        //3. page 가 앞으로 가기 버튼일 경우
        else if (page === 1 && nextStack.length > 0) {
            //현재 위치한 페이지는 prevStack 에 넣고
            prevStack.push(currentPage);
            //앞으로 가기 버튼 클릭 후 나타나는 페이지는 nextStack 에서 꺼내오기
            currentPage = nextStack.pop();
        }
    }
    return [prevStack, currentPage, nextStack];
}

const actions = ["B", "C", -1, "D", "A", -1, 1, -1, -1];
const start = "A";
const output = browserStack(actions, start);

console.log(output); // [["A"], "B", ["A", "D"]]