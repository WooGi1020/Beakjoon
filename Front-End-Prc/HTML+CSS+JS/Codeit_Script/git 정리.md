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


