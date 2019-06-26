import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

const IndexPage = () => (
  <Layout>
    <SEO title="日常的な買い物体制の整備" description="子どもが生まれると日常の買い物で外に出るのも大変になる。そこで「外出しない買い物体制」を整備した。" />
    <h1 className="title is-spaced ikukyu__title">日常的な買い物体制の整備</h1>
    <p>
      子どもが生まれると日常の買い物で外に出るのも大変になる。<br />
      そこで「外出しない買い物体制」を整備した。<br />
      使ったことがないサービスについては子どもが生まれる前に試してみた。<br />
      子どもが生まれると慌ただしく冷静な判断ができず、気づいたら費用対効果の悪いサービスを選んでしまう可能性があるので、生まれる前に試してみて正解だった。
    </p>

    <h2 className="subtitle ikukyu__subtitle">日用品</h2>
    <h3 className="ikukyu__subsubtitle">
      <OutboundLink href="https://www.amazon.co.jp/" target="_blank" rel="noopener noreferrer">Amazon</OutboundLink>
    </h3>
    <div class="columns is-mobile">
      <div class="column">
        <img src="/images/purchasing_system/amazon1.png" className="ikukyu__screen_capture" alt="Amazonトップページ画面" />
      </div>
      <div class="column">
      <img src="/images/purchasing_system/amazon2.png" className="ikukyu__screen_capture" alt="Amazon商品ページ画面" />
      </div>
    </div>
    <p>基本的にはAmazonを使用</p>

    <h3 className="ikukyu__subsubtitle">
      <OutboundLink href="https://akachan.omni7.jp/top" target="_blank" rel="noopener noreferrer">アカチャンホンポネット通販</OutboundLink>
    </h3>
    <div class="columns is-mobile">
      <div class="column">
        <img src="/images/purchasing_system/akahon1.png" className="ikukyu__screen_capture" alt="アカチャンホンポネット通販トップページ画面" />
      </div>
      <div class="column">
      <img src="/images/purchasing_system/akahon2.png" className="ikukyu__screen_capture" alt="アカチャンホンポネット通販商品ページ画面" />
      </div>
    </div>
    <p>おしりふきやガーゼハンカチなどアカチャンホンポのオリジナル商品の購入に使用。おむつまとめ買いがAmazonより安い。購入金額が5,400円(税込)以上でないと送料が必要。</p>

    <h3 className="ikukyu__subsubtitle">
      <OutboundLink href="https://www.yodobashi.com/" target="_blank" rel="noopener noreferrer">ヨドバシ.com</OutboundLink>
    </h3>
    <div class="columns is-mobile">
      <div class="column">
        <img src="/images/purchasing_system/yodobashi1.png" className="ikukyu__screen_capture" alt="ヨドバシ.comトップページ画面" />
      </div>
      <div class="column">
      <img src="/images/purchasing_system/yodobashi2.png" className="ikukyu__screen_capture" alt="ヨドバシ.com商品ページ画面" />
      </div>
    </div>
    <p>即日欲しい場合に利用。送料無料で当日配送してくれる。</p>

    <h2 className="subtitle ikukyu__subtitle">食料品</h2>
    <h3 className="ikukyu__subsubtitle">
      <OutboundLink href="https://www.iy-net.jp/" target="_blank" rel="noopener noreferrer">イトーヨーカドーネットスーパー</OutboundLink>
    </h3>
    <div class="columns is-mobile">
      <div class="column">
        <img src="/images/purchasing_system/iynet1.png" className="ikukyu__screen_capture" alt="イトーヨーカドーネットスーパートップページ画面" />
      </div>
      <div class="column">
      <img src="/images/purchasing_system/iynet2.png" className="ikukyu__screen_capture" alt="イトーヨーカドーネットスーパー商品ページ画面" />
      </div>
    </div>
    <p>
      早めの時間に注文すれば即日配達してくれて便利。<br />
      イトーヨーカドーのネットスーパーは<OutboundLink href="https://www.iy-net.jp/nssp/shopping/commoditydetails.do?shopcd=00210&productId=4908326110013" target="_blank" rel="noopener noreferrer">「冷凍カットベーコン」</OutboundLink>が販売している。掴んで入れるだけで料理に肉を加えることができる。
    </p>
    <p>
      生協も検討したが、週1回しか注文できない、配達日時が指定できないのが不便なため見送った。<br />
      離乳食や保育園・学校用品の購入には良さそうなので時期を改めて検討したい。
    </p>

    <nav class="pagination is-small is-centered ikukyu__pagination" role="navigation" aria-label="pagination">
      <Link to="/shopping_list" className="pagination-previous">
        <span class="icon">
          <FontAwesomeIcon icon={faCaretLeft} />
        </span>
        買い物リストの作成
      </Link>
      <Link to="/milk_disinfection_baby_bottle" className="pagination-next">
        ミルク・消毒・哺乳瓶
        <span class="icon">
          <FontAwesomeIcon icon={faCaretRight} />
        </span>
      </Link>
    </nav>
  </Layout>
)

export default IndexPage
