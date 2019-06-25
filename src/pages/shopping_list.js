import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileExcel } from '@fortawesome/free-solid-svg-icons'
import { faFileCsv } from '@fortawesome/free-solid-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="買い物リストの作成" description="買い物リストを作成した。" />
    <h1 className="title ikukyu__title">買い物リストの作成</h1>
    <p>買い物リストを作成した。</p>
    <img src="/images/shopping_list/shopping_list.svg" alt="買い物リスト" />

    <p>
      <a href="https://docs.google.com/spreadsheets/d/1t5BJs8pSsm5ygetC0vhUYwaq4SDlsdy5-8H7VZ7WTW4/edit#gid=0" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faExternalLinkAlt} className="ikukyu__fa__margin-right" />
        Googleスプレッドシートで開く
      </a>
    </p>

    <div class="field has-addons">
      <p class="control">
        <a href="/files/shopping_list/shopping_list.xlsx" class="button is-link is-outlined">
          <span class="icon is-small">
            <FontAwesomeIcon icon={faFileExcel} />
          </span>
          <span>Excel版</span>
        </a>
      </p>
      <p class="control">
        <a href="/files/shopping_list/shopping_list.csv" class="button is-link is-outlined">
          <span class="icon is-small">
            <FontAwesomeIcon icon={faFileCsv} />
          </span>
          <span>CSV版</span>
        </a>
      </p>
      <p class="control">
        <a href="/files/shopping_list/shopping_list.pdf" class="button is-link is-outlined">
          <span class="icon is-small">
            <FontAwesomeIcon icon={faFilePdf} />
          </span>
          <span>PDF版</span>
        </a>
      </p>
    </div>

    <h2 className="subtitle ikukyu__subtitle">おむつ</h2>
    <table className="ikukyu__shopping_list__table">
      <tr><th>品名</th><th>数</th><th className="ikukyu__td__hidden">入手場所</th><th>メモ</th></tr>
      <tr><td><a href="https://amzn.to/2XxpEyT" target="_blank" rel="noopener noreferrer">紙おむつ</a></td><td>3パック</td><td className="ikukyu__td__hidden">Amazon</td><td className="ikukyu__shopping_list__table__memo">テープがとめやすい。おしっこお知らせラインがわかりやすい</td></tr>
      <tr><td><a href="https://amzn.to/2K2FIFJ" target="_blank" rel="noopener noreferrer">おむつ用ゴミ箱</a></td><td>1</td><td className="ikukyu__td__hidden">Amazon</td><td className="ikukyu__shopping_list__table__memo">スチール製でにおい移りしない。容量30L</td></tr>
      <tr><td><a href="https://akachan.omni7.jp/detail/538003300" target="_blank" rel="noopener noreferrer">おしりふき</a></td><td>1箱</td><td className="ikukyu__td__hidden">アカチャンホンポ</td><td className="ikukyu__shopping_list__table__memo">厚手のもの</td></tr>
      <tr><td><a href="https://akachan.omni7.jp/detail/486003700" target="_blank" rel="noopener noreferrer">おしりふきのふた</a></td><td>2</td><td className="ikukyu__td__hidden">アカチャンホンポ</td><td className="ikukyu__shopping_list__table__memo">ワンプッシュオープンタイプのおしりふき用フタ</td></tr>
    </table>

    <h2 className="subtitle ikukyu__subtitle">授乳</h2>
    <table className="ikukyu__shopping_list__table">
      <tr><th>品名</th><th>数</th><th className="ikukyu__td__hidden">入手場所</th><th>メモ</th></tr>
      <tr><td><a href="https://amzn.to/2XwgkLj" target="_blank" rel="noopener noreferrer">粉ミルク</a></td><td>1</td><td className="ikukyu__td__hidden">Amazon</td><td className="ikukyu__shopping_list__table__memo">母乳に成分が近い</td></tr>
      <tr><td><a href="https://amzn.to/2WBSSQM" target="_blank" rel="noopener noreferrer">液体ミルク</a></td><td>1</td><td className="ikukyu__td__hidden">Amazon</td><td className="ikukyu__shopping_list__table__memo">非常用</td></tr>
      <tr><td><a href="https://amzn.to/2K7eLAC" target="_blank" rel="noopener noreferrer">お湯ポット</a></td><td>1</td><td className="ikukyu__td__hidden">Amazon</td><td className="ikukyu__shopping_list__table__memo">70度設定できる。容量3L</td></tr>
      <tr><td><a href="https://akachan.omni7.jp/detail/436002000" target="_blank" rel="noopener noreferrer">授乳用品セット</a></td><td>1</td><td className="ikukyu__td__hidden">アカチャンホンポ</td><td></td></tr>
      <tr><td><a href="https://amzn.to/2WZ9uBm" target="_blank" rel="noopener noreferrer">哺乳びん</a></td><td>2</td><td className="ikukyu__td__hidden">Amazon</td><td className="ikukyu__shopping_list__table__memo">授乳用品セットだけだと足りない</td></tr>
      <tr><td><a href="https://amzn.to/2XwIgPj" target="_blank" rel="noopener noreferrer">乳首SSサイズ</a></td><td>3</td><td className="ikukyu__td__hidden">Amazon</td><td></td></tr>
      <tr><td><a href="https://amzn.to/2XxZjk6" target="_blank" rel="noopener noreferrer">電動搾乳機</a></td><td>1</td><td className="ikukyu__td__hidden">Amazon</td><td></td></tr>
      <tr><td><a href="https://amzn.to/2WRvX34" target="_blank" rel="noopener noreferrer">母乳冷凍パック</a></td><td>1箱</td><td className="ikukyu__td__hidden">Amazon</td><td></td></tr>
      <tr><td><a href="https://amzn.to/2Xx7Ofj" target="_blank" rel="noopener noreferrer">母乳パッド</a></td><td>1箱</td><td className="ikukyu__td__hidden">Amazon</td><td></td></tr>
      <tr><td><a href="https://amzn.to/2WorK2z" target="_blank" rel="noopener noreferrer">電子レンジ消毒ケース</a></td><td>1</td><td className="ikukyu__td__hidden">Amazon</td><td className="ikukyu__shopping_list__table__memo">電動搾乳機のパーツ消毒用</td></tr>
      <tr><td><a href="https://www.nitori-net.jp/store/ja/ec/8987552" target="_blank" rel="noopener noreferrer">哺乳瓶干し</a></td><td>1</td><td className="ikukyu__td__hidden">ニトリ</td><td className="ikukyu__shopping_list__table__memo">グラススタンドを哺乳瓶干しとして使用</td></tr>
      <tr><td><a href="https://www.nitori-net.jp/store/ja/ec/8980356s" target="_blank" rel="noopener noreferrer">哺乳瓶おけ</a></td><td>1</td><td className="ikukyu__td__hidden">ニトリ</td><td className="ikukyu__shopping_list__table__memo">ステンレス洗いおけ</td></tr>
      <tr><td><a href="https://www.nitori-net.jp/store/ja/ec/8977433" target="_blank" rel="noopener noreferrer">シリコン製トング</a></td><td>1</td><td className="ikukyu__td__hidden">ニトリ</td><td className="ikukyu__shopping_list__table__memo">消毒後の哺乳瓶パーツや電動搾乳機パーツ用</td></tr>
    </table>

    <h2 className="subtitle ikukyu__subtitle">部屋</h2>
    <table className="ikukyu__shopping_list__table">
      <tr><th>品名</th><th>数</th><th className="ikukyu__td__hidden">入手場所</th><th>メモ</th></tr>
      <tr><td><a href="https://amzn.to/2WNnsWR" target="_blank" rel="noopener noreferrer">ジョイントマット</a></td><td>1セット</td><td className="ikukyu__td__hidden">Amazon</td><td className="ikukyu__shopping_list__table__memo">クッション・防音用</td></tr>
      <tr><td><a href="https://takaokaya.shop-pro.jp/?pid=67260042" target="_blank" rel="noopener noreferrer">せんべい座布団</a></td><td>1</td><td className="ikukyu__td__hidden">洛中高岡屋</td><td className="ikukyu__shopping_list__table__memo">日常の居場所用</td></tr>
      <tr><td><a href="https://amzn.to/2K4unoC" target="_blank" rel="noopener noreferrer">トッポンチーノ</a></td><td>1</td><td className="ikukyu__td__hidden">Amazon</td><td className="ikukyu__shopping_list__table__memo">抱っこ布団。首のすわっていない赤ちゃんの抱っこが楽。背中スイッチ対策</td></tr>
      <tr><td><a href="https://www.nitori-net.jp/store/ja/ec/8522226s" target="_blank" rel="noopener noreferrer">バランスボール</a></td><td>1</td><td className="ikukyu__td__hidden">ニトリ</td><td className="ikukyu__shopping_list__table__memo">あやすために使用</td></tr>
      <tr><td><a href="https://www.muji.net/store/cmdty/detail/4549738749479" target="_blank" rel="noopener noreferrer">やわらかポリエチレンケース・中</a></td><td>2</td><td className="ikukyu__td__hidden">無印良品</td><td className="ikukyu__shopping_list__table__memo">おむつ収納、バスタオル収納に使用</td></tr>
      <tr><td><a href="https://www.muji.net/store/cmdty/detail/4549738749509" target="_blank" rel="noopener noreferrer">やわらかポリエチレンケース・ハーフ・中</a></td><td>8</td><td className="ikukyu__td__hidden">無印良品</td><td className="ikukyu__shopping_list__table__memo">服、ベビーケア用品収納に使用</td></tr>
    </table>

    <h2 className="subtitle ikukyu__subtitle">沐浴</h2>
    <table className="ikukyu__shopping_list__table">
      <tr><th>品名</th><th>数</th><th className="ikukyu__td__hidden">入手場所</th><th>メモ</th></tr>
      <tr><td><a href="https://akachan.omni7.jp/detail/537006200" target="_blank" rel="noopener noreferrer">ベビーバス</a></td><td>1</td><td className="ikukyu__td__hidden">アカチャンホンポ</td><td></td></tr>
      <tr><td><a href="https://www.nitori-net.jp/store/ja/ec/8512089s" target="_blank" rel="noopener noreferrer">手おけ</a></td><td>1</td><td className="ikukyu__td__hidden">ニトリ</td><td></td></tr>
      <tr><td><a href="https://amzn.to/2Xx0CQn" target="_blank" rel="noopener noreferrer">ベビーソープ</a></td><td>1</td><td className="ikukyu__td__hidden">Amazon</td><td className="ikukyu__shopping_list__table__memo">ポンプ泡タイプ</td></tr>
      <tr><td><a href="https://akachan.omni7.jp/detail/365006600" target="_blank" rel="noopener noreferrer">バスタオル</a></td><td>5</td><td className="ikukyu__td__hidden">アカチャンホンポ</td><td></td></tr>
    </table>

    <h2 className="subtitle ikukyu__subtitle">寝具</h2>
    <table className="ikukyu__shopping_list__table">
      <tr><th>品名</th><th>数</th><th className="ikukyu__td__hidden">入手場所</th><th>メモ</th></tr>
      <tr><td><a href="https://www.kasite.net/rent/cart/Detail.do?code=b01-000010&category=010100" target="_blank" rel="noopener noreferrer">ベビーベッド</a></td><td>1</td><td className="ikukyu__td__hidden">ダスキンレントオール</td><td className="ikukyu__shopping_list__table__memo">レンタル。レギュラーサイズ・立ちベッド・ツーオープン</td></tr>
      <tr><td><a href="https://amzn.to/2I3bMXQ" target="_blank" rel="noopener noreferrer">布団セット</a></td><td>1</td><td className="ikukyu__td__hidden">Amazon</td><td className="ikukyu__shopping_list__table__memo">レギュラーサイズ。8点セット</td></tr>
      <tr><td><a href="https://akachan.omni7.jp/detail/365005900" target="_blank" rel="noopener noreferrer">防水シーツ</a></td><td>3</td><td className="ikukyu__td__hidden">アカチャンホンポ</td><td></td></tr>
      <tr><td><a href="https://amzn.to/2XtpvMG" target="_blank" rel="noopener noreferrer">ナイトライト</a></td><td>1</td><td className="ikukyu__td__hidden">Amazon</td><td></td></tr>
    </table>

    <h2 className="subtitle ikukyu__subtitle">ベビーケア</h2>
    <table className="ikukyu__shopping_list__table">
      <tr><th>品名</th><th>数</th><th className="ikukyu__td__hidden">入手場所</th><th>メモ</th></tr>
      <tr><td><a href="https://akachan.omni7.jp/detail/456003000" target="_blank" rel="noopener noreferrer">ガーゼハンカチ</a></td><td>20</td><td className="ikukyu__td__hidden">アカチャンホンポ</td><td></td></tr>
      <tr><td><a href="https://amzn.to/2GiOjlQ" target="_blank" rel="noopener noreferrer">保湿用ローション</a></td><td>1</td><td className="ikukyu__td__hidden">Amazon</td><td></td></tr>
      <tr><td><a href="https://amzn.to/2I39Hx0" target="_blank" rel="noopener noreferrer">体温計</a></td><td>1</td><td className="ikukyu__td__hidden">Amazon</td><td className="ikukyu__shopping_list__table__memo">おでこにかざして0.7秒で測定できる</td></tr>
      <tr><td><a href="https://amzn.to/2GhAyUf" target="_blank" rel="noopener noreferrer">乳児用爪切りハサミ</a></td><td>1</td><td className="ikukyu__td__hidden">Amazon</td><td></td></tr>
      <tr><td><a href="https://amzn.to/2K3qdx4" target="_blank" rel="noopener noreferrer">電動爪ヤスリ</a></td><td>1</td><td className="ikukyu__td__hidden">Amazon</td><td></td></tr>
      <tr><td><a href="https://amzn.to/2WjfiB3" target="_blank" rel="noopener noreferrer">電動鼻水吸入器</a></td><td>1</td><td className="ikukyu__td__hidden">Amazon</td><td></td></tr>
    </table>

    <h2 className="subtitle ikukyu__subtitle">服</h2>
    <table className="ikukyu__shopping_list__table">
      <tr><th>品名</th><th>数</th><th className="ikukyu__td__hidden">入手場所</th><th>メモ</th></tr>
      <tr><td>ベビー服</td><td>5</td><td className="ikukyu__td__hidden">アカチャンホンポ、西松屋</td><td className="ikukyu__shopping_list__table__memo">店舗で購入</td></tr>
      <tr><td>短肌着</td><td>5</td><td className="ikukyu__td__hidden">アカチャンホンポ、西松屋</td><td className="ikukyu__shopping_list__table__memo">店舗で購入</td></tr>
      <tr><td>長肌着</td><td>2</td><td className="ikukyu__td__hidden">アカチャンホンポ、西松屋</td><td className="ikukyu__shopping_list__table__memo">店舗で購入</td></tr>
      <tr><td><a href="https://amzn.to/2WXYtjq" target="_blank" rel="noopener noreferrer">おくるみ</a></td><td>5</td><td className="ikukyu__td__hidden">Amazon</td><td></td></tr>
      <tr><td><a href="https://originalprint.jp/baby/%E3%83%99%E3%83%93%E3%83%BC%E3%83%93%E3%83%96" target="_blank" rel="noopener noreferrer">スタイ</a></td><td>1</td><td className="ikukyu__td__hidden">オリジナルプリント.jp</td><td className="ikukyu__shopping_list__table__memo">オリジナルスタイを作成</td></tr>
    </table>

    <h2 className="subtitle ikukyu__subtitle">おでかけ</h2>
    <table className="ikukyu__shopping_list__table">
      <tr><th>品名</th><th>数</th><th className="ikukyu__td__hidden">入手場所</th><th>メモ</th></tr>
      <tr><td><a href="https://pigeon-htravel.com/pattan/" target="_blank" rel="noopener noreferrer">ベビーカー</a></td><td>1</td><td>知人から譲り受け</td><td></td></tr>
      <tr><td><a href="https://akachan.omni7.jp/detail/308002600" target="_blank" rel="noopener noreferrer">スリング（エルゴ）</a></td><td>1</td><td className="ikukyu__td__hidden">アカチャンホンポ</td><td></td></tr>
    </table>

    <h2 className="subtitle ikukyu__subtitle">時短</h2>
    <table className="ikukyu__shopping_list__table">
      <tr><th>品名</th><th>数</th><th className="ikukyu__td__hidden">入手場所</th><th>メモ</th></tr>
      <tr><td><a href="https://amzn.to/2WpNlHG" target="_blank" rel="noopener noreferrer">ドラム式洗濯乾燥機</a></td><td>1</td><td className="ikukyu__td__hidden">Amazon</td><td>洗濯容量11kg</td></tr>
      <tr><td><a href="https://amzn.to/2WtcCkh" target="_blank" rel="noopener noreferrer">食洗機</a></td><td>1</td><td className="ikukyu__td__hidden">Amazon</td><td>水道工事不要</td></tr>
      <tr><td><a href="https://amzn.to/31mOzXZ" target="_blank" rel="noopener noreferrer">食洗機専用洗剤</a></td><td>1</td><td className="ikukyu__td__hidden">Amazon</td><td></td></tr>
      <tr><td><a href="https://amzn.to/2WQyBpT" target="_blank" rel="noopener noreferrer">コードレス掃除機</a></td><td>1</td><td className="ikukyu__td__hidden">Amazon</td><td>紙パック式</td></tr>
      <tr><td><a href="https://www.gom-in.com/shop/item/GO-KJ-DS-0531.html" target="_blank" rel="noopener noreferrer">名前ゴム印</a></td><td>1</td><td className="ikukyu__td__hidden">ハンコヤドットコム</td><td></td></tr>
    </table>

    <h2 className="subtitle ikukyu__appendix_title">参考資料</h2>
    <ul>
      <li>
        <a href="https://chirashi.akachan.jp/junbilist/" target="_blank" rel="noopener noreferrer">
          アカチャンホンポ 必要なもの＆そろえたいグッズ〜出産準備リスト〜
        </a>
      </li>
      <li>
        <a href="https://amzn.to/2XtN08d" target="_blank" rel="noopener noreferrer">
          はじめてママ&amp;パパの妊娠・出産 P205 ベビーグッズお買い物リスト
        </a>
        <br />
        <iframe style={{width: 120, height: 240}} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=mani88-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4072955388&linkId=8cbb7739e8b839222d48679091c96d19"></iframe>
      </li>
      <li>
        <a href="https://amzn.to/2XzTsL6" target="_blank" rel="noopener noreferrer">
          Pre-mo(プレモ) 2019年02月 春号
        </a>
        <br />
        <iframe style={{width: 120, height: 240}} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=mani88-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07LDC9C48&linkId=0f6007d49b352ed24fa9898d0bfcad0a"></iframe>
      </li>
      <li>
        <a href="https://amzn.to/2XuLwuJ" target="_blank" rel="noopener noreferrer">
          LDK特別編集 ベビー用品完全ガイド
        </a>
        <br />
        <iframe style={{width: 120, height: 240}} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=mani88-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4801810241&linkId=ed7a04cbbfde4c9b7da6b81aa28a51dd"></iframe>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
