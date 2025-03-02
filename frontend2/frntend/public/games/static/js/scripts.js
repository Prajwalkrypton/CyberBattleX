// WebSocket connection
let ws;
let gameId;
let playerId;

// Connect to WebSocket server
function connectWebSocket() {
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    const host = window.location.host;
    gameId = new URLSearchParams(window.location.search).get("game_id");
    playerId = `player_${Math.floor(Math.random() * 1000)}`; // Generate a random player ID

    ws = new WebSocket(`${protocol}//${host}/ws/${gameId}/${playerId}`);

    ws.onopen = () => {
        console.log("WebSocket connection established.");
        updateLog(`[System] Connected to game ${gameId} as ${playerId}`);
    };

    ws.onmessage = (event) => {
        const message = event.data;
        updateLog(message);
    };

    ws.onclose = () => {
        console.log("WebSocket connection closed.");
        updateLog(`[System] Disconnected from game ${gameId}`);
    };

    ws.onerror = (error) => {
        console.error("WebSocket error:", error);
        updateLog(`[System] WebSocket error: ${error.message}`);
    };
}

// Update the logs section
function updateLog(message) {
    const logs = document.getElementById("logs");
    const logEntry = document.createElement("pre");
    logEntry.className = "text-warning";
    logEntry.textContent = message;
    logs.appendChild(logEntry);

    // Auto-scroll to the bottom
    logs.scrollTop = logs.scrollHeight;
}

// Handle terminal input
function setupTerminal() {
    const terminalInput = document.getElementById("terminal-input");
    const terminalOutput = document.getElementById("terminal-output");

    terminalInput.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            const command = terminalInput.value.trim();
            if (command) {
                // Display the command in the terminal
                terminalOutput.textContent += `\n$ ${command}`;
                terminalInput.value = "";

                // Send the command to the server via WebSocket
                if (ws && ws.readyState === WebSocket.OPEN) {
                    ws.send(command);
                } else {
                    updateLog(`[System] WebSocket connection is not open.`);
                }
            }
        }
    });
}

// Update player details
function updatePlayerDetails(player) {
    const teamNameElement = document.getElementById("team-name");
    const xpElement = document.getElementById("xp");
    const roleElement = document.getElementById("role");

    if (player) {
        teamNameElement.textContent = player.team_name || "N/A";
        xpElement.textContent = player.xp || "0";
        roleElement.textContent = player.role || "N/A";
    }
}

// Fetch player details from the server
async function fetchPlayerDetails(playerId) {
    try {
        const response = await fetch(`/api/players/${playerId}`);
        if (response.ok) {
            const player = await response.json();
            updatePlayerDetails(player);
        } else {
            console.error("Failed to fetch player details:", response.statusText);
        }
    } catch (error) {
        console.error("Error fetching player details:", error);
    }
}

// Initialize the game interface
function initGameInterface() {
    connectWebSocket();
    setupTerminal();

    // Fetch and display player details
    const playerId = new URLSearchParams(window.location.search).get("player_id");
    if (playerId) {
        fetchPlayerDetails(playerId);
    }
}

// Run the initialization when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initGameInterface);