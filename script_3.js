function pyramid(n) {

    for(let i = 1;  i<=n; i++){
        a = " ".repeat(n-i);
        b = "#".repeat(i);
        console.log(a + b);
    }

  }

n = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
pyramid(n);