**typed design system peerDependencies error**

- typed design system을 사용하기 위해서는 emotion module이 설치되어 있어야함.
- emotion 최신 버전으로 설치하면 naming miss match 에러 발생.
- typed design system에서 요구하는 emotion/core 10.x 버전으로 변경하면 정상 작동.


**modules**

- typed design system : icon
    - emotion
- zustand : 상태 관리
- react-hot-toast : toast
- uuid : resource id 생성
