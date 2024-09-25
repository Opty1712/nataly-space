import dynamic from "next/dynamic";
import Head from "next/head";

import { ExtendedRecordMap } from "notion-types";
import { useEffect } from "react";
import { NotionRenderer } from "react-notion-x";

const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (m) => m.Collection
  )
);

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

  useEffect(() => {
    const pdf = document.createElement("a");
    pdf.setAttribute("href", "https://nataly.space/Natalia_Manatkina_CV.pdf");
    pdf.setAttribute("target", "_blank");
    pdf.setAttribute(
      "style",
      "padding-left: 5px; transform: translateY(5px); display: inline-block"
    );
    pdf.innerHTML = '<img src="/pdf.svg" width="20" height="20" />';
    document.querySelector(".title").append(pdf);
  }, []);

  return (
    <>
      <Head>
        <title>Наталья, UX/UI дизайнер</title>
        <meta
          name="viewport"
          content="width=device-width,height=device-height,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"
        />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Резюме и портфолио Натальи, UX/UI дизайнер"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAC3hJREFUWEdVl1tsXOd1hb/zn+vcyeGQHGl4E2VKskxJpiiaulkVHBuB4cQJ0BppG7RA04cGQYECRYsUeWqfChRN/FC/FAViP6RwEbRuGhhwVEVXy5JoSZVs3UiJpChSvHM4w7mdM3Nu7X+ouunDADPAP+esf+21115bOfvZuRAgCMF1PUqbm1y7dove3l2Mjo3S0ZGlVq+ztrrCyvICrttEVTV03cAwY4SKkH8HFJToe4jn+7SaTer1GisrK2Q7usjmulA1jWajTrlUJAwDeRLl11fPRwDCUMH1PBoNm+vXb9DW1snY2Bj5fDd1u87q0iILC3O4LZtqaZOW49Cey5HItCNUDSF0VM0AoeIHPk3HwXFslpdXyO/s2QYgBLXKFsWNtW0ASvB/AEBEANyWx82bt1E1i/Hxcbo6O5iefMCT2SnmZ2eoVys8nZ7Gc1vETJ1sro1sLkcyk6U9X0CNt+MF8kIhpmmytrJMb98ustl0BHSzVKa4sUEYSq58lHPXLoSKokQUup6P7wfc/fIBDdvl6Pg4O/Kd/PhHf8ba+gZb1TphALWGTdwyESLE91xyHW00HZuxV/bywqHfouLq2G5AIhFjfW2dwV0DZDMarZZLsdykUrMJgoAg/H8ARPRyqYXZmScsL6+zf98e7lz+FXdvXqdUsSmWauiGhqZrCEJihh7RKkuva4KR4R3o8XbyL7yEo3WgWxaV0hbjR4+TSli0nBJT08/Yqja23yUZOH/94nMGJACfECWq26PJGbpjAWf/49/QVcHs4jquF9CbzxGEIY7toAoFU9Nwmi5WTKOQT5BOx8n39REfOEogrOjcyVdPoqmCUnGRx9MLNJoefhgQBL8BQEGNHixrV63U+PLWBM7Cl0w+fEJnNsXM7DKnDh/k5eF9qIbB0uo69VqNzo4sbtPl4o0bZNoNevu6SWfbUXJDuEYXiqLx8qG9NOpF8EKmZpapO25UgkgD2wwIFEmqFEYImqpw+/xH3P98AttxKWRT1Eo1vvnG6+R3FlB1LWq56CFhgNtyuXpzgkdzj9i3f4CWH2Jl81i9R9CMJLsGu7FrJerVBgtLVVqS/uf/jQAIWUdkDysEQYilCf7zn99l8sEMlhAM9XaRNOIcO3qceDKDbhgRUKEqEWNOo8HFT88x9WSWPfsKOG6AMCzM3AD5vccZ7N+B26xSrto8flrElwKMGAi3GdgGoIKiEPg+G0/uce7fP6RWqdORidGfy7B3cB/9A7vRjDiarkvbAaEQBkEE4Nr1C3w5NcnQ3l7K1QaKYUXtOPzq2/TvO4TiVShu2UzPb0YAts3veQlURb5cIIF4nsuv3n+XubkFEjGL3qxFVzzG4dFX6OgqoGomuqbjum7U12EQ4oc+d+/cZHrhHjsKOyhXqzx9tkYsmSK7o4e+kddIZzLUGi1WitsdIJn7CoAQKoqiIhSFWrnIT//+ryMfaNo2pw8OkEumKezsRTVj6Gac3t4CmtBQJRDPY/bJbGTV1doSRkynrS3DymZJao5cz270TBv5wYMsrdao2QG+fHkgBe+hXLh+KRRCikqJGKhsrvHBT/6WxaUljh18gUJbisGefvp27aJWa7K8/Iyph4/41rffJpFMMzV5PzKbnv5eSqUi1doqhiGw0ikq9Tp6LIYaS+KZXZDqpenpuJEAJYgA5cLEpVDILpAMCIFd2eQX//RjvGaTlY0Kp4b38OKeQS5dv4ue7SJtGrQpLkeOjNCRzfHw4X1m555RVHSsWIzqsweMDPfj4eNGfi9wUWmQxOo5jK/EnnvANgjl/MSlUJUlQKDJw606P/vJ31DZrFB3PN48Osz4kRHWyy3qLUHTbtCZidPVkSEVT7CyuspWvUmpWkeXDumWcRolFjaLFHo70eNxypU62b4XCdv3UHeCqDTbDPjPGRCy/mpkq069zMPPfsnTyUlmZ9c4fmAvr506hpFIgzDxmi0USZ3rYmgG5a0SWsyKzElVVTy7xPzTWf7xo7OcePUAA/tG2Fydp7D/KI5IYbsKXmT5UoT/W4LfABC4DWYmPubJ/Qc8npojUEx++L3fI5luR7MSUbc0tiq4jkPCSlCuloklE8QzafB96lvrLK6s8LMzZxg+9CKd3Xk8LyQ9cJAWJh46XrAtwucauByqqogYEKqgvPiY2c/P0KxUWC/WOHd9kn/4y++TbW/HsBII3aK8XsQ0DdIdOerVMuVimc5CPsoI9WqRJ4vPOPPpJbKdGayYxd4TbxKY7TR9BTc0vrJ8GW4iEUoNyE4QAlYe32bp3hU03WLi+hc8mF7lna8d543jYxELumnRsB3mZ+fIF3ZQKW+RaUuTSKfwvBbVrTIf/Pxf8PEpFDowEzHi3X2keg7giVjEgO9vawCZiC58fvkrACoB8w9vcPfaeSSoeDrNrat36G5r449++xskkilU3UQRKjLAbCepgFbLRqgqbqvJ1laJ9376ATvy7WSySVy/Rd/QEHpbD0qqB1/E8QI5d0IMXdkGoKmSARUlDClvrGGKkOlbv2ZueoY7XzzCUE3+9A/eoTvfRct2cRpNDM/Es1sRa0pSQ00IDNPgzIXLXLn9X+zbM8DC3FPS6RhDw0N07dpPEOvGFSm8UJVxiGTCQrl440ooX65KLxAhQauJXV5lauIsdyY+Z+5ZiSAUnHplhLffOB3FrMAHr+oTNH1UQ6ClDbygheM4vP+vv2RhbY1vfucdvrhynmxasGvvEPHCML7ehq/Is3KSQkd7CuXSzavRMNoeSAGzX1yltfaY4uoi83PLbBTrlGtNiuUGf/KdtxgfO0Lgh6TTbdFElCGm6dRpOHU+/Ohjrt2bwjINdu/uZ6i/jWx7Cj2ZQuRfBj2xbUw+URd059pRPvnsfFgsbkYPU/B5eOUTLLeIvGa9UqNas5mcK7K55fDW+EuMj43S19NPpq0dTdMj5VeqJWZmZ3j3/Q/ZrDZpz8TpSMcYOdCHr4S4WoLbi0068js5+eppYlacwA/Yme9E+eMf/Xl4+fKVaDGQsupP+BwZ7IzYSCZTfHpziqmlMmYQ8t3Xj3B89DCaYUUUplMpbNvGrldZWHrGz89+yvxqmWwqRkwPGRrMM7e6SZk4ixUHPZbg4OgR3vraG4SeT1/PTpT9Xz8dNioV/JaLnAmduseBvgxe02NpYYUNG0qtkHzC4Bunxjg2/AKpZBpfTrPoI5O0x6OZWd77+DJBq8WJl3qpVipRXqi2fO5vODRcMFIp8j0Fvv+H30MEAQP9vSgH3no9LBc3UVquFCaG75AwBYWkiR54LKzVsHWDUKi8tKufH/7u19F1PRKt1IIcyQsL8zxbW+PvfnGRHabCUEcMYehUGw66ZWJku7l67wn1QCGWyTB2eJQ3T53eBrD7tZNhq94Az41uZKowOtiFsCusr20yV3HBiuOGIlqt/uKdtzm5vycKJVI1hArLi/PcejzHe59cpRAXJMMmoSpw5bpnxEgl42xsNig1fcJYgmxnJ7//rW9zbPQwSv/JcZkMCJoOgeejKCH5uMAyDOZLdZlbo1Etd5dogfHhd14d5buvn8DQddxmi5pd5ezEbT64cAMt9HixK0U+G2N5s8HUlheFUMlu2jCw5QpnxejKZfmrH/wApWd8JDJFVa6KzVaU8eSU0jQtcjfJSuQ2YRAlJjnx0okUdqNKOhGnM5fj6eISdduRKY+EqdOeTkSjdrlUI0BEy6qmapHRCdMiFCIKtqOHDqAMnHgllHuevFzgerjNZmSxmmFGIpK3lh8JStZdjux8d57V1RWEUPCf4/NabiRMWaaQAEUGVmnVAfieFwlcTj8znoiCr2qaWHETpffoSCg7QHqztGS5VreaDpYVQ+h6lJSjwSEjm4zRQsXQNDo7cpF3rG6sgSpwGnYE3LDMbU+RF5LnQ4jASRY0HTMWi35rcrf8n5Hy3/Fd8v3+7jzLAAAAAElFTkSuQmCC"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&family=Unbounded:wght@200..900&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Play:wght@400;700&family=Unbounded:wght@200..900&display=swap"
          rel="stylesheet"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@NotionHQ" />
        <meta name="twitter:site" content="@NotionHQ" />
        <meta
          name="twitter:description"
          content="Наталья, продуктовый дизайнер, UX/UI дизайнер"
        />
        <meta name="twitter:url" content="https://www.nataly.space/" />
        <meta
          name="twitter:image"
          content="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd27ca273-fc9d-4b30-91dc-a545ee16d2da%2F09b9c62a-bcc4-4a1b-9c00-8c6adcbb4a32%2Fphoto_2024-03-10_16.07_1.png?table=block&id=20e314d3-415c-46a7-bd43-b2d641b87c6b&cache=v2"
        />
        <meta property="og:site_name" content="Notion" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nataly.space/" />
        <meta
          property="og:title"
          content="Наталья, продуктовый дизайнер, UX/UI дизайнер"
        />
        <meta
          property="og:description"
          content="Наталья, продуктовый дизайнер, UX/UI дизайнер"
        />
        <meta
          property="og:image"
          content="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd27ca273-fc9d-4b30-91dc-a545ee16d2da%2F09b9c62a-bcc4-4a1b-9c00-8c6adcbb4a32%2Fphoto_2024-03-10_16.07_1.png?table=block&id=20e314d3-415c-46a7-bd43-b2d641b87c6b&cache=v2"
        />
        <meta property="og:locale" content="ru_RU" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>

      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        rootPageId={rootPageId}
        components={{ Collection }}
      />
    </>
  );
};
