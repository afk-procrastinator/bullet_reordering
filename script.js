document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const inputEditor = document.getElementById('inputEditor');
    const startButton = document.getElementById('startButton');
    const categorizationSection = document.getElementById('categorizationSection');
    const currentItem = document.getElementById('currentItem');
    const progressText = document.getElementById('progressText');
    const resultsSection = document.getElementById('resultsSection');
    const resultsContainer = document.getElementById('resultsContainer');
    const copyResultsButton = document.getElementById('copyResultsButton');
    const startOverButton = document.getElementById('startOverButton');
    const categoryButtons = document.querySelectorAll('.category-btn');

    // State variables
    let items = [];
    let currentItemIndex = 0;
    let categorizedItems = {
        'AI Governance': [],
        'Safety & Stability': [],
        'Biotech': [],
        'DSR': [],
        'Indo-Pacific': [],
        'Quantum': [],
        'Other': [],
        'Error': []
    };

    // Category to key mapping
    const categoryKeyMap = {
        '1': 'AI Governance',
        '2': 'Safety & Stability',
        '3': 'Biotech',
        '4': 'DSR',
        '5': 'Indo-Pacific',
        '6': 'Quantum',
        '7': 'Other',
        '8': 'Error'
    };

    // Start categorization process
    startButton.addEventListener('click', () => {
        const text = inputEditor.value.trim();
        if (!text) {
            alert('Please paste some text first.');
            return;
        }

        // Split text into lines and filter out empty lines
        items = text.split('\n')
            .map(line => line.trim())
            .filter(line => line.length > 0);

        if (items.length === 0) {
            alert('No valid items found. Please check your input.');
            return;
        }

        // Reset state
        currentItemIndex = 0;
        categorizedItems = {
            'AI Governance': [],
            'Safety & Stability': [],
            'Biotech': [],
            'DSR': [],
            'Indo-Pacific': [],
            'Quantum': [],
            'Other': [],
            'Error': []
        };

        // Show categorization section and hide input section
        document.querySelector('.input-section').style.display = 'none';
        categorizationSection.style.display = 'block';
        resultsSection.style.display = 'none';

        // Display first item
        displayCurrentItem();
        
        // Add keyboard event listener when categorization starts
        document.addEventListener('keydown', handleKeyPress);
    });

    // Handle keyboard shortcuts
    function handleKeyPress(event) {
        // Only process if we're in categorization mode and have items to categorize
        if (categorizationSection.style.display === 'block' && currentItemIndex < items.length) {
            const key = event.key;
            
            // Check if the pressed key is a number between 1-8
            if (categoryKeyMap[key]) {
                const category = categoryKeyMap[key];
                categorizedItems[category].push(items[currentItemIndex]);
                
                // Highlight the corresponding button briefly
                highlightButton(category);
                
                // Move to next item
                currentItemIndex++;
                displayCurrentItem();
            }
        }
    }
    
    // Highlight the button corresponding to the pressed key
    function highlightButton(category) {
        const button = document.querySelector(`.category-btn[data-category="${category}"]`);
        if (button) {
            button.classList.add('button-highlight');
            setTimeout(() => {
                button.classList.remove('button-highlight');
            }, 200);
        }
    }

    // Display the current item for categorization
    function displayCurrentItem() {
        if (currentItemIndex < items.length) {
            currentItem.textContent = items[currentItemIndex];
            progressText.textContent = `Item ${currentItemIndex + 1} of ${items.length}`;
        } else {
            // All items have been categorized, show results
            showResults();
            // Remove keyboard event listener when done
            document.removeEventListener('keydown', handleKeyPress);
        }
    }

    // Handle category button clicks
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (currentItemIndex < items.length) {
                const category = button.getAttribute('data-category');
                categorizedItems[category].push(items[currentItemIndex]);
                
                // Move to next item
                currentItemIndex++;
                displayCurrentItem();
            }
        });
    });

    // Show the categorization results
    function showResults() {
        categorizationSection.style.display = 'none';
        resultsSection.style.display = 'block';
        
        // Clear previous results
        resultsContainer.innerHTML = '';
        
        // Generate results HTML
        for (const category in categorizedItems) {
            const items = categorizedItems[category];
            if (items.length > 0) {
                const categoryDiv = document.createElement('div');
                categoryDiv.className = 'category-result';
                
                const categoryHeader = document.createElement('div');
                categoryHeader.className = 'category-header';
                categoryHeader.textContent = category;
                categoryDiv.appendChild(categoryHeader);
                
                const categoryItems = document.createElement('div');
                categoryItems.className = 'category-items';
                
                items.forEach(item => {
                    const itemElement = document.createElement('div');
                    itemElement.className = 'category-item';
                    itemElement.textContent = item;
                    categoryItems.appendChild(itemElement);
                });
                
                categoryDiv.appendChild(categoryItems);
                resultsContainer.appendChild(categoryDiv);
            }
        }
    }

    // Copy results to clipboard
    copyResultsButton.addEventListener('click', () => {
        let resultText = '';
        
        // Format results as text
        for (const category in categorizedItems) {
            const items = categorizedItems[category];
            if (items.length > 0) {
                resultText += `${category}:\n`;
                items.forEach(item => {
                    resultText += `- ${item}\n`;
                });
                resultText += '\n';
            }
        }
        
        // Copy to clipboard
        navigator.clipboard.writeText(resultText.trim())
            .then(() => {
                alert('Results copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
                alert('Failed to copy results. Please try again or copy manually.');
            });
    });

    // Start over button
    startOverButton.addEventListener('click', () => {
        // Reset and show input section
        document.querySelector('.input-section').style.display = 'block';
        categorizationSection.style.display = 'none';
        resultsSection.style.display = 'none';
        
        // Remove keyboard event listener when starting over
        document.removeEventListener('keydown', handleKeyPress);
    });
}); 