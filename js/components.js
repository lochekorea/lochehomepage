class ComponentLoader {
    static cache = new Map();

    static async load(elementId, componentPath, data = {}) {
        try {
            let html;
            
            // 캐시된 컴포넌트 확인
            if (this.cache.has(componentPath)) {
                html = this.cache.get(componentPath);
            } else {
                const response = await fetch(componentPath);
                html = await response.text();
                this.cache.set(componentPath, html);
            }
            
            // 템플릿 변수 치환
            Object.keys(data).forEach(key => {
                html = html.replace(`{{${key}}}`, data[key]);
            });
            
            document.getElementById(elementId).innerHTML = html;
        } catch (error) {
            console.error(`Failed to load component: ${componentPath}`, error);
        }
    }
} 