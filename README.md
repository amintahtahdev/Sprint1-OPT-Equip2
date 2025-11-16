# Projecte MontsiTech – Aplicació Web per a Montsià30

> **Sprint 1 – Versió inicial del projecte**

## 🏗️ Descripció general del projecte

Aquest repositori conté el desenvolupament de la primera versió del web encarregat per **Montsià30**, una associació d’empreses del Montsià que busca impulsar la digitalització de les PIMEs i el compliment dels **Objectius de Desenvolupament Sostenible (ODS)**.

L’empresa **MontsiTech** ha estat contractada per crear un web informatiu i una intranet amb funcionalitats específiques relacionades amb enquestes de digitalització i sostenibilitat.

Aquesta primera entrega correspon al **Sprint 1**, seguint la metodologia Agile.

---

## 📌 Objectius del projecte

* Crear una web corporativa visualment atractiva i fàcilment reaprofitada per altres associacions.
* Facilitar informació sobre **digitalització** i **sostenibilitat**.
* Proporcionar una **intranet** per a treballadors de Montsià30 amb diferents eines i formularis.
* Fer el contingut editable i el codi mantenible.

---

## 🚀 Estat actual del desenvolupament (Sprint 1)

El projecte es troba en la seva primera versió funcional. En aquest sprint s’han completat les següents parts:

### ✔️ Pàgina principal

* Estructura inicial de la pàgina de benvinguda.
* Enllaços visibles i funcionals a les 3 seccions principals:

  * Digitalització
  * Sostenibilitat (sense detalls encara)
  * Intranet

### ✔️ Secció Digitalització

* Implementació de l’apartat amb estructura completa.
* Carrusel funcional amb el contingut de la *Guia de suport a la digitalització del comerç i mercat Amposta (2024)*.
* Formularis base per a:

  * Sol·licitar més informació.
  * Fer suggeriments.

### ✔️ Intranet – Versió inicial

* **Pàgina de registre** amb validacions:

  * Contrasenya segura (8+ caràcters, majúscules, minúscules i símbols).
  * Usuari amb correu del domini *@montsia30.net*.
* **Pàgina de login** (sense validació real d’usuari en aquest sprint).
* **Llistat d’empreses** extret de fitxers XML.
* Accés a cada empresa i desplegable de tipus d’enquesta.
* Formulari d’autodiagnosi del sector comercial.

### 🕒 Pendent per futurs sprints

* Detall complet de la secció Sostenibilitat.
* Enquestes de sostenibilitat.
* Filtrat, ordenació i anàlisi avançada de dades.
* Implementació completa de la seguretat i validació d’usuari.

---

## 🛠️ Tecnologies utilitzades

* **HTML semàntic**
* **CSS extern** amb estils unificats
* **JavaScript** per integrar capçalera, peu i contingut dinàmic
* **XML** per emmagatzemar empreses i respostes d’enquestes
* **Visual Studio Code** (IDE)
* **GitHub** (CVS)
* Servidor de testeig de Virtualiogs

---

## 📁 Estructura del projecte

```
/projecte-montsiatech
│ index.html
│ digitalitzacio.html
│ sostenibilitat.html (pendent)
│ intranet/
│    ├─ login.html
│    ├─ registre.html
│    ├─ empreses.html
│    └─ enquesta.html
│
├─ components/
│    ├─ header.html
│    └─ footer.html
│
├─ css/
│    └─ styles.css
│
├─ js/
│    └─ main.js
│
├─ data/
│    ├─ empreses.xml
│    └─ respostes.xml
```

---

## 📄 Documents de referència

* Guia Digitalització Amposta (carrusel): disponible a l’enunciat.
* Enquesta d’autodiagnosi: [https://ccam.gencat.cat/ca/serveis/autodiagnosi/](https://ccam.gencat.cat/ca/serveis/autodiagnosi/)
* Requeriments complets del projecte: (veure documentació del centre).

---

## 🤝 Equip i metodologia

* Projecte desenvolupat per l’equip de MontsiTech (estudiants de l’IES Montsià).
* Metodologia **Agile**, treball organitzat per *Sprints*.
* Aquest repositori mostra el progrés del **Sprint 1**.

---

## 🔄 Properes passes

* Completar continguts de Sostenibilitat.
* Ampliar funcionalitats de la intranet.
* Sistema complet d’anàlisi i estadístiques.
* Pla d’accessibilitat i millora UX/UI.

---

## 📝 Nota final

Aquest projecte està en desenvolupament contínu. El README s’actualitzarà a mesura que avancin els següents Sprints.

---

**© 2025 MontsiTech – Projecte educatiu IES Montsià**
