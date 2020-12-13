# Harjoitustyö (wv-11) raportti

- **Tekijä:** Tatu Alatalo (n4927)  
- **päivämäärä:** 13.12.2020

**linkit:**
- [Lähdekoodi](https://gitlab.labranet.jamk.fi/N4927/ttms0400-web-visualisointi/-/tree/pages/h11_harjoitustyo)
- [Linkki sivulle](https://n4927.pages.labranet.jamk.fi/ttms0400-web-visualisointi/h11_harjoitustyo/src/)
- [Ajankäyttö-dokumentti](https://gitlab.labranet.jamk.fi/N4927/ttms0400-web-visualisointi/-/blob/pages/h11_harjoitustyo/dokumentaatio/ajankäyttö.md)

## Sisältö
1. [Yleistä](#yleistä)
2. [Ajankäyttö](#ajankäyttö)
3. [Kehitettävää](#kehitettävää)
3. [Arvosana](#arvosana)


### Yleistä

**Teknologiavalinnat perusteluineen:**  
Halusin käyttää node.js:ää ja tehdä npm-projektin jossa opettelisin käyttämään gulpia, koska sen kokeileminen jäi kurssin aikana kokematta. Samalla ajattelin myös, että npm pakettien kautta pystyn laajentamaan lisäkirjastoja tulevaisuudessa, jos haluan laajentaa (esim. javascript-kirjastoja). Bootstrapin asentaminen kävi kätevästi myös sen avulla. Ohessa package.jsonin sisältö:

`  "dependencies": {
    "bootstrap": "^4.5.3",
    "browser-sync": "^2.26.13",
    "gulp": "^4.0.2",
    "gulp-sass": "^4.1.0",
    "jquery": "^3.5.1",
    "popper.js": "^1.16.1"
  },
  "devDependencies": {
    "gulp-clean-css": "^4.3.0"
  }`
browser-sync, gulp-sass, gulp-clean-css ovat gulpin lisäosia. Browser-syncillä sain kehitysympäristössä päivittämään localhostissa muutokset mitä tein sassiin tai html:ään reaaliajassa. Gulp-sassin avulla prosessoitiin css-tiedosto sekä clean-css:n avulla taas minimoitu css. Bootstrap taas vaatii jqueryn, popper.js:n jotta sen javascript toimii. Bootstrapin valitsin, koska se on aiemmin tuttu sekä tiedän sillä olevan natiivisti hyvä selaintuki.

**Yleisiä mietteitä työn kulusta ja mitä tuli opittua:**
Suurimmaksi osaksi käytin bootstrapin omia muotoiluja. Sen avulla saikin nopeasti tehtyä kaikkea hienoa, varsinkin lomakkeet menivät jouhevasti läpi. Lisäksi itselleni tuli uutena se, että bootstrapin omilla luokilla pystyy laittamaan tietyn elementin näkymään tietyillä näyttökoolla. (footer esimerkiksi toimii tässä, sekä etusivun karusellin kuvien lataaminen, lisää ajankäyttödokumentissa).

Isoimmat asiat mitä opin tätä tehdessä oli juuri gulpin gulpfile.js:n tekeminen. Puhuin naapurin ammattikoodarin kanssa tuosta ja hän sanoi, että työelämässä nämä asiat ovat juuri automatisoitu pipelinessa eikä ole tarvinnut itse niihin koskea niin tuntui hyvältä tietää miten tämä toimii tällaisessa ympäristössä. 

Toinen iso asia oli sivuston saavutettavuuden huomiointi. Löysin sattumalta tuon https://wave.webaim.org/ sivuston jossa pystyy testaamaan saavutettavuutta. Ongelmia oli kontrastin kanssa sekä formeista puuttui labeleita. (tästäkin lisää ajankäyttödokumentissa). En nyt äkkiseltään muista, oliko näistä saavutettavuuksista sen kummemmin puhetta tällä kurssilla, mutta tämä oli tosi opettavaista. Varsinkin kontrastit avasi silmiäni asialle, kun herjasi vihreästä success-nappulasta jossa valkoista tekstiä. Kontrastia ei ollut sellaisessa tarpeeksi. Vaihdoin tilalle heleämmän vihreän sekä tumman tekstin.

Kolmantena asiana juuri tuli vahvistettua tuota sivuston optimoinnin tietämystä. Mm. itselleni tuli uutena tuo .webp-tiedosto muoto. Käytin irfan-view:tä jpg-tiedostojen muuttamiseksi webp-muotoon. Skaalautuvat todella hyvin, huomattavasti paremmin kuin jpg.

Neljäntenä asiana, mistä olen ylpeä, oli tuo nuottianimaatio tuossa etusivulla. Sen varjon tekemiseen meni hiukan aikaa, mutta olen itse tosi tyytyväinen siitä miltä se näyttää. Samaan pakettiin voisin myös mainita, että juuri uutena asiana tuli kuinka omalla sass-tiedostolla ylikirjoitetaan bootstrapin oman sass-tiedoston muuttujia.

### Ajankäyttö

**Resursointi (ajankäyttö):**
Ajankäyttö on tarkasti dokumentoituna omassa dokumentissaan [Ajankäyttö-dokumentti](https://gitlab.labranet.jamk.fi/N4927/ttms0400-web-visualisointi/-/blob/pages/h11_harjoitustyo/dokumentaatio/ajankäyttö.md). Siellä on myös hyvin pohdintaa kohdatuista haasteista ja niiden ratkaisuista. Yleisesti ottaen, sain kiitettävästi aikaa kulutettua tämän parissa vaikka tämä viikko 50 alussa poikani olikin kuumeessa enkä saanut niin kellotettua tunteja kuin olisin halunnut. Piti sitten torstaista eteenpäin laittaa tunteja reippaasti että sain aikataulullisesti kiinni. Viikonloppuna sitten piti höllätä, että ehti perheen kanssa viettää aikaa. 

### Kehitettävää

Typografian osalta käytin bootstrapin omia, ainoastaan kaupan logossa käytin omaa fonttia. Ehkä tätä voi miettiä tarkemmin tulevaisuudessa. Sivustolla kyllä käytetään kaikenlaista tekstin-formatointia käyttökohteen mukaisesti. Semanttista html:ää myös käytin, mutta paikoin se voisi olla ehkä tarkempi.

Optimoinnin olisin halunnut viedä pitemmälle, mutta aikaraja tuli vastaan. Omasta mielestäni pääsin kuitenkin ihan hyviin tuloksiin sen suhteen. Ehkä tulevaisuudessa sivuston logon voisi tehdä svg-tiedostona, niin ei tarvitsisi fonttia ladata. Samalla siihen voisi tehdä pienen zoom-efektin. Syntikat/VST-sivun kuvat ovat jpg:nä, ne ehkä voisi muuttaa webp/png-muotoon. Mutta toisaalta, ne ovat aika pieniä, sekä kortit minkä sisällä ne ovat, ovat rajoitettu tiettyyn kokoon. Gulpilla pystyisi varmaan myös tallentamaan tuon minimoidun css-tiedoston omalla nimellään esim. styles.min.css samaan kansioon styles.css-tiedoston kanssa. Tämä jäi nyt ottamatta selville, mutta gulp tallentaa nyt minimoidun omaan kansioonsa css-kansiossa (vaikkakin samalla tiedostonimellä). 

Lisäksi javascriptit olisi voinut lyödä samaan tiedostoon, mutta jostain syystä se ei toiminut kun sitä aiemmin viikolla kokeilin. Jätin sen sitten tuohon muotoon, että on kolme omaa tiedostoa. Lisäksi, sivustolla on paljon css:ää jonka voisi poistaa koska niitä ei käytetä. Tämäkin olisi vaatinut aikaa... Yritin laittaa bootstrapin lataamaan osa kerrallaan styles.scss-tiedostossa, mutta pikaisella kokeilulla vaikutti siltä, että sivusto vaati kaiken ladatuksi että se näkyi oikein. Osa optimoinnista kyllä on serverin puolella, mitä tuota googlen PageSpeed Insights -sivua katselin. "Ota tekstin pakkaus käyttöön", "Käytä tehokasta välimuistikäytäntöä staattisten resurssien jakelemiseen". Näihin en pääse käsiksi.

Mutta mutta, kokonaisuudessa olen tyytyväinen optimointiin ja saavutettavuuden osalta olen hyvin tyytyväinen. 

### Arvosana

Ottaen huomioon työmäärän, mitä olen projektiin käyttänyt antaisin itselleni **arvosanan 5**. Sivusto sisältää paljon sisältöä, käyttöliittymää on mietitty, sivusto näyttää ainakin tekijänsä mielestä tyylikkäältä, sisältää animaatiota sekä edistyneitä teknologioita on käytetty alusta asti. CSS-esiprosessoria on käytetty css-tiedoston luomiseen ja käytetyt muuttujat ovat omissa .scss-tiedostoissaan. Lisäksi otin huomioon tuon saavutettavuuden ja mikä tärkeintä, opin uutta.