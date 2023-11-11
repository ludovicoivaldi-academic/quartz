---
title: Reticoli
---

# {{ $frontmatter.title }}

## Richiami

::: tip DEF &emsp; Insieme parzialmente ordinato
Un insieme parizalmente ordinato è una coppia $(S, \leq)$\
dove $S$ è un insieme e $\leq$ è una relazione d'ordine su S
:::

::: tip DEF &emsp; Insieme totalmente ordinato
Un insieme totalmente ordinato è un insieme p.o. dove la relazione d'ordine è totale, cioè ogni coppia di elementi è comparabile 
:::

#### Esempi

- Sia $A$ un insieme qualsiasi.\
  $\mathcal{P}(A)$ con la relazione di sottoinsieme $\subseteq$ è un insieme parzialmente ordinato

- $\mathbb{Z}^2$ con la relazione:
  ::: center
  $(j, k) \leq (l, m) \iff 
  \begin{cases} 
    j \leq l \\ k \leq m
  \end{cases}$
  :::

  forma un insieme parzialmente ordinato

- $\mathbb{R}$ con l'ordinamento canonico è totalmente ordinato

## Reticolo come insieme p.o.

::: tip DEF &emsp; Reticolo
Un reticolo è un insieme parzialmente ordinato $(L, \leq)$\
dove ogni coppia di elementi ammette estremo superiore e inferiore
:::

::: tip DEF &emsp; Catena
Sia $(S, \leq)$ un insieme parzialmente ordinato,\
un sottoinsieme $C$ si dice catena se $(C, \leq_C)$
è totalmente ordinato
:::

::: warning OSS
Una catena è sempre un reticolo:\
$inf$ e $sup$ sono rispettivamente l'elemento maggiore e quello minore
:::

## Reticolo come struttura algebrica
//per adesso non mi interessa//

## Reticolo dei sottogruppi

Preso un gruppo qualsiasi, è spesso conveniente studiare i suoi sottogruppi per capirne meglio la struttura ( sottogruppi di Sylow, normali, ... ).

Risulta quindi pratico rappresentare i sottogruppi come struttura di reticolo.

Questo può essere ulteriormente arricchito per esempio raffigurando per livelli sottogruppi dello stesso ordine e esprimendo gli ultimi in termini di generatori.

### Esempi

- Reticolo dei sottogruppi di $D_4 = \langle r, f \mid r^4, s^2 , (rs)^2\rangle$ :

<image-dark imgUrl="https://quicklatex.com/cache3/11/ql_b549955c4012f62b0c0051643ddf8e11_l3.png"/>

La seguente proposizione giustifica quanto detto

::: danger PROP
Sia $G$ un gruppo,\
Sia $S \coloneqq \{H \subseteq G : H \text{ è sottogruppo} \}$ l'insieme dei sottogruppi di $G$.\
$\implies S$ è un reticolo con la relazione di sottoinsieme
:::

::: details Dimostrazione
Basta osservare che presi $S \text{ e } S'$ sottogruppi:

- $\text{inf}\{S, S'\} = S \cap S'$
  dato che l'intersezione è il più grande sottogruppo contenuto in entrambi $S \text{ e } S'$
- $\text{sup}\{S, S'\} = \langle S, S' \rangle$ dato che il sottogruppo generato da $S \text{ e } S'$ è il più piccolo sottogruppo che contiene entrambi
  :::

::: tip DEF &emsp; Reticolo dei sottogruppi
Chiameremo la coppia $(S, \subseteq)$ il **reticolo dei sottogruppi di $\mathbf{G}$**
:::

