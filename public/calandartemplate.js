(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['calandar'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					dataJSON.push(['"
    + alias4(((helper = (helper = lookupProperty(helpers,"desc") || (depth0 != null ? lookupProperty(depth0,"desc") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"desc","hash":{},"data":data,"loc":{"start":{"line":11,"column":21},"end":{"line":11,"column":29}}}) : helper)))
    + "','"
    + alias4(((helper = (helper = lookupProperty(helpers,"data") || (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"data","hash":{},"data":data,"loc":{"start":{"line":11,"column":32},"end":{"line":11,"column":40}}}) : helper)))
    + "'])\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "﻿\r\n<head>\r\n	<meta charset=\"UTF-8\">\r\n	<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n	<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css\"\r\n		  integrity=\"sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4\" crossorigin=\"anonymous\">\r\n	\r\n		<script>\r\n			var dataJSON = [];\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"Quests") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":4},"end":{"line":12,"column":13}}})) != null ? stack1 : "")
    + "		</script>\r\n\r\n</head>\r\n<div class=\"container, col-lg-4 col-xl-7 col-xxl-4 mt-5 mx-auto\">\r\n    <h1> calendar</h1>\r\n    <div class=\"form-inline\">\r\n        <button class=\"btn btn-outline-primary col-sm-6\" onclick=previous()>Previous</button>\r\n        <button class=\"btn btn-outline-primary col-sm-6\" onclick=next()>Next</button>\r\n    </div>\r\n	<div class=\"card\">\r\n        <h3 class=\"card card-header\" id=\"monthAndYear\"></h3>\r\n		<table class=\"table table-bordered table-responsive-sm\" id=\"calendar\">\r\n			<thead>\r\n				<tr>\r\n					<th>Sun</th>\r\n					<th>Mon</th>\r\n					<th>Tue</th>\r\n					<th>Wed</th>\r\n					<th>Thu</th>\r\n					<th>Fri</th>\r\n					<th>Sat</th>\r\n				</tr>\r\n			</thead>\r\n\r\n			<tbody id=\"calendar-body\"></tbody>\r\n		</table>\r\n		\r\n	</div>\r\n</div>\r\n\r\n\r\n<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW\" crossorigin=\"anonymous\"></script>\r\n<script src=\"calendar.js\"></script>\r\n";
},"useData":true});
})();