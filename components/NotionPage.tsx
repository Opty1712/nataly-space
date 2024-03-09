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
