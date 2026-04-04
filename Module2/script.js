// Mock Data representing a Hustle Portfolio with nested projects
const hustleData = {
    name: "Hustle Portfolio",
    revenue: 0,
    subProjects: [
        { name: "AI Agency", revenue: 1500, subProjects: [] },
        { name: "E-Commerce", revenue: 800, subProjects: [] },
        {
            name: "YouTube", revenue: 0, subProjects: [
                { name: "AdSense", revenue: 450, subProjects: [] },
                { name: "Sponsorships", revenue: 600, subProjects: [] }
            ]
        }
    ]
};

// Recursive Function to Calculate Total Revenue (including sub-projects)
function calculateTotal(project) {
    let total = project.revenue;
    if (project.subProjects.length > 0) {
        total += project.subProjects.reduce((acc, sub) => acc + calculateTotal(sub), 0);
    }
    return total;
}


function renderDashboard() {
    const tableBody = document.getElementById('table-body');
    const totalDisplay = document.getElementById('total-value');
    const grandTotal = calculateTotal(hustleData);
    totalDisplay.textContent = `$${grandTotal.toLocaleString()}`;

    const projectsToDisplay = hustleData.subProjects
        .filter(p => p.name !== "")
        .map(p => {
            // Calculate individual project totals (including their sub-projects)
            const projectTotal = calculateTotal(p);
            return `
                <tr>
                    <td>${p.name}</td>
                    <td>$${projectTotal}</td>
                    <td><span class="badge bg-success">Active</span></td>
                </tr>
            `;
        }).join('');

    tableBody.innerHTML = projectsToDisplay;

    renderChart(hustleData.subProjects);
}

function renderChart(projects) {
    const ctx = document.getElementById('revenueChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: projects.map(p => p.name),
            datasets: [{
                label: 'Revenue by Project ($)',
                data: projects.map(p => calculateTotal(p)),
                backgroundColor: ['#4CAF50', '#2196F3', '#FFC107']
            }]
        }
    });
}

try {
    renderDashboard();
} catch (error) {
    console.error("Dashboard failed to load:", error);
    document.body.innerHTML = "<h1>Something went wrong. Please check the console.</h1>";
}