## Premessa

Sia $F$ un campo qualsiasi, prendiamo $f \in F[x]$ polinomio **non nullo**: sappiamo che a volte il polinomio si può scomporre nel prodotto di pol. di grado inferiore, mentre altre volte no.

**Ci poniamo 2 domande:**

1. Esiste $K$ campo che contiene tutte le radici di $f$ ?\
   Più correttamente esiste un campo su cui $f$ si scompone nel prodotto di polinomi tutti di grado $\leq 1$ ? ( $f$ si spezza su $K$ )

2. Qualora la riposta alla prima domanda fosse sì.\
   Presa $\{f_i\}_{i \in I} \subset F[x]$ famiglia di polinomi ( non nulli ), è possibile trovare un campo $K$ per cui ogni polinomio $f_i$ si spezza su $K$ ?

In entrambi i casi sarebbe utile considerare il più piccolo campo per cui valgano tali proprietà.

## Definizioni

Prima di tutto definiamo meglio cosa significa che un polinomio si spezza su un campo:

>[!tip]+ DEF
Sia $F$ campo e $f \in F[x] \setminus \{0_F\}$ un polinomio non costante.\
Diremo che $f$ **si spezza su $F$** se tutti i fattori **irriducibili** hanno grado 1.

In altre parole se &ensp; $\exists a, b_1, \dots , b_n \in F: \qquad f(x) = a(x - b_1) \dotsb (x - b_n)$\
con $b_i, b_j$ non necessariamente distinti.
::::

::: warning OSS
Notiamo che $f$ può benissimo essere un polinomio costante, in tal caso non ci sono fattori irriducibili e $f$ si spezza su $F$.
:::

::: warning OSS
Se due polinomi si spezzano su un campo, allora si spezza anche il loro prodotto.
:::

---

A questo punto la definizione di campo di spezzamento diventa più che ragionevole:

:::: tip DEF &emsp; Campo di spezzamento
Sia $F$ campo e $f \in F[x] \setminus \{0_F\}$ polinomio non costante.\
Un estensione $E \supseteq F$ si dice **campo di spezzamento per $f$ su $F$** se:

- $f$ si spezza su $E$: &emsp; $f = a(x - b_1) \dotsb (x - b_n)$ &ensp; [ come da def ]
- $E$ è generato dalle radici di $f$: &emsp; $E = F(b_1, \dots , b_n)$

::::

L'intuizione è che $E$ sia **il più piccolo campo** che spezza $f$: d'altronde se un campo spezza un polinomio, deve contenere almeno le sue radici.

Le radici di un polinomio però dipendono stettamente dal campo preso in considerazione, e quindi possiamo avere campi di spezzamento differenti per estensioni differenti.

Vedremo tra poco che, a meno di isomorfismo, si riesce a dare **unicità** al campo di spezzamento.

## Esistenza e Unicità

Rispondiamo alla prima domanda:

::: danger TEO &emsp; Esistenza del campo di spezzamento
Sia $F$ un campo e $f \in F[x] \setminus \{0_F\}$ polinomio non nullo,\
allora esiste sempre un campo di spezzamento per $f$ su $F$
:::

