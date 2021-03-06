AutoForm.addInputType("bootstrap-body", {
  template: "afBootstrapBody",
  valueOut: function () {
    var body = this.val();
    if (!!body) {
      // add http:// if missing
     /*
 if (url.substring(0, 7) !== "http://" && url.substring(0, 8) !== "https://") {
        url = "http://"+url;
      }
      // add trailing / if missing (unless URL contains a "?")
      if (url.slice(-1) !== "/" && url.indexOf("?") === -1) {
        url = url + "/";
      }
*/
      return url;
    }
  }
});

Template.afBootstrapBody_bootstrap3.helpers({
  atts: function addFormControlAtts() {
    console.log(this);
    var atts = _.clone(this.atts);
    // Add bootstrap class
    atts = AutoForm.Utility.addClass(atts, "form-control");
    return atts;
  }
});

