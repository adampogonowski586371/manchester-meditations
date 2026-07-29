exports.handler = async (event) => {
  const clientId = process.env.OAUTH_CLIENT_ID;
  const siteUrl = process.env.URL || `https://${event.headers.host}`;
  const redirectUri = `${siteUrl}/.netlify/functions/callback`;
  const scope = "repo,user";

  const authorizeUrl =
    `https://github.com/login/oauth/authorize` +
    `?client_id=${encodeURIComponent(clientId)}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&scope=${encodeURIComponent(scope)}`;

  return {
    statusCode: 302,
    headers: {
      Location: authorizeUrl,
    },
    body: "",
  };
};
