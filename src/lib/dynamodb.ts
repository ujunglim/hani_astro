// AWS SDK 설정 및 데이터 fetch 함수
import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";

const client = new DynamoDBClient({
  region: "ap-northeast-2", // 실제 사용하시는 리전
  credentials: {
    accessKeyId: import.meta.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.AWS_SECRET_ACCESS_KEY,
  },
});

// export async function getSiteData(siteId: string) {
//   try {
//     const { Item } = await client.send(
//       new GetItemCommand({
//         TableName: "AstroContent", // 실제 DynamoDB 테이블 이름
//         Key: { siteId: { S: siteId } },
//       }),
//     );

//     if (!Item) return null;
//     return unmarshall(Item); // DynamoDB 형식을 일반 JSON으로 변환
//   } catch (error) {
//     console.error("DynamoDB Fetch Error:", error);
//     return null;
//   }
// }

// src/lib/dynamodb.ts

// 실제 연동 로직은 잠시 주석 처리하거나 무시합니다.
export async function getSiteData(siteId: string) {
  // 가짜 DB 데이터 (Mock)
  const mockDb = {
    red: {
      title: "빨간 브랜드 사이트",
      headline: "환영합니다! 레드 테마입니다.",
      mainContent:
        "<p>여기는 <strong>DynamoDB</strong>에서 가져온 마크업이 들어갈 자리입니다.</p>",
      selectedTheme: "red",
    },
    blue: {
      title: "파란 브랜드 사이트",
      headline: "안녕하세요! 블루 테마입니다.",
      mainContent:
        "<p>파란색 테마의 <em>정적 사이트</em>가 성공적으로 생성되었습니다.</p>",
      selectedTheme: "blue",
    },
  };

  // 1초 뒤에 데이터를 반환하도록 하여 실제 네트워크 요청 느낌을 줍니다.
  await new Promise((resolve) => setTimeout(resolve, 500));

  return mockDb[siteId as keyof typeof mockDb] || mockDb["red"];
}
