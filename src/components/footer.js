import { OutboundLink } from 'gatsby-plugin-google-analytics'
import React from "react"

const Footer = () => (
  <footer>
    <div>© {new Date().getFullYear()} 男性育休やることマニュアル</div>
    <div>
      <OutboundLink href="https://docs.google.com/forms/d/e/1FAIpQLSc-W2rI2YU6j34n-NEtHbKc4v69M7EwNZ4zfqt9t1AFbG5DYQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
        お問い合わせ
      </OutboundLink>
    </div>
  </footer>
)

export default Footer
