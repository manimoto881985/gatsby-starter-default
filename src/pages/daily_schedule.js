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
    <SEO title="1日のスケジュール作成" description="育休中の1日のスケジュール作成した。妻を昼シフト、夫を夜シフトで組んだ。睡眠時間は連続で5時間以上、昼寝を含んで7時間は確保できるようにした。" />
    <h1 className="title ikukyu__title">1日のスケジュール作成</h1>
    <p>
      育休中の1日のスケジュール作成した。妻を昼シフト、夫を夜シフトで組んだ。睡眠時間は連続で5時間以上、昼寝を含んで7時間は確保できるようにした。
    </p>

    <table className="ikukyu__daily_schedule__table">
      <tr><th>時間</th><th>妻</th><th>夫</th></tr>
      <tr><td>6:00</td><td>起床、ミルクあげる</td><td className="has-background-light">睡眠中</td></tr>
      <tr><td>7:00</td><td>朝食、赤ちゃん対応</td><td className="has-background-light">睡眠中</td></tr>
      <tr><td>8:00</td><td>赤ちゃん対応</td><td className="has-background-light">睡眠中</td></tr>
      <tr><td>9:00</td><td>ミルクあげる</td><td>起床、朝食</td></tr>
      <tr><td>10:00</td><td className="has-background-light">昼寝</td><td>哺乳瓶消毒</td></tr>
      <tr><td>11:00</td><td className="has-background-light">昼寝</td><td>赤ちゃん対応</td></tr>
      <tr><td>12:00</td><td>授乳、ミルクあげる</td><td>昼食調理</td></tr>
      <tr><td>13:00</td><td>昼食</td><td>昼食、洗い物</td></tr>
      <tr><td>14:00</td><td>赤ちゃん対応</td><td>買い物</td></tr>
      <tr><td>15:00</td><td>赤ちゃん対応</td><td>ミルクあげる</td></tr>
      <tr><td>16:00</td><td>赤ちゃん対応</td><td>赤ちゃん対応</td></tr>
      <tr><td>17:00</td><td>掃除機</td><td>沐浴、コリック対応</td></tr>
      <tr><td>18:00</td><td>洗濯物対応</td><td>ミルクあげる、コリック対応</td></tr>
      <tr><td>19:00</td><td>風呂</td><td>夕食調理</td></tr>
      <tr><td>20:00</td><td>夕食</td><td>夕食</td></tr>
      <tr><td>21:00</td><td>授乳、搾乳</td><td>ミルクあげる</td></tr>
      <tr><td>22:00</td><td>赤ちゃん対応、洗い物</td><td className="has-background-light">昼寝</td></tr>
      <tr><td>23:00</td><td>赤ちゃん対応</td><td className="has-background-light">昼寝</td></tr>
      <tr><td>0:00</td><td className="has-background-light">就寝</td><td>起床、ミルクあげる</td></tr>
      <tr><td>1:00</td><td className="has-background-light">睡眠中</td><td>哺乳瓶消毒</td></tr>
      <tr><td>2:00</td><td className="has-background-light">睡眠中</td><td>風呂</td></tr>
      <tr><td>3:00</td><td className="has-background-light">睡眠中</td><td>ミルク上げる</td></tr>
      <tr><td>4:00</td><td className="has-background-light">睡眠中</td><td className="has-background-light">就寝</td></tr>
      <tr><td>5:00</td><td className="has-background-light">睡眠中</td><td className="has-background-light">睡眠中</td></tr>
    </table>


    <p>
      <a href="https://docs.google.com/spreadsheets/d/1ehqwyNggUCS5DpqMnmZA7WXlE7EUawcBh6vVfN17xGk/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faExternalLinkAlt} className="ikukyu__fa__margin-right" />
        Googleスプレッドシートで開く
      </a>
    </p>

    <div class="field has-addons">
      <p class="control">
        <a href="/files/daily_schedule/daily_schedule.xlsx" class="button is-link is-outlined">
          <span class="icon is-small">
            <FontAwesomeIcon icon={faFileExcel} />
          </span>
          <span>Excel版</span>
        </a>
      </p>
      <p class="control">
        <a href="/files/daily_schedule/daily_schedule.csv" class="button is-link is-outlined">
          <span class="icon is-small">
            <FontAwesomeIcon icon={faFileCsv} />
          </span>
          <span>CSV版</span>
        </a>
      </p>
      <p class="control">
        <a href="/files/daily_schedule/daily_schedule.pdf" class="button is-link is-outlined">
          <span class="icon is-small">
            <FontAwesomeIcon icon={faFilePdf} />
          </span>
          <span>PDF版</span>
        </a>
      </p>
    </div>
  </Layout>
)

export default IndexPage
