import Head from "next/head";

import { ExtendedRecordMap } from "notion-types";
import { getPageTitle } from "notion-utils";
import { NotionRenderer } from "react-notion-x";

export const NotionPage = ({
  recordMap,
  rootPageId,
}: {
  recordMap: ExtendedRecordMap;
  rootPageId?: string;
}) => {
  if (!recordMap) {
    return null;
  }

  const title = getPageTitle(recordMap);

  console.log(JSON.stringify(recordMap, null, 2));

  return (
    <>
      <Head>
        <title>Наталья Манаткина, продуктовый дизайнер</title>
        <meta
          name="viewport"
          content="width=device-width,height=device-height,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"
        />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Резюме и портфолио Натальи, продуктовый дизайнер"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="data:image/png;base64,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"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@NotionHQ" />
        <meta name="twitter:site" content="@NotionHQ" />
        <meta
          name="twitter:description"
          content="Резюме и портфолио Натальи, продуктовый дизайнер"
        />
        <meta name="twitter:url" content="https://www.nataly.space/" />
        <meta
          name="twitter:image"
          content="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F42412933-6e94-4927-9a45-21d2aeef7357%2Fc20368ef-fef2-4825-be28-4038ae0752dc%2Fphoto_2024-03-09_11.00_1.png?table=block&id=072af006-b96c-456e-8c32-e72d22489735&cache=v2"
        />
        <meta property="og:site_name" content="Notion" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nataly.space/" />
        <meta
          property="og:title"
          content="Наталья Манаткина, продуктовый дизайнер"
        />
        <meta
          property="og:description"
          content="Резюме и портфолио Натальи, продуктовый дизайнер"
        />
        <meta
          property="og:image"
          content="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F42412933-6e94-4927-9a45-21d2aeef7357%2Fc20368ef-fef2-4825-be28-4038ae0752dc%2Fphoto_2024-03-09_11.00_1.png?table=block&id=072af006-b96c-456e-8c32-e72d22489735&cache=v2"
        />
        <meta property="og:locale" content="ru_RU" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>

      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        rootPageId={rootPageId}
      />
    </>
  );
};
