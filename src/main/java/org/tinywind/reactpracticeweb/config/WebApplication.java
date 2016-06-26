package org.tinywind.reactpracticeweb.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.script.ScriptTemplateConfigurer;
import org.springframework.web.servlet.view.script.ScriptTemplateViewResolver;

@Configuration
public class WebApplication extends WebMvcConfigurerAdapter {
    @Override
    public void configureViewResolvers(ViewResolverRegistry registry) {
        ScriptTemplateViewResolver viewResolver = new ScriptTemplateViewResolver();
        viewResolver.setPrefix("/templates/");
        viewResolver.setSuffix(".jsx");
        registry.viewResolver(viewResolver);
        registry.scriptTemplate();
        super.configureViewResolvers(registry);
    }

    @Bean
    ScriptTemplateConfigurer configureScript() {
        ScriptTemplateConfigurer configurer = new ScriptTemplateConfigurer();
        configurer.setEngineName("nashorn");
        configurer.setRenderFunction("renderJsx");
        configurer.setScripts(
                "/META-INF/resources/webjars/react/15.1.0/react.min.js",
                "/META-INF/resources/webjars/react/15.1.0/react-dom-server.min.js",
                "/build/react-templating.js",
                "/static/js/doms.js",
                "/static/js/playfield.js"
        );
        return configurer;
    }
}