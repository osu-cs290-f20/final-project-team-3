(function() {
    var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['header'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
      var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
          if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
            return parent[propertyName];
          }
          return undefined
      };
  
    return "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n	<div class=\"container-fluid\">\r\n		<a class=\"navbar-brand\" href=\"#\">"
      + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":3,"column":35},"end":{"line":3,"column":43}}}) : helper)))
      + "</a>\r\n		<button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n			<script src=\"index.js\" charset=\"utf-8\" defer></script>\r\n			<span class=\"navbar-toggler-icon\"></span>\r\n		</button>\r\n		<div class=\"user-info\">\r\n			Current Level : <span id=\"current-level\">"
      + alias4(((helper = (helper = lookupProperty(helpers,"currExp") || (depth0 != null ? lookupProperty(depth0,"currExp") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currExp","hash":{},"data":data,"loc":{"start":{"line":9,"column":44},"end":{"line":9,"column":55}}}) : helper)))
      + " </span>\r\n			<progress id=\"progress-bar\" max="
      + alias4(((helper = (helper = lookupProperty(helpers,"maxExp") || (depth0 != null ? lookupProperty(depth0,"maxExp") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maxExp","hash":{},"data":data,"loc":{"start":{"line":10,"column":35},"end":{"line":10,"column":45}}}) : helper)))
      + " value="
      + alias4(((helper = (helper = lookupProperty(helpers,"currExp") || (depth0 != null ? lookupProperty(depth0,"currExp") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currExp","hash":{},"data":data,"loc":{"start":{"line":10,"column":52},"end":{"line":10,"column":63}}}) : helper)))
      + " data-label=\"Current xp is "
      + alias4(((helper = (helper = lookupProperty(helpers,"currExp") || (depth0 != null ? lookupProperty(depth0,"currExp") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currExp","hash":{},"data":data,"loc":{"start":{"line":10,"column":90},"end":{"line":10,"column":101}}}) : helper)))
      + "> </progress>\r\n		</div>\r\n		<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n			<ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\r\n				<li class=\"nav-item\">\r\n					<a class=\"nav-link active\" aria-current=\"page\" href=\"/\">Calendar</a>\r\n				</li>\r\n				<li class=\"nav-item\">\r\n					<a class=\"nav-link\" href=\"games\">Q&A</a>\r\n				</li>\r\n			</ul>\r\n		</div>\r\n	</div>\r\n</nav>";
  },"useData":true});
  })();