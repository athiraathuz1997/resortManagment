(function() {
    var toggles = document.querySelectorAll('.choose-expand .toggle');

    toggles.forEach(function(toggle) {
        var icon = toggle.querySelector('.icon');
        icon.addEventListener('click', function() {
            toggleContent(toggle);
        });
    });

    // Open the first content section by default
    var firstContent = toggles[0].querySelector('.content');
    firstContent.classList.add('active');

    function toggleContent(toggle) {
        var content = toggle.querySelector('.content');

        // If the clicked content is already active, do nothing
        if (content.classList.contains('active')) {
            return;
        }

        // Close all other active content sections
        toggles.forEach(function(otherToggle) {
            var otherContent = otherToggle.querySelector('.content');
            if (otherContent !== content && otherContent.classList.contains('active')) {
                otherContent.classList.remove('active');
            }
        });

        // Open the clicked content
        content.classList.add('active');
    }
})();