sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'skillsdashboard/test/integration/FirstJourney',
		'skillsdashboard/test/integration/pages/EAsList',
		'skillsdashboard/test/integration/pages/EAsObjectPage'
    ],
    function(JourneyRunner, opaJourney, EAsList, EAsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('skillsdashboard') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEAsList: EAsList,
					onTheEAsObjectPage: EAsObjectPage
                }
            },
            opaJourney.run
        );
    }
);