Per dimostrare il teorema ci serviamo di un lemma molto potente {#lemma-kronecker}

::: danger LEMMA &emsp; di Kronecker 
Sia $F$ campo e $f \in F[x]$ un polinomio **irriducibile**,\
esiste sempre $E \supseteq F$ estensione di campo che contiene almeno una radice di $f$
::: 

:::: details Dimostrazione Lemma
Consideriamo l'ideale $J = (f)_{F[x]}$ , &ensp; $f$ è irriducibile

$\implies J$ è massimale ( su $F[x]$ )\
$\implies F[x]/J$ è un campo

Abbiamo quindi la proiezione al quoziente:

::: center
$\begin{aligned}
   \pi : F[x] &\longrightarrow E \coloneqq F[x]/J \\
   f &\longmapsto f + J
\end{aligned}$
:::

Definiamo $E \coloneqq F[x]/J$ &ensp; e &ensp; $\delta \coloneqq \pi\vert_F : F \to E$\
$\pi$ omomorfismo ( unitario ) di anelli $\implies \delta$ omomorfismo di campi

**OSS**\
Il kernel di $\delta$ è un ideale, ma gli unici ideali in un campo sono quelli banali:

::: center
$\ker \delta \in \{F, {0_F}\}$
:::

Inoltre $\delta$ non è banale: &emsp; $\delta(1_F) = 1_E \neq 0_E$\
$\implies \ker \delta = \{0_F\}$

Allora $\delta$ è un omomorfismo iniettivo, cioè un immersione $F \hookrightarrow E$.\
È allora sufficiente mostrare che il polinomio $\tilde{f} \coloneqq \hat{\delta}(f)$ ammette una radice in $E$[^1], dove:

::: center
$\hat{\delta}: F[x] \longrightarrow E[x]$
:::

è l'omomorfismo dato da &ensp; $\hat{\delta}(a_nx^n) = \delta(a_n)x^n$

---

::: center
$f(x) = f_0 + f_1x^1 + \dots + f_nx^n$ &ensp; per qualche $f_0, \dots , f_n \in F$
:::

---

Notiamo che $\pi(x) \in E$ &ensp; e:

::: center
$\begin{aligned}
   \tilde{f}(\pi(x)) &= \delta(f_0) + \delta(f_1)\pi(x) + \dots + \delta(f_n)\pi(x)^n\\
   &= \pi(f_0) + \pi(f_1)\pi(x) + \dots + \pi(f_n)\pi(x)^n\\
   &= \pi(f_0 + f_1x + \dots + f_nx^n)\\
   &= \pi(f)\\
   &= 0_E
\end{aligned}$
:::

cioè $\pi(x)$ è radice di $\tilde{f}$

::: right
$\blacksquare$
:::

::::

:::: details Dimostrazione Teorema
Procediamo per induzione debole su $n = \delta(f)$:
- $\delta(f)$ = 0: &nbsp; ovvio
- $\delta(f) = n + 1$: &nbsp; Abbiamo due casi:
  - se $f$ **riducibile**: 
    &ensp; $\exist g,h \in F[x] \setminus \{0_F\}: \quad f = g \cdot h \qquad \delta(g), \delta(h) \le n$

    $\xRightarrow[\text{HP}]{\text{Ind}} \quad \exist E \supseteq F$ campo di spezzamento per $g$ su $F$ 

    $\xRightarrow[\text{HP}]{\text{Ind}} \quad \exist L\supseteq E$ campo di spezzamento per $h$ su $E$[^2]

    - $f$ si spezza su $L$ perché $g$ e $h$ si spezzano su $L$
    - $L= E(X_h) = [F(X_g)](X_h) = F(X_g, X_h) = F(X_f)$
    
    dove $X_g, X_h, X_f$ sono rispettivamente le radici di $g, h \text{ e } f$

    $\xRightarrow[\quad]{} \quad L$ è il campo desiderato

  - se $f$ **irriducibile**:
    &ensp; per il [lemma](./03.Campi-spezz-chius-alg.md/#lemma-kronecker) &ensp;
    $\exists K \supseteq F$ estensione, $b \in K: \quad f(b) = 0$

    Considero ora il sottocampo $E = F(b) \subseteq K$:

    $\xRightarrow[\text{Ruffini}]{\text{Teo}} \quad g(x) = (x-b)h(x)$ &ensp; con $h \in E[x] \setminus \{0_E\} \quad \delta(h) \leq n$

    $\xRightarrow[\text{HP}]{\text{Ind}} \quad \exist L\supseteq E$ campo di spezzamento per $h$ su $E$[^2]

    $L$ è il campo desiderato per ragioni analoghe al caso precedente

::: right
$\blacksquare$
:::

::::

---

Prendiamo ora $E_1, E_2$ campi di spezzamento per $f$ su $F$.\
Sia $n = \delta(f)$ il grado del polinomio, sappiamo che:

$E_1 = F(\alpha_1, \dots , \alpha_n) \qquad \text{con } \alpha_1, \dots , \alpha_n \in E_1 : \quad f(\alpha_i) = 0_{E_1} \; \forall i \in {1, \dots , n}$\
$E_2 = F(\beta_1, \dots , \beta_m) \qquad \text{con } \beta_1, \dots , \beta_m \in E_2 : \quad f(\beta_i) = 0_{E_2} \; \forall i \in {1, \dots , m}$

**WLOG** possiamo assumere $n \leq m$.

Chiunque a questo punto sarebbe tentato di costruire un omomorfismo che manda\
$f \mapsto f \; \forall f \in F \quad \text{e} \quad \alpha_i \mapsto \beta_i \; \forall i \in {1, \dots , n}$\
dato che rappresenta il candidato ideale per il nostro isomorfismo.

In realtà riusciamo a dimostrare una proposizione più forte che si basa sulla stessa intuizione:

:::: danger TEO
Siano $F_1, F_2$ campi, &ensp; $\varphi: F_1 \to F_2$ isomorfismo di campi.\
Sia $f \in F_1[x] \setminus \{0_{F_1}\}$ qualsiasi, &ensp; $\hat{f} \coloneqq \hat{\varphi}(f)$[^3].

Abbiamo che presi $E_1, E_2$ campi si spezzamento rispettivamente per $f$ su $F_1$ e per $\hat{f}$ su $F_2$

$\implies \exists\psi: E_1 \to E_2$ isomorphismo di campi t.c. $\psi\vert_F = \varphi$

In altre parole esiste sempre un isomorfismo tra i campi di spezzamento che **estende** $\varphi$
::::

Anche in questo caso ci serviamo di un lemma: {#lemma2}

:::: danger LEMMA
Siano $F_1, F_2$ campi, &ensp; $\varphi: F_1 \to F_2$ isomorfismo di campi.\
Presi $f \in F_1 \setminus \{0_{F_1}\}$ qualsiasi, &ensp; $\hat{f} \coloneqq \hat{\varphi}(f)$.

::: center
$f$ si spezza su $F_1$ &nbsp; $\iff$ &nbsp; $\hat{f}$ si spezza su $F_2$
:::

::::

:::: details Dimostrazione Lemma
Stavolta la dimostrazione è molto facile, basta osservare che:

**OSS**:\
Se $f = g_1 \dotsb g_n$ per qualche $g_1, \dots , g_n \in F_1[x]$\
$\implies \hat{f} = \hat{\varphi}(f) = \hat{\varphi}(g_1 \dotsb g_n) = \hat{\varphi}(g_1) \dotsb \hat{\varphi}(g_n) = \hat{g_1} \dotsb \hat{g_n}$

Inoltre per come è fatta $\hat{\varphi}$ abbiamo che &nbsp; $\delta(g_i) = \delta(\hat{g_i}) \; \forall i \in {1, \dots , n}$\
( in realtà per qualsiasi polinomio )  

Segue immediatamente che se $f$ si fattorizza in polinomi irriducibili tutti di grado 1 ( cioè si spezza su $F_1$ ), allora anche $\hat{f}$ si fattorizza nello stesso modo, e quindi si spezza su $F_2$.

L'altra implicazione vale per generalità di $F_i$ e $f$.

::: right
$\blacksquare$
:::

::::

:::: details Dimostrazione Teorema
Lavoriamo nuovamente per induzione debole ma stavolta su $n = \lvert E_1:F_1 \rvert$:

- $\lvert E_1 : F_1 \rvert = 1$: &ensp; Abbiamo che $E_1 = F_1$
  
  $\implies f$ si spezza su $F_1$\
  $\implies \hat{f}$ si spezza su $F_2$ &emsp; per il [lemma](#lemma2)\
  $\implies E_2 = F_2(X_{\hat{f}}) = F_2$ &emsp; $( X_{\hat{f}}: \text{radici di } \hat{f} )$

  Allora $\varphi$ stesso soddisfa la tesi.
- $\lvert E_1 : F_1 \rvert = n + 1$:
::::

[^1]: dato che $F$ è immerso in $E$, possiamo immaginare di sostituire ogni $x$ con
      $\delta(x)$ e vedere $F$ come un sottoinsieme di $E$.\
      Per essere più formali possiamo definire $E' \coloneqq E \setminus \delta(F) \cup F$ e imponendo che l'applicazione\
      $\psi: E' \to E$ &emsp; data da &emsp; $\psi(x) = \begin{cases}
      x & \text{se } x \in E\\
      \delta(x) & \text{se } x \in F
      \end{cases}$\
      sia un isomorfismo ( è già biettiva ) diamo a $E'$ una struttura di campo, dove $F$ come sottocampo di $E'$ è proprio il campo $(F, +_F, \cdot_F)$.\
      Segue immediatamete che $f$ ammette radice in $E'$ sse $\tilde{f}$ ammette radice in $E$
[^2]: assumendo vero il teorema per polinomi di grado $0, \dots , n$\
      sono autorizzato ad applicare la tesi anche su campi differenti da $F$ data la generalità delle ipotesi.
[^3]: $\hat{\varphi}$ è l'omomorfismo di anelli indotto da $\varphi$,
      come per $\hat{\delta}$ nella dimostrazione del lemma