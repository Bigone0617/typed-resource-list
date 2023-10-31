## Modules

- `typed design system` : icon
  - `emotion`
- `zustand` : 상태 관리
- `react-hot-toast` : toast
- `uuid` : resource id 생성
- `styled-component` : style

## Solution

- url, img 각 리소스 별 validation을 진행 후 전부 통과하면 `store.resources`에 추가

- 리소스 url, title 입력 시 autoFocus를 하고, 입력창이 아닌 곳을 클릭하면 edit mode를 false로 변경

- img 같은 경우 여러 개를 한번에 업로드하고, 각각 validation을 진행해야 하므로 반복문을 통해 개별 처리

- 업로드 최신순으로 나열을 위해, resource object안에 `createdTime` 값을 추가해서 시간 역순으로 나열

## 추가 기능

- 삭제하려는 리소스가 뷰어에 열려 있으면, 리소스 삭제 시 뷰어 닫음
- 리소스 업로드 중 로딩 토스트

## issue

**typed design system peerDependencies error**

- typed design system을 사용하기 위해서는 emotion module이 설치되어 있어야함.
- emotion 최신 버전으로 설치하면 naming miss match 에러 발생.
- typed design system에서 요구하는 emotion/core 10.x 버전으로 변경하면 정상 작동.
