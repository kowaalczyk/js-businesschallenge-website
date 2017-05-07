var hsbc = angular.module('Hsbc');

hsbc.controller('EditionController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
  console.log('Edition controller is loaded.');

  $scope.imagePath = "img/";
  $scope.portraitPath = "img/";
  $scope.partnerPath = "img/partners/";
  $scope.teamPath = "img/";

  $scope.getEdition = function(id, callback) {
    var edition_id = $routeParams.id;
    if(edition_id == undefined) {
      if($location.path() == "/zwyciezcy") {
        edition_id = 'zwc';
      } else {
        edition_id = '0';
      }
    }
    console.log(edition_id);

    //setting up proper background image for jumbotron and sections for home page
    var jumboClass;

    //TODO: All data should go into DB after it is installed

    var ed0 = {
      number_id: 0,
      number: "III",
      faqs: [
        {
          number: 1,
          q: "Chciałabym wystartować w Konkursie. Do kogo mam się zgłosić?",
          a: "Nie potrzebujesz zgody dyrekcji, ani nauczycieli przedsiębiorczości. Wystarczy, że zarejestrujesz swój zespół oraz podasz opiekuna merytorycznego."
        },
        {
          number: 2,
          q: "Czy muszę płacić za przystąpienie do Konkursu?",
          a: "Nie, udział w olimpiadzie jest całkowicie darmowy. Organizator nie pokrywa natomiast kosztów dojazdu na etap okręgowy i centralny."
        },
        {
          number: 3,
          q: "Jakie nagrody otrzymują uczestnicy Konkursu?",
          a: "Nagrody rzeczowe oraz praktyki w prestiżowych firmach."
        },
        {
          number: 4,
          q: "Z czego korzystać przygotowując się do Konkursu?",
          a: "Zapraszamy do korzystania ze źródeł wiedzy dostępnych tutaj oraz do nawiązania kontaktu z nauczycielem przedsiębiorczości."
        },
        {
          number: 5,
          q: "W czasie trwania etapu okręgowego lub centralnego biorę udział w innym konkursie. Czy muszę zrezygnować z Konkursu?",
          a: "Nie, Organizator dołoży starań, aby umożliwić wzięcie udziału w eliminacjach w innej lokalizacji, jednak bez zmiany terminu zawodów."
        },
        {
          number: 6,
          q: "Czy mogę być członkiem więcej niż jednego zespołu?",
          a: "Niestety nie. Jeden uczestnik może być członkiem tylko jednego zespołu."
        },
        {
          number: 7,
          q: "Ilu członków może mieć zespół?",
          a: "Zespół może mieć od 3 do 5 członków."
        },
        {
          number: 8,
          q: "Czy zostanie opublikowany klucz odpowiedzi?",
          a: "Tak, klucz odpowiedzi do I etapu zostanie opublikowany po ostatecznym terminie wysyłania rozwiązań zadań."
        },
        {
          number: 9,
          q: "Kto może być mentorem zespołu?",
          a: "Każdy, nie musi nim być nauczyciel przedsiębiorczości, co nie oznacza, że można podać przypadkową osobę. Mentor powinien być zaangażowany w pracę zespołu oraz skory do pomocy w przygotowaniach do Konkursu."
        },
        {
          number: 10,
          q: "Czy drużyna może składać się z uczestników z różnych szkół i miast?",
          a: "Tak, drużyna może składać się z osób z różnych szkół i miast. Okręg, w któym zostanie zarejestrowany zespół będzie wyznaczony na podstawie szkoły lidera."
        }
      ],
      tabsAbout: [
        {
          title: "O konkursie",
          text: "High School Business Challenge jest pierwszym ogólnopolskim konkursem przeprowadzonym w formie case study, skierowanym do uczniów szkół średnich. Efektywne zarządzanie przedsiębiorstwem oraz majątkiem wymaga zdobycia interdyscyplinarnej wiedzy z zakresu finansów, marketingu, psychologii, etyki, zarządzania zasobami ludzkimi oraz zdolności analizy i interpretacji danych. - uczestnicy High School Business Challenge mają okazję zdobyć i wykorzystać taką wiedze w praktyce.",
          img: "work.jpg"
        },
        {
          title: "Zadania w formie case study",
          text: "W High School Business Challenge stawiamy na kreatywność, innowacyjność i umiejętność zastosowania wiedzy w praktyce przez uczestników. Inspirująca i ciekawa formuła konkursu kształtuje zdolność do pracy w grupie i pod presją czasu. Różnorodne zadania sytuacyjne sprawdzają umiejętność analizy, doboru narzędzi wywodzących z się z teorii i wdrażania opracowanych za ich pomocą rozwiązań w praktyce biznesowej. HSBC jest również doskonałą szansą na poznanie codziennych zadań, jakie mogą Was spotkać w różnorodnych dziedzinach biznesu. Ponadto konkurs daje Wam szansę na doskonalenie się w zakresie uniwersalnych umiejętności, takich jak prezentacja profesjonalna czy werbalna obrona pracy. W ramach High School Business challenge będziecie mogli wykazać się w wielu dziedzinach."
        },
        {
          title: "Nagrody warte ponad 15 000 zł",
          text: "W III edycji główną nagrodą jest 10 000 zł. Oprócz tego dla laureatów i finalistów przewidziane są atrakcyjne nagrody rzeczowe.",
          img: "vlo-czek.jpg"
        },
        {
          title: "Rozwój praktycznych umiejętności",
          text: "W High School Business Challenge chcemy promować i rozwijać praktyczne umiejętności, które przydają się w życiu zawodowym i osobistym. Podczas 2 i 3 etapu konkursu organizujemy warsztaty i szkolenia dla zespołów. Są one prowadzone przez profesjonalistów z wielu dziedzin i pomagają nie tylko przygotować się do dalszej części konkursu, ale też sa cennym doświadczeniem na przyszłość i doskonałą okazją do zawarcia nowych znajomości. Oprócz tego, zachęcamy do śledzenia naszej strony na Facebooku, gdzie można znaleźć wiele ciekawych wskazówek i informacji.",
          img: "whiteboard.jpg"
        },
        {
          title: "Zbierz zespół i zarejestruj się do 15 stycznia!",
          text: "Rejestracja jest otwarta do 15 stycznia. Już teraz skompletuj swoją drużynę, z którą weźmiesz weźmiesz udział w High School Business Challenge!",
          button: {
            text: "Formularz rejestracyjny",
            href: "https://goo.gl/forms/cquBl8AyjLgwX8N03"
          },
          img: "teamwork.jpg"
        }
    ],
      partners: [
        { "type" : "partner merytoryczny" , "name" : "EY" , "logo" : "ey.png" , "about" : "EY to światowy lider w zakresie profesjonalnych usług doradczych. Ponad 190 000 specjalistów w zakresie audytu, doradztwa biznesowego, podatkowego i prawnego oraz transakcyjnego, zatrudnionych w 150 krajach, łączy swoją wiedzę i międzynarodowe doświadczenie ze znajomością lokalnych uwarunkowań. EY to również  największa firma doradcza na polskim rynku, zatrudniająca ponad 1800 profesjonalistów w Warszawie, Katowicach, Krakowie, Łodzi, Poznaniu, Wrocławiu i od lutego również w Gdańsku. Poprzez swoje działania ma ambicję budować lepszy świat pracy dla swoich pracowników, klientów i całej społeczności." , "website" : "http://www.ey.com/pl/pl/careers"},
        { "type" : "partner merytoryczny" , "name" : "CIMA Chartered Institute of Management Accountants" , "logo" : "cima.png" , "about" : "Założona w 1919 r. Chartered Institute of Management Accountants (CIMA) jest czołową i jednocześnie największą organizacją zrzeszającą specjalistów z dziedziny rachunkowości zarządczej, liczącą ponad 227 000 członków i studentów w 179 krajach. Kwalifikacja CIMA to mocny atut podczas poszukiwania pracy, ceniony przez pracodawców rekrutujących przyszłych liderów biznesu. W Polsce specjalna ścieżka CIMA oferowana na uniwersytetach ekonomicznych cieszy się dużą popularnością ze względu na jej uniwersalność oraz poważanie u pracodawców z branży finansowej." , "website" : "http://www.cimaglobal.com/Our-locations/Poland/"},
        {
          "type" : "patronat honorowy",
          "name" : "Ministerstwo Rozwoju",
          "logo" : "mr.png",
          "about" : "",
          "website" : "https://www.mr.gov.pl/"
        },
        {
          "type" : "patronat honorowy",
          "name" : "Ministerstwo Edukacji Narodowej",
          "logo" : "men.png",
          "about" : "",
          "website" : "https://men.gov.pl/"
        },
        {
          "type" : "patronat honorowy",
          "name" : "Fundacja Książąt Lubomirskich",
          "logo" : "f-k-l.png",
          "about" : "",
          "website" : "http://www.fundacjaksiazatlubomirskich.pl/index.php/pl/"
        },
        {
          "type" : "partner",
          "name" : "Tavex",
          "logo" : "tavex-logo-mniejsze.jpg",
          "about" : "Tavex jest uznaną firmą finansową, która dostarcza metale szlachetne oraz oferuje usługi wymiany walut oraz płatnicze dla szerokiego kręgu klientów. Współpracują z nami osoby prywatne, klienci o najwyższych dochodach, firmy różnych wielkości a także instytucje finansowe. Tavex prowadzi obecnie w ośmiu europejskich krajach 30 ekskluzywnych kantorów wymiany, które obsługują średnio 1,3 miliona klientów rocznie.",
          "website" : "https://tavex.pl/pl/"
        },
        {
          "type" : "partner",
          "name" : "Universe",
          "logo" : "universe.png",
          "about" : "Polska firma dostarczająca najwyższej jakości sprzęt elektroniczny z całego świata. Marka Smartwatch Universe stworzona jest przez ambitny, młody zespół współtworzący spółkę Greenlight Solutions sp. z o.o. będący podmiotem wyspecjalizowanym w kreowaniu rozwiązań wysokiej technologii. Głównym celem i misją firmy jest pełna satysfakcja klientów z oferowanych produktów na Polskim rynku.",
          "website" : "https://www.smartuniverse.pl/"
        }
      ],
      teams: [
        {
          place: 1,
          team_name: "Papaje 2",
          team_about: "",
          jumboClass: "",
          members: [
            {
              name: "Franciszek Białek",
              about_short: '',
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Jakub Dziadur",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Juliusz Kruk",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Mateusz Gurbiel",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Jan Krasowski",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            }
          ],
          team_portrait: "",
          team_mentor: "Dorota Kolarska"
        },
        {
          place: 2,
          team_name: "Chrobry's Consulting Group",
          team_about: "",
          jumboClass: "",
          members: [
            {
              name: "Maciej Wachowski",
              about_short: '',
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Bartosz Łyskawa",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Jakub Będkowski",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Filip Książczak",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Bruno Bronowicki",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            }
          ],
          team_portrait: "",
          team_mentor: "Andrzej Urban"
        },
        {
          place: 3,
          team_name: "HANZA",
          team_about: "",
          jumboClass: "",
          members: [
            {
              name: "Krzysztof Zalewski",
              about_short: '',
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Bartosz Roman",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Igor Jeznach",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Wojciech Łambucki",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            }
          ],
          team_portrait: "",
          team_mentor: "Danuta Borek"
        },
        {
          place: 4,
          team_name: "Heimdall Consulting",
          team_about: "",
          jumboClass: "",
          members: [
            {
              name: "Wiktor Skowroński",
              about_short: '',
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Jakub Feleszko",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Jan Kruszewski",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Jakub Erdman",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Natalia Sidor",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            }
          ],
          team_portrait: "",
          team_mentor: "Michał Borek"
        },
        {
          place: 5,
          team_name: "Entuzjaści Kawy",
          team_about: "",
          jumboClass: "",
          members: [
            {
              name: "Paweł Sosnowski",
              about_short: '',
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Piotr Ciepliński",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Krzysztof Kropidłowski",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            }
          ],
          team_portrait: "",
          team_mentor: "Szymon Łopocz"
        },
        {
          place: 6,
          team_name: "Dzikie Muchy",
          team_about: "",
          jumboClass: "",
          members: [
            {
              name: "Janusz Pięta",
              about_short: '',
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Maciej Sroczek",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Łukasz Potoczny",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            }
          ],
          team_portrait: "",
          team_mentor: "Marta Helt"
        }
      ],
      setTab: function (tabNr) {
        $scope.currentTab = tabNr;
      }
    };
    var ed1 = {
      number_id: 1,
      number: "I",
      teams: [
        {
          place: 1,
          team_name: "Opole Consulting Group",
          team_about: "Zwycięzcy I edycji HSBC, Opole Consulting Group, składa się z 3 uczniów opolskich liceów oraz jednego licealisty z Poznania. Cała czwórka poznała się w trakcie olimpiad ekonomicznych i postanowiła wziąć razem udział w HSBC.",
          jumboClass: "hsbc-winners-2015",
          members: [
            {
              name: "Michał Kulbacki",
              about_short: '',
              about_long: "Zwycięzca I edycji HSBC. Obecnie student I roku w Szkole Głównej Handlowej. Członek SKN Finansów i Makroekonomii, SKN Spraw Zagranicznych i SKN Badań nad Konkurencyjnością. Udział w HSBC był dla niego niesamowitą przygodą zarówno na płaszczyźnie intelektualnej, jak i społecznej. Pozwolił na rozwinięcie swoich umiejętności, rozwinięcie swojej wiedzy i nawiązania nowych, inspirujących kontaktów. Prywatnie pasjonat polityki, spraw międzynarodowych i muzyki rockowej.",
              portrait: "filler.jpg"
            },
            {
              name: "Michał Radny",
              about_short: "Prezes SKN Biznesu",
              about_long: "Zwycięzca I edycji HSBC. Obecnie student II roku w Szkole Głównej Handlowej na kierunku Finanse i Rachunkowość. Prezes SKN Biznesu w roku akademickim 2016/17. Udział w HSBC zainspirował go do podjęcia działalności w SKN Biznesu, gdzie współorganizował Let’s Start Up! I High School Business Challenge.",
              portrait: "filler.jpg"
            },
            {
              name: "Łukasz Trojan",
              about_short: "",
              about_long: "Zwycięzca I edycji HSBC. Obecnie student II roku w Szkole Głównej Handlowej na kierunku Zarządzanie. Członek SKN Biznesu w roku akademickim 2016/17. Udział w HSBC zainspirował go do podjęcia działalności w SKN Biznesu, gdzie współorganizował Let’s Start Up! 2016 oraz II edycję High School Business Challenge. Prywatnie pasjonuje się piłką nożną.",
              portrait: "filler.jpg"
            },
            {
              name: "Małgorzata Urbanowicz",
              about_short: "",
              about_long: "Zwyciężczyni I edycji HSBC, obecnie studentka II roku studiów w Szkole Głównej Handlowej na kierunku Finanse i Rachunkowość. Radna Samorządu Studentów w kadencji 2016/17. Aktywna członkini SKN Biznesu oraz Zrzeszenia Studentów Polskich, gdzie koordynuje dwa projekty: EKOstudent i MedBiz Days - swoją autorską inicjatywę. Dzięki udziałowi w HSBC nawiązała wartościowe kontakty i poznała ludzi, z którymi współpracuje na codzień w SKN Biznesu. Prywatnie pasjonują ją podróże, taternictwo, medycyna i zdrowe odżywianie.",
              portrait: "filler.jpg"
            }
          ],
          team_portrait: "opole-consulting.jpg",
          team_mentor: ""
        },
        {
          place: 2,
          team_name: "Business Surters",
          members: [
            {
              name: "Alicja Doligańska",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Michał Gren",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Maciej Kieruzal",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Klaudia Pieczyńska",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            }
          ],
          team_portrait: "filler.jpg",
          team_mentor: ""
        },
        {
          place: 3,
          team_name: "The Economists",
          members: [
            {
              name: "Julia Jakubiak",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Jan Kruszewski",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Jan Pielat",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Krzysztof Sęk",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Nina Wieretiło",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            }
          ],
          team_portrait: "filler.jpg",
          team_mentor: ""
        },
        {
          place: 4,
          team_name: "KWADRAT",
          members: [
            {
              name: "Dawid Biernat",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Jakub Czugała",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Agnieszka Jaczewska",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Szymon Kujawa",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Mikołaj Madej",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            }
          ],
          team_portrait: "filler.jpg",
          team_mentor: ""
        },
        {
          place: 5,
          team_name: "Team ZSE1 KRK",
          members: [
            {
              name: "Mateusz Balicki",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Mateusz Hordyński",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Wojciech Krania",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            },
            {
              name: "Anna Sierpacka",
              about_short: "",
              about_long: "",
              portrait: "filler.jpg"
            }
          ],
          team_portrait: "filler.jpg",
          team_mentor: "Patryk Zając"
        }
      ],
      number_of_participants: 2000,
      dates: [
        "data_otw_rejestracji",
        "data_kon_rejestracji",
        "data_wysłania_pytań",
        "data_deadline_1etap",
        "data_wysłanie_kejsów",
        "data_deadline_2etap",
        "data_prezentacji",
        "data_finału początek",
        "data_finału_koniec"
      ],
      partners: [
        {
          type: "partner strategiczny",
          name: "Procter & Gamble",
          logo: "procter-gamble.png",
          about: "",
          website: "http://www.pg.com/pl_PL/"
        },
        {
          type: "partner strategiczny",
          name: "Stypendium im. Lesława A. Pagi",
          logo: "stypendium-pagi.png",
          about: "",
          website: "http://paga.org.pl/projekty/stypendium-im-leslawa-a-pagi/stypendium-im-leslawa-a-pagi"
        },
        {
          type: "partner",
          name: "Fundacja im. Lesława A. Pagi",
          logo: "fundacja-pagi.png",
          about: "High School Business Challenge jest dofinansowywany w ramach projektu Stypendium im. Lesława A. Pagi, którego partnerami są Deloitte, Narodowy Bank Polski, Krajowy Depozyt Papierów Wartościowych SA i Fundacja im. Lesława A. Pagi. Fundacja im. Lesława A. Pagi, została powołana w 2003 by upamiętnić osobę i dzieła tego wybitnego polskiego ekonomisty. Od tego czasu, pod hasłem “Przyszłość. Zróbmy to razem”, realizuje ona liczne projekty edukacyjne, inwestując w młodych liderów i wspierając ich inicjatywy. Fundacja działa również na rzecz umacnianie regionalnego, skonsolidowanego rynku kapitałowego w Europie Środkowo-Wschodniej, do czego dąży we współpracy ze swoim partnerem strategicznym- Giełdą Papierów Wartościowych w Warszawie SA. Zapraszamy do odwiedzenia strony Fundacji i poczytania o innych, współorganizowanych przez nią ciekawych inicjatywach. ",
          website: "http://www.paga.org.pl/"
        },
        {
          type: "sponsor",
          name: "Plusssz Active",
          logo: "plusz.png",
          about: "Plusssz Active to kompozycja aktywnych składników oraz witamin, która łączy w sobie podwójne działanie – ułatwia koncentrację i pobudza pamięć. Zawarta w preparacie kofeina poprawia skupienie uwagi, ułatwia zapamiętywanie oraz zmniejsza senność. Magnez wpływa na układ nerwowy przez co redukuje stres i ogranicza zmęczenie.",
          website: "http://www.plusssz.pl/produkty/plusssz-active"
        },
        {
          type: "sponsor",
          name: "Felix",
          logo: "felix.png",
          about: "Dzięki firmie Felix mieliśmy okazję w przerwie zmagań spróbować ich nowych, jak i sprawdzonych produktów. Felix to jedna z najchętniej wybieranych marek słonych przekąsek z bardzo zróżnicowaną ofertą produktową. Najbardziej znanym produktem marki Felix są orzeszki solone w puszce. Ostatnio, wychodząc naprzeciw oczekiwaniom swoich konsumentów i zapotrzebowania na lżejsze przekąski, marka Felix wprowadziła na rynek nowe bardziej chrupiące Orzeszki z pieca, które nie brudzą rąk oraz Popcorners – chrupiące trójkąty z prażonej kukurydzy, tylko 7kcal każdy.",
          website: "http://www.felixpolska.pl/"
        },
        {
          type: "sponsor",
          name: "Setka. Bar Polski Ludowej",
          logo: "setka.png",
          about: "Bar Polski Ludowej Setka stworzony w scenerii i klimacie dawnego PRL-u to połączenie tradycji, doświadczenia i najwyższej jakości świadczonych usług gastronomicznych na kulinarnym szlaku Wrocławia! Wyjątkowa kompozycja prezentowanych potraw, doskonale wyselekcjonowane składniki oraz profesjonalna i doświadczona kadra ich kulinarnych mistrzów sprawia, że od wielu lat cieszą się zaufaniem swoich klientów a teraz również naszym. Połączenie elegancji i stylu dzisiejszych tradycji z otoczeniem sztuki kulinarnej PRL-u to niezwykła przygoda i wyzwanie, z którym zmierzają się każdego dnia. Zespół Setki to precyzyjnie dobrane grono kucharzy i rzetelnych asystentów, których największymi atutami są dbałość o jakość wykonywanej pracy, punktualność, elastyczność i doświadczenie. Pracują z zaufanymi i sprawdzonymi dostawcami najwyższej jakości produktów, aby zadowolić nawet najbardziej wymagających klientów. Dążą do tego, żeby każde spotkanie na długo pozostało zapamiętane jako wyjątkowe wydarzenie, miejmy nadzieję, że nasze również takie będzie!",
          website: "http://setkabar.com/"
        },
        {
          type: "sponsor",
          name: "Lunch Bar Pokusa",
          logo: "pokusa.png",
          about: "Znakomici kucharze codziennie zapraszają na Obiad Dnia, którym mogą cieszyć się mieszkańcy Krakowa i okolic już w 3 lokalizacjach, jak również po zamówieniu pod wyznaczony adres.",
          website: "https://www.facebook.com/lunchbarpokusa"
        },
        {
          type: "sponsor",
          name: "Plusssz Active Forte",
          logo: "plusz-forte.png",
          about: "Plusssz Active Forte jest polecanych w okresach intensywnego wysiłku psychicznego, szczególnie w czasie zaliczeń oraz egzaminów. Bogaty skład Plusssz Active Forte zawiera aż 3 substancje aktywne: kofeinę, taurynę i inozytol. Wysoka dawka kofeiny pobudzi pamięć, poprawi koncentrację oraz zlikwiduje uczucie senności. Dodatkowy kompleks 10 najważniejszych witamin w dawce 100% dziennego zapotrzebowania w obu produktach, uzupełni niedobory witamin w organizmie. Witaminy B6 i B12 zmniejszą uczucie zmęczenia a witamina C wzmocni odporność.",
          website: "http://www.plusssz.pl/"
        },
        {
          type: "sponsor",
          name: "LA-SAD",
          logo: "la-sad.png",
          about: "Firma LA-SAD to grupa producentów owoców skupiającą członków z sadowniczych zakątków Polski. Ich gospodarstwa od wielu pokoleń specjalizują się w uprawie sadów owocowych. Największą część produkcji stanowią jabłka, lecz w ofercie znajdują się również czereśnie, gruszki, śliwki i wiśnie. Siedziba firmy mieści się w gminie Błędów, zwanej największym sadem Europy.",
          website: "http://www.la-sad.pl/"
        },
        {
          type: "sponsor",
          name: "Business Training",
          logo: "business-training.png",
          about: "Business Training skupia praktyków biznesu, ekspertów, trenerów, coachów dostarczających aktualną wiedzę z zakresu psychologii biznesu oraz ekonomii, pokazują jak wykorzystać potencjał przedsiębiorstwa i ludzi w nim pracujących, pomagają uzyskać najwyższą efektywność przy użyciu minimalnych zasobów. Business Training to zespół pasjonatów z zakresu rozwoju osobistego, którzy prowadzą inspirujące szkolenia, warsztaty w formie coachingu. Firma działa na terenie całego kraju, współpracuje z Uczelniami i przeprowadza projekty szkoleniowe w formie Akademii Menadżera, Akademii Handlowca i Akademii Trenera i Coacha Biznesu.",
          website: "http://www.business-training.edu.pl/"
        },
        {
          type: "sponsor",
          name: "Laser Tag Poznań",
          logo: "laser-tag.png",
          about: "Rozgrywki Laser Tag prowadzone są na terenie XIX-wiecznego Fortu Va w Poznaniu, w jego podziemiach oraz na świeżym powietrzu. Laser Tag, zwany Laserowym Paintballem to sport zespołowy bardzo podobny do klasycznego paintballa. Rolę kulek w Laser Tagu przejmują jednak fale podczerwieni emitowane z karabinu. Następnie są one wychwytywane przez specjalne czujniki noszone przez graczy. Sprawia to, że gra nie powoduje urazów, udział w niej może wziąć każdy, bez względu na predyspozycje i wiek. Zachęcamy do zapoznania się z ofertą, która bez wątpienia zagwarantuje uczestnikom dreszczyk emocji.",
          website: "http://lasertagpoznan.pl/"
        },
        {
          type: "sponsor",
          name: "Klub Odnowa",
          logo: "klub-odnowa.png",
          about: "Klub Odnowa istnieje na rynku od 2011 roku,a jego główną specjalnością są Treningi Stabilizacji Kręgosłupa. Treningi funkcjonalne są idealne dla osób, które prowadzą siedzący tryb życia i zażywają mało ruchu. Długie godziny w szkolnej ławie czy przy biurku z pewnością wpłyną pozytywnie na stan naszej wiedzy, ale na kondycję już nie koniecznie...",
          website: "http://www.odnowa-odchudzanie-trening.pl/"
        },
        {
          type: "sponsor",
          name: "Zamknięci w pokoju",
          logo: "zamknieci-w-pokoju.png",
          about: 'Zamknięci w pokoju" jest rodzajem gry typu Room Escape, ale w rzeczywistości, w realnym pomieszczeniu. Escape room game jest formą rozrywki, w której uczestnicy zostają zamknięci w tematycznych pokojach i mają 60 minut na wydostanie się. Jedynie jako zespół będziecie w stanie rozwiązać liczne zadania i zagadki, które pozwolą Wam odnaleźć klucz do wyjścia.',
          website: "http://www.zamknieciwpokoju.pl/"
        }
      ]
    };
    var ed2 ={
      "_id" : { "$oid" : "5833745f6cd759f587697ed3"} ,
      "number_id" : 2.0 ,
      "number" : "II" ,
      "teams" : [
        {
          "place" : 1.0 ,
          "team_name" : "V LO HSBC TEAM" ,
          "team_about": "Chyba żaden zespół nie ma tak oddanej rzeszy fanów w internecie, jak VLO HSBC Team. I nie chodzi tylko o klikanie „Lubię to” na Facebooku czy trollowanie w komentarzach (do którego Jacek Kałuża zachęca). Czasami są w stanie wydać część kieszonkowego na wsparcie drużyny swojego idola albo na film o niej. VLO HSBC Team, drużyna, której błyskawiczna droga na szczyt i rozrzutny styl życia wzbudziły zainteresowanie CBŚ",
          "jumboClass": "hsbc-winners-2016",
          "members" : [
            {
              "name" : "Jacek Kałuża" ,
              "about_short" : "Lider zespołu, członek stowarzyszenia \"Dziobaki\"" ,
              "about_long" : "Lider zwycięskiej drużyny II edycji High School Business Challenge. Student I roku studiów w Szkole Głównej Handlowej. Aktywny członek SKN Biznesu, SKN Spraw Zagranicznych oraz SKN Badań nad Konkurencyjnością. Współzałożyciel i członek zarządu stowarzyszenia „Dziobaki”. Koordynator tegorocznej edycji High School Business Challenge oraz członek zespołu Dragons Den." ,
              "portrait" : "filler.jpg"
            } ,
            {
              "name" : "Krzyszof Kowalczyk" ,
              "about_short" : "Student informatyki na UW" ,
              "about_long" : "Członek zwycięzkiego zespołu z II edycji i laureat Olimpiady Wiedzy Ekonomicznej. Obecnie studiuje informatykę na Uniwersytecie Warszawskim, oprócz tego aktywnie działa w SKN Biznesu i Klubie Inwestora SGH." ,
              "portrait" : "filler.jpg"
            },
            {
              "name" : "Wojciech Maślakiewicz" ,
              "about_short" : "Student 1 roku na SGH" ,
              "about_long" : "Członek zwycięzkiej druzyny, obecnie student SGH. Wybitny flecista." ,
              "portrait" : "filler.jpg"} ,
            {
              "name" : "Mikołaj Ostrzołek" ,
              "about_short" : "Student ekonomii na UW" ,
              "about_long" : "Obecnie student pierwszego roku Finance and International Investment na WNE UW. Członek samorządu studentów WNE UW w roku akademickim 2016/2017. Intersuje się Data Science oraz Geopolityką." ,
              "portrait" : "filler.jpg"
            } ,
            {
              "name" : "Patryk Włoch" ,
              "about_short" : "" ,
              "about_long" : "" ,
              "portrait" : "filler.jpg"
            }] ,
          "team_portrait" : "vlo.jpg" ,
          "team_mentor" : "Monika Palonek"
        } ,
        {
          "place" : 2.0 ,
          "team_name" : "MAŁE MIKI" ,
          "members" : [
            {
              "name" : "Filip Kwiatkowski" ,
              "about_short" : "" ,
              "about_long" : "" ,
              "portrait" : "filler.jpg"
            } ,
            {
              "name" : "Cezary Blank" ,
              "about_short" : "" ,
              "about_long" : "" ,
              "portrait" : "filler.jpg"
            } ,
            { "name" : "Jakub Gołębiewski" ,
              "about_short" : "" ,
              "about_long" : "" ,
              "portrait" : "filler.jpg"
            } ,
            { "name" : "Kamil Krakowski" ,
              "about_short" : "" ,
              "about_long" : "" ,
              "portrait" : "filler.jpg"
            } ,
            {
              "name" : "Łukasz Grodzicki" ,
              "about_short" : "" ,
              "about_long" : "" ,
              "portrait" : "filler.jpg"
            }] ,
          "team_portrait" : "male-miki.jpg" ,
          "team_mentor" : "Ewa Rashid"
        } ,
        {
          "place" : 3.0 ,
          "team_name" : "LATIMERIE BIZNESU" ,
          "members" : [
            {
              "name" : "Konrad Grabowicz" ,
              "about_short" : "Student 1 roku na SGH" ,
              "about_long" : "" ,
              "portrait" : "filler.jpg"
            } ,
            {
              "name" : "Nikodem Kramarz" ,
              "about_short" : "Student 1 roku na SGH" ,
              "about_long" : "" ,
              "portrait" : "filler.jpg"
            } ,
            {
              "name" : "Mikołaj Jaśkowiak" ,
              "about_short" : "" ,
              "about_long" : "" ,
              "portrait" : "filler.jpg"
            }] ,
          "team_portrait" : "latimerie-biznesu.jpg" ,
          "team_mentor" : "Krzysztof Aszkowski"
        } ,
        {
          "place" : 4.0 ,
          "team_name" : "Papaje" ,
          "members" : [
            {
              "name" : "Jan Krasowski" ,
              "about_short" : "" ,
              "about_long" : "" ,
              "portrait" : "filler.jpg"
            } ,
            {
              "name" : "Jakub Dziadur" ,
              "about_short" : "" ,
              "about_long" : "" ,
              "portrait" : "filler.jpg"
            } ,
            {
              "name" : "Mateusz Gurbiel" ,
              "about_short" : "" ,
              "about_long" : "" ,
              "portrait" : "filler.jpg"
            } ,
            {
              "name" : "Franciszek Białek" ,
              "about_short" : "" ,
              "about_long" : "" ,
              "portrait" : "filler.jpg"
            }] ,
          "team_portrait" : "filler.jpg" ,
          "team_mentor" : "Monika Palonek"
        } ,
        {
          "place" : 5.0 ,
          "team_name" : "The Big Four" ,
          "members" : [
            {
              "name" : "Karolina Gąsior" ,
              "about_short" : "" ,
              "about_long" : "" ,
              "portrait" : "filler.jpg"
            } ,
            {
              "name" : "Agnieszka Ziajka" ,
              "about_short" : "" ,
              "about_long" : "" ,
              "portrait" : "filler.jpg"
            } ,
            {
              "name" : "Katarzyna Pezda" ,
              "about_short" : "" ,
              "about_long" : "" ,
              "portrait" : "filler.jpg"
            } ,
            {
              "name" : "Angelika Czechowska" ,
              "about_short" : "" , "about_long" : "" ,
              "portrait" : "filler.jpg"
            }] ,
          "team_portrait" : "filler.jpg" ,
          "team_mentor" : "Aleksandra Jeż-Pawlak"
        } ,
        {
          "place" : 6.0 ,
          "team_name" : "Hanza" ,
          "members" : [
            {
              "name" : "Krzysztof Zalewski" ,
              "about_short" : "" ,
              "about_long" : "" ,
              "portrait" : "filler.jpg"
            } ,
            {
              "name" : "Bartosz Roman" ,
              "about_short" : "" ,
              "about_long" : "" ,
              "portrait" : "filler.jpg"
            } ,
            {
              "name" : "Wojciech Lambucki" ,
              "about_short" : "" ,
              "about_long" : "" ,
              "portrait" : "filler.jpg"
            } ,
            {
              "name" : "Igor Jeznach" ,
              "about_short" : "" ,
              "about_long" : "" ,
              "portrait" : "filler.jpg"
            }] ,
          "team_portrait" : "filler.jpg" ,
          "team_mentor" : "Danuta Borek"
        }] ,
      "number_of_participants" : 2000.0 ,
      "dates" : [ "data_otw_rejestracji" , "data_kon_rejestracji" , "data_wysłania_pytań" , "data_deadline_1etap" , "data_wysłanie_kejsów" , "data_deadline_2etap" , "data_prezentacji" , "data_finału początek" , "data_finału_koniec"] ,
      "partners" : [
        { "type" : "partner strategiczny" , "name" : "PKP Intercity" , "logo" : "pkp-ic.png" , "about" : "" , "website" : "http://www.intercity.pl/pl/site/o-nas/o-firmie/"} ,
        { "type" : "partner merytoryczny" , "name" : "EY" , "logo" : "ey.png" , "about" : "EY to światowy lider w zakresie profesjonalnych usług doradczych. Ponad 190 000 specjalistów w zakresie audytu, doradztwa biznesowego, podatkowego i prawnego oraz transakcyjnego, zatrudnionych w 150 krajach, łączy swoją wiedzę i międzynarodowe doświadczenie ze znajomością lokalnych uwarunkowań. EY to również  największa firma doradcza na polskim rynku, zatrudniająca ponad 1800 profesjonalistów w Warszawie, Katowicach, Krakowie, Łodzi, Poznaniu, Wrocławiu i od lutego również w Gdańsku. Poprzez swoje działania ma ambicję budować lepszy świat pracy dla swoich pracowników, klientów i całej społeczności." , "website" : "http://www.ey.com/pl/pl/careers"} ,
        { "type" : "partner merytoryczny" , "name" : "CIMA Chartered Institute of Management Accountants" , "logo" : "cima.png" , "about" : "Założona w 1919 r. Chartered Institute of Management Accountants (CIMA) jest czołową i jednocześnie największą organizacją zrzeszającą specjalistów z dziedziny rachunkowości zarządczej, liczącą ponad 227 000 członków i studentów w 179 krajach. Kwalifikacja CIMA to mocny atut podczas poszukiwania pracy, ceniony przez pracodawców rekrutujących przyszłych liderów biznesu. W Polsce specjalna ścieżka CIMA oferowana na uniwersytetach ekonomicznych cieszy się dużą popularnością ze względu na jej uniwersalność oraz poważanie u pracodawców z branży finansowej." , "website" : "http://www.cimaglobal.com/Our-locations/Poland/"} ,
        { "type" : "Konkurs dofinansowany w ramach projektu Stypendium im. Lesława A. Pagi." , "name" : "Stypendium im. Lesława A. Pagi" , "logo" : "stypendium-pagi.png" , "about" : "Stypendium im. Lesława A. Pagi to program grantowy, którego celem jest wspieranie nowatorskich i opartych na wiedzy projektów edukacyjnych i naukowo-badawczych, zwłaszcza w zakresie rynku kapitałowego, prowadzonych przez organizacje studenckie i akademickie koła naukowe uczelni wyższych w całym kraju, a także nieformalne grupy studentów." , "website" : "http://paga.org.pl/projekty/stypendium-im-leslawa-a-pagi/stypendium-im-leslawa-a-pagi"} ,
        { "type" : "partner" , "name" : "Rascal Industry" , "logo" : "rascal.png" , "about" : "Firma Rascal Industry od 2012 roku zaopatruje uczelnie i licea w  bluzy i t-shirty, skutecznie poprawiając wygląd polskiego środowiska akademickiego! Noszenie przez uczniów bluz licealnych to promocja szkoły poza jej murami oraz podkreślenie jej pozycji jako świetnej placówki edukacyjnej, ale też bluzy idealnie odgrywają rolę czynnika integrującego społeczność liceum, wzmacniają poczucie przynależności i dumy z nim związanej zarówno wśród obecnych uczniów, jak i absolwentów. Żadna pamiątka nie przypomina o licealnych latach cieplej niż bluza szkolna. Dzięki doświadczeniu Rascal’a, zdobytego dzięki współpracy z ponad 120 szkołami i uniwersytetami w Polsce, możecie być pewni profesjonalizmu i jakości wykonania swoich bluz. Zapraszamy na stronę internetową Rascal’a i zachęcamy do kontaktu." , "website" : "http://sklep.rascalindustry.pl/"}
      ]
    };
    var teams;
    var currentEdition;

    switch(edition_id) {
      case '0':
        jumboClass = "hsbc-main";
        currentEdition = ed0;
        $scope.currentTab = 0;
            break;
      case '1':
        jumboClass = "hsbc-1";
        currentEdition = ed1;
            break;
      case '2':
        jumboClass = "hsbc-2";
        currentEdition = ed2;
            break;
      case 'zwc':
        jumboClass = "hsbc-main";
        teams = [ed2.teams[0], ed1.teams[0]];
      default:
        jumboClass = "hsbc-main";
    }

    $scope.jumboImageClass = jumboClass;
    $scope.edition = currentEdition;
    $scope.teams = teams;
    //DEBUG console.log($scope.jumboImageClass);
  };

}]);
