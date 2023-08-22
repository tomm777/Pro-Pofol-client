import styled, { css } from 'styled-components';

const variantCSS = {
	primary: css`
		background: ${({ theme }) => theme.PALETTE.mainColor};
		color: ${({ theme }) => theme.PALETTE.fontColor};
		cursor: pointer;
		&:disabled {
			background: ${({ theme }) => theme.PALETTE.gray[100]};
			color: rgba(0, 0, 0, 0.1);
		}
	`,
	cancel: css`
		background: ${({ theme }) => theme.PALETTE.gray[200]};
		color: ${({ theme }) => theme.PALETTE.black};

		&:disabled {
			background: ${({ theme }) => theme.PALETTE.gray[100]};
			color: rgba(0, 0, 0, 0.1);
		}
	`,
	add: css`
		background: ${({ theme }) => theme.PALETTE.gray[300]};
		color: ${({ theme }) => theme.PALETTE.fontColor};
	`,
	reverse: css`
		border: 1px solid ${({ theme }) => theme.PALETTE.mainColor};
		color: ${({ theme }) => theme.PALETTE.mainColor};
	`,
};

const shapeCSS = {
	default: css`
		border-radius: 0.25rem;
	`,
	round: css`
		border-radius: 3.125rem;
	`,
};

const sizeCSS = {
	small: css`
		padding: 0.38rem 0.94rem;
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	`,
	normal: css`
		padding: 0.8rem 3rem;
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	`,
	big: css`
		padding: 1rem 4.25rem;
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	`,
};

export const Button = styled.button`
	cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

	${({ variant }) => variantCSS[variant]}
	${({ shape }) => shapeCSS[shape]}
  ${({ size }) => sizeCSS[size]}
	border: none;
`;