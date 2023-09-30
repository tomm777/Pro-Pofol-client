import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './StudyPage.styles';

import StudySlider from 'components/pages/StudyPage/StudySlider';
import SignupModal from 'components/pages/SignUp/Modal';
import Button from 'components/@common/Button';
import MESSAGE from 'constants/message';
import StudyCategory from 'components/pages/StudyPage/StudyCategory';
import PostCardList from 'components/pages/StudyPage/PostCardList';

import useApi from 'hooks/useApi';

import { useRecoilValue } from 'recoil';
import { userAtom } from 'recoil/atoms/index.atom';

function StudyPage() {
	const { isAuth } = useRecoilValue(userAtom);
	const [userNickName, setUserNickName] = useState('');
	const navigate = useNavigate();
	const [openModal, setOpenModal] = useState(false);

	// const isLoggedIn = checkToken();
	// console.log('로그인 유무', checkToken());

	const onClickAddPost = () => {
		if (!isAuth) {
			alert(MESSAGE.LOGIN.REQUIRED);
			setOpenModal(true);
		} else {
			navigate('/study/post');
		}
	};

	const { result: userData } = useApi({
		path: isAuth ? '/user' : '',
		shouldFetch: isAuth,
	});

	useEffect(() => {
		if (userData) {
			setUserNickName(userData.nickName);
		}
	}, [userData]);

	const handleSignupClose = () => {
		setOpenModal(false);
	};

	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [pathname]);

	return (
		<>
			<S.Container>
				<S.PopularContents>
					{/* 인기 스터디, 프로젝트 */}
					<S.TitleWrapper>
						<S.TopBox>
							<S.Title>
								<img
									src="assets/img/icons/fire.svg"
									alt="불 아이콘"
								/>
								{isAuth && userNickName
									? `${userNickName} 님 추천 스터디 / 프로젝트`
									: '추천 스터디 / 프로젝트'}
							</S.Title>
							<S.SubTitle>
								{isAuth
									? '포지션에 맞는 스터디, 프로젝트를 확인해 보세요!'
									: '로그인하고 스터디, 프로젝트에 참여해 보세요!'}
							</S.SubTitle>
						</S.TopBox>
						{/*  */}
						<Button
							variant={'add'}
							shape={'default'}
							size={'normal'}
							onClick={onClickAddPost}
						>
							글쓰기
						</Button>
					</S.TitleWrapper>

					<S.PopularCardWrapper>
						<StudySlider
							isLoggedIn={isAuth}
							$background="whiteBackground"
							url={
								isAuth
									? '/projectStudies/recommend/recommendProjectStudy'
									: '/projectStudies/recommend/recommendProjectStudyForGuest'
							}
							slidesToShow={4}
						/>
					</S.PopularCardWrapper>
				</S.PopularContents>

				<S.StudyContents>
					<S.TitleWrapper>
						<S.Title>
							<img
								src="assets/img/icons/stars.svg"
								alt="별 아이콘"
							/>{' '}
							함께 성장할 동료를 찾아보세요!
						</S.Title>
					</S.TitleWrapper>

					{/* 필터 카테고리 버튼 영역 */}
					<S.CategoryContainer>
						<StudyCategory />
						<PostCardList />
					</S.CategoryContainer>
				</S.StudyContents>
			</S.Container>

			{openModal && <SignupModal onClose={handleSignupClose} />}
		</>
	);
}

export default StudyPage;
