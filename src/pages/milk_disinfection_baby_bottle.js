import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

const IndexPage = () => (
  <Layout>
    <SEO title="ミルク・消毒・哺乳瓶" description="ミルクあげ、哺乳瓶の消毒、哺乳瓶の本数に関するTIPSを整理した。" />
    <h1 className="title is-spaced ikukyu__title">ミルク・消毒・哺乳瓶</h1>

    <h2 className="subtitle ikukyu__subtitle">ミルクあげ</h2>

    <h3 className="ikukyu__subsubtitle">アイクレオ バランスミルク</h3>
    <div className="ikukyu__image__container">
      <div className="ikukyu__image__inner">
        <OutboundLink href="https://www.amazon.co.jp/%E3%82%A2%E3%82%A4%E3%82%AF%E3%83%AC%E3%82%AA-%E3%80%90Amazon-co-jp-%E9%99%90%E5%AE%9A%E3%80%91%E3%82%A2%E3%82%A4%E3%82%AF%E3%83%AC%E3%82%AA-%E3%83%90%E3%83%A9%E3%83%B3%E3%82%B9%E3%83%9F%E3%83%AB%E3%82%AF800g-%E3%82%B5%E3%83%B3%E3%83%97%E3%83%AB%E4%BB%98/dp/B07P8Y5HQF/ref=as_li_ss_il?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=28E83HNX6DRT5&keywords=%E3%82%A2%E3%82%A4%E3%82%AF%E3%83%AC%E3%82%AA&qid=1561350310&s=gateway&sprefix=%E3%82%A2%E3%82%A4%E3%82%AF%E3%83%AC%E3%82%AA,aps,351&sr=8-2-spons&psc=1&linkCode=li3&tag=mani88-22&linkId=b08a8f79d59274afd3248d36ac5db61b&language=ja_JP" target="_blank">
          <img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07P8Y5HQF&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=mani88-22&language=ja_JP" alt="アイクレオ バランスミルク" />
        </OutboundLink>
      </div>
      <div className="ikukyu__image__amazon_adsystem">
        <img src="https://ir-jp.amazon-adsystem.com/e/ir?t=mani88-22&language=ja_JP&l=li3&o=9&a=B07P8Y5HQF" width="1" height="1" border="0" alt="" />
      </div>
    </div>
    <p>
      ミルクは<OutboundLink href="https://amzn.to/2WBtydp" target="_blank" rel="noopener noreferrer">「アイクレオ バランスミルク」</OutboundLink>をあげている。<br />
      <OutboundLink href="https://amzn.to/2WBtydp" target="_blank" rel="noopener noreferrer">アイクレオ バランスミルク</OutboundLink>は他社製品と比較して成分が母乳に近いということで選んだ。
    </p>
    <p>
      <OutboundLink href="https://amzn.to/2WBtydp" target="_blank" rel="noopener noreferrer">アイクレオ バランスミルク</OutboundLink>を買うと、20mlスプーンが付いてくる。<br />
      最初40mlしか飲まないときは困らないが、100ml超える量を飲むようになると20mlスプーンだと地味に面倒である。<br />
      また20mlスプーンだけだと90mlや110mlを入れられないのが地味に痛い。<br />
      そこで便利なのが「50mlスプーン」だった。<br />
      アイクレオのホームページに<OutboundLink href="https://www.icreo.jp/cp/spoon/" target="_blank" rel="noopener noreferrer">「50mlスプーン申し込み」</OutboundLink>から入手できる。必須アイテムだ。
    </p>

    <h3 className="ikukyu__subsubtitle">70℃に温度設定できる電気ポット</h3>
    <div className="ikukyu__image__container">
      <div className="ikukyu__image__inner">
        <OutboundLink href="https://www.amazon.co.jp/dp/B013HAWKT8/ref=as_li_ss_il?_encoding=UTF8&psc=1&linkCode=li3&tag=mani88-22&linkId=706540853963d7dd0cce15b6b1081680&language=ja_JP" target="_blank">
          <img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B013HAWKT8&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=mani88-22&language=ja_JP" alt="タイガー電気ポット" />
        </OutboundLink>
      </div>
      <div className="ikukyu__image__amazon_adsystem">
        <img src="https://ir-jp.amazon-adsystem.com/e/ir?t=mani88-22&language=ja_JP&l=li3&o=9&a=B013HAWKT8" width="1" height="1" border="0" alt="" />
      </div>
    </div>
    <p>
      <OutboundLink href="https://amzn.to/2K7eLAC" target="_blank" rel="noopener noreferrer">タイガー魔法瓶の70℃に温度設定できる電気ポット</OutboundLink>はマストバイだ。<br />
      ミルクを入れるときのお湯だが、粉ミルクに混入するサカザキ菌もサルモネラ菌を殺菌するため「70℃以上のお湯」で作る必要がある。<br />
      70℃以上であれば90℃のお湯でもよさそうであるが、90℃のお湯だとその後ミルクを40℃まで冷ますのに地味に時間がかかったりする。70℃のお湯でミルクを作れると殺菌もできて、40℃に冷ますのも楽ではかどる。<br />
      （70℃より温度の高いお湯だとビタミンなどの栄養素を壊すという説もあるが、大きく損なわれることはない模様）
    </p>

    <h2 className="subtitle ikukyu__subtitle">哺乳瓶の消毒</h2>
    <div className="ikukyu__image__container">
      <div className="ikukyu__image__inner">
        <OutboundLink href="https://www.amazon.co.jp/%E3%83%94%E3%82%B8%E3%83%A7%E3%83%B3-04023-%E9%9B%BB%E5%AD%90%E3%83%AC%E3%83%B3%E3%82%B8%E3%82%B9%E3%83%81%E3%83%BC%E3%83%A0-%E8%96%AC%E6%B6%B2%E6%B6%88%E6%AF%92%E3%82%B1%E3%83%BC%E3%82%B9-%E3%81%9D%E3%81%AE%E3%81%BE%E3%81%BE%E4%BF%9D%E7%AE%A1/dp/B000FI0HDM/ref=as_li_ss_il?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=2EMA0QUOCWM29&keywords=%E3%83%94%E3%82%B8%E3%83%A7%E3%83%B3+%E9%9B%BB%E5%AD%90%E3%83%AC%E3%83%B3%E3%82%B8%E3%82%B9%E3%83%81%E3%83%BC%E3%83%A0&qid=1561350987&s=gateway&sprefix=%E3%83%94%E3%82%B8%E3%83%A7%E3%83%B3+%E9%9B%BB%E5%AD%90%E3%83%AC%E3%83%B3%E3%82%B8,aps,255&sr=8-2&linkCode=li3&tag=mani88-22&linkId=e17c99780064716f56725e4a9cd897e5&language=ja_JP" target="_blank">
          <img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B000FI0HDM&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=mani88-22&language=ja_JP" alt="ピジョン電子レンジスチーム" />
        </OutboundLink>
      </div>
      <div className="ikukyu__image__amazon_adsystem">
        <img src="https://ir-jp.amazon-adsystem.com/e/ir?t=mani88-22&language=ja_JP&l=li3&o=9&a=B000FI0HDM" width="1" height="1" border="0" alt="" />
      </div>
    </div>
    <p>
      哺乳瓶消毒は<OutboundLink href="https://amzn.to/2WorK2z" target="_blank" rel="noopener noreferrer">「ピジョンの電子レンジスチーム」</OutboundLink>を使用して電子レンジ消毒している。<br />
      哺乳瓶の消毒方法には、電子レンジ消毒・煮沸消毒・消毒液消毒があるが、電子レンジ消毒だけで問題ない。<br />
      どれも消毒効果は同じで、煮沸消毒は都度お湯を沸かさなければならない、消毒液消毒は1時間以上つけおきする必要がある・専用消毒液を買う必要があると手間が大きい。<br />
      電子レンジ消毒なら専用ケースに入れて5分電子レンジをかけるだけだ。
    </p>

    <h2 className="subtitle ikukyu__subtitle">哺乳瓶の本数</h2>
    <div className="ikukyu__image__container">
      <div className="ikukyu__image__inner">
        <OutboundLink href="https://www.amazon.co.jp/gp/product/B01EUUOIE4/ref=as_li_ss_il?ie=UTF8&linkCode=li3&tag=mani88-22&linkId=bcd7a1e4dd140d672f83dea30e90b710&language=ja_JP" target="_blank">
          <img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01EUUOIE4&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=mani88-22&language=ja_JP" alt="ピジョン母乳実感哺乳びん" />
        </OutboundLink>
      </div>
      <div className="ikukyu__image__amazon_adsystem">
        <img src="https://ir-jp.amazon-adsystem.com/e/ir?t=mani88-22&language=ja_JP&l=li3&o=9&a=B01EUUOIE4" width="1" height="1" border="0" alt="" />
      </div>
    </div>
    <p>
      うちは哺乳瓶の本数は4本で運用している。<br />
      最初は<OutboundLink href="https://akachan.omni7.jp/detail/436002000" target="_blank" rel="noopener noreferrer">授乳用品セット</OutboundLink>に付属していた2本を使用していた。しかし2本だと2回に1度消毒する必要がある。これが地味にツラかった。<br />
      特に夜中のミルクあげの後に消毒しないといけなくなると絶望だった。また1本しか残っていない状態で、立て続けに搾乳した母乳とミルクをあげる、といった際にミルクをあげるために急いで哺乳瓶を消毒しなければならずバタつくこともあった。<br />
      哺乳瓶の本数を4本にしたところツラさが軽減した。消毒頻度が3回に1度になり、常に使用できる哺乳瓶が最低2本はある状態にできた。<br />
      使用した哺乳瓶は軽く水洗いして<OutboundLink href="https://www.nitori-net.jp/store/ja/ec/8980356s" target="_blank" rel="noopener noreferrer">ステンレス洗いおけ</OutboundLink>に入れておくようにしている。3本たまったら水をはり、<OutboundLink href="https://amzn.to/2J8shRs" target="_blank" rel="noopener noreferrer">哺乳瓶洗浄剤</OutboundLink>で洗って、<OutboundLink href="https://amzn.to/2WorK2z" target="_blank" rel="noopener noreferrer">電子レンジスチーム</OutboundLink>にかけるというサイクルで運用している。
    </p>

    <nav class="pagination is-small is-centered ikukyu__pagination" role="navigation" aria-label="pagination">
      <Link to="/purchasing_system" className="pagination-previous">
        <span class="icon">
          <FontAwesomeIcon icon={faCaretLeft} />
        </span>
        日常的な買い物体制の整備
      </Link>
      <Link to="/stamp" className="pagination-next">
        ゴム印の作成
        <span class="icon">
          <FontAwesomeIcon icon={faCaretRight} />
        </span>
      </Link>
    </nav>
  </Layout>
)

export default IndexPage
