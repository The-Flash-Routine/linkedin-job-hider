function hideDismissedJobs() {
    const jobCards = document.querySelectorAll('li[data-occludable-job-id]');
  
    jobCards.forEach(card => {
        const divHoldingtheDismissedButton = card.querySelector('.job-card-list__actions-container')
        const icon = divHoldingtheDismissedButton?.querySelector('svg[data-test-icon]');

        const iconType = icon?.getAttribute('data-test-icon');

        if (iconType === 'undo-small') {
            card.style.display = 'none';
        }
    });
}
  
// Wait a bit to let LinkedIn finish loading dynamic content
setTimeout(hideDismissedJobs, 2000);

// Observe DOM changes to catch dynamically loaded jobs
const observer = new MutationObserver(() => {
    hideDismissedJobs();
});

// Start observing the container that holds the job list
const jobListContainer = document.querySelector('div.scaffold-layout__list');

if (jobListContainer) {
    observer.observe(jobListContainer, { childList: true, subtree: true });
} else {
// Fallback: observe body if job list container not found immediately
    observer.observe(document.body, { childList: true, subtree: true });
}
  