// import { defineConfig } from "astro/config";
// import react from "@astrojs/react";
// import tailwind from "@astrojs/tailwind";

// export default defineConfig({
//   integrations: [react(), tailwind()],
//   output: "static", // S3 정적 배포를 위한 설정
// });

import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite"; // 이 부분이 @tailwindcss/vite 인지 확인

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: "static",
});
