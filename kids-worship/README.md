# Kids Worship (유아부 예배 프로그램)

유아부(0~4세) 예배를 위한 경량 웹앱입니다. 빌드/설치 없이 브라우저에서 바로 실행됩니다.

- 챈트영상: 유튜브 링크를 추가해 재생목록을 저장 (로컬 저장)
- 팡팡바이블(액티비티): 예시 액티비티 카드와 인쇄 기능
- 교육자료: 컬러링/레슨플랜 등 예시 자료 다운로드
- 영어학습: ABC/단어 플래시카드 생성 및 인쇄
- PWA: 오프라인에서도 기본 페이지 사용 가능 (서비스워커)

## 실행 방법
1. 이 폴더를 정적 서버로 열어주세요.
   - Python: `python3 -m http.server 5173` (또는 원하는 포트)
   - Node: `npx serve .`
2. 브라우저에서 `http://localhost:5173` 접속

## 폴더 구조
- `index.html`: 메인 대시보드
- `pages/chant.html`: 챈트영상
- `pages/pangpang.html`: 팡팡바이블 액티비티
- `pages/resources.html`: 교육자료
- `pages/english.html`: 영어학습
- `assets/js/data.js`: 예시 콘텐츠 데이터
- `assets/js/app.js`: 공통 유틸과 SW 등록
- `assets/css/styles.css`: 스타일
- `sw.js`, `manifest.webmanifest`: PWA 파일

## 노트
- 모든 사용자 데이터(영상 목록 등)는 브라우저 LocalStorage에 저장됩니다.
- 예시 자료는 샘플이며 실제 사역 환경에 맞게 `assets/js/data.js`를 수정하세요.