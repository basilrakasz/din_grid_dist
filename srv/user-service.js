module.exports = cds.service.impl(async function() {
  this.on('info', req => {
    let results = {};

    results.user = req.user.id;

    if (req.user.hasOwnProperty('locale')) {
      results.locale = req.user.locale; // TODO deprecated
    }

    results.tenant = req.user.tenant; // TODO deprecated

    results.scopes = {};
    results.scopes.identified = req.user.is('identified-user');
    results.scopes.authenticated = req.user.is('authenticated-user');
    results.scopes.AgentAdmin = req.user.is('AgentAdmin');
    results.scopes.AgentViewer = req.user.is('AgentViewer');
    results.scopes.AssetAdmin = req.user.is('AssetAdmin');
    results.scopes.AssetViewer = req.user.is('AssetViewer');

    // see https://answers.sap.com/questions/13321947/how-to-get-current-user-details-in-cap.html
    // maybe alternative: https://github.com/bizhuka/wb3/blob/7cfd487bcb3947c9f4b5a7eab54f8c8ee610d27b/srv/api/db.js#L91
    results.firstName = req.req.authInfo.getGivenName();
    results.lastName = req.req.authInfo.getFamilyName();
    results.email = req.req.authInfo.getEmail();

    return results;
  });
});
