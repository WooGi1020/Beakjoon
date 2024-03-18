### branch의 개념
🔖git에서 어떠한 작업을 독립적으로 진행하기 위한 개념

```markdown
git branch mybranch
```
⬆️이와 같이 특정 디렉토리 안에서 신규 브랜치를 생성한다.

🔖브랜치를 이동하는 커맨드로는 ==checkout==이 있으나, 현재는 기능별로 분리 (switch, restore)
```markdown
git checkout mybranch
git switch mybranch
```

```markdown
git checkout -b mybranch (구버전)
git switch -c mybranch 
```
⬆️생성과 이동을 동시에 하는 커맨드

```markdown
git branch -d mybranch
git branch -D mybranch (강제 삭제)
```
⬆️브랜치를 삭제하는 커맨드

🔖신규생성한 branch를 원격 레포지토리에 push하기 위해서 커맨드를 이용한 설정이 필요하다.
```markdown
git push --set-upstream origin mybranch
```
⬆️ ==origin==은 원격 레포지토리를 특정하는 관례상의 용어이다.


### Merge의 개념
🔖branch를 통해 작업한 것들을 하나로 합치는 개념

```markdown
ex) 생성한 branch 내에서 작업을 진행한 후로 가정
git add .
git commit -m "commit message"
```
⬆️add와 commit 커맨드를 통해 작업한 결과를 브랜치의 원격 레포지토리로 전송한다.

```markdown
git switch master
```
⬆️master 브랜치로 이동한다.

```markdown
git merge mybranch
```
⬆️나의 branch에서 작업한 결과를 master 브랜치에 merge시킨다.
🔖이를 통해 여러 사람이 각자 개발한 것을 최종적으로 하나의 작업물로 합치는 것이 가능하다.

### ❗conflict가 발생하는 경우
🔖각각의 브랜치가 동일한 파일을 수정한 뒤 내용이 다른 상태에서 merge하는 경우, conflict가 발생한다.

```markdown
1. 브랜치 간의 내용을 비교하고 수정하여 conflict를 해결한 후 merge
2. merge 작업 자체를 취소 : git merge --abort
```

---
### Git Flow 브랜치 전략
브랜치는 협업을 위해 필요한 가장 중요한 기능 중 하나이지만, 명확한 기준이 없이 마구잡이로 사용하는 경우 여러가지 문제가 발생할 수 있다.

🔖Git branch를 효과적으로 관리하기 위한 워크플로우가 바로 ==git 브랜치 전략==이며, Flow 전략은 그 중 하나인 모범 사례이다.

```markdown
- Git Flow 개요
	- Main 브랜치
	- Develop 브랜치
	- Supporting 브랜치
		- Feature 브랜치
		- Release 브랜치
		- Hotfix 브랜치
```

- Main 브랜치
🔖출시 가능한 프로덕션 코드를 모아놓은 브랜치이다. 개발 프로세스 전반에 걸쳐 유지된다.

- Develop 브랜치
🔖다음 개발 버전을 관리하는 브랜치이다. 개발 완료 후 Main 브랜치로 merge한다.

- Feature 브랜치 (Naming : Feature/mybranch)
🔖하나의 기능을 개발하기 위한 브랜치, 기능 개발이 완료될 때마다 Develop 브랜치로 merge한다.
❗Fast-Forward로 merge하는 것이 아닌, merge-commit을 생성해야한다. (히스토리를 특정 단위별로 묶기 위함)

- Release 브랜치
🔖소프트웨어 배포를 준비하기 위한 브랜치, Develop 브랜치에서 생성하며, 데이터 및 버그 수정을 위해 사용한다. 
❗완료 시 Main과 Develop 모두에 merge (Main의 경우 태그로 버전 표시)
➡️ 배포 업무와 관련없는 팀원들이 병렬적으로 Feature 브랜치에 이어 개발을 할 수 있다.

- Hotfix 브랜치
🔖이미 배포된 버전에 문제가 발생할 경우 Hotfix를 사용해 해결한 후 Main과 Develop 모두에 merge 한다.
➡️ 마찬가지로 병렬적인 운용을 통해 효율좋은 개발이 가능하다.


### ❗Git Flow 전략이 필요한 개발
✅Git Flow는 버전 명시에 용이하여 지속적인 버전관리가 필요한 모바일 앱, 오픈소스 프레임워크/라이브러리 등에 적합한 전략이다.

🚫하지만, 웹에 경우 항상 최신의 단일 버전만을 사용하고, 하루에 몇번이든 Release될 수 있으므로 다소 적합하지 않다.

---
### Github Flow 브랜치 전략
말그대로 Github에서 활용하기 위한 브랜치 전략이기도 하며 Git Flow에 비교하여 매우 간단하다.

```markdown
- Github Flow 개요
	- Main 브랜치
	- Topic 브랜치
```

- Main 브랜치
🔖항상 Stable(언제 배포하든, 언제 브랜치를 새로 만들든 문제X)한 상태를 유지해야 한다. ❗commit은 빌드되고 테스트를 통과하여야 한다. 

- Topic 브랜치
🔖새로운 기능을 개발하기 위한 용도로 Main으로부터 생성(Feature 브랜치와 동일한 효과)한다.
❗브랜치의 네이밍을 명확하게 하여야 한다.
✅기능이 완성되지 않아도 꾸준히 push하며, PR 등을 적극 활용한 커뮤니케이션을 통해 효율적인 개발을 할 수 있다. 후에 동의를 얻어 Main에 merge하며 자동화된 CI 빌드를 통과하여야 한다.

### ❗Github Flow 전략이 필요한 개발
✅개발팀이 소규모이며, 제품 단일 릴리즈 버전만 존재하며 작은 단위로 신속하고 지속적인 변경사항 병합 및 배포가 이루어질 경우에 적합한 전략이라고 볼 수 있다.