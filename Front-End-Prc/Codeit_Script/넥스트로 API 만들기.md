## 넥스트로 리퀘스트를 어떻게 조작할까?

🔖 경로에 해당하는 리퀘스트를 처리하려면, 페이지 라우팅과 비슷한 방식으로 `api/경로.js`와 같은 파일을 만들고 `default export`한다.

```ts
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  res.status(200).json({ message: "Hello from Next.js!" });
}
```

## 리퀘스트 객체는 어떤게 있어?

🔖 리퀘스트 객체 종류

| 프로퍼티 | 타입     | 설명                                                            |
| -------- | -------- | --------------------------------------------------------------- |
| method   | 문자열   | 리퀘스트로 들어온 HTTP 메소드 값                                |
| query    | 객체     | 쿼리 스트링이나 Next.js에서 사용하는 Params 값이 들어 있는 객체 |
| body     | 자유로움 | 리퀘스트의 바디 값                                              |
| cookie   | 객체     | 리퀘스트의 쿠키가 키/밸류로 들어 있는 객체                      |

<br>

🔖 리스폰스 객체
| 프로퍼티 | 타입 | 설명 |
| -------- | ---- | ------------------------------------- |
| status() | 함수 | 리스폰스로 보낼 HTTP 상태 코드를 지정 |
| send() | 함수 | 리스폰스로 보낼 바디를 전달 |

## 잘 모르겠다~ 예시 하나만 들어봐

🏷️ 예를 들어, api/short-links 경로로 리퀘스트를 보내고 리스폰스를 받고 싶다면!

```ts
// pages/api/short-links.js
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  switch (req.method) {
    case "POST":
      res.status(201).send(req.body);
      break;

    case "GET":
      res.send([
        {
          id: "abc",
          title: "제목~",
          url: "http://example.com",
        },
      ]);
      break;

    default:
      res.status(404).send();
      break;
  }
}
```

## 넥스트와 MongoDB: 초기 세팅

🔖 우선 mongoDB Atlas를 통해 클러스터를 생성하고, 라이브러리 설치 및 .env 파일 설정을 해주어야한다.

```bash
npm install mongoose mongoDB
```

```markdown
MONGODB_URI=mongodb+srv://<id>:<password>@<clusterName>.kmzyqrn.mongodb.net/?retryWrites=true&w=majority

NEXT_PUBLIC_BASE_URL=http://localhost:3000 (Next 서버의 호스트넘버)
```

## 넥스트와 MongoDB: 커넥터 연결

🔖 그 후, `mongoose.connect()` 함수를 이용해 커넥터를 생성하고 사용

```js
// db/dbConnect.js
// 무의미한 다수의 캐싱 방지를 위해 캐싱 기법 사용
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
```

```js
// pages/api/short-links.js
// 연결이 잘 되었는지 확인하고 싶은 경우
import mongoose from "mongoose";
// ...
await dbConnect();
console.log(mongoose.connection.readyState);
```

## 넥스트와 MongoDB: 모델 생성

🔖 `mongoos.Schema()`를 사용해 스키마 생성 및 `mongoose.model()`을 사용해 모델 생성

```js
// db/models/ShortLink.js
import mongoose from "mongoose";

const shortLinkSchema = new mongoose.Schema(
  {
    title: { type: String, default: "" },
    url: { type: String, default: "" },
    shortUrl: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);
// import 시마다 모델 생성 방지를 위해 or 사용
const ShortLink = mongoose.models["ShortLink"] || mongoose.model("ShortLink", shortLinkSchema);

export default ShortLink;
```

## 넥스트와 MongoDB: 모델 다루기

🔖 method인 `POST`, `GET`, `PATCH`, `DELETE`를 사용해 모델을 컨트롤한다.

<br>

🏷️ 생성: `Model.create()`

```js
// case 'POST'
const newQRCode = await QRCode.create(req.body);
res.status(201).send(newQRCode);
```

<br>

🏷️ 여러개 조회: `Model.find()`

```js
// case 'GET'
const shortLinks = await ShortLink.find();
res.send(shortLinks);
```

<br>

🏷️ 아이디로 하나만 조회: `Model.findById()`

```js
// pages/api/short-links/[id].js
// case 'GET'
const { id } = req.query;
const qrCode = await QRCode.findById(id);
res.send(qrCode);
```

<br>

🏷️ 아이디로 업데이트: `Model.findByIdAndUpdate()`

```js
// case 'PATCH'
const { id } = req.query;
const updatedShortLink = await ShortLink.findByIdAndUpdate(id, req.body, {
  new: true,
});
res.send(updatedShortLink);
```

<br>

🏷️ 아이디로 삭제하기: `Model.findByIdAndDelete()`

```js
// case 'DELETE'
const deletedShortLink = await ShortLink.findOneAndDelete(id);
res.status(204).send(deletedShortLink);
```

<br>

🏷️ 그 외, 눈여겨 볼만한 함수

```js
// 조건으로 하나만 조회
const shortLink = await ShortLink.findOne({ shortUrl: "c0d317" });

// 조건으로 업데이트하기
await ShortLink.updateOne({ _id: 'n3x7j5' }, { ... }); // 업데이트만 하고 업데이트 된 값을 리턴하지는 않음

const updatedShortLink = await ShortLink.findOneAndUpdate({ _id: 'n3x7j5' }, { ... });

// 조건으로 삭제하기
await ShortLink.deleteOne({ _id: 'n3x7j5' }, { ... }); // 삭제만 하고  기존 값을 리턴하지는 않음

const deletedShortLink = await ShortLink.findOneAndDelete({ _id: 'n3x7j5' }, { ... });


```
