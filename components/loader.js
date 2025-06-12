
// Component loader - Charges tous les composants HTML modulaires
document.addEventListener('DOMContentLoaded', function() {
    const components = [
        { id: 'navigation', file: 'components/navigation.html' },
        { id: 'hero', file: 'components/hero.html' },
        { id: 'benefits', file: 'components/benefits.html' },
        { id: 'product', file: 'components/product.html' },
        { id: 'faq', file: 'components/faq.html' },
        { id: 'cta', file: 'components/cta.html' },
        { id: 'footer', file: 'components/footer.html' }
    ];

    let loadedComponents = 0;
    const totalComponents = components.length;

    components.forEach(component => {
        loadComponent(component.id, component.file, () => {
            loadedComponents++;
            if (loadedComponents === totalComponents) {
                // Tous les composants sont chargés, initialiser les scripts
                initializeMainScript();
            }
        });
    });

    function loadComponent(containerId, filePath, callback) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`Container with id "${containerId}" not found`);
            callback();
            return;
        }

        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                container.innerHTML = html;
                callback();
            })
            .catch(error => {
                console.error(`Error loading component ${filePath}:`, error);
                callback();
            });
    }

    function initializeMainScript() {
        // Déclencher un événement personnalisé pour indiquer que tous les composants sont chargés
        const event = new CustomEvent('componentsLoaded');
        document.dispatchEvent(event);
    }
});
