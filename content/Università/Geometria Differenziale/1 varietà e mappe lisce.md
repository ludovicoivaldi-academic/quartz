---
title: Varietà e mappe lisce
aliases:
  - lezione 1
tags:
  - geometria-differenziale
  - varietà
  - liscia
---

# Prime definizioni

>[!warning] ATTENZIONE
>Durante il corso $\mathbb{R}^n$ sarà sempre da intendersi come spazio euclideo di dimensione $n$ con topologia euclidea

Vogliamo sfruttare la buona struttura degli spazi euclidei per parlare di differenziabilità e usare alcuni teoremi dell'analisi (+ altre proprietà utili della topologia euclidea), possibilmente estendendole a sottoinsiemi non necessariamente aperti di $\mathbb{R}^n$. 

## Applicazioni lisce

>[!success] DEF &emsp; Applicazioni lisce
>Siano $U \subseteq \mathbb{R}^k, \; V  \subseteq \mathbb{R}^m$ aperti di $\mathbb{R}^k, \; \mathbb{R}^m$ rispettivamente.
>$$
>f: U \longrightarrow V 
>$$
>si dice **liscia** se: $\; f \in C^\infty(U)$.\
>In altre parole se $\forall n \in \mathbb{N}, \; \forall i_1, \dots , i_n \in \{1, \dots , k\}$
>$$
>{\large \exists} \; \frac{\partial^n f}{\partial x_{i_1} \dots \partial x_{i_n}} \in C(U)
>$$
>dove per $n = 0$ in si richiede la continuità della funzione.

Voglio generalizzare il concetto di mappa liscia ad applicazioni non necessariamente definite su aperti, ma non so parlare di derivate parziali in un punto se non ho un intorno contenuto nel dominio.

>[!info] OSS
>Siano $U \subseteq \mathbb{R}^k, \; V \subseteq \mathbb{R}^m$ aperti e sia $f: U \to V$ qualsiasi.
>
>Supponiamo di avere $A \subseteq \mathbb{R}^{k+1}$ aperto con $U \subset A$ (immaginiamo $\mathbb{R}^k = \mathbb{R}^k \times \{0\} \subseteq \mathbb{R}^{k+1}$)
>e $F: A \to \mathbb{R}^m$ liscia t.c. valga:
>$$F(x) = f(x) \quad \forall x \in U$$
>$\implies f$ è liscia e
>$$\frac{\partial^n F}{\partial x_{i_1} \dots \partial x_{i_n}}(x) = \frac{\partial^n f}{\partial x_{i_1} \dots \partial x_{i_n}}(x) \quad \forall x \in U$$
>( $n \in \mathbb{N}, \; i_1, \dots , i_n \in \{1, \dots , k\}$ )
>($F$ è derivata in $\mathbb{R}^{k+1}$ mentre $f$ è derivata in $\mathbb{R}^k$)

Notiamo che $U$ come sottoinsieme di $\mathbb{R}^k$ è aperto e l'operazione di derivazione su $f$ è ben definita, mentre se vediamo $U$ come sottoinsieme di $\mathbb{R}^{k+1}$ non è più aperto, ma riusciamo comunque a trovare le derivate di $f$ guardando $F$.

<iframe src="./Programmi/desmos" name="92bnp3d9dv" width="250" height="250"  style="border: 0px" frameborder=0></iframe> 
&emsp; 
<iframe src="./Programmi/desmos" name="gqtbjto1ay" width="250" height="250" style="border: 0px" frameborder=0></iframe>

Prendiamo spunto da questa osservazione per estendere la definizione di mappa liscia a insiemi non necessariamente aperti.


