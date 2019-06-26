import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileExcel } from '@fortawesome/free-solid-svg-icons'
import { faFileCsv } from '@fortawesome/free-solid-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="家事分担表の作成" description="家事一覧を作成し、夫婦それぞれに分担して「夫の育休中の家事分担表」「夫の復職後の家事分担表」を作成した。" />
    <h1 className="title ikukyu__title">家事分担表の作成</h1>
    <p>
      家事一覧を作成し、夫婦それぞれに分担して「夫の育休中の家事分担表」「夫の復職後の家事分担表」を作成した。<br />
      友人に「子どもが生まれたあとは慌ただしくなるから、やれることは生まれる前にやっておいたほうがいいよ」と言われたので、「夫の復職後の家事分担表」も子どもが生まれる前に作成した。実際生まれると慌ただしく、作成しておいて大正解だった。
    </p>

    <img src="/images/shopping_list/shopping_list.svg" alt="家事分担表" />

    <p>
      <a href="https://docs.google.com/spreadsheets/d/1dovHvfwZXgKJaVuYKvQ5KPDTMjZEyZj4fMO2prbxJic/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faExternalLinkAlt} className="ikukyu__fa__margin-right" />
        Googleスプレッドシートで開く
      </a>
    </p>

    <div class="field has-addons">
      <p class="control">
        <a href="/files/housework/housework.xlsx" class="button is-link is-outlined">
          <span class="icon is-small">
            <FontAwesomeIcon icon={faFileExcel} />
          </span>
          <span>Excel版</span>
        </a>
      </p>
      <p class="control">
        <a href="/files/housework/housework.zip" class="button is-link is-outlined">
          <span class="icon is-small">
            <FontAwesomeIcon icon={faFileCsv} />
          </span>
          <span>CSV版</span>
        </a>
      </p>
      <p class="control">
        <a href="/files/housework/housework.pdf" class="button is-link is-outlined">
          <span class="icon is-small">
            <FontAwesomeIcon icon={faFilePdf} />
          </span>
          <span>PDF版</span>
        </a>
      </p>
    </div>

    <h2 className="subtitle ikukyu__subtitle">家事分担表のメリット</h2>
    <h3 className="ikukyu__subsubtitle">1.公平性の可視化</h3>
    <p>
      うちはもともと夫婦ともに家事をやるが、子どもが生まれて余裕がなくなると「自分の方が家事負担多くないか…？」という気持ちになりいらぬ諍いを生む可能性があるので、家事分担表で公平性が可視化できた効果は大きかった。
    </p>
    <h3 className="ikukyu__subsubtitle">2.自動化・外注化の検討</h3>
    <p>
      家事一覧の効果は「自動化」「外注化」を検討できることも大きい。<br />
      自動化については、うちも家事分担表を通じて食洗機の購入を決めたり、ロボット掃除機の導入を検討した。
      <span class="ikukyu__text__small">（<a href="https://www.duskin.jp/special/siro/" target="_blank" rel="noopener noreferrer">ダスキンのレンタル</a>を試した結果、合わないため購入を見送った。）</span><br />
      また外注化についても夕食に宅配弁当を導入したり、週末掃除の一部を家事代行に依頼することを検討している。
    </p>

    <h2 className="subtitle ikukyu__subtitle">家事のゲーム化</h2>
    <p>
      <a href="https://habitica.com/static/home" target="_blank" rel="noopener noreferrer">Habitica</a>というスマートフォンアプリを使っている。<br/>
    </p>

    <div class="columns is-mobile">
      <div class="column">
        <img src="/images/housework/habitica1.png" className="ikukyu__screen_capture" alt="Habiticaメイン画面" />
      </div>
      <div class="column">
        <img src="/images/housework/habitica2.png" className="ikukyu__screen_capture" alt="Habiticaレベルアップ画面" />
      </div>
    </div>

    <p>
      <a href="https://habitica.com/static/home" target="_blank" rel="noopener noreferrer">Habitica</a>はタスク管理アプリだ。<br/>
      「日課」機能を使うと、日次タスクや週次タスクを設定できる。設定したタスクを完了にすると経験値とお金が貯まる。経験値が増えるレベルアップし、お金が貯まると武器や防具が買えてアバターの見た目を変えることができる。家事をやることでどんどんレベルアップできるのだ。<br/>
      自分は早く新しい武器や防具を買いたくて土曜日のタスクを金曜夜にやってしまったりしている。楽しい。<br/>
    </p>

    <div class="field is-grouped">
      <p class="control">
        <a href="https://apps.apple.com/jp/app/habitica-gamified-taskmanager/id994882113?mt=8" target="_blank" rel="noopener noreferrer" className="button is-link is-outlined">
          <span class="icon is-small">
            <FontAwesomeIcon icon={faApple} />
          </span>
          <span>App Store</span>
        </a>
      </p>
      <p class="control">
        <a href="https://play.google.com/store/apps/details?id=com.habitrpg.android.habitica&hl=ja&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" target="_blank" rel="noopener noreferrer" className="button is-link is-outlined">
          <span class="icon is-small">
            <FontAwesomeIcon icon={faGooglePlay} />
          </span>
          <span>Google Play</span>
        </a>
      </p>
    </div>

    <nav class="pagination is-small is-centered ikukyu__pagination" role="navigation" aria-label="pagination">
      <Link to="/daily_schedule" className="pagination-next">
        1日のスケジュール作成
        <span class="icon">
          <FontAwesomeIcon icon={faCaretRight} />
        </span>
      </Link>
    </nav>
  </Layout>
)

export default IndexPage
