var hsbc = angular.module('Hsbc');

hsbc.controller('CaseController', ['$scope', function($scope) {
    console.log('Zadania controller is loaded.');
    $scope.imagePath = "img/";
    $scope.caseInit = function () {
        caseData = {
            tabsAbout: [
                {
                    title: "Zagadnienia merytoryczne",
                    text: "High School Business Challenge to unikalne przedsięwzięcie, w którym stawiamy na kreatywność, innowacyjność i umiejętność zastosowania wiedzy w praktyce przez uczestników. Inspirująca i ciekawa formuła konkursu kształtuje zdolność do pracy w grupie i pod presją czasu. Różnorodne zadania sytuacyjne sprawdzają umiejętność analizy, doboru narzędzi wywodzących z się z teorii i wdrażania opracowanych za ich pomocą rozwiązań w praktyce biznesowej. HSBC jest również doskonałą szansą na poznanie codziennych zadań, jakie mogą Was spotkać w różnorodnych dziedzinach biznesu. Ponadto konkurs daje Wam szansę na doskonalenie się w zakresie uniwersalnych umiejętności, takich jak prezentacja profesjonalna czy werbalna obrona pracy. W ramach High School Business challenge będziecie mogli wykazać się w wielu dziedzinach."
                },
                {
                    title: "Podstawy ekonomii",
                    text: "Jedną z kluczowych umiejętności przedsiębiorcy czy też analityka jest rozumienie i interpretacja otaczającej Cię rzeczywistości gospodarczej. Kiedy słyszysz o obniżce stóp procentowych przez bank centralny, zmianie wysokości ceł przez rząd lub zaangażowaniu nowych mocy produkcyjnych przez konkurentów musisz wiedzieć, co oznaczają one dla Twojego biznesu i jak należy na nie zareagować. W takim przypadku konieczna jest znajomość podstawowych praw rządzących gospodarką.",
                    img: "finance.jpg"
                },
                {
                    title: "Własny biznes",
                    text: "Prawdziwa konfrontacja ze światem biznesu następuje, gdy rozpoczynasz działalność na własne ryzyko. Własny biznes to doskonała lekcja praktycznych umiejętności i niezbędnej wiedzy. Czeka Cię wiele wyborów. Od wejścia na rynek, poprzez analizę branży, w której rozpoczniesz działanie, aż po ekspansję, a może i IPO. Będziesz musiał podjąć setki decyzji. Czy masz swój unikalny pomysł i wiedzę, która pozwoli osiągnąć Ci sukces?",
                    img: "notes.jpg"
                },
                {
                    title: "Zarządzanie",
                    text: "Niezależnie od Tego czy kierujesz rodzinnym sklepem spożywczym, czy międzynarodowym koncernem motoryzacyjnym kompetencje w zakresie zarządzania są kluczowe. By Twoja firma działała skutecznie i efektywnie musisz nie tylko zdobyć gruntowną wiedzę, ale też nauczyć się wykorzystywać ją w praktyce. Dlaczego Google pozwala swoim pracownikom spędzać kilkaset godzin rocznie na realizacji ich własnych pomysłów? Co sprawiło, że włoski FIAT zdecydował się nabyć Chryslera? Bieżące zarządzanie przedsiębiorstwem i zdolność rozwiązywania różnorodnych problemów są podstawą dla każdego menedżera.",
                    img: "teamwork.jpg"
                },
                {
                    title: "Finanse i analiza",
                    text: "Żyjemy w czasach, gdy światowy sektor finansowy przerasta kilkukrotnie realne gospodarki.  Każdy ma świadomość szczególnego statusu finansów wobec sfery realnej. Muszą pamiętać o tym również menedżerowie, analitycy i przedsiębiorcy, którzy na co dzień wprowadzają swe firmy w relacje z financial industry. W HSBC nie ominą Cię wyzwania z tego zakresu. Ciekawe sposoby finansowania działalności? Inwestycje na rynku kapitałowym? Być może pojawiła się możliwość przejęcia nowej spółki, która będzie wymagała od Ciebie dogłębnej analizy biznesu? Niewątpliwie akcjonariusze również będą chcieli dowiedzieć się wszystkiego o finansach Twojego przedsiębiorstwa nim zdecydują się zainwestować swoje pieniądze."
                }
            ],
            setTab: function (tabNr) {
                $scope.currentTab = tabNr;
            }
        };
        $scope.content = caseData;
        $scope.currentTab = 0;
    };
}]);