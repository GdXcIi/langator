document.getElementById('languageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const keywords = document.getElementById('keywords').value.split(',');
    const syntax = document.getElementById('syntax').value;
    const extension = document.getElementById('extension').value;

    let output = "# Mots-clés\n";
    keywords.forEach(keyword => {
        output += `${keyword.trim()} = '...';  // Définition du mot-clé\n`;
    });
    output += `\n# Syntaxe\nsyntax = '${syntax}';  // Définition de la syntaxe\n`;

    // Afficher le résultat dans la balise <pre>
    document.getElementById('output').textContent = output;

    // Optionnel : Logique pour télécharger le fichier
    const blob = new Blob([output], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `mon_langage${extension}`;
    link.click();
});
