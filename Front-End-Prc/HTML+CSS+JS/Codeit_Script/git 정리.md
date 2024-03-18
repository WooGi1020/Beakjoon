### repository와 commit
---
```markdown
- commit
 프로젝트 디렉토리의 모습을 하나의 버전으로 남기는 행위&결과물
- repository
 커밋이 저장되는 저장소
```

### git의 3가지 작업 영역
---
🔖git은 내부적으로 크게 3가지의 작업 영역을 보
```markdown
1. working directory
 작업을 진행하는 프로젝트 디렉토리
2. staging area
 git add 커맨드를 입력한 파일들이 저장된 저장소
3. repository
 변경이력(커밋)이 저장되는 저장소
```
 < 커밋 진행 순서 >
![[Pasted image 20240314151555.png]]
✅staging area는 commit으로 업데이트할 파일들을 미리 선별하는 용도

### git의 시점으로 보는 파일의 4가지 상태
---
git의 파일은 크게 ==Untracked==와 ==Tracked==의 상태를 보유
==Tracked==에 해당하는 파일은 또 ==Staged==, ==Unmodified==, ==Modified==의 상태를 보유
```markdown
1. Untracked
 '추적되지 않고있는'이라는 뜻으로, git이 해당 파일의 변동사항을 추적고 있지 않다는 뜻
2. Tracked
 파일이 git에 의해 추적되는 상태
	1. Staged : 파일이 수정된 후, staging area에 올라와 있는 경우 (git add 커맨드 입력)
	2. Unmodified : 최신 커밋 당시와 해당 파일의 변동이 없는 경우
	3. Modified : 최신 파일과 비교하여 변동이 있는 경
```
< git에서 파일의 상태변화 >
![[Pasted image 20240314152939.png]]

### git 기본 커맨드
---
🔖git의 기본적인 커맨드 정리
```markdown
< 로컬 레포지토리 생성 및 기본 설정 >
- git init : 현재 디렉토리를 git이 관리하는 디렉토리로 설정 및 레포지토리(.git) 생성
- git config user.name "example" : 현재 사용자 아이디를 설정 (커밋 시 필요)
- git config user.email "example" : 현재 사용자 이메일주소 설정 (커밋 시 필요)

- git add file / . : 특정파일(혹은 전체파일)을 staging area에 업로드
- git add dir : 특정 디렉토리를 staging area에 업로드
- git reset file : staging area에 업로드한 파일 업로드 취소

- git status : git이 현재 인식(추적) 하고 있는 파일 출력
- git commit -m "~" : staging area에 있는 파일을 커밋하여 git 레포지토리로 업로드
```

```markdown
< github 기본 커맨드 >
- git push -u origin master : 로컬 레포의 내용을 처음으로 원격 레포에 업로드 할 때 사용
- git push : 로컬 레포의 내용을 원격 레포로 전송
- git pull : 원격 레포의 내용을 로컬 레포로 전송
- git clone 파일주소 : github의 프로젝트를 내 컴퓨터로 복제 및 전송
```

### 커밋 다루기
---
🔖커밋이 다루는 기본 정보 : ==커밋 사용자 아이디==,==커밋 날짜 및 시간==,==커밋 메세지==
```markdown
❗커밋 메세지 작성 시 가이드라인
1. 커밋 메세지의 제목과 설명 사이 한줄 비워두기(head와 body의 구분)
2. 커밋 메세지 제목 뒤에 온점(.) 붙히기 금지
3. 커밋 메세지 제목의 첫번째 글자는 대문자로 작성
4. 커밋 메세지의 제목은 명령조로 작성
5. 커밋의 상세 내용
	왜 커밋하였는가, 어떤 문제가 있었는가, 적용한 해결책이 어떤 효과를 내는가
6. 최대한 친절하게 작성
```
```markdown
❗커밋할때 알아야할 가이드라인
1. 하나의 커밋에는 하나의 수정사항(issue)만 남기기
2. 현재 디렉토리의 상태가 내부 전체 코드 실행 시 에러가 발생하지 않는 경우에 남기기
```

### 긴 커맨드에 alias 설정
---
🔖git의 다양한 커맨드는 짧기도 하지만 길이가 긴 커맨드도 존재.
❗aliasing을 이용해 이러한 긴 커맨드에 별명을 지정하고 활용 가능
```markdown
ex)
git log --pretty=oneline
-> aliasing..
git config alias.history 'log --pretty=oneline'
```

### 커밋 다루기 심화
```markdown
- git log : 커밋 히스토리 출력
- git log --pretty=online : 히스토리를 예쁘게 한줄로 정렬하여 출력
- git show 'commit id' : 특정 커밋의 변경사항 확인
- git commit --amend : 최신 커밋 수정 및 새 커밋으로 변환
- git config alias.name 'option' : 길이가 긴 커맨드의 별명 설정 및 사용
- git diff 'commit1' 'commit2' : 커밋1, 2간의 차이 비교
- git reset 'option' 'commit' : 옵션에 따라 커밋 취소의 세분화가 가능
- git tag : 특정 커밋의 태그 붙히기기
```

### 브랜치 정리
```markdown
- git branch 브랜치 : 새로운 브랜치를 생성
- git checkout -b 브랜치 : 새 브랜치를 생성 후, 그 브랜치로 이동
- git branch -d 브랜치 : 브랜치를 제거
- git merge 특정_브랜치 : 현재 위치한 브랜치에 특정 브랜치를 머지
- git merge --abort : 머지 중에 conflict 발생 시, 취소 후 이전 상태로 회
```

### 협업을 위한 git 커맨드
```markdown
- git fetch : git pull과 다르게 리모트 레포지토리의 내용을 데이터상으로 가져오기만 함
- git blame : 특정 파일의 커밋이 언제 어떻게 생긴건지 확인
- git revert : 특정 커밋에서 이루어진 작업을 되돌리는 커밋을 새로 생성

- git reflog : HEAD가 가리켜온 모든 커밋을 출력
- git log --all --graph : 모든 브랜치의 커밋 히스토리를 그래프 형식으로 출력
- git rebase 브랜치 : merge와 동일한 효과이나 좀더 히스토리가 깔끔해짐
- git stash : 현재 작업 내용을 임시 스택 영역에 저장
- git stash apply : 스택에 저장된 작업 내용을 불러옴(커밋 아이디 미작성 시 가장 최근 작업)
- git stash drop : 스택에 저장된 작업 내용을 삭제(커밋 아이디 미작성 시 가장 최근 작업)
- git stash pop : 스택에 저장된 작업 내용을 working dir에 적용하고 삭제
- git cherry-pick : 특정 커밋의 내용을 현재 커밋에 반영
```