const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
const passport = require('passport');

const GOOGLE_CLIENT_ID =
  '3597899066-1pdigq6hiu2ekqm5efvqbieoqnfs1ssg.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';
const GITHUB_CLIENT_ID = '5ca1a0e5418ac2b8b862';
const GITHUB_CLIENT_SECRET = '8d1a5d6d012918b285625ea010b97f2ef29a046e';

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
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
      callbackURL: '/auth/github/callback',
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
