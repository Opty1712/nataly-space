import { ExtendedRecordMap } from "notion-types";
import { getAllPagesInSpace } from "notion-utils";
import { defaultMapPageUrl } from "react-notion-x";

import { NotionPage } from "../components/NotionPage";
import { rootNotionPageId } from "../lib/config";
import notion from "../lib/notion";

const isDev = process.env.NODE_ENV === "development" || !process.env.NODE_ENV;

export const getStaticProps = async (context) => {
  const pageId = (context.params.pageId as string) || rootNotionPageId;
  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

export async function getStaticPaths() {
  if (isDev) {
    return {
      paths: [],
      fallback: true,
    };
  }

  const mapPageUrl = defaultMapPageUrl(rootNotionPageId);

  // This crawls all public pages starting from the given root page in order
  // for next.js to pre-generate all pages via static site generation (SSG).
  // This is a useful optimization but not necessary; you could just as easily
  // set paths to an empty array to not pre-generate any pages at build time.
  const pages = await getAllPagesInSpace(
    rootNotionPageId,
    undefined,
    notion.getPage,
    {
      traverseCollections: false,
    }
  );

  const paths = Object.keys(pages)
    .map((pageId) => mapPageUrl(pageId))
    .filter((path) => path && path !== "/");

  return {
    paths,
    fallback: true,
  };
}

export default function Page({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return <NotionPage recordMap={recordMap} rootPageId={rootNotionPageId} />;
}
