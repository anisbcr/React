const names = [
    "Alice", "Bob", "Charlie", "David", "Eve", 
    "Frank", "Grace", "Heidi", "Ivan", "Judy"
];

document.getElementById('generate').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];
    document.getElementById('name-display').textContent = randomName;
});
