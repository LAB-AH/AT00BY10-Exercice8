[![Coverage Status](https://coveralls.io/repos/github/LAB-AH/AT00BY10-Exercice8/badge.svg)](https://coveralls.io/github/LAB-AH/AT00BY10-Exercice8)

## Testaus, koodikattavuus ja Coveralls

Tässä projektissa on toteutettu yksikkötestaus **Jestillä** kirjaston funktioiden toiminnan varmistamiseksi. Testaus ja koodikattavuus ajetaan automaattisesti GitHub Actions ‑ympäristössä, ja tulokset raportoidaan **Coveralls‑palveluun**.

### Testausperiaatteet

*   Jokaiselle testatulle `src/`‑kansion tiedostolle on vähintään yksi yksikkötesti.
*   `.internal`‑kansio on rajattu **pois koodikattavuudesta**, koska se sisältää sisäisiä apufunktioita eikä ole osa julkista rajapintaa.
*   Testit kuvaavat **kirjaston todellista nykyistä käyttäytymistä**, eivätkä pakota Lodash‑yhteensopivuutta.
*   Mikäli funktio käyttäytyy eri tavalla kuin Lodashissa, testi on mukautettu vastaamaan toteutusta ja havainto on dokumentoitu erillisenä ongelmana (issue).

### Koodikattavuus

*   Kattavuus kerätään Jestin sisäänrakennetuilla työkaluilla
*   Mukana kattavuudessa: `src/**/*.js`
*   Pois rajattu kattavuudesta: `src/.internal/**`

Nykyinen rivikattavuus on **67 %**, mikä ylittää tehtävässä vaaditun **60 % minimirajan**.

**Huomio:** Coverallsissa näkyvä kokonaiskattavuus on matalampi kuin paikallinen Jestin rivikattavuus, koska Coveralls laskee yhteen rivien lisäksi myös haarojen (branches) ja funktioiden kattavuuden, jotka ovat tässä projektissa tietoisesti osittain testaamatta.

### Coveralls‑raportointi

Projektin testikattavuutta seurataan Coveralls‑palvelussa. Kattavuusraportti päivittyy automaattisesti jokaisen CI‑ajon jälkeen.

🔗 **Coveralls:**  
<https://coveralls.io/github/LAB-AH/AT00BY10-Exercice8>

### Testien ajaminen paikallisesti

Testit ja kattavuusraportti ajetaan komennolla:

```bash
npm test
```


## Virheiden raportointi

Tehtävän aikana kirjastosta löytyneet virheet on raportoitu **GitHub Issues** ‑järjestelmään systemaattisesti testauksen perusteella.

### Raportointikäytäntö

Jokaisesta testauksen aikana havaitusta virheellisestä tai odotuksista poikkeavasta toiminnasta luotiin oma issue. Issue‑raportit noudattavat seuraavaa rakennetta:

*   **Otsikko:** Lyhyt ja kuvaava yhteenveto ongelmasta  
    (esim. *`clamp returns incorrect value for in‑range input`*)
*   **Kuvaus:** Lyhyt sanallinen selitys havaitusta ongelmasta
*   **Toistovaiheet (Steps to reproduce):**  
    Konkreettinen esimerkki kutsusta tai testistä, jolla virhe ilmenee
*   **Odotettu tulos:**  
    Mitä funktion odotettiin tekevän (esim. Lodashin dokumentaation perusteella)
*   **Todellinen tulos:**  
    Mitä funktio palauttaa nykyisessä toteutuksessa
*   **Lisähuomiot:**  
    Mahdollinen maininta siitä, että testi on mukautettu vastaamaan toteutuksen todellista käyttäytymistä

### Suhde yksikkötesteihin

Virheet havaittiin yksikkötestejä kirjoitettaessa. Testejä **ei käytetty kirjaston korjaamiseen**, vaan ne dokumentoivat nykyisen toteutuksen toiminnan. Varsinainen poikkeama odotetusta toiminnasta kirjattiin erillisenä issue‑merkintänä.

### Tavoite

Virheraportoinnin tavoitteena on:

*   dokumentoida testauksen aikana löydetyt toteutuspoikkeamat
*   osoittaa testauksen avulla löytyneitä todellisia ongelmia
*   erottaa selkeästi testaus, virheiden havaitseminen ja mahdollinen jatkokehitys

## Yhteenveto

Testauksen tavoitteena ei ole toteuttaa Lodashia uudelleen, vaan:

*   validoida annetun kirjaston toiminta
*   osoittaa käytännön yksikkötestausosaaminen
*   saavuttaa vaadittu koodikattavuus hallitulla ja ylläpidettävällä tavalla
*   tunnistaa ja dokumentoida toteutuksen poikkeamat testauksen avulla
