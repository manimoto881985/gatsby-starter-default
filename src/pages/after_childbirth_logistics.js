import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="出産直後の手続き整理" description="出産直後の手続きは時間との闘いだ。出産後からロジを詰めて以下の順序で手続きを進めた。" />
    <h1 className="title ikukyu__title">出産直後の手続き整理</h1>
    <p>
      出産直後の手続きは時間との闘いだ。<br />
      出産直後の手続きは段取りが重要になる。特に役所手続きの段取りに失敗すると、最悪役所を3往復することになる。<br />
      また会社手続きは書類を見ただけではわからないことがある。うちの妻の場合は、産休中に書類が郵送されてきたが、総務部に電話で確認して記入した。産後の消耗した状態で会社に電話確認をしながら書類を書くのはツライ。
    </p>
    <p>
      出産後からロジを詰めて以下の順序で手続きを進めた。
    </p>

    <h2 className="subtitle ikukyu__subtitle">出産前</h2>
    <p>
      出産前に書けるものは書いておいた。大正解だった。出産後は子どもの名前と生年月日を夫が記入して完了した。
    </p>

    <h3 className="ikukyu__subsubtitle">妻会社</h3>
    <ul>
      <li>高額医療費制度の申請
        <ul>
          <li>緊急帝王切開になった際に適応になる。</li>
        </ul>
      </li>
      <li>出産育児一時金の申請書の記入</li>
      <li>育児休業給付金支給申請書の記入</li>
    </ul>

    <h3 className="ikukyu__subsubtitle">夫会社</h3>
    <ul>
      <li>
        健康保険被扶養者異動届の記入（子ども夫の健康保険扶養に入れる場合）
        <ul>
          <li>妻の源泉徴収票のコピーを用意</li>
        </ul>
      </li>
    </ul>

    <h3 className="ikukyu__subsubtitle">役所</h3>
    <ul>
      <li>出生通知票（母子手帳交付時に渡される書類）</li>
    </ul>
    以下役所ホームページからダウンロード可能。名前と生年月日以外を記入
    <ul>
      <li>出生届の記入</li>
      <li>児童手当認定請求書の記入</li>
      <li>子ども医療費助成医療証交付申請書の記入</li>
    </ul>

    <h2 className="subtitle ikukyu__subtitle">出産後</h2>
    <h3 className="ikukyu__subsubtitle">1.病院から以下をもらう</h3>
    <ul>
      <li>出生証明書</li>
      <li>母子手帳</li>
    </ul>

    <h3 className="ikukyu__subsubtitle">2.以下書類に子どもの名前と生年月日を記入する</h3>
    <ul>
    <li>出生通知票</li>
      <li>出生届</li>
      <li>児童手当認定請求書</li>
      <li>子ども医療費助成医療証交付申請書</li>
      <li>出産育児一時金の申請書</li>
      <li>育児休業給付金支給申請書</li>
    </ul>

    <h3 className="ikukyu__subsubtitle">3.役所に行き、以下書類を提出する</h3>
    <ul>
      <li>出生届</li>
      <li>児童手当認定請求書</li>
      <li>子ども医療費助成医療証交付申請書</li>
    </ul>

    役所への持ち物
    <ul>
      <li>出生証明書</li>
      <li>母子手帳</li>
      <li>夫の印鑑</li>
      <li>夫の健康保険証</li>
      <li>夫の免許証</li>
      <li>夫の個人番号通知カード（もしくはマイナンバーカード）</li>
    </ul>

    役所の書類提出が完了すると母子手帳の出産届出済証明ページに証明が記入される。

    <h3 className="ikukyu__subsubtitle">4.役所で「マイナンバー入り住民票の写し」をもらう</h3>
    <ul>
      <li>子どもの健康保険証の発行に「子どものマイナンバー」が必要になるため</li>
    </ul>

    <h3 className="ikukyu__subsubtitle">5.母子手帳の出産届出済証明ページをコピーする</h3>
    <ul>
      <li>育児休業給付金支給申請書に必要</li>
    </ul>

    <h3 className="ikukyu__subsubtitle">6.妻病院退院後、「出産(分娩)費用の明細書」をコピーする</h3>
    <ul>
      <li>出産育児一時金の申請書に必要</li>
    </ul>

    <h3 className="ikukyu__subsubtitle">7.以下を郵送する</h3>
    <ul>
      <li>出生通知票</li>
      <li>出産育児一時金の申請書</li>
      <li>育児休業給付金支給申請書</li>
      <li>健康保険被扶養者異動届</li>
    </ul>

  </Layout>
)

export default IndexPage
