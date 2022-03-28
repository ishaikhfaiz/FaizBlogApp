import React from 'react';

const Footer = () => (
  <div className="footer">
    <table>
      <tbody>
        <tr style={{ display: 'inline-block' }}>
          <td>
            <a href="https://github.com/ishaikhfaiz" target="_blank">
              <span
                style={{ fontSize: '3em', color: 'black', padding: '0 4px' }}
              >
                <i className="link fab fa-github"></i>
              </span>
            </a>
            <a href="https://www.linkedin.com/in/ishaikhfaiz/" target="_blank">
              <span
                style={{ fontSize: '3em', color: 'black', padding: '0 4px' }}
              >
                <i className="link fab fa-linkedin"></i>
              </span>
            </a>
            <a href="https://www.instagram.com/ishaikhfaiz" target="_blank">
              <span
                style={{ fontSize: '3em', color: 'black', padding: '0 4px' }}
              >
                <i className="link fab fa-instagram-square"></i>
              </span>
            </a>
            <a href="https://twitter.com/ishaikhfaiz" target="_blank">
              <span
                style={{ fontSize: '3em', color: 'black', padding: '0 4px' }}
              >
                <i className="link fab fa-twitter"></i>
              </span>
            </a>
            <a
              href="https://www.facebook.com/ishaikhfaiz"
              target="_blank"
            >
              <span
                style={{ fontSize: '3em', color: 'black', padding: '0 4px' }}
              >
                <i className="link fab fa-facebook-square"></i>
              </span>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <div style={{ border: '1px solid lightgrey' }} />
    <br />
    <div>Faiz Shaikh © {new Date().getFullYear()}</div>
    <br />
  </div>
);

export default Footer;
