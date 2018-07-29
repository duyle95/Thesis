module.exports = (body, recipient_id) =>
  // REFACTOR: add styling to <a> tag
  `<html>
    <body>
      <div style="text-align: center;">
        <p>${body}</p>
        <h3>I'd like your input!</h3>
        <p>Please answer the following question:</p>
        <a href="${
          process.env.REDIRECT_DOMAIN
        }/surveys/answer/${recipient_id}">Great</a>
        <a href="${
          process.env.REDIRECT_DOMAIN
        }/surveys/answer/${recipient_id}">Good</a>
        <a href="${
          process.env.REDIRECT_DOMAIN
        }/surveys/answer/${recipient_id}">OK</a>
        <a href="${
          process.env.REDIRECT_DOMAIN
        }/surveys/answer/${recipient_id}">Bad</a>
        <a href="${
          process.env.REDIRECT_DOMAIN
        }/surveys/answer/${recipient_id}">Terrible</a>
      </div>
    </body>
  </html>`;
