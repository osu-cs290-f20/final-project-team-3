(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<header class = \"header-container\">\r\n      <h1 class=\"site-title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":2,"column":29},"end":{"line":2,"column":37}}}) : helper)))
    + "<a href=\"#\"></a></h1>\r\n</header>\r\n<section id = \"header-info\"> \r\n    <div class = \"user-info\">\r\n        Current Level : <span id= \"current-level\"> "
    + alias4(((helper = (helper = lookupProperty(helpers,"level") || (depth0 != null ? lookupProperty(depth0,"level") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"level","hash":{},"data":data,"loc":{"start":{"line":6,"column":51},"end":{"line":6,"column":60}}}) : helper)))
    + " </span>\r\n      <progress id = \"progress-bar\" max = "
    + alias4(((helper = (helper = lookupProperty(helpers,"maxExp") || (depth0 != null ? lookupProperty(depth0,"maxExp") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maxExp","hash":{},"data":data,"loc":{"start":{"line":7,"column":42},"end":{"line":7,"column":52}}}) : helper)))
    + " value = "
    + alias4(((helper = (helper = lookupProperty(helpers,"currExp") || (depth0 != null ? lookupProperty(depth0,"currExp") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currExp","hash":{},"data":data,"loc":{"start":{"line":7,"column":61},"end":{"line":7,"column":72}}}) : helper)))
    + " data-label=\"Current xp is "
    + alias4(((helper = (helper = lookupProperty(helpers,"currExp") || (depth0 != null ? lookupProperty(depth0,"currExp") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currExp","hash":{},"data":data,"loc":{"start":{"line":7,"column":99},"end":{"line":7,"column":110}}}) : helper)))
    + "\"> </progress>\r\n    </div>\r\n</section>";
},"useData":true});
})();