This examination is worth 3 credit (3hp) and will test the following objective:
* describe a web browsers diffrent internal components and their interactions including browser security mechanisms
* Create web applications were JavaScript, HTML and CSS have clear roles and are clearly separated
* stor and with asyncronous communication, transfer data with for the task appropriate data format



### Preperation
Read the book...
* Labby message
* Hello Ajax
* Web storage



#### Vagrant
* Install Virtual Box
* Install Vagrant
* mkdir, clone repro
* vagrant up
* vagrant ssh, cd /vagrant

#### Scaffolding
* gulp
* gulp serve


### The assignment
Inledning

Denna laboration kommer att fokusera på kommunikation mot externa tjänster tillsammans med asynkron programmering.

##Mål
Efter laborationen kommer du ha god förståelse för att asynkront läsa och skriva data till en extern tjänst (API) samt att hantera detta i ett asynkront flöde. Vidare kommer du att få en orientering om REST och öka din förståelse för HTTP-metoderna GET och POST.

###Strict mode
Samtliga inlänkade javascriptfiler ska använda ES5 strict-mode. Av denna anledning ska strängen:
"use strict";
placeras överst i varje .js-fil.

###Observera
För att bli godkänd på laborationen ska din källkod följa den standard vad det gäller kommentering, val av variabelnamn m.m. som gåtts igenom på föreläsning. Ditt Javascript måste även fungera enligt de krav som finns beskrivna i denna laborationshandledning.

För att kunna genomföra denna laboration måste du vara förberedd innan du går på handledningstillfället, det är inte förbjudet, utan rekommenderat, att göra laborationen i förväg.

Vid fuskmisstanke lämnas misstankar samt berörda dokument över till universitetets disciplinnämnd.

Läs igenom hela laborationshandledningen innan du påbörjar laborationen.

##Beskrivning av uppgiften

Du ska skapa en applikation i vilken användaren kan svara på ett antal frågor. Svarar användaren rätt så tas man vidare till nästa fråga och svara man fel så får man reda på detta och får möjligheten att svara igen. I grundutförande ska applikationen hålla reda på hur många felaktiga svar man givit för varje fråga och när samtliga frågor har besvarats så ska resultatet presenteras där det framgår hur många försök man behövde för att klara varje fråga.

Applikationen ska vara en så kallad SPA (single page application).

Frågorna som ska besvaras finns på en extern server och nås via ett REST-api.

Adress till servern: http://vhost3.lnu.se:20080
Koden som ligger till grund för servern inklusive installationsanvisning: https://github.com/thajo/AjaxAssignment (Detta är till för dig som vill testa på att själv installera servern och köra den lokalt. Inte nödvändigt men lärorikt)
Sökväg till första frågan: /question/1
Förstå miljön och vad du ska göra.

Det första vi måste göra är att förstå hur API:t som vi fått på adressen ovan fungerar. Du kan om du vill själv testa att i webbläsaren skriva in adressen till första frågan och se vad du får för resultat tillbaka (Använd utvecklingsverktyget i webbläsaren och titta på nätverkstrafiken). I resultatet finns det en beskrivning på hur du gör för att gå vidare. Testa runt och fundera på hur du ska bygga upp din applikation. Vilka http-metoder behöver du använda för att kontakta API:et? Hur ska svaren på frågorna skickas tillbaka? Kanske finns det någon form av dokumentation tillgänglig för API:et?

Vad du behöver ha klart för dig innan du börjar koda:

Hur får jag tag i frågan som användaren ska svara på?
Hur skickar jag tillbaka svaret på frågan till API:et?
I vilket format ska frågan skickas tillbaka?
Uppgift
Skapa nu din applikation genom att skapa lämpliga filer i katalogen "4-thequiz" i ditt laborationsrepositorie. Beskrivningen ovan bör vara nog för att förstå hur applikationen ska fungera.

Tänk på
Tänk på att skriva din applikation så generell så att den kan hantera förändringar i datan som ligger till grund för API:et. T.ex. så är det ju inte säkert att de frågenummer som finns idag kommer att gälla även framöver eller att antalet frågor är detsamma framöver som nu. Kanske kommer det att tillkomma frågor, eller tas bort frågor. Vi får dock utgå ifrån att första frågans nummer alltid är 1. (Även om det är bra om det går enkelt att justera i koden)

Lycka till!

Kontrollera uppgiftens krav (bocka av)

Du har ingen javascript-kod i HTML-koden, varken i HTML-dokumentet eller i den genererade html-koden.
Sidan laddas aldrig om utan frågorna dyker upp i gränssnittet "asynkront".
Om användaren svarar fel på en fråga så visas detta tydligt
Applikationen presenterar i slutet hur många försök man behövde på de olika frågorna.

### Finishing up
Push to GH
Publish on digital ocean or other web host at your service

## The examination
During the examination you should be able to:
* Explain your code and structure of the application
* Explain what AJAX is and how it's used in web applications
* Explain what the DOM is nad how you can manipulate
* Explain security issues that occur in the assignment