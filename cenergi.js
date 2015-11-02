// Javascript document

$(document).ready(function () {
    console.log("ready");


    var seseme = "Eco-feedback has traditionally focused on the provision of information about electricity use of devices to the member(s) of a household, in the form of text or graphics. Recently, applications have extended to include (A) information about other types of resource use behaviors (e.g., water use), (B) the resource use behaviors of communities of inhabitants of both residential and commercial sector buildings, (C) via more creative interfaces that seek to engage consumers (such as public art or games). SESEME (Social Energy Sensing Monument), is a human-scale (4'-7'6\" tall) physical data visualization object that uses networked microcontrollers, motors, and variable-color LED light to communicate energy information to members of the public. When nearby, students with smartphones can access an online interface that allows them to explore energy data and play with the monument, and experimentation with the design of this interface is also a major component of the study. We intend to conduct quantitative and qualitative assessments of the installation\'s effectiveness in engaging students on topics related to energy, particularly yielding insights into the types of energy data students find most engaging and effects of framing data in a story-telling format. <br><br><a href='http://cenergi.github.io/sesemediagram/index.html'>See How it Works</a>";
    var ceed = "We have supported UC Davis Campus Facilities Energy Conservation Office (ECO) in their iterative design of CEED by conducting user testing. For example, in an online experiment with 287 participants, we discovered that single variable energy use data for campus buildings displayed in a map-based format is rated as more interesting, more fun, and even more trustworthy compared to the same data displayed in a traditional bar graph format, while still being comparable in terms of ease of use and interpretation. However, when an additional variable is added to the map visualization it is more difficult for users to interpret than is a traditional bar chart visualization of the same data. <br><br><a href='http://eco.ucdavis.edu/'>Visit the Dashboard</a>";
    var evexplorer = "EV Explorer allows users to compare fuel costs for different vehicles based on their own commuting patterns, charging opportunities, vehicle mileage, and local fuel prices. All these inputs can be adjusted by the user for a tailored estimate of annual fuel costs for up to four user-selected vehicles at a time. Default vehicle comparisons promote consideration of plug-in hybrid electric and fully electric vehicles (PEVs). We evaluated EV Explorer through online experimentation, gauging users’ perceptions—before and after using the website—of their current fuel costs, potential savings with PEVs, attitude toward PEV charging, and intention to buy or lease a PEV in the future. Statistically significant changes in each of these variables validate EV Explorer as an educational tool and a persuasive eco-feedback intervention to promote the adoption of PEVs.<br><br><a href='http://gis.its.ucdavis.edu/evexplorer/'>Explore the Site</a>";
    var thermoostat = 'Feedback is a prevalent strategy to reduce energy use, but much is to be discovered about the utility of feedback strategies for occupants of public buildings. Facilities Management and the Consumer Energy Interfaces Lab at University of California, Davis, investigated feedback strategies to improve the energy efficiency of campus buildings, as well as the thermal comfort and satisfaction of building occupants. Building occupants provide feedback to Facilities (and vice versa) via a web application called TherMOOstat (cow-themed as cows are iconic to Davis), which inquires after users’ thermal comfort, satisfaction with indoor temperatures, and willingness to conserve. Facilities analyzes these data along with indoor and outdoor temperatures and work orders submitted to optimize thermostat settings for greater efficiency and occupant comfort. We have assessed the degree to which this opportunity to communicate directly with Facilities and vote for changes improves occupant satisfaction with indoor temperatures. We are also using TherMOOstat as a platform to systematically test the effectiveness of various persuasive images and messages on occupants’ willingness to conserve, as measured by votes to change thermostat settings in an energy-conservative direction. TherMOOstat is popular, with about 500 responses per month. This concept can be easily adapted by other organizations, where occupants do not have direct control of thermostat settings, to increase energy efficiency, thermal comfort, and occupant satisfaction.';
    var ecofeedback = "Eco-driving has been identified as a promising strategy for reductions in fossil fuel consumption and carbon emissions. In-vehicle feedback has been the predominant intervention used to promote eco-driving. The design and evaluation of in-vehicle eco-driving feedback has been largely devoid of behavioral theory. This paper presents a systematic analysis of a large sample of in-vehicle eco-driving feedback systems. Based on behavioral principles and design theories, we identified attributes of feedback with implications for behavior change. We conducted mixed qualitative and quantitative analyses of feedback streams based on these attributes to create a behaviorally relevant typology of in-vehicle eco-driving feedback. We describe each feedback type and discuss behavioral implications.<br><br><a href='img/Projects/Research/Feedback_Typology_Poster.pdf'>Poster</a>";
    var triptracker = "In the United States, there is an over-dependence on private vehicles for local trips. Recent research suggests half of all trips are only three miles or less. In other words, we drive almost everywhere we need to go, even to the closest destination.  Trip Tracker promotes awareness of the impacts of personal transportation choices--focusing on local trips (less than 3 miles). The app provides consequences of users choice in terms of various metrics (e.g., calories burned, co2 emissions, and fuel usage), builds landscape appreciation, and reinforces users' commitment to change behavior through goal-setting with friends.";
    var obdenergy = "ABSTRACT: This paper describes an eco-driving feedback system, OBDEnergy. Twenty-six drivers described their understanding of environmental impacts of driving before and after using OBDEnergy. Before OBDEnergy, participants discussed impacts in abstract, global terms (pollution, global warming). After OBDEnergy, participants appealed to concrete reference points (gallons of gas, trees required) with calculations and comparisons. We conclude that user-centered eco-driving feedback can contribute to pro-environmental behavior via increased awareness of the concrete environmental impacts of driving.";
    var wvenergy = "West Village (WV) is a mixed use zero net energy (ZNE) development on the campus of University of California, Davis. Four years after initial occupancy, WV has yet to achieve ZNE. Behavioral programs to reduce electricity consumption among residential occupants have met with some success, but no attention has been given to the commercial spaces, which, ironically, are largely composed of offices for energy researchers. This research involves an office energy feedback project at the Plug-in Hybrid & Electric Vehicle (PH&EV) Research Center at WV. The design of the feedback system was informed by a survey and focus group of office occupants. The system consisted of a flag ceremony conducted three times per day, featuring a red or green flag raised outside the office to reflect recent consumption in relation to a ZNE performance goal modeled for the office. The effectiveness of the feedback was evaluated by a follow-up survey and focus group, as well as quantitative analyses of energy consumption before, during, and after the feedback intervention. Statistically significant reduction in average hourly energy consumption was observed during the feedback intervention. The difference did not carry over to a two-week post-feedback period despite substantial reductions in closed hour consumption due to one employee shutting down 6 servers toward the end of the feedback period. The follow-up survey and focus group revealed strong affinity for the feedback system and interesting implications for the design of eco-feedback in the contexts of offices and buildings with renewable on-site energy generation.";
    
    
    
    


    //CHANGE LOGO ON HOVER
    $('#logo').hover(function () {
        console.log("logo hover");
        $('#logo img').attr("src", "img/Logos/logoBanner.png");
    }, function () {
        $('#logo img').attr("src", "img/Logos/logoBanner2.png");

        return false;
    });






//NAME HOVER IN PROJECTS
    $('#projects p img').hover(function () {
        console.log("project bio hover");

        var src = $(this).attr('src');
        // "img/Students/Justin-Woodjack.jpg"
        var tarr = src.split('/');
        // ["img","Students","Justin-Woodjack.jpg"]
        var file = tarr[tarr.length - 1];
        // "Justin-Woodjack.jpg"
        var data = file.split('.')[0];
        // "Justin-Woodjack"
        var names = data.split('-').join(' ');

        console.log(names);

        var lbl = document.createElement('span')
        lbl.className = 'tooltip' //.overlay pos abs
        lbl.style.left = this.offsetLeft
        lbl.textContent = names
        this.parentNode.appendChild(lbl)

        //$('#label').text(names);
        //$('#label').css('visibility', 'visible');

    }, function () {
        //$('#label').css('visibility', 'hidden');
        var removethese = this.parentNode.getElementsByClassName('tooltip')

        for (var i = 0; i < removethese.length; i++) {
            this.parentNode.removeChild(removethese[i])
        }

    }).mousemove(function (e) {
        var mousex = e.pageX + 20; //Get X coordinates
        var mousey = e.pageY + 10; //Get Y coordinates
        $('.tooltip').css({
            top: mousey,
            left: mousex
        })



        return false;
    });


    

//Lightbox for Projects
    $('.lightbox').click(function () {
        $('.backdrop, .box').animate({
            'opacity': '.70'
        }, 100, 'linear');
        $('.box').animate({
            'opacity': '1.00'
        }, 100, 'linear');
        
        $('.backdrop, .box').css('display', 'block');
        
        
        
        //All Research Blurbs Links
        if ( $(this).hasClass('seseme') ) {
            $('.box p').html(seseme);
        }
        else if ( $(this).hasClass('ceed') ) {
            $('.box p').html(ceed);
        }
        else if ( $(this).hasClass('thermoostat') ) {
            $('.box p').html(thermoostat);
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
        else if ( $(this).hasClass('obdenergy') ) {
            $('.box p').html(obdenergy);
        }
        else if ( $(this).hasClass('wvenergy') ) {
            $('.box p').html(wvenergy);
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





});