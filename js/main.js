document.addEventListener('DOMContentLoaded', () => {
    const quotesContainer = document.getElementById('quotes-container');
    
    // Function to shuffle the quotes array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    // Shuffle the quotes for a random display each time
    const shuffledQuotes = shuffleArray([...quotesData]);
    
    // Create and append quote cards to the container
    shuffledQuotes.forEach(quote => {
        const quoteCard = document.createElement('div');
        quoteCard.className = 'quote-card';
        
        // Create quote text element
        const quoteText = document.createElement('p');
        quoteText.className = 'quote-text';
        quoteText.textContent = quote.text;
        
        // Create author section
        const authorSection = document.createElement('div');
        authorSection.className = 'quote-author-section';
        
        // Create author avatar
        const authorAvatar = document.createElement('img');
        authorAvatar.className = 'author-avatar';
        authorAvatar.src = quote.avatar;
        authorAvatar.alt = `${quote.author} avatar`;
        authorAvatar.loading = 'lazy'; // Lazy load images for better performance
        
        // Create author info container
        const authorInfo = document.createElement('div');
        authorInfo.className = 'author-info';
        
        // Create author name
        const authorName = document.createElement('div');
        authorName.className = 'author-name';
        authorName.textContent = quote.author;
        
        // Create quote source
        const quoteSource = document.createElement('div');
        quoteSource.className = 'quote-source';
        quoteSource.textContent = quote.source;
        
        // Assemble the card components
        authorInfo.appendChild(authorName);
        authorInfo.appendChild(quoteSource);
        
        authorSection.appendChild(authorAvatar);
        authorSection.appendChild(authorInfo);
        
        quoteCard.appendChild(quoteText);
        quoteCard.appendChild(authorSection);
        
        // Add animation delay for staggered appearance
        quoteCard.style.animationDelay = `${Math.random() * 0.5}s`;
        
        // Add to the container
        quotesContainer.appendChild(quoteCard);
    });
    
    // Add animation class after cards are created for smooth entrance
    setTimeout(() => {
        document.querySelectorAll('.quote-card').forEach(card => {
            card.classList.add('fade-in');
        });
    }, 100);
    
    // Masonry layout adjustment (optional if needed)
    function adjustLayout() {
        // This function can be expanded if additional layout adjustments are needed
        console.log('Layout adjusted');
    }
    
    // Adjust layout when window is resized
    window.addEventListener('resize', adjustLayout);
    
    // Initial layout adjustment
    adjustLayout();
}); 