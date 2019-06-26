import { Link } from "gatsby"
import React from "react"

const Menu = () => (
  <div className="ikukyu__menu">
    <h2 className="ikukyu__menu__title">
      <Link to="/">
        男性育休やることマニュアル
      </Link>
    </h2>
    <aside class="menu">
      <p class="menu-label">
        体制
      </p>
      <ul class="menu-list">
        <li>
          <Link to="/housework" activeClassName="is-active">家事分担表の作成</Link>
        </li>
        <li>
          <Link to="/daily_schedule" activeClassName="is-active">1日のスケジュール作成</Link>
        </li>
        <li>
          <Link to="/after_childbirth_logistics" activeClassName="is-active">出産直後の手続き整理</Link>
        </li>
      </ul>
      <p class="menu-label">
        買い物
      </p>
      <ul class="menu-list">
        <li>
          <Link to="/shopping_list" activeClassName="is-active">買い物リストの作成</Link>
        </li>
        <li>
          <Link to="/purchasing_system" activeClassName="is-active">日常的な買い物体制の整備</Link>
        </li>
        <li>
          <Link to="/milk_disinfection_baby_bottle" activeClassName="is-active">ミルク・消毒・哺乳瓶</Link>
        </li>
        <li>
          <Link to="/stamp" activeClassName="is-active">ゴム印の作成</Link>
        </li>
      </ul>
    </aside>
  </div>
)

export default Menu
