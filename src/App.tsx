import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './App.styles';
import Universal from './pages/Universal';

const App = () => (
	<BrowserRouter>
		<GlobalStyle />
		<Universal />
	</BrowserRouter>
);

export default App;

// import React from 'react';
// import styled from 'styled-components';

// const Wrapper = styled.div`
//     display: flex;
//     display: -webkit-flex;
//     display: -moz-flex;
//     justify-content: space-around;
//     -webkit-justify-content: space-around;
//     -moz-justify-content: space-around;
//     flex-flow: row wrap;
//     -webkit-flex-flow: row wrap;
//     -moz-flex-flow: row wrap;
// `;

// const Item = styled.div`
// width: 130px; height: 180px; background: red; margin: 0 16px 16px 16px;
// `;

// const Empty = styled.div`
//   height: 0 !important;
//   padding-top: 0 !important;
//   padding-bottom: 0 !important;
//   margin: 0 16px;
//   width: 130px;
// `;

// const App = () => (
// <Wrapper>
    
//   <Item ></Item>
//   <Item ></Item>
//   <Item ></Item>
//   <Item ></Item>
//   <Item ></Item>
//   <Item ></Item>
//   <Item ></Item>
//   <Item ></Item>
//   <Item ></Item>
//   <Item ></Item>
//   <Item ></Item>
//   <Item ></Item>
//   <Item ></Item>
//   <Item ></Item>
//   <Item ></Item>
//   <Item ></Item>
//   <Item ></Item>
//   <Item ></Item>
//   <Item ></Item>
//   <Item ></Item>
//   <Item ></Item>
//   <Item ></Item>
//   <Item ></Item>    
//   <Empty ></Empty>
//   <Empty ></Empty>
//   <Empty ></Empty>
//   <Empty ></Empty>
//   <Empty ></Empty>
//   <Empty ></Empty>
//   <Empty ></Empty>
//   <Empty ></Empty>
//   <Empty ></Empty>
//   <Empty ></Empty>
    
//   </Wrapper>
// );

// export default App;