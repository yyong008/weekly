import { defineConfig } from "vitepress";
import { years2025 } from "./2025";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Weekly",
  description: "Mg Weekly",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "2025", link: "/2025/main" },
      { text: "2024", link: "/2024/main" },
      { text: "2023", link: "/2023/index" },
      { text: "2022", link: "/2022" },
    ],

    sidebar: {
      "/2025/": years2025,
      "/2023/": [
        {
          text: "2023年",
          items: [
            {
              text: "2023-07",
              items: [
                { text: "第一周07/03", link: "/2023/2023-07-03/index" },
                { text: "第二周07/10", link: "/2023/2023-07-10/index" },
                { text: "第三周07/17", link: "/2023/2023-07-17/index" },
                { text: "第四周07/24", link: "/2023/2023-07-24/index" },
              ],
            },
            {
              text: "2023-08",
              items: [
                { text: "第一周07/31", link: "/2023/2023-07-31/index" },
                { text: "第二周08/07", link: "/2023/2023-08-07/index" },
                { text: "第三周08/14", link: "/2023/2023-08-14/index" },
                { text: "第四周08/21", link: "/2023/2023-08-21/index" },
                { text: "第四周08/28", link: "/2023/2023-08-28/index" },
              ],
            },
            {
              text: "2023-09",
              items: [
                { text: "第一周09/04", link: "/2023/2023-09-04/index" },
                { text: "第二周09/11", link: "/2023/2023-09-11/index" },
                { text: "第三周09/18", link: "/2023/2023-09-18/index" },
                { text: "第四周09/25", link: "/2023/2023-09-25/index" },
              ],
            },
            {
              text: "2023-10",
              items: [
                { text: "第一周10/02", link: "/2023/2023-10-02/index" },
                { text: "第二周10/09", link: "/2023/2023-10-09/index" },
                { text: "第三周10/16", link: "/2023/2023-10-16/index" },
                { text: "第四周10/23", link: "/2023/2023-10-23/index" },
                { text: "第四周10/30", link: "/2023/2023-10-30/index" },
              ],
            },
            {
              text: "2023-11",
              items: [
                { text: "第一周11/06", link: "/2023/2023-11-06/index" },
                { text: "第二周11/13", link: "/2023/2023-11-13/index" },
                { text: "第三周11/20", link: "/2023/2023-11-20/index" },
                { text: "第四周11/27", link: "/2023/2023-11-27/index" },
              ],
            },
            {
              text: "2023-12",
              items: [
                { text: "第一周12/04", link: "/2023/2023-12-04/index" },
                { text: "第二周12/11", link: "/2023/2023-12-11/index" },
                { text: "第三周12/18", link: "/2023/2023-12-18/index" },
                { text: "第四周12/25", link: "/2023/2023-12-25/index" },
              ],
            },
          ],
        },
      ],
      "/2024/": [
        { text: "简介", link: "/2024/main" },
        {
          text: "8月(52周)",
          items: [
            { text: "12-18(33周)", link: "/2024/08/12-18/main" },
            { text: "19-25(34周)", link: "/2024/08/19-25/main" },
          ],
        },
        {
          text: "12月",
          items: [{ text: "23-29(52周)", link: "/2024/12/23-29/main" }],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/yyong008/weekly" },
    ],
  },
});
