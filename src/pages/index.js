import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Header siteTitle="男性育休やることマニュアル" />
    <section className="section ikukyu__index__hero">
      <div className="container content ikukyu__container">
        <div className="ikukyu__index__hero__heading">
          家事・育児効率を<br />
          <span className="ikukyu__index__hero__heading__accent">最大化</span>する
        </div>
        <div className="ikukyu__index__hero__paragraph">
          育休取得。期間は1ヶ月。<br />
          事前の準備段取りで育休夫のバリューを最大化する。
        </div>
      </div>
    </section>
    <section className="section ikukyu__index__main">
      <div className="container content ikukyu__container">
        <div className="ikukyu__index__main__item ikukyu__index__main__item__first">
          <h2 className="ikukyu__index__main__item__heading">体制</h2>
          <ul>
            <li>
              <Link to="/housework">家事分担表の作成</Link>
            </li>
            <li>
              <Link to="/daily_schedule">1日のスケジュール作成</Link>
            </li>
            <li>
              <Link to="/after_childbirth_logistics">出産直後の手続き整理</Link>
            </li>
          </ul>
        </div>
        <div className="ikukyu__index__main__item ikukyu__index__main__item__second">
          <h2 className="ikukyu__index__main__item__heading">買い物</h2>
          <ul>
            <li>
              <Link to="/shopping_list">買い物リストの作成</Link>
            </li>
            <li>
              <Link to="/purchasing_system">日常的な買い物体制の整備</Link>
            </li>
            <li>
              <Link to="/milk_disinfection_baby_bottle">ミルク・消毒・哺乳瓶</Link>
            </li>
            <li>
              <Link to="/stamp">ゴム印の作成</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <footer>
      <div>© {new Date().getFullYear()} 男性育休やることマニュアル</div>
      <div>
        <a href="#">お問い合わせ</a>
      </div>
    </footer>
  </>
)

export default IndexPage
