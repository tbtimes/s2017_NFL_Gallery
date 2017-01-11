


class SettingsConfig {
  constructor() {
    this.name = "s2017_NFL_Gallery"; // this should match your local project name
    this.dependsOn = ["core","tbt-core"];
    this.styles = ["s2017_NFL_Gallery/styles.scss"]; // set this to your local project name
    this.scripts = ["tbt-core/isMobile.js"]; // set this to your local project name
    this.assets = [];
    this.blocks = [
      "core/header.html"
      ,"ARTICLE"
      // ,"tbt-core/comments.html"
      ,"core/footer.html"
      ,"tbt-analytics/omniture.html"
    ];
    this.googleFileId = "1eBUmC4XgtMx6bnnJOcdRYzEWevfJ_QtqMazs6DM1Z7Q"; // set this to match your Google Doc AML file, in this instance https://docs.google.com/document/d/15YYqK3_L-2r22bFoRI9fvuaqZZCaDLm7yo-Qu3W5XvQ/
  }
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE
// These two lines are necessary for lede to pull in this module at runtime.
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SettingsConfig;