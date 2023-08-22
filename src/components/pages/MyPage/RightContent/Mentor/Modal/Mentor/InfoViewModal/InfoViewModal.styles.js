import styled from 'styled-components';

export const Modal = styled.div`
	display: flex;
	width: 120rem;
	min-height: 67.5rem;
	heigth: 100vh;
	padding: 0.625rem;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.625rem;

	z-index: 999;

	background: rgba(0, 0, 0, 0.2);

	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
`;

export const ModalWrapper = styled.div`
	display: flex;
	padding: 3.75rem 6.25rem;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 4rem;
	border-radius: 0.625rem;
	background: var(--grey-white, #fff);
`;

export const InfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	width: 25rem;
`;

export const InfoTitle = styled.div`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.lg};
`;

export const InfoBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2rem;
	width: 100%;
`;

export const InfoSubTitleBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;
`;

export const InfoSubTitle = styled.div`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.md};

	& span : {
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	}
`;

export const ModalButton = styled.button`
	width: 25rem;
	height: 3rem;
	flex-shrink: 0;
	background: #37f;
	border-radius: 4px;
	cursor: pointer;

	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	font-size: ${({ theme }) => theme.FONT_SIZE.md};
	color: #fff;
`;