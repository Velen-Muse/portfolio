// Document Node Selectors
const terminalBody = document.getElementById('terminal-body');
const terminalInput = document.getElementById('terminal-input');

// Terminal Core Engine System Directory Logic
const commands = {
    help: "Available Commands:\n  [about]    - Deep background information\n  [skills]   - Detailed languages stack breakdown\n  [projects] - View featured core systems\n  [clear]    - Reset operational screen space",
    about: "Velen is an interface logic engine focused on building dynamic interaction loops, modern system aesthetics, and smooth lightweight browser architectures.",
    skills: "Runtime Core Capacities:\n - Frontend Architecture (HTML5, CSS3)\n - Programmatic Logic Engines (Modern ES6+ JavaScript)\n - Deployment Operations (Git pipelines & GitHub configuration management)",
    projects: "System Registries Found:\n - [Custom Web Games]: Native game development sandbox. (Locate link panel below configuration board)."
};

// Input Submissions Listener Engine
terminalInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const inputString = terminalInput.value.trim().toLowerCase();
        
        // Echo input execution line back out to UI view
        createLine(`velen@guest:~$ ${terminalInput.value}`, "prompt-echo");
        
        if (inputString !== "") {
            executeCommand(inputString);
        }
        
        terminalInput.value = ""; // Clear active input workspace buffer frame
        terminalBody.scrollTop = terminalBody.scrollHeight; // Autoscroll viewport down
    }
});

function createLine(text, typeClass = "") {
    const outputLine = document.createElement('div');
    outputLine.className = `terminal-line ${typeClass}`;
    outputLine.innerText = text;
    terminalBody.appendChild(outputLine);
}

function executeCommand(cmd) {
    if (cmd === 'clear') {
        terminalBody.innerHTML = "";
    } else if (commands[cmd]) {
        createLine(commands[cmd], "system-reply");
    } else {
        createLine(`bash: command not found: ${cmd}. Type 'help' to see system options.`, "error-reply");
    }
}

// Fade on Scroll Visibility Observer Configuration
const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
const globalRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card, .project-card, .mini-card, .stats-grid-row img').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(24px)";
    card.style.transition = "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
    
    // Create matching styling target macro injection
    card.classList.add('reveal-hook');
    globalRevealObserver.observe(card);
});

// Create Global Override Class Rule for Scroll Injections via DOM injection style
const styleElement = document.createElement('style');
styleElement.innerHTML = `.reveal-hook.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(styleElement);
