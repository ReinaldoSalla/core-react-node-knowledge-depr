import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Wrapper = styled(animated.div)`
	margin: 0 20px;
	padding-top: 80px;
`;

const ContentWrapper = styled.div`
  /* display: flex; */
`

const Paragraph = styled.p`
  margin: 25px 0;
  line-height: 1.7;
`;

const List = styled.ol`
  /* display: flex; */
  /* margin: 0 0 0 1rem; */
`;

const ListItem = styled.li`
  margin: 1em 0.8rem 0 0;
  /* font-size: 14px; */
  /* text-align: center; */
  /* text-decoration: underline; */
`;

const promisesContents = [
  'Setup',
  'Callback Hell',
  'Building a Promise',
  'Calling a Single Promise',
  'Calling Promises in Sequence',
  'Calling Promises in Parallel',
  'Promise.allSettled',
  'Promise.race'
];

const BaseContentPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const animation = useSpring({
		from: {
			opacity: 0,
			transform: 'translateX(-10%)',
		},
		to: {
			opacity: 1,
			transform: 'translateX(0%)',
		},
	});
	return (
		<Wrapper style={animation}>
			<h1> Suspense </h1>
      <ContentWrapper>
      <List>
          {promisesContents.map((item, index) => (
            <ListItem key={index}>{index + 1}. {item}</ListItem>
          ))}
        </List>
        <div>
          <Paragraph>
            Concurrent Mode fixes this fundamental limitation by making rendering
            interruptible. This means when the user presses another key, React
            doesn’t need to block the browser from updating the text input. Instead,
            it can let the browser paint an update to the input, and then continue
            rendering the updated list in memory. When the rendering is finished,
            React updates the DOM, and changes are reflected on the screen.
          </Paragraph>
          <Paragraph>
            Concurrent Mode fixes this fundamental limitation by making rendering
            interruptible. This means when the user presses another key, React
            doesn’t need to block the browser from updating the text input. Instead,
            it can let the browser paint an update to the input, and then continue
            rendering the updated list in memory. When the rendering is finished,
            React updates the DOM, and changes are reflected on the screen.
          </Paragraph>
          <Paragraph>
            Concurrent Mode fixes this fundamental limitation by making rendering
            interruptible. This means when the user presses another key, React
            doesn’t need to block the browser from updating the text input. Instead,
            it can let the browser paint an update to the input, and then continue
            rendering the updated list in memory. When the rendering is finished,
            React updates the DOM, and changes are reflected on the screen.
          </Paragraph>
          <Paragraph>
            Concurrent Mode fixes this fundamental limitation by making rendering
            interruptible. This means when the user presses another key, React
            doesn’t need to block the browser from updating the text input. Instead,
            it can let the browser paint an update to the input, and then continue
            rendering the updated list in memory. When the rendering is finished,
            React updates the DOM, and changes are reflected on the screen.
          </Paragraph>
          <Paragraph>
            Concurrent Mode fixes this fundamental limitation by making rendering
            interruptible. This means when the user presses another key, React
            doesn’t need to block the browser from updating the text input. Instead,
            it can let the browser paint an update to the input, and then continue
            rendering the updated list in memory. When the rendering is finished,
            React updates the DOM, and changes are reflected on the screen.
          </Paragraph>
          <Paragraph>
            Concurrent Mode fixes this fundamental limitation by making rendering
            interruptible. This means when the user presses another key, React
            doesn’t need to block the browser from updating the text input. Instead,
            it can let the browser paint an update to the input, and then continue
            rendering the updated list in memory. When the rendering is finished,
            React updates the DOM, and changes are reflected on the screen.
          </Paragraph>
        </div>

      </ContentWrapper>
		</Wrapper>
	);
};

export default BaseContentPage;