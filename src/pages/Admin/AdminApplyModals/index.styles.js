import { styled } from 'styled-components';

const Modal = styled.div`
	position: fixed;
	background: rgba(0, 0, 0, 0.2);
	z-index: 99;
	width: 100%;
	height: 100vh;
`;

const ApplyModalWrap = styled.div`
	background-color: #fff;
	border-radius: 10px;
	padding: 50px 100px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;
const ContentArea = styled.div``;
const MainTitle = styled.h2`
	font-size: ${({ theme }) => theme.FONT_SIZE.lg};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.medium};
	font-weight: 700;
	text-align: center;
	margin-bottom: 32px;
`;
const SubTitle = styled.h2`
	font-size: ${({ theme }) => theme.FONT_SIZE.md};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.medium};
	font-weight: 700;
	text-align: left;
`;
const IconBox = styled.div`
	position: absolute;
	right: 30px;
	top: 30px;
`;
const CloseIcon = styled.i`
	cursor: pointer;
	background: url('/assets/img/icons/close-icon.svg') no-repeat;
	display: inline-block;
	width: 20px;
	height: 20px;
`;
const TextArea = styled.div`
	display: inline-block;
	text-align: left;
	margin-right: 16px;
	width: 80px;
	> span {
		font-size: ${({ theme }) => theme.FONT_SIZE.md};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.medium};
		font-weight: 700;
		line-height: normal;
	}
	&:last-child {
		width: 100%;
	}
`;
const TextWrap = styled.div`
	margin-bottom: 34px;

	> span {
		color: #757575;
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.medium};
		font-weight: 400;
	}
`;
const ImgBox = styled.div`
	width: 400px;
	height: 200px;
	background-color: #fff;

	> img {
		width: 100%;
		height: 100%;
		cursor: pointer;
		image-rendering: -moz-crisp-edges; /* Firefox */
		image-rendering: -o-crisp-edges; /* Opera */
		image-rendering: -webkit-optimize-contrast; /* Webkit 표준 X */
		image-rendering: crisp-edges;
		-ms-interpolation-mode: nearest-neighbor;
		-moz-backface-visibility: hidden; // firefox
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}
	> div {
		background: url(${props => props.url});
		background-size: contain;
		width: 100%;
		height: 100%;
		background-repeat: no-repeat;
		cursor: pointer;
	}
`;
const ButtonArea = styled.div`
	margin-top: 32px;
	display: flex;
	justify-content: space-between;
	> button {
		border-radius: 4px;
		width: 192px;
		height: 48px;
		background-color: ${({ theme }) => theme.PALETTE.gray[200]};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
		cursor: pointer;
	}
	> button:last-child {
		background-color: ${({ theme }) => theme.PALETTE.mainColor};
		color: ${({ theme }) => theme.PALETTE.white};
		font-size: ${({ theme }) => theme.FONT_SIZE.md};
	}
`;
const ImageModal = styled.div`
	position: fixed;
	background: rgba(0, 0, 0, 0.2);
	z-index: 100;
	width: 100%;
	height: 100vh;
	top: 0;
`;
const OriginalImageWrap = styled.div`
	/* z-index: 100;
	position: fixed;
	background: rgba(0, 0, 0, 0.2); */
	/* right: calc(50% - 100px); */
	/* width: 100%;
	height: 100vh; */
	/* position: absolute;
	top: 250px; */
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;
const OriginalImageBox = styled.div`
	/* position: absolute;
	top: 250px; */
	position: relative;
	width: 650px;
	margin: 0 auto;
`;
const OriginalImage = styled.img`
	width: 100%;
	/* width: 1000px; */
	/* height: 500px; */
`;
export {
	ApplyModalWrap,
	MainTitle,
	SubTitle,
	IconBox,
	CloseIcon,
	ContentArea,
	TextArea,
	TextWrap,
	ImgBox,
	ButtonArea,
	Modal,
	OriginalImage,
	OriginalImageBox,
	OriginalImageWrap,
	ImageModal,
};
