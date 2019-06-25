import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="ゴム印の作成" description="役所や病院などの書類に名前や住所を書く必要があるが、都度書くのが手間である。そこでゴム印を作成した。" />
    <h1 className="title ikukyu__title">ゴム印の作成</h1>

    <div className="ikukyu__image__container">
      <div className="ikukyu__image__inner">
        <a href="https://www.gom-in.com/shop/item/GO-KJ-DS-0531.html" target="_blank" rel="noopener noreferrer">
          <img src="/images/stamp/stamp.png" />
        </a>
      </div>
    </div>

    <p>
      役所や病院などの書類に名前や住所を書く必要があるが、都度書くのが手間である。そこでゴム印を作成した。
    </p>
    <p>
      元々妊婦検診の助成券に名前・住所を記入する必要があるが、14枚の助成券に手書きで記入するのは手間だったため、妻の名前のゴム印を作成していた。
    </p>
    <p>
      子どもの分だけでなく、以下のゴム印を作成した。
    </p>

    <ul>
      <li>
        共通
        <ul>
          <li>住所</li>
        </ul>
      </li>
      <li>
        子ども
        <ul>
          <li>名前</li>
        </ul>
      </li>
      <li>
        妻
        <ul>
          <li>名前</li>
          <li>携帯電話番号</li>
        </ul>
      </li>
      <li>
        夫
        <ul>
          <li>名前</li>
          <li>携帯電話番号</li>
        </ul>
      </li>
    </ul>

    <p>
      ゴム印は<a href="https://www.gom-in.com/shop/item/GO-KJ-DS-0531.html" target="_blank" rel="noopener noreferrer">ハンコヤドットコム</a>で作成した<br />
      （データ入稿 木台ゴム印 5×31mm）
    </p>
  </Layout>
)

export default IndexPage
