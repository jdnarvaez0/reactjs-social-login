const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");
const GOOGLE_CLIENT_ID =
  "1010010417235-ag5cjmlukc0kpca1g579ncmavhqk1s9r.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "0e68d595d3d8d529a2a9";
GITHUB_CLIENT_SECRET = "b69fe0f7a8bd5b32031871f897d34934aa8eb3ec";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
