/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('setup')}>
              Getting Started
            </a>
            <a href={this.docUrl('wallet')}>
              Create Wallets
            </a>
            <a href={this.docUrl('intents')}>
              Intents and transactions
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href="https://marmo.io/">Home</a>
            <a
              href="https://discord.gg/nj5Uaj"
              target="_blank"
              rel="noreferrer noopener">
              Project chat
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://github.com/ripio?utf8=%E2%9C%93&q=marmo-">GitHub</a>
            <a
              className="github-button"
              href="https://github.com/ripio/marmo-contracts"
              data-icon="octicon-star"
              data-count-href="/ripio/marmo-contracts"
              data-show-count="false"
              data-count-aria-label="# Marmo on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright} <a target='_blank' href='https://ripiocredit.network/'>Ripio Credit Network</a>  - Docs powered by <a href="https://docusaurus.io/" target="_blank">Docusaurus </a></section>
      </footer>
    );
  }
}

module.exports = Footer;
