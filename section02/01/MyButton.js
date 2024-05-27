function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false)

    return React.createElement(
        'button',
        {onClick: () => setIsClicked(true)},
        isClicked ? 'Clicked!' : 'Click here!'
    )
}
// 이 코드는 간단한 React의 함수 컴포넌트이다
//--> React 컴포넌트가 이렇게 생겼구나 하고 넘어가자

const domContainer = document.querySelector('#root')
ReactDOM.render(React.createElement(MyButton), domContainer)
// React DOM 에 렌더 함수를 사용해서 React 컴포넌트를 DOM container에 렌더링 하는 코드
//--> 여기서 DOM container 는 root 라는 id 를 가진 div 태그이다
//--> 이 코드가 필요한 이유는 script를 사용해서 컴포넌트를 가져왔다고 해도 컴포넌트가 화면에 보이는 것이 아니기 때문이다

//--> render()

/*
    이제 다시 브라우저를 열어서 Click here! 버튼을 눌러보면 Clicked! 로 바뀌는 것을 볼 수 있다
    이것은 React Component에서 state가 바뀐 것이다
*/