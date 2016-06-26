package org.tinywind.reactpracticeweb.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.script.ScriptTemplateConfigurer;
import org.springframework.web.servlet.view.script.ScriptTemplateViewResolver;

@Configuration
public class WebApplication extends WebMvcConfigurerAdapter {
    private static Logger logger = LoggerFactory.getLogger(WebApplication.class);

    @Override
    public void configureViewResolvers(ViewResolverRegistry registry) {
        ScriptTemplateViewResolver viewResolver = new ScriptTemplateViewResolver();
        viewResolver.setPrefix("/templates/");
        viewResolver.setSuffix(".js");
        registry.viewResolver(viewResolver);
        registry.scriptTemplate();
        super.configureViewResolvers(registry);
    }

    @Bean
    ScriptTemplateConfigurer configureScript() {
        ScriptTemplateConfigurer configurer = new ScriptTemplateConfigurer();
        configurer.setEngineName("nashorn");
        configurer.setRenderFunction("render");
        configurer.setScripts(
                "/META-INF/resources/webjars/react/15.1.0/react.min.js",
                "/META-INF/resources/webjars/react/15.1.0/react-dom-server.min.js",
                "/build/react-templating.jsx",
                "/static/js/doms.js",
                "/static/js/playfield.js"
        );

        logger.trace("  ScriptTemplateConfigurer configureScript()");
        return configurer;
    }
}