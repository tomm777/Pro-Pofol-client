const MESSAGE = {
	JOIN: {
		FAILURE: '회원가입에 실패했습니다.',
	},
	LOGIN: {
		FAILURE: '아이디 또는 비밀번호를 다시 확인해 주세요.',
		ERROR: '로그인에 문제가 발생했습니다. 잠시 후에 다시 시도해 주세요.',
		REQUIRED: '로그인이 필요해요.',
	},
	ERROR: {
		DEFAULT: '에러가 발생했습니다. 다시 시도해 주세요',
		EXPIRED: '로그인이 만료되었습니다. 다시 로그인해 주세요.',
	},
	CHECK: {
		POSITION: '직무를 선택해 주세요.',
		COMPANY: '다니는 회사를 입력해 주세요.',
		TITLE: '제목을 입력해 주세요.',
		TITLELENGTH: '제목은 50자 이하로 입력해 주세요.',
		DESCRIPTION: '내용을 입력해 주세요.',
		DESCRIPTIONLENGTH: '내용은 200자 이하로 입력해 주세요.',
		COMMUNICATION: '연락 가능한 링크를 입력해 주세요.',
		CAREER: '경력을 입력해 주세요.',
		ALL: '모든 항목을 선택해 주세요.',
		MODAL: '항목이 비었습니다.\n다시 한번 확인해 주세요.',
		POSITIONLENGTH: '최대 4개까지만 선택할 수 있습니다.',
		EMAIL: '이메일을 입력해 주세요.',
		PORTFOLIO: '포트폴리오 주소를 입력해 주세요.',
	},
	POST: {
		COMPLETE: '게시글 작성이 완료되었습니다.',
		EDIT: '작성한 글을 수정하시겠습니까?',
		EDITFIN: '게시글 수정이 완료되었습니다.',
		DELETE: '게시글을 삭제하시겠습니까?',
		CANCEL: '작성을 취소하시겠습니까?',
		DEADLINE:
			'마감한 게시글은 수정 및 마감 취소가 불가능해요.\n모집을 마감할까요? ',
	},
	STUDY: {
		DEADLINE:
			'마감한 게시글은 수정 및 마감 취소가 불가능해요.\n모집을 마감할까요?',
		LINK: '링크가 클립보드에 복사되었습니다.',
	},
	COMMENT: {
		EDIT: '댓글을 수정하시겠습니까?',
		DELETE: '댓글을 삭제하시겠습니까?',
	},
	REVIEW: {
		COMPLETE: '후기 작성이 완료되었습니다.',
		CANCEL: '후기 작성을 취소하시겠습니까?',
		EDIT: '후기를 수정하시겠습니까?',
		DELETE: '후기를 삭제하시겠습니까?',
	},
	MYPAGE: {
		APPLY: {
			CONFIRM: '포트폴리오 리뷰 신청이 수락되었습니다.',
		},
		EDIT: {
			COMPLETE: '수정이 완료되었습니다.',
			NOCHANGE: '변경 사항이 없습니다.',
		},
		NICKNAME: '닉네임을 입력해 주세요.',
		NODATA: {
			LIST: '내역이 없습니다.',
		},
		REFUSE: {
			REQUSET: '거절하시겠습니까?',
			CANCLE: '거절을 취소하시겠습니까?',
			COMPLETE: '거절이 취소되었습니다.',
		},
		ACCOUNT: {
			AGREE: '안내 사항을 모두 확인했으며 이에 동의합니다.',
			THANKS: '이용해 주셔서 감사합니다.',
		},
	},
	REJECT: {
		COMPLETE: '거절 사유 작성이 완료되었습니다.',
		CANCEL: '거절 사유 작성을 취소하시겠습니까?',
	},
	FILE: {
		UPLOAD: 'JPEG, JPG, PNG 파일만 업로드 가능합니다.',
		NOFILE: '이미지를 첨부해 주세요.',
	},
	LINK: {
		COMPLETE: '링크가 클립보드에 복사되었습니다.',
	},
	DELETE: {
		COMPLETE: '삭제가 완료되었습니다.',
	},
	APPLY: {
		COMPLETE: '신청이 완료되었습니다.',
	},
};

export default MESSAGE;
