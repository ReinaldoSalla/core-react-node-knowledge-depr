import styled from 'styled-components';
import { Link } from 'react-router-dom';

const textColor = 'black';

const FooterLineContainer = styled.div`
	margin: 0 5rem;
	border-top: 1px solid #7d7d7d;
`;

const FooterContentContainer = styled.div`
	/* margin: 0 75px 20px 75px; */
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

const FooterContentLink = styled(Link)`
	margin: 0.5em;
	font-size: 20px;
	color: ${textColor};

	&:hover {
		color: red;
		cursor: pointer;
	}
`;

const FooterYear = styled.span`
	margin: 0.5em;
	font-size: 20px;
	text-align: center;
	color: ${textColor};
`;

const FooterMsg = styled(FooterYear)`
	font-style: italic;
`;

export {
	FooterLineContainer,
	FooterContentContainer,
	FooterContentLink,
	FooterYear,
	FooterMsg,
};
