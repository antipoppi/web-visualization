# Ajankäyttö-dokumentti ja kommentit

## 07.12.2020 kommenttia

| Päivä | Aikaa meni yhteensä | Total (h) |
| ------ | ------ | ------ |
| 07.12.2020 | 6½h | 6.5h |

Harjoitustyön aloitus. Otin käyttöön npm projektin jossa hyödynnän bootstrappia ja gulppia. [Linkki ohjeeseen jota käytin](https://medium.com/swlh/setting-up-gulp-4-0-2-for-bootstrap-sass-and-browsersync-7917f5f5d2c5). Asensin npm:llä lisäksi bootstrapin tarvitsemat popper.js:n ja jQueryn. Aikaa meni enimmäkseen gulpin tutustumiseen, teinkin oman funktion gulpfile.js:ään jolla siirrän tarvittavat javascript-tiedostot "src/js" kansioon. Olin yllättynyt kuinka kätevä tuo oma sass-tiedosto onkaan, kun importtaa mukaan tuon bootstrapin oman sassin. Samalla testasin myös, miten mediaa käsitellään tuossa omassa sass-tiedostossa. 
- [Kuva 1. Gulp seuraa muutoksia](https://gitlab.labranet.jamk.fi/N4927/ttms0400-web-visualisointi/-/blob/pages/h11_harjoitustyo/dokumentaatio/screenshots/gulp.png)
- [Kuva 2. Esimerkkitestausta](https://gitlab.labranet.jamk.fi/N4927/ttms0400-web-visualisointi/-/blob/pages/h11_harjoitustyo/dokumentaatio/screenshots/testi1.png)
- [Kuva 3. Esimerkkitestausta](https://gitlab.labranet.jamk.fi/N4927/ttms0400-web-visualisointi/-/blob/pages/h11_harjoitustyo/dokumentaatio/screenshots/testi2.png)

Halusin ehdottomasti kokeilla gulppia, kun en sitä kokeillut silloin tehtäviä tehdessä. Hyvinhän se toimii ja sillä ilmeisesti voi sitten optimoida tuon luodun css-tiedoston. Pitää katsoa sitä tuossa viimeistelyssä. Lisäksi kun aloittaa projektin joka käyttää node-moduuleja, siihen pystyy helposti importtamaan uusia node-moduuleja. Harmittavaa kun poikani tuli sairaaksi, niin pääsin aloittamaan vasta iltapäivällä kun kumppanin työpäivä päättyi. Sama juttu huomenna. Onneksi on viikko aikaa vielä...

EDIT: Piti tehdä vielä koko homma uusiksi, koska unohdin initoida koko projektin. :-D  Huomasin tämän, kun asentelin gulp-uglify ja gulp-concatia joilla sain javascriptit sekaisin... Parempi antaa toistaiseksi olla näin miten ne on, kerta ne on jo valmiiksi minimoitu ja niillä pitää olla tietty järjestys jossa ne ladataan. Nämä on näitä optimointihommia, niitä tarkemmin sitten loppuviikosta.

---

## 08.12.2020 kommenttia

| Päivä | Aikaa meni yhteensä | Total (h) |
| ------ | ------ | ------ |
| 08.12.2020 | 4h | 10.5h |

Tänään meni niin myöhään kun pääsin aloittamaan, niin suoritin päivän mittaan ajatustyötä minkälaista layouttia lähden tekemään kunhan koneelle pääsen. Eipä tuossa ollut kuin naputteli menemään vain. Lisäsin alustavan layoutin, joka omasta mielestäni toimii tällaisessa verkkokauppa-tapauksessa. Header, navbar, main ja footer (joka on aina sivun pohjalla). Alustavaa värimaailmaakin mietin, tällä hetkellä se on tuo. Ehkä päädyn kuitenkin lopulta hempeämpiin väreihin, mutta toisaalta tämä luo hyvän kontrastin. Huomasin, että [bootstrapin mixinejä ei tarvitse kaikkia importata](https://getbootstrap.com/docs/4.5/getting-started/theming/#importing), mutta en alkanut ottamaan siitä enempää tälle illalle selvää. Katson sitä huomenna. Sillä ainakin saisi tuon css-tiedoston kokoa pienennettyä huomattavasti.

- [08.12 kuva 1 - mobiilinäkymä](https://gitlab.labranet.jamk.fi/N4927/ttms0400-web-visualisointi/-/blob/pages/h11_harjoitustyo/dokumentaatio/screenshots/081201.png)
- [08.12 kuva 2 - työpöytänäkymä](https://gitlab.labranet.jamk.fi/N4927/ttms0400-web-visualisointi/-/blob/pages/h11_harjoitustyo/dokumentaatio/screenshots/081202.png)

Poika oli vielä tänään kuumeessa, niin huomenna pääsee taas aloittamaan vasta illalla... Kaikki ei aina mene niinkuin on suunnitellut, mutta uskon, että tästä hyvä tulee.

EDIT: luin vielä puoli tuntia bootstrapin dokumentaatiota. Huomasin, että nuo varjotkin saa luotua suoraan bootstrapilla...

---

## 09.12.2020 kommenttia

| Päivä | Aikaa meni yhteensä | Total (h) |
| ------ | ------ | ------ |
| 09.12.2020 | 6½h | 17h |

Tänäänkin meni myöhään ennenkuin pääsin aloittamaan. Tein svg-tiedostoja mm. ostoskärryn tyhjänä sekä täytenä ja nuottikuvan. Löysin [svg optimizer](https://github.com/svg/svgo) nimisen node.js paketin jonka asensin ja testasin. Hyvin ainakin pelkisti inkscapella tehdyt tiedostot pieniksi. 
 Sain laitettua ostoskorin kuvan ostoskori-tekstin tilalle ja animoitua nuotit tervetuloa tekstin alle. Minulla oli suuria ongelmia kun yritin saada hover-toiminnon toimimaan ostoskorin päälle niin, että svg:n väri muuttuisi. Yritin hue-rotatella vaikka ja kuinka, mutta ilmeisesti se ei toimi jos ei ole mitään "täytettä" kuvassa. Ostoskori koostuu siis pelkistä stroke-vedoista. Muutin sitten niiden värin ihan testimielessä hover-toiminnolla... Se tuntui sentään toimivan. Nuottien animointi onnistui hyvin omasta mielestäni ja näyttääkiin sopivalta. Ehkä mietin vielä tuon karusellin kohtaloa, onko se liikaa etusivulla tuon nuotin lisäksi? Huomenna alan tekemään tuotteille omia sivuja sekä ostoskoria. Poika menee huomenna hoitoon, niin pääsen aloittamaan aamupäivällä.

- [Kuva 1 - työpöytä](https://gitlab.labranet.jamk.fi/N4927/ttms0400-web-visualisointi/-/blob/pages/h11_harjoitustyo/dokumentaatio/screenshots/091201.png)
- [Kuva 2 - mobiili](https://gitlab.labranet.jamk.fi/N4927/ttms0400-web-visualisointi/-/blob/pages/h11_harjoitustyo/dokumentaatio/screenshots/091202.png)
- [Kuva 3 - svgo toiminnassa](https://gitlab.labranet.jamk.fi/N4927/ttms0400-web-visualisointi/-/blob/pages/h11_harjoitustyo/dokumentaatio/screenshots/091203.png)

---

## 10.12.2020 kommenttia

| Päivä | Aikaa meni yhteensä | Total (h) |
| ------ | ------ | ------ |
| 10.12.2020 | 8.5h | 25.5h |

Paljon tuli tänään tehtyä. Paljon ahaa-elämyksiä, mm. viimeisimpänä karuselliin lisäsin kuvia ja googlen [pagespeed insights](https://developers.google.com/speed/pagespeed/insights/) neuvoi muuttamaan jpg-kuvat [WebP](https://fi.wikipedia.org/wiki/WebP) kuviksi. Todella hyvin skaalaa noita 1000px kuvaa isommallakin resoluutiolla! Bootstrapin avulla onnistui muuttamaan suoraan html:ssä [elementtien näkyminen tietyillä näyttökokoilla](https://getbootstrap.com/docs/4.5/utilities/display/). Lisäsin uuden hakuboxin uuteen navbariin headerin alapuolelle, tämä uuteen navbariin, niin siihen voi lisätä lisää uusia nappeja jne. jos tarve tulee. Opettajalta tuli kommenttia, että semanttinen html on unohtunut. Korjailin niitä joka leiskaan. Tehokas päivä, paljon tuli uutta tehtyä.

**päivän uutuudet**

- headerin sisäll euusi navbar, jossa haku. (mahdollista lisätä jotain muutakin, jos tarvetta)
- html:ää muokattu semanttiseksi  
- otsikot navbariin päätetty (etusivu, syntikat, VST ja tietoa meistä)
- karuselliin lisätty kuvia

**uusia näkymiä:**

- tietosuojalausunto ([Mallia otettu täältä](https://www.innowise.fi/fi/gdprn-mukainen-rekisteri-ja-tietosuojaselosteen-malli/))
- tyhjä ostoskori
- hakutulos
- syntikat

---

## 11.12.2020 kommenttia

| Päivä | Aikaa meni yhteensä | Total (h) |
| ------ | ------ | ------ |
| 11.12.2020 | 9½h | 35h |

Tänään otin ja päivitin footerin kokonaan uusiksi. Sisältää nyt linkit "tietoa meistä"-, toimitusehdot-, tietosuojalauseke-, yhteydenotto-sivuille. Lisäksi mahdollisuus tilata uutiskirje (joka ohjaa onnistui sivulle). Lisäksi päivitin karuselliin kuvat. Editoin vähän syntikkasivua (sisältää nyt uutuuden sekä tarjouksen). Yhteydenottolomake skaalautuu nätisti, ehkä vähän formin ulkonäköä voisi hioa. Toisaalta se näyttää omasta mielestäni ihan hyvältä näinkin. Huomenna ajattelin mockata ostoskorin, sekä sitä seuraavan tilausvahvistussivun. Todennäköisesti teen myös tuota syntikkasivua vastaavan VST-sivun. Pitää katsoa ajankäytön kannalta vielä, että teenkö yksittäiselle tuotteelle omaa sivua. Riippuu vähän kauanko menee aikaa, että olisiko se sitten sunnuntain homma. Pitää ehkä vielä miettiä tuota värimaailmaa ja ehkä fontteja. Mm. Yrityksen logo voisi ihan hyvin olla svg tai sitten sille jokin oma hieno fontti. Vielä on hommaa, mutta hieno tästä tulee :smile:

EDIT: Testasin sivua saavutettavuus-sivustolla https://wave.webaim.org/ ja siellä sain ilmoituksia, että ei ole tarpeeksi kontrastia. Niin etsin sivun https://webaim.org/resources/contrastchecker/ jossa pystyi tarkistamaan ja säätämään värejä niin, että kontrastia löytyy. Katselin pikaisesti nykyistä värimaailmaa ja säädin mm. linkit tummiksi, sekä oranssin sävyä vaalensin huomattavasti. Nyt ei enää herjaa kontrastivirheistä, aiemmin niitä oli 7 ja nyt 0! Huomattava parannus saavutettavuudessa.

**päivän uutuudet**

- footerin päivitys uusiksi
- karuselli valmis

**uusia näkymiä:**
- toimitushdot ([teksti kopioitu täältä](https://fi.nowsupport.vilkas.fi/sisältö/toimitusehtojen-malliteksti))
- yritysesittely ("tietoa meistä"-sivu)
- onnistui-sivu (etusivu onnistui-ilmoituksella)
- yhteydenotto-sivu

**kuvakaappauksia**
- [Kuva 1. - Vanha footer](https://gitlab.labranet.jamk.fi/N4927/ttms0400-web-visualisointi/-/blob/pages/h11_harjoitustyo/dokumentaatio/screenshots/111201.png)
- [Kuva 2. - Uusi footer](https://gitlab.labranet.jamk.fi/N4927/ttms0400-web-visualisointi/-/blob/pages/h11_harjoitustyo/dokumentaatio/screenshots/111202.png)
- [Kuva 3. - Yhteydenottolomake (desktop)](https://gitlab.labranet.jamk.fi/N4927/ttms0400-web-visualisointi/-/blob/pages/h11_harjoitustyo/dokumentaatio/screenshots/111203.png)
- [Kuva 4. - Yhteydenottolomake (mobile)](https://gitlab.labranet.jamk.fi/N4927/ttms0400-web-visualisointi/-/blob/pages/h11_harjoitustyo/dokumentaatio/screenshots/111204.png)
- [Kuva 5. - Saavutettavuus (etusivu)](https://gitlab.labranet.jamk.fi/N4927/ttms0400-web-visualisointi/-/blob/pages/h11_harjoitustyo/dokumentaatio/screenshots/111205.png)

---

## 12.12.2020 kommenttia

| Päivä | Aikaa meni yhteensä | Total (h) |
| ------ | ------ | ------ |
| 12.12.2020 | 5h | 40h |

Tämä päivä meni suurimmaksi osaksi lomakkeita tehden. Tein täydelle ostoskorille sivun jossa navbarissa näkyy ostoskori jossa "laatikoita". Ostoskorin pystyy nollaamaan tai jatkamaan tilausta. Tilaus-sivulla täytetään omat tiedot josta pystyy palaamaan takaisin ostoskoriin, tai jos form on täytetty, jatkamaan tilausta tilausvahvistukseen. Siellä taas tein yksinkertaisen javascriptin jolla pystyy palaamaan edelliselle sivulle painamalla takaisin nappulaa sekä viimeistele tilaus nappi jolla tuote tilataan (joka ohjaa kiitos-sivulle). Isointa ongelmaa oli tänään saada lomakkeet skaalautumaan nätisti eri resoluutioilla. Omasta mielestäni se onnistui ihan hyvin. Tehokas päivä vaikka en niin paljoa pystynytkään tänään käyttämään aikaa mitä ajattelin. Huomenna toinen tuotesivu, visuaalinen viimeistely ja loppuraportti. Jos on aikaa, teen yksittäisen tuotteen näkymän johon pääsee tuotteen nimeä klikkaamalla.

**päivän uutuudet**

- tilauksen pystyy nyt tekemään loppuun asti
- parannettu taas kontrastia saavutettavuuden takia

**uusia näkymiä:**

- ostoskori_full.html
- tilaus.html
- tilausvahvistus.html

**kuvakaappauksia:**

- [Kuva 1. Ostoskori täynnä](https://gitlab.labranet.jamk.fi/N4927/ttms0400-web-visualisointi/-/blob/pages/h11_harjoitustyo/dokumentaatio/screenshots/121201.png)
- [Kuva 2. Tilaus](https://gitlab.labranet.jamk.fi/N4927/ttms0400-web-visualisointi/-/blob/pages/h11_harjoitustyo/dokumentaatio/screenshots/121202.png)
- [Kuva 3. Tilauksen vahvistus](https://gitlab.labranet.jamk.fi/N4927/ttms0400-web-visualisointi/-/blob/pages/h11_harjoitustyo/dokumentaatio/screenshots/121203.png)

---

## 13.12.2020 kommenttia

| Päivä | Aikaa meni yhteensä | Total (h) |
| ------ | ------ | ------ |
| 13.12.2020 | 6½h | 46.5h |

Tänään oli viimeinen päivä tehdä tätä, keskityin korjaamaan saavutettavuuden ongelmat [tämän wave-sivun](https://wave.webaim.org/report#/https://n4927.pages.labranet.jamk.fi/ttms0400-web-visualisointi/h11_harjoitustyo/src/) avulla. Sain kaikki punaiset virheet koko sivustolta pois, josta olen hyvin tyytyväinen. Lisäksi tein virtuaalisoittimille oman sivun (vastaava syntikkasivun kanssa). Lisäksi halusin saada custom-fontin yrityksen logoksi, mutta sen kanssa oli vähän ongelmia. Siinä vaiheessa siis, kun piti alkaa optimoimaan sivua. Sain lokaalisti toimimaan niin, että latasi fontin tietystä kansiosta ja se toimi myös gitlabin pagesissa. Mutta heti kun aloin tutkimaan lighthousella/pagespeed insightilla tuli virhettä, että preload ei toimi (vaikka se oli täysin oikein laitettu). Päädyin sitten laittamaan preloadin google-fontin sivuilta. Valitsin [Amiko fontin ](https://fonts.google.com/specimen/Amiko?sidebar.open=true&selection.family=Amiko:wght@400;600) ja katsoin woff2-tiedoston urlin [apipyynnöstä](https://fonts.googleapis.com/css2?family=Amiko:wght@400;600&display=swap). Olkoot nyt näin, kun aika loppui kesken. Tehokas päivä, vaikka en saanutkaan käyttää niin paljon aikaa kuin halusin viimeistelyyn. Sunnuntai perheen kanssa tuo omat haasteensa... :smile:

**päivän uutuudet**
- minimoitu css
- "Logossa" custom fontti (google-fontti)

**uusia näkymiä:**

- vst.html

**kuvakaappauksia**

- [Kuva 1. Optimoinnin tuloksia mobiili-etusivu (Google PageSpeed Insights)](https://gitlab.labranet.jamk.fi/N4927/ttms0400-web-visualisointi/-/blob/pages/h11_harjoitustyo/dokumentaatio/screenshots/131201.png)
- [Kuva 2. Optimoinnin tuloksia työpöytä-etusivu (Google PageSpeed Insights)](https://gitlab.labranet.jamk.fi/N4927/ttms0400-web-visualisointi/-/blob/pages/h11_harjoitustyo/dokumentaatio/screenshots/131202.png)
- [Kuva 3. Optimoinnin tuloksia (Chromen lighthouse)](https://gitlab.labranet.jamk.fi/N4927/ttms0400-web-visualisointi/-/blob/pages/h11_harjoitustyo/dokumentaatio/screenshots/131203.png)