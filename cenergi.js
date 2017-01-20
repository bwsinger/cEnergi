// Javascript document

$(document).ready(function () {
    console.log("ready");


    var seseme = "<h3>Project Summary</h3><br>       SESEME (Social Energy Sensing Monument) consists of a large metal statue with 4 pillars, 3 separate single-button pedestals, and a website designed for use on mobile devices. Pushing the button on a pedestal signals the statue to change its shape to reflect data, which can represent anything from energy consumption on campus to gender pay inequity. The site’s URL is displayed on the pedestals, and when accessed will allow users to see what information is being represented and explore it in more detail.                 <br><br><a target='_blank' href='http://cenergi.github.io/sesemediagram/index.html'><button>See How it Works</button></a>            <a target='_blank' href='http://seseme.net/'><button>Experience It</button></a>";
    
    var ceed = "<h3>Project Summary</h3><br>       The UC Davis Energy Conservation Office (ECO) developed the Campus Energy Educational Dashboard (CEED) to meet the requirements of a wide range of stakeholders. CEED is a map-based dashboard that shows energy data for campus buildings. Energy use intensity metrics, real-time demand data, and historic data are available for engineers and data analyts. For students and staff, CEED prioritizes usability and aesthetics, provides context for the data, and  layers information in successive levels of detail.                     <br><br><a target='_blank' href='http://ceed.ucdavis.edu/'><button>Visit the Dashboard</button></a>   <br><br> <ul><li>Salmon, K., Sanguinetti, A., Pritoni, M., & Morejohn, J. (2016). The iterative design of a university energy dashboard. In <i>Proceedings of ACEEE 2016 Summer Study on Energy Efficiency in Buildings.</i></li></ul>";
    // var ceed_r = "<h3>Research Summary</h3><br>       We have supported ECO in their iterative design of CEED by conducting user testing. For example, in an online experiment with 287 participants, we discovered that single variable energy use data for campus buildings displayed in a map-based format is rated as more interesting, more fun, and even more trustworthy compared to the same data displayed in a traditional bar graph format, while still being comparable in terms of ease of use and interpretation. However, when an additional variable is added to the map visualization it is more difficult for users to interpret than is a traditional bar chart visualization of the same data.   <br><br> <ul><li>Salmon, K., Sanguinetti, A., Pritoni, M., & Morejohn, J. (2016). The iterative design of a university energy dashboard. In <i>Proceedings of ACEEE 2016 Summer Study on Energy Efficiency in Buildings.</i></li></ul>";
    
    var evexplorer = "<h3>Project Summary</h3><br>       cEnergi's partners at the Plug-in Hybrid & Electric Vehicle Research Center developed EV Explorer, a website that enables users to compare fuel costs for different vehicles based on their own commuting patterns, charging opportunities, vehicle mileage, and local fuel prices. All these inputs can be adjusted by the user for a tailored estimate of annual fuel costs for up to four user-selected vehicles at a time. Default vehicle comparisons promote consideration of plug-in hybrid electric and fully electric vehicles (PEVs). <br><br><a target='_blank' href='http://gis.its.ucdavis.edu/evexplorer/'><button>Explore the Site</button></a>   <br><br>  <ul><li><a target='_blank' href='https://its.ucdavis.edu/research/publications/?frame=https%3A%2F%2Fitspubs.ucdavis.edu%2Findex.php%2Fresearch%2Fpublications%2Fpublication-detail%2F%3Fpub_id%3D2569'>Sanguinetti, A., Nicholas, M. A., Tal, G., & Favetti, M. (2016). <i>EV Explorer: Evaluating a Vehicle Information Tool</i> (No. UCD-ITS-WP-16-01).</a></li></ul>";
    // var evexplorer_r = "<h3>Research Summary</h3><br>       We evaluated EV Explorer through online experimentation, gauging users’ perceptions—before and after using the website—of their current fuel costs, potential savings with PEVs, attitude toward PEV charging, and intention to buy or lease a PEV in the future. Statistically significant changes in each of these variables validate EV Explorer as an educational tool and a persuasive eco-feedback intervention to promote the adoption of PEVs.  <br><br>  <ul><li><a target='_blank' href='https://its.ucdavis.edu/research/publications/?frame=https%3A%2F%2Fitspubs.ucdavis.edu%2Findex.php%2Fresearch%2Fpublications%2Fpublication-detail%2F%3Fpub_id%3D2569'>Sanguinetti, A., Nicholas, M. A., Tal, G., & Favetti, M. (2016). <i>EV Explorer: Evaluating a Vehicle Information Tool</i> (No. UCD-ITS-WP-16-01).</a></li></ul>";

    var thermoostat = "<h3>Project Summary</h3><br>       cEnergi and the UC Davis Energy Conservation Office (ECO) developed a web application called TherMOOstat (cow-themed as cows are iconic to Davis), which allows occupants to report their thermal comfort and satisfaction with indoor temperatures, and to vote for conservative changes in thermostat settings. Facilities Management analyzes TherMOOstat data along with indoor and outdoor temperatures and work orders submitted to optimize thermostat settings and detect system issues for greater efficiency and occupant comfort.           <br><br><a target='_blank' href='http://eco.ucdavis.edu/thermoostat'><button>Visit ECO</button></a>   <br><br><ul><li>Pritoni, M., Salmon, K., Sanguinetti, A., Morejohn, J., & Modera, M. (<i>Under review</i>). Thermal feedback for improved efficiency in university buildings. Submitted to <i>Energy and Buildings</i>, 2016.</li>   <li>Sanguinetti, A., Pritoni, M., Salmon, K., & Meier, A. (<i>Under review</i>). Scaling up a participatory thermal sensing program. Submitted to Energy Research & Social Science.</li>  <li>Sanguinetti, A., Pritoni, M., Salmon, K., & Morejohn, J. (2016). TherMOOstat: Occupant feedback to improve comfort and efficiency on a university campus. . In <i>Proceedings of ACEEE 2016 Summer Study on Energy Efficiency in Buildings</i>.</li></ul>";
    // var thermoostat_r = "<h3>Research Summary</h3><br>       TherMOOstat data have enabled Facilities Management to identify and fix inefficiencies in HVAC systems on campus. cEnergi is currently assessing whether the opportunity to give feedback to Facilities Management via TherMOOstat improves occupant satisfaction with indoor temperatures. We also use TherMOOstat as a platform to evaluate the effectiveness of message framing and persuasive imagery on occupants’ willingness to conserve, as measured by votes to change thermostat settings in an energy-conservative direction.  <br><br><ul><li>Pritoni, M., Salmon, K., Sanguinetti, A., Morejohn, J., & Modera, M. (<i>Under review</i>). Thermal feedback for improved efficiency in university buildings. Submitted to <i>Energy and Buildings</i>, 2016.</li>   <li>Sanguinetti, A., Pritoni, M., Salmon, K., & Meier, A. (<i>Under review</i>). Scaling up a participatory thermal sensing program. Submitted to Energy Research & Social Science.</li>  <li>Sanguinetti, A., Pritoni, M., Salmon, K., & Morejohn, J. (2016). TherMOOstat: Occupant feedback to improve comfort and efficiency on a university campus. . In <i>Proceedings of ACEEE 2016 Summer Study on Energy Efficiency in Buildings</i>.</li></ul>";

    var ecofeedback = "<h3>Project Summary</h3><br>       Eco-driving has been identified as a promising strategy for reductions in fossil fuel consumption and carbon emissions and in-vehicle feedback has been the predominant intervention used to promote eco-driving. Unfortunately, academic research on eco-driving feedbackhas been largely devoid of behavior and design theories. cEnergi assessed eco-driving feedback systems currently available in vehicles sold in the US. We created a typology of in-vehicle eco-driving feedback based on behavioral principles and design theories, which can be used in subsequent comparative research to determine which feedback types are most effective for which behaviors and among which drivers.      <br><br><ul><li>Sanguinetti, A., Park, H., Sikand, S., & Kurani, K. (2017). A Typology of In-Vehicle Eco-Driving Feedback. In <i>Advances in Human Aspects of Transportation</i> (pp. 979-992). Springer International Publishing.</li><li><a target='_blank' href='http://ncst.ucdavis.edu/wp-content/uploads/2014/08/09-03-2015-ECODrivingTrucksPolicyBrief-FINAL.pdf'>Kurani, K., Sanguinetti, A., & Park, H. (2015). “Actual results may vary”: A behavioral review of eco‐driving for policy makers. Policy Brief, National Center for Sustainable Transportation, University of California at Davis, Davis, CA, July, 2015.</a></li><li><a target='_blank' href='http://ncst.ucdavis.edu/wp-content/uploads/2014/08/07-29-2015-NCSTEco-drivingWhite-Paper_FINAL.pdf'>Kurani, K., Sanguinetti, A., & Park, H. (2015). “Actual results may vary”: A behavioral review of eco‐driving for policy makers. White Paper, National Center for Sustainable Transportation, University of California at Davis, Davis, CA, July, 2015.</a></li><li><a target='_blank' href='https://www.youtube.com/watch?v=Ow4OyE6wfGY'>Kurani, K., Sanguinetti, A., & Park, H. (2015). “Actual results may vary”: A behavioral review of eco‐driving for policy makers. Webinar, National Center for Sustainable Transportation, University of California at Davis, Davis, CA, July, 2015.</a></li></ul>";
    
    var triptracker = "<h3>Project Summary</h3><br>       About half of all personal vehicle trips in the US are only three miles or less. Trip Tracker promotes awareness of the impacts of personal transportation choices--focusing on local trips (less than 3 miles). The app provides various metrics (e.g., calories burned, co2 emissions, and fuel usage), builds landscape appreciation, and reinforces users' commitment to change behavior through goal-setting with friends.";
    
    var obdenergy = "<h3>Project Summary</h3><br>       OBDEnergy, developed by Sumayyah Ahmed at cEnergi, is a hardware and software eco-feedback system that aims to increase awareness of environmental impacts of personal driving. It consists of an Android application that communicates with a vehicle engine via a  Bluetooth-enabled OBD-II plug-in  device. The UI has three screens, including a 'Metrics' screen that summarizes trip level data and a 'Graphs' screen that shows metrics accumulated over time (gallons of gas, kilos of carbon emitted, and trees required to offset that carbon).   <br><br>   <ul><li><a target='_blank' href='http://download.springer.com/static/pdf/304/chp%253A10.1007%252F978-3-319-20886-2_37.pdf?originUrl=http%3A%2F%2Flink.springer.com%2Fchapter%2F10.1007%2F978-3-319-20886-2_37&token2=exp=1473210641~acl=%2Fstatic%2Fpdf%2F304%2Fchp%25253A10.1007%25252F978-3-319-20886-2_37.pdf%3ForiginUrl%3Dhttp%253A%252F%252Flink.springer.com%252Fchapter%252F10.1007%252F978-3-319-20886-2_37*~hmac=f68e56e5f2e2c722bc11b490f289d278655c3e0db014b8d230da38648a4bcc0a'>Ahmed, S. & Sanguinetti, A. (2015). OBD Energy: Making metrics meaningful in eco-driving feedback. In <i>Human Computer Interaction International 2015 Conference Proceedings</i>.</a></li></ul>";
    // var obdenergy_r = "<h3>Research Summary</h3><br>       In user testing, twenty-six drivers described their understanding of environmental impacts of driving before and after using the OBDEnergy. Before OBDEnergy, participants discussed impacts in abstract, global terms (pollution, global warming). After OBDEnergy, participants appealed to concrete reference points (gallons of gas, trees required) with calculations and comparisons. We conclude that user-centered eco-driving feedback can contribute to pro-environmental behavior via increased awareness of the concrete environmental impacts of driving.   <br><br>   <ul><li><a target='_blank' href='http://download.springer.com/static/pdf/304/chp%253A10.1007%252F978-3-319-20886-2_37.pdf?originUrl=http%3A%2F%2Flink.springer.com%2Fchapter%2F10.1007%2F978-3-319-20886-2_37&token2=exp=1473210641~acl=%2Fstatic%2Fpdf%2F304%2Fchp%25253A10.1007%25252F978-3-319-20886-2_37.pdf%3ForiginUrl%3Dhttp%253A%252F%252Flink.springer.com%252Fchapter%252F10.1007%252F978-3-319-20886-2_37*~hmac=f68e56e5f2e2c722bc11b490f289d278655c3e0db014b8d230da38648a4bcc0a'>Ahmed, S. & Sanguinetti, A. (2015). OBD Energy: Making metrics meaningful in eco-driving feedback. In <i>Human Computer Interaction International 2015 Conference Proceedings</i>.</a></li></ul>";

    var wvenergy = "<h3>Project Summary</h3><br>       West Village (WV) is a mixed use zero net energy (ZNE) development at UC Davis that has yet to achieve ZNE. cEnergi developed an office energy feedback system at the Plug-in Hybrid & Electric Vehicle (PH&EV) Research Center at WV that consists of a flag ceremony conducted three times per day, featuring a red or green flag raised outside the office to reflect recent consumption in relation to a ZNE performance goal modeled for the office. The flag ceremony is accompanied by a 15 second music clip, The Imperial March (Darth Vader theme song) to mark overconsumption and Eye of the Tiger (Rocky theme song) to celebrate on-target performance.";
    // var wvenergy_r = "<h3>Research Summary</h3><br>       The effectiveness of the flag feedback was evaluated by a follow-up survey and focus group, as well as quantitative analyses of energy consumption before, during, and after the feedback intervention. Statistically significant reduction in average hourly energy consumption was observed during the feedback intervention. The follow-up survey and focus group revealed strong affinity for the feedback system and interesting implications for the design of eco-feedback in the contexts of offices and buildings with renewable on-site energy generation.";

    var greenfly = "<h3>Project Summary</h3><br>       GreenFlyer is a flight search tool that allows travelers to view and compare the CO2 emissions intensities of flights that meet their needs. For most of us, traveling by plane contributes more to our carbon footprint than any other single decision we make. However, the per-person CO2 emissions resulting from different flight selections for the same trip can vary more than 200%! With GreenFlyer, travelers can balance cost, preferences for travel times and airports, and concern for the environment.";
    
    var consciouscook = "<h3>Project Summary</h3><br>       Conscious Cook is a recipe search tool that educates users about the amount of virtual water in each ingredient they use. With the recent severe drought, Californians are becoming more conscious of their water consumption. However, significant sources of household water use are hidden behind the scenes—embodied in the foods we consume. Conscious Cook will also show the carbon footprint associated with recipes and individual ingredients.   <br><br><a target='_blank' href='http://consciouscook.ucdavis.edu/'><button>Visit the Website</button></a>";
    
    var bearexperiment = "<h3>Project Summary</h3><br>       We are studying the relative effectiveness of imagery of local versus global impacts of climate change in the context of eco-feedback. In an effort to find a message about local climate change impacts that is comparable to the iconic polar bear on a melting icecap message, we discovered a story about the grizzly bear, California’s state animal. We crafted an illustrated story for each bear and will be testing their relative effectiveness, among Californians, in terms of perceived seriousness of climate change and commitments to perform energy-saving actions. ";
    
    var farmarproject = "<h3>Project Summary</h3><br>         cEnergi Community Development GSR Kelsea Dombrovski is studying farmers markets as unique human-environment interfaces that have the potential to increase connection between individuals, communities, and natural resources. Farmers markets shorten the geographic, social, and psychological distances between people and their food supply. Farmers markets may also have characteristics that contribute to psychological restoration. Kelsea’s thesis, to be completed this year, will involve a descriptive inventory of site characteristics of farmers markets that have implications for psychological restoration, followed by analyses of survey data from market attendees regarding perceived restoration and environmental and experiential qualities that mediate restorative effects."; 
    
    var hems = "<h3>Project Summary</h3><br>           cEnergi is working with SEE Change Institute on newly executed contract with PG&E to help define their role in home energy management (HEM) technology. cEnergi post-doc Angela Sanguinetti is leading the customer research stream, which includes an online survey of PG&E customers to assess general awareness and knowledge of HEM products and smart home technology more broadly, as well as attitudes toward these technologies, including perceived benefits, barriers, and preferred product features and functionality. We are also partnering with Sears and Target to conduct research at Sear Connected Solutions smart home installation in their San Bruno, CA, store and Target Open House, a cutting-edge smart home technology demonstration store in San Francisco. ";
    
    var hwr = "<h3>Project Summary</h3><br>         In partnership with the Center for Water and Energy Efficiency and WaterSmart, we are exploring how home water reports can inspire not only water-saving behavior, but perhaps also energy-saving behavior. This spillover effect was observed in a large-scale pilot in Burbank, California, and we're looking to replicate and explain the finding in a new pilot in Riverside, California. This project is funded by the California Department of Water Resources.";
    
    var wved = "<h3>Project Summary</h3><br>        As a follow-up to our flag feedback study, we are expanding the West VIllage Energy Feedback project by developing a system of energy dashboards targeting all the energy and transportation research centers in West Village, including a community-level dashboard and four building-level dashboards. They will be stationed in communal, high-traffic areas on large touch-screen monitors. Feedback elements on the dashboard include consumption data disaggregated by end uses, as well as social, historical, and goal-based referents.";
    
    var dbtef = "<h3>Project Summary</h3><br>      Research in the field of environmental psychology has demonstrated that connection to nature promotes pro-environmental behavior. Nature can be defined broadly or understood as the natural resources and processes that sustain a community. Connection to nature can be affective—a felt sense of relatedness/identification with nature, and cognitive—awareness/understanding of the interdependencies between self, community, and nature. At cEnergi, we are developing a transdisciplinary theory to explain how eco-feedback can promote these types of connection to nature. We aim to articulate the key design characteristics of eco-feedback that promote each type of connection and the behavioral functions and mechanisms via which they achieve these effects.";
    
    var maedfs = "<h3>Project Summary</h3><br>     We are currently conducting a meta-analysis to identify the key mediating and moderating variables in eco-driving feedback studies that explain the wide range of effects (from negative fuel savings to over 20%). For example, the few studies that have compared multiple types of feedback suggest it is more effective when it aligns with drivers’ values and goals (e.g., saving money versus reducing emissions) and when it is adaptive (consisting of graduated challenges), but these are each solitary findings. Our meta-analysis will identify similar variables emergent from the entire population of eco-driving feedback studies.  <br><br>   <ul><li>Sanguinetti, A., Park, H., Sikand, S., & Kurani, K. (2017). A Typology of In-Vehicle Eco-Driving Feedback. In Advances in Human Aspects of Transportation (pp. 979-992). Springer International Publishing.</li><li><a target='_blank' href='http://ncst.ucdavis.edu/wp-content/uploads/2014/08/07-29-2015-NCSTEco-drivingWhite-Paper_FINAL.pdf'>Kurani, K., Sanguinetti, A., & Park, H. (2015). “Actual results may vary”: A behavioral review of eco-‐driving for policy makers. White Paper, National Center for Sustainable Transportation, University of California at Davis, Davis, CA, July, 2015.</a></li><li><a target='_blank' href='http://ncst.ucdavis.edu/wp-content/uploads/2014/08/09-03-2015-ECODrivingTrucksPolicyBrief-FINAL.pdf'>Kurani, K., Sanguinetti, A., & Park, H. (2015). “Actual results may vary”: A behavioral review of eco-‐driving for policy makers. Policy Brief, National Center for Sustainable Transportation, University of California at Davis, Davis, CA, July, 2015.</a></li><li><a target='_blank' href='https://www.youtube.com/watch?v=Ow4OyE6wfGY'>Kurani, K., Sanguinetti, A., & Park, H. (2015). “Actual results may vary”: A behavioral review of eco-‐driving for policy makers. Webinar, National Center for Sustainable Transportation, University of California at Davis, Davis, CA, July, 2015.</a></li></ul>";

    var solarde = "<h3>Project Summary</h3><br>     We're supporting the UC Davis 2017 Solar Decathlon team by designing interfaces for connecting residents to water consumption. The current theme of this bi-enniel competition is water efficiency, a crucial and timely topic for Californians. Stay tuned for ground-breaking innovations in consumer-water interfaces!      <br><br><a target='_blank' href='http://solardecathlon.ucdavis.edu/'><button>Explore the Site</button></a>";

    //CHANGE LOGO ON HOVER
    $('#logo').hover(function () {
        console.log("logo hover");
        $('#logo img').attr("src", "img/Logos/logoBanner2.png");
    }, function () {
        $('#logo img').attr("src", "img/Logos/logoBanner.png");

        return false;
    });

    // Change about page logos on hover
    $('#phev').hover(function () {
        console.log("phev hover");
        $('#phev img').attr("src", "img/Logos/phev_2.png");
    }, function () {
        $('#phev img').attr("src", "img/Logos/phev_1.png");
        return false;
    });

    $('#eco').hover(function () {
        console.log("eco hover");
        $('#eco img').attr("src", "img/Logos/eco_2.png");
    }, function () {
        $('#eco img').attr("src", "img/Logos/eco_1.png");
        return false;
    });

    $('#cadwr').hover(function () {
        console.log("cadwr hover");
        $('#cadwr img').attr("src", "img/Logos/cadwr_4.png");
    }, function () {
        $('#cadwr img').attr("src", "img/Logos/cadwr_1.png");
        return false;
    });

    $('#cwee').hover(function () {
        console.log("cwee hover");
        $('#cwee img').attr("src", "img/Logos/cwee_2.png");
    }, function () {
        $('#cwee img').attr("src", "img/Logos/cwee_1.png");
        return false;
    });

    $('#doe').hover(function () {
        console.log("doe hover");
        $('#doe img').attr("src", "img/Logos/doe_2.png");
    }, function () {
        $('#doe img').attr("src", "img/Logos/doe_1.png");
        return false;
    });

    $('#eec').hover(function () {
        console.log("eec hover");
        $('#eec img').attr("src", "img/Logos/eec_2.png");
    }, function () {
        $('#eec img').attr("src", "img/Logos/eec_1.png");
        return false;
    });

    $('#epri').hover(function () {
        console.log("epri hover");
        $('#epri img').attr("src", "img/Logos/epri_2.png");
    }, function () {
        $('#epri img').attr("src", "img/Logos/epri_1.png");
        return false;
    });

    $('#mrpi').hover(function () {
        console.log("mrpi hover");
        $('#mrpi img').attr("src", "img/Logos/mrpi_2.png");
    }, function () {
        $('#mrpi img').attr("src", "img/Logos/mrpi_1.png");
        return false;
    });

    $('#ncst').hover(function () {
        console.log("ncst hover");
        $('#ncst img').attr("src", "img/Logos/ncst_2.png");
    }, function () {
        $('#ncst img').attr("src", "img/Logos/ncst_1.png");
        return false;
    });

    $('#sc').hover(function () {
        console.log("sc hover");
        $('#sc img').attr("src", "img/Logos/seeChange_2.png");
    }, function () {
        $('#sc img').attr("src", "img/Logos/seeChange_1.png");
        return false;
    });

    $('#or').hover(function () {
        console.log("or hover");
        $('#or img').attr("src", "img/Logos/officeResearch_2.png");
    }, function () {
        $('#or img').attr("src", "img/Logos/officeResearch_1.png");
        return false;
    });

    $('#pge').hover(function () {
        console.log("pge hover");
        $('#pge img').attr("src", "img/Logos/pge_2.png");
    }, function () {
        $('#pge img').attr("src", "img/Logos/pge_1.png");
        return false;
    });

    $('#ws').hover(function () {
        console.log("ws hover");
        $('#ws img').attr("src", "img/Logos/waterSmart_2.png");
    }, function () {
        $('#ws img').attr("src", "img/Logos/waterSmart_1.png");
        return false;
    });

    $('#wecc').hover(function () {
        console.log("wecc hover");
        $('#wecc img').attr("src", "img/Logos/wecc_2.png");
    }, function () {
        $('#wecc img').attr("src", "img/Logos/wecc_1.png");
        return false;
    });




    
//NAVBAR BACKGROUND SCROLL TRANSPARENCY
//
//  FIX: NAVBAR BACKGROUND SOMETIMES DISAPEARS
//
//  NOTE: When you reload the page, the navbar considers where ever it is to be the
//  "top" of the page. This causes the navbar to have no background at any point
//  higher than that point on the page.
//
//  NOTE: If this code is reimplemented, make sure to comment out the background-color
//  attribute under "nav" in the CSS file.
//

// var a = $("nav").offset().top;

// $(document).scroll(function() {
//     if ($(this).scrollTop() > a) {   
//        $('nav').css("background", "rgba(221,221,221,0.92)");
//     } else {
//        $('nav').css("background", "transparent");
//     }
// });


    
    
    
    // ICON CAROUSEL
    
    
(function() { // Code by Konstantin Nikkari + Zachary Green (https://teamtreehouse.com/community/topic-text-with-changing-word-jquery-or-css)

    // List your words here:
    var words1 = [
        'Consumer',
        '<img src="img/Icons/Homepage/car2.png" width="50" height="50">',
        '<img src="img/Icons/Homepage/commercial.png" width="50" height="50">',
        '<img src="img/Icons/Homepage/home.png" width="50" height="50">'
        ], i = 0,
         delay = 2;

    setInterval(function() {
        $('#iconChange1').fadeOut( function() {
            var word1 = words1[i=(i+1)%words1.length]
            $(this).html(word1).fadeIn();
            //$(this).css('textColor', 'orange'); // or color of choice

            if (word1 == 'Consumer') {
             delay = 3;
            } else {
             delay = 2;
            }
        });
        
        
    }, delay * 1000);

}) ();
    
    
    
    (function() { //Code by Konstantin Nikkari + Zachary Green (https://teamtreehouse.com/community/topic-text-with-changing-word-jquery-or-css)

    // List your words here:
    var words2 = [
        'Energy',
        '<img src="img/Icons/Homepage/water.png" width="50" height="50">',
        '<img src="img/Icons/Homepage/food.png" width="50" height="50">',
        '<img src="img/Icons/Homepage/gas.png" width="50" height="50">'
        ], i = 0,
         delay = 2;

    setInterval(function() {
        $('#iconChange2').fadeOut( function() {
            var word2 = words2[i=(i+1)%words2.length]
            $(this).html(word2).fadeIn();
            //$(this).css('textColor', 'orange'); // or color of choice

            if (word2 == 'Energy') {
             delay = 5;
            } else {
             delay = 2;
            }
        });
        
        
    }, delay * 1000);

}) ();
    
    
    
    (function() { //Code by Konstantin Nikkari + Zachary Green (https://teamtreehouse.com/community/topic-text-with-changing-word-jquery-or-css)

        // List your words here:
        var words3 = [
            'Interfaces',
            '<img src="img/Icons/Homepage/mobile.png" width="50" height="50">',
            '<img src="img/Icons/Homepage/tactile.png" width="50" height="50">',
            '<img src="img/Icons/Homepage/web.png" width="50" height="50">'
            ], i = 0,
             delay = 2;

        setInterval(function() {
            $('#iconChange3').fadeOut( function() {
                var word3 = words3[i=(i+1)%words3.length]
                $(this).html(word3).fadeIn();
                //$(this).css('textColor', 'orange'); // or color of choice

                if (word3 == 'Interfaces') {
                 delay = 7;
                } else {
                 delay = 2;
                }
            });
            
            
        }, delay * 1000);

    }) ();
    

    // New tooltip code - requires denoting tooltip for each image
    // $('[data-toggle="tooltip"]').tooltip();

    $("img").tooltip({
        placement: "bottom"
    });



// //NAME HOVER IN PROJECT PEOPLE
//     $('#projects p img').hover(function () {
//         console.log("project bio hover");

//         var src = $(this).attr('src');
//         // "img/Students/Justin-Woodjack.jpg"
//         var tarr = src.split('/');
//         // ["img","Students","Justin-Woodjack.jpg"]
//         var file = tarr[tarr.length - 1];
//         // "Justin-Woodjack.jpg"
//         var data = file.split('.')[0];
//         // "Justin-Woodjack"
//         var names = data.split('-').join(' ');

//         console.log(names);

//         var lbl = document.createElement('span');
//         lbl.className = 'tooltip'; //.overlay pos abs
//         lbl.style.left = this.offsetLeft;
//         lbl.textContent = names;
//         this.parentNode.appendChild(lbl);

//         //$('#label').text(names);
//         //$('#label').css('visibility', 'visible');

//     }, function () {
//         //$('#label').css('visibility', 'hidden');
//         var removethese = this.parentNode.getElementsByClassName('tooltip');

//         for (var i = 0; i < removethese.length; i++) {
//             this.parentNode.removeChild(removethese[i])
//             }

//         }).mousemove(function (e) {
//             var mousex = e.pageX - 45; //Get X coordinates
//             var mousey = e.pageY - 280; //Get Y coordinates
//             $('.tooltip').css( {
//                 top: mousey,
//                 left: mousex
//             });

//             return false;
//         });

    

//Lightbox for Projects
    $('.lightbox').click(function () {
        $('.backdrop, .box').animate({
            'opacity': '.70'
        }, 70, 'linear');
        $('.box').animate({
            'opacity': '1.00'
        }, 70, 'linear');
        
        $('.backdrop, .box').css('display', 'block');
        
        
        
        //All Research Blurbs Links
        // Note: Since any clickable object within the bounds of a project box will be a child of the box
        // itself, clicking on said interior object will trigger the onclick action of both the project
        // box AND the interior object with this if-else setup. To keep the actions separate, the 
        // "return false;" lines are added on all sub objects to prevent running both click events. 
        if ( $(this).hasClass('seseme') ) {
            $('.box p').html(seseme);
        }
        else if ( $(this).hasClass('ceed_r') ) {
            $('.box p').html(ceed_r);
            // 'return false' acts like 'break' so creed's project summary isn't also run
            return false;
        }
        else if ( $(this).hasClass('ceed') ) {
            $('.box p').html(ceed);
        }
        else if ( $(this).hasClass('thermoostat_r') ) {
            $('.box p').html(thermoostat_r);
            return false;
        }
        else if ( $(this).hasClass('thermoostat') ) {
            $('.box p').html(thermoostat);
        }
        else if ( $(this).hasClass('evexplorer_r') ) {
            $('.box p').html(evexplorer_r);
            return false;
        }
        else if ( $(this).hasClass('evexplorer') ) {
            $('.box p').html(evexplorer);
        }
        else if ( $(this).hasClass('ecofeedback') ) {
            $('.box p').html(ecofeedback);
        }
        else if ( $(this).hasClass('triptracker') ) {
            $('.box p').html(triptracker);
        }
        else if ( $(this).hasClass('obdenergy_r') ) {
            $('.box p').html(obdenergy_r);
            return false;
        }
        else if ( $(this).hasClass('obdenergy') ) {
            $('.box p').html(obdenergy);
        }
        else if ( $(this).hasClass('wvenergy_r') ) {
            $('.box p').html(wvenergy_r);
            return false;
        }
        else if ( $(this).hasClass('wvenergy') ) {
            $('.box p').html(wvenergy);
        }
        else if ( $(this).hasClass('greenfly') ) {
            $('.box p').html(greenfly);
        }
        else if ( $(this).hasClass('consciouscook') ) {
            $('.box p').html(consciouscook);
        }
        else if ( $(this).hasClass('bearexperiment') ) {
            $('.box p').html(bearexperiment);
        }
        else if ( $(this).hasClass('farmarproject') ) {
            $('.box p').html(farmarproject);
        }
        else if ( $(this).hasClass('hems') ) {
            $('.box p').html(hems);
        }
        else if ( $(this).hasClass('hwr') ) {
            $('.box p').html(hwr_r);
        }
        else if ( $(this).hasClass('wved') ) {
            $('.box p').html(wved);
        }
        else if ( $(this).hasClass('dbtef') ) {
            $('.box p').html(dbtef);
        }
        else if ( $(this).hasClass('maedfs') ) {
            $('.box p').html(maedfs);
        }
        else if ( $(this).hasClass('solarde') ) {
            $('.box p').html(solarde);
        }
        
    });


    $('.close').click(function () {
        close_box();
    });


    $('.backdrop').click(function () {
        close_box();
    });



    function close_box() {
        $('.backdrop, .box').animate({
            'opacity': '0'
        }, 100, 'linear', function () {
            $('.backdrop, .box').css('display', 'none');
        });
    }


    
    
var numSelected = 0;

//Tag Filter for Projects
    //$('.transportation', '.commercial', '.residential') = false;
    
    $('.sidebar li').click(function() {

        //CONSUMER
        if( $(this).hasClass('tra') ) {
            // Toggles the projects as 'selected'
            $('.transportation').toggleClass('selected');
            // Toggles the sidebar icons as 'selected'
            $(this).toggleClass('selected');
            //$('.transportation').insertBefore( $('.proj').first() );
            if( $(this).hasClass('selected') ) {
                numSelected++;
            } else {
                numSelected--;
            }

            filterByTag(numSelected)
        };
        if( $(this).hasClass('res') ) {
            $('.residential').toggleClass('selected');
            $(this).toggleClass('selected');
            if( $(this).hasClass('selected') ) {
                numSelected++;
            } else {
                numSelected--;
            }

            filterByTag(numSelected)
        };
        if( $(this).hasClass('com') ) {
            $('.commercial').toggleClass('selected');
            $(this).toggleClass('selected');
            if( $(this).hasClass('selected') ) {
                numSelected++;
            } else {
                numSelected--;
            }

            filterByTag(numSelected)
        };
        
        //ENERGY
        if( $(this).hasClass('fue') ) {
            $('.fuel').toggleClass('selected');
            $(this).toggleClass('selected');
            if( $(this).hasClass('selected') ) {
                numSelected++;
            } else {
                numSelected--;
            }

            filterByTag(numSelected)
        };
        if( $(this).hasClass('wat') ) {
            $('.water').toggleClass('selected');
            $(this).toggleClass('selected');
            if( $(this).hasClass('selected') ) {
                numSelected++;
            } else {
                numSelected--;
            }

            filterByTag(numSelected)
        };
        if( $(this).hasClass('foo') ) {
            $('.food').toggleClass('selected');
            $(this).toggleClass('selected');
            if( $(this).hasClass('selected') ) {
                numSelected++;
            } else {
                numSelected--;
            }

            filterByTag(numSelected)
        };
        
        //INTERFACES
        if( $(this).hasClass('phy') ) {
            $('.physical').toggleClass('selected');
            $(this).toggleClass('selected');
            if( $(this).hasClass('selected') ) {
                numSelected++;
            } else {
                numSelected--;
            }

            filterByTag(numSelected)
        };
        if( $(this).hasClass('web') ) {
            $('.website').toggleClass('selected');
            $(this).toggleClass('selected');
            if( $(this).hasClass('selected') ) {
                numSelected++;
            } else {
                numSelected--;
            }

            filterByTag(numSelected)
        };
        if( $(this).hasClass('mob') ) {
            $('.mobile').toggleClass('selected');
            $(this).toggleClass('selected');
            if( $(this).hasClass('selected') ) {
                numSelected++;
            } else {
                numSelected--;
            }

            filterByTag(numSelected)
        };
        
        
        //Reordering
        
    });



    // Hide and show the projects based on tags selected
    // Reference: http://www.w3schools.com/howto/howto_js_filter_table.asp

    function filterByTag(numS) {
        var allProjects = document.getElementsByClassName("proj");

        for(var i = 0; i < allProjects.length; i++) {
            // Test stuff
            console.log(allProjects)
            console.log(allProjects[0])
            console.log($(allProjects).eq(i)["0"])

            if(numS == 0) {
                allProjects[i].style.display = "";
            } else {
                if( $(allProjects).eq(i).hasClass("selected") ) {
                    allProjects[i].style.display = "";
                } else {
                    allProjects[i].style.display = "none";
                }
            }
        } // end for
    } // end filterByTag()






});