## 로컬 환경 설정 (Frontend)

민감정보(API Key, Redirect URI 등)는 **`.env`** 파일에 작성하며, 이 파일은 깃에 업로드되지 않습니다.

---

### 1. 로컬 환경변수 파일 생성
프로젝트 루트(`frontend/`) 경로에 `.env` 파일을 생성합니다.  
아래 예시 파일(`.env.example`)을 참고하여 실제 값을 채워 넣으세요.

```env
# .env (예시)
REACT_APP_KAKAO_REST_API_KEY=your_kakao_rest_api_key
REACT_APP_KAKAO_REDIRECT_URI=http://localhost:3000/login-success
