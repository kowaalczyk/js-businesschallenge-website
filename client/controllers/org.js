var hsbc = angular.module('Hsbc');

hsbc.controller('OrgController', ['$scope', function($scope) {
    console.log('Organizator controller is loaded.');

    $scope.orgPath = 'img/org/';

    $scope.getOrg = function () {
        var org = [
            {
                name: " Studenckie Koło Naukowe Biznesu",
                logo: "sknb.png",
                about: "Najpopularniejsze i najszybciej rozwijające się Koło Naukowe w Szkole Głównej Handlowej w Warszawie. Stanowimy społeczność studentów, którzy poprzez swoją działalność chcą zmieniać otaczający ich świat. Mamy świadomość, że nasza aktywność podczas studiów w Szkole Głównej Handlowej w Warszawie stanowi niezwykle cenne dopełnienie dla nauki i pracy zawodowej. To właśnie dzięki kołowym projektom poznajemy niezwykłych i inspirujących ludzi oraz zdobywamy bezcenne doświadczenia i praktyczne umiejętności.",
                website: "http://www.sknbiznes.pl/"
            },
            {
                name: "Szkoła Główna Handlowa w Warszawie",
                logo: "sgh.png",
                about: "Szkoła Główna Handlowa w Warszawie jest najlepszą uczelnią ekonomiczną w Polsce. Od ponad 100 lat kształci czołowych polityków gospodarczych, kadrę naukową cenioną na zagranicznych uniwersytetach, menedżerów prężnych międzynarodowych korporacji oraz najlepszych analityków w Polsce. Cechą charakterystyczną SGH jest najprężniej działający spośród wszystkich polskich uczelni ruch studentów, którzy łączą się w niezliczone organizacje akademickie oraz koła naukowe. Wspólnie przeprowadzają profesjonalne badania oraz projekty, których budżety nierzadko sięgają dziesiątek tysięcy złotych.",
                website: "http://www.sgh.waw.pl/pl/Strony/default.aspx"
            },
            {
                name: "Fundacja Promocji i Akredytacji Kierunków Ekonomicznych",
                logo: "fpiake.png",
                about: "Jej nadrzędnym celem jest promocja edukacji ekonomicznej wśród uczniów polskich szkół. Jest organizatorem Olimpiady Przedsiębiorczości, Gimnazjalnej Olimpiady Przedsiębiorczości, Tygodnia Przedsiębiorczości, Kafeterii Edukacyjnej, Ekonomicznego Uniwersytetu Dziecięcego, a także twórcą coraz bardziej popularnego certyfikatu YoungMBA. Inicjatorami Fundacji są doświadczeni i poważani pracownicy naukowi SGH, którym zależy na szerzeniu idei przedsiębiorczości pośród młodych Polaków.",
                website: "http://www.fundacja.edu.pl/"
            }
        ];
        $scope.organizatorzy = org;
    };
}]);