// Local memory to track what copy is currently active for simulation tests
let currentActiveCopy = '';
let currentNiche = '';

// Pre-configured marketing models based on high-performing copy frameworks
const copyTemplates = {
    ecommerce: {
        email: "Subject: Shhh... something big is happening 🤫\n\nHey there,\n\nWe noticed you've been eyeing our latest collection. To make things easier, we are giving you an exclusive opportunity: use code CRAFT at checkout for [OFFER].\n\nDon't wait around, the inventory is moving fast.\n\nClaim it here: lcc-shop.co/deal",
        sms: "LCC Retail: Your cart is expiring! Use code SALE for [OFFER] before stocks run completely out tonight: lcc-shop.co/deal"
    },
    tech: {
        email: "Subject: Quick question regarding your software stack\n\nHi,\n\nMost modern businesses lose hours every week to manual data entries. We want to completely eliminate that headache for you.\n\nWe're offering a [OFFER] to the first 5 businesses that reply to this message. Want to optimize your operations this month?\n\nLet's chat,\nThe LCC Automation Team",
        sms: "LCC Tech: Ready to scale? Claim your [OFFER] now. Only 3 slots left for this week's onboarding: lcc-tech.co/solve"
    },
    realestate: {
        email: "Subject: Off-market listings matching your profile 🏡\n\nHello,\n\nFinding the perfect property right now is incredibly tough. That is why we went ahead and pulled 3 brand new off-market properties that just hit the grid.\n\nWe are throwing in a [OFFER] for anyone booking a viewing before Friday.\n\nReply directly to this email to get the private PDF breakdown.",
        sms: "Property Alert: New off-market listings are live. Get a [OFFER] when you book a walkthrough today: lcc-homes.co/view"
    },
    fitness: {
        email: "Subject: No more excuses. Time to hit your targets.\n\nHey,\n\nConsistency beats talent every single day of the week. If you've been waiting for a sign to get back on track, this is it.\n\nSign up today and get a [OFFER]. No strings attached, just pure progress.\n\nSecure your pass: lcc-fit.co/join",
        sms: "LCC Gym: Stop putting it off! Join today and get [OFFER]. Valid for the next 24 hours only: lcc-fit.co/strong"
        }
};

// Form submit listener to pull values and build the copy block
document.getElementById('generator-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nicheSelect = document.getElementById('niche').value;
    const offerInput = document.getElementById('offer').value;
    const channelSelect = document.getElementById('channel').value;
    
    // Pick the right template chunk based on industry and target channel
    let rawTemplate = copyTemplates[nicheSelect][channelSelect];
    
    // Swap out the placeholder placeholder text with the actual client offer value
    let processedCopy = rawTemplate.replace('[OFFER]', offerInput);
    
    // Update local state storage variables
    currentActiveCopy = processedCopy;
    currentNiche = nicheSelect;
    
    // Push the written copy block straight into the view panel
    document.getElementById('copy-output').textContent = processedCopy;
    
    // Turn on the analytics testing button since we have real copy to evaluate now
    document.getElementById('simulate-btn').disabled = false;
    
    // Reset indicators back to zero until user fires the dispatch simulation loop
    document.getElementById('stat-open').textContent = '0%';
    document.getElementById('stat-conv').textContent = '0';
});

// Analytics simulator to mock real marketing results data for the customer
document.getElementById('simulate-btn').addEventListener('click', function() {
    if (!currentActiveCopy) return;
    
    let baseOpenRate = 0;
    let baseConversionMultiplier = 0;
    
    // Set realistic variable ranges depending on what industry they choose
    if (currentNiche === 'ecommerce' || currentNiche === 'fitness') {
        baseOpenRate = Math.floor(Math.random() * (28 - 18 + 1)) + 18; // 18%-28% range
        baseConversionMultiplier = 0.12;
    } else {
        baseOpenRate = Math.floor(Math.random() * (45 - 30 + 1)) + 30; // higher open rates for tech B2B copy
        baseConversionMultiplier = 0.08;
    }
    
    // Simple mock calculation: assume a standard broadcast batch of 500 contacts
    let calculatedConversions = Math.round((500 * (baseOpenRate / 100)) * baseConversionMultiplier);
    
    // Update UI elements smoothly
    document.getElementById('stat-open').textContent = baseOpenRate + '%';
    document.getElementById('stat-conv').textContent = calculatedConversions + ' sales';
});