import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://79034ed53c324e509970e4e8a3edfb34@sentry.io/1381932"
  });
}

function log(error) {
  console.log("error");
  Sentry.captureMessage("HET says:" + error);
}

export default {
  init,
  log
};
