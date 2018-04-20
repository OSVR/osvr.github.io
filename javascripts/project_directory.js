jQuery(document).ready(function($) {
  // See if we might have been an attempt to navigate directly to a project directory entry.
  var locHash = window.location.hash;
  if (locHash) {
    // remove #
    var project = locHash.substr(1);
    var needNav = false;
    if (project.match(/^collapse/)) {
      // remove collapse prefix and indicate we want to navigate to the updated hash.
      project = locHash.substr(9);
      needNav = true;
    };
    if (projectAnchors[project]) {
      // OK, we've got a valid project anchor. Expand and scroll.
      $('#collapse' + project).collapse('show');
      if (needNav) {
        window.location.hash = '#' + project;
      }
    }
  }
});
