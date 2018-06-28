module.exports = (body, id) =>
  // REFACTOR: add styling to <a> tag
  `<html>
    <body>
      <div style="text-align: center;">
        <h3>I'd like your input!</h3>
        <p>Please answer the following question:</p>
        <p>${body}</p>
        <a href="${process.env.REDIRECT_DOMAIN}/surveys/answer/${id}">Great</a>
        <a href="${process.env.REDIRECT_DOMAIN}/surveys/answer/${id}">Good</a>
        <a href="${process.env.REDIRECT_DOMAIN}/surveys/answer/${id}">OK</a>
        <a href="${process.env.REDIRECT_DOMAIN}/surveys/answer/${id}">Bad</a>
        <a href="${
          process.env.REDIRECT_DOMAIN
        }/surveys/answer/${id}">Terrible</a>
      </div>
    </body>
  </html>`;